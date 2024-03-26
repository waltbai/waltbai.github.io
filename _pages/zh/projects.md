---
page_id: projects
layout: page
permalink: /projects/
title: 科研项目

nav: true
nav_order: 3

display_categories: [国家自然科学基金, 开源]
---

<div class="publications">
{% if site.enable_project_categories and page.display_categories %}
<!-- Display categorized projects -->
  {% for category in page.display_categories %}
    <h2 id="{{ category }}-projects"> {{ category }}项目 </h2>
    {% assign categorized_projects = site.projects | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "start_date" %}
    {% include research_project.liquid %}
  {% endfor %}
{% else %}
<!-- Display projects without categories -->
  {% assign sorted_projects = site.projects | sort: "start_date" %}
  {% include research_project.liquid %}
{% endif %}
</div>
