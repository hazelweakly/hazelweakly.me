---
title: "Scale Down to Scale Up"
date: 2024-02-19
description: >-
  "If your service can't be run on a laptop, your service doesn't deserve to be ran in a cluster" - Marilyn Monroe
---

_I am normally nuanced and full of empathy for differing perspectives; I try very hard to present things in a balanced way and to steer away from inflamatory nonsense that doesn't actually result in making things better._
_However, this is a rant, because I am having feelings, and those feelings are going to be feel'd._

---

> "If your service can't be run on a laptop, your service doesn't deserve to be ran in a cluster" - Marilyn Monroe

I would give my kingdom for an engineering culture in which people figured out how to build good _primitives_ and _protocols_.
Things that can scale down as well as scale up.
Instead we have this weird middle ground.
One thing that's wild to me is that we've gotten fairly solid at building distributed systems that are resilient, workable, and fairly decently designed...
As soon as they hit a certain amount of scale, and only then.

So much shit out there just gets slapped together with every single cloud scale mega-cluster service and tool like its a limited edition box of candies that's going out of stock
Consequently... Things work on a 40 node stateful cluster just fine.
But you're absolutely fucked if you ever want to run something ephemerally, "restart" anything, or even just sensibly provide something as a service for other people to run.
Why in the absolute fuck did we write ourselves into a corner as an industry where "oh sorry minimum specs are 187 vCPU, 4TB of ram, 20TB of disks" seen as something sensible instead of absolutely ludicrous beyond belief?

Ok, ok, yeah yeah, high availability and whatever.
But _also_... Have you seen how highly available a single fucking binary running on a single fucking computer can be?
Have you seen the performance specs of sqlite?
I'm reminded of that [one paper from like 2010 or so](http://www.frankmcsherry.org/graph/scalability/cost/2015/01/15/COST.html) when a researcher showed that a single threaded binary could outperform many 100 core clusters because they were so poorly designed to scale _down_ at all.
Did we learn nothing from that? Anything? Anything at all??

I'm all for highly distributed systems, I love them; I'm all for correctness, and resilience, and so many other fun things.
That's my bread and butter.

But **SERIOUSLY**.
How the fuck is it that we ended up with this absolutely bimodal nonsense of "one single static binary of goodiness" vs "500,000 node compute cluster of goodiness" and this absolutely hellish quagmire of disgusting bullshit in the middle?
You know what kubernetes is? Do you know what it is? It's 20 while true loops in a trench coat pretending to be a control plane.
And that's fine!

But somehow, somehow, the only fucking way you can run that thing is to shell out to a CSP and have them manage your control plane because absolutely nobody has ever figured out how to make it run reliably in bootstrap or less-than-5000,000-node-scale as a commodity.
We've spent 800x more energy on service meshes than _actually getting good at running it_.
The fuck?

What have you seen lately that's good at scaling down _and_ scaling up?
Have you seen anything that's a delight to operate at every scale?
I'm not convinced we even know what that looks like let alone how to build it
