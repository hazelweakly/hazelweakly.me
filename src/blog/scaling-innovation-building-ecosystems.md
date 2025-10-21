---
title: "Scaling Innovation: Building Ecosystems"
date: 2025-10-21
---

Innovation is a tricky subject.
The precise details of how to do it are not well studied, at least not under the name "innovation".
In addition, multiple disciplines have advanced research that overlaps significantly, but the multidisciplinary integration lags behind by decades, making shared empirical research or identifying more global patterns difficult.

Nevertheless, I consider it dearly important to share and study and discuss the topic of innovation, and so I will provide some research notes here, as well as my overall interpretation of them.
Most of this is going to be a compilation of research and the synthesis of it;
consequently, I will note where my hypothesis and personal opinions sprinkle in.
Otherwise, you may assume that the information here comes from somewhere with strong empirical backing (it will also be cited).

> One final thing that's important to know about me is I do not particularly resonate with the phrase "strong opinions weakly held."
> I prefer to think of it as "open worldviews, deeply researched."
>
> Which is to say, my worldview is _open_, and my opinions are always open for challenge and debate, but I will _insist_ on evidence proportional to the strength of the claim; extraordinary claims require extraordinary evidence, particularly if they present counter-factually to decades of empirical research.
> Naturally, that doesn't mean that the extraordinary claim can't be true (quantum physics is a great example), but I am likely to be quite grumpy if an under-researched _opinion_ is used to counter viewpoints that are backed by densely-cited empirical research.
>
> That said, I hold anecdotal evidence in high regard and consider qualitative evidence to be equal (if not frequently superior) to most "objective" quantitative data.
> In particular, I am dearly fond of the phrase "what works in practice can work in theory," and hold that close to my heart whenever I research complex and interdisciplinary topics, particularly those involving matters of humanity.

With that out of the way, I would like to make a brief apology towards the many disciplines of science and research that I am about to enthusiastically smash together.
I am not an expert in most of these, merely a well-read and curious practitioner.
That said, I've done my best to cite where appropriate, and if I've missed a citation or if something needs clarification, please let me know.

## Tying Disciplines Together

My personal hypothesis is that you can tie together the following domains of research (Resilience Engineering, Social-Ecological Systems, and Cumulative Culture from Cognitive Psychology), and map them fairly directly between each other.
This forms the basis of much of my thinking around understanding, building, and operating Complex Adaptive Systems.

