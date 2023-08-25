---
title: Blog
order: 2
---

{% for post in collections.blog | reverse %}

- [{{ post.data.title }}]({{ post.url }}){.font-heading .text-3}  
  <time class="italic" datetime="{{ post.date.toISOString() }}">{{ post.date | postDate }}</time> {.bordered-box}

{%- endfor %}
{.flow .flow-4}
