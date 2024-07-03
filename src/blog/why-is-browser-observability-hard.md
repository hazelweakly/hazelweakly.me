---
title: "Why is Browser Observability Hard"
date: 2023-07-10
---

So the big thing that makes everything so difficult for browsers is that opentelemetry has a concept of a lifecycle for telemetry that doesn't map very well to how you ergonomically propagate context and correlate traces together.
Opentelemetry works super super well in cases where you have a very linear callstack that's fully synchronous in design.
Something like `request -> function A(a1, a2, a3...)` `->` `function B(b1, b2, b3...)` `-> ... ->` `function N(n1,n2,n3...) -> response` where the total lifetime of that is "reasonably short."
That is, to put it mildly, not the case in front-end systems.
Front-End systems are event based inherently and work based off asynchronous callbacks and event loops, which is one of the architecture styles that fits most poorly into the "tree-like" structure that otel wants you to give it.
Technically opentelemetry can work with and express anything that's a directed acyclic graph (by way of using both links and parent/child relationships carefully), but using links is really annoying in most SDKs and it's universally unclear how to most clearly initiate "child" spans if you don't have visibility into the lifespan of the callee vs that of the caller.

On top of that, there's React; simultaneously the best and worst thing to happen to frontend development.
In addition to the browser being async and event-loop driven, React is a runtime on top of this which specifically is designed to:

1.  give you no control over the lifetime of any root span
2.  encourage you to make the lifetimes of every node as long as possible (for efficiency reasons)
3.  not give you lifecycle hooks granular enough to synchronize your span lifecycle to that of a component

Even if 3 was solved by introducing the concept of "on component creation, on component render, on component removal, on component re-render" and whatever else that was required for creating autoinstrumentation, that wouldn't really work meaningfully.
For one thing, you would have to build that into react.js itself and not anything on top of it.
For another, root spans that can last indefinite amounts of time don't work well in opentelemetry.
Some people don't refresh their browser tabs for weeks or months!
It's the last issue that makes front end stuff so dfficult for opentelemetry.
It's just really not designed to make it ergonomic to go "page load happened, \*three weeks later\*, oh look button press".
So how the fuck do you actually meaningfully instrument that?
You can, of course, but you need to make almost everything a root span and correlate them together casually via attributes and, hopefully, also some links.
Which won't be ideal from a querying perspective, but is more honest than other approaches.

Lastly, the browser doesn't support grpc, data loss is more common, compression is vital, and the weight of instrumentation size is extremely important because blowing up someone's data plan is inconsiderate.
So this is one of the areas in which the user starts to pay really heavily for high cardinality, and data volume needs to be very judiciously monitored.
You also don't really have the option of running an in-browser version of a telemetry collector, but that's exactly what you need a lot of the time to do the most effective curtailing of bandwidth.
Even if that existed as a thing, it would bloat the page with even more javascript, cost the user even more battery life to run on their 5 year old phone, and make the user experience even worse.

There's also api authentication issues with browsers needing to be able to send telemetry to an endpoint without being authenticated.
Honeycomb solves that pretty well, but you need to think decently hard about that if you build an /api/telemetry endpoint (which you probably should).
Which is a lot more work than "just yeet this straight to honeycomb for a proof of concept and then we can figure out collectors and refinery and whatever later."

[Baggage](https://opentelemetry.io/docs/concepts/signals/baggage/baggage) is how you're "supposed" to build context that can be shared between services so that you can correlate a backend trace with a frontend trace.
It's probably one of the most confusing, least-out-of-the-box experiences you will ever encounter, and there's no useful way to set that up nicely without really understanding what you're doing in both the frontend and the backend.
Which is another super difficult thing about the frontend.
Rolling your own way to tie together every service instead of having that be the "normal" thing that self discovers the connections is, imo, a sign of immaturity in the space.
