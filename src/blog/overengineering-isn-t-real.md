---
title: "Overengineering Isn't Real"
date: 2024-01-20
---

I find it fascinating that we talk about overengineering as if it's a thing in software engineering.
It's not, cut it out, stop talking about that.

If I'm a construction contractor and I overengineer something, guess what?
It works for that use case and all the future ones.
The only thing I wasted was money and time.
Did you make a 10 ton capacity deck when you only need 2 tons?
Cool... It's still a deck.

Software engineering? We don't have overengineering.
We have "building to solve the wrong problem."

In software we don't build a 10 ton deck when a 2 ton deck would do, we build a Deck Builder Factory that prints out decks that are fully extensible up and down but we build it into a concrete foundation where the only extension options are sideways.
Then we bolt on safety join points to the house that prevent you from actually extending the deck at all.
Then we only use the printing system once and throw it away.
Then we complain that we overengineered the deck.
But the deck? Rated for one ton.

It sounds ridiculous when I phrase it that way, but I see things that are that obviously incorrect all the time.
A huge problem is that software engineering is so incredibly abstract, ill defined, and nebulous, that it's non trivial to even find out that you're building a deck at all, much less what the load capacity should be.
Software engineering is hard because there's no rules and no answers and it requires mutual understanding among groups to an extent that rivals the Tower of Babel.

But overengineering?
In software?
It's not a thing.
"YAGNI" might be a thing, but it's also still addressing the wrong part of the problem.

If the hardest part of software engineering is building mutual understanding among a group of humans with different contexts, backgrounds, and approaches, then it stands to reason that trying to anticipate future problems will result in _solving the wrong problem_.
We don't overengineer, we just build the wrong thing.

One of the secrets to software engineering is to focus all of your energy as a team (and a company) on learning how to share information between each other better.
Build that understanding.
Build that ability to uplift and teach each other.
Once you build that, you'll be amazed at how often it feels like you almost accidentally end up building the correct thing.
It just starts to materialize out of nowhere, and becomes an emergent property of your shared understanding and collaboration.

For fuck's sake, stop worrying about overengineering and start worrying about under-understanding the problem.
The "overengineering" magically goes away the second you start putting humans first and start prioritizing understanding over an artificial roadmap built without context.
