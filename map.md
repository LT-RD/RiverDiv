---
title: Carte interactive
layout: default
---

<link rel="stylesheet" href="{{ '/css/style.css' | relative_url }}">

<div class="tab-container">
    <a href="index" class="tab-button">Accueil</a>
    <a href="map" class="tab-button">Carte Interactive</a>
    <a href="downloads" class="tab-button">Téléchargement</a>
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


# Carte interactive

<style>
    .map-container {
        position: relative; /* Permet d'intégrer la carte dans la mise en page */
        width: 600px; /* Largeur fixe */
        height: 400px; /* Hauteur fixe */
        margin: 20px auto; /* Centre la carte horizontalement */
        border: 2px solid #ccc; /* Bordure pour encadrer la carte */
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* Ombre pour effet visuel */
        border-radius: 8px; /* Coins arrondis */
        background: #f9f9f9; /* Fond clair */
        overflow: hidden; /* Empêche les débordements */
    }
    .map-container iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
</style>

<div class="map-container">
    <iframe src="index_map.html"></iframe>
</div>
