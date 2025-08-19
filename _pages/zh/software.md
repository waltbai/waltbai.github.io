---
page_id: software
layout: page
permalink: /software/
title: 代码

nav: true
nav_order: 4
---

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/my_repo.liquid repository=repo %}
  {% endfor %}
</div>
