---
title: "Engineering Language as a Vehicle of Innovation"
date: 2024-03-08
---

Something that I find missing in almost every software company is this thing that I'm not sure I've seen explicitly called out anywhere, but I'm going to call it an Engineering Language.
This Engineering Language is something that I'm going to attempt to describe, motivate, outline, and then illustrate with an example.

## Engineering Language

The Engineering Language is something that I would consider to be a living embodiment of how engineers speak, think about, describe, and express what they think in that problem domain.
It's not a programming language, or a DSL; it's similar to a Design Language, but for software engineering and architecture more directly.
The Engineering Language is the tool that you use to build foundations of thought and mental models and concepts themselves, so that one can coordinate the intangible nothingness of abstraction itself.

I think this Engineering Language is comprised of three things: An abstraction language, a protocol language, and an interface language.
Together, those three things make up something that is greater than the sum of its parts.

## Motivating the Engineering Language

"If there is no language, are there thoughts we can think?"
It's an interesting question, but I find it unsatisfactory; here's a different question that keeps me up at night.
"How can I share the thought that I think, if even language is insufficient and inadequate for this task?"

Let me utter a word into the air, let me breathe this thought into your mind's eye: Echo.

What does that word convey to you? I had an extremely specific mental image in my head when I wrote that word, and I know that I could spend hundreds of words, or even dozens of pages, explaining that mental image and still you would not share it with me perfectly.
Do you have any idea how discouraging it is to spend your entire life's work building mental abstractions and making them concrete in a technical sense and a human sense, yet be completely unable to even convey so much as a single thought?
It's ridiculous; we can build towers, we can see countless infinities, we can push boundaries unimaginable, we can kiss the stars, but we can't even share a thought with each other?
How many tens of thousands of years have we spent building this ability to speak and express oneself? And for what? Absolutely nothing?

For all the weaknesses and inadequacies that language has, however, nothing else comes close to enabling the same fidelity of communicating thought.
There's a reason that the pen is mightier than the sword, after all.
It seems to me, then, that if one is to scale the act of creating complex thought and nuanced abstractions and building the scaffolding upon which we construct towers of ideology that we call understanding... That one needs language.

There's a more concrete motivation here as well.
One of the most beautiful aspects of education and knowledge is that we've managed to figure out how to take a messy, non-linear, ball of mud that is "knowledge" and turn it into something that is fascinatingly incremental.
Somehow, we've managed to figure out a path through which you can start from counting and the alphabet and end up with mathematics, philosophy, linguistics, and more.

While that in of itself is fascinating, there's something in there that I think is even more amazing: it feels linear.
How the absolute fuck did we manage to build a vehicle of transmitting knowledge that is mostly somehow linear in feeling even though the world is messy, information explosion is combinatorial, cardinality is uncountable, and certainty is unknowable?
How? How did we do that?
We don't celebrate this miracle of knowledge nearly enough, in my opinion; of all of our achievements among humanity, this should rank as one of the greatest.

I'm going to switch gears for a second and talk about a theoretical business.
Imagine this business, which is going to solve a problem, with a product or a service or whatnot, and tackle a certain market.
In order to do so, one might start writing some software and doing some market research, validating things, learning about the domain, and so on.
Something curious will eventually happen: No matter how carefully one writes the software, or how adaptable one tries to remain, the company will eventually reach two critical points of solidity:

1. Some evolution in the software will disproportionately become exponentially difficult relative to its "actual" complexity
2. Some evolution in market strategy, positioning, or product development, will disproportionately become exponentially difficult relative to its "actual" complexity

But somehow, this isn't the case with language? It isn't the case with the things we learn? How? How is it so different?

If we are to achieve this sort of linearity of growth as knowledge for a business domain develops, and if we are to do so in a way that lets us express this knowledge and make it concrete through computation, then surely we need a language of some sort.
An Engineering Language.

## Outlining the Engineering Language

As I said earlier, I think the Engineering Language has three parts to it:

1. An abstraction language
2. A protocol language
3. An interface language

Let's break that down a bit.

### Abstraction Language

