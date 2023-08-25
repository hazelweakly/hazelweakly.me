---
title: "The Power of Being New: A Proven Recipe for High Impact"
date: 2023-07-17
---

When starting a new job as a software engineer, it's natural to feel the pressure of delivering immediate value and meeting the expectations of your role.
However, there's a unique opportunity during this initial period that often goes unnoticed: nobody _expects_ you to actually do useful work right away.
So not only can you can feel free to identify and solve problems that others might have grown accustomed to or overlooked, you'll have a fresh set of eyes that have not yet grown accustomed to the pains of the job.

While you'll lack in-depth knowledge of the existing systems or workflows, this is actually a good thing here! You're going to run into every single problem possible during the onboarding process, like a cartoon character running straight into a rake over and over.
Embrace the pain, it builds character (well, not really, but it provides really good opportunities).

I've been able to take this approach and do some pretty cool things with it in my career.

At a previous company I onboarded, improved onboarding documentation, synthesized cross-org inefficiencies, wrote a technical doc on developer productivity and how it fit into the company, got buy-in, implemented it, shepherded it, and onboarded the entire org, all in one month--the month that I joined.

Some things that made this possible:

- Before joining, I knew they were interested in this so I was already looking for it.
- I have years of experience in internalizing other people's workflows and improving them without wrecking them. I am _very_ good at it.
- Most importantly? It didn't require a lot of deep context, and I knew how to implement changes in a way that was opt-in without breaking individual workflows.

The other time I delivered strong results immediately after being hired was when I came into a company, onboarded myself, broke major communication silos, internalized a very poorly communicated product, repaired trust between multiple teams, and broke a 3 month roadblock.
In my first 2 weeks.
I became the tech lead of the infrastructure team in those first two weeks as well.
I had to reshape some mental models, coach and mentor some people, and start improving some practices while planning for 2 weeks, 3 months, and 6 months down the road concurrently.

Again, a lot of that didn't require deep context in order to _start_ the changing process and know where to go; the important part was to utilize my empathy, listen to others, understand their viewpoints, and solve their problems.
That's the magic, by the way.

I'm going to break this down into a series of steps.
Here's the formula:

## Step 1: Take Notes and Absorb

During the onboarding process, make it a habit to take detailed notes.
If something is weird, take notes.
If something is confusing, write it down.
If something goes wrong, make a note!
Not only will this help you understand the organization's systems and processes, but it will also allow you to identify potential areas for improvement.
How an organization addresses its shortcomings is often more valuable than how well it gets things right.

Ask "why" a _lot_, and ask people for their opinions as well.
Then write those down, all of them.
Very rarely do people document they whys, and even when they do, they're very rarely consistent among different viewpoints.
Those tidbits of information can be crucial in helping you later.

Take notes about the people too.
Your notes on first impressions will be extremely important for identifying biases.
If someone says something about another person, write that down too; reverse engineering how people think about each other can bring up a lot of interesting points and subtleties.
For example, if someone says something is bad and terrible, is it _really_ bad and terrible, or did they have a really negative experience with another coworker and now they're biased?
That's totally possible!
And we want to hold space for that, because it's completely valid to have had negative experiences and have your current ones be filtered through that; but, as the new person, you'll want to be aware of this so that you don't perpetuate biases or grudges.
It'll open you up to being able to be a healer in a space as well, should you need to be.

Take notes and absorb.
Talk less, write more.

## Step 2: Identify Opportunities for Improvement

