---
title: Carte interactive
layout: default
---

<link rel="stylesheet" href="{{ '/css/style.css' | relative_url }}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<div class="header">
<!-- Bouton pour ouvrir/fermer le menu -->
<button id="menu-toggle" class="menu-button">
    <i class="fa fa-bars"></i> Menu
</button>

    <!-- Sélecteur de langue -->
<div id="language-selector" class="language-dropdown">
    <button id="language-button" class="language-button"><i class="fa-solid fa-language"></i> Langue</button>
    <div class="language-options">
        <button class="lang-option" data-lang="fr">🇫🇷 Français</button>
        <button class="lang-option" data-lang="en">🇬🇧 English</button>
        <button class="lang-option" data-lang="de">🇩🇪 Deutsch</button>
    </div>
</div>
</div>

<script src="{{ '/script.js' | relative_url }}"></script>

<!-- Conteneur du menu rétractable -->
<div id="menu" class="tab-container">
    <a href="index" class="tab-button"><i class="fa-solid fa-house"></i> Accueil</a>
    <a href="macroinv" class="tab-button"><i class="fa-solid fa-bug"></i> Macro invertébrés</a>
    <a href="map" class="tab-button"><i class="fa-solid fa-map"></i> Carte Interactive</a>
    <a href="downloads" class="tab-button"><i class="fa-solid fa-floppy-disk"></i> Téléchargement</a>
    <a href="contacts" class="tab-button"><i class="fa-solid fa-address-book"></i> Contacts</a>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", function() {
        menu.classList.toggle("show");
        menuButton.classList.toggle("active");
    });
});
</script>

<h1 class="translatable" data-key="map2">Carte interactive</h1>

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