When we talk about abstraction, what makes a _good_ abstraction?
I think a good abstraction is one that is both opaque and transparent.
A good abstraction is opaque in the sense that it is not necessary to ever reason about something underneath the layer of the abstraction; it should not leak, it should break, it should deliver on what it promises, it should behave as an abstraction rather than a leaky shortcut.
A good abstraction is transparent in the sense that it is not necessary to know the abstraction in order to reason about something below it, at no point is the interaction of the abstraction "magical", at no point does the abstraction require you to have 100% knowledge of the abstraction and 100% knowledge of the thing it abstracts and 100% knowledge of how those two mesh together; lastly, a good abstraction is derivable in that if you see a new instance of it, it behaves logically in a way that you can reason about the implementation accurately.

Abstractions become useful precisely when they are able to be depended on _and_ ignored, when they are able to be mixed and integrated, built on top of and built around.
Abstractions should exist to coexist.

Which means, of course, that only some things _can_ be a good abstraction; fundamentally, how you design the lower layers of your infrastructure and your software and your sociotechnical system will dictate quite literally the constraints of what can and cannot be expressible as an abstraction _at all_.
No amount of papering over something will let you break the laws of physics, no amount of fudging the numbers will make time run backwards, and no amount of magical bullshit sprinkles will solve fundamental limitations of distributed systems, and no technical solution will ever solve a people problem.

But if you only have some things that can be a good abstraction, surely you need a language to express and help enumerate the possible abstractions one can build.
Not only that, but the language should help you express why those are good abstractions, why certain others aren't, and help other people build combinations of abstractions and towers of them in a way that preserves the coherence and alignment at scale.
That is something I don't really see anyone doing, but it's sorely sorely needed.

### Protocol Language

If an abstraction is a mental construct turned into a tangible building block of conceptual thought, then protocols are the cement through which you build the towers of your imagination.
Any system needs communication, coordination, coherence, adaptive capacity, failure handling, modularity, and more.
All of those things have one thing in common: You build the facilities which enable those by building a protocol.

But again; the shape of your system determines the shape of what can be a good protocol, which means you need a language for defining and conceptualizing what it even means for something to _be_ a protocol and to interface with other protocols.

### Interface Language

This one is tricky.
We have abstractions, and we have protocols, so what makes an interface different from those?
To stretch the construction analogy a bit more: if abstractions are bricks, and protocols are cement, then interfaces are the blueprints that let everything flow through the building correctly.

Abstractions enable growth by allowing one to compose ideas, protocols enable growth by allowing one to compose systems, and interfaces enable growth by allowing one to compose interactions.

Naturally, I love interfaces, and have a horrible time explaining what I mean here; I'll give it a shot.
I don't really mean interfaces in the `abstract interface List<T>` sense; that's useful, but also far too low level.
As a slightly better example, one could think of kubernetes as a protocol, as an abstraction, as an interface, or as any combination of those; when building a platform for others, I prefer to think of it internally as an interface and externally as a protocol.
Internally, I use it as an interface and build things with it and compose all the possible interaction points people might have with the distributed system and glue them together in a coherent way; but I don't expose the interface really, I expose the protocol so that people know how to communicate with the system.
It's a subtle difference, and I'm not sure I'm explaining it well.

## An Illustrated Example

This example is either going to make a ton of sense, or absolutely zero sense.
Let's look at something that has managed to do this quite well: The web browser.

### Browser Abstraction Language

What are the building blocks of a browser?
What makes good ones, bad ones, weird ones, or even just possible ones?
I think, honestly, that there's only two main ones.

1. HTML + Accessibility Object Model + CSS
2. URLs

HTML, CSS, and the Accessibility Object Model are the main languages that let you even conceive and describe what it means to "be in" the browser at all.
They help define the capabilities of it, the limitations of it, and shape what it means to be the web in a tactile sense.

But URLs? They _are_ the web.
URLs are the most defining aspect of the web and are so key that they are simultaneously an abstraction language, a protocol language, and an interface language.

