---
layout: grid-en
title: Blog - Gabriel Hagui
heading: Blog
description: Technical articles about AWS, Serverless, DevOps, automation, software architecture and practical experiments.
image: /assets/images/gabriel-hagui.webp
lang: en-US
permalink: /blog-en
section: blog
eyebrow: Notes & lessons
intro: Articles about technology, tools and experiences worth keeping beyond a quick note.
marker_label: Articles
marker_value: "05"
list_label: Article list
---

{% assign lista = site.data.blog_en %}
{% include catalog-grid.html items=lista %}
