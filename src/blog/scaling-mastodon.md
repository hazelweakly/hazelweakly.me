---
title: "Scaling Mastodon: The Compendium"
date: 2022-11-27
---

## Notes

This is honestly a very hastily written selection of various snippets, with text extracted, and notes.
No real editing thought was put into this, so I hope it's not too confusing.
This blog post will be kept up to date as I find out more information and publish my findings.

The nginx config used [to proxy to an object storage with a cache](https://stanislas.blog/2018/05/moving-mastodon-media-files-to-wasabi-object-storage/#setting-up-a-nginx-reverse-proxy-with-cache-for-the-bucket)

> These jobs are split into as many tiny jobs as we can manage, because that's how you can make parallelize them best and thus make the most optimal use of hardware and horizontal scaling. But if you've got 10 threads and 22,000 followers, do not be surprised that there are delays. In fact, that is how the need for scaling Sidekiq shows itself: the dreaded backlog.
>
> -- [scaling a mastodon server](https://gist.github.com/Gargron/aa9341a49dc91d5a721019d9e0c9fd11)

note: this is a sidekiq scaling indicator. However, we can't scale sidekiq beyond the database and filesystem allows

> Actually, there are more reasons that the backlog can grow, such as if there's a technical issue causing individual jobs to take longer than they normally would, or getting stuck indefinitely reducing the effective number of threads available for processing
>
> -- [scaling a mastodon server](https://gist.github.com/Gargron/aa9341a49dc91d5a721019d9e0c9fd11)

note: this is very buried but very important. Indicators of sidekiq backlog growing can _also_ be jobs getting stuck. We encountered this with NFS.

note: Hypothesis. We ended up wanting to scale workers up because we were getting a lot of stuck workers due to file system issues. Then when things resolved, we actually had too _many_ workers hitting the database all at once, then we got too much database contention which locked up _those_ workers, leading us to reduce workers, causing a vicious cycle depending on which was misbehaving more, postgres or NFS.

---

> At this point it's worth mentioning that if you want to go further [beyond ~20k users], you'll need to be using object storage (S3 or similar) for user file uploads, or else manually figure out a shared filesystem between all of the machines in your cluster (very likely possible, but probably not worth it compared to even just self-hosting Minio)
>
> -- [scaling a mastodon server](https://gist.github.com/Gargron/aa9341a49dc91d5a721019d9e0c9fd11)

note: we have learned that a shared file system does not actually work unless it is a _local_ shared file system. Sidekiq is too latency sensitive otherwise.

note: the parenthesis gives it away. Nobody running mastodon at scale has ever tried to do it without an object database and we have unwittingly ran into edgecases where scaling advice leads us astray here. Remediation is to move to an object storage solution sooner rather than later.

---

> The DB_POOL variable controls how many database connections a Ruby on Rails process will use. (MAX_THREADS controls this for Puma, the server used in web.)
> In addition, the web service takes a variable called WEB_CONCURRENCY to control how many processes it runs. Similarly, streaming has STREAMING_CLUSTER_NUM to control the number of processes.
>
> The sum of MAX_THREADS times WEB_CONCURRENCY in web, STREAMING_CLUSTER_NUM times DB_POOL in streaming, and all the sidekiq DB_POOL variables, must be less than max_connections in your Postgres config. If it’s more, you’ll experience database contention.
>
> In the example above, assuming the rest of the configuration is default and you have 200 database connections available, I’d set the following:
>
> - web: MAX_THREADS = 10, WEB_CONCURRENCY=3 for 30 connections
> - streaming: STREAMING_CLUSTER_NUM = 3, DB_POOL = 15 for 45 connections
> - sidekiq-default-push-pull: DB_POOL = 25, -c 25 for 25 connections
> - sidekiq-default-pull-push: DB_POOL = 25, -c 25 for 25 connections
> - sidekiq-pull-default-push: DB_POOL = 25, -c 25 for 25 connections
> - sidekiq-push-default-pull: DB_POOL = 25, -c 25 for 25 connections
> - sidekiq-push-scheduler: DB_POOL = 5, -c 5 for 5 connections
> - sidekiq-push-mailers: DB_POOL = 5, -c 5 for 5 connections
>
> For a sum of 185 connections. This means there will be 15 loose database connections for things like migrations and manually connecting to the database to do queries and maintenance.
>
> -- [Scaling Mastodon in the face of an exodus](https://nora.codes/post/scaling-mastodon-in-the-face-of-an-exodus/)

---

> One thing to remember is that there should only be one scheduler in your entire cluster, and it doesn't need many threads (5 is fine). [....] It's just that default is the most important one, with push and ingress being close second. mailers is also important but even just 25 threads will get you very far because the rate of sending e-mails isn't that high.
>
> -- [scaling a mastodon server](https://gist.github.com/Gargron/aa9341a49dc91d5a721019d9e0c9fd11)

note: the ellipsis here is frustrating. There is an entire paragraph that sums up to "you can setup your queues a bunch of ways. Nobody's ever done performance measurements on them lol good luck bro"

note: my personal hypothesis is as follows. Given the math calculation from Nora's blog post, each thread in each process has its own separate database connection. As such, `thread * process` is always the math we need to use for everything. With all of that in mind, we should experience an irrelevant amount of overhead from `sidekiq -q single-queue` (xN) vs `-q q1,q2,q3,q4` (xN). The difference washes out and database connections are not necessarily used more efficiently unless we can somehow use less sidekiq processes.

note: tl;dr, single queue for each service. use systemd service templates. ramp them up as needed. rely entirely on pgbouncer to not cause database contention even though it's fucking ridiculous that we would need to do that.

---

> If you start running out of available Postgres connections (the default is 100) then you may find PgBouncer to be a good solution.
>
> -- <https://docs.joinmastodon.org/admin/scaling/#pgbouncer-why>

note: this implies that nobody actually tries to run past 100 connections without pgbouncer. There's probably a reason for this, annoying as it is.

> When you reach the point where it makes sense to move Postgres to its own physical machine, I recommend maintaining pgBouncer on each machine that wants to connect to it, rather than putting pgBouncer on the same machine as Postgres.
>
> -- [scaling a mastodon server](https://gist.github.com/Gargron/aa9341a49dc91d5a721019d9e0c9fd11)

note: read replicas are suggested to be unneeded even at 128k active users.

---

> At some point you will definitely want Puma to be on a separate machine from Sidekiq, and then have more machines with Puma, and more machines with Sidekiq.
> [...]
> Just don't forget that once your Puma isn't on the same machine as your nginx, you will need to specify TRUSTED_PROXY_IP with the internal IP of the load balancer so that Puma can correctly parse users' IP addresses for stuff like rate limiting.
> [...] use an upstream block in your nginx configuration to list these Pumas and nginx will do the load balancing between them.

note: separate machines with just puma and just sidekiq are what we need to start moving towards.

> The streaming API will get you pretty far on default configuration, but at some point it too will not be able to answer all of the connections.
> [...]
> The moment when this becomes necessary can be difficult to detect, because for people who've already connected, the streaming API will continue to work, it's new connections that will be rejected.

note: we should figure out how to detect this error case. It can explain some of the sporadic issues users have encountered.

---

> you will have to tune nginx by increasing its worker_rlimit_nofile and worker_connections values.

ok kewl, good to remember I suppose.

---

> Mastodon uses Redis. [It supports], SIDEKIQ_REDIS_URL, CACHE_REDIS_URL and just REDIS_URL. (Actually, Mastodon supports REDIS_HOST, REDIS_PORT etc variants separately for all three).
>
> <https://docs.joinmastodon.org/admin/scaling/#redis>

note: redis is used for BOTH volatile cache and persistent data. sidekiq, list feeds, home feeds, and streaming API are all needed to be in persistent redis which shouldn't be lost.

note: This is written as if using a separate redis for cache and persistent data is optional. It is not.

read and weep: <https://github.com/mperham/sidekiq/wiki/Using-Redis#multiple-redis-instances>

---

> One of the most important things we've learned over the years about Sidekiq is that a bad interaction between the C-Ruby runtime and the malloc memory allocator included in Linux's glibc can cause extremely high memory usage. I'll talk about what causes this bad interaction in a later email, but for now, let's just concentrate on the effects.
>
> Sidekiq with high concurrency settings, when running on Linux, can have what looks like a "memory leak". A single Sidekiq process can slowly grow from 256MB of memory usage to 1GB in less than 24 hours. However, rather than a leak, this is actually memory fragmentation.
>
> -- <https://us11.campaign-archive.com/?u=1aa0f43522f6d9ef96d1c5d6f&id=997fbd1c2c>

## Debugging Notes

sidekiq workers being way up will crash nfs and slow it to a crawl.

---

## Summaries

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

Thou shalt not _ever_ fuck up and manage to get more DB connections going than we have in `max_connections` for postgres.
However, thou shalt _also_ keep max_connections as low as fucking possible because absolutely everything in postgres falls over and shits the bed if you start getting hard contention due to trying to have more connections than is allowed.

### Postgres Calculator Math

Here's the calculator math.

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

---

references:

- <https://gist.github.com/Gargron/aa9341a49dc91d5a721019d9e0c9fd11>
- <https://docs.joinmastodon.org/admin/scaling/>
- <https://nora.codes/post/scaling-mastodon-in-the-face-of-an-exodus/>
- <https://gist.github.com/Gargron/40afa9dc37629dfc78d6656f0ca33293>
- <https://blog.joinmastodon.org/2017/04/scaling-mastodon>
- <https://github.com/mperham/sidekiq/wiki/Kubernetes>
- <https://us11.campaign-archive.com/?u=1aa0f43522f6d9ef96d1c5d6f&id=997fbd1c2c>