Javascript doesn't count here; it's not an abstraction, it's an interface.
It doesn't create new abstractions, it surfaces ways you can interact with them; the fact that only some things are exposed via Javascript is a perpetual wart and flaw in the design of modern browsers and it continues to be a glaring omission in their design.

### Browser Protocol Language

When we think of protocols, we likely start thinking of: TCP, UDP, service workers, https, http/2, http/3, and websockets; we might get into an argument about whether or not those last ones count, or whether or not http/2 and http/3 are different protocols or not, but we certainly use all of these like protocols.

They're not a protocol _language_, though; they're manifestations of that language.

The protocol language of the browser is simple: it's the URL.
`protocol://domain/sub/resource?key=value&metadata`
Look at that thing.
It's glorious, it's gorgeous; contained within that language is the empires of thousands of libraries, millions of lines of code, dozens of protocols, and more.

The language of the URL helps shape what it even means to be able to think about building a protocol for the web, and its why we can instinctively feel like REST is a "web native" RPC, but most others, such as gRPC, are not.

Fuckin love URLs

### Browser Interface Language

There are two interfaces I want to talk about here.
I'm going to intentionally avoid the accessibility interfaces (and lack of them) here because I'll blow a gasket and rant for a few thousand words if I get started on that.

ANYWAYS

The two interfaces that I want to talk about are URLs and Javascript.
What makes a URL an interface here? Well, simply that how people interact with the web browser or initiate the web browser and do all of that is... Through URLs.
Want to open the browser? Most people now actually just click on a URL anywhere on the computer, any time, anywhere, and expect a browser to open up spontaneously.

That's honestly remarkable.
It's absurd how pervasive that idea is; can you imagine literally anything else in computing where, regardless of whether it's an iPhone or Android or a desktop or a laptop or any OS in the last 20 years, everything works the same way?
Click link, see site, never think about whether or not you need to start the browser first.
Truly magical.
Now _that's_ an interface language.

It's a language in the sense that it lets you know the limitations and lets you conceive of new possibilities.
Did anyone imagine deep linking was going to be a think in mobile apps back in 2004?
Of course not; we didn't even have iPhones yet.
(Yes yes I hear you shouting in the background there Plan 9, shh, its ok)

Javascript is, well, Javascript; of all the interfaces with the browser, very few are as raw and deeply embedded as the programming engine through which we decided to shove the entirety of all and everything through.

## Where Am I Going With This?

If you've made it this far, congratulations, you got to read my ramblings for a bit on an Engineering Language, with apologies to being a bit tired while writing this and not proofreading it in the slightest before yeeting it onto the internet.

But really, what's the point here?
The point for me, simply, is that I don't think tech companies are thinking enough about what it means to build a language for engineering.
How does one go about building something in a way that you can distribute tools of thought that are deeply embedded in peoples workflows that they learn to conceptualize thought intuitively in a way that's aligned with the direction that you need to go?
How do you make software architecture where coherence with the company vision is an _emergent property_?
Is that even a thing people think is possible? I think it is, I just also think we suck at doing that.

I see it in a really bad way where you get software debt built up in such a way that you can't meaningfully explain to anyone why one idea takes two weeks and another takes two years to implement.
What a waste of talent and time all around.
I'd love to see a world where instead of pontificating about tech debt or agile practices or wanking about the OKR-go-round, we figured out how to actually build cross-functional communication in a meaningful sense.
What if a product manager actually had the language to have a meaningful conversation with a software architect and a solution engineer and marketing and UX research?
What if we were able to build software in a way that we could proactively identify opportunities for alignment and that such opportunities for synergetic product and feature development happened _naturally_ and _organically_?

Anyone who thinks they have cracked the formula for doing so is lying; there's no way we've figured this out as an industry, and I'm doubtful we ever will figure out an actual methodology and pedagogy for teaching this type of thing.
That said, I think it's possible to do so for _a_ company and _a_ set of circumstances.

Whoever figures it out for _their_ company and _their_ circumstances is going to massively increase their chances of success.
That is, if they can get everyone speaking the same language.

Which is, of course, an entirely separate problem with its own massive difficulties.
