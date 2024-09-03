---
title: "Home Baked Abstractions, Store Bought Implementations"
date: 2024-08-21
description: I like to home roll abstractions, but commoditize implementations. What I mean by that is a fairly simple rule that has a very powerful effect, but can be tricky to find the right balance.
---

I like to home roll abstractions, but commoditize implementations.

What I mean by that is a fairly simple rule that has a very powerful effect, but can be tricky to find the right balance.

Home rolling the abstraction, to me, means deeply exploring and fleshing out out an abstraction from whole cloth, whether it be an interface, or a mental model, or a collaborative workflow, or a template, or... Anything.
But to do that effectively requires context from the team, the company, the industry, and what makes you _you_.
You can't "off the shelf" ship a meaningful abstraction around semantic metadata, for example, but it's invaluable to _have_ one.
Why? Well, because an abstraction to me is something you use to help shape and articulate the desired emergent behavior of groups and systems; thus, by definition, the emergent behavior is very specific to your current context.

Using a commoditized implementation, on the other hand, has a fairly simple litmus test: is the implementation largely outside of your company, and can it survive the subject matter expert on your team leaving?
Kubernetes, Jira, Salesforce, Spark, Postgres, etc, are all great examples of commoditized implementations.
This is all about improving optionality, business continuity, reducing risk, and increasing leverage; while it can help shape your abstraction, it's not really about shaping the emergent behavior of a system, it's about shaping the solution space you use to solve your problems with.

Why is it tricky to find the right balance?
Because doing so requires integrating the implementation into the abstraction, and there's where the glue work and expertise lies.
[Charity Majors called this balance "vendor engineering"](https://www.linkedin.com/posts/charity-majors_a-home-rolled-framework-builds-a-level-of-activity-7232009821837832192-0-d0) and others have called it product management, but whatever the label, it's a very real thing, and it's extraordinarily difficult to nail down.

If you go too far, you've built an implementation on top of another and exacerbated the very problem that using a commodity was trying to prevent.
Some common examples of this are:

- Home grown Kubernetes operators that do "everything"
- Magical jira templates and dashboards that require arcane incantations to fire off reams of "automation"
- Customizing Salesforce to the point that onboarding new people requires a 5 week "forget everything you ever learned" crash course
- Writing a custom batch, stream, ETL, WTF, BBQ, pipeline in Spark
- Implementing buckets of custom business logic inside of Postgres
- Building your own continuous delivery pipeline with thousands of lines of bash, nested CI workflows, and custom YAML templating tooling

Do you see a trend?
It's not just a thing that programmers do! (Although I do confess that most of my examples are tech oriented because that's the main audience of my blog posts).
The trap lies in when you embed the company context so deeply into the tool that the implementation can't ever change and that the emergent behavior becomes uncontrollable.
You lose all of the optionality of a commoditized solution and all of the power of shaping emergent behavior via hand rolling.
It becomes the worst of both worlds.

## Abstraction? Product? Project? Glue Code?

Is this really an Abstraction? Is it a Product? Or maybe Ways of Working? Could it be Culture?
Words are hard.
Whatever it is, we're defining _something_.

I've asked around a bit and, while a lot of people can articulate this thing, and that it exists, and that it's important, I don't think we really have a name for it.
I'm not sure abstraction is the right name for it, honestly, because it's already quite the overloaded word.
This is really about the process through which a collective group of people figure out a concept and then figure out how to conceptualize and chunk that concept together into more tangible and malleable shapes so that we can build bigger ideas on top of it.

That said, you might be thinking "what's the point in all this definition nonsense?"
The point of doing this definition work in the first place is to give people a [shared language](/blog/engineering-language) to work from, so they can build that understanding and actually ship innovation rather than functionality.

Imagine where we would be today if we didn't have mathematical notation.
Have you ever tried to read the original... Anything?
All of the physics and mathematics that we did back then and all of the scientific thought was all around rhetoric; we just said the words out loud and kinda tried to figure it out.
We made a lot of progress, but it was astoundingly difficult to communicate the ideas; now, we can just write out a single formula and communicate five pages worth of text in two lines of equations.
That ability to chunk concepts up, figure out how to express them better, and then build up ideas on top of them...
Whatever that is, that's what I'm talking about here.
It's a thing for absolutely anything that requires collective understanding, thinking, and building up of concepts over time.

We don't really have a name for that, but I'm going to call it abstraction for now.

### The Evolution of an Abstraction

Personally, one of the success indicators I use to figure out whether or not I'm building a useful abstraction for others is whether or not people can guess how to solve a problem that doesn't quite fit an existing pattern and then do it correctly in a way that works.
In other words, I am explicitly thinking about the emergent behavior(s) and trying to craft things that result in the desired emergent outcomes rather than thinking too hard about the first order results.

So when thinking about abstractions, think about the emergent behavior, and think about whether or not people can intuitively explore the solution space provided.

```
  Desirable Emergent Behavior
+ Intuitive Solution Space
= On the right track
```

When you start off trying to build an abstraction that's meaningful, you're not really going to have something that resembles an abstraction for a surprisingly long time.
It's going to look a lot more like an MVP, or a prototype, or a proof of concept, or a ritual, or a beta product.
Abstractions take time, and they go through stages as you flesh them out and figure out what they look like and how they actually fit into everything.

In my experience, there's typically around three stages:

1. The MVP / Prototype / Proof of Concept thingy
2. Chaos. Sobbing. Here Be Dragons. ?????
3. An Abstraction!

Naturally, this doesn't fill a lot of people with hope, because now the first thought they have is how to cross that giant gap in-between "some MVP prototype thingy" and "an internalized concept that people utilize seamlessly to navigate a solution space in a way that results in desired outcomes."

So, uh, how do?

## Crossing the MVP Chasm

What do you do when you have too much to do, too little time to do it, and not enough resources or people to do it with?

Well, step zero is usually crying.

Seriously, feel free to cry and vent and get emotional about it; I mean it!
It's hard to be impossibly resource constrained, and it sucks, and it's gonna feel like you're being set up to fail, and it's absolutely okay to have a very human and natural reaction to finding yourself in that situation.
Listening to your emotions now and feeling them will help you regulate yourself emotionally before you get into the difficult work of alignment building.

Second, get a support channel together; this probably won't be your manager, or the team you're working with, although they should ideally be quite supportive and helpful!
You need to be able to talk to someone (ideally more than one) about the struggles you're facing and get an objective opinion on how you're working with others.
This is honestly deeply crucial; what you're fundamentally doing here is you're switching from thinking of things in terms of a set of functionality or a list of features or implementation and glue-code into figuring out how to get an entire engineering organization to literally change their language and how they conceptualize and approach an entire problem space.

That. is. very. fucking. hard.

And it will burn you the _fuck out_ if you're not prepared.

Finally, realize that this is essentially change agency and so you become effective by learning a bag of tricks and mostly throwing them heuristically at the wall until you find something that works, and then roll with it.
Here's my bag of tricks.

### Make Change Easy to Handle, Not Easy to Do

Lots of people get caught up making change easy to do, but the real secret is actually making change easy to handle.
The sooner and earlier you can get to a point where the `N+1`th iteration can be propagated out seamlessly everywhere, the sooner you start to win, cause then you can start shipping stuff knowing you can patch it up or extend it or modify it later.

Some techniques to do this are:

