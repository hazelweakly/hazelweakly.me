---
title: Posts
order: 2
---

{% for post in collections.blog %}

- [{{ post.data.title }}]({{ post.url }}) -- <time datetime="{{ post.date.toISOString() }}">{{ post.date | postDate }}</time>

{%- endfor %}
