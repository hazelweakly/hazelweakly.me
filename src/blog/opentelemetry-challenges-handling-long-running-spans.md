---
title: "OpenTelemetry Challenges: Handling Long-Running Spans"
date: 2024-10-10
---

> Long running spans are one of my biggest "we don't really actually have a good standard solution for this" issues in opentelemetry.
> They're something I've run into before, weirdly frequently, and especially so when attempting to try and instrument front-end or mobile facing systems.
>
> It turns out, though, that the issues here with long running spans are actually pretty similar to the issues with interrupted, partial, or unclosed spans.
> In fact, they're really mostly the same thing (with the added bonus that if you do tail sampling your sampling decision is going to happen before the span ends, which exacerbates the problem by turning functioning spans into partial and broken ones)
>
> Anyway, I talk about this and more in this article and even point out a really cool solution from [Embrace](https://embrace.io) that addresses this in an opentelemetry compatible way
> (hint: does the phrase "write ahead log" make you quiver with excitement? If so, you should definitely read this)

<https://thenewstack.io/opentelemetry-challenges-handling-long-running-spans/>
