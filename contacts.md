---
title: Contacts
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
    <a href="mentleg" class="tab-button"><i class="fa-solid fa-scale-balanced"></i></i> Mentions légales</a>
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

<h1 class="translatable" data-key="contacts">Contacts</h1>

<p class="translatable" data-key="textcontact">Pour toute question ou besoin éventuel, n'hésitez pas à prendre contact avec nous !</p>

## Loïc Trutin
<p class="translatable" data-key="LT" style="font-style: italic;">Ingénieur d'études ENGEES - LIVE</p>

- [Mail](mailto:loic.trutin@engees.unistra.fr)
- [LinkedIn](https://www.linkedin.com/in/lo%C3%AFc-trutin-681299220/)

## Matthieu Lucchini
<p class="translatable" data-key="ML" style="font-style: italic;">Doctorant ENGEES - LIVE</p>

- [Mail](mailto:mlucchin1@engees.unistra.fr)
- [LinkedIn](https://www.linkedin.com/in/matthieu-lucchini-655823373/)

## Cybill Staentzel
<p class="translatable" data-key="CS" style="font-style: italic;">Enseignante-chercheure ENGEES - LIVE</p>

- [Mail](mailto:cybill.staentzel@engees.unistra.fr)
- [LinkedIn](https://www.linkedin.com/in/cybill-staentzel-bb136796/)

## Jean-Nicolas Beisel
<p class="translatable" data-key="JNB" style="font-style: italic;">Professeur ENGEES - LIVE</p>

- [Mail](mailto:jean-nicolas.beisel@engees.unistra.fr)
- [LinkedIn](https://www.linkedin.com/in/jean-nicolas-beisel-48a62b302/)
