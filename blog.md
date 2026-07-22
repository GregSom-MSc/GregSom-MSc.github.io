---
layout: default
title: Blog | Samuel Moreno
---

<div class="blog-filters">
  <button type="button" class="filter-pill is-active" data-topic-filter="all">All</button>
  {% for topic in site.data.topics %}
  <button type="button" class="filter-pill" data-topic-filter="{{ topic.name }}">{{ topic.name }}</button>
  {% endfor %}
</div>

<div class="topic-select-wrap">
  <select class="topic-select" id="topic-select" aria-label="Filter posts by topic">
    <option value="all">All</option>
    {% for topic in site.data.topics %}
    <option value="{{ topic.name }}">{{ topic.name }}</option>
    {% endfor %}
  </select>
</div>

<div class="blog-layout">
  <div class="blog-featured">
    {% assign featured = site.posts | where: "featured", true %}
    {% if featured.size < 3 %}
      {% assign needed = 3 | minus: featured.size %}
      {% assign extra = site.posts | where_exp: "p", "p.featured != true" | slice: 0, needed %}
      {% assign featured = featured | concat: extra %}
    {% endif %}
    {% assign featured = featured | slice: 0, 3 %}
    {% for post in featured %}
      {% include post-card.html post=post %}
    {% endfor %}
  </div>
  <div class="blog-list">
    {% for post in site.posts %}
      {% include post-row.html post=post %}
    {% endfor %}
  </div>
</div>

<script>
(function () {
  var buttons = document.querySelectorAll('.filter-pill');
  var select = document.getElementById('topic-select');
  var items = document.querySelectorAll('[data-topic]');

  function applyFilter(topic) {
    items.forEach(function (el) {
      el.style.display = (topic === 'all' || el.getAttribute('data-topic') === topic) ? '' : 'none';
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var topic = btn.getAttribute('data-topic-filter');
      select.value = topic;
      applyFilter(topic);
    });
  });

  select.addEventListener('change', function () {
    var topic = select.value;
    buttons.forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-topic-filter') === topic);
    });
    applyFilter(topic);
  });
}());
</script>
