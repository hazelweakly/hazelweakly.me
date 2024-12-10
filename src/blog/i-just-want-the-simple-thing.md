---
title: "I Just Want The Simple Thing"
date: 2024-06-10
tags: [rant]
---

\*snorts line of code\* **_HAVE YOU EVER WANTED TO DO ONE SIMPLE THING THAT COULD BE ACCOMPLISHED BY A WELL DEFINED LIBRARY + 200 LINES OF CODE BUT INSTEAD YOU ENDED UP NEEDING TO RUN AN ENTIRE KUBERNETES CLUSTER?_**

Yeah, sometimes shits just like that.

And by "sometimes" I mean all the time.
And by all the time I mean this is why developers get burnt out and suffer.

You know what I want?
I want a library.
Just a library.
A simple elegant beautiful NIGH USELESS library.

This library should be known as the ✨ `implementation-spec-lib` ✨

It must do absolutely nothing but the exact rules-lawyering minimum of the spec.
It must BE the executable version of the spec.
Change the spec?
Spec change doesn't happen until library and test suite is changed.

Does it handle the real world? NO.  
Does it gracefully error? NO.  
That's what the `acme-turbo-special-snowflake-extensions-lib` library does.
_This_ library does one thing and one thing only: be pedantic, verifiably.

It's the nerd that goes "well acktually"; it's the whisper in the night of "psst, someone's being wrong on the internet, you should yell at them"; it's the watcher of your sanity.

It's also probably useless.

But that's _fine_, actually.

![The pikachu meme face of pikachu making an "oh" face.](./src/images/pikachu.webp "Mfw I just want a very simple library for so many things that isn't performant, isn't robust, doesn't handle errors, and does absolutely nothing except IMPLEMENT THE SPEC EXACTLY."){.w-full}

Btw, implement this in a way that it can be easily formally verified, please.
Performance hacks, "real world usage" and other nonsense can happen in a downstream library that can then be ran constantly against the **SPEC** to ensure _IT FUCKIN WORKS_.

> "We have built the tower of the heavens, gaze upon its glory"

Ok bud, what's your tower made of?

> "Simple! We can parse html, email, yaml, and we run 273 different unbounded reconciliation control loops designed to take unspecified distributed systems and converge them into an unknown maybe-good"

... Uhhh, ok, I see I asked too big of a question.
I see you mentioned email???
How do you know you're parsing that correctly?

> "Oh we don't, nobody does, we just give up and use BOOST::good_luck()"

**_WHY. ARE. WE. LIKE. THIS._**

> "You need to violate the spec because 13 out of 18 implementations of this follow the spec perfectly, but the one implementation that completely fucks up the spec is the one that has 98.76% of all traffic, usage, and mindshare from developers"

Statements uttered by the mad and the deranged, and people who Ship Real Business Value™.

> "I just want a simple thing that does what it promises and I'm willing to trade pretty much anything for simplicity, stability, and correctness"

No sorry you need to suffer.
Turbo McTurbo lib that was rewritten from C into raw assembly in the `YEAR OF OUR BULLSHIT $CURRENT_YR` for extra performance contains 763 extra features, three million extra lines of code, and 832 transitive dependencies.

You have no other options.

Fuck you for wanting nice things.
All my homies hate people who want nice things.
