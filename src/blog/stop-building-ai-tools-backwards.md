---
title: "Stop Building AI Tools Backwards"
date: 2025-05-16
---

I've been reading this week about how humans learn, and effective ways of transferring knowledge.
In addition, I've also had AI in the back of my mind, and recently I've come to the realization that not only is our industry building AI tools poorly, we're building them backwards.
Which, honestly, is really depressing to me because there is so much unrealized potential that we have available--is it not enough that we built the LLMs unethically, and that they waste far more energy than they return in value?
On top of that, it doesn't take that much extra effort to build the tooling in a way that facilitates how humans work together; the tooling could be built to improve our capabilities by making everybody more effective, rather than by deskilling critical reasoning loops for practitioners.
Here's how that might look.

## The Human Part

First: How we learn.
My favorite (evidence backed) theory on how humans learn is [Retrieval Practice](https://www.learningscientists.org/blog/2024/3/7/how-does-retrieval-improve-new-learning).

The short of it is that humans don't really learn when we download info into our brain, we learn when we _expend effort_ to pull that info out.
This has some big implications for designing collaborative tooling!

Second: What we learn.
It turns out, the "thing" that we learn most effectively is not _knowledge_ as we typically think of it, it's _process_.
This should be intuitive, if we put into a bit of a more natural context.
Imaging learning baking for a moment: Do you teach someone to bake a cake by spitting out a fact sheet of ingredients and having them memorize it? Or do you teach them the process?

Third: How we level up.
Humans are really bad at "novel" innovation, which is a bit tragic because novel innovation seems to be the thing that the tech industry thinks of when it talks about developer productivity.
We surround ourselves with the myth of the solo genius, we benchmark developers on individual contributions, and expect people to implement code by themselves.
Yet, it turns out that sustained solo innovation is both extremely rare, and also not that important in the grand scheme of things.
It's much more like the sprinkles on top of a cupcake, rather than the main course; simply put, it's not how innovation _generally_ happens.

However! We're really good at cumulative iteration.
Humans are turbo optimized for communities, basically.
This is why brainstorming is so effective... But usually only in a group.
There is an entire theory in cognitive psychology about cumulative culture that goes directly into this and shows empirically how humans work in groups.
Humans learn collectively and innovate collectively via copying, mimicry, and iteration on top of prior art.
You know that quote about standing on the shoulders of giants?
It turns out that it's not only a fun quote, but it's fundamentally how humans work.

Also, innovation and problem solving? Basically the same thing.
If you get good at problem solving, propagating learning, and integrating that learning into the collective knowledge of the group, then the infamous Innovator's Dilemma disappears.

So, combine all of those bits of information together, what do we get?

1. Humans learn and teach via process
2. Processes need to take a goldilocks amount of effort to be effective
3. Cumulative iteration > solo developer problem solving
4. We build tools to _help_ us think, not to think _for_ us

## The AI Part

Now, here's the main pattern I see AI tooling doing:

1. Click AI button -> ✨ magic ✨
2. View data -> AI Suggestions
3. Action prompt -> AI initiation

What's missing?
Human retrieval and task initiation, process reinforcement, collective knowledge transfer, and iterative improvements...
Y'know, the whole set of criteria that humans _need_ in order to be effective?
This is wild, we're taking the _one_ thing humans are good at and making AI do it.
But AI is bad at it!
Even worse: if humans get bad at it then we've lost the one thing we had going for us as a species!

Which means we end up deskilling humans faster than we improve AI, and the humans can't improve the AI because we're no longer feeding AI the high quality data it can use to augment human excellence.
It's a self-reinforcing feedback loop... Spiraling rapidly downwards into ineffective systems.
I'm already seeing negative consequences of this--constantly--and it's heartbreaking.

However, a small change to how AI interactions are built can help reverse this.

## Building Better AI Tools

Oftentimes, people try to provide an analogy of AI as an intern or as a co-worker, and candidly, I don't like either of these.
This is because it doesn't, to me, convey an intuition around the right way to build (or interact with) an AI tool that will help you get better at doing what you do.
So instead, as an analogy, I like to imagine AI as an "absent-minded instructor", not as a coworker.
It's prone to forgetting details, but ultimately there to guide you; most importantly, the goal of the instructor is to make sure you learn and learn _how_ to learn!

If you want to be a bit snarky about it, you can alternatively think of AI as a very overconfident rubber duck that exclusively uses the Socratic method, is prone to irrelevant tangents, and is weirdly obsessed with quirky hats.
Whatever floats your ducky.

So, I'm going to walk through one of the anti-patterns I see in AI tooling and fix it by taking an evidence-based teaching process and imagining it augmented with AI.
The teaching process, by the way, is: **Explain, Demonstrate, Guide, Enhance.**

If you've ever been in scouting, you'll recognize this as their EDGE method with a small difference; rather than "enable", I'm using "enhance".
The reason for that is because "enable" is about having someone perform the action, but we are already sprinkling human actions all the way through the process.
Instead, "enhance" is going to be about feeding that human action into the next iteration of problem solving, so that the next time someone does something, they get even better.
Ideally, we want to encourage and inspire even more ambitious tasks, guiding people towards increasingly effective actions.

(The theory behind EDGE and similar methodologies is [Retrieval Practice](<https://www.cell.com/trends/cognitive-sciences/abstract/S1364-6613(10)00208-1>).
It turns out to be highly general, and there's a million ways to do it, but I picked this for the example because it matches how I would teach an early career engineer the process of managing an incident, as well as the mental models and strategies I use when thinking through said process.)

The running example is gonna be incident management with observability tooling being used to diagnose and remediate the incident.
While we're at it, the anti-pattern we're going to fix is "Given a prompt sent to a human, immediately initiate a response with AI."
I picked this one because it's the one I see the most marketing on and it also has some of the most damaging potential for human expertise: in short, it's the one thing you _absolutely don't ever, for any reason,_ want to implement with incident management and observability tooling.

## What Better AI Tooling Looks Like

Let's set the stage of the story... It's way-too-late o'clock and our human is fast asleep.
But what's that I hear? <sup>(the author writes, ironically, being profoundly Deaf...)</sup>
Oh no!
The pager!

Something's on fire!

What does the human do?
Well, they're going to acknowledge that they're responding to the incident, and then... They're going to start by opening up the observability tool, right?
So that's where we're going to start.

The most important thing here is that when the human opens the observability tool, they have to _actively, and with some effort,_ recall (or retrieve) the process of what to do next.
This is **crucial.**
If your process is so baroque and messed up that people can't remember what to do next, you should stop reading this article and fix that; AI can't save you from a 97-step-guide-to-hating-your-life.

But alrighty, the human has recalled the process of incident management! Heck yeah!
Now, we've got our fancy AI tooling because we're living in the ✨ future ✨.
What should AI do, here?
(NO, it's not auto investigate." Auto fix? NOPE!)

Let's walk through that EDGE (Explain, Demonstrate, Guide, Enhance) process and see what helpful, human enhancing, AI tooling looks like.
Additionally, I'm a little weird, so I'm going to call any AI-assisted action here an 'interaction' to help reinforce that effective AI tooling is about amplifying human effectiveness.
Remember: AI should be an amplifier, not an obfuscater.

### Explain

Here's what some **good** interactions look like

- Suggest missing steps (ex: "have you tried turning it off and on?", "can you rollback the deployment before investigating further?", "do you wanna filter?")
- Pull up the incident process guide (and help explain it)

Here's what some **bad** interactions look like

- "click this button to perform an action"
- "explain this error" tooltips or buttons

Why? Because they remove human retrieval from the process and humans have no way to interact with the interface and evolve it from providing an unhelpful interaction to providing a helpful one.
This is going to be a running theme.
Retrieval is something that needs constant reinforcement so that humans continue to get increasingly effective at it.

### Demonstrate

Here's what some **good** interactions look like

- Turn human query into system query syntax (eg turning "what are the top 10 slowest endpoints for the service I care about?" into the query syntax of your observability tool)
- Turns human asks into UI discovery (eg a human says "can I see the SLOs for this service and the downstream customers?" and the AI provides a link to the SLO page of the tool)
- Turn task execution questions into dynamic 15 second demos (eg a human asks "how do I compare two time ranges?" -> Provide a short animation of the process, or an interactive click-through-these-steps)

I know, I know, it's _so_ tempting to provide a button that says "click me to do the thing". DON'T.
Not only does it deskill the human, but what if you mess it up and waste everyone's time?
Trust is crucial for developer tooling and you will _not_ get it back.

Lastly, think about it: when's the last time you clicked an "auto do the thing" button and then _didn't_ want to do several follow-up modifications of that same process?
Making humans chew through a zillion tokens in order to get a simple task done is a great way to take your friction-reducing interaction and turn it into a friction-_introducing_ interaction.

As an aside: Yes, humans should be able to add data to this.
If I'm pairing with a developer that I'm mentoring and I'm teaching them how to do a thing, I want the AI to be able to demonstrate similar things in the future using my actions as a starting point.
Any human recall task is extremely high quality data for training and fine-tuning.
Use it!

### Guide

Here's what some **good** interactions look like

- "You seem stuck on X. Do you want to try investigating Y?" (if and only if the human provided a high level plan of what they're going to investigate)
- "Do you want to ping the code owner? Would you like to view the documentation for the service?"
- human: "I'm stuck" -> AI: "what are you stuck on?" -> (human answer) -> AI response
- Suggest mental model(s) for concept Z, providing references to company documentation
- "Should we document that? Is this something we need to page another team about?" or other questions a helpful human might ask during an incident
- "Can you tell me what steps you're trying to accomplish?"
- Validating responses by assessing how sensible they seem, cross checking information the human provides with information the AI can verify, asking the human for clarification if the AI detects inconsistencies

Here's what some **bad** interactions look like

- "im stuk, pls help". Make the human give you an answer before providing a response; do it socratic style if you have to
- Providing information humans didn't ask for
- Correcting human responses or doing fact-checking in an authoritative tone
- "Guiding" but it feels like backseat driving by someone who would rather do it themselves

(In general: if you give someone a "continue" button, or a generic "provide next hint/step/action" button, they will probably learn to just spam the button and then they will break things accidentally because it's there.
It breaks the human reasoning loop.)

### Enhance

Here's what some **good** interactions look like

- After/during an action, suggest an incremental improvement (eg: filtering by time range -> provide five-minutes-before-the-alert-fired as an option)
- Revealing UI: if someone performs a compound action, give them a shortcut next time (eg: click on trace -> copy trace_id? Dynamically surface a "copy trace ID" button)
- Comparing services A and B repeatedly? Suggest split UI

You can also _suggest_ enhancements to existing Processes

- If the tool identifies people performing N queries to grab data? Suggest infra pipeline improvements
- Suggest alert refinements if the alerts aren't actionable often enough
- Detect manual indirect correlation (eg when people are relying on intuition), suggest instrumentation improvements
  - Here's a real example: I had a team of people who would open an observability tool during debugging, look for slow endpoints, and then manually drill down to find abnormally slow database queries, and then intuit if it was because the database query plans had become suboptimal or that some cache had busted. Putting that information _in_ the telemetry was not an idea they had thought about, but it was very helpful for them!
- Turn a scratchpad of notes into post incident learning material

Notice how careful I am to avoid any enhancements that remove human reasoning from the loop? That's intentional!

In fact: most enhancement suggestions are of the form of adding _more_ recall prompts.
They literally help embed micro-learning deeper into the process, organically.

As a bonus: it helps people _observing_ [learn via osmosis](https://link.springer.com/article/10.1007/s13752-020-00351-w), even if they're not actively involved in taking actions.
Also, did you know there's actual _real_ support for the idea that humans learn at the sub-action level just by observing?
It's not necessarily the primary mechanism, but it contributes to the _propagation_ of said knowledge and helps spread "how we approach doing" throughout teams very well.
Humans are so neat, seriously.
<sup>Ok, side tangent over.</sup>

### Describing the Pattern

That was a lot of information!
One thing that I want to look at, zooming back out a little bit, is that there are a general set of principles here:

- Reinforce human learning
- Help humans work better together
- Accelerate human execution in-process, don't remove it
- _Never_ go from blank to outcome
- Tools should take the _right_ amount of effort to use
- Incorporate team learning into the tool's output

### Another Example: Code Gen

As a bonus, here's another example of utilizing this pattern (I'll be much briefer this time).
It's a task that everyone developer does: code writing! It turns out, you shouldn't use AI to generate the code (first).

Instead, work "backwards" with the AI.
Generate rough documentation, rough/high-level architecture diagrams, then a testing plan, then the tests, then stubbed feature-flagged code...
_THEN_ generate the code.

Once the code passes the tests, work backwards over the entire process and use the existing code to improve the tests, flesh out the testing plan, polish the architecture diagrams, and finalize the documentation.

Why? Because if you ask a human "is this right?" when they don't have a solution in mind, you're asking a validation-style question that humans can't assess.
That's not retrieval, and even worse, we're _really_ bad at it.

Alternatively, if you ask socratic-shaped questions such as "what should X do? How should it look? What's the data flow? How should it behave?"

Every step is retrieval!

(As a bonus, LLM builders or fine-tuners now have a reliable source of extraordinarily high signal-to-noise ratio code if people follow these retrieval-driven-development patterns.
Why AI tools don't heavily encourage this is beyond me, especially as they're all desperate for more high quality data.)

Anyway...

## Untapped Potential

I skimmed over cross-functional possibilities, because nobody in software engineering is super focused on that right now, unfortunately (especially in platform engineering where these types of tools are being built a lot).
It makes sense: budgets are tight, team are scrambling, helping "not us" out isn't the highest priority at the moment.
I get it.
But, truly, I think that cross-functional assistance is one of the highest impact areas of AI if done right.

Here's one example of cross-functional potential.
Imagine production is down, and customer support is getting a ton of emails about what's happening, what's impacted, is my stuff okay, etc
Here's what _could_ be possible, if anyone built it...

Customer Support could phrase a few questions for the dev team, send 'em over, and get a two phased answer.

First, an immediate rough draft from AI, saying something like

> "Hi, this is AI's guess at the answer. Don't send it to customers! But just FYI for you. Also I'm pinging the devs to make sure it's correct."
>
> -- Hypothetical AI response to the Customer Support team

Neither Customer Support or the developer teams are stupid, if the answer that the AI is providing sounds like gibberish, it'll help the teams understand that they might need to get some face time with each other; crucially, this can be fielded by non ICs on either end if the ICs are deep in the middle of a focus crunch.

As for the second phase of the answer: the developer team gets that series of questions from Customer Support.
It might sound something like this

> "Hey customer support wants to know X Y and Z. Here's the answers I gave them, are they right? Is there anything you'd change? Please let me know if this information is accurate enough to use for responding to customer questions."
>
> -- Hypothetical AI pinging the developer team in an incident

The development team (or their engineering manager, product manager, or someone else in the loop) can then review those answers and fix 'em if necessary, which is _much_ faster than interrupting developer flow.
This is an ok place for that!
Also, this is still close enough to retrieval because we're actively asking developers to confirm that the information is sufficiently accurate; it's not _always_ close enough to retrieval, but mid-incident, this shaping helps take a low priority "not now" into an interaction that the team can perform without disrupting their flow.

This is only the surface of the potential for improving cross-functional collaboration, however.
What if the AI answer is deeply incorrect?
Or the team needs to write a brand new answer?
Rather than having the team perform a context heavy translation of the problem (in the moment when they'd rather do literally anything else), give them the ability to write a fully technical, jargon heavy, and fragmented answer, and then use the AI to help rewrite that.
Suppose the developers look at the first AI answer and reject it and reply back with

> "yeah no. what's going on is that zk is borked, our sidekiq is backed up and redis is grumpy, we're mid thru traffic redir to a new AZ, we did blue and yellow. orange seems fine already? idk"
>
> -- A jargon heavy in-context summary during an incident

While that's a useless reply for Customer Support as is (and probably useless to _anyone_ not actively responding to the incident), but AI could turn that into a friendlier answer, and prompt developers for missing bits (like ETA).

Plus, you probably have multiple tiers of support, too.
Do you have business partners with technical experts asking through support for the "real answer"?
What about tier-1 consumers?
AI could help make it feasible to give both answers in an accurate way (after double checking with the team that the AI didn't mess up the expansion).

That could then further be integrated with Customer Support software so that they see the live incident info, know when incidents are happening or resolved, and view live answers so that they aren't stuck fielding questions they don't know answers to.

There's a ton of potential here, but until leadership teams begin perceiving building software for internal improvements to be as impactful, value wise, as shipping features, platform engineering teams likely won't be able to build this type of thing.
In addition, without existing demand, it'll be hard to sell it or create the environmental conditions necessary for vendor integrations to start organically appearing.
Sigh.

## /close_incident

You know, it's funny.
Originally, I thought to myself, "oh, this will be a short article and I'm just going to kind of bang it out...", and then it turns out that there's a reason my bio tagline says "I have thoughts. Lots of thoughts. They never stop thinking. They never stop thunking."
I'm sure next time I'll remember to keep it concise-er.
Maybe.

Oh yeah, conclusion.
Gotta get that catchy takeaway, right? (ahem)

When it comes right down to it, we are building our AI tooling backwards.
The backwards tooling is resulting in skill deficiencies and is de-skilling people by taking the one _single_ thing that humans are really, really good at and attempting to have AI replace--rather than augment--that part of us.
Naturally, we also managed to pick the thing that AI itself is extraordinarily bad: cumulative learning in a collaborative fashion (after all: it can neither reason, nor work collaboratively).
To make matters worse, we feed those two broken processes into each other, creating a feedback loop that completely derails the effectiveness of human/computer interaction.

Seriously, we need to cut that out.
We don't _have_ to do that, either!
(I'm not even making this up! There's evidence for this! Science!)

If you build tools for collaborative learning, if you prioritize assisting and augmenting a human driven process over outputting exponential amounts of noise, then what you're going to end up doing is building tooling that helps humans get better at getting better.
That, in turn, then helps the tooling get better, which then helps the humans get better; the result is the creation of a reinforcing positive feedback loop rather than reinforcing negative feedback loop.
Please, y'all, put the emphasis on humanity back into our tooling rather than pretending nothing matters, as if somehow humans will supposedly be irrelevant in a few years.
Although, arguably, that human focus was never in our tooling in the first place--I mean, let's be real here.

Systems tooling is ripe for revolutionary changes in how they're imagined, how they're implemented, and how they're valued.
But those changes will _never_ materialize if we don't build them to be human-first.
Don't just keep humans in the loop, remember that humans _are_ the loop.
