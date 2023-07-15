---
title: Blog
order: 2
---

{% for post in collections.blog | reverse %}

- [{{ post.data.title }}]({{ post.url }}) -- <time datetime="{{ post.date.toISOString() }}">{{ post.date | postDate }}</time>

{%- endfor %}
