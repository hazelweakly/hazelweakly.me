---
theme: ../../../slidev-theme
title: "Source Available is Thriving but Open Source is Dying"
info: |
  Source available software is thriving. We live in a world in which there's more code accessible, findable, and ready for use than ever. Even major corporations now talk openly and seriously about their OSS strategy. Now, more than ever, the entire world runs on open source. We won, right?

  While the good news is fantastic, the bad news is sobering: maintainer burnout is worse than ever, project support is low, and funding everywhere has dried up at an alarmingly fast rate.

  Maintainer burnout is now becoming an international supply chain security risk, but industry response has been to add more pressure and obligations onto the shoulders of contributors that are already overworked, undervalued, and increasingly isolated. Support disappears faster than it appears, and it seems like every day a new project is putting a banner on their website stating a desperate plea: "Maintainers wanted." The story is playing out across a thousand projects — a story of thankless hours, long nights, and watching your family grow up without you; it's a story of forgetting what it's like to enjoy software because you're too busy being a combination therapist, crisis response team, conflict de-escalator, PR team, marketing team, and sales team; it's a story where our heroes lose, because they didn’t set out to be Hercules holding up digital worlds.

  For foundations, it's an equally ominous story: our open source and non profit foundations have long been a critical part of the glue that holds together the industry; they handle the thankless and intricate tasks of governance, and provide an integral legal, logistical, and operational bridge between industry and developers. The money and support they get sustains numerous projects, languages, and ecosystems. But now, too, that is drying up. Even companies that hire full time employees to work on open source have been divesting in the communities they rely on for their continued development and laying off long-time maintainers of the very projects their businesses depend on

  What can we do about it? How can we act? Can we still course-correct in time?

  This talk won't be able to provide solutions, because solutions to problems like this don’t come in neatly wrapped packages. Instead, it will be a painting, illuminating the scope of the problem and calling attention to the gravity of the situation, which often only gets discussed behind closed doors.

  The situation isn’t hopeless, but it is urgent. There are potential solutions we can utilize, and possible directions we can go. There are people and programs out there working right now to reverse the course, but heightened awareness and action is urgently needed. Right now, things are bad, and they’re getting much worse.

  What's next after awareness? That's for us to decide and act on together. But we can delay not a moment longer; for many, by the time you hear this talk, it will already be too late.
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

# Source Available is Thriving but Open Source is Dying

---
layout: center
---

Given the current conditions of today, many problems encountered by open source participants right now are being most aptly handled by **controlling interests** that:

- have become legible to corporations
- work on developing legibility towards nation states
- are developing resilience towards value capture by agents exercising soft and hard power
- and have remained culturally palpable to open source communities

---