- [Resilience Engineering](https://www.resilience-engineering-association.org/resources/where-do-i-start/): My definition of resilience engineering is "the science of understanding, improving, operating, and building complex adaptive systems."
  The outcomes and artifacts of this science is a collection of frameworks, theories, and models which help us do that.
- [Socio-Ecological Systems (SES)](https://en.wikipedia.org/wiki/Socio-ecological_system): This is an interdisciplinary lens of inquiry, originating from public economics, systems ecology, and complexity theory.
  The study revolves around SES, which can be defined as "a set of critical resources (natural, social, economic, and cultural) whose flow and use is regulated by a combination of ecological and social systems."
  The full definition is more complex and contains additional factors, but this aspect gets us closer to the heart of what is "unique" about this lens of inquiry.
  This can also alternatively be viewed as a lens of inquiry within Resilience Engineering.
- [Cumulative Culture](https://royalsocietypublishing.org/doi/10.1098/rstb.2015.0192): This is a lens of inquiry, largely within cognitive psychology, although it is also interdisciplinary to an extent.
  Cumulative culture is the study of how humans accumulate progress over time, such that the output is greater than any individual could produce on their own.
  It lays the foundation of understanding how groups of humans continually "ratchet" up their competence over time in order to accomplish increasingly sophisticated outcomes.
- [Operads](https://johncarlosbaez.wordpress.com/2021/06/25/complex-adaptive-system-design-part-10/): I'm including these as a separate top-level item because of how fundamental they seem to be. Operads are a mathematical object that abstracts "operations that compose many objects into a single object."
  Operads and their algebras represent a rigorous mathematical framework for modeling a Complex Adaptive System as an overlapping set of networks, each with a valid set of operations, and a way to build and develop compositions of those operations such that the result is well formed.
  To put that in plain English: Operads provide a mathematical formalism to build "correctly functioning" complex adaptive systems out of independent and adaptive yet understandable components.
  As a note to my future self, I need to revisit this and see if Operads are still the nicest mathematical framework, or if the work that has been emerging with [double categories](https://arxiv.org/pdf/2505.18329) is easier to wrap one's head around for the applications I'm imagining.
  I need to make extra care to ensure that I actually _need_ all the machinery of the categorical construction, because sometimes a cute lil abstract object is entirely sufficient, and they're much cuddlier to boot.

In addition, I have grown fond of a few particular tools for tying things together and going from theory to action.
Wardley maps are one of them, and I will reference material more relevant, but I won't provide full introduction here.

Summarizing the above, I personally hold the viewpoint that any sufficiently advanced system exhibits the properties of an ecosystem, a culture, and a complex adaptive system.
Additionally, I also think all three of these are the same thing.

Rather than repeatedly referencing ecosystems, cultures, complex adaptive systems, etc., as separate concepts, I will reference them by name when the particulars matter, (ie when citing particular fields of research), **and otherwise will refer to the collective concept as a CAST (Complex Adaptive System Thingy).**
Yes, it's thingy; one can't take themselves too seriously if they wish to study and understand wibbly wobbly system-shaped stuffs after all.

My hypothesis is that given the above, we then see:

- Cumulative culture as a way to understand under what environmental conditions humans achieve optimal collaboration.
- How to optimize and facilitate human innovation, and how to understand when one has studied to compromise the human element.
- Socioeconomic systems then provide a way to understand what properties of the system result in effective environments, as well as ways to understand and optimize the efficiency of the environment by being able to visualize it as an economy.
- Resilience engineering comes in to provide the most generally formed "laws of the universe" for CASTs, ways to strategically visualize and orient towards desired system performance, and a robust toolkit for helping humans handle the non-intuitive nature of CASTs.
- Lastly, Operads provide a mathematical framework under which one can validate that automation built to compose complex components do not result in a globally incoherent system.

## Understanding Ecosystems

I posit that any sufficiently large CAST contains within it at least one commons, if not several.
Consequently, while it may be natural to look at the research around SES and Commons, as things that do not apply to enterprises.
I would argue that it certainly does.
Some examples of commons within any large enterprise, in my opinion, are:

- The Network
- Technical Strategy
- Infrastructure
- Fiscal Budget
- Platforms and Software Frameworks
- Inner-Source Software
- Road-maps
- ...

In particular, the research around SES was originally started to specifically address common pool resources with public goods, but services, and the general problem of "balancing resource use and the system maintenance" all see quite direct applicability from this inquiry of research.

### Socio-Ecological System Framework

The most approachable framework here is the SES framework.

> - Solid boxes denote first tier categories, resource systems, resource units, government systems and actors.
> - Each first-tier category contains multiple variables at the second tier as well as lower tiers.
> - Action situations are where all the action takes place as inputs are transformed by the actions of multiple actors into outcomes.
> - Dashed arrows denote feedback from action situations to each of the top tier categories.
>   The dotted-and-dashed line that surrounds figure indicates that while the system can be considered a logical whole, it will always be influenced by external factors.
>   {.italic}

![Revised social-ecological system (SES) framework with multiple first-tier components. The quoted bullet list above describes the image.](./src/images/ses.png "Revised social-ecological system (SES) framework with multiple first-tier components."){.w-full}

_([McGinnis, Michael D., and Elinor Ostrom. "Social-Ecological System Framework: Initial Changes and Continuing Challenges." Ecology and Society 19, no. 2 (2014).](https://www.jstor.org/stable/26269580))_

### Design Principles for Managing Common Resources

These have been empirically validated across decades of research in multiple contexts, multiple cultures, and multiple environments, and so on.
They are about as close to a law of the universes we can get, essentially.

|      | Principle                                 | Description                                                                                                                                                                                                                                |
| ---- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _1A_ | User boundaries                           | Clear boundaries between legitimate users and nonusers must be clearly defined.                                                                                                                                                            |
| _1B_ | Resource boundaries                       | Clear boundaries are present that define a resource system and separate it from the larger biophysical environment.                                                                                                                        |
| _2A_ | Congruence with local conditions          | Appropriation and provision rules are congruent with local social and environmental conditions.                                                                                                                                            |
| _2B_ | Appropriation and provision               | The benefits obtained by users from a common-pool resource (CPR), as determined by appropriation rules, are proportional to the amount of inputs required in the form of labor, material, or money, as determined by provision rules.      |
| _3_  | Collective-choice arrangements            | Most individuals affected by the operational rules can participate in modifying the operational rules.                                                                                                                                     |
| _4A_ | Monitoring users                          | Monitors who are accountable to the users monitor the appropriation and provision levels of the users.                                                                                                                                     |
| _4B_ | Monitoring the resource                   | Monitors who are accountable to the users monitor the condition of the resource.                                                                                                                                                           |
| _5_  | Graduated sanctions                       | Appropriators who violate operational rules are likely to be assessed graduated sanctions (depending on the seriousness and the context of the offense) by other appropriators, by officials accountable to the appropriators, or by both. |
| _6_  | Conflict-resolution mechanisms            | Appropriators and their officials have rapid access to low-cost local arenas to resolve conflicts among appropriators or between appropriators and officials.                                                                              |
| _7_  | Minimal recognition of rights to organize | The rights of appropriators to devise their own institutions are not challenged by external governmental authorities.                                                                                                                      |
| _8_  | Nested enterprises                        | Appropriation, provision, monitoring, enforcement, conflict resolution, and governance activities are organized in multiple layers of nested enterprises.                                                                                  |

_([Cox, Michael, Gwen Arnold, and Sergio Villamayor Tomás. "A Review of Design Principles for Community-Based Natural Resource Management." Ecology and Society 15, no. 4 (2010).](http://www.jstor.org/stable/26268233))_

### Applying the Design Principles

As such, whenever I think about "how do I design something people can grow to become adapted by a company as a way to collectively manage some resources."
I reach for this as a way to check and guide my work.
If a solution doesn't satisfy these criteria, it will eventually fail in some manner at scale, or it will only succeed temporarily.

Consequently, if I'm designing a system and want to ensure that it is temporary and does _not_ scale, (as a way to shorten the time to production), then I will intentionally choose as many of these to violate as I can.
To clarify, I don't do that in order to maliciously ruin the system, but rather it my experience the shortcuts in system design do not actually end up saving time unless they violate many of these principles.

The worst outcomes that I tend to see are when multiple shortcuts are introduced that do _not_ violate these principles, yet only half of the principles are fulfilled.
The system then is capable of evolution just enough to limp on far beyond any intended lifespan, yet the friction in the system is so great that it becomes a source of continual pain for everyone participating in it.

Thus, I strive to be bimodal in my application of these principles.
By intentionally failing as many of them as I can, the knowledge I gain as these things successfully fail to scale means that a new scalable solution is far clearer to build.
Likewise, by fulfilling as many of these as I can, I can ensure that the resulting system is flexible enough to work in practice, long term, and so getting the design right from day zero becomes much less important.

### More of Ostrom's Work

This will be expanded later as I have time.
I'm just going to dump a bunch of info here for now in order to list out the relevant concepts.

[Elinor Ostrom. "Beyond Markets and States: Polycentric Governance of Complex Economic Systems"](https://web.pdx.edu/~nwallace/EHP/OstromPolyGov.pdf)

> "A core effort is developing a more general theory of individual choice that recognizes the **central role of trust in coping with social dilemmas.**"

- Trust and reciprocity are core ideas of success in systems.
  Trust is the _most essential element_ to overcoming social dilemmas.
  This is specifically **trusting that others are reciprocators.**
  In other words: collective benefit is directly derived from how much cooperation actors exhibit.
  Cooperation is directly derived from how much trust actors have that other participants are reciprocators.
- "One-size-fits-all" policies are not effective.
- There are four types of goods and they can be categorized by factor and difficulty of but slowly potential beneficiaries with shift tractability of use.
- Providing opportunities for "cheap talk" (or any form of communication) reduces over-consumption of common-point resources
- Polycentric governance models, the governance of a CAST: many centers of decision making that are formally independent of each other, either by being truly independent or by being interdependent.
  - Importantly, this shows empirically that complex systems are not chaotic systems, even if a sufficiently complex CAST approaches the appearance of chaos, they can still be governed with better-than-chaotic approaches despite the potential loss of globally coherent collective knowledge.
  - **Crucially, polycentric governance of resource and infrastructure systems are more efficient, more effective, and more understandable.**

<table class="2x2 bordered-box">
  <tbody>
    <tr>
      <td class="flow">
        <p><strong>Common Pool Resources</strong></p>
        <p>
          <em>High Difficulty of Excluding Potential Beneficiaries.</em>
          <br/>
          <em>High Subtractability of Use.</em>
        </p>
      </td>
      <td class="flow">
        <p><strong>Public Goods</strong></p>
        <p>
          <em>High Difficulty of Excluding Potential Beneficiaries.</em>
          <br/>
          <em>Low Subtractability of Use.</em>
        </p>
      </td>
    </tr>
    <tr>
      <td class="flow">
        <p><strong>Private Goods</strong></p>
        <p>
          <em>Low Difficulty of Excluding Potential Beneficiaries.</em>
          <br/>
          <em>High Subtractability of Use.</em>
        </p>
      </td>
      <td class="flow">
        <p><strong>Toll Goods</strong></p>
        <p>
          <em>Low Difficulty of Excluding Potential Beneficiaries.</em>
          <br/>
          <em>Low Subtractability of Use.</em>
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Ecosystems as a Future Sensing Engine

One can identify ecosystems as a competitive strategy and can either play the game as an _adversarial_ competition or as a _collaborative_ competition.
Adversarial in this sense means in the us versus them sense (like the capitalistic market), not in the "let's maliciously step outside of the rules and ruin them" sense.
A notion of Collaborative competition, here, is my idea.
The idea is that, given a large enough internal ecosystem, we benefit from artificially creating enough diversity in order to stimulate innovation faster than may naturally occur otherwise.

I find it fruitful to approach designing ecosystems for collaborative competition by thinking of them through an Innovate Leverage Commoditize (ILC) model.
[This blog post by Simon Wordley](https://blog.gardeviance.org/2014/03/understanding-ecosystems-part-i-of-ii.html) contains a fantastic overview and example of this and how it can look in the real world.
Quoting Simon here, we can see why this is directly applicable to most large enterprises.

> The purpose of a platform (and hence an API) is to create an ecosystem. The **value is in the ecosystem**. The **ecosystem is a future sensing engine**. Correctly used (under an ILC model) you can create network effects whereby ...
>
> 1.  Your apparent rate of innovation
> 2.  Your customer focus
> 3.  Your efficiency
> 4.  Your stability of revenue
> 5.  Your ability to maximize opportunity
>
> ... All increase, SIMULTANEOUSLY, with the size of your ecosystem and NOT the physical size of your company.

(emphasis mine)

This works by tracing through the following chain of thought.

1. Competition enables new higher order systems.
   This is backed by cumulative culture, as well as decades of anecdotal success by Wardley and other change agents operating the companies and governments of various sizes.
2. Evolution operates in multiple overlapping cycles at the macro and micro level.
   This is bound by every field studying CASTS.
3. Studying patterns of utility consumption provides sufficient data to strategically sense the future.
   You can see this particularly well with AWS, which has applied this model almost since the very beginning of its inception.

### The Opportunity

Looking at the diagram below, the numbers labeled 1 2 3 (in red) correspond to the below chain of thought.
This chain of thought pattern matches on the above one intentionally to drive the point home a bit more thoroughly.

1. If you commoditize a component into an industrialized form, that enables others to innovate on top
2. Then you can leverage consumption behavior in order to detect successful innovations.
3. Finally, you can commoditize any identified success to become a fast follower without incurring prohibitive R&D risk. This repeats indefinitely.

![An ILC diagram showing the zig zag upwards motion of the commodification and industrialization of individual innovations](./src/images/ilc-model.png "The zig-zag evolution of innovation via cooperative competition"){.w-full}

_([Wardley, S. "Understanding Ecosystems" (2014).](https://blog.gardeviance.org/2014/03/understanding-ecosystems-part-i-of-ii.html))_

The reason this works so well is because there are two different types of risk here.
Firstly, there is the R&D risk that you externalize onto the people operating in the ecosystem.
Secondly, there is the risk of scale.
Taking a solution that has proven to work at one scale, and then actually scaling up, creates a lot of challenges and risk in budget and operational skill.
You, as the caretaker of an ecosystem, can actually take on that type of risk because you are better equipped to handle the economies of scale.
Your consumers, on the other hand, are better equipped to handle the economies of diversity.
Building a game that plays to the strengths of both allows you to actually work collaboratively together, even if you're not on the same team, and even though it appears to operate like a competition.

In an adversarial competition, one must balance how rapidly and pervasively the opponent's consume and commoditize successes in order to make it financially worthwhile for actors to build on top of the existing commodities in your ecosystem.
In a cooperative competition, one must balance how rapidly and proficiently they consume and commoditize successes in order to ensure that they can curate the growing ecosystem effectively, and also to ensure that innovators have an incentive to work with you to make it easier for the hand-off to occur.

I like to think of this as a garden (and indeed, Wardley uses that metaphor occasionally as well).
If one harvests the garden too aggressively, the garden dies from resource starvation.
If one harvests it too little, the garden dies from becoming overgrown and unruly beyond manageable capacity.
In many enterprises, we can think of our platforms as ecosystems that are comprised of inner overlapping sub-ecosystems, each with their own set of components and various levels of evolution (but often at the product-to-utility maturity of evolution).
It follows, then, that if a company's platform adopts components and commoditizes them too slowly, teams will be reluctant to build and innovate because the cost of carrying the burden of R&D will be too high.
Likewise, if that company's platforms commoditize too rapidly, teams will not innovate because the platforms will lack the stability required to be built build on top of, and the teams will experience prohibitive amounts of churn fatigue.

To expand on that, one can imagine enabling product teams at the "uncharted" side to innovate, rather than requiring innovation to happen solely through platform teams.
This would be de-risked on the product side by allowing them to solve their immediate problems faster than otherwise could happen.
Likewise, it would be de-risked on the platform side by incentivizing collaboration between the platform team and product team.
In that case, the platform team would aim to act in more of an advisory or consultation role.
Ultimately, this would have the goal of ensuring that successful innovations can seamlessly be adopted or graduated into to the platforms.

Essentially, what we form here is a positive feedback loop in the form of a **bidirectional trust building engine**, where

1. Actors become increasingly trusting that **platforms reciprocate investment and innovation by rewarding actors with a better platform and reduced operational burden**, with which they can continually ratchet up their capabilities and build increasingly valuable products.
2. Simultaneously, platforms become increasingly trusting that **actors reciprocate investment and commoditization by building on top of platforms and working to reduce burden of adoption by delivering high-quality innovations** that can be efficiently and effectively commoditized.

In my opinion, this is _similar_, but not entirely equivalent, to concepts like the [golden path](https://charity.wtf/2018/12/02/software-sprawl-the-golden-path-and-scaling-teams-with-agency/), [the paved road](https://www.oreilly.com/videos/oscon-2017/9781491976227/9781491976227-video306724/), and the [reliability collaboration model](https://medium.com/booking-com-infrastructure/how-reliability-and-product-teams-collaborate-at-booking-com-f6c317cc0aeb).
I also think that this serves as a very handy approach, combined with Ostrom's design principles, towards solving the problem of continually growing standardization without stifling innovation or preventing necessary specialization.
By bringing both into a consistent framework, we turn an otherwise tension filled trade-off of "I want to optimize for my product use case" versus "I want to optimize for ease of uniform operation" into a mutual trade-off space of "how can I innovate in a way that helps you help me best" and "how can commoditize in a way that helps you help me best."

## Understanding Cumulative Culture

What follows is a very rough dump of my internal notes which will be cleaned up later.
I do apologize for the mess, but I apologize only mildly.

- [Eureka! What is innovation, how does it develop, and who does it?](https://pmc.ncbi.nlm.nih.gov/articles/PMC5053256/)
  - Idea. Innovation is independent invention, age social learning, and/or modification of social learning, but it must be novel.
  - Innovation should be useful and/or transmitted.
  - (insert image from paper)
  - Innovations don't need to be intentional, but to lead to learning.
  - Innovation classification. Low, (unlearned chance via an individual, not repeated). Medium, (individual learned, repeated by individual). High (Individually learned, acquired by others).
- [Cumulative culture and complex cultural traditions.](https://onlinelibrary.wiley.com/doi/10.1111/mila.12335)
  - Idea. Four distinct trends associated with cumulative culture. adaptiveness, complexity, efficiency, and disparity.
  - Adaptiveness. As variants are transmitted over time, they can accumulate modifications, and some of these make about a concomitant increase in the biological fitness of individuals who bear or express these variants.
  - Complexity. There are three competing accounts that overlap and conflict. Unit Counting, Skillfulness, and Interactive Complexity
    - Unit counting is the increase in actions and tools involved to produce a behavior.
    - Skillfulness is how many people are required to transmit cultural knowledge and how difficult expertise is.
    - Interactive complexly is the number of components in a tradition and degree of interaction between them.
  - Efficiency - Lowering costs associated to acquiring or performing behaviors
  - Disparity. Accumulating increasing numbers of qualitatively distinct cultural traditions. Disparity also likely has to come before complexity.
- [Where does cumulative culture begin? A plea for a sociologically informed perspective.](https://link.springer.com/article/10.1007/s13752-020-00351-w)
  - Idea: cumulative culture as a form of behavior that could not have been invented by an individual alone.
  - Care giving and culture giving go hand in hand.
  - Social Learning: Emulation, Imitation, Modification, Teaching, high fidelity transmission
    - Transfer mechanisms that are simpler than social learning are: peering, participation, co-performance, or engagement with a material environment altered by group members.
    - Migratory patterns of sheep and moose evolve via social learning, same for homing pigeons.
    - Post-natal environment is the continuation of the universe as a stimulation learning environment. the community is a social uterus
    - Group-specific practice patterns are sub-action level.
  - Habitus: social environment, a supply of social latent solutions plus social learning.
    - A cumulative matrix of perceptions, appreciations, and actions
    - embodied cultural and social capital
    - located on the sub-action level of dispositions and competency; not dissimilar from "attitude," conceptually
    - evolves via osmosis-like action
    - Behaviors of humans: evolutionary, historical, ontogenetic
    - Cultural niche construction.
  - Metaphor: ratchet
  - alternative metaphor: mountaineering effect (development is path dependent)
  - idea: habitus. Embodied cultural and social capital
    - A system of durable and transposable dispositions which, integrating all past experiences, functions at every moment as a matrix of perceptions, appreciations, and actions, and makes possible the achievement of infinitely diversified tasks, thanks to analogical transfers of schemes permitting the solution of similarly achieved problems.
  - [Innovation in the Collective Brain](https://royalsocietypublishing.org/doi/10.1098/rstb.2015.0192)
    - idea: our societies are a collective brain
    - Within these collective brains, the three main sources of innovation are serendipity, recombination, and incremental improvement.

### Cumulative Culture and Developer Experience

Additionally, cumulative culture [has a link to developer experience and developer productivity](https://www.drcathicks.com/post/a-cumulative-culture-theory-of-developer-problem-solving-new-preprint) through the work of a good friend of mine, [Dr. Cat Hicks.](https://www.drcathicks.com/)

The abstract is below (emphasis mine)

> Understanding how developers problem-solve within ecosystems of practice, tooling, and social contexts is a critical step in determining which factors dampen, aid or accelerate software innovation. However, industry conceptions of developer problem-solving often focus on overly simplistic measures of output, over-extrapolate from small case studies, rely on conventional definitions of “programming” and short-term definitions of performance, fail to integrate the new economic features of the open collaborative innovation that marks software progress, and fail to integrate rich bodies of evidence about problem-solving from the social sciences. We propose an alternative to individualistic explanations for software developer problem-solving: a Cumulative Culture theory for developer problem-solving. This paper aims to provide an interdisciplinary introduction to underappreciated elements of developers’ communal, social cognition which are required for software development creativity and problem-solving, either empowering or constraining the solutions that developers access and implement. **We propose that despite a conventional emphasis on individualistic explanations, developers’ problem-solving** (and hence, many of the central innovation cycles in software) **is better described as a cumulative culture where collective social learning** (rather than solitary and isolated genius) **plays a key role in the transmission of solutions, the scaffolding of individual productivity, and the overall velocity of innovation.**
>
> -- Hicks, C. M., & Hevesi, A. (2024, November 21). A Cumulative Culture Theory for Developer Problem-Solving. <https://doi.org/10.31234/osf.io/tfjyw>

What I take from this is that, in other words, developer productivity and the overall velocity of innovation are best thought of as a product of collective social learning.
Fortunately, collective social learning is well studied in humans as a cumulative culture, and we would do well to learn from that existing and rich body of work.
Bringing everything together, I take this to mean that, in my opinion, focusing on a collective environment directly implies that the facilitation and creation of that environment becomes a top priority for a high performing enterprise, and we can understand how to operationalize this facilitation by framing it in the lens of socio-economic systems.

To put concisely: The journey to high performance in a community is equivalent to pursuing the art of learning.
For an enterprise, that means the enterprise should built towards having and maintaining a culture that seeks to understand itself better.

---

This blog post is, as of October 2025...
Roughly a quarter of the way done.
I still need to flesh out all of the skeletons and add all of the Resilience Engineering and Mathematics in here.
Rest assured, I will probably get to that. I have every intention! But I don't control the future.

Anyways, if you're reading this and have suddenly realized that the blog post is old enough to go to school and I have yet to remove this notice, please find me somewhere on the internet and poke me about it.
