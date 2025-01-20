---
title: Résumé
order: 3
description: Influential engineering leader with a focus on organizational change, holistic efficiency, and driving cross-functional business results in a sustainable manner.
footer: true
---

<p><a href="/resume.pdf">[View as PDF]</a></p>

{{ "html" | generateResume | safe }}

<style data-helmet="resume">
  dl {
    display: grid;
    grid-template-columns: max-content 1fr;
    grid-gap: var(--space-0-5) var(--space-3);
    align-items: center;
  }

  dd > * + *,
  article ul > * + * {
    margin-top: var(--flow-space, var(--space-2));
  }

  dt {
    font-size: calc(var(--size-3) * 0.80);
    justify-self: self-end;
    align-self: start;
    font-variant: small-caps;
  }
</style>
