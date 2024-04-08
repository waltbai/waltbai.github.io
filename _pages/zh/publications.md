---
page_id: publications
layout: page
permalink: /publications/
title: 发表论文
description: "完整论文列表请见本人<a href='https://scholar.google.com/citations?user=Zrd9pCMAAAAJ'>谷歌学术主页</a>。"
nav: true
nav_order: 2
---
{% assign abstract_name = "摘要" %}
{% assign code_name = "代码" %}
{% assign html_name = "网页" %}

<!-- _pages/publications.md -->
## 预印本

<div class="publications">

{% bibliography --file preprints %}

</div>

## 期刊与会议论文

<div class="publications">

{% bibliography --file papers %}

</div>
