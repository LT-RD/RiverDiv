---
title: Téléchargements
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


# Télécharger le PDF

Ici, vous pouvez télécharger une version PDF de l'atlas :

[📥 Télécharger l'atlas en PDF](Atlas-RiverDiv.pdf)
