---
title: "Platform Engineering: An Approach Towards Scaling Decision Making"
date: 2023-08-30T01:37:55.937Z
draft: true
---

The way I think about this is something I need to write down in a blog post, but it comes down to "how do you scale effective decision making".
Prior attempts to scale this involved splitting responsibilities along functional area lines.
That's where you got dev and ops splits.
Works great for one aspect of decision making (acting) but terribly for another (context).
Eventually people realized that without context, your actions aren't going to be effective.

So they're like "ok cool", and slammed the context + action together.
Creating stream aligned teams.
Sorta.
But really just one team that has to know the whole vertical context.
Eventually people realized that it works only until one of two things happens:

1. The context becomes too large for any one team to manage (company and problem domain force splitting)
2. The actions become too difficult to execute (dev "star" ops bullshit goes here)

So microservices came around.
Make the streams tinier, then the total area of the context goes down right? Also no.
Eventually people start to realize that the "horizontal context" (whether or not your decisions are cohesive In the context of the organization) matters a lot too.

(Side tangent: This, in my opinion, is actually the secret sauce behind showing very clearly why pair programming works so well. It cuts the amount of cohesion required by the square root of the engineering org size because you're always sharing the context with at least 2 people and context sharing is O(n²))

That's where platform engineering comes in.
You get a way to build horizontal slices of context, as well as a way to make performing many types of actions easier in a way that's coherent and discoverable by others in the organization.
A well designed platform provides both: poorly built (or emerging) platforms only give you one of those, if that.
They also really work best if you have enough vertical slivers of context to where spending time building _another_ vertical (but aimed sideways at the internal customers) is actually worth it.
It might not be worth it, you might just need a well designed infrastructure setup and a few SRE minded people, but there's no shame in that.

Platforms don't solve bubbling up decisions, the individual level, executive alignment, or cross functional cohesion, but they're closer than previous attempts in many respects.

One thing I didn't cover is that, imo, context is multi-faceted. There's:

- business value context (sales, marketing, product, finances, ability to predict the market over time, etc)
- abstract understanding of the system (the codebase, design docs, technical architecture docs, etc)
- concrete understanding of the system (operational concerns, system performance, etc)
- meta context (observability, monitoring, business intelligence, DEI, understanding company culture, ability to predict the system over time, etc)

The fact that most of these are inaccessible to anyone not in that functional arm is more of a consequence of us being really bad at transferring semantic knowledge across functional domains of expertise than anything else.

Platform engineering, to me, is an attempt to try and sort of fix that but falls into the same traps of being limited to one functional arm (the engineering org), and generally only considering internal contexts (those not related to revenue, customers, business value, etc). Mostly because it's reactionary and wasn't really designed as a specific approach for a certain reason: it's an adhoc attempt to tame complexity in the sociotechnical system by turning an embedded service function ("sre mentality") into a product function (platform engineering team).

That said, even that adhoc invention of platform engineering worked really well, imo, but mostly because of two things:

1. Shifting from an embedded service to a product means we can operate it the same way that we do a profit center (product teams), and we get to reuse all our institutional knowledge around sales and product fit. Especially when it comes to demonstrating impact.
2. It also means that hiring becomes much easier because you get to split out all of the skill requirements and do less cross training. And the platform team specifically tends to have a charter around externalizing it's knowledge rather than institutionalizing it, making specific functions in the team easier to hire for once the team is established.

I swear to fuck I have an entire manifesto brewing in my head at this point.
I just need to make it coherent.
It's got "how people make decisions", "what companies do", "scaling decisions", all together and I think there's room in there to build an entire language necessary to define security, resilience, exploration, etc and then show how so much shit we see here is a misunderstanding of the intended scope and application of something and how it actually is supposed to help people build consensus and scale decisions

Random shit I don't have words here to fully expand out and make coherent:

- knowledge work is seeking to understand the relationship between a concept, the real world, the context of that concept's existence, and the continuity of the concept
- => software is the art of concretely understanding knowledge
- => companies are (something something)
- => resilience engineering is the art of understanding the continuity of the concept, and how to influence that continuity
- => security engineering is the art of (words n shit)

And the actions that are taken to understand knowledge are to make a decision. Good decisions are ones that maximize sustainable learning. Or something like that.

Then the point of organizations are to scale "good decisions", ie effective learning, across multiple (scope, relationship) pairings:

Scopes: individual, group, metagroup
Relationships: 1, 1:1, 1:N, N:1

Yadda yadda turns out (scope (scope, relationship), relationship) is meaningfully different.
And we generally shorthand that shit into thinking of things as "individual, team, vertical, org, company, industry" as convenient common "stacks" of nested (scope, relationship)
What structure does this form? A DAG.
Well, really, it forms a graph because there can definitely be cycles in decision making that cause you to deadlock and livelock your execution.
But meaningful progress only happens when you have a DAG, so one of the most important processes at a company is to take a graph and turn it into a DAG.
Most companies go further and turn that into a tree because uni-directional communication is easier to reason about.

Of course, how these different DAGs form and evolve over time can mirror the organization structure, or they might not, or they might evolve before or after the organization structure is changed to reflect the decision flow.

It might actually make more sense to think of the scope relationship thing as (scope, scope), now that I think about it. 1 is just (individual, ???), But realistically the relationship changes if the 1 is someone learning an idea vs someone developing an idea even if the net result to a company is the same
The above statement is equivalent to writing out your graph in `[(Edge, Vertice)]` notation.

And then SLOs, as an example, are a natural implementation mechanism for making concrete a hypothesis of system evolution and scaling that knowledge by turning the hypothesis into shared context by way of bringing into awareness when that hypothesis is no longer valid

But SLOs only start working effectively at the team level and stop working at the org level and they're only useful for certain aspects of resilience engineering

---

Scaling decisions requires the context, the alignment, the perspective and scale, and there is a directional component as well
They're at the individual decision, the team decision, the group decision, a vertical, the company, and the industry. But there is also horizontal scope and vertical scope. There is also a time-based component. Historical context and future thinking planning go into it as well.

Org structures: Product, network, functional, divisional, matrix.

Behavior evolution patterns:

- functional specialists need differentiation
- differentiation is related to integration (collaboration between specialized units).
  - Inverse relationship
- cross-functional communication, collaboration, conflict resolution, decision making is required
