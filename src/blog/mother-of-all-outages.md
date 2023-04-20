---
title: "Mother of All Outages"
date: 2023-04-19
---

Y'all ready for a story about one of the wildest ~~fuckups~~ production outages I ever took part in?
Buckle up; we're going for a ride far, far away from any security cameras.

## Setting the Scene

At a previous job we had some fairly intense mismanagement.
No tech debt was ever allowed to be handled.
No good deed was ever unpunished.
No non-white-male person was paid a market salary.

Y'know, the usual.

We had all of our infrastructure set up by one lonely SRE person for years.
Then I came on, and two engineers from other teams joined the SRE team.

Our tech stack for the backend servers?
VMs with Nomad, AWS, and sparkles.
Amazingly cost effective, quite honestly.

Because business, the company had recently gone through a massive round of layoffs;
they were contrite, they were distraught, they were thorough in their assurances to everyone that there wouldn't be any more layoffs.
Naturally, I knew they were lying; I knew it before they did, but I saw it plain as day.

Due to all of *\*gestures\** this, the engineering department scored MASSIVELY badly in happiness.
They were looking at staggeringly terrible end-of-year attrition rates.

> I'm sure this had absolutely nothing to do whatsoever with the encrypted anonymous spreadsheet that "Someone Who Isn't Me" started and spread around the entire engineering org to bring some salary transparency to light.

> The fact that fem presenting people were massively underpaid and that quite a few people living in lower cost of living areas got extremely bad salaries also had nothing to do with this, I'm sure.

Naturally the solution to impending attrition woes was to do nothing. Haha. Business.
**_BIZZ. NIZZ._**

## Drain in the Membrane

About a month before PAIN day, the person who setup all the infrastructure tech... Left.

I totally get it; greener pastures, better pay, less ~~illegal corporate exploitation~~ drama.
Excellent choice, really; who could blame him?
Looking back, I kinda wish I had made the same choice at the time.
But now, behold! I was now the expert in the stack (kind of).

I mean, I wasn't the expert they wanted or needed, but I _was_ "The Person Who Is Currently Here" which is kind of the same thing except for where it's not.

That said, everything continued to work flawlessly for a very very long time until one fateful day (about one month after The Expert left).

> One small side tangent: our nomad servers looked like this
>
> - 3 controller nodes + N worker nodes.
> - The controllers also ran consul and vault.
> - All of the observability infrastructure, integration with AWS, cron jobs, timers, event processing, etc, ran on the nomad worker nodes

## The Fateful Day of PAIN

I get a message from a coworker that our observability stuff is just dead. Completely gone. Can't get it working.

So I looked at the clusters ... Turns out everything was down. Consul just shat the bed, and nothing could reach each other.

"How do we fix it?" they asked.

"Fuck if I know. None of us set it up" I replied, helpfully, like a broken Clippy from a pirated Word install.

However, I did get a debriefing on maintenance, and got to learn some of the quirks of the system.

One was you had to be very careful when restarting the nomad servers, but it was generally fine if you did an expand + cycle + shrink.

So, I made the decision to try that. And here's where I fucked up:

1. I learned later that the expand cycle shrink mentioned by the former coworker was for the *worker* nodes only. (Obvious miscommunication in retrospect)
2. For controllers going from 3 to 4 causes split brain.

The second point was also obvious in retrospect.
I was working in a broken system that nobody understood in a toxic company under pressure from people who never once prioritized doing the right thing or addressing tech debt or, forbid, prevention of issues.
Of course my choices were bad

Long story short: I split brained the cluster and then cycled it. ***WOO!***

This caused a very important thing to happen.

You remember me saying "oh Consul and Vault are also on those nodes"?

When you split the brain, the new nodes don't join a quorum. Thus, state isn't transferred.

... oh _fuck_.

We lost 3 years of secrets, credentials, configurations, etc.  
Some of which didn't exist anywhere else.  
State replication of Consul had never been setup.  
State replication of Vault had never been setup.  
We had no backups of anything and no way to get them back.

✨ Gone ✨

Not only that.
But now *everything* was on fire because the controller nodes were *completely* broken (they were already 90% broken but now they were 100% broken).

Luckily we had infrastructure as code! We can fix this! Right??

No.  
We needed to bootstrap.  
Nothing can help now.

