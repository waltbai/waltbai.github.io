---
page_id: projects
layout: page
permalink: /projects/
title: 科研项目

nav: true
nav_order: 3

display_categories: [开源]

toc:
  sidebar: left
---

<div class="cv">
{% if site.enable_project_categories and page.display_categories %}
<!-- Display categorized projects -->
  {% for category in page.display_categories %}
    <div class="card mt-3 p-3">
      <h2 class="card-title font-weight-medium">{{ category }}项目</h2>
      {% assign categorized_projects = site.projects | where: "category", category %}
      {% assign sorted_projects = categorized_projects | sort: "start_date" %}
      <ul class="card-text font-weight-light list-group list-group-flush">
        {% for project in sorted_projects %}
          <li class="list-group-item">
            <div class="row">
              <div class="col-xs-2 cl-sm-2 col-md-2 text-center">
                {% if project.start_date %}
                  {% assign startDate = project.start_date | split: '-' | slice: 0, 2 | join: '.' %}
                  {% assign endDate = project.end_date | split: '-' | slice: 0, 2 | join: '.' | default: 'Present' %}
                  {% assign date = startDate | append: ' - ' %}
                  {% assign date = date | append: endDate %}
                {% else %}
                  {% assign date = '' %}
                {% endif %}
                <span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width: 75px"> {{ date }} </span>
              </div>
              <div class="col-xs-10 cl-sm-10 col-md-10 mt-2 mt-md-0">
                <h6 class="title font-weight-bold ml-1 ml-md-4">
                  <a href="{{ project.url }}">{{ project.title }}</a>
                  {% if project.type %} &middot; {{ project.type }} {% endif %}
                  {% if project.role %} &middot; {{ project.role }} {% endif %}
                </h6>
                <h6 class="ml-1 ml-md-4" style="font-size: 0.95rem; font-style: italic">{{ project.description }}</h6>
              </div>
            </div>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
{% else %}
<!-- Display projects without categories -->
  <div class="card mt-3 p-3">
    {% assign sorted_projects = site.projects | sort: "start_date" %}
    <ul class="card-text font-weight-light list-group list-group-flush">
      {% for project in sorted_projects %}
        <li class="list-group-item">
          <div class="row">
            <div class="col-xs-2 cl-sm-2 col-md-2 text-center">
              {% if project.start_date %}
                {% assign startDate = project.start_date | split: '-' | slice: 0, 2 | join: '.' %}
                {% assign endDate = project.end_date | split: '-' | slice: 0, 2 | join: '.' | default: 'Present' %}
                {% assign date = startDate | append: ' - ' %}
                {% assign date = date | append: endDate %}
              {% else %}
                {% assign date = '' %}
              {% endif %}
              <span class="badge font-weight-bold text-uppercase align-middle" style="min-width: 75px"> {{ date }} </span>
            </div>
            <div class="col-xs-10 cl-sm-10 col-md-10 mt-2 mt-md-0">
              <h6 class="title font-weight-bold ml-1 ml-md-4">
                <a href="{{ project.url }}">{{ project.title }}</a>
                {% if project.type %} &middot; {{ project.type }} {% endif %}
                {% if project.role %} &middot; {{ project.role }} {% endif %}
              </h6>
              <h6 class="ml-1 ml-md-4" style="font-size: 0.95rem; font-style: italic">{{ project.description }}</h6>
            </div>
          </div>
        </li>
      {% endfor %}
    </ul>
  </div>
{% endif %}
</div>
