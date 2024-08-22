---
title: "Home Baked Abstractions, Store Bought Implementations"
date: 2024-08-21
description: I like to home roll abstractions, but commoditize implementations. What I mean by that is a fairly simple rule that has a very powerful effect, but can be tricky to find the right balance.
draft: true
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

- Home grown kubernetes operators that do "everything"
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

The point of doing this definition work in the first place is to give people a [shared language](/blog/engineering-language) to work from, so they can build that understanding and actually ship innovation rather than functionality.

Personally, one of the success indicators I use to figure out whether or not I'm building a useful abstraction for others is whether or not people can guess how to solve a problem that doesn't quite fit an existing pattern and then do it correctly in a way that works.
In other words, I am explicitly thinking about the emergent behavior(s) and trying to craft things that result in the desired emergent outcomes rather than thinking too hard about the first order results.

So when thinking about abstractions, think about the emergent behavior, and think about whether or not people can intuitively explore the solution space provided.

```
  Desirable Emergent Behavior
+ Intuitive Solution Space
= On the right track
```

### The Evolution of an Abstraction

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

## The Balancing Act in Practice

Well, that was a lot of words.
I know I'm a verbose writer, but whew.

Feel free to take some time and grab a cup of coffee before digging into the next section.
We're going to be going over how this actually works in practice, using a semi mashed up running example of abstractions I've architected and implemented at various points in my career.
I'll be referring to "the company" or "a company", or "a project", but that is more of a linguistic shorthand than a reference to a _specific_ company or project ~~and this paragraph definitely does not exist in order to reduce my legal liability.~~

One of the most difficult things about dealing with abstractions, technical leadership, and honestly leadership in general, is reckoning with the absolutely massive difference between the nice and neatly bundled theory vs the messy non-linear real world.
So, this is gonna make the blog post a lot longer, but it'd be quite the disservice to talk about how something works without actually walking through how it worked out for me and the lessons I learned along the way.

### Context and Circumstances

Here's an example of something that I went through at a previous company I worked at.

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
- Kubernetes was the platform of choice (EKS in AWS, specifically)
- Much of the complexity was buried in orphaned thousands-of-lines-long bash scripts
- Most actual functionality was invoked 3-5 layers of indirection deep
- Various CLI tools were in an ad-hoc manner
- Deployment mechanisms were imperative, mutable, and stateful in mindset
- A complete lack of standardization around anything
- Common complaints that the solution was brittle, easily broken, and poorly understood.

In addition, one common thing engineers said was they didn't want to deploy Yet Another Thing and maintain it, so there was an extreme reluctance to consider "additional complexity" (measured only by number of services running or number of integration points).
As a consequence, things were horrifically complex and inefficient.

### This Is Fine

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

1. ArgoCD as the deployment mechanism into kubernetes
2. Reverse engineering the various different deployment mechanisms and shoehorning them into ArgoCD via Configuration Management Plugins
3. Utilizing AWS Secrets Manager with the _idea_ (not yet an abstraction) being "give people ways to embed magic strings into yaml that turn into secrets." argocd-vault-plugin, helmfile, vals, and External Secrets Operator ended up being the main implementation choices.
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

Also, when you can, try utilizing existing specifications or existing configuration formats to make your life a lot easier.
The [open application model](https://oam.dev/) is an example of something you could take inspiration from to avoid reinventing the entire thing from scratch; [DevContainers](https://containers.dev/) is another source of inspiration; [Procfile](https://devcenter.heroku.com/articles/procfile) is yet another.
There are plenty out there, but the more you can point at something else and draw inspiration from it, the easier time you'll have onboarding others and focusing on the differentiating value you're providing.

## Stage One: The MVP

## Stage Two: The Migration

## Stage Three: The Iteration

## Stage Four: The Abstraction
