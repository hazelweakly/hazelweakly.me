---
title: Blog
order: 2
eleventyImport:
  collections: ["blog"]
---

{% include "tag-nav.html" %}

Subscribe [via RSS](/atom.xml) {.text-1}

{% for post in collections.blog | reverse %}

- [{{ post.data.title }}]({{ post.url }}){.font-heading .text-3}  
  <time class="italic" datetime="{{ post.date.toISOString() }}">{{ post.date | postDate }}</time> {.bordered-box}

{%- endfor %}
{.flow .flow-5 .px-0}