(now before we get too far ahead of ourselves,  
let's get some vocabulary straightened out)

---

# Source Available, Open Source, Free / Libre, ...

What's the Difference?

---

(Disclaimer: I am _**briefly**_ summarizing _decades_ of debate and evolution)

---
layout: intro
---

# Free / Libre Software

<v-switch class="grid content-center h-80%">

<template #0>

Fundamental freedoms

0.  Execution of software
1.  Modification and study of software
2.  Redistribution of unmodified software
3.  Distribution of modified software

</template>

<template #1>

Software as a social and ethical issue {.text-6xl}

</template>

<template #2>

How humans learn {.text-6xl}

</template>

</v-switch>

---
layout: intro
---

# Open Source

<v-switch class="grid content-center h-80%">

<template #0>

<Transform :scale="0.7">

Required license terms

1.  Free Redistribution
2.  Source Code
3.  Derived Works
4.  Integrity of The Author's Source Code
5.  No Discrimination Against Persons or Groups
6.  No Discrimination Against Fields of Endeavor
7.  Distribution of License
8.  License Must Not Be Specific to a Product
9.  License Must Not Restrict Other Software
10. License Must Be Technology-Neutral

</Transform>

</template>

<template #1>

Community / Public Good {.text-6xl}

</template>

<template #2>

Pragmatic, not idealistic {.text-6xl}

</template>

</v-switch>

---
layout: intro
---

# Source Available

<v-switch class="grid content-center h-80%">

<template #0>

Freedoms {.text-6xl}

1. Viewing of software {.text-6xl}

</template>

<template #1>

(Choose-your-own-adventure goes here)

</template>

</v-switch>

---
layout: intro
---

# Ethical Source

<v-switch class="grid content-center h-80%">

<template #0>

<Transform :scale="0.8">

Principles of Ethical Source

1.  Work benefits the commons.
2.  Work is done in the open.
3.  A community that strives to be welcoming and just.
4.  Work respects accessibility as a human right.
5.  Work prioritizes the safety of people.
6.  Work protects privacy.
7.  Work deserves support.
8.  Work is volunteer-led and member-driven.

</Transform>

</template>

</v-switch>

---
layout: intro
---

# Looming Event Horizons

- Funding crisis
- Political turmoil
- Mounting pressure (regulation, security, ...)
- Community attacks (`xz-utils` was not an anomaly)

<!--
pressure => requires capital to address, power to push back
attacks => requires power to counter, capital to withstand

Funding + Politics => harder to get power and capital
-->

---
layout: intro
---

# Why Does it Matter?

We're attempting to answer the question "how does collaboration work at scale?"

<!--
Strong implications for how communities will form and function.
Will shape what we can do, how we do it, our possibilities, etc.
-->

---

# How Did We Get Here?

What do you mean we live in the real world? {.text-4xl}

<!--
Interaction points between collectives.
Organizing and understanding decision making.
Economies, Governments.
-->

---
layout: quote
---

# If Open Source does not become sustainable, it will remain exploitable

---
layout: quote
---

<style> ol { max-width: 75ch; }</style>

# If Open Source<sup>1</sup> does not become<sup>2</sup> sustainable<sup>3</sup>, it will remain<sup>4</sup> exploitable<sup>5</sup>

1. Whatever we mean by that, I guess?
2. For some definition of "become", up to--and including--"_MY_ project figured that out 25 years ago, pffh"
3. Not sure what sustainability means, either...
4. Remain? Says who?
5. Exploits are only exploits if they come from the threat model region of "I care about that," otherwise they're just sparkling code paths.

---
layout: section
---

# Funding Crisis

---

# ZIRP go ZIP

---
layout: fact
---

# Crisis? Or bad business model?

---

# Freeloaders vs Freeloaders

<!--
Freeloader (in economy A) = Bad

Freeloader (in economy B) = Good
-->

---
layout: section
---

# Political Turmoil

<!--

# Hard Power & Soft Power


# Consumption & Production

-->

<!--
Hard Power:
- Compelled Action
- capitalism exercises via: (economics, conflict)
- oss exercises via: (time, values: four freedoms, policy)

Soft Power:
- Influenced Action
- capitalism exercises via: (culture, values, policy)
- oss exercises via: (economics, conflict, culture)

Differences: economics, time, conflict, policy, values
-->

---
layout: quote
---

# Ok but, that's not _my_ problem, right?

<!--
The whole world is about to make it your problem, sorry
-->

---

# Power & Capital

<!--
Corporations and Actors are determined to exercise both.

Accordingly, we need to create the conditions of success.
-->

---
layout: section
---

# What Do We Do About It?

---

# Dirty Secret

Most open source problems aren't [(uniquely)]{.text-4xl} open source problems

---
layout: intro
---

# Strategies

<Transform :scale="1.5">

- Legibility
- Governance (including licensing)
- Policy
- Identity

</Transform>

---
layout: intro
---

# Legibility

- For governments
- For corporations
- Make hidden costs visible
- Make support feel obvious

---
layout: intro
---

# Governance

- Licensing that addresses "bad faith" and "violating social contract" shaped issues
- Structure project to prevent governance capture
- Experiment! Embed your values into your governance
- Rules of engagement

---
layout: intro
---

# Policy

- Government oversight for necessary support
- Corporate rules of engagement for supply chain
- Curate your dependencies, your time, your energy, your ...

---
layout: intro
---

# Identity

- Are you a cook or a chef?
- Project? Product? Community? Ecosystem?
- What are your problems?

---
layout: default
---

# References and Resources

- <https://www.alilleybrinker.com/blog/open-source-software-and-corporate-influence/>
- <https://opensource.org/osd>
- <https://www.gnu.org/philosophy/free-sw.html>
- <https://ethicalsource.dev/what-we-believe/>
- <https://medium.com/@stephenrwalli/sustaining-open-source-software-4a62a4b6d0f3>
- <https://www.cisa.gov/news-events/news/continued-progress-towards-secure-open-source-ecosystem>
