---
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tags/{{ tag }}/
eleventyComputed:
    title: "`{{ tag | capitalize }}`s"
eleventyExcludeFromCollections: true
---

{% include "tag-nav.html" %}

{% set taglist = collections[ tag ] %}
{% for post in taglist | reverse %}

- [{{ post.data.title }}]({{ post.url }}){.font-heading .text-3}  
  <time class="italic" datetime="{{ post.date.toISOString() }}">{{ post.date | postDate }}</time> {.bordered-box}

{% endfor %}
{.flow .flow-5}
