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
    <a href="macroinv" class="tab-button"><i class="fa-solid fa-bug"></i> Galerie des macroinvertébrés de la Wieslauter</a>
    <a href="map" class="tab-button"><i class="fa-solid fa-map"></i> L’atlas en cartographie interactive</a>
    <a href="downloads" class="tab-button"><i class="fa-solid fa-floppy-disk"></i> Télécharger l’atlas en format pdf</a>
    <a href="contacts" class="tab-button"><i class="fa-solid fa-address-book"></i> Equipe du projet Interreg RiverDiv – Volet « Biodiversité et zones refuges »</a>
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

<iframe src="index_map.html" width="100%" height="600" frameborder="0"></iframe>

<h2 class="translatable" data-key="tuto">Tutoriel</h2>

<div style="text-align: justify;">
    <p class="translatable" data-key="tuto2">Ici, vous trouverez un tutoriel vidéo pour vous permettre de comprendre le fonctionnement de la carte interactive.</p>
</div>

<video controls style="max-width:100%; height:auto; display:block; margin:auto;">
    <source src="RD tutorial.mp4" type="video/mp4">
</video>
