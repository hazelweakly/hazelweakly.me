---
theme: ../../../slidev-theme
title: "Redefining Observability: Observability 3.0"
info: |
  You've heard of observability, you've heard of the the three pillars, and you've probably even heard of observability 1.0 vs 2.0. But, something's still missing. Our definitions of observability are so technical that they miss the real value: a process through which one develops the ability to ask meaningful questions, get useful answers, and act effectively on what you learn.

  In an era of tight budgets and doing too much with too little, executing an observability strategy that delivers meaningful impact can feel impossible. In this talk, we'll learn how to cross the chasm from theory into delivering value where it matters. As we do so, we're going to start bringing together every part of the company by understanding how building home baked abstractions unlocks interdisciplinary collaboration.

  The talk will be packed with concrete examples of meshing institutional context with operational excellence. We'll also go over actionable steps that can be taken regardless of where you are on your observability journey, regardless of what your budget is, and how to get started when you don't have time.

  Join Hazel as she blends together a vision of the future with the realities of today in a way that prepares you to seize the moment and level up your company's ability to effectively operate across functional and disciplinary lines.
# apply unocss classes to the current slide
drawings:
  persist: false
selectable: true
mdc: true
overviewSnapshots: true
author: Hazel Weakly
themeConfig:
  primary: "hsl(var(--color-fg))"
fonts:
  sans: "Zilla Slab"
  serif: "Italiana"
  mono: '"Victor Mono"'
  provider: none

# front matter for first slide
layout: fact
defaults:
  layout: statement
---

# Redefining Observability: Observability 3.0

---

# Observability, so hot right now

<!--
What we're going over:
- survival guide
- getting to 1.0, 2.0, then 3.0??
-->

---

# Unfortunately, observability is pretty useless

---
layout: intro
---

# How 2 O11y

1. Collect GOB-SMACKING _buckets_ of ✨ data ✨
2. Put it in a giant pile in the ~~corner~~ `$VENDOR`
3. Never look at it
4. ???

---
layout: quote
---

# Observability is a process through which one develops the ability to ask meaningful questions, get useful answers, and act effectively on what you learn.

-- Hazel

---

ok wait hold on how did we get here, I was promised pillars and dashboards and SLOs and sleep deprivation and sad feelings and stripped budgets and ...

---
zoom: 0.9
---

# Hazel's Survival Guide to Rolling Out Observability

---
layout: intro
---

# Find a Non-Engineering Champion

My favorites are

- Marketing (feature flags!)
- Sales (usage numbers!)
- Security (security related alerts!)

<!--
Why? Because if you say this is a good idea, it's you saying that.

If _they_ say it then its their entire department saying it.
-->

---
layout: intro
---

# One, Three, Five

- One command install
- Three<sup>+</sup> stacks
- Five minutes

<!--
Here's the dream: ...
-->

---

but Hazel, literally _nothing_ in the industry accomplishes this

---

# Perception > Reality

---
layout: intro
---

# One, Three, Five

Let's try that again

- One step opt-in
- Three<sup>+</sup> advocates
- "Five" minutes

<!--
Nobody has time.

Nobody has energy.

Too in debt to save.
-->

---
layout: quote
---

# Y'all are talking about Observability 3.0 and I'm still on `0.0.1-pre-release--BETA--do-not-use+untested`

-- Most companies

---
layout: intro
---

# Start From Zero

<Transform :scale="2">
<v-clicks>

- No, more zero
- Less than that
- Keep going
- Even _less_ zero
- Ya gotta _feel_ the `[ ]`
- There ya go

</v-clicks>
</Transform>

---

# Light It On Fire and Throw a Party

---

haha you're funny

---
layout: intro
---

# No Really, Light It On Fire and Throw a Party

- Show ROI before
- Light it on fire
- +ROI of new system is now _**way**_ easier to prove

<!--
"it" here is the existing telemetry / alerting / monitoring / etc.

Sunk cost fallacy will hurt you real bad.

If you can re-deploy, you can blow it up.
If you can't, it's _probably_ not useful enough to exist.
-->

---

# Story time!

The hunt for a $250,000+  
line of yaml

<!--
10 min story, babes.

Funny: people wanted the missing info rather than the understanding.

Queries per engineer per month? ~10 for the power users.
-->

---

# The Dark Metric

Observability queries per engineer per month

<!--
fastest way to make any vendor hate you
-->

---

# The Hard Part

Give them what they want, not what they need.

<!--
Spend your political capital on influencing them to want the right thing.

DON'T convince them to want what you gave them.

Trust and empathy comes before collaboration.
-->

---
layout: section
---

# The Climb to 2.0

---

# Blind Truth vs False Clarity?

<!--
know what you're getting before you seek it.

not every company wants to actually _be_ data driven
-->

---

# Observability Dirty Secret

Culture > [Data Store + Query Engine]{.text-4xl}

<!--
From a technical capability standpoint, the "difference" between 1.0, 2.0, 3.0, etc., lies in the data store and query engine.

From a _what matters to the business_ standpoint, it's all cultural.
-->

---
layout: quote
zoom: 0.7
---

# You’re paying what? 10-20% of your _entire_ infrastructure budget for something that 5% of the organization is going to use, 10% of that 5% are going to be actually deeply competent in, and 10% of that 10% are going to be an expert in.<br/>That’s the worst possible way to spend 20% of your budget.

-- Hazel _"yes-i-actually-quote-myself_" Weakly

<!--
ROI is real hard if 2% of the company have to deliver 95% of the value
-->

---
layout: intro
---

# [Cultural Pivot:]{.text-7xl} Designing Telemetry Around Data Correlation

<!--
"I want to be able to see how this relates to that."

Distributed systems rely on the shape of flow, not the particulars of the data.
-->

---
layout: intro
---

# [Cultural Pivot:]{.text-7xl} Those who Build, Query

<!--
DevOps doesn't need to happen.

SRE can be separate.

But "I want to understand my system" is a _desire_ engineers need to have.
-->

---
layout: section
---

# The Climb to 3.0

---

data "lake-house" architecture or whatever

---
layout: intro
---

# [Cultural Pivot:]{.text-7xl} Value For Non-Engineering Functions

---
layout: intro
---

# [Cultural Pivot:]{.text-7xl} Observability ≈ Business Intelligence

---
layout: intro
---

# [Cultural Pivot:]{.text-7xl} Company Strategy is Representable

---

# Questions?

---
layout: default
---

# References and Resources

- <https://hazelweakly.me/blog/the-future-of-observability-observability-3-0/>
- <https://jeremymorrell.dev/blog/a-practitioners-guide-to-wide-events/>
- <https://hazelweakly.me/blog/the-four-evolutions-of-your-observability-journey/>
- <https://hazelweakly.me/blog/redefining-observability/>
