---
title: Talks
order: 3
---

{% for talk in collections.talks | reverse %}

- [{{ talk.data.title }}]({{ talk.url }})

  [{{ talk.data.event }}]({{ talk.data.event_site }}) -- <time datetime="{{ talk.date.toISOString() }}">{{ talk.date | postDate }}</time>
  <span class="cluster">
  {% if talk.data.slides %}[Slides]({{ talk.data.slides }}){% endif %}
  {% if talk.data.video %}[Video]({{ talk.data.video }}){% endif %}
  {% if talk.data.talk_page %}[Program Page]({{ talk.data.talk_page }}){% endif %}
  </span>

{%- endfor %}
