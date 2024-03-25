---
page_id: projects
layout: page
permalink: /projects/
title: Projects

nav: true
nav_order: 3

display_categories: [NSFC, Open-source]

toc:
  sidebar: left
---

<div class="publications">
{% if site.enable_project_categories and page.display_categories %}
<!-- Display categorized projects -->
  {% for category in page.display_categories %}
    ## {{ category }} projects
    {% assign categorized_projects = site.projects | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "start_date" %}
    <ol class="bibliography">
    {% for project in sorted_projects %}
      <div class="row">
        <div class="col-sm-2 abbr">
          {% if project.start_date %}
            {% assign startDate = project.start_date | split: '-' | slice: 0, 2 | join: '.' %}
            {% assign endDate = project.end_date | split: '-' | slice: 0, 2 | join: '.' | default: 'Present' %}
            {% assign date = startDate | append: ' - ' %}
            {% assign date = date | append: endDate %}
          {% else %}
            {% assign date = '' %}
          {% endif %}
          <abbr class="badge">{{ date }}</abbr>
        </div>
        <div class="col-sm-8">
          <div class="title font-weight-bold">
            <a href="{{ project.url }}">{{ project.title }}</a>
          </div>
          <div class="periodical font-weight-bold">
            {% if project.role %} {{ project.role }} {% endif %}
            {% if project.type %} &middot; {{ project.type }} {% endif %}
          </div>
          <div class="links">
            {% if project.description %}
              <a class="abstract btn btn-sm z-depth-0" role="button">ABS</a>
            {% endif %}
          </div>
          {% if project.description %}
            <!-- Hidden abstract block -->
            <div class="abstract hidden">
              <p>{{ project.description }}</p>
            </div>
          {% endif %}
        </div>
      </div>  
    {% endfor %}
  {% endfor %}
  </ol>
{% else %}
<!-- Display projects without categories -->
  {% assign sorted_projects = site.projects | sort: "start_date" %}
  <ol class="bibliography">
  {% for project in sorted_projects %}
    <div class="row">
      <div class="col-sm-2 abbr">
        {% if project.start_date %}
          {% assign startDate = project.start_date | split: '-' | slice: 0, 2 | join: '.' %}
          {% assign endDate = project.end_date | split: '-' | slice: 0, 2 | join: '.' | default: 'Present' %}
          {% assign date = startDate | append: ' - ' %}
          {% assign date = date | append: endDate %}
        {% else %}
          {% assign date = '' %}
        {% endif %}
        <abbr class="badge">{{ date }}</abbr>
      </div>
      <div class="col-sm-8">
        <div class="title font-weight-bold">
          <a href="{{ project.url }}">{{ project.title }}</a>
        </div>
        <div class="periodical font-weight-bold">
          {% if project.role %} {{ project.role }} {% endif %}
          {% if project.type %} &middot; {{ project.type }} {% endif %}
        </div>
      </div>
      <div class="links">
        {% if project.description %}
          <a class="abstract btn btn-sm z-depth-0" role="button">ABS</a>
        {% endif %}
      </div>
      {% if project.description %}
        <!-- Hidden abstract block -->
        <div class="abstract hidden">
          <p>{{ project.description }}</p>
        </div>
      {% endif %}
    </div>
  {% endfor %}
  </ol>
{% endif %}
</div>
