---
title: Téléchargements
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

# Télécharger le PDF

Ici, vous pouvez télécharger une version PDF de l'atlas :

<a href="Atlas-RiverDiv.pdf"><i class="fa-solid fa-floppy-disk"></i> Télécharger l'atlas en PDF</a>