(that don't involve "Big Changes")

Questions to ask yourself during the onboarding process:

- Are there repetitive tasks that could be automated?
- Are there manual processes that could benefit from streamlining?
- Are there missing steps in the documentation?
- Are there people that have to coordinate efforts when those efforts could be centralized?
- Is information scattered everywhere, out of date, wrong, or all of the above?

Here's the important magic that makes this work:

1. None of these changes touch existing code
2. None of these changes affect an existing developer's workflow

You don't have the context and understanding required yet to change someone's workflow and not piss them off, so... Don't do that.
Easy, right?
Knowing _what_ you can change is half the battle; naturally, reading everything I write cause it's awesome and hilarious is the other half of the battle.
The battle ain't the war though, so, y'know; measure twice, break prod _(only)_ once, and all that.

## Step 3: Ask People What Sucked

Okay, here's the deal.
You're going to start asking people questions, but this is very easy to fuck up, and if you fuck it up, you're going to set a bad impression that will be very difficult to undo later.

Luckily, there's a simple process for success here. Here's the rule:

1. Ask them about what hurts
2. Listen. Listen harder. Keep listening. Listen until your ears bleed. **_SHUT THE FUCK UP_**. Listen.
3. Take notes. So many notes. Get things in their wording, then repeat it back rephrased to make sure you understand what they're saying; ask them to validate that.
4. Use every active listening strategy you know. This will be very draining, and that's fine. You're here to listen and that takes real emotional energy.
5. VALIDATE THEIR FEELINGS. EMPATHIZE WITH THEM. DO NOT FIX IT.

I know you want to. Stop it. Bad. No fixy.

**_DO._** **_NOT._** **_FIX._** **_THE._** **_PROBLEM._**

This step is about understanding your coworkers and how they observe their work environment, how they think, and what causes them pain.
Soon, you'll be able to think about maybe fixing it, but right now is the time for connecting with them as humans, holding space for their frustrations, and letting them be heard.

You will be absolutely shocked and heartbroken when you find out how many of these engineers will feel heard for the _first time ever_ in their entire tenure at this company.
No matter how perfect and amazing the company culture is, I guarantee this will be true.

Just... Be there for them, okay? You can fix the problems later; but right now, they need to know you can hear them as they are and understand what they have to say.

## Step 4: Fix Local Development Environments

Here's where the fixing happens, and here's how to do it:

1. Find every channel you can in slack related to your team, and the teams immediately interacting with your team
2. Join all of them
3. Scroll through the last 2-6 months of scrollback in _every channel_
4. Write down or note every single problem people talked about relating to CI, the test suite, local developer environments, "hey this is broken locally but works in CI", etc.
5. ???
6. Win a Nobel prize for fixing the world's most complicated problem

One often overlooked area where you can make an immediate impact is in local development environments.
This is because people often know exactly what's wrong, and usually they even know pretty much exactly how to fix it.
So why does nobody do it, despite it having obvious immediate impact and even calculable efficiency payoffs?

![The dril candle tweet modified to say Fixing CI $200, Make Test Suite Work $150, Unfuck the Build System $800, Waste Time Working Around Shit Tools $3,600, Tweak Vim Configs $150, someone who is good at the thot leadership please help me budget this. my dev team is dying](./src/images/dril-dev-tools.png "Humans are really really bad at doing certain types of math, that's why.")

There are two types of developer environments: those that are sorta broken, and those that are super broken for the Junior Engineers but never get fixed because the Senior Engineers have workarounds that let them be productive.
You can get a feel for which situation your company is in pretty quickly just from looking at slack; it's a fun superpower once you get good at it.

I do this with every company I join and people are flabbergasted at how quickly I understand what's weird about a company and how to navigate the quirks, or how I know who to go to for what.
It's like showing up at a bar with your friend and their friends and you somehow know about _all_ of the relationship drama, all of the weird nonsense, all the inside jokes, and everything else.
It's great; I highly recommend.

Once you've identified the 3-5 most annoying or repetitive problems: ask in chat casually "hey has anyone noticed this as a problem?"
You really want to avoid jumping straight into "hey imma solve this."
Don't do that, nobody wants that; even if you're right, people will legitimately be offended if someone comes in and fixes their shit without asking.
It's like if you invite a friend over to be a roommate and the first they do is organize your sock drawer; like, okay, maybe it needed a little bit of organizing, but are you for real?
Meanwhile the attic is molding, the sink is flooding, the laundry machine is haunted, and the basement has a cryptid in it.

Anyways.
Socks are not the point here.
The point is that IF AND ONLY IF everyone chimes in with haven't you people ever heard of rm -rf node_modules, bro, it's much better do than try and fix all of these constant ills and agonies OHHHHH.

Wait, where was I? Anyways, if everyone chimes in with "yeah that sucks," _then_ offer to come up with a solution for it, and if people like the solution, offer to fix it.

You'll be the hero, angels will weep, the heavens will open, rainbows will glisten, fairies will frolick, etc etc. Here's the key part though.  
And I mean it.

**_ONLY FIX IT IF PEOPLE SAY IT SUCKS._**

Remember, you're new here.
You still have zero prestige among the team, and zero trust; you need to meet them where they're at and address things _they_ care about.
Now, once you deliver this, that'll change.
People will think you're amazing, cause you are; they'll think you're brilliant too, cause you followed my advice, and I'm a smart cookie.
It's a win win, really.

## The Takeaway: Empathy, Empathy, Empathy, Empathy, Empathy

Embrace your role as the new person and leverage that.
Take notes.
So many fuckin notes.
Seriously. I usually take about 15 pages of notes in my first month of working somewhere and it has never not paid off.
Do some of the shit work that nobody wants to do, and nobody can ever prioritize, but you can!
Because you're currently suffering from it!
Awesomesauce!
Radical.
_poggers._{.text-1}

Remember, being new is not a disadvantage--it's an opportunity to make a difference by being vulnerable and open-minded.
It's also important to remember that the difference you can make now is in the relationships you form, the people you listen to, and the things you can do for others.
Embrace it, and be there for them.
If you can do that, they'll remember you forever.
