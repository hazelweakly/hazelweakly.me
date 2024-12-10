---
title: "BPaC: Best Practices As Code"
date: 2024-02-25
tags: [rant]
---

Infrastructure as code is great and all, but why is it that we've completely failed as an industry when it comes to best practices as code?

Seriously, try and learn anything about infrastructure on the internet, or building a web app, or literally any fucking thing whatsoever about software. What are you going to see?

> "**WARNING:** Simple example demo application, do not use in production, this code is garbage and you should feel garbage for reading it. may the gods have mercy because your lawyers wi..."

I mean... Really? That's the best we can do?

If I look at the incentives of the industry as what we do and what we make easy, it'd honestly be hilarious if it wasn't so sad.
We've made it ONE CLICK BUTTON levels of easy to build a hello world website, to spend millions of dollars in AWS, to allow hackers to wipe your bank accounts, and to configure everything for maximum inaccessibility, maximum tracking, maximum page bloat, and minimal safety.

Sure, configuring 23 different tools, 7 different compilers, a nested chain of object transformation 83 levels deep, mutually recursive editor configuration, subtle interactions between components, etc., is just one single "npx create-front-end-website --yolo --fuck-it" away

But simply creating an accessible web form that can take the following inputs: "your name"?
That's just too fucking hard.

I can create 30 kubernetes clusters in a for loop in my shell in about 30 seconds.
I can make one of them actually secure and production ready in 8 months with a team of 5 people.

**WHY. WHY ARE WE LIKE THIS.**

It's not even about sane and secure defaults, it's about us having a culture of not making the things that matter ergonomic that goes back 80 years and I don't have the slightest fucking clue on how we're going to fix that mountain of compounding consequences as an industry.
What I do know, however, is that it's endlessly frustrating to see the results slam into the marginalized, the beginners, and those with less resources over and over and over.
I'm sick of it, honestly.

What would it even look like as an industry if we valued composition of security and accessibility even 5% as much as we valued syntax highlighting and emojis in a terminal?
