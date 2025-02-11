---
theme: ../../../slidev-theme
title: "Working Configs, Humanity, The Real World, Joy and Happiness: Pick Two(ish)"
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
class: text-center
layout: intro
defaults:
  layout: fact
---

# Working Configs, Humanity, The Real World, Joy and Happiness

Pick Two<sup>(ish)</sup>

---

# Software,

# Configuration,

# People

---

# Management is about People, not Control

---

# Software

<center>

```go
func choose_topic() {
  return "Software" // Chosen by unfair dice roll
}
```

</center>

<style>
pre {
text-align: left;
font-size: 1.5rem !important;
line-height: 1.5 !important;
}
</style>

---

# What is Software?

---

# Software

![](/images/SubwaySound.svg){.inline-block} `/ˈsɒf(t)wɛː/` _concept._

<center>

<v-clicks>

1. Teaching sand to think
2. A mistake
3. **An explanation of how we see the world through each others' eyes**

</v-clicks>

</center>

<style>
ol {
  text-align: left;
  max-width: 50%;
}
</style>

---

# Software = Learning

---

# Configuration?

![](/images/SubwaySound.svg){.inline-block} `/kənˌfɪɡjʊˈreɪʃn/` _concept._

<center>

<v-clicks>

1. Typo-driven development
2. Software that doesn't have a debugger
3. Software that people don't believe is software
4. ???

</v-clicks>

</center>

<style>
ol {
  text-align: left;
  max-width: 50%;
}
</style>

---

# Let's try that again

---
layout: quote
---

# Configuration is how humans learn to adapt software to fit their needs

---

# People are social beings that understand the world via collaboration

---

# Configuration = Learning

---

# Software = Configuration = Learning

---

# Let's Play a Game

---
layout: default
zoom: 1.4
---

# Configuration or Code?

<v-switch>

<template #0>

<span class="text-3">_(October 2021 Facebook Outage. Source: [Cloudflare's blog](https://blog.cloudflare.com/october-2021-facebook-outage/))_</span>

"Facebook and its affiliated services WhatsApp and Instagram were all down. Their DNS names stopped resolving, and their infrastructure IPs were unreachable. It was as if someone had "pulled the cables" from their data centers all at once ..."

</template>

<template #1>

[Configuration!](https://engineering.fb.com/2021/10/04/networking-traffic/outage/)

</template>

<template #2>

<span class="text-3">_(July 2, 2019 Cloudflare Outage. Source: [Cloudflare's blog](https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/))_</span>

"We deployed a new rule in our WAF Managed Rules that caused CPUs to become exhausted on every CPU core that handles HTTP/HTTPS. Unfortunately, the update contained a regular expression that backtracked enormously and exhausted CPU used. This resulted in customers seeing a 502 error page..."

</template>

<template #3>

Configuration!

(And deployment practices)

((And not doing performance testing))

(((and ...)))

</template>

<template #4>

<span class="text-3">_(1982-1988 Therac 25 Incidents. Source: [Wikipedia](https://en.wikipedia.org/wiki/Therac-25#Root_causes))_</span>

The Therac-25 was a computer-controlled radiation therapy machine. The six documented accidents occurred when the high-current electron beam generated in X-ray mode was delivered directly to patients. The beam struck the patients with approximately 100 times the intended dose of radiation...

</template>

<template #5>

Code?? Two software faults

1. An operator triggered race condition allowed for setting the beam to X-ray mode without the X-ray target being in place.
2. A second fault allowed the electron beam to activate during field-light mode, during which no beam scanner was active or target was in place.

</template>

</v-switch>

---

# Hmm... Isn't the answer always "both"?

---

# The Mother of All Outages

---

# Configuration, Code, and State

All sides of the same coin, when viewed over time

---
layout: quote
---

# Software development is a radical act of vulnerable learning

---

# We Understand the New in Terms of the Old

---

# ~~Software,~~

# ~~Configuration,~~

# People

---

# It's about the people

---

# Speaking of People...

(Have a work visa? Want to hire me?  
<https://hazelweakly.me/contact>)
