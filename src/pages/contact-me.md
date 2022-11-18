---
title: Contact Me
order: 4
---

{% for social in socialMedia.all_socials %}

- <span class="cluster"><a class="icon inline-flex" href="{{ social.url }}">{%
  include "partials/" + social.title | lower + ".html"
  %}</a> [{{ social.title }}]({{ social.url }})</span>

{%- endfor %}