- Write "validation" scripts that just check if something was done right
- Write debugging or other "how do I investigate X,Y,Z" flow charts to capture how you think about things
- Implementing Continuous Delivery
- Write a ["do-nothing" script](https://blog.danslimmon.com/2019/07/15/do-nothing-scripting-the-key-to-gradual-automation/) to capture how you hack on something
- Make your stuff easy to apply a patch to. Being able to run a "merge this doc with this patch" in a for loop on a directory of files is incredibly powerful
- Be able to revert or roll-back changes
- Make things bootstrappable and regularly test that it is bootstrappable

### Define the "first" MVP as Ability to Iterate

MVP is a nebulous concept, nobody really tells you this, but there are two eternal truths to an MVP

1. It's never an MVP because it's always missing critical functionality
2. Any MVP, when shipped, no matter how feature incomplete, immediately becomes load bearing

So, fuck it, ship it as soon as you can iterate on it in place.
MVP, then, becomes "ability to complete the project" rather than "ability to use the project," and the difference in framing there is _crucial_.

### AreWePlatformYet

You should have an "are we X yet" style presentation somewhere.
It should be able to be automatically updated.
It should be unambiguous.

One trap I've fallen into with this in the past is relying on stakeholders as the final "done" of the puzzle.
While that is technically correct, the important part of progress, politically, is having a script that returns "green checkmark, all systems go."
Because external stakeholders, it turns out, can't actually evaluate the done-ness of a result until _far_ after it is actually completed.
Think: "Oh I've been using it for a few months now, I guess it works."

Naturally, that's not going to fly for a project that has a deadline because it's the most surefire way to ensure you miss your deadline.
So, `https://arewedoneyet.YOUR_COMPANY.TLD/YOUR_PROJECT`.
Make it, own it, update it, get it ready before you even write your code.

I have a few regrets about the projects I've architected and lead, and not having this be a real, fully updating, automated website has consistently been one of them.
It's easy to think "okay but that's a lotta effort", but it's significantly less effort than spending weeks in meetings convincing people that you're making the progress that you're making and getting them to understand the shape of the project.
Linking to an outdated wiki page and saying "ok all the information on here is mostly wrong but this bit is right and this..." is just fucking embarrassing for both you and the person your boss is going to relay that information to.
Do yourself a favor, make the website.

### Make a giant whammy reset button

When you're rapidly iterating on things, you're not going to really understand how things go together until after they go together.
But after you've setup half of the work, you're probably going to run into something that's slightly stuck.
It's probably due to caches, or due to a retry loop, or due to something pointing slightly wrong somewhere else and not able to update.
It might even be due to the bug that you fixed but you can't actually really fix it cause, well, you fixed the bug and now you gotta unstick things.

Giant.  
Whammy.  
Reset.  
Button.

I wish I had built this in almost every project I've worked on, and I wish more products built and considered this in their own implementations.
Is the thing broken? janky? Is it a you or them problem? Who fuckin knows.

Whammy reset button lets you know very definitively whether or not its you, and it effectively acts as a soft bootstrapping mechanism.
It's super awesome, everything should have one.

> Hazel, you cannot seriously be advocating for a giant, unauthenticated "drop all tables and wipe the caches and reset everything to scratch and terminate all existing processes and rest..."

I absolutely am.
Obviously, don't turn it on by default, or in production, but you should have one because it makes the iteration vastly smoother and it gives you a very important "when all else fails..." step in any debugging workflow.

### Provide Mental Models For Evaluating Timelines

You're going to run into people who disagree with how you're doing things, you're going to run into people who agree but are slightly confused, you're going to run into people who "don't get it", and you're going to run into people who are acting adversarially against the project goals (often not maliciously).

The solution?
Progress updates!
Just kidding, nobody reads those.

This one is purely a cultural and political one.
The real question behind this is twofold, with a third component:

1. How do you justify the resources (time, headcount, money, etc) you've consumed so far
2. How do you justify the additional resources you think you need to complete the project

And then, given those two factors, how do you explain and motivate any differences in those two that have happened since the last time you communicated this.
Ideally, not only is the motivation clear and the explanation understandable, but the expectations you've set around the resources consumed and predicted don't cause uncomfortable questions for leadership down the road.

Here's how _not_ to do it:

> "hey yeah so, uhh, oh yeah, thanks for asking... yeah it turns out the project took like 5 times longer to complete so far and we've done about 20% of the progress we anticipated by now. Oh this is the first time you're hearing this? yeah we could've communicated that more proactively, and we tried, but this ended up being a lot more exploratory than we thought, and..."
>
> -- Somebody about to do real bad on their next performance review

A better way to do it, again, involves understanding the culture of the company and its leadership, how they value progress, what they reward, and so on.
This is something that, honestly, I'm still getting better at; it's probably one of the more difficult and harder to define things, especially since it's not actually the same as the AreWePlatformYet question, even though it really feels the same.

To me, this really boils down to "how do I teach leadership an effective mental model around how work effectively happens in the technical domain I'm in" and "how do I help them get an intuition for when things are going well and when they are not."
Leaders want to unblock people, accelerate work, de-risk outcomes, and globally prioritize a shared pool of limited resources so that the company objectives happen most effectively.
If you don't teach them how to do that well, they're going to come up with their own mental model for this and, odds are, you are _not_ gonna like it.
This is not a "leadership bad, they so dum" thing, this is "leadership needs to globally balance apples to oranges to bananas to pears" constantly and do so in an empathetic manner and equitable manner.
So help them do that.

How I'm going to try doing this next time is by establishing a sort of "explore, expand, extract" style model types of work.

- When we're in the explore phase, progress is unclear, and we're throwing shit at the wall to see what sticks.
  - Investment needs to be low effort, low friction, high iteration speed
  - Deadlines don't exist, but timeboxing does
  - Problems? who fuckin knows
- When we're in the expand phase, we've figured out a path forward to address functional requirements and we're cranking it up as fast as it can go.
  - Investment needs to be high effort, low friction, high iteration speed
  - Deadlines exist, but they're all just "asap" and prioritization isn't really a thing
  - Problems can now be enumerated and burndown charts might exist, but it's a Done/Not-Done granularity and progress may flap
- When we're in the extract phase, we've scaled things out to where its functional, and now we're optimizing and balancing non-functional requirements.
  - Investment needs to be "just the right amount" of effort, "appropriate" friction, and iteration speed can be low
  - Deadlines exist, can be prioritized, and can be depended on by external stakeholders in the company
  - Problems can be resourced and prioritized and predicted

Then updates can get split across the three categories and what you're looking for is for stuff to gradually move "up" the ladder of explore to expand to extract.
Honestly, this seems solid to me, but I have no idea how effective it would actually be in the real world.

One important detail: this has to also be bi-directional.
One failure mode I've seen before is that, despite how clearly I might communicate expected timelines, that doesn't mean that the leaders or stakeholders in question will repeat those accurately.
You need to also get a very clear picture of what _their_ understanding of your timeline is and what their understanding of the justification(s) are.
If they aren't persuaded by the justifications, you need to know that immediately.
That said, their understanding, satisfaction, and interpretation is all information you will have to proactively seek out because their dissatisfaction might be unconscious or a fuzzy hunch feeling rather than an explicit disagreement.

### Understand What The People Want

Stakeholders almost never actually communicate about the things they want in an accurate way.
Even if they do, there's often other things inside of those asks or left unstated that can end up mattering more to successful communication than delivering the actual asks.
One thing in particular that's very important to do is to help people understand the solution space and how to better judge the quality of your navigating through it, especially as that relates to fulfilling their needs.
Importantly, this is very different than evaluating timelines.

To rephrase: The goal here is to help people understand their options and communicate about how well you're delivering their needs, which requires them having an ability to understand those options and judge how well the implementation is going to do what they need it to do.
This isn't necessarily adversarial!
It often isn't!
But if done in a culture with low psychological safety, this will absolutely be the most adversarial and emotionally taxing part of your journey in many ways.
Not because it's difficult, but because this is going to be where you might have bad faith actors coming in and refusing to acknowledge that you're building a solution that works for them.
If your project or abstraction fails for a reason that feels systemically or deeply unfair, something in here is a likely culprit (and again: it doesn't have to be malicious or intentional).

You have a few different main groups of people who are going to care about this:

- Future users
- Your leadership
- Stakeholders
- "The market"

Digging into those, I have a few different things I think of when figuring out what people actually want and how you can help them succeed.

#### Future users

Future users are going to be the people who are most impacted by everything you do and how well you deliver on the abstraction.
They're going to be the ones who are using it and speaking that language day in and day out, so how well they can understand it, articulate it, and use it to their advantage really matters.
The single fundamental principle here is making sure that they can see and hold the tangible idea of the abstraction and play around with it as soon as possible.
The supporting principle here is that it's deeply important to be able to give them multiple different avenues for feedback, and to be able to incrementally iterate on that feedback.

Most of all, however, the biggest thing that you need is to cultivate psychological safety in the users so that they feel able to experiment with the abstraction, tell you their true thoughts about it, and help you shape it to better fit the needs of them and the company.

Here are some concrete ideas you can do to help make this more successful:

- Create a feedback channel in your company's chat application of choice (or a mailing list)
- Host office hours where you answer live Q&A and go over the abstraction and some of the things that it enables
- Find a team and migrate something they use to utilize the abstraction, use that to find weak points you haven't considered, and then address those

#### Your Leadership

Your leadership are going to be the people who are most directly in charge of everything you do and while they aren't responsible _for_ the creation of the abstraction, they are responsible for the outcomes of that abstraction.
If an abstraction here helps shape and articulate the emergent behavior of a company and how it navigates the solution space, then it stands to reason that an abstraction is actually one of the most vital things leadership cares about.
Unlike projects, abstractions here are directly a thing that leadership cares about; your success in being able to create an abstraction that results in emergent behavior that's aligned with the company goals is a direct success criteria for them.

Which means, if this goes badly, they're going to behave like they're taking it _awfully_ personally.
Not in a bad way, necessarily, but this gets to the heart of the "enabling" aspect of leadership in a way that few other things do.

Success here, fundamentally means that you understand how your leadership thinks about those emergent behaviors and what leading indicators they utilize to understand whether or not the right emergent behavior is shaping out.
Additionally, you're going to be looking for the "unsaid" things that they're concerned about; often when leaders talk about a concern, there's a hidden one underneath it that's more valuable, and you're going to need to extract that one out if you want to be able to help them help you succeed.

Here are some concrete ideas you can do to help make this more successful:

- Create an explicit value stream mapping of the emergent behavior
- Come up with a list of "[pivot triggers](https://designtom.medium.com/how-to-do-discovery-and-delivery-at-the-same-time-with-pivot-triggers-3dada51c58a3)", and identify what the pivot options are after the pivot trigger trips
- Identify a list of concrete actions or events that are considered to be manifestations of the ideal emergent behavior. This one is particularly valuable because you're calibrating _both_ of your abilities to predict organizational responses to change, which is invaluable
- Figure out ways to convert value, cost, and trade-offs from one value system into another (ie currency vs time, headcount vs opportunity cost, whatever works for you)

#### Stakeholders

The stakeholders are are the people that aren't directly in charge of the leadership, and they're also not the direct users, but they're people who are going to be speaking the language of the abstraction and they're going to need to be able to communicate with the users who are going to be using it on a daily basis.
A huge, yet often not considered, aspect of success in the creation of an abstraction is whether or not the stakeholders involved can learn how to communicate with the abstraction.
This doesn't mean that they understand it: domain experts often need to build abstractions that don't translate well outside of said domain, but that doesn't mean they can't be used to communicate outside the domain.
In fact, the ability to communicate the abstraction outside of the domain in which it "belongs" is likely one of the most important success criteria for determining the longevity of the abstraction in the organization.
As the abstraction goes from being an innovation to a novelty to a product to a commodity, you're going to see the scope of who utilizes it in the company widen over time.

Stepping back for a brief moment, though, what's really happening here is that you have the people who are going to be using the abstraction, and the people that are building the abstraction; importantly, they are two separate groups of people.
One of the biggest force multipliers of programming comes from the fact that those two people are the _same group_.
When they are not the same group, a ton of the magic of programming goes away and you're going to need to learn how to actually think in terms of group and social dynamics and investigate ways to improve those.

A very handy thing to utilize for this is [Liberating Structures](https://www.liberatingstructures.com/ls-menu/).
Liberating structures work at the level of how people meet, plan, decide, and work together in order to make things go better.
In other words, they're exactly what you want and they help you build up the layers of understanding an abstraction bit by bit _with_ the people who are going to be using it, rather than despite them.

Here are some concrete ideas you can do to help make this more successful:

- Invite and solicit explicit stakeholders to office hours or focus group sessions in order to determine whether or not the abstraction is "usable" by them
- Create a set of mental models or analogies that future users can use with stakeholders, and then make sure they can use those
- Take advantage of [impromptu networking](https://www.liberatingstructures.com/2-impromptu-networking/) to get people engaged and help figure out what the hidden knowledge and vocabulary that they're already using is
- A method called [Shift & Share](https://www.liberatingstructures.com/11-shift-share%20/) might be just the thing you need in order to get people from "this is the abstraction" to "this is how I use it" rapidly and organically
- One of my favorite is this one: Creating an [Agreement Certainty matrix](https://www.liberatingstructures.com/27-agreement-certainty-matrix/). A challenge that I often encounter is that it's difficult for people to understand what is a "simple" notion in an abstraction, and what is a "give me a research team and five years" notion. This helps map that space out! And importantly, if you find it confusing to map onto this diagram, it's an excellent sign that the abstraction isn't a good one.

#### "The Market"

No abstraction is complete without considering the context in which it resides.
In the same way, no abstraction can be built without considering the market within which it resides.
Success here means a few things:

1. You timed the market well and built the abstraction at the right time
2. You developed the right abstraction for the right market
3. The incentives and collaboration structures you built up around the abstraction made sense in the market you're considering

It's also worth noting that when I say market here, there are actually several markets and they can all be in play at the same time.
You have the financial markets, socioeconomic market, political market, popularity market, and so on.
Any system in which you exchange assets of value counts as a market, and you're often in multiple markets at the same time.
We _tend_ to just consider the financial market because it's convenient and acts as a proxy for many other markets, but inside a company you have a lot more markets to consider that might be just as valuable, if not moreso.

In other words, what we're really talking about here is a system, not a market; people just tend to get a mental freeze when you talk about The System or Systems Thinking, so explaining it in terms of several different markets where you have exchanges of value is a much more approachable way for a lot of people.
They're the same thing, though.
When I'm personally thinking about the system or market, I often want to go backwards; I think about how I can influence change, and then I think about what the outcomes are, and then I start winding time backwards and figuring out what might go wrong, and then I find out what interventions can be inacted in order to minimize the wrong futures and encourage the right futures to grow.
Importantly, you're also going to have to figure out the introduction and trigger inflection points: an introduction inflection point is "the conditions at which it makes most sense to introduce this" and the trigger inflection point is "the conditions at which the intervention needs to be re-evaluated, terminated, or modified."

So, the steps, for me, are:

1. Figure out what my change points are and find the ones that are applicable for me in my current "market", with my current resources
2. Identify the outcomes, both ideal and not ideal, that could happen from a change
3. Wind time back to identify what interventions could've been attempted
4. Identify the introduction inflection points and the trigger inflection points for the interventions
5. Execute the interventions when the introduction inflection point occurs, and monitor the progress and wait for the triggers to trip

Donella Meadows has a fantastic blog post about leverage points that can influence changes [here](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/), which is well worth the read.
I'm going to list them in reverse order (they list them from least effective to most effective, I will list them from most effective to least effective).

1. The power to transcend paradigms.
2. The mindset or paradigm out of which the system — its goals, structure, rules, delays, parameters — arises.
3. The goals of the system.
4. The power to add, change, evolve, or self-organize system structure.
5. The rules of the system (such as incentives, punishments, constraints).
6. The structure of information flows (who does and does not have access to information).
7. The gain around driving positive feedback loops.
8. The strength of negative feedback loops, relative to the impacts they are trying to correct against.
9. The lengths of delays, relative to the rate of system change.
10. The structure of material stocks and flows (such as transport networks, population age structures).
11. The sizes of buffers and other stabilizing stocks, relative to their flows.
12. Constants, parameters, numbers (such as subsidies, taxes, standards).

Which is handy, and awesome, but that might feel like a lot of things and it can feel overwhelming to look at this list; here's a simplified version of the list that strips out all of items that generally require authority:

1. The gain around driving positive feedback loops.
2. The strength of negative feedback loops, relative to the impacts they are trying to correct against.
3. The structure of material stocks and flows (such as transport networks, population age structures).
4. Constants, parameters, numbers (such as subsidies, taxes, standards).

If you're looking at this list and you're going "huh, it seems like you took out basically all the most impactful stuff," you would be right; there's a reason that empowering others is so critical to effective leadership.
Push the ability to change a system _down_ the authority ladder and watch as vast amounts of issues magically disappear right before your very eyes.
However, there's a pretty cool thing here: when you build an abstraction, this is one of the very few times that anyone in the company has the power to directly touch and influence a lot of the most impactful leverage points in a system.

Therefore, for _abstractions_ specifically, the real list is more like this:

1. The power to transcend paradigms.
2. The mindset or paradigm out of which the system — its goals, structure, rules, delays, parameters — arises.
3. The goals of the system.
4. The rules of the system (such as incentives, punishments, constraints).
5. The structure of information flows (who does and does not have access to information).

That's the real power of abstraction: when done right, it changes the very fabric of how a collective perceives knowledge itself.

## The Balancing Act in Practice

Well, that was a lot of words.
I know I'm a verbose writer, but whew.

Feel free to take some time and grab another cup of coffee before digging into the next section.
We're going to be going over how this actually works in practice, using a semi mashed up running example of abstractions I've architected and implemented at various points in my career.
I'll be referring to "the company" or "a company", or "a project", but that is more of a linguistic shorthand than a reference to a _specific_ company or project ~~and this paragraph definitely does not exist in order to reduce my legal liability.~~

One of the most difficult things about dealing with abstractions, technical leadership, and honestly leadership in general, is reckoning with the absolutely massive difference between the nice and neatly bundled theory vs the messy non-linear real world.
So, this is gonna make the blog post a lot longer, but it'd be quite the disservice to talk about how something works without actually walking through how it worked out for me and the lessons I learned along the way.

### Context and Circumstances

Here's an example of something that I went through at a previous company I worked at.
(And again: Whenever I reference "a company" or "a project", it's really an amalgamation of several companies, projects, and such, plus some details changed, and so on...)

The company context was:

- Culturally
  - Individual autonomy was prioritized over over realized productivity.
  - There was a hero culture and employees who shoved things through and got it done while burning out doing 80+ hour weeks were idolized.
  - The shared understanding of the product among leadership was "this should be a very simple piece of software, all of our complexity is in the sales and in hitting a critical point for network effects to kick in."
- Strategically
  - The Go To Market strategy heavily leaned on specific one-on-one engagements with customers.
  - Talent acquisition revolved around hiring "undiscovered and potentially inexperienced smart generalists with lots of potential" and having them do everything end to end.
  - Product diversification was simultaneously a top concern and a low priority.
- Politically
  - Work that wasn't explicitly a feature designed to close a sale was heavily de-prioritized and under-resourced.
  - Alpha mentality and individualism were rewarded.
  - "Disagree and commit" was more like "publicly agree, privately do your own thing anyway" in practice
- Operationally
  - Software ran in a heavily regulated environment.
  - Multi-cloud was embraced as a strategic need out of necessity.
  - Mergers & Acquisitions were utilized heavily as a growth mechanism, and so the ability to accommodate diversity across diversity, ways of working, and tooling, was required.

Some of the circumstances (for the CTO org), then, were:

- Software lived in multiple different monorepos.
- "Lots of tech debt" was a disproportionately heavy complaint.
- Everything was built out of very short-term solutions cobbled together on the fly.
- Time pressure dominated every concern.
- The complexity of the solution space was growing exponentially and was subject to power law distributions.
- "One way to do things" solutions were a non starter.
- Top down mandates or enforcement were attempted, but were largely unsuccessful except in very rare cases.
- Nobody was aware of what any other team was doing.

### Articulating the Problem

The problem(s) to solve, in question, was:

1. How do we deploy software safely, rapidly, and reliably
2. How do we make it so that a centralized function can build and improve core infrastructure
3. How do we get to the point where we can prepare a multi-cloud playbook for integrating acquisitions and mergers
4. How do we enable change management and migrations without interrupting engineers
5. How do we do this in a way that is compatible with a highly regulated industry

The existing solution had been cobbled together in various different ways, and wasn't effectively meeting the above concerns (as it had never been designed for those concerns).
The few commonalities, if they existed at all, were _generally_:

- That it involved GitHub Actions
- Kubernetes was the platform of choice
- Much of the complexity was buried in orphaned thousands-of-lines-long bash scripts
- Most actual functionality was invoked 3-5 layers of indirection deep
- Various CLI tools were in an ad-hoc manner
- Deployment mechanisms were imperative, mutable, and stateful in mindset
- A complete lack of standardization around anything
- Common complaints that the solution was brittle, easily broken, and poorly understood.

In addition, one common thing engineers said was they didn't want to deploy Yet Another Thing and maintain it, so there was an extreme reluctance to consider "additional complexity" (measured only by number of services running or number of integration points).
As a consequence, things were horrifically complex and inefficient.

### This Is Fine™

Which, honestly, is fine; if you give a bunch of engineers the power to do whatever they want to, no training in how to solve the problem, and no time to solve it, you're going to end up with this situation.
And that can be super workable if you're willing to accept the outcome!
Not everything needs to be perfect, or well designed, or even coherent; sometimes stuff just needs to sorta-kinda work most of the time.

It can be very uncomfortable for engineers to encounter something that feels like tech debt, or feels broken, or inefficient, and not really be allowed to fix it.
I get that! Deeply! But "fixing" has to involve the entire context of the company, and sometimes things aren't actually a problem or a priority for the company, even if it feels like a huge problem to an engineer.
One of the difficult parts of being a technical leader is being able to effectively advocate for problems, while also setting them in their proper context so that they can be understood outside of the CTO org.

In this case, the limits of the solution had been reached, and a comprehensive abstraction around deployment needed to be developed.
Naturally, "deployment" in this case really meant about 5-10 different concepts and capabilities in a trench-coat.

1. Deploy the thing
2. Progressively release the thing
3. Be able to roll back or revert changes
4. "Break glass" capabilities
5. Secrets management
6. Environment variable management
7. Environment / Context aware modifications for deployments
8. Actionable notifications on progress, failure, and current status
9. Observability into the whole process
10. Psychological safety for the engineers: they needed to feel like they understood this and could own fixing their application and its deployment process

One important thing to understand is that while it seems obvious for me to lay the problem out like this, very few people at the company would've actually agreed with the entirety of the list.
Which should be completely expected; abstractions aren't built over time, and language develops very slowly and unevenly among groups of people, so of course you will never run into a situation in which you can draw out the entire scope of a problem from your perspective and get others to immediately agree with it.
That's where alignment work comes in, and it's one of the reasons why it's so valuable, and why technical leadership should be more deeply understood and explicitly developed at companies who are solving technically complex problems.

What I ended up architecting for this was (among other things): a combination of various implementations, some glue code, and a multi-stage plan for migration, simplification, and learning.
Crucially, this doesn't really start looking like an abstraction until things are sufficiently far along, and that can be demoralizing to realize because sometimes you don't get to see the abstraction take place even though it's supposed to be there.

## Defining the ~~Abstraction~~ MVP

Ok, sick, we have an idea of what the problem is and we have an idea of what the context is, so...
Given all of that, what the fuck does a good abstraction look like?
Turns out, that's a really hard problem, so don't solve that; instead, first ask yourself "what does the abstraction definitely not look like?"

Oh neat, I have some things right off the bat that disqualify certain implementations:

- One size fits all solutions
- Requiring the product development teams to stop what they're doing and refactor their code, their infrastructure, or their current pipelines
- Making assumptions around how the deployment looks
- Fully custom or in-house solutions
- Anything that can't be incrementally improved or delivered on is a non starter: there's MVP functionality, but MVP+1 needs to be right around the corner
- Inability to self service
- Too many layers of indirection

Now that we have this, we can also start to think about some things that we _do_ need.

- If the power law distribution is going to hold, we need solutions that have exponential leverage
- If multi-cloud is a thing, the solution needs to not _require_ any cloud provider (but in practice it can assume certain defaults)
- If autonomy is valued over productivity, the solution needs to allow teams to shove their own thing into it somehow
- If self service is a need, people need a cookbook that lets them apply very standard and methodical solutions to common problems
- If we don't want custom / in-house solutions, we need to choose implementations that let us minimize custom glue
- If we can't have one size fits all and we need out of band deployment, the solution has to allow for "custom deployment code"
- If we can't require teams to refactor their code, it means we're doing the migration, and so that needs to be possible with the team size and resources

Once we have that, you also need to think about the order in which things are going to be built and how you can get all of the things you need even if you can't build them all at once.

- Hmm... If the platform team is doing the migration, the cookbook isn't required immediately, because it only makes sense after things have been lifted over and teams want to touch stuff
- If we need to do out of band migrations, patching things on the fly is definitely a day-one concern
- If a single cloud or default(s) can be assumed, we just need to make sure the multi-cloud stuff is _possible_ and then we can worry about it later
- If we focus on making the MVP+1 as easy to deploy and as rapid as possible, we can shrink the size of the MVP
- If teams generally don't have all 10 of the deployment capabilities/concepts, then we only really need the overlapping subset, which turns out to be _only_:
  - deploy the thing
  - secrets management
  - modifying deployments based on environment

Phew. That's a lot.
I'm going to skip through all of the rest of "how we chose specific implementation stuff" because, honestly, while it's interesting, a lot of it comes down to "how can you make the argument compelling" and "what do you have experience with."

The shape of the solution ended up being

1. ArgoCD as the deployment mechanism into Kubernetes
2. Reverse engineering the various different deployment mechanisms and shoehorning them into ArgoCD via Configuration Management Plugins
3. Utilizing the cloud hosted secrets manager with the _idea_ (not yet an abstraction) being "give people ways to embed magic strings into yaml that turn into secrets." argocd-vault-plugin, helmfile, vals, and External Secrets Operator ended up being the main implementation choices.
4. Shoving sufficient amounts of metadata into argocd allowed for applicationsets to have enough information to suitably deploy the right thing into the right environment

And that was the MVP.
Which, honestly, doesn't look like an abstraction yet.

It shouldn't, because it's not one, it's a hodgepodge of nonsense glued together in a way that lets you build the abstraction, but it isn't quite defined enough to actually _be_ an abstraction.
It's still just a miserable pile of yaml transformation pipelines, but it now has the benefit of being an upstream solution with a robust community and available enterprise support if you need it.
However, that is already a _massive_ win.

But let's talk about what you need in order to actually go from MVP to A Real Abstraction.

## Defining the Abstraction

Earlier, we talked about abstractions a little bit, and came up with this concept of two things that let you know you're on the right track.

```
  Desirable Emergent Behavior
+ Intuitive Solution Space
= On the right track
```

Digging more into that, let's talk briefly about the desirable emergent behavior we wanted and the indicators of whether or not a solution space is intuitive.

### Desirable Emergent Behavior

For this particular context and circumstances, we really wanted a few things to happen as a result of this:

- Discoverability of best practices happening organically
- Reduction of repeated work
- Service creation based on domain considerations rather than how much work it is to set up infrastructure
- Tighter involvement of other functional areas with engineering as observability and uniformity goes up
- Services refactored to take advantage of more ergonomic options that are now available
- Usage of new or existing vendors goes up as integration points can now be done in a 1:many fashion
- Exponential curve of complexity lowers
- Duplicated services naturally start to merge
- Engineers build personalized value-adds on top
- help-desk requests stop re-occurring repeatedly for the same type/instance of problem

### Intuitive Solution Space

Some indicators of this being an intuitive solution space were:

- Engineers guess at how to do secrets management and do it correctly
- Questions on how to "Add one more thing to X" start to disappear
- "Can you tell me what you tried" inquiries for debugging results in approaches that closely mirror what a platform team would attempt
- "Is X possible" questions are novel and interesting and point to gaps in the functionality rather than gaps in documentation or a leaky abstraction
- Instances of "I did the thing basically mostly right but forgot a weird edge-case or did it in the wrong place" rarely occur and can be systemically addressed

### Details of the Abstraction

As an end goal of the abstraction, the idea was:

- There's a well understood concept of a Golden Path, where known solutions and known tech stacks have well-oiled ways of operating
- Engineers can co-locate their code and their "basic building block stuffs" together
- No infrastructure needs to be written if the golden path isn't deviated from
- Mild deviation doesn't result in a cliff of "fuck you, you're on your own, write it all from scratch"

Here's how that idea generally works.
You have two paths: making a new service, and changing an existing one.

1. Making a new service
   - You can create a repository easily with a template
   - "Hello world" already works and you can deploy without any further steps
   - Everything else can follow the "existing service" workflow(s), which simplifies the amount of considerations both the product and platform teams have to contend with
2. Changing an existing service
   - You can simply modify the `.your-company.deployment.yaml` file
   - If that doesn't work because you need something _overridden_, you can define infrastructure code that will be merged with the existing setup and override it
   - If that doesn't work because you need something _added_, you can define infrastructure code that will be added in with the existing setup
3. The secret third option: YOLO on your own
   - There should be a well defined list of "all the things the platform and golden path give you"
   - There should be a well understood set of tooling that helps verify whether or not a service fulfills all the needed criteria. The golden path and the platform use it, but there's nothing stopping you from using it
   - Should your secret third option become sufficiently fleshed out and widely utilized, it can "graduate" into the platform and you can gradually wean yourself off of needing to run it yourself

One possible way this could work might be:

```
your-service-root/
  src/
  infra/ (might not exist)
    env1/
       # we need weird settings here because Reasons
       route53.override.tf
    env2/
       # the normal stuff works here, we just also want
       # a stable secondary url for stakeholder reasons
       route53.tf
  .your-company.deployment.yaml
```

And then the contents of the deployment yaml file could be:

```yaml
# .your-company.deployment.yaml
# Caveat: This is probably a not-great design
service:
  service1:
    stack: python3_12
    name: some-name
    dir: ./src/service1

global:
  team: team-name
  product: product-name

components:
  - base
  - route53
  - multi-region
  - sqs
  - rds:postgres

environment:
  env1:
    service:
      service1:
        name: jk-we-named-it-differently-here
```

The sky's the limit, but try not to make the config file its own programming language, and if they end up having to be more than 5-10 lines long "most of the time", you're probably designing yourself into a corner somewhere.
Take advantage of automatic discovery as much as you can to prevent people from having to specify redundant things.
It's also worth noting that this particular design is not great; I'm certainly not advocating for this one, I'm just showing an example of something that should be very familiar to a lot of people who have tried to do this themselves at their own companies.

Also, when you can, try utilizing existing specifications or existing configuration formats to make your life a lot easier.
The [open application model](https://oam.dev/) is an example of something you could take inspiration from to avoid reinventing the entire thing from scratch; [DevContainers](https://containers.dev/) is another source of inspiration; [Procfile](https://devcenter.heroku.com/articles/procfile) is yet another.
There are plenty out there, but the more you can point at something else and draw inspiration from it, the easier time you'll have onboarding others and focusing on the differentiating value you're providing.

Now, a lot of engineers reading this might be recoiling in horror.
Self made configuration files?
Custom bespoke concepts wired together with custom tooling?
This sounds like a horrific nightmare to be avoided at all costs!

Well, they're not exactly wrong; that's the voice of trauma speaking from dozens of lived experiences of this exact thing going awry over the years.
In fact, as a fun exercise, can you spot some of the little antipatterns and things that could go wrong in the example deployment yaml file I gave?
There's a lot!
Which is exactly why we're not doing this; or rather, we don't do this all at one go, and instead we build up the abstraction over time in several phases.
Abstractions don't have to be perfect, and they never will be, but as long as they can change and evolve as we do, they'll end up servicing us well.

## Part One: The MVP

Before we go off and build an abstraction, we're going to enter a very messy phase that I'm going to call the MVP.
You need to be able to fuck around and find out.
It's absolutely necessary, and you can't skip it (I'm serious).

Think of every knowledge revolution that's happened in history and you'll realize there's a fairly predictable pattern that happens.

1. A bunch of people discover the revolutionary concept independently all at roughly the same time
2. Tons of very bad manifestations and articulations of the idea occur, basically all of them fail
3. One good articulation gets kinda successful, and one "not terrible" articulation gets super successful
4. People bemoan that the perfect conceptualization doesn't win, but we repeat the entire process over again in 30 years anyways

Which sounds cynical, but it's not, it's merely a consequence (to me) of the fact that everyone is going to come in with a different context and understanding of something, and over-fitting an abstraction to a problem means that it might perfectly solve that problem, but it might be only understandable and graspable to a small set of the population.
Which, paradoxically, makes it a bad abstraction.
"World's best conceptualization of an idea" can't hold a candle to "whatever the hell we can manage to teach grade-school kids in school" for the sole reason that those grade-school kids are going to go on to change the world, and so whatever sticks for them is going to form the foundations of the next generation's mental models.

Abstractions at companies work the same way; embracing that as a quirk of how humans work makes your life a lot easier.

So, anyways, this is where the "[rule of three](<https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming)>)" in software engineering comes from, for me.
It's also where the design of all of my successful projects have come from.
Here's my secret to finding a good starting point for an abstraction.

1. "Hey here's a problem, let's try and solve it in the most simplified way possible that probably won't work super well"
2. Repeat that three times, stir, let it marinate, and leave it out overnight to grow a little moldy
3. Stare at the mold and figure out how and _why_ it's growing... And figure out what needs to be done to prevent that
4. Build a "Real Good Abstraction" and spend sliiiiightly more time on it, and then GOTO 1.

That's it.
Turns out, overthinking this means more stakeholders get involved and people start over-designing stuff and making it perfect before anyone's actually had a chance to let the mold grow on it.

**MVPs HAVE TO GET MOLDY BEFORE THEY CAN TURN INTO ABSTRACTIONS.**

In fact, that's exactly what I did.
Do you remember the nice little abstraction I sketched out?
That great proof of concept of how things might work?

I never showed anybody that.
Not a single person.
I hadn't gotten the MVP moldy yet so why would I skip that part?

Here's the MVP that I listed above for the running example, for posterity.

1. ArgoCD as the deployment mechanism into Kubernetes
2. Reverse engineering the various different deployment mechanisms and shoehorning them into ArgoCD via Configuration Management Plugins
3. Utilizing a Cloud Secrets Manager with the _idea_ (not yet an abstraction) being "give people ways to embed magic strings into yaml that turn into secrets." argocd-vault-plugin, helmfile, vals, and External Secrets Operator ended up being the main implementation choices.
4. Shoving sufficient amounts of metadata into argocd allowed for applicationsets to have enough information to suitably deploy the right thing into the right environment

Notice how this looks absolutely nothing like a deployment yaml thingy?
That's cause it doesn't, and shouldn't.

What we actually did was this:

1. Build a Kubernetes cluster that can bootstrap ArgoCD
2. Create a "bootstrap" folder that uses an ApplicationSet to deploy a directory of ApplicationSet or applications into the argocd namespace
3. Create a few "default" ApplicationSet (one for cluster addons, one for certain clusters, one for...)
4. Ahh fuck never mind, that was too many steps
5. Revert all the default ApplicationSets
6. Keep the one ApplicationSet that deploys the bootstrap folder
7. Make a new ApplicationSet for _every single service we are deploying_ and ONE. BY. ONE. figure out how the fuck to deploy it.

The proof of concept that I did was taking a semi-broken helmfile application that worked in the old cluster systems (running a very outdated version of Kubernetes), and modifying it to work in the new cluster by post-rendering the crap out of it with kustomize, which proved a very important thing:
we could live migrate the old infrastructure code to the new clusters, without downtime, and without interrupting anyone else or even having them be aware of our efforts.

That single proof of concept de-risked the migration and defined the MVP as what would work and what could be incremented on; once that was done, all systems were a go.

## Part Two: The Migration

Migrations have three stages, speeches have three stages, and written works have three stages.
Three is a very powerful number.
If you have one part, you only have a single point and you can't draw or represent direction or context; this means you can't build a solution, you can only solve a problem.
If you have two parts, you only have a line; while you can now represent context, you can't draw anything other than a completely straight line; this removes the ability of people to "change their mind" or be taken along with you during the journey.
Two parts can be strong and stunning, think flash fiction, where the third part is removed; however, they're fundamentally brittle at any length beyond "small" and are begging to be built up into something larger.

Three parts, on the other hand, lets you represent a curve.
The most important part of a curve is that it can look straight to one person, look like a curve to someone else, and look like a _different_ curve to another person.
The second most important part of a curve is that you can bend the middle without changing the destination or having to start over at a new starting point.
Curves are flexible, and the most foundational curve is one with three parts.

Any good migration curves and winds its way through multiple narratives as people build a collective understanding around it.
Thus, migrations have three stages.

Here were ours:

1. De-risk the migration
2. Shove everything into the new clusters in a bulk, sloppy manner
3. Turn the data on for things one by one and clean up the mess

We talked about the derisking of the migration, where we took a slightly non trivial thing (tiny bit of state, needed modifications, needed patches, etc) and proved that it could work.
Everything else after that was just about shoving weirder and more broken stuff through the same hole and figuring out how to clean that up in the future.

Remember: It's not an abstraction yet, it's still a migration, and we're still in the land of MVP.
I wanted step two to be the step that grew all the mold, but there was enough flexibility to allow for mold to continue to grow even in step three.
Why? Because we could still iterate, which means we can accept that mold grows at any point and handle it as it comes.
That said... Selfishly, it's easiest to deal with mold in step two, so the best way for me to handle that is to encourage it to grow during step two.

How did I encourage the mold to grow?
Well, that's pretty easy (ish).

I took every single service that we were running in the top priority clusters and stubbed out a proof of concept that mostly worked and then let the team loose on it.
Then, we defined what "done" meant.

### Getting to Done... Ish

I'm a big fan of having multiple flavors of done.
They're extremely crucial for a migration that's also an upgrade, because "identical behavior" isn't possible, and "it mostly runs without errors" isn't sufficient.

Here were our stages of done

- Done: The application CRD is in argocd, doesn't cause syntax errors, and updates correctly
- Done Done: The resources get created correctly
- Done Done Done: The containers start properly and have no errors in them other than data connectivity ones
- Done Done Done Done: The containers can read all data and mutate all data and are fully live
- Done Done Done Done Done: The team has chosen to cut over to the new cluster and we can decommission the old service in the outdated Kubernetes cluster

The last stage of done was not something that we could control, so I removed it from the migration scope , which left us with four levels of done.
Why remove the last stage?
Because this company in question prioritized individual autonomy over team productivity, so cross team collaboration was something you should never put as a blocker for your team's progress.

Now, selfishly, here's why I personally did things this way.
I'm going to take off my "explaining things" hat and put on my "Hazel is going to be vulnerable" hat.
I have a few weaknesses as an engineering leader, two of which are on major display here:

1. One of my biggest strengths is leveling up people one on one, and I'm excellent at leveling up organizations, but I struggle with leveling up a team of engineers and getting them more effective. Something about that middle zone is just difficult for me to wrap my head around.
2. I have a lot of hesitation to go off and build things, because I'm always worried that I will build a solution so complex and perfectly shaped for a problem that I end up being the only one who can understand it. It's a common failure mode for me, and although I can almost always address it, I didn't have time to get this wrong on this project.

Above anything else, I needed this solution to outlive me, and I needed people to be able to function without me there.
So the quickest way I could see to make that true was to unleash a team of people on the stubbed out stuff I built and then make myself entirely available to answer questions, level up the team, and make sure they understood it.
In doing so, I could help write documentation, or help explain things in a way that would hopefully prevent these failure modes.

Candidly, I was only partially successful there.
One thing I should've done differently is recognize that I needed to write a lot more documentation; I tried to pass the documentation off to people as a learning exercise of taking what I taught them and writing it down, but realized too late that this is a learning mode that basically only works for me.
I've yet to meet someone else who learns optimally this way (although I'm sure they exist); I needed to sit down and write the notes _while_ I taught people, and then write the documentation from that.
Another thing I should've done differently is I didn't model my thinking flow well enough; there's a fairly predictable flow chart you can follow to mechanically migrate a service, and while I tried to write it out, it ended up looking like "step one... look at the vibes. step two, pick the right solution. step three, just do the thing".

We did fix that! Mostly.
The team was successfully able to get on-boarded and I was able to onboard a second team into helping with the migration afterwords as well, but I wasted some time having to onboard the second team because I hadn't realized my deficiencies with the first team.
More importantly, I didn't set them up to _feel_ successful, and I didn't set them up to have a very objective sense of what level of Done to get to and what that looked like, so they never felt confident in their own skills; that was probably my biggest regret in projects like this.
It's great to have teams be productive, but it's vastly more important to have them _feel_ productive and capable.

Speaking of which, being productive is a tricky thing because as things are changing in all parts of the project and across multiple clusters, you need to ask yourself: what does progress, and thus iteration, look like?

## Part Three: The Iteration

(I'm putting my "explaining this concept" hat back on, now)

Hey, wait a minute; earlier, I talked about there being only three steps:

1. The MVP / Prototype / Proof of Concept thingy
2. Chaos. Sobbing. Here Be Dragons. ?????
3. An Abstraction!

Why do we now have four?
Well, there's a good reason for that; firstly, "sobbing architect" doesn't look good on a resume, and secondly, you won't ever be able to pitch that to your team.

The real reason, though, is for a similar reason to why I like three stages the most.
You need some flexibility and wiggle points in how you do things, and although the migration itself has that flexibility in it, you often need to call it out a bit.
Which is to say, this Iteration stage is really also the final part of the migration bundled up into it.
It's a great psychology trick, instead of having the last part of a migration be "and now we slog through a giant burn down list and one by one have everyone hate you as your deadlines slip", you can re-frame it!
Now we're talking about having the MVP be done and we're working on iterating the solution until it's usable by everyone, so you end up with a giant list of small projects that are all going to go from start to completion in a smooth linear order from the perspective of the team in question.

I can't really overstate how important it is to have this messy back and forth iteration _appear_ linear to your stakeholders; they want a linear narrative, and it makes sense to give them one; part of your skill in building abstractions is going to be turning these messy loops into a linear progression.
My favorite way is to "unroll" the loops so that you end up with a breadth first traversal of the loops and each one can be invested in only as appropriate and time-effective.

Which is exactly how the iteration worked.
Remember those four stages of done? Let's bring that down to three.

- Done: The application CRD is in argocd, doesn't cause syntax errors, and updates correctly
- Done Done: The resources get created correctly
- Done Done Done: The containers start properly and have no errors in them other than data connectivity ones

The last stage is the only one that we need the teams involved with, so we can do the messy iteration per service and slowly push all the services through each level of done.

### Iteration Overflow

Now, let's take a small step back for a second and point out one of the most hidden and dangerous failure modes of a project like this: iteration is a non-terminating and non-finite mode of operation.
What I mean is that you might tweak a thing, and then tweak all the downstream projects, then tweak a thing, then tweak the downstream, and... You'll never actually be done.
So the progress of the project needs to do a certain set of things in order to make iteration safe to do.

Safety for a complex system like this comes in two parts: a safety property and a liveness property.
Communicating safety, on the other hand, carries another thing: you need a pivot trigger for you to go "this isn't working, we need to re-evaluate".
For this project, they were:

- Safety property: All changes upstream (ie tweaking argocd itself, adding new plugins, fixing a global ApplicationSet generator) do not break downstream
- Safety property: All applications never regress from the current level of done. If something is Done Done, all changes must keep that application at Done Done (or push it forward)
- Liveness property: If a change does not enable an application moving forward into a new level of Done, we save it for later
- Pivot trigger: If an application is taking more than `(time to complete project / number of applications) - safety factor` days, we table it. One thing that would've helped this project a lot would have been to explicitly lay this pivot trigger out and explain it. While I had it intuitively in my head, I needed to communicate it a lot better with people and that caused progress to appear to stall externally even though everything was fine internally
- Pivot trigger: If an application needs new functionality from argocd in order to be migrated over, immediately flag this, save it for later, and wait for more things to need the new feature before building it. That last bit is important and prevents you from going off into the weeds and building specific functionality for the various edge cases when it won't be cost effective to do so.

So, we have all of this written out and thought about... What did iteration look like for this project?

We had a burndown chart! That got turned into tickets, and the tickets were tracked; this made more sense for how leaders and stakeholders wanted to think about the project progress, and the flexibility internally let us do this while also shaping the work in a way that was most effective.

Specifically:

- Product Boundary
  - Environment
    - App N - Ticket for "Done"
    - App N - Ticket for "Done Done"
    - App N - Ticket for "Done Done Done"

Now you can very handily create an automatic burndown thing that's mostly accurate just from ticket progress, but people can still say "oh for this environment we need to fix something" or "oh for all the clusters in this product boundary we need to fix something" and the work still has a natural place to go.
Where does the iteration go, you might ask?
The iteration gets buried in the tickets and as long as the safety and liveness properties hold, we don't ever have to "re-open" a ticket or structure our work in a way that looks like we're redoing work.
This is particularly helpful in an environment where platform engineering is poorly understood and people don't want projects that are largely exploratory in nature.

The next part of iteration, and largely the most important part for actually _doing_ the work, is figuring out what your iteration loops are and how to streamline them.
This was something I was still figuring out, but here are some loops I identified:

- Needing to change something in a terraform module (at the very root of everything)
  - The best iteration loop here was doing a merge party on zoom once the proof of concept was done so that PRs could be approved and merged in rapid-fire fashion
- Needing to change something in the argocd itself
  - Just commit to the WIP branch!
- Needing to change something for an application
  - Just commit to the WIP branch!

You can see a pattern: I made iteration super painless for everything by sticking everything in a WIP branch so that PR approvals weren't required for gitops "commit and see if it fixed things" workflow.
However, long lived branches are evil, so what I did was a second thing on top of this.
We would regularly merge the branch back into the main branch and then cut a new branch named the exact same name and hard-refresh all of the argocd clusters; it wasn't ideal, but it was the closest thing we could get to the best of both worlds.

One problem I never fully solved was that ideally I had wanted a way to have merging to the main branch signify a certain level of Done and work in the WIP branch ended up signifying a more fluctuating state of done.
It turns out this just doesn't really work with gitops and you can't really do that, so we ended up just merging the branch in with a snapshot-like strategy.
However, the snapshot branch thing is really ugly; everyone has to know when you did the merge and re-create of the branch so that they don't force push an old version of the branch up to the new one, and you have to hard-refresh anything that will complain about the missing branch (like argocd).
It would be nice to have a different method for that, but picking a different branch name every time would require mutating the configs in argocd every time; perhaps that would've been better?
Who knows!

If it isn't obvious by now, iteration is highly dependent on how your teams work and how you communicate things to leaders and stakeholders; figure that out, and then your ways of working will find a happy-ish middle spot to land.

## Part Four: The Abstraction

Here we are, close to the end of our journey!
It's been a long fucking ride, eh?
Here's what we've done so far:

- We've talked about the MVP and fleshed it out
- We figured out how the whole migration strategy works
- We did the iteration work and got the team working effectively and making steady progress
- Finally, the main migration is finished!

And... We still don't have an abstraction yet.
Really! All that work and we're actually only finished with step one.
There's a reason this type of work is something that'll burn you the fuck out.
Most people never get to the abstraction stage, and most projects end up just being some iteration of the MVP thing.
Honestly? That's fine.
A lot of companies never need more than that and they're kidding themselves if they think otherwise.

Which means it's worth pointing out: Do we actually need to go further? We're kinda... Done, are we not?

Here are some signs I use to figure out whether or not we actually need to do the work of creating this abstraction concept:

- If we want to continually onboard new people into the concept
- If we want to continually get better at onboarding new projects into the concept
- If we need to figure out how to communicate about this at higher levels
- If this is going to become a concept that's embedded into how the rest of the company does work

Thinking back at this company, what do we have?
(And again: Whenever I reference "a company" or "a project", it's really an amalgamation of several companies, projects, and such, plus some details changed, and so on...)

Here are the relevant bits of the company context:

- Strategically
  - The Go To Market strategy heavily leaned on specific one-on-one engagements with customers.
  - Product diversification was simultaneously a top concern and a low priority.
- Operationally
  - Multi-cloud was embraced as a strategic need out of necessity.
  - Mergers & Acquisitions were utilized heavily as a growth mechanism, and so the ability to accommodate diversity across diversity, ways of working, and tooling, was required.

Oooh, look at that!
We want to onboard new people and projects, communicate about this at higher levels and with customers, and it'll shape how we identify and execute mergers and acquisitions.
So, yes, we probably do want to keep going and do a real abstraction around this.

I chose a few different names for the abstraction, and wanted to see which ones stuck. We had:

- De-risking change
- Progressive Delivery
- The Golden Path
- The Kubernetes Repave

Naturally, the name that stuck was "repave": repaved clusters, "is X repaved", "we should repave Y", and so on.
Not only does this give a weird connotation but it also doesn't always convey things correctly.
However, it's the one that stuck, and it wasn't any of the options I had.
That's probably going to happen to you; do your best to communicate something clearly but be willing to adopt whatever language starts floating around and attach it to your abstraction.
All the best abstractions don't get to pick their own names, anyway.

### The Dream

Now, this section is going to be forward facing, because I never got to build this part.
While it's really cool to be able to stick around long enough to build the abstraction and actually see it flourish, one of the hardest parts of leadership is knowing that, realistically, the odds of you actually being able to see that abstraction through to completion are slim.
Too many things change around you: company priorities, politics, market concerns, and more are all competing and interacting in odd ways.
As often happens, that meant that my time at a company often ended before the abstraction could even be started, or maybe it got started but not finalized, or maybe it got finalized but never got to evolve over time.

If you get to stick around and do this part, though, it's really cool.
You get to see the fruits of your labor be born and turn into wild and wondrous things, beyond what you could've ever imagined.

Here's part of the abstraction that I wanted to build for this project.
It was composed of a few properties:

- **Segmentation:** The ability to break things apart and separate them, dynamically, at runtime. Think traffic routing, blue/green, progressive deployment, and so on.
- **Simulation:** The ability to test something or poke it, the ability to experiment, to investigate. Think chaos engineering, fault injection, load testing, fake data, and more.
- **Traceability:** The ability to see any one action propagate throughout a system. Observability as commonly defined falls under here, but so does compliance, auditability, and security, and the tying of work to changes.
- **Bidirectionality:** The ability to propagate a change forwards and backwards through a system. Rollbacks, reverting, and transaction semantics, all fall under here.
- **Augmentability:** The ability to to annotate any action with information at any point throughout the system, or decorate that action with another action. Event driven architecture is a common way to think about this, but there are others.
- **Congruence:** The order independence of actions. What comes first, the chicken or the egg? The database or the app? The data migration or the updated code? Here's a better one: What if the question simply didn't matter?

Segmentation, specifically, was where a lot of the core abstraction lied.
I had envisioned that there would be a way for developers to build applications and specify certain properties that needed to be held, and that would route the application and traffic into certain shapes.
Imagine, you write your application and specify a simple file:

```yaml
compliance:
  fips: true
  fedramp: Moderate
  hitrust: r2
  soc2: Type 2
product: our_product_name
services:
  queues: {}
  data:
    object: {}
    postgres: {}
  some_3p_vendor: {}
```

And everything else flowed from inferring the structure of the code.
Detect the framework from the docker image, figure out the routes from an OpenAPI spec, and provide simple integration points for people to build their application with.
Need authentication? Shell out to the internal SDK and call the auth service.
Feature flags? We have them! Just hit the internal endpoint that's super easy to remember, or use our internal SDK that makes it even easier.

You get the idea.
Importantly, no Terraform really has to be written, because this all ends up dynamically generating infrastructure for everyone as needed, with documentation on how it all works.
Even more importantly, this ends up making most of what you write semi cloud agnostic (or easier) because you can shim things.

Take S3 as an object store, for example; hardcoding the concept of S3 is bad, but utilizing an object store is great.
So exposing the ability to have "an object store" but not requiring that to be S3 means that you can decide to build a tiered S3 api compatible solution, utilizing something like [seaweedfs](https://github.com/seaweedfs/seaweedfs).
In memory caching can be handled via something like [pelikan](https://pelikan.io/) rather than immediately assuming memcache or redis (or a managed solution of those).
You don't even need to update the code!

You can also do this in environments where it makes sense, and then avoid it in environments where it doesn't; high compliance environments, for example, mean that storing data on disk is sometimes annoyingly hard and you'd prefer to externalize it, but you could probably cut off a large chunk of your object storage costs in non-production by using a local storage alternative with the same API.
While this type of optimization might be too overkill for most environments, making it _possible_ and _feasible_ to do, even at lower scale, unlocks absolutely massive potential and optionality for companies; something everyone is desperately hunting for right now.

Pivoting to exploring a separate area of the solution space, one of the coolest and most exciting capabilities I've yet to see people really flesh out, is magical headers in requests.
Imagine having three different headers that you can set anywhere in your application: an idempotency header, a version header, and dry-run header.

- Idempotency header: This means that the action associated with this request is guaranteed to be idempotent and should be handled correctly by any stateful service. It also means we can automatically duplicate these occasionally when testing and ensure that they _are_.
- A version header: This lets you route services to the right version of the backend appropriately, including ones with various feature flags, and lets you fall back correctly if your service mesh logic is configured well.
- A dry-run header: This means that the request isn't real. Treat it like it _is_ real, but don't trigger any human actions with this request (or if you do, send it to a testing team). This type of header is invaluable for sending shadow traffic through your production system. You can also name it something else and use it to start flagging real production traffic as "hmm, this is weird, let's pretend this request didn't happen but we need to push it through rather than reject it." (A common scenario when a failing backend is sending garbage data out but the backend appears healthy. You take the backend down, but you flag any requests that it made after the fact as garbage.)

I had hoped to be able to flesh those concepts out and see what stuck, what worked, and what would've ended up being overkill.

For progressive delivery, [ArgoCD](https://argo-cd.readthedocs.io/), rather than having an ApplicationSet for every single service, would end up sitting at the organization level and picking up repositories that were labeled correctly, and doing a few things:

- For the main branch, deploy the production version of the service in a progressive way, allowing for rollbacks and automatically toggling a feature flag off if the SLOs for it failed. Entire deployments would automatically stop if errors were detected, leaving the service up but isolated for future debugging.
- For any PRs, deploy an ephemeral version of the service based on labels set on the PR, allowing for any individual PR to iterate on multiple services as needed.
- For "major PRs", due to compliance reasons, allow for embedding enough metadata into the PR that argocd could be utilized programatically along with some custom glue to collect together all the required information for creating a FedRAMP SCR. This would work automatically, and only if the appropriate compliance flags were set, so that developers and security could work together effectively.
- Feature flags could override various aspects of the deployment.

Eventually, [vCluster](https://www.vcluster.com/) would've been introduced for a very fun reason: it makes the ephemeral environment concept much more robust, and also does something very interesting: it provides a vanilla Kubernetes API inside of another Kubernetes cluster.
Which means that multi-cloud and hybrid deployments involving multiple cloud providers and on-prem can be attempted with the same exact codebase and any customizations that a team needs to do will carry over across clouds since they're only responsible for programming to the vanilla Kubernetes API.
Having vCluster in there also makes a multi-cluster capable routing solution like [linkerd](https://linkerd.io/) far more powerful as multi-cluster routing becomes much more commonplace.

Then, at some point, we would be setting TTLs on everything so that absolutely nothing in the cluster lives for longer than a few days; in fact, the cluster itself would only end up living for about a week.
Ideally, all of the clusters would be multi region and blue-green in design, shunting traffic from one region to another as the clusters got decommissioned and re-created automatically.

Cluster upgrades, the very initial reason for the entire project, would become an automatically solved issue, and we would be able to stay on the bleeding edge of Kubernetes with very little active work required to do so.

For simulation, one of the most exciting solutions I've seen in a while is [ShadowTraffic](https://shadowtraffic.io/), and it would be a huge boon for developers to be able to mock something out quickly and integrate it into how they do things.

Lastly, utilizing something like [tailscale](https://tailscale.com/), or perhaps [mirrord](https://mirrord.dev/), would enable one of the most exciting developer productivity unlocks to me: utilizing a hybrid solution of your local development setup + the ephemeral service launched in your PR in order to hack on something and see the results in real time when you hit save in your editor.

I'd love to see this built out one day.

## Final Thoughts

Building a good abstraction is an act of mortality and vulnerability.
You will be planting seeds that you won't always get to water; you will not eat the fruit you bear; and you will not live to see the shade your trees offer to those who come after you.
It will often feel like you've stumbled around producing failure after failure, or not making any change at all.
It's heartbreaking watching things grow and develop for years, only to have yourself ripped away right before completion, or experience a shift in company priorities severe enough to break the entire abstraction.
Being human means, to me, wanting to build abstractions that enable others to build things that are beautiful.
Which means that every time things get ripped away, a part of that humanity gets shattered.

Understanding the process of developing abstractions, especially as a leader, is really about understanding the process of grief.
Even if you get to build the abstraction, it won't be the one you pictured, or envisioned.
You're going to need to take the seeds you've born, carefully curated, and lovingly built up over time... And watch them die.
Grieve for that which could've been, and embrace the beauty that you see now, and live for the potential that can be.

Just make sure of one very important thing: don't grieve for something that has not yet died.
It's a common trap leaders get into: believing that something will inevitably die (because it will) and grieving for a loss that has not yet occurred.
You can't do that with this type of work, because it prevents you from being able to make the changes you need to; bracing for the impact means that you will be one of the instruments responsible for causing it to die, and you'll become the object of your own grief.
If nothing else burns you out and destroys your faith in humanity, that will.

Please, lean into the vulnerability and plant the flowers.
Love them as deeply as you can, even if you know you'll one day see them trampled, even if you know that what sprouts won't be what you planted.
Keep that part of you that recognizes the inevitable as carefully separated from the part of you that loves and hopes for the brighter future.
Show it to nobody.
As a leader, this is something nobody talks about, but you lose the ability to hold this grief and share it with another person at your company.
Even fellow leaders at your company will not be someone you can share this with, because to do so will cause them to not buy into what you're doing.
It's not deception, it's just reality; you need trust, and there are certain flavors of vulnerability that erode trust as much as there are flavors of vulnerability that build it.

There is a bright side to all of this, though.
One secret about death that's hard for many western societies to understand is that death and life are two sides of the same coin;
the death of one thing is the space of another's growth.
The soil that a beautiful garden will be planted in is made of the stories of thousands of gardens that bloomed, lived, loved, and died.
Never forget that your grief must also be joy; the grief of the past brings with it the joy of the future.

To build an abstraction is to hold the heart of your humanity in your hands.
Plant your soul into the ground, and be reborn.
