---
title: Carte interactive
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


# Carte interactive

<style>
    /* Conteneur de la carte centré dans la page */
    .map-wrapper {
        display: flex;
        justify-content: center; /* Centre horizontalement */
        align-items: center; /* Centre verticalement */
        height: 100vh; /* Prend toute la hauteur de la fenêtre */
    }

    /* Taille et bordure de la carte */
    .map-container {
        width: 1500px; /* Largeur souhaitée */
        height: 800px; /* Hauteur souhaitée */
        border: 2px solid #ccc; /* Bordure pour encadrer la carte */
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1); /* Ombre pour effet visuel */
        border-radius: 8px; /* Coins arrondis */
        background: #f9f9f9; /* Fond clair */
        overflow: hidden; /* Empêche les débordements */
    }

    /* Style pour l'iframe */
    .map-container iframe {
        width: 100%;
        height: 100%;
        border: none;
    }

    /* Media Query pour les petits écrans (téléphones, tablettes) */
    @media screen and (max-width: 768px) {
        .map-container {
            width: 100%; /* La carte prend 100% de la largeur disponible sur petit écran */
            height: 400px; /* La hauteur de la carte est réduite pour un meilleur affichage */
        }
    }

    /* Media Query pour les très petits écrans (smartphones en portrait) */
    @media screen and (max-width: 480px) {
        .map-container {
            width: 100%; /* La carte prend toute la largeur sur un écran très petit */
            height: 300px; /* Réduit encore la hauteur pour les écrans très petits */
        }
    }
</style>

<!-- Conteneur principal pour centrer la carte -->
<div class="map-wrapper">
    <div class="map-container">
        <iframe src="index_map.html"></iframe>
    </div>
</div>

