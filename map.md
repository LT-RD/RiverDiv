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

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Carte interactive</title>
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
    }

    /* Bouton d'ouverture */
    #open-map-btn {
      margin: 40px auto;
      display: block;
      padding: 10px 20px;
      font-size: 18px;
      cursor: pointer;
    }

    /* La modale contenant la carte */
    #map-modal {
      display: none; /* caché par défaut */
      position: fixed;
      top: 0; left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 9999;
      justify-content: center;
      align-items: center;
    }

    /* Contenu centré (carte) */
    .map-modal-content {
      position: relative;
      width: 90vw;
      height: 90vh;
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0,0,0,0.5);
    }

    .map-modal-content iframe {
      width: 100%;
      height: 100%;
      border: none;
    }

    /* Bouton pour fermer la modale */
    #close-map-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 10000;
      background-color: #fff;
      border: none;
      padding: 8px 12px;
      cursor: pointer;
      border-radius: 4px;
      font-size: 14px;
      box-shadow: 0 0 5px rgba(0,0,0,0.3);
    }
  </style>
</head>
<body>

  <!-- Bouton pour ouvrir la carte -->
  <button id="open-map-btn">🗺️ Afficher la carte</button>

  <!-- Modale contenant la carte -->
  <div id="map-modal">
    <div class="map-modal-content">
      <button id="close-map-btn">❌ Fermer</button>
      <iframe src="index_map.html"></iframe>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      const openBtn = document.getElementById('open-map-btn');
      const closeBtn = document.getElementById('close-map-btn');
      const modal = document.getElementById('map-modal');

      openBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
      });

      closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
      });
    });
  </script>

</body>
</html>
