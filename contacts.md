---
title: Contacts
layout: default
---

<link rel="stylesheet" href="{{ '/css/style.css' | relative_url }}">

<div class="tab-container">
    <a href="index" class="tab-button">Accueil</a>
    <a href="macroinv" class="tab-button">Macro invertébrés</a>
    <a href="map" class="tab-button">Carte Interactive</a>
    <a href="downloads" class="tab-button">Téléchargement</a>
    <a href="contacts" class="tab-button">Contacts</a>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
      const tabs = document.querySelectorAll(".tab-button");
      const currentPath = window.location.pathname;

      tabs.forEach(tab => {
          if (tab.getAttribute("href") === currentPath) {
              tab.classList.add("active");
          }
      });
  });
</script>


# Contacts

Pour toute question ou besoin éventuel, n'hésitez pas à prendre contact avec nous !

## Loïc Trutin
- [Mail](mailto:loic.trutin@engees.unistra.fr)
- [LinkedIn](https://www.linkedin.com/in/lo%C3%AFc-trutin-681299220/)

## Matthieu Lucchini
- [Mail](mailto:mlucchin1@engees.unistra.fr)
- LinkedIn

## Cybill Staentzel
- [Mail](mailto:cybill.staentzel@engees.unistra.fr)
- [LinkedIn](https://www.linkedin.com/in/cybill-staentzel-bb136796/)

## Jean-Nicolas Beisel
- [Mail](mailto:jean-nicolas.beisel@engees.unistra.fr)
- [LinkedIn](https://www.linkedin.com/in/jean-nicolas-beisel-48a62b302/)
