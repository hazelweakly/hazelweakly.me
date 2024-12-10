---
title: "The Future of Observability: Observability 3.0"
date: 2024-12-09
draft: true
---

Observability, so hot right now.
Over the years, we've seen observability go from a word nobody used, to a word everyone used.
We've seen projects come and go, and we've seen technologies emerge out of the ashes, born from the tears of SREs long departed.
Yet, amongst all of this growth, all of this innovation, one question remains: and then _what_?

You see, it turns out observability is pretty useless, because it doesn't _do_ anything.
Not by itself, that is.
Which makes sense! Computers don't do anything until you turn them on, bikes don't go forward unless you pedal them, and raw materials won't turn themselves into a building without blueprints and labor.
But observability? Somehow it's this thing that we've been able to grow into a multi billion dollar industry composed entirely out of "get a bunch of data, and then..."

That's it.

Just "and then". Nothing else, nothing more.
That's right! GET ALL THE THINGS! UPLOAD **THE WHOLE INTERNET** INTO A ZIP FILE CALLED `final_super_legit-awesome.observability.pdf.com`.
And then...

Will someone please tell me what the fuck the "and then" part is supposed to be?
Anyone?
And then **WHAT**?
Draw the rest of the fucking owl already.

If you remember seeing a previous post I wrote on [redefining observability](/redefining-observability), I brought this up as something I specifically wanted to address in the new definition of observability that I proposed.
In fact, this "and then" problem is a huge reason why my definition is:

> A process through which one develops the ability to ask meaningful questions, get useful answers, and act effectively on what you learn.

See that? The "act effectively" part.
That, that right there, that's the stuff.
Gimme more of that.
I still don't see nearly enough of that anywhere.

Which is wild, right?
Imagine a sales team that had a motto of "we create sales leads!" and then never talked about the "and then" part.
Imagine a marking department whose mission was "we create impactful campaigns to raise awareness!" and then never bothered to think about what comes after that.
Imagine an engineering organization who aligned around the most beautiful strategy of "we design reliable systems" and then forgot to care about writing the fucking code in the first place.

Seriously? Who would hire those jokers?

Yet I see so much observability out there that's all about data, gathering data, thinking about data, cleaning data, making systems observable, making systems monitorable, ...

And then what?

Alerts! They cry! We'll get SLOs! SLIs! So many fucking configuration files! We'll instrument your deployments! You'll be able to slice and dice! The whole world's your oyster!

**And. Then. What?**

## Observability Through the Ages