## The Strap and the Boot

I spent the next week, the next weekend, and through into the week after that rebuilding everything and reverse engineering stuff.
I poured over chat lots, buried secrets, git histories, and hidden AWS configs.
We got 90% of it back, but the other stuff was gone forever.

14 days after the incident and nothing had been fixed yet, despite the clusters now having been rebuilt and made fully operational. Why?

***BOOTSTRAPPING***.

We had health checks, crash loops, healthz, all that shit. None of it is ever calibrated from a cold start. You can't.

We had dependency loops, cycles in services, we had missing stuff that wasn't in the code, we had code that had never been run, we had code that was for future use and code that was retroactively added to guess how things were set up.

We got about 25% of everything back up, kind of, sorta; if you squinted, you could see where things were supposed to go, vaguely, that is.

## Pissing on Faces and Pretending it's Rain

Some of this restoration actually took place during an Enginering on-site.
Myself and the one other SRE person left on the team worked during the entire on-site when we were supposed to be having fun;
we dug into logs, poured over services, and attempted to baby things back to life one by one.

Then it was Friday.
What happened that Friday? AWS released Serverless RDS and somehow, our RDS cluster got completely corrupted.
No health checks failed, no alarms went off; pure, silent, deadly corruption.
I had two options: try to fix the database, or restore it from a snapshot.
Normally, this doesn't matter; however, this database was years old, it was ancient, it was one of the first things ever setup.

And restoring from a snapshot means changing the ARN.
But that ARN? It was a string that was hardcoded into almost every piece of infrastructure.
Changing that ARN would take days of pleading with the gods of chaos.
So naturally I tried really fuckin hard to not need to; unfortunately, I lost that battle.

**Monday, 8am PST**, I restored the database from a snapshot.  
**Monday, 9am PST**, people start disappearing from slack.  
**Monday, 9:30am PST**, calendar appointments with HR, the CTO, and CEO, start popping up on calendars of engineers.  
**Monday, 10:00am PST**, people are posting titanic gifs in chats, frantically sending each other email addresses and phone numbers.  
**Monday, 10:30am PST**, we figure out that about 90-95% of the engineering org is going to be laid off.  
**Monday, 11am PST**, I have a meeting with HR and cheerfully explain that they're now spending \$10k a month in idle CI machines, and \$6k a month for an RDS instance that isn't connected to anything.
I helpfully offer that they can call me or The Expert if they need help with repairing the current dumpster fire in the future, and say that we would be more than happy to give our consulting rates if asked.  
**Monday, 12:00pm PST**, my work laptops are wiped remotely.

## The Wailing of Cassandra

Now, fuck-ups happen, incidents happen, that's fine.
Why is this one the Mother of All Outages, for me?
I don't even know; I suppose it's because the whole thing felt so fucking pointless.
The whole damned thing, from beginning to end.
Pointless.
And to lay off _everyone_ with the system broken beyond repair?
To assume that you can keep on limping, wasting slowly away while clinging to the dying embers of a celestial god for eternity?
I, to this day, have never understood the decisions that were made; there were many, but this was by far the least understandable.

It just kills me because I saw this coming. I actually made bets with The Expert about how long it would take for this to happen after he left.
We guessed 2 weeks to 2 months (we were right).
We both underestimated the severity, though. By a *lot*

But we knew it was coming.

The other thing is that the entire thing could've been avoided had we been given time to move our vault over to the managed enterprise vault license.

That.  
We.  
Already.  
Fucking.  
Bought.  
To.  
Prevent.  
This.

## Epilogue

The company severely downsized the engineering org later.
And, from back-channel news, I discovered that almost every engineer that made the cut left soon after.

The observability stack?
Still not working.

But also so is nothing else.

A month or two after that, they re-hired The Expert to bring the system back up;
the consultant fees he charged were nearly the same as his original salary, but for 10% of the hours.
Once he did that and documented it, the company apparently had planned to migrate the system to Kubernetes so that external consultants could maintain it.
As far as I know, this was never completed.

To this day, The Expert occasionally consults for them here and there, reaping the ghosts of horrors past.

No one really seemed to do the math and realize that this cost the company more than what they saved by laying off 90% of their engineers.
Having never once learned their lessons, they weren't about to start now, I suppose.
