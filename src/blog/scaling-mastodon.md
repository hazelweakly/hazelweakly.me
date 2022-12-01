---
title: "Scaling Mastodon: The Compendium"
date: 2022-11-27
---

This is honestly a very hastily written selection of various snippets, with text extracted, and notes.
No real editing thought was put into this, so I hope it's not too confusing.
This blog post will be kept up to date as I find out more information and publish my findings.

It's currently organized in no particular order with a bunch of micro fragment thoughts split out in a row.

---

## Nginx

### Nginx config for object storage

The nginx config used [to proxy to an object storage with a cache][wasabi]

---

> you will have to tune nginx by increasing its `worker_rlimit_nofile` and `worker_connections` values.
>
> -- [scaling a mastodon server][scaling_gist]

ok kewl, good to remember I suppose.

You may also need to remediate <https://github.com/mastodon/mastodon/pull/21840> via setting your response timeout to 300s in nginx instead of 30 or even 60s.

## Postgres

### The Sobbing SysAdmin's Guide to Postgres Tuning

> IF THE MASTODON INSTANCE BANS ME FOR FUCKING UP THE HARD DRIVE I WILL FACE GOD AND WALK BACKWARDS INTO HELL
>
> -- postgres

There are a few rules of tuning postgres: The first is that you have to do it. The second is that nobody knows how to do it.

Now that we know the rules, let's go forth and explain how to deal with `max_connections` specifically.
This section is gonna be written as if I know what I am talking about but please be assured that I most certainly do not.

A rule of thumb for rails and postgres: Thou shalt not _ever_ fuck up and manage to get more DB connections going than we have in `max_connections` for postgres.
However, thou shalt _also_ keep max_connections as low as fucking possible because absolutely everything in postgres falls over and shits the bed if you start getting hard contention due to trying to have more connections than is allowed.

In this case postgres won't literally shit the bed, but your sidekiq queues will be unable to connect to postgres until you're below `max_connections` again.
"Oh that's fine" says the clueless person. "I will just set `max_connections` to above 9000" says the fool.

New rule of thumb: If you have to set postgres `max_connections` to above 250, don't.

Why? Well, why do you need that many? You probably don't and adding more will cause latent system instability later on.
What can be the case for us is that, to the best of my understanding, there's a few things going on.

Here's what I think we keep running into:

1. a mastodon sysadmin says "oh wow the sidekiq queues are slow, we need to add more workers"
2. this adds more connections to postgres, which [degrades performance slightly][postgres_connections]
3. postgres starts "doing more IO"
4. performance counterintuitively goes down because queries start taking longer
5. `GOTO 10`

At some point you're going to run out of `max_connections`.
If you raise it to an absurd number like above 1024, the _next_ issue you're probably going to run into is that your storage system probably can't actually handle the IO demands you're placing on it.

Here's what the above sequence looks like from the system's point of view:

1. just _having_ connections will slowly cause more and more slowdown over time
2. Which means more of those connections will slowly become active as things take longer and longer
3. More active connections hammers the IO _way_ harder
4. Which slows things down
5. \*the server sobbing\* "please please im already dying"

So what number do you actually want to set it to?
Luckily, [this postgres tuning guide][postgres_tuning] has a "helpful" formula that explains how to find an ideal limit:

```
max_connections < max(num_cores, parallel_io_limit) /
                  (session_busy_ratio * avg_parallelism)
```

So clearly, don't set your postgres `max_connections` to anything more than \*insert magic numbers\*.  
OBVIOUSLY.  
EASY.

Ever tried to figure out the performance characteristics and "average parallelism" of a rails application?

**AN ERRAND FOR FOOLS WHO DRINK THE MILK OF INNOCENCE.**

If you use a db pool like `pgbouncer` you get to conveniently avoid this most of the time by naturally not really needing to set postgresql connections beyond 500-ish.
However, _why_ you need to do so is never really explained.
So here's the explanation: because any value of `max_connections` over 999 will cause your children will be devoured by Australian evil spirits.

