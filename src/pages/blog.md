---
title: Posts
---

{% for post in collections.blog %}

- [{{ post.data.title }}]({{ post.url }}) -- {{ post.date | postDate }}

{%- endfor %}