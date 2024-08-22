---
title: "Pick Your Distributed Poison"
date: 2024-06-20
---

One of the hardest things for people to understand with distributed systems is that eventual consistency is the same thing as eventual inconsistency.
The very same pattern that lets you non atomically deal with things also ensures that eventually you'll have a system that doesn't match your understanding.
Resources will go stale, things will go missing, stuff will exist without ever having been created, and data will be destroyed that never got manifested.

> "How do you prevent this?"

You don't.
You figure out what flavor of wrong you want and what type of inconsistency is tolerable to you and you embrace the suffering and learn to mitigate the particularly painful outliers that bite you.

Is bootstrapping your worst enemy?
Regularly destroy and recreate the system to ensure no cycles exist in it.
Of course, that means it will inevitably incur emergent instability and resource leaks.
What's your preference?

> "I know! I'll keep a fresh system around and recreate it to ensure no cycles, and I'll keep an old one around to ensure no long term leaks exist"

Okay, suit yourself.
I see you enjoy the wonders of non-deterministic metastability that comes from adaptive concurrency controls.
Oh, you don't?
So you have hard isolation between the two systems?
I see.
That gets you non-deterministic metastability but without needing adaptive concurrency controls.
Fascinating innit?

Dangling, stale, metastable, zombie.
That only touches the very surface.

- "This system only restarts with warmed caches"
- "This system can't be rebooted and scaled up at the same time"
- "This system can do anything except be highly available during updates"
- "This system can only be restarted in topo-sort order"
- "This system has a deadlock if you drain it geographically from east to west during daylight savings time"

Pick your choice of madness, but don't pretend you won't be drinking it dry.

My poison?
I prefer reproducible and bootstrappable systems.
That's my thing.
I want cold caches, constant work, and young state.
It minimizes, for me, the amount of things I need to keep in working memory.

Of course, I pay the price: I lose the ability to detect leaks, stale references, clean shutdowns, and long lived properties.
I also lose out on emergent performance, large amount of adaptability, and entire methodologies of systems safety.
Living in ground zero means I never touch the sky

Reproducible and bootstrappable systems get a lot of love among neurodivergent people.
For good reason: they're very friendly to those with little working memory but vast amounts of working context They're harder to reason about, though, funnily enough.
The path to running is never the same as the running loop.

For all my love of liveness and safety properties when it comes to reasoning about systems, I ironically build ones that rely as little on them as possible.

But, I'll take my poison.
Neat, if you please.
I prefer to sip it slowly and savor the madness within.
