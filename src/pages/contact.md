---
title: Contact
order: 4
---

<ul role="list">

{% for social in socialMedia.all_socials %}

<li>

<span class="cluster"><a class="icon inline-flex" href="{{ social.url }}">{%
  include "partials/" + social.title | lower + ".html"
  %}</a> [{{ social.title }}]({{ social.url }})</span>

  </li>

{%- endfor %}

</ul>