---

### `DB_POOL` notes from Nora's blog

> The `DB_POOL` variable controls how many database connections a Ruby on Rails process will use. (`MAX_THREADS` controls this for Puma, the server used in web.)
> In addition, the web service takes a variable called `WEB_CONCURRENCY` to control how many processes it runs. Similarly, streaming has `STREAMING_CLUSTER_NUM` to control the number of processes.
>
> The sum of `MAX_THREADS` times `WEB_CONCURRENCY` in web, `STREAMING_CLUSTER_NUM` times `DB_POOL` in streaming, and all the sidekiq `DB_POOL` variables, must be less than `max_connections` in your Postgres config. If it’s more, you’ll experience database contention.
>
> In the example above, assuming the rest of the configuration is default and you have 200 database connections available, I’d set the following:
>
> - web: `MAX_THREADS = 10`, `WEB_CONCURRENCY=3` for 30 connections
> - streaming: `STREAMING_CLUSTER_NUM = 3`, `DB_POOL = 15` for 45 connections
> - sidekiq-default-push-pull: `DB_POOL = 25`, `-c 25` for 25 connections
> - sidekiq-default-pull-push: `DB_POOL = 25`, `-c 25` for 25 connections
> - sidekiq-pull-default-push: `DB_POOL = 25`, `-c 25` for 25 connections
> - sidekiq-push-default-pull: `DB_POOL = 25`, `-c 25` for 25 connections
> - sidekiq-push-scheduler: `DB_POOL = 5`, `-c 5` for 5 connections
> - sidekiq-push-mailers: `DB_POOL = 5`, `-c 5` for 5 connections
>
> For a sum of 185 connections. This means there will be 15 loose database connections for things like migrations and manually connecting to the database to do queries and maintenance.
>
> -- [Scaling Mastodon in the face of an exodus][exodus]

---

### When to pgbouncer

> If you start running out of available Postgres connections (the default is 100) then you may find PgBouncer to be a good solution.
>
> -- [why pgbouncer][pgbouncer_why]

note: this implies that nobody actually tries to run past 100 connections without pgbouncer. There's probably a reason for this, annoying as it is. (Ruby + `activerecord` in particular seems to be quite prone to doing blocking IO inside a database transaction cause why not).

> When you reach the point where it makes sense to move Postgres to its own physical machine, I recommend maintaining pgBouncer on each machine that wants to connect to it, rather than putting pgBouncer on the same machine as Postgres.
>
> -- [scaling a mastodon server][scaling_gist]

note: read replicas are suggested to be unneeded even at 128k active users.

---

### Postgres Calculator Math

