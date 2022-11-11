---
title: Contact Me
order: 4
---

{% for social in socialMedia.all_socials %}
- [{{ social.title }}]({{ social.url }})
{%- endfor %}
- [My email](/resume.pdf)
- [My phone number](/resume.pdf)
