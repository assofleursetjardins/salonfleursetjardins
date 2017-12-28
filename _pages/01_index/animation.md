---
title: Animations
subtitle: Pour petits et grands
---

Tous les jours et durant toute la durée du Salon, de nombreuses activités vous sont proposé. Et il y en a pour tous les ages.

{% for animation in site.animations %}
  - **[{{ animation.title }}]({{ animation.url | absolute_url }})** {{animation.description}}
{% endfor %}