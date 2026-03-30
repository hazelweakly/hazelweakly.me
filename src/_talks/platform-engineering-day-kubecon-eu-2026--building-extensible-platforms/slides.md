---
theme: ../../../slidev-theme
title: "Building Extensible Platforms"
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

# Building Extensible Platforms

---
layout: intro
---

# Complexity is Unavoidable

Strong components **grow** into strong systems.

Strong systems enable **complexity** to flourish.

Complexity requires **adapting** strong components.

---
layout: default
---

# Growth, Complexification, Adaptation

![](/images/s-curves.png){.mia}

<style>
img {
  mix-blend-mode: multiply;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}
</style>

---

"Everything sucks, but what else is new"

---

# Methods to the Madness

---

# Optionality + Confluence

(not that confluence){.text-4}

---
layout: default
---

# Confluence

![](/images/confluence.png){.mia .h-100}

(image: Wikipedia){.text-2 .center}

---

# Narrow Protocols

---

![](/images/narrow-protocols.jpeg){.mia .h-100}

(image: Frank S. Robustness and complexity. Cell Systems, 14, 1015-1020){.text-2 .center}

<style>
img {
  mix-blend-mode: multiply;
}
</style>

---

# Vertical Integration

Make the protocols valuable

---

Anyone remember 8-tracks? Betamax? HD-DVD?

---
layout: quote
---

# Vertical Integration Eats Technological Capability for Breakfast

---

# Extensibility in the Real World

---
layout: default
---

# The Expression Problem

![](/images/expression-problem.png){.mia .h-100}

<span class="text-2 center">["Notes on the expression problem and type design", Ted Kaminski.](https://www.tedinski.com/2018/03/06/more-on-the-expression-problem.html)</span>

<style>
img {
  mix-blend-mode: multiply;
  margin-inline-start: 10%;
}
</style>

---
layout: intro
zoom: 0.9
---

# Platform Extension Problem

**Hazel's Challenge:** Create a platform where one can...

1. In a type safe manner
2. Onboard new applications into platform
3. Onboard new integrations into platform
4. Without requiring a end-user or platform migration/deploy
5. Without centralising definition of interfaces or applications
6. Without assuming a certain platform or application architecture

---

# protocols are the new platforms

---
layout: quote
---

# Whoever Solves the Platform Extension Problem will Shape the Next Generation of Innovation

## -- Hazel's Prediction

---

---
