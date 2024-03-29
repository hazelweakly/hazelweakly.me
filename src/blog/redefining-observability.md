---
title: "Redefining Observability"
date: 2024-03-15
---

Observability is a bit of a hot topic, and while it's increasingly been playing a larger role in engineering strategy, I think the way it's presented can often cause a lot of leaders to miss the value or to over-index on the wrong things.
I'm going to present the current definitions of observability that are widely used in engineering and other disciplines, and then introduce my definition; I'll also be going over what motivated me to develop my definition, and the deficiencies I encounter in the other definitions, especially when it comes to the failure modes of understanding.

For leaders who are pressed for time, I'm going to try something new with this blog post: I'm going to have pulled out sections labeled "leadership insight" so that you can skim this and pull out the key points.
Let me know if that's useful for you!

## Definitions of Observability

"Observability", or o11y as it's often called by aficionados, has two main definitions that people tend to use when talking about it.
The first comes from control theory and the second comes from cognitive systems engineering.

### Observability: Control Theory

Here's the first definition:

> Observability is a measure of how well internal states of a system can be inferred from knowledge of its external outputs.
>
> -- Rudolf E. Kálmán

This was a definition that came out of studying linear dynamical systems and rose to prominence in software engineering largely through the efforts of thought leaders in the space bringing the concept over and applying it in a new domain; in particular, Charity Majors is often attributed as being one of the major (hah) voices in bringing this definition into the mainstream attention of software engineering.

Whenever an engineer talks about observability, the odds are very high that this is the definition they have in mind.

### Observability: Cognitive Systems Engineering

Here's the second definition:

> Observability is _feedback that provides insight into a process_ and refers to the work needed to extract meaning from available data.
>
> -- David D. Woods' and Eric Hollnagel's Joint Cognitive Systems: Patterns in Cognitive Systems Engineering, (Taylor & Francis, 2006), p. 121.

