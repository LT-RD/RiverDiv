---
title: Carte interactive
layout: default
---

<div class="tab-container">
    <a href="/index.html" class="tab-button">Accueil</a>
    <a href="/map.html" class="tab-button">Carte Interactive</a>
    <a href="/downloads.html" class="tab-button">Téléchargement</a>
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
    /* Assure-toi que la carte prend tout l’espace sous les onglets */
    .map-container {
        position: fixed;
        top: 50px; /* Ajuste selon la hauteur de ton menu */
        left: 0;
        width: 100%;
        height: calc(100vh - 50px); /* Ajuste pour laisser de la place au menu */
        border: none;
    }
</style>

<iframe class="map-container" src="index_map.html"></iframe>
