---
title: "Observations of Leadership (Part One)"
date: 2024-03-01
draft: true
---

I read [this post](https://cutlefish.substack.com/p/tbm-274-how-capable-leaders-navigate) from John Cutler and Tom Kerwin recently on how leaders navigate uncertainty and ambiguity and it intrigued me.
I decided to give my shot at answering these as a writing exercise and as an opportunity for self reflection.
The past few quarters have seen a lot of change for me, and haven't taken the time I need to reflect as much as I would otherwise wish; this seems like as good of an opportunity as any.
For each of these, I'm going to copy in the interview question and then answer it very similarly to how I would answer it during an interview (but without any of the time or brevity constraints).
I'm actually quite curious to see what other people have to say about my answers, and what answers others have of their own.

As a brief bit of background, I'm going to be referring to my current job quite a bit, but how I'm doing so is probably going to be a bit confusing because it's been a very unusual journey.
Here's the very shortened timeline:

1. I came into the company as an IC.
2. Shortly after doing so, our Head of Infrastructure and Engineering Manager (same person) left; I stepped up to assume the role in the interim while we looked for a new hire.
3. After one quarter (and some change), we hired our new Head of Infrastructure, and I stayed on as "just" the Engineering Manager of the team for another quarter.
4. At the start of the year, we made the decision to transfer a Director from elsewhere in the company into my role, as the role had expanded.
5. In doing so, I stepped into my current role as Principal Architect of the Platform Organization (which is what I was essentially hired to do in the beginning).

I do plan to write about this in the future in more detail, because I think there was a lot of things to unpack and a lot of things to learn;
frankly, we don't write enough about the "interim" roles and how to set them up for success.
So much of the writing on leadership out there assumes a 2-3+ year timescale; it's not _wrong_ for doing so, but there were quite a few things I didn't do effectively because I didn't have experience in being an _interim_ leader (or, well, any sort of leadership, to be honest).
But, this is not that article; this is the article where I go _way_ too in depth on all of these questions.

It's going to be quite long, sorry-not-sorry.
This is also going to have to be a multi part series because I started writing this a week ago and only made it through five of the questions before realizing how long it had already gotten.

## Accept We Are Part of the Problem

> Can you share a specific instance when you recognized your contribution to a problem?
> What led to this realization, and how did it influence your actions in the future?
>
> -- <https://cutlefish.substack.com/i/142017363/accept-we-are-part-of-the-problem>

Firstly, I love this question, what a banger to start things out with.
It's not about failure, it's about learning and growth, but in a different perspective than I see most leadership questions tackling.

Here's an instance for you, looking back into my time most recently as an Interim Director of Infrastructure.
To put it kindly, I stepped into this role because there was an urgent need at the company and I was able to address it; in no way was I particularly qualified for it, and I most certainly was not experienced.
I'm going to lay out the situation briefly, break it down into external factors, internal factors, and then address the part where I realized later (with the help of my SVP) what I could've done differently; in full transparency, I'm still working on the "how did it influence your actions" part myself.

Getting to the situation in question, as I perceived it: We had a critical under-investment in infrastructure, resulting in a team that was extremely underwater, had far too high work in progress, and was unable to even communicate the problem in a way that external stakeholders could understand.
When I came in, one of the first things I did was to address this by attempting to increase visibility here.
By all accounts, I was wildly successful: During my tenure so far, we've gone from 5 ICs and one manager to multiple teams, including a dedicated Data Infrastructure team, dedicated Developer Experience team, a platform team, and infrastructure team.
We have an amazing SVP now (note: titles are a bit fuzzy here still, my usage of titling here reflects scope more than reality), and we've been able to hire what is the most diverse and welcoming organization in the company.
I can't stress this enough: I am enormously proud of this organization.

Now, let's get to the part where I fucked up: to put it directly, I did an _okay_ job at showcasing the severity of the situation, and I could've done much better.
One of the things that's so difficult about leadership is that you can really only start to realize this type of thing by the nature of the conversations you have months down the road after it's a bit too late to directly address them.
If I were to break down an ideal scenario for what I could've done, it would be:

- Recognize and position myself as an interim director with the sole focus of preparing for the next change in leadership
- In doing so, one of the highest impact things I could've done was: documenting, describing, and quantifying the scope of the problem.
  I did the describing part really well, I'm proud of that; but I did precious little documentation of it, which led to repeated conversations and some uncomfortable moments for my SVP as she came in and had very little ability to immediately present clear and quantifiable cases to the rest of leadership for the problem that she and I were both able to articulate.

The ability _to_ articulate the problem at all is something I helped develop, but the impact of that was greatly diminished by not quantifying and documenting the problem.
I paid for that mistake a lot over the next two quarters and I'm still paying it down now.
The repeated conversations, the lack of ability to transfer understanding over, and the difficulty in presenting information in a way that our CTO could push up and do effective global resource management for the company in a way that best meets its needs was a big miss here; while we had a significant amount of contributing factors there, my inexperience played a huge part as well.

That said, I really enjoyed the opportunity to learn in a very short amount of time exactly _what_ type of information people need in order to express these types of thorny issues; I'm very good at identifying and describing them, and I've been unusually good at convincing people and aligning them around solutions, but you have to go several steps further than that in leadership.
It's not enough to get everyone to go "yeah that's great, let's solve this problem"; that's just the beginning.

You have to be able to present the information and package it up in a way that it can be measured and balanced against the needs of the _entire_ company, all the way up to the board if necessary.
That's hard!
Most people take years to learn that this type of packaging is even necessary or what it even looks like!
I'm beyond fortunate to have had a crash course in this while still being able to have the right outcome that we needed at the time.

## Encourage New Interaction Patterns

> Describe a situation where you facilitated new ways for people to interact or share information.
> Or a situation where you exposed people to new kinds of information or experiences.
> What prompted you to make the change, and what was the outcome?
>
> -- <https://cutlefish.substack.com/i/142017363/encourage-new-interaction-patterns>

This is a fun one!
I really love thinking about interaction patterns; they're so influential in determining how people think about problems, how they tackle them, and how you can attempt to influence various emergent properties of a group of people.
Consequently, I really like to think of this in terms of "what is the collaboration outcome that we need and how do we address those deficiencies while emphasizing and leaning into what we're already good at?"

Here's one that I really liked: in my team, when I was the interim Director and Engineering Manager, we had this problem of siloed information; because everyone had been so underwater for so long, the vast majority of work was interrupt driven.
Consequently, people ended up specializing in the interruptions they could solve the quickest, and so we had "the person who knows how to do X", and "the person who knows how to do Y" and so on.
It became _really_ risky to make most changes in infrastructure when that person wasn't available.

That wasn't a situation we could particularly afford, especially as I was trying desperately to prevent people from burning out, healing those who already had burned out, and grow the bus factor of the team while also trying to set up the future organization for success.
I made a few changes to attempt to improve things, but they weren't ultimately particularly successful:

- I setup a support slack channel and wired it up into Jira. This was fantastic and worked really well
- I attempted to encourage pairing on problems together
- I had the entire team lean into the interrupt driven work rather than try to do planned work and then splinter off into hero work as things inevitably required immediate attention

These were all great steps, but the ones that I missed were:

- _doubling down harder_: We still had instances of people doing project style work rather than having _everyone_ doing interrupt driven work. If you're going to lean into something, you need to really lean in.
- Leaning into interrupt driven work was an attempt to minimize work in progress to a manageable level. While it worked, it would've worked vastly better by turning the entire team into a mob programming team
  We did this after our new Director joined and the change was incredible; it wasn't enough to have everyone working in the same area, they needed to work on the same thing at the same time, together.
  Not only did this speed up the entire team, but they grew closer together, collaborated better, and huge chunks of siloing disappeared overnight.

Going back to the things that I did... Despite not quite doing the optimal thing here, what happened was really effective, if only for a particularly interesting and non-obvious reason:
It was an extraordinarily compelling and straightforward thing to showcase to leadership.
Nothing quite sells "we're under-resourced here" than saying "I switched the team from 20% support work to 100% support work and we've barely moved the needle."

Having a paper trail of an ever growing queue of work for the first time also helped tremendously here; it put a semi quantifiable number on the complaints and grumblings that people had.
It also turned out that because our team was so quiet and bogged down, it wasn't _noticeable_; it had been under-resourced because people weren't even able to understand how under-resourced it was.
Changing that and making those new types of information available to leadership and the rest of the company fundamentally changed how they viewed us, and we learned quite a few interesting things.

Here's some examples of discoveries I didn't expect:

- The engineering leadership team was under the impression that all the teams did their own infrastructure work end to end. The reality was that my team helped a _lot_ with support
- Each vertical of the company was frustrated with my team not responding to them: they each thought we spent all of our time on the other verticals and ignored them
- It turned out that 80% of our time was spent on support for product success, security, and compliance; we had so much toil that we didn't even have time to automate it or reduce it
- There was an _incredible_ amount of rework and redundancy going on: Because communication was so ad-hoc and boundaries weren't clear, people would ask IT for problems we solved and vice versa, they'd get bounced around between different channels, and we'd have the same conversations about the same issues over and over
- Every DNS change in Route53 took about 20 people-hours of meetings to communicate between product success, engineering, IT, and infrastructure; triple that if it was "cross concern" between two parts of the company that didn't typically interact
- "Percentage of work complete and accurate" was abysmal; very rarely would something get fixed without having to get re-fixed, or addressed later; misunderstandings happened constantly, and it meant that our ticket queue never really went down even if items got completed

Turns out "done" vs "done done" vs "done done for realsies actually done" vs "done so done that you don't have to do it ever again" are all vastly different concepts.
However, if you notice, none of the results here are really in the area that I wanted them to be: all of the benefit here was external facing rather than for the team.
So it should come to zero surprise to any experienced leaders reading this that my team struggled with confidence that the company was happy with their work or liked them or appreciated them.

It should also come as no surprise that despite the visibility upward to leadership about the problem happening very quickly and that resulting in rapid change... The team didn't _feel_ this for another quarter or two.
They stuck around because they trusted me, and I'm eternally grateful for that, and I love them dearly; but I could've done so much more to help the _team_ itself with the outcomes of the interaction pattern changes.
Luckily, I have great people I can learn from now, and my org is in such a wonderful spot now that it's phenomenal to be able to take the opportunity to reflect, learn, and grow.

## Patient Divergence

> Tell me about a time when you guided a team through a complex issue without rushing toward a solution.
> How did you manage this process, and what led to finally deciding on a path forward?
>
> -- <https://cutlefish.substack.com/i/142017363/patient-divergence>

The situation I want to talk about here is about how we decided as an organization to invest more heavily in developer experience, the process around that, and how we were able to do that quite quickly.
The initial situation was one that I'm sure quite a few leaders are familiar with, but I want to take this opportunity to lay things out a bit more explicitly for people who might not be familiar with how things generally work in terms of feedback loops at the organization level.

How this generally works in tech (and likely most companies, but I can't speak to those) is you have roughly three personas of "experiencing" the company: Executives, Management, and ICs.
Each have their own goals, strategies, and tools available to them to help steer the company in the right direction (which I'm going to call a "lever"); broadly speaking, Executives have levers of alignment, Management have levers of communication, and ICs have levers of execution.
In addition (and I am grossly oversimplifying here), each company, particularly startups, are going to find themselves in one of _roughly_ three phases: Exploration, Expansion, or Extraction.
One of the difficulties that comes here in the Executive and Management level is that any advice, tool, strategy, goal, or whatever else that you receive or attempt to implement is only going to work if it's a match for the particular stage of a company; consequently, you essentially have to throw out your understanding of "how to run a company" every time you switch stages.

When I came in, I would categorize our company as one that had just gone through the Exploration stage and was now entering into the most awkward phase, Expansion.
It turns out this isn't quite right, we have two to three main business markets and each one is in a different stage; in addition, each company that we've merged with or acquired also was in a different stage, so what you really had from the perspective of the Executive layer was a very fuzzy matrix of approaches, strategies, tools, and everyone came in with a slightly different toolset and rationale for said toolset.
This isn't a worst case scenario for the business (it's quite normal), but it's close to a worst case scenario for when it comes to **understanding how to build and utilize effective communication streams and feedback loops so that information travels bidirectionally in a way that people feel valued and heard**.

Coming back to the initial situation that I found myself in when I joined the company: it should now come as zero surprise that we were having a particularly difficult time getting good feedback from ICs, acting on said feedback, and doing so in a way that they felt heard and valued.
As a consequence, many of the issues that actually mattered to ICs weren't acted on or even identified; most of which would be issues that we could broadly categorize as "developer experience."

I was actually deeply fortunate here: I came in as an IC, and then stepped into an interim hybrid Engineering Manager and Director of Infrastructure within a month of joining, so I got to see all three perspectives almost simultaneously, and I attribute a very large amount of my ability to effectively and rapidly zero in on "the real issues" at our company to this unique start.
As such, I was able to categorize a lot of things in ways that helped ICs feel heard and understood, but then translate those issues into something that the management and executive layers could actually see.

One of the first things I did here was to quantify and outline the issue in way that presented enough evidence to the executive layer that investing in a developer experience platform would be cost effective and a force multiplier for helping figure out what to do next.
In our case, we utilized DX because I was familiar with the tool and research behind it and made a strong case that the qualitative feedback mechanism of a survey would offer a much more rapid and tangible ROI.
In a cheeky sense: "Hey, a lot of our devs complain that our infrastructure and tooling is really broken, we can't use quantitative reasoning to measure any of this because the tools don't work" is a surprisingly effective argument and it's essentially the one I used.

While we did settle on the developer experience platform of choice somewhat quickly because I pushed hard for it, I was very careful to lay out that we had a 1-2 quarter plan for procuring the platform, using it, and actually understanding what we needed to do with it.
One of the additional critical things that I used to help make the choice easier was to use this as an opportunity to communicate from the top-down that the leadership team is investing in figuring out how to understand ICs better.
That worked so well that we had a noticeable bump in developer trust in leadership within a quarter, before we had even been able to use the platform to make any real changes; I really can't overstate enough the importance of making sure your organization, at every level, feels _heard_ and _respected_.

Lastly, the path forward here was "building a path to build a path", in a sense, and that was actually also very important; we had recently gone through a lot of turmoil in the organization due to people feeling like the infrastructure team wasn't communicating and being able to setup large multi-quarter initiatives in a way that let us start communicating about them immediately was crucial.
Communicating early and often was so important to the success of this, and if anything, my only regrets are that I could've communicated earlier and more often; I slowed down a bit after things started "working" and change started happening, but doubling down on the communication would've likely helped some.

However, there's a danger there in over communicating to the point where people don't see change happening at the rate that you're communicating and then it sounds like you're all talk with no action (ironically, this was a frequent piece of feedback for me in the last two months; you can't really win here).

## Identify Plausible Contributors / Multiple "Causes"

> Discuss a complex problem you've encountered with numerous contributing factors.
> How did you tackle this complexity, and what was your method for deciding what to do next?
>
> -- <https://cutlefish.substack.com/i/142017363/identify-plausible-contributors-multiple-causes>

I'm going to talk about the same team and a very similar time-frame here again.
We had a problem with our infrastructure: it was really really fragile.
Nobody liked it, and quite a few people agreed that we really would probably be better off rewriting it all from scratch.

So naturally, we didn't do that.

With a team that was so underwater, rewriting something from scratch and then migrating the entire company from one set of kubernetes clusters and AWS accounts to another one was a recipe for unmitigated disaster.
Absolutely in no way would I ever commit a team to a death sentence like that.
Well, not without understanding the problem really well.
The contributing factors were things that were tricky to pin down, but easy to intuit if you have a "gut" for infrastructure:

- A very young company had hired generalists that were smart and built things they understood and that fit the usecase
- Certain technological bets were made prematurely that ended up being ones that only pan out well with a certain amount of investment
- The business context changed and the technological choices weren't re-evaluated
- The required amount of infrastructure expertise wasn't invested in
- Everyone who had setup the system had left
- The blend between "infrastructure" and "application concerns" had started fuzzy and gotten fuzzier
- Non local initiatives had been made that had compounding effects on each other: in particular, pursuing certain markets, certain regulatory statuses, certain application level architectural decision, and certain GTM strategies all came together in a very exponentially complex way that nobody could've foreseen at the time

In short: it wasn't anyone's "fault," but we sure ended up in quite the predicament, and much of the complexity was embedded in human interaction and how the intersection between locally smart choices resulted in disproportionately complex consequences.
More importantly: most of the "real" fixes weren't isolated to infrastructure, but touched upon ways of working and architectural assumptions in our compliance, regulation, security, infrastructure, product design, roadmaps, and more.

What I decided to attempt to do was to try and quantify the business continuity risks that our infrastructure posed, and then outline the various changes needed to address certain categories of business continuity risk.
We had other types of risk as well: burnout, knowledge siloing, scale issues, scaling people issues, and so on, but the business continuity one is the one that moves the needle the most on resource allocation during budget planning, which is what we needed the most at the time.

To get more information here, we took the approach of trying to document whenever we ran into an issue with our infrastructure in a way that disrupted other teams, and phrasing things in terms of a two part "here's the hack fix" and "here's the requirements for the real fix" layout;
that was combined with me attempting to cross correlate that with understanding what scenarios we might run into that would immediately shift our risk/reward ratio.

Eventually, we came to understand that the biggest things that would shift our risk vs reward of doing a rewrite were:

1. Can we incrementally do it (ie: stop at any time)
2. Can we _actually fucking finish it_
3. Can we do it without creating a "now we have twice the operational burden" problem
4. Is it worth the cost of everything we drop in order to do it

Ultimately, the answer ended up being yes, but several things had to happen for that to be true:

- We got more headcount and doubled the size of the team; letting us actually have enough bandwidth to tackle the issue for the first time while still doing Keep The Lights On work
- Changes in compliance and regulatory requirements meant that many of the affordances we relied on previously wouldn't work going forward; this changed the risk vs reward substantially
- We were able to figure out how to narrow down the scope of the rewrite enough that doing it became more feasible

Did I manage this process well?
Eh..., I did okay; my inexperience really showed up here.
This was a problem that I unintentionally solved mostly in my head and, while I took the team with me, I should've externalized the process and externalized the information in a better way.

It would've been amazing to have something like an ADR (architectural decision record) but for hypothetical needs.
The "hack vs doing it right" set of trade-offs that we had was all informal discussion; while it was amazingly helpful, it would've been much more impactful to lay it out in a way that external stakeholders could see it and reason about it, and while we were able to have conversations with others for the first time of "hey this thing you want isn't possible because X, Y, Z" it would've been a huge benefit for them to be able to take a document and share it with their leaders so that people could connect the dots for themselves and tie their business goals to ours in a way that would help everyone involved plan for success.

We did an alright job there, but it relied on me being very charismatic, good at communicating with others, and having _lots_ of meetings; while I'm happy to own that I'm good at communication, I'm disappointed that I put the team in a place where their success depended on me being able have the right conversations at the right time with the right people.
That simply doesn't scale, and our success ended up feeling more like luck than anything else.

With all that said, there was one pivot point that changed the entire conversation for the rewrite:
We had just gotten budget for 3 new headcount, and I had just learned about a new regulation requirement that would force us to upgrade our kubernetes clusters within a few months.
In addition, we had already previously decided that they were not upgradeable at this point and that any forced upgrades would require a rewrite; so, when we got to the point where we realized an upgrade was mandatory, the conversation switched from an "if" to a "how."

What I _am_ proud of, in that moment, is that we had done the work required for that to be an instant and clear conclusion for the entire infrastructure team; everyone understood the trade-offs and alignment was unanimous.
While that could've been communicated externally better, it's so difficult to have that type of hard decision be straightforward, and I can take a bit of pride in having helped set up the conditions for it to become a straightforward decision.

## Power of the Present

> Often as leaders we struggle with the tension between two extremes.
> At one extreme, we push for a big leap towards our opinionated vision about where we want to get to.
> At the other, we start where we are right now, figure out what’s working, and take small steps to change the present situation.
> Can you describe a situation where you needed to explore this tension?
>
> -- <https://cutlefish.substack.com/i/142017363/power-of-the-present>

This is something that I'm struggling with right now, actually!

On one hand, I have this fantastic and grand vision in my head for how we might build out the software engineering experience in a way that lets our Product and GTM functions be really effective in the type of market that we find ourselves in.
There's some very challenging things we have to do, and some core competencies that we have to build; if we pull off what I hope to, we're going to end up building some extraordinarily innovative approaches to tackling this type of market, which would result in us having a world class ability to handle extremely diverse and nuanced industries that resist standard approaches towards digitization.

On the other hand, our CI pipelines are kinda janky and a lot of developers don't feel like our test-suites are adequate or that we have sufficient monitoring in place to even detect when a service they work on is down, much less functional.
_Sooooo_, y'know, there's a ways to go before we get to build the innovative vision.

The big tension here, for me, comes from trying to determine how one is going to iterate; iteration is key in evolving and improving the situation, but it can be extremely difficult to iterate certain things.
Feature flags help a lot, but you don't really get those for infrastructure in the same way, and if your infrastructure team is so underwater that they can barely handle what they have now, gradually and incrementally building out "the new thing" while struggling under the burden of what you have to do now is simply not going to work.
One thing I did to explore the tension was to break down things that were causing this tension into a few categories: fixable, unfixable, workable, and unworkable.
I should note that I didn't actually have these categories laid out so cleanly when I did this, and I'm more going back and looking at what I did and making sense of it after the fact.

That said, if we build these out, we have a "fixable/unfixable" and "workable/unworkable" split, so we can pull out one of my favorite tools, which is a 2x2 matrix (as an aside, seriously, I'm addicted to those, they're so helpful for my brain for some reason).
Laying them out, you get four categories:

- Fixable and unworkable
  - These were the highest priority things to address: they were actively breaking the team or the organization, and we could fix them.
    The hard part here is really about _finding_ these and appropriately labeling them: a lot of people want to label things they dislike as "unworkable" but doing so is a surefire way to lose trust in leadership.
- Fixable and workable

  - These were workable, so they're automatically lower priority, _but_ if they're fixable, then they're great things to stick in and sprinkle in with your higher priority stuff.
    Often because something _is_ workable, it's de-prioritized but it can be a source of morale drain or impedance; giving the team permission to work on those things can build a lot of trust with them, and they're often things that can be completed much quicker too.

    While you can run the risk of appearing like you're only working on "workable" stuff, when done right, it's incredibly effective in being able to deliver a constant stream of improvements without necessarily meaningfully slowing down the high importance work.

- Unfixable and unworkable
  - This is something to escalate, and this category of problem is the one that keeps me up at night.
    Not only can we not fix this with the current capabilities that we have, it's actively breaking something essential that we need to function as an organization.
    Identifying these should be your second highest priority after identifying just enough work for the team to have things to do because the consequences of not knowing what these are and being unable to quantify the risk is absolutely massive.
- Unfixable and workable

  - Label this and move on; the things that are great to label it with are: a) a name that signifies it's not tech debt, b) a sufficiently low priority to signal that you don't care right now, c) _the conditions required for this to move into a different category_

    That last bit is important enough that I'm going to repeat it; things that are unfixable and workable are very dangerous, because they can be ignored, but if it flips to any other state, it could turn out quite negatively: either people will see you as being inconsistent with what you choose to work on, or it'll silently flip into "unworkable" and you won't notice and that's going to cause a lot of damage to the business.

Now that I've rambled on a bit about the theory of all of this, the situation that we had was one where all four categories each had more work than my team could actually accomplish, so it didn't matter what we did, because before we could finish any of the highest urgency work, more work would escalate into being in that very high urgency state.
As it was, the only thing I could really do was minimize the amount of work in progress, free up as much bandwidth for the team, and buy them as much time as I could while I addressed the unfixable and unworkable issues with leadership directly.
The first being headcount, and justifying said headcount in a way that aligned the success of the org with the success of the company; this was a bit difficult because the company was very much in expansion mode, and so _everyone_ urgently needed headcount.
Us getting that headcount meant that we took it from the rest of the org, which is exactly what happened, but the argument for doing so had to essentially become "this will accelerate everyone else more than hiring more headcount for them will" and one of the key pieces of information there was showing that we had become the blocker to essentially all progress in the organization.

Which, most leaders would likely immediately tell you, stepping into a leadership role and then immediately identifying the vast majority of all blockers for the entire CTO org as being under you as a direct responsibility is... Beyond risky.
I'm not saying that you shouldn't own up to the reality of a situation, to be clear.
This type of thing is far more about the implications of what happens after you do something like that, politically; what's happening is you, in essence, become the responsible "root" cause for every missed goal, target, milestone, etc., in the entire company until you fix the blocking problem.
You became the highest priority for headcount and resourcing, but you now have to manage the expectations of the entire organization who is going to see a three quarter massive whiplash between "taking the blame and promising to fix it" and anything actually improving.

If you want to appear ineffective as a leader, this is a stellar strategy, because it gives you no opportunity to actually prove out your worth before people start judging you based on the actions of things that happened before you came on.
However, being an interim leader, I knew I had essentially zero shot at actually becoming the long term director, and so I wasn't particularly sussed about maximizing the short view in favor of success in the long view; it absolutely tanked me, but it set up my successor for a ton more success than they would've had otherwise, and it helped break the cycle of rotating management that had plagued infrastructure for three years.
Totes worth, 10/10, would fuck up my reputation again in a heartbeat.

## Conclusion

I don't even know how to conclude this, honestly; writing this has been a lot of fun, and I'm only a third of the way through.
I suppose if I had to attempt to summarize a lot of the key themes here when it comes to dealing with uncertainty and ambiguity, the things that emerge for me are:

### Understanding the space of the problem

... is critical to knowing how to navigate it.

(words n stuff)

### Empathy goes an incredibly long way

... , but it looks nearly indistinguishable from "effectiveness" at the leadership level, and walking that balance can be quite difficult.

(words n stuff)

### I did okay, really

... I had a very unusual situation and I made the best of it; while I wasn't as effective as I could've been, I learned a tremendous amount, and was able to set up my director for success and play a part in getting us to where we are today.

(words n stuff)

### Communication is the whole job

... , except for the parts where it's not.
Expectations are hard, managing them is harder, etc.

(words n stuff)
