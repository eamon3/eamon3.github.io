---
layout: page
permalink: /rsvp/
title: RSVP
---

<style>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>

<div>
<form action="https://getform.io/f/0cff5cfd-5ab5-4d3c-8f95-50be1ec60926" method="POST">

    <label for="name">Your Name</label>
    <input type="text" id="name" name="name">
    
    <label for="coming">Will you/your party be able to attend?</label>
    <input type="radio" id="coming" name="coming" value="yes" checked> Yes!<br>
    <input type="radio" name="coming" value="no"> No.<br>
    
    <label for="quantity">How many guests are in your party?</label>
    <input type="number" id="quantity" name="quantity" min="1" max="5">
    
    <label for="email">What is your email address?</label>
    <input type="email" id="email" name="email">
    
    <label for="tel">What is a phone number we can use to reach you on the day of the wedding?</label>
    <input type="tel" name="tel" id="tel">
    
    <label for="diet">Does anyone in your party have dietary restrictions?</label>
    <input type="radio" id="diet" name="diet" value="yes" checked> Yes<br>
    <input type="radio" name="diet" value="no"> No<br>
    
    <input type="submit">Submit!</button>

</form>
</div>

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
