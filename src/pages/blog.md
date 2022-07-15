---
title: Posts
order: 2
---

{% for post in collections.blog %}

- [{{ post.data.title }}]({{ post.url }}) -- {{ post.date | postDate }}

{%- endfor %}
