---
title: "{{ replace .Name "-" " " | title }}"
hero: /images/posts/{{ .Name }}/hero.jpg
date: {{ .Date }}
description: TODO DESCRIPTION
menu:
  sidebar:
    name: "{{ replace .Name "-" " " | title }}"
    identifier: {{ .Name }}
    weight: 500
---