Here's the calculator math that I've ~~stolen from [nora](https://nora.codes/)~~ come up with.

Let's assume the following systemd services (annotated with every setting that causes a connection to postgres).
The `@Nx` here denotes a systemd unit template file where `N` is the number of units you've started that correspond to this sidekiq queue.
There are also several `DB_POOL` variables. Since they are _all_ different yet called the same environment variable, I am changing them to be unique here so that it makes sense in a calculation formula.

So, here's the list of services:

- `mastodon-web`
  - `WEB_CONCURRENCY`
  - `MAX_THREADS`
- `mastodon-streaming`
  - `STREAMING_CLUSTER_NUM`
  - `DB_POOL_streaming`
- `mastodon-sidekiq-push@N1`
  - `DB_POOL_push`
- `mastodon-sidekiq-pull@N2`
  - `DB_POOL_pull`
- `mastodon-sidekiq-scheduler@N3`
  - `DB_POOL_scheduler`
  - note: you should _never_ have more than one scheduler running, however you may set `DB_POOL` and concurrency to whatever you want it to be.
- `mastodon-sidekiq-mailing@N4`
  - `DB_POOL_mailing`
- `mastodon-sidekiq-default@N5`
  - `DB_POOL_default`
- `mastodon-sidekiq-ingress@N6`
  - `DB_POOL_ingress`

And, of course, you're running postgres somewhere.
Postgres has a `max_connections` set in its configuration somewhere.

The formula for total connections is:

```
total_mastodon_connections =
  (WEB_CONCURRENCY * MAX_THREADS) +
  (STREAMING_CLUSTER_NUM * DB_POOL_streaming) +
  (N1 * DB_POOL_push) +
  (N2 * DB_POOL_pull) +
  (N3 * DB_POOL_scheduler) +
  (N4 * DB_POOL_mailing) +
  (N5 * DB_POOL_default) +
  (N6 * DB_POOL_ingress)
```

Now, if this number is over `max_connections` in your postgres configuration, you lost.
In fact, if this number is more than 90% of `max_connections`, you're probably much closer to IMPENDING DOOM than you would ever feel comfortable in public.

Last miscellaneous note: you want postgresql behind a proxy even if it's on a single node.
It's just too liable to be painful otherwise.
Have to stop all clients to get the database back online.

---

### Bouncey Bouncy Bounce Bounce Bounce

> PgBouncer is a single-threaded process which means it only uses a single CPU. [...]
>
> In general, a single PgBouncer can process up to 10,000 connections. 1,000 or
> so can be active at one time. [...]
>
> Adjusting connection counts may also require you to adjust some system limits
> to allow PgBouncer to utilize the number of sockets required [...]
>
> -- [postgres at scale][multi_pgbouncer]

When do you need more than one pgbouncer?

> - PgBouncer’s CPU usage is 100%.
> - Application queries through PgBouncer wait times increase while Postgres itself is not similarly loaded.
>
> -- [postgres at scale][multi_pgbouncer]

Likely causes are pgbouncer can't keep up with number of connections to the database, or the size of result set being returned is too much.

How to test: Run this on the postgres database.

```sql
select state, count(*)
from pg_stat_activity
where backend_type = 'client backend'
group by 1;
```

If your idle connections is zero pgbouncer is bottlenecked.

---

### SELECT 'bottle' FROM 'neck' WHERE id = unknown

If you want to find some bottlenecks in your database, according to [@AndresFreundTec@mastodon.social](https://mastodon.social/@AndresFreundTec),
you can run the below query and analyze its output as a starting point.

```sql
SELECT backend_type, state, wait_event_type, wait_event, count(*) FROM pg_stat_activity WHERE pid <> pg_backend_pid() AND wait_event_type IS DISTINCT FROM 'Activity' GROUP BY 1, 2, 3, 4 ORDER BY count(*) DESC;
```

If you're write latency bound the query will show a lot of `WALWrite` wait events.

Setting `synchronous_commit = off` can alleviate that (although understand roughly what it's doing first).
[Here's a nice explainer](https://www.percona.com/blog/2020/08/21/postgresql-synchronous_commit-options-and-synchronous-standby-replication/)

One particular warning, also from @AndresFreundTec, is that setting `synchronous_commit = off` means your transactions aren't immediately guaranteed to be durable.
That... Should be fine for Mastodon... I think

---

### Memory X Memory the not-anime

> Database tip: if you need to increase `max_connections` on PostgreSQL, make sure
> to check what `work_mem` is set to. If `max_connections X work_mem` is more than
> double the RAM you have on the server, maybe lower `work_mem`.
>
> -- [@fuzzychef@m6n.io](https://m6n.io/@fuzzychef/109366609465907548)

## Redis

### Lies, damned lies, and redis

> Mastodon uses Redis. [It supports], `SIDEKIQ_REDIS_URL`, `CACHE_REDIS_URL` and just `REDIS_URL`. (Actually, Mastodon supports `REDIS_HOST`, `REDIS_PORT` etc variants separately for all three).
>
> -- [mastodon scaling docs for redis][scaling_docs]

note: redis is used for BOTH volatile cache and persistent data. sidekiq, list feeds, home feeds, and streaming API are all needed to be in persistent redis which shouldn't be lost.

note: This is written as if using a separate redis for cache and persistent data is optional. It is not.

[read and weep][redis_wiki].

> [...] it's important that Sidekiq be run against a Redis instance that is not
> configured as a cache but as a persistent store. [...] I recommend using two
> separate Redis instances, each configured appropriately, if you wish to use
> Redis for caching and Sidekiq. Redis namespaces do not allow for this
> configuration and come with [many other problems][storing_data_with_redis], so using discrete Redis
> instances is always preferred.

Speaking of which, the blog post that was linked from the redis wiki is very nice.
You should read it: [storing data with redis][storing_data_with_redis].

This one is also potentially useful. [performance tuning for redis][perf_tune_redis]

---

### How to redis correctly

So, from the [storing data with redis][storing_data_with_redis] post:

> There are several questions to answer when determining how to use Redis for different datasets:
>
> - Can I flush the dataset without affecting other datasets?
> - Can I tune the persistence strategy per dataset? For transactional data, you want real-time persistence with AOF. For cache, you want infrequent RDB snapshots or no persistence at all.
> - Can I scale Redis per dataset? Redis is single-threaded [...] Datasets in the same Redis instance will share that budget. What happens when your traffic spikes and the cache data uses the entire budget? Now your job queue slows to a crawl.

The conclusions are that, for mastodon's two needs (cache + storage), you _must_ use two separate redis instances or you're not going to be able to actually change your persistence strategy.
Everything else is practically irrelevant; if you can't change the persistence strategy, there's no point in using redis for both usecases.

> Redis itself can be scaled using either Redis Sentinel or Redis Cluster.
>
> For Sidekiq, only the Sentinel option is viable, as Sidekiq uses a small
> number of frequently updated keys. With Sentinel, we get fail-over, but we
> won't increase the server's throughput.
>
> For the home feed caches, we might use Redis Cluster, which will distribute
> the many cache keyes across available nodes.
>
> [the architecture of mastodon][taom]

## Storage

### Object Storage

> At this point it's worth mentioning that if you want to go further [beyond ~20k users], you'll need to be using object storage (S3 or similar) for user file uploads, or else manually figure out a shared filesystem between all of the machines in your cluster (very likely possible, but probably not worth it compared to even just self-hosting Minio)
>
> -- [scaling a mastodon server][scaling_gist]

note: we have learned that a shared file system does not actually work unless it is a _local_ shared file system. Sidekiq is too latency sensitive otherwise.

note: the parenthesis gives it away. Nobody running mastodon at scale has ever tried to do it without an object database and we have unwittingly ran into edgecases where scaling advice leads us astray here. Remediation is to move to an object storage solution sooner rather than later.

---

### NFS: No FUCKING Scale

That's it, that's the ~~tweet~~ toot.

Don't use NFS for anything; the mastodon documentation claims you can use it. You cannot. Don't even think about it.
Run an object storage locally if you have to; it's simpler now with projects like seaweedfs and a very good idea.

## Sidekiq and Ruby

### Sidekiq scaling indications

> These jobs are split into as many tiny jobs as we can manage, because that's how you can make parallelize them best and thus make the most optimal use of hardware and horizontal scaling. But if you've got 10 threads and 22,000 followers, do not be surprised that there are delays. In fact, that is how the need for scaling Sidekiq shows itself: the dreaded backlog.
>
> -- [scaling a mastodon server][scaling_gist]

note: this is a sidekiq scaling indicator. However, we can't scale sidekiq beyond the database and filesystem allows

> Actually, there are more reasons that the backlog can grow, such as if there's a technical issue causing individual jobs to take longer than they normally would, or getting stuck indefinitely reducing the effective number of threads available for processing
>
> -- [scaling a mastodon server][scaling_gist]

note: this is very buried but very important. Indicators of sidekiq backlog growing can _also_ be jobs getting stuck. We encountered this with NFS.

note: Hypothesis. We ended up wanting to scale workers up because we were getting a lot of stuck workers due to file system issues. Then when things resolved, we actually had too _many_ workers hitting the database all at once, then we got too much database contention which locked up _those_ workers, leading us to reduce workers, causing a vicious cycle depending on which was misbehaving more, postgres or NFS.

---

### Sidekiq queues and how they hate you

> One thing to remember is that there should only be one scheduler in your entire cluster, and it doesn't need many threads (5 is fine). [....] It's just that default is the most important one, with push and ingress being close second. mailers is also important but even just 25 threads will get you very far because the rate of sending e-mails isn't that high.
>
> -- [scaling a mastodon server][scaling_gist]

note: the ellipsis here is frustrating. There is an entire paragraph that sums up to "you can setup your queues a bunch of ways. Nobody's ever done performance measurements on them lol good luck bro"

note: my personal hypothesis is as follows. Given the math calculation from Nora's blog post, each thread in each process has its own separate database connection. As such, `thread * process` is always the math we need to use for everything. With all of that in mind, we should experience an irrelevant amount of overhead from `sidekiq -q single-queue` (`xN`) vs `-q q1,q2,q3,q4` (`xN`). The difference washes out and database connections are not necessarily used more efficiently unless we can somehow use less sidekiq processes.

I fleshed this math out more in the [postgres math section](#postgres-calculator-math)

note: tl;dr, single queue for each service. use systemd service templates. ramp them up as needed. rely entirely on pgbouncer to not cause database contention even though it's fucking ridiculous that we would need to do that.

---

### Sidekiq memory fragmentation

> One of the most important things we've learned over the years about Sidekiq is that a bad interaction between the C-Ruby runtime and the malloc memory allocator included in Linux's glibc can cause extremely high memory usage. I'll talk about what causes this bad interaction in a later email, but for now, let's just concentrate on the effects.
>
> Sidekiq with high concurrency settings, when running on Linux, can have what looks like a "memory leak". A single Sidekiq process can slowly grow from 256MB of memory usage to 1GB in less than 24 hours. However, rather than a leak, this is actually memory fragmentation.
>
> -- [wisdom of the ancients from a mailing list][email]

---

### Locks That Bind and Binds that Lock

Rails effectively does this

1. Start db transaction
2. Upload image to media storage
3. INSERT or UPDATE statement
4. Commit the transaction

Let's walk through the implications of this briefly. But first, go ahead and scream into the void; it'll be helpful.

Now wasn't that refreshing?

Ok, so the implications here:

- If your media storage is the file system, you can hit the file system with the database _and_ the media storage at the same time.
- If your file system is the _same_ file system you can cause slowdowns on that disk from two separate directions that are both now mutually related.
- If that file system is NFS, now the network is involved _inside_ that database transaction
- Oh also this is in sidekiq so it's all parallel and concurrent

The lesson here is use an object storage from day one if you can.
Preferably one that doesn't live on the same disk as postgres.
NFS in particular is going to be a _very_ poor choice here.
It's bad enough that, honestly, mastodon documentation should warn against using it rather than presenting it as an option.

---

### mastodon-web and mastodon-streaming

> At some point you will definitely want Puma to be on a separate machine from Sidekiq, and then have more machines with Puma, and more machines with Sidekiq.
> [...]
> Just don't forget that once your Puma isn't on the same machine as your nginx, you will need to specify `TRUSTED_PROXY_IP` with the internal IP of the load balancer so that Puma can correctly parse users' IP addresses for stuff like rate limiting.
> [...] use an upstream block in your nginx configuration to list these Pumas and nginx will do the load balancing between them.

note: separate machines with just puma and just sidekiq are what we need to start moving towards.

> The streaming API will get you pretty far on default configuration, but at some point it too will not be able to answer all of the connections.
> [...]
> The moment when this becomes necessary can be difficult to detect, because for people who've already connected, the streaming API will continue to work, it's new connections that will be rejected.
>
> -- [scaling a mastodon server][scaling_gist]

---

### You can read me but you'll never clock me

> Note, however, that the Sidekiq jobs will need to perform both reads & writes
> from the main node, hence the scaled-up [read only replicas] are only for the other
> clients (web, mobile, streaming).
>
> [the architecture of mastodon][taom]

---

### Sidekiq cool triq

Your sidekiq command in a systemd service should look a little different than most guidelines actually show.

The most important things are using systemd templates and structuring the sidekiq start command to only have one queue.
Here's a truncated example of a pull queue sidekiq:

```systemd
# mastodon-sidekiq-pull@.service
[Unit]
Description=mastodon-sidekiq-pull
After=network.target

[Service]
Type=simple
User=mastodon
# ... snip
Environment="DB_POOL=20"
ExecStart=/usr/bin/bundle exec sidekiq -c 20 -q pull
# ... snip
```

A few numbers:

- `DB_POOL` and the `-c NN` number need to match up. They don't _have_ to, but... they should.
- **ONLY ONE QUEUE IN THE SYSTEMD SERVICE**

Here's why.

This starts one process and creates 20 connections to the database.
The overhead between this vs 2 systemd units with 10 threads is basically zero.
There are reasons to do it (concurrency vs parallelism and ruby has a GIL which limits parallelism capabilities), but DB connection number is the same.
So, realistically, there's almost zero downside to having more systemd services.

BUT. You get the ability to log out various sidekiq queues and quickly narrow down which one is erroring.
You also get the ability to scale up an individual queue better on demand.
Keep the `c` number smaller (no more than 25) and make more as needed, it's fine.
That's why these are systemd templates.

---

### Ruby Knobs

```
WEB_CONCURRENCY controls the number of worker processes
MAX_THREADS controls the number of threads per process
```

Those above environment variables apply to mastodon-web and _only_ mastodon-web.
The sidekiq queue has two knobs: processes and threads.
Each `mastodon-sidekiq-${queue}@N` creates 1 new process. Each process can allocate `X` threads according to the `-c X` setting in the ExecStart of the systemd service.

As a further annoyance, `DB_POOL` is the third hidden and extremely fucked up knob you have for the sidekiq services.
`DB_POOL` can be different from the concurrency but it should always be `DB_POOL >= X` (where `X` is the concurrency in `sidekiq -c X -q ...`).
As a simplification, I don't really ever see anyone ever set `DB_POOL` to anything other than exactly `X`.

So, `DB_POOL` is local to sidekiq and also applies only to sidekiq (and also mastodon-streaming because surprise! Chuckles, that's why).
However, you have two notions of pool here. One that's local to that particular sidekiq queue, and one that's relevant to postgres.
Postgres has a setting `max_connections` that is the global `max_connections`.

---

### Crawling Up the Elephant's Trunk

What's going on _in_ there? Where do duplicate queues come from? How does that get resolved?
Some helpful people on discord have given me some clues :)

> Mastodon does a series of operations synchronously, but none of them are
> atomic. one of those operations is setting the deduplication key, another one
> is creating a local db entry, another one is scheduling a background task to
> blast out the post to all the instances you have followers on
>
> [@untitaker@hachyderm.io](https://hachyderm.io/@untitaker)

In theory, these are atomic, but none of them are atomic, so every single step has the ability to cause duplications and errors.

The order of operations here is (thanks [@unlambda@hachyderm.io](https://hachyderm.io/@unlambda)):

1. Check deduplication key
2. Write status to db
3. Process tags and update tag tables (in separate transaction)
4. Process mentions and update mention stats (in a separate transaction)
5. Schedule background jobs
6. Do some updates to tables which indicate "potential friendships" (mastodon will suggest people that you might want to follow based on who you have replied to)
7. Set deduplication key in redis

This will cause issues in several scenarios, but the following scenario is the one you'll notice if your DB is overloaded:

1. You have a large backlog of DB transactions and it takes a while
2. Everything works, but nginx gives up after 60 seconds
3. However rails does not cancel the request and continues to process it
4. The app/webserver/etc retries after getting a timeout indication
   - repeat until the app stops retrying

The summary here is that there's a hidden component to scaling here:

- Your server API response should not be shorter than the connection timeout
- If it is you'll add a bunch of duplication work for yourself and exacerbate the issue

---

### Eating RCE and porridge for breakfast

Are you seeing a lot of `Mastodon::RaceConditionError`s in your logs for sidekiq?

According to [this issue](https://github.com/mastodon/mastodon/issues/15525#issuecomment-898671270) that might be totally expected.

This _particular_ issue has been fixed:

> I am constantly getting this as well, and from what I can tell it's because
> the retry timeout for RedisLock is set to a default of 10 seconds while the
> default expiration time for RedisLock is 15 minutes, per #16291
>
> When called from ActivityPub::Activity::Announce this causes Sidekiq to retry
> until its timeout and then throw Mastodon::RaceConditionError which causes
> another Sidekiq retry.

But only by making the timeout and expiration the same, 15 minutes.
The issue itself still remains and you will run into it if your sidekiq queue
times ever go above 15 minutes.

## references

- <https://gist.github.com/Gargron/aa9341a49dc91d5a721019d9e0c9fd11>
- <https://docs.joinmastodon.org/admin/scaling/>
- <https://nora.codes/post/scaling-mastodon-in-the-face-of-an-exodus/>
- <https://gist.github.com/Gargron/40afa9dc37629dfc78d6656f0ca33293>
- <https://blog.joinmastodon.org/2017/04/scaling-mastodon>
- <https://github.com/mperham/sidekiq/wiki/Kubernetes>
- <https://us11.campaign-archive.com/?u=1aa0f43522f6d9ef96d1c5d6f&id=997fbd1c2c>
- <https://github.com/mperham/sidekiq/wiki/Using-Redis#multiple-redis-instances>
- <https://pgtune.leopard.in.ua/>
- <https://www.percona.com/blog/2020/08/21/postgresql-synchronous_commit-options-and-synchronous-standby-replication/>

[wasabi]: https://stanislas.blog/2018/05/moving-mastodon-media-files-to-wasabi-object-storage/#setting-up-a-nginx-reverse-proxy-with-cache-for-the-bucket
[scaling_gist]: https://gist.github.com/Gargron/aa9341a49dc91d5a721019d9e0c9fd11
[exodus]: https://nora.codes/post/scaling-mastodon-in-the-face-of-an-exodus/
[pgbouncer_why]: https://docs.joinmastodon.org/admin/scaling/#pgbouncer-why
[scaling_docs]: https://docs.joinmastodon.org/admin/scaling/#redis
[redis_wiki]: https://github.com/mperham/sidekiq/wiki/Using-Redis#multiple-redis-instances
[email]: https://us11.campaign-archive.com/?u=1aa0f43522f6d9ef96d1c5d6f&id=997fbd1c2c
[storing_data_with_redis]: https://www.mikeperham.com/2015/09/24/storing-data-with-redis
[postgres_connections]: https://brandur.org/postgres-connections
[postgres_tuning]: https://www.cybertec-postgresql.com/en/tuning-max_connections-in-postgresql/
[sqlite_is_nice]: https://blog.wesleyac.com/posts/consider-sqlite
[multi_pgbouncer]: https://www.crunchydata.com/blog/postgres-at-scale-running-multiple-pgbouncers
[taom]: https://softwaremill.com/the-architecture-of-mastodon/
[perf_tune_redis]: https://severalnines.com/blog/performance-tuning-redis/