Well, let's back up. How'd we get here, anyways?
You can't understand "and then what"
Let's go back in time to when we had observability 1.0, which back then we just called "instrumenting your system so you can unfuck it up later" like a buncha heathens.
We had the three pillars of logs, traces, metrics, and all of their derivatives (y'know, RUM, APM, dashboards, ...).

Life was great, right?

As an engineering executive, all you needed to do and worry about was to implement the three pillars...
And then what?
Eh, don't worry about that, just implement the pillars.
They're capabilities! It's a maturity model, just allocate the headcount, implement the thing, watch number go from zero to mature, and sleep tight knowing that High Impact Awesomesauce is happening.

Well, okay, it turns out we need to back up a little bit because that isn't really what happens in reality.
Despite implementing the three pillars, you run into a lot of limitations, all stemming from a central foundational choice: multiple sources of truth, with no ability to correlate them, lead to an inability to ask meaningful questions.
Charity calls this ["making decisions at write time about how you and yoru team would use the data in the future"](https://www.honeycomb.io/blog/one-key-difference-observability1dot0-2dot0) in her nice observability 1.0 vs 2.0 article.
I like that phrasing a lot, but I personally like to emphasize the "inability to ask meaningful questions" part a bit more than the "write-time decisions" and "existance of pillars" parts.
That's just me, though.

However, I do want to note that these are equivalent ideas: I'm not reinventing anything here.
That might get missed, so I wanna really spell it out.
These three concepts are equivalent.
If anything, they're duals to each other; different facets of the same shape:

- Observability 1.0 is defined by pillars
- Observability 1.0 defines the questions you can ask at write time
- Observability 1.0 results in an inability to ask meaningful questions

Now, let's go forward in time a little bit, to where observability 2.0 comes in.
The thing that defines observability 2.0 is a combination of one data format, one storage location, and one source of truth.
Charity would argue that the structured log events are the data format that is required by observability 2.0; I think anything that lets you build relational data structure on top works.
Which implies that a time series, logs, and any other temporal data structure with metadata works fine.
And while that's... _true_... seriously, use structured log events, you'll hate yourself a whole lot less.

Regardless! The big shift here from an _implementation_ standpoint is uniformity in data format, storage location, and source of truth.
And from a capabilities standpoint, you get the new ability to correlate information together.
Now, rather than defining what questions you ask at write time, you define what correlations you can make at write time.
Huge improvement!

And again, a lot of these different ideas are all equivalent.

- Observability 2.0 is defined by structured wide events as a single source of truth
- Observability 2.0 defines the correlations you can make at write time
- Observability 2.0 results in the potential to ask meaningful questions

Oh hell yeah, now we have the potential to ask meaningful questions.
This is awesome.
There's only one teensy tiny problem I have with this, though: "and then what?"

You can ask meaningful questions now...

## And Then What?

Firstly, I'm going to make a somewhat controversial claim in that you can get observability 2.0 just fine with "observability 1.0" vendors; the only thing you need is the ability to query correlations.
Now, is that hard as fuck with observability 1.0 tooling? Yeah, generally; there's a reason you don't really do that.
I mean, you can [implement your entire backend in brainfuck](https://sourceforge.net/projects/brainfix/) too, but also... _Why_?

The point I'm really making is that the tooling and/or vendor choice(s) don't actually restrict or limit the capabilities you get out of them.
Which, naturally, goes both ways.
I can't tell you how many times I've run into people using observability 2.0 tooling, super modern vendors, really excellent tooling, and getting absolutely zero value out of it.
Slicing and dicing autoinstrumented code with zero manual instrumentation, _wrong_ instrumentation, broken service graphs, disconnected distributed tracing, and every other crime under the sun.
Not only is it quite _possible_ to hold the tool wrong, but damn y'all, I remain fairly convinced that "holding it wrong" is the case in by far the vast majority of observability implementations out there.

So, in comes observability 3.0.
Or, rather, my prediction on what observability 3.0 is going to look like.
There's a technical component to it, sure, but the main one is social.

Are you ready?

- Observability 3.0 is going to look a _lot_ like a data lakehouse architecture
- Observability 3.0 is going to mostly erase the distinction between pay now / pay later and write vs read time for querying capabilities
- Observability 3.0 will, more than anything else, be measured by the value that _non-engineering functions_ in the business are able to get from it

The critical difference in observability 3.0 vs 2.0 and 1.0, for me, is that the success of rolling out observability 1.0 or 2.0 relies entirely on how valuable it is for the engineering organizations in the business.
For observability 3.0, that'll still be important, but the success will be mostly defined by how non-engineering functions are able to use it.

Remember my definition of observability? Here it is, for posterity:

> A process through which one develops the ability to ask meaningful questions, get useful answers, and act effectively on what you learn.

Observability 1.0 gave us lots of useful answers, observability 2.0 gives us the potential to ask meaningful questions, and observability 3.0 is going to give us the ability to act effectively on what we learn.
In the next few years, I'm going to be looking at observability vendors pretty critically, looking for indicators that they're indexing on the "act effectively" part.
I'm especially going to be looking for vendors to think deeply about how they bring the whole rest of the business in on this too.
There's a lot of things moving underneath the surface that make me think this is going to be a much bigger thing soon.
In fact, if anything, I wouldn't be surprised if this type of thinking defined meaningful innovation in observability for the next few years.

I also don't think it's incompatible with existing vendors!
You don't have to rip out your existing stack to get observability 3.0 and, honestly, please don't.
Or at least, not yet.
But frankly, if your vendors can't help you deliver meaningful value to the entire business then why are they even there?
That extends to engineering leadership as well.

Overall, I'm excited to see how the observability product offerings get refined over the next few years to become increasingly valuable to those outside of engineering.
But, today, I don't think we do a very good job as an industry of bringing the rest of the business along for the ride, which is why I wrote this post.
If the business can't effectively learn, then there _is_ no "and then what."

So what is the "and then what", you ask? Effective and collaborative action. Organizational learning. [Collective social learning.](https://osf.io/preprints/psyarxiv/tfjyw) That's what.