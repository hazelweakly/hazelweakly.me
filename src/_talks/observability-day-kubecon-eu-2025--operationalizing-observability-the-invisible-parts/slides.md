---
theme: ../../../slidev-theme
title: "Operationalizing Observability: The Invisible Parts"
info: |
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

# Operationalizing Observability: The Invisible Parts

---

# Unfortunately, observability is pretty useless

---

# ... Ok, it _is_ useful. But with what budget? What time?

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

It's their budget you're taking from to do this.

Also, step zero: if you can't convince your org you've already lost.
-->

---
layout: intro
---

# Available Capacity: One, Three, Five

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

# Available Capacity: One, Three, Five

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

# Ok I Lit it on Fire, Now What?

---

# Migration Time!

Someone's gotta do it!

That someone is... Probably you. Sorry!

---

# Fertilize the Soil, Plant the Seeds

<!--
Create libraries, helper functions, go on call with them, help them out.

Create the conditions for success.
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
layout: default
---

# tl;dr

1. Find your champions
2. Be _pessimistic_ and realistic about time
3. Baby steps
4. Don't let the laws of reality get in the way of discovering what's possible
5. Do the first mile

---
layout: default
---

# References and Resources

- <https://hazelweakly.me/blog/the-future-of-observability-observability-3-0/>
- <https://jeremymorrell.dev/blog/a-practitioners-guide-to-wide-events/>
- <https://hazelweakly.me/blog/the-four-evolutions-of-your-observability-journey/>
- <https://hazelweakly.me/blog/redefining-observability/>

---

# Questions?
