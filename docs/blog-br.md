---
layout: grid-br
title: Blog - Gabriel Hagui
heading: Blog
description: Artigos técnicos sobre AWS, Serverless, DevOps, automação, arquitetura de software e experimentos práticos.
section: blog
eyebrow: Notas & aprendizados
intro: Artigos sobre tecnologia, ferramentas e experiências que merecem ser registradas além de uma anotação rápida.
marker_label: Artigos
marker_value: "05"
list_label: Lista de artigos
image: /assets/images/gabriel-hagui.webp
lang: pt-BR
permalink: /blog-br
---

{% assign lista = site.data.blog_br %}
{% include catalog-grid.html items=lista %}
