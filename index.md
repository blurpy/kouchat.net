---
layout: default
title: KouChat
---

<h1>Latest news</h1>

<ul>
  {% for post in site.posts limit:5 %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><span class="postDate"> - {{ post.date | date: '%B %d, %Y' }}</span>
  </li>
  {% endfor %}
</ul>

<p>See <a href="news.html">News</a> for all posts.</p>
