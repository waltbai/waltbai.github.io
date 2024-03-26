---
page_id: projects
layout: page
permalink: /projects/
title: Projects

nav: true
nav_order: 3

display_categories: [NSFC, Open-source]
---

<div class="publications">
{% if site.enable_project_categories and page.display_categories %}
<!-- Display categorized projects -->
  {% for category in page.display_categories %}
    <h2 id="{{ category }}-projects"> {{ category }} projects </h2>
    {% assign categorized_projects = site.projects | where: "category", category %}
    {% assign sorted_projects = categorized_projects | sort: "start_date" %}
    <ol class="bibliography">
      {% for project in sorted_projects %}
        <li>
          <div class="row">
            <div class="col-xs-2 cl-sm-2 col-md-2 text-center abbr">
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
            <div class="col-xs-10 cl-sm-10 col-md-10 mt-2 mt-md-0">
              <div class="title font-weight-bold ml-1 ml-md-4">
                <a href="{{ project.url }}">{{ project.title }}</a>
              </div>
              <div class="periodical ml-1 ml-md-4">
                {% if project.type %} {{ project.type }} {% endif %}
                {% if project.code %} ({{ project.code }}) {% endif %}
              </div>
              <div class="periodical ml-1 ml-md-4">
                {% if project.role %} {{ project.role }} {% endif %}
              </div>
              <div class="links ml-1 ml-md-4">
                {% if project.description %}
                  <a class="abstract btn btn-sm z-depth-0" role="button">ABS</a>
                {% endif %}
              </div>
              {% if project.description %}
                <!-- Hidden abstract block -->
                <div class="abstract hidden ml-1 ml-md-4">
                  <p>{{ project.description }}</p>
                </div>
              {% endif %}
            </div>
          </div>
        </li>
      {% endfor %}
    </ol>
  {% endfor %}
{% else %}
<!-- Display projects without categories -->
  {% assign sorted_projects = site.projects | sort: "start_date" %}
  <ol class="bibliography">
    {% for project in sorted_projects %}
      <li>
        <div class="row">
          <div class="col-xs-2 cl-sm-2 col-md-2 text-center abbr">
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
          <div class="col-xs-10 cl-sm-10 col-md-10 mt-2 mt-md-0">
            <div class="title font-weight-bold ml-1 ml-md-4">
              <a href="{{ project.url }}">{{ project.title }}</a>
            </div>
            <div class="periodical ml-1 ml-md-4">
              {% if project.role %} {{ project.role }} {% endif %}
              {% if project.type %} &middot; {{ project.type }} {% endif %}
            </div>
          </div>
          <div class="links ml-1 ml-md-4">
            {% if project.description %}
              <a class="abstract btn btn-sm z-depth-0" role="button">ABS</a>
            {% endif %}
          </div>
          {% if project.description %}
            <!-- Hidden abstract block -->
            <div class="abstract hidden ml-1 ml-md-4">
              <p>{{ project.description }}</p>
            </div>
          {% endif %}
        </div>
      </li>
    {% endfor %}
  </ol>
{% endif %}
</div>
