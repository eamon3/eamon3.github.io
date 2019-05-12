---
layout: page
permalink: /rsvp/
title: RSVP
---

<form action="https://getform.io/f/0cff5cfd-5ab5-4d3c-8f95-50be1ec60926" method="POST">

    <input type="text" name="name">
    <input type="radio" name="coming" value="yes" checked> Yes, I'll be there!<br>
    <input type="radio" name="coming" value="no"> Sorry, I can't make it.<br>
    <input type="number" name="quantity" min="1" max="5">
    <input type="email" name="email">
    <input type="tel" name="tel">
    <button type="submit">Send</button>

</form>


{% include search.html %}

<p class="rss-subscribe">Subscribe <a href="{{ "/feed.xml" | absolute_url }}">via RSS</a></p>

<div class="post-list">
  {% for post in site.posts %}
    {% assign currentdate = post.date | date: "%Y" %}
    {% if currentdate != date %}
      <h2 id="y{{ currentdate }}" class="year">{{ currentdate }}</h2>
      {% assign date = currentdate %}
    {% endif %}

    <div class="post-block">
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      <span class="post-meta" title="{{ post.date | date: "%b %-d Y" }}">{{ post.date | date: "%b %-d" }} <span class="meta-year">{{ currentdate }}</span></span>
      {% if post.description %}<p class="post-subtitle">{{ post.description }}</p>{% endif %}
    </div>
  {% endfor %}
</div>
