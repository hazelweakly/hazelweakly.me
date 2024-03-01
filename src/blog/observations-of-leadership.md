---
title: "Observations of Leadership"
date: 2024-02-25
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

## Accept We Are Part of the Problem

> Can you share a specific instance when you recognized your contribution to a problem?
> What led to this realization, and how did it influence your actions in the future?
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
Luckily, I have great people I can learn from now, and they're in such a wonderful spot now that it's phenomenal.

## Patient Divergence

> Tell me about a time when you guided a team through a complex issue without rushing toward a solution.
> How did you manage this process, and what led to finally deciding on a path forward?
> -- <https://cutlefish.substack.com/i/142017363/patient-divergence>

Developer Experience

## Identify Plausible Contributors / Multiple "Causes"

> Discuss a complex problem you've encountered with numerous contributing factors.
> How did you tackle this complexity, and what was your method for deciding what to do next?
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
> -- <https://cutlefish.substack.com/i/142017363/power-of-the-present>

## Blend Diverse Perspectives

> Can you tell me about a time you needed to make space for many diverse perspectives, including those that you found particularly challenging?
> How did that inform collective decisions and actions moving forward?
> -- <https://cutlefish.substack.com/i/142017363/blend-diverse-perspectives>

## Patience and Self-Repair

> Can you share an example of a time you chose not to intervene in a situation, allowing it to resolve on its own?
> What informed this decision, and how did it turn out?
> -- <https://cutlefish.substack.com/i/142017363/patience-and-self-repair>

## Anticipate Effects

> Can you tell me about a time you needed to try to anticipate the unintended side effects of a difficult decision?
> What did you watch out for?
> -- <https://cutlefish.substack.com/i/142017363/anticipate-effects>

## Curiosity and Light Touch

> Describe a moment you caught yourself making a snap judgment and instead opted for curiosity.
> What prompted this change in approach?
> -- <https://cutlefish.substack.com/i/142017363/curiosity-and-light-touch>

## Both/And

> Can you tell me about a time you faced something that looked like a simple trade-off on the surface—an either/or situation—but it turned out to be a both/and situation?
> How did you navigate the situation?
> -- <https://cutlefish.substack.com/i/142017363/bothand>

## Intervene Safely

> Can you tell me about a time when you and your team tried out a new way of working, interacting, or behaving?
> How did you decide what to try?
> How did you figure out whether to double down or change again?
> -- <https://cutlefish.substack.com/i/142017363/intervene-safely>

## Abduction and Intuition

> Can you share details about when you needed to balance logic with intuition?
> What was the process and outcome?
> How did you involve others?
> How did data play into this, or not?
> -- <https://cutlefish.substack.com/i/142017363/abduction-and-intuition>

## Accept Diverse Strengths and Skills

> Can you tell me about a time you needed to assess strengths and skills unfamiliar to you and where there was a risk of devaluing those skills because they didn't match what you value?
> How did you approach the assessment?
> -- <https://cutlefish.substack.com/i/142017363/accept-diverse-strengths-and-skills>

## Collaboratively Sense and Shape

> Can you tell me about a time when you involved other people in making sense of a problem and then worked with them to shape the environment to allow progress to happen?
> -- <https://cutlefish.substack.com/i/142017363/collaboratively-sense-and-shape>

## Coherence vs. Alignment

> Can you tell me about a situation where you were tasked with getting people to take action, and you did it without forcing everyone to align on every detail?
> How did you determine a generally coherent direction without defining an idealized end state?
> -- <https://cutlefish.substack.com/i/142017363/coherence-vs-alignment>

## Plant Seeds—Watch Them Grow

> Can you tell me about an example demonstrating your approach to balancing the certainty of requirements, your use of timeboxes and timelines, and the potential for new, unexpected (and valuable) things to emerge?
> -- <https://cutlefish.substack.com/i/142017363/plant-seedshelp-them-grow>

## Tailor Ways of Working

> Can you share some contrasting examples of how you tailored your and your team's way of working based on the nature of the challenge?
> How did you shift how you approached planning and execution?
> -- <https://cutlefish.substack.com/i/142017363/tailor-ways-of-working>

## Facing Uncertainty

> Can you describe a time when you needed to balance quick wins with tackling a key area of uncertainty?
> What was your approach?
> How did you support your team and enable progress and learning?
> -- <https://cutlefish.substack.com/i/142017363/facing-uncertainty>
