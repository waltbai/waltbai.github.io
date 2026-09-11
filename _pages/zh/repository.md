---
page_id: repository
layout: page
permalink: /repository/
title: 代码

nav: true
nav_order: 4
---

<div class="repositories repository-grid">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/my_repo.liquid repository=repo %}
  {% endfor %}
</div>
