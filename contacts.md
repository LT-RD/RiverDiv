---
title: Contacts
layout: default
---

<link rel="stylesheet" href="{{ '/css/style.css' | relative_url }}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<div class="tab-container">
    <a href="index" class="tab-button"><i class="fa-solid fa-house"></i> Accueil</a>
    <a href="macroinv" class="tab-button"><i class="fa-solid fa-bug"></i> Macro invertébrés</a>
    <a href="map" class="tab-button"><i class="fa-solid fa-map"></i> Carte Interactive</a>
    <a href="downloads" class="tab-button"><i class="fa-solid fa-floppy-disk"></i> Téléchargement</a>
    <a href="contacts" class="tab-button"><i class="fa-solid fa-address-book"></i> Contacts</a>
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
*Ingénieur d'études ENGEES - LIVE*

- [Mail](mailto:loic.trutin@engees.unistra.fr)
- [LinkedIn](https://www.linkedin.com/in/lo%C3%AFc-trutin-681299220/)

## Matthieu Lucchini
*Doctorant ENGEES - LIVE*

- [Mail](mailto:mlucchin1@engees.unistra.fr)
- LinkedIn

## Cybill Staentzel
*Enseignante-chercheure ENGEES - LIVE*

- [Mail](mailto:cybill.staentzel@engees.unistra.fr)
- [LinkedIn](https://www.linkedin.com/in/cybill-staentzel-bb136796/)

## Jean-Nicolas Beisel
*Professeur ENGEES - LIVE*

- [Mail](mailto:jean-nicolas.beisel@engees.unistra.fr)
- [LinkedIn](https://www.linkedin.com/in/jean-nicolas-beisel-48a62b302/)