This definition is one that was brought to my attention by the lovely [Fred Hebert](https://ferd.ca/).
If you're talking with someone who's in the cognitive systems engineering space, resilience engineering space, or system safety engineering space, this is the definition they most likely have in mind.

### Observability: Hazel's Definition

Now, here's _my_ definition:

> Observability is the process through which one develops the ability to ask meaningful questions, get useful answers, and act effectively on what you learn.
>
> -- Hazel Weakly

Naturally, I am not biased in the slightest; it's merely a natural consequence of me being awesome that this is the best definition out there (just kidding).
That said, you might be sitting here and wondering what exactly makes these particular definitions different.
Let's go over that.

## Why Do We Need a New Definition of Observability?

To me, the point of having a good definition of a concept is that when you have one, that definition should be usable both as a way to center understanding of a concept, but also to influence the direction in which you explore said concept, and guide you towards grasping all of the _implications_ of said exploration.
As an example, one of the problems I have with the control theory definition of observability is that it gives you absolutely zero idea of where to start, where you are, or how to get there.
If your system is fully observable, and you _know_ that it's observable... Cool, awesome, that's neat.
The rest of us have no idea what the fuck is going on and would like a map of how to get there.

Another problem I have with the control theory definition of observability is that it completely removes the people from the equation; it doesn't _literally_ remove them, but you probably aren't going to think about humans at all when you read that definition.
Be real, did you read that definition and go "ah yes this sounds like a people problem"? Probably not, and that's an issue.

> **Leadership Insight:** Most implementations of "observability" fail because it's treated as a tooling problem rather than a strategic capability.
> Investment in observability is much more similar to Business Intelligence and Market Research than it is to Infrastructure and IT.
> {.border-primary}

The fact that observability is often sold as a tool to infrastructure teams is throwing out the entire point of the idea by burying it in the implementation.
Nobody buys PowerBI because they need to invest in "super fancy ass spreadsheet generation capabilities" or some shit like that, and likewise you shouldn't be buying an observability vendor because you need a way to store system diagnostic information, it literally doesn't make sense--observability is not a data problem.

So, the control theory definition makes it really hard to think about the people, and it doesn't give you a starting point, ending point, or a strategy of how to get there.
Well, that's not great, so how about the cognitive systems engineering one?

Honestly, I like that one a lot more, and I wish we had popularized that one over the control theory one--while the control theory one helps guide the idea of the _implementation_ of what an effective component of observability looks like, it doesn't actually help the practitioner understand what's going on.
That doesn't mean it's perfect though: one really glaring thing that is missing from it (and the control theory definition) is the point behind why you care about this in the first place.
You have "provide insight into a process" and "the work needed to extract meaning from that insight" and, honestly, why do you care?
In addition, there's still the problem of not really knowing where you are, where you need to go, and how to know that you got there.

> **Leadership Insight:** A glaring deficiency in existing definitions of observability, to me, is the inability to know how many resources to invest in developing observability as a capability as well as how to invest those resources effectively.
> {.border-primary}

Which leads me to why I like my definition the most:

1. I like definitions of concepts that capture the motivation in addition to the essence
2. Motivating definitions, to me, also contain an implicit sense of direction
3. If we're defining a capability, it should be defined as an infinite and incremental process
4. Learning, without action, isn't learning, and a definition about evolution that doesn't include the action step isn't complete

## Observability Gone Wrong

This is probably my biggest gripe with the current direction of observability.
Engineering has always been a bit of a silo from the rest of the business; it's understandable, of course, you have a very specialized field filled to the brim with a very rapidly evolving internally focused set of concerns--no wonder it's going to look completely alien to others.
Much of the medical field is the same way, and so is the legal field, to give two other examples.
However, Engineering had the golden chance of a century: Here we are with complex sociotechnical systems encompassing essentially "every fucking thing a business does to business business" and we have this awesome concept of "we need to understand what we're doing" and what did we do?

We completely and utterly fucked it up by defining observability to mean "gigachad-scale JSON logs parser with a fancy search engine."
Really?
_Really?_
That's the "we solve Real Serious Business Problems™" strategy we went with?

It just feels so tragic; what a waste of potential for building avenues of cross-functional understanding and communication.

## Meaningful Questions

So okay, fuck it, let's throw away the current concept of observability and think seriously for a moment: What does it mean to _ask meaningful questions_?

Here's what that means to me.
A meaningful question requires a few different components:

1. Anyone in the company should be able to ask a question
2. That question should be meaningful to _them_
3. "Meaningful" is not a concept that has any restraints or limitations or domains: if it's meaningful, you should be able to ask it

I'm going to expand on that "meaningful" part because I think it's particularly necessary and that most people have far too limited of an idea of what should be possible here.
Imagine you have a group of people collaborating together on understanding a problem; you're going to have a context of understanding that spans more than one person, and you can roughly understand that context to be a composite of multiple parts.
Let's break up components of "meaning" into things you can combine together to get a composite scope for your question:

- The "vertical" context, in the sense of stream aligned teams
- The "horizontal" context, in the sense of functional areas.
- The size of the subgroup in question: the individual, the team, the vertical, the organization, the enterprise, the market, and so on.
- The time period in question: past, present, future, in six months, monthly, "every time we have a board meeting", "if/when our competitor has an IPO", etc
- The audience in question: a service, a team, an organization, a customer segment, an industry, a group of services, a cluster, a computer, ...
- There's a lot more you could add, depending on what you care about, but you get the idea

Let's take the question "are we healthy" and blend that with various composite scopes in order to get a few examples of meaningful questions to illustrate this more concretely.

- I am an Engineer on Team A that is working on service A1. Is service A1's `/health` endpoint returning a successful response 99.9% of the time over a 5 minute interval?
- I am an Engineering Manager of Team A that works on services A1, A2, and A3; is our team within our stated SLAs with our customers for the quarter?
- We are the Senior Engineering Manager and Senior Product Manager overseeing teams A, B, and C. Are we communicating effectively with each other, are we understanding each other, and are we building things that are in alignment with both our vertical's OKRs as well as the rest of the organization?
- I am an Engineering Director of Org ABC, are we making the right trade-offs between feature work and reliability work so that we can maximize value delivery while not compromising on engineering health, employee attrition, customer satisfaction, and fiscal concerns?
- I am a Product Manager, of these 50 features, which ones have the most synergy with what our GTM research is indicating we need to develop, and which ones can be designed in a way that our engineers have room to bake in reliability work _into_ the product implementation so we can maximize roadmap velocity?
- I am a Director of Customer Success that oversees customer support for the services of Org ABC, are we building the right internal tools to maximally enable our CSE function while also gaining the ability to understand what classes of customer support to automate or proactively mitigate?
- I am the VP of Engineering, are we designing our engineering culture and engineering process in a way that maximizes productivity and ensures alignment of development work with the company north star?
- I am the CTO, are we preparing our architecture to strategically position ourselves against the market today as well as ensuring that we build capabilities that allow us to rapidly innovate five years in the future?
- I am the CISO, what is our business continuity profile, how does our risk profile look, and are we working effectively with other functions to ensure that appropriate trade-offs are being made to keep us in the clear in a cost-effective manner?

I could write hundreds of these, but the point is more that "are we healthy" is meaningful in so many ways that it's going to be a different question, not only for every person who asks it, but _every time a person asks that question_.
Asking the same question twice is not something that should be happening, because you won't be the same company that you were when you asked the question last.
Even if you asked the question yesterday, or an hour ago, you're a different company now, with different context, different aims, different information, different everything.

> **Leadership Insight:** You will never ask the same question twice.
> That's why observability is a _process_ of _capability development_.
> {.border-primary}

## Useful Answers

If we have a better understanding of what a meaningful question is, that's cool, but that isn't super useful for the business if we don't have an idea of what a useful answer is.

For me, useful answers also have a few different components:

1. The answer should be useful by way of concretely moving them closer to achieving _stated or unstated business goals._
   Answers that are theoretically useful or maybe useful or "huh that's neat" or "I might use that someday I guess" don't count.
2. The answer's utility should not require the answer to be "correct" or "factual" in any way.
3. While questions only need to be meaningful to someone, answers should try to be useful to everyone.

That's... A lot harder than it looks.
But luckily we have a saving grace: throw away your desire to have truthful, factual, or correct answers to meaningful questions.

Seriously, I mean it.
I don't mean it in a "we live in a post truth world" bullshit way, I mean it in the understanding of reality that comes when you realize that because everyone's context and understanding and interpretation of the world is different, there is no way to ever arrive at a definition of "correctness" or "truth" or "fact" that is also useful for a situation that is not absolute and objective.
This might terrify you, but lean into it and let it liberate you.
Answers are useful if they let you move forward with concrete action: that's it.

> **Leadership Insight**: If you're asking a meaningful question, it's not going to have an objective answer; it's subjective by definition because the meaning itself is subjective.
> {.border-primary}

You know that phrase that everyone loves to quote? "Disagree and commit"?
I hate it.
I think it's a phrase that causes a lot more harm than good because it's quoted so often out of context and used frequently as a cudgel by leadership to force top down consensus when it was originally intended to be a reminder to leaders to trust the people you hired.

That said, if you take the concept of trusting those you work with, and you throw away the oppositional and aggressive framing its buried in, you get something really cool: trust the questions people ask and utilize the answers they learn.

Get rid of "disagree and commit" and lean into "ask meaningful questions, get useful answers, and act on what you learn."
As a leader, it's your job to help enable as many answers as possible to be meaningful to the business.

## Process of Development

I want to tackle the other part of my definition now, which is that we have this process and it's a process through which one develops an ability.
What does that mean? It means you start out _being fucking terrible at it_ and that is a Feature, Not a Bug™.

Think back to the first time you tried to do anything in engineering, or marketing, or sales, or any other part of your professional career.
Not only was it natural for you to be bad at something, it was actually a good thing; getting things wrong is a necessary and integral part of the learning process itself.
It's through correction, evolution, enhancement, and iteration that you develop so many vital skills and hone your intuition.
If you didn't have that, and you just made the right choices, you're not smart, you're just lucky.
Leaders don't like being lucky for a reason: it doesn't scale, and it's terrible luck to be lucky.

What that means to me for observability is that at the beginning, you're going to be severely limited in the breadth, depth, scope, and nuance of your questions.
But that's okay! The simple questions are still meaningful questions to ask.
This is something I see people trip up on a lot, so I want to hammer it home here.

In an ongoing process of iterative development, the progress itself _is_ the output.
You can't ask a sophisticated question without having first asked a simple one; that just not how it works.
Imagine going into a fiscal planning meeting and asking "hey what's the Discount Cash Flow analysis broken out for our various business units" and everyone's still busy clarifying what each business unit needs to declare as CapEx vs OpEx.
Not only are you talking completely past everyone and derailing the entire meeting, but _you are going to get the wrong answer_ and you will set yourself up for failure in the future by trying to ask a question like that before you have the basics down.

> **Leadership Insight:** Asking the basics is not a sign of incompetence, it's a sign of trusting the process and developing your observability "muscle."
> {.border-primary}

For computer systems, your basics are probably going to look something like this (in order of increasing sophistication):

1. "Is our service reachable internally"
2. "Is our service reachable externally"
3. Ok, cool cool cool, uptime is a lie, whatever: what is our uptime anyway?
4. Is our service reasonably performant?
5. Is our service reasonably cost effective?
   - This is where "traditional" monitoring usually stops
6. Repeat all of the above but for each sub-service
7. Repeat all of the above but for each endpoint
   - This is where "modern observability" starts to really differentiate itself
8. Repeat all of the above, but from the perspective of an individual end user
   - This is where SLOs start to really become necessary as a tool for asking questions
9. From the perspective of an individual end user, what's the performance of an end-to-end request, segmented by every point in the chain?
   - This requires distributed tracing
10. Which of these various tuning options has the best performance characteristic?
    - A/B testing and other variation functionality becomes invaluable here
11. How does our system behave in various situations that we might not have accounted for?
    - This is where chaos testing, fault injection, and other experimentation strategies start
12. Where are the most effective points in the system to leverage humans for adaptive capacity
    - (your next \$1 billion startup goes here)

So looking at this, and then looking at your company, you'll notice that a _lot_ of companies are only realistically at somewhere between 1-3.
That's okay!
It's completely fine to not go further as long as the questions you can ask that are _meaningful_ to the business aren't captured by anything more sophisticated.
Because after all, if you have no need to ask more nuanced questions, why would you need to develop further sophistication in your observability strategy?

Some companies deeply need to be able to ask very nuanced questions around how humans and technology interoperate in a variety of unanticipated areas with a lot of unknown unknowns under very tight operating constraints.
Some only really need to know "code go in, money get made."
That's not a failure of the business; the only failure here is investing disproportionately to your need.

> **Leadership Insight:** That said, while the only failure of observability is investing disproportionately to your need, most companies are either investing too much or too little into observability.
> {.border-primary}

In my experience, I see most companies investing too much money into observability with very little meaningful return on investment because they keep treating it as a tech and tooling problem rather than a research capability.

## Tying Things Together

We had the Control Theory definition of observability, and the Cognitive Systems Engineering definition of observability, and then I presented my definition of observability:

> Observability is the process through which one develops the ability to ask meaningful questions, get useful answers, and act effectively on what you learn.

We also went over what the "meaningful questions" and "useful answers" bit means, and we went over the process of developing an ability.
When we combine those two, we get something that actually really reminds me of the five levels of expertise in the dreyfus model of skill acquisition (novice, advanced beginner, competent, proficient, expert).

Which, honestly, I love that; you absolutely should be thinking of observability as developing an organizational wide capability of asking meaningful questions and getting useful answers.
Of course, once you have a useful answer, you have the final part: acting on it.

Learning, without action, isn't learning; it's fundamentally a process.
And processes? Processes are messy, they require action, they require movement, they require _doing_, they require re-evaluating the process, they require evolving the process, they require wrangling with the human condition itself.

Just like observability.

To put simply, observability is organizational learning.
