---
title: "The Overloaded Output Cliff"
date: 2023-12-15
tags: [note]
---

There's this thing about group work which is really interesting and somewhat hard to quantify, but it's something I've been spending a lot of effort fixing in my team lately.

It's the fact that there's this curious thing that happens to a teams output when they get too overloaded: it goes to zero.
You might think they could continue to make _some_ progress, but no, it really does go to zero if the overload is bad enough.
I'm not quite sure all of the reasons behind it, although I can guess at quite a few of them.

My first thought is that while one might naively assume you could continue to make a linear amount of output and just grow an infinite queue of work, that won't actually happen because the management of the queue in of itself is also work.
Consequently, eventually your entire teams output will be taken up by the work required to merely _acknowledge_ that they have too much work to do.
Ironic, innit?

In addition to acknowledging the work, there's understanding, planning, (re)prioritizing, and communicating.

Which, by the way, is just as important to do on a infrastructure team as it is on a product team.
It's not just "I write IaC".
You're writing it _for_ someone _in_ a certain context.
That requires real planning and strong communication skills.

If anything, it's even more important because your work enables other work, and the more indirect work is, the harder it is to get right.
Which is to say, fixing overload on a team is very difficult.

A pattern I've noticed is that in software engineering, the simplicity of a problem, it's solution, and the implementation, are all roughly correlated.
But in people engineering, they're not; if a solution is simple, it often means the problem is much harder to define and the implementation is much harder still (because implementation requires understanding the problem).

As an example, for overload the solution is straightforward: have less work per engineer.
Naturally, because the solution is so straightforward, the problem is very difficult to define and the implementation of the solution takes quite a bit of effort to execute successfully.

That said, in my experience, the general blueprint for this type of problem is actually pretty consistent:

1. Figure out _your_ perception of X
2. Figure out _everyone else's_ perception of X
3. Do alignment work until 1 and 2 are as similar as they can be
   - Let's just pretend that this bullet point isn't hiding 5 PhD's worth of learning and decades of experience to get good at, mmkay?

Start with X being "the problem", then "the solution", then "the implementation".
Oh! But don't forget you're probably going to have to continually repeat the process for all three of those throughout the entire time you're doing this, because doing alignment work on one will often necessitate revisiting the other.
And don't forget that "everyone else" is actually several different people, all with their own alignment work required.
They might even be on your team!

There's also like 37 other things.
Don't forget those.
You can't tell what they are until after you forget them, though.

But other than that it's fairly straightforward (I say, my voice dripping with mild sarcasm).
