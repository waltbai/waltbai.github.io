---
page_id: projects
layout: page
permalink: /projects/
title: Projects

nav: true
nav_order: 3

display_categories: [Open-source, NSFC]

toc:
  sidebar: left
---

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
<!-- Display categorized projects -->
  {% for category in page.display_categories %}
    <h2 class="category">{{ category }} projects</h2>
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
              </h6>
              <h6 class="ml-1 ml-md-4" style="font-size: 0.95rem; font-style: italic">{{ project.description }}</h6>
              <h6 class="ml-1 ml-md-4" style="font-size: 0.95rem">Role: {{ project.role }}</h6>
            </div>
          </div>
        </li>
      {% endfor %}
    </ul>
  {% endfor %}
{% else %}
<!-- Display projects without categories -->
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
            <span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width: 75px"> {{ date }} </span>
          </div>
          <div class="col-xs-10 cl-sm-10 col-md-10 mt-2 mt-md-0">
            <h6 class="title font-weight-bold ml-1 ml-md-4">
              <a href="{{ project.url }}">{{ project.title }}</a>
            </h6>
            <h6 class="ml-1 ml-md-4" style="font-size: 0.95rem; font-style: italic">{{ project.description }}</h6>
            <h6 class="ml-1 ml-md-4" style="font-size: 0.95rem">Role: {{ project.role }}</h6>
          </div>
        </div>
      </li>
    {% endfor %}
{% endif %}
</div>


