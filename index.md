---
title: Accueil
layout: default
---

<link rel="stylesheet" href="{{ '/css/style.css' | relative_url }}">

<div class="tab-container">
    <a href="/index/" class="tab-button">Accueil</a>
    <a href="/map/" class="tab-button">Carte Interactive</a>
    <a href="/downloads/" class="tab-button">Téléchargement</a>
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


<p align="left">
    <img src="images/RD.png" alt="Logo 1" width="180">
</p>

# Bienvenue sur le site de l'atlas macro invertébrés du projet RiverDiv !

<div style="text-align: justify;">
Dans le cadre du projet INTERREG RIVERDIV, des travaux comprenant des campagnes de terrain visent à étudier les zones refuges et les macro-invertébrés. Suite à un travail d'identification, l'atlas suivant a été produit pour permettre de visualiser les différents ordres présents et leurs proportions.
</div>

Sur ce site, vous pouvez accéder à la version interactive de l'atlas ainsi qu'à sa version PDF :
- [Carte interactive (atlas dynamique)](map)
- [Téléchargement de l'atlas en PDF](downloads)

## Liens vers le projet

- [Projet RiverDiv - Site de la RPTU](https://nuw.rptu.de/projekte/riverdiv/version-francaise)

- [Projet RiverDiv - Site du LIVE](https://live.unistra.fr/recherches/hydrosystemes/projets/liste-des-projets/projet-interreg-riverdiv)

## Partenaires du projet
<p align="center">
    <img src="images/Logos.png" alt="Logo 1" width="800">
</p>
