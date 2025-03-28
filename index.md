---
title: Accueil
layout: default
---

<link rel="stylesheet" href="{{ '/css/style.css' | relative_url }}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Bouton pour ouvrir le menu de sélection de langue -->
<div id="language-selector" class="language-dropdown">
    <button class="language-button">
        🌍 Langue <i class="fa fa-chevron-down"></i>
    </button>
    <div class="language-options">
        <button class="lang-option" data-lang="fr">🇫🇷 Français</button>
        <button class="lang-option" data-lang="en">🇬🇧 English</button>
    </div>
</div>

<script src="{{ '/script.js' | relative_url }}"></script>

<!-- Bouton pour ouvrir/fermer le menu -->
<button id="menu-toggle" class="menu-button">
    <i class="fa fa-bars"></i> Menu
</button>

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

<p align="left">
    <img src="images/RD.png" alt="Logo 1" width="180">
</p>

# Bienvenue sur l'Atlas RiverDiv !

## Le projet

<div style="text-align: justify;">
Dans le cadre du projet INTERREG RIVERDIV, des travaux comprenant des campagnes de terrain visent à étudier les zones refuges et les macro-invertébrés. Suite à un travail d'identification, l'atlas suivant a été produit pour permettre de visualiser les différents ordres présents et leurs proportions.
</div>

Sur ce site, vous pouvez accéder à la version interactive de l'atlas ainsi qu'à sa version PDF :
- [Carte interactive (atlas dynamique)](map)

- [Téléchargement de l'atlas en PDF](downloads)

Une présentation des différents taxons observés sur la Wieslauter et de leurs caractéristiques est également disponible :

- [Galerie des macro-invertébrés](macroinv)

## Liens vers le projet

- [Projet RiverDiv - Site de la RPTU](https://nuw.rptu.de/projekte/riverdiv/version-francaise)

- [Projet RiverDiv - Site du LIVE](https://live.unistra.fr/recherches/hydrosystemes/projets/liste-des-projets/projet-interreg-riverdiv)

## Foire aux questions

<section id="faq">
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i> Pourquoi un tel site ?</div>
        <div class="faq-answer" style="text-align: justify;">Ce site permet de présenter plusieurs résultats concernant les macro-invertébrés : carte interactive, atlas PDF, galerie présentant les différents taxons.</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i> Pourquoi les macro-invertébrés ?</div>
        <div class="faq-answer" style="text-align: justify;">Les macro invertébrés, du fait de leur caractéristiques spécifiques, sont souvent étudiés pour évaluer l'état d'un milieu aquatique. Certains taxons, s'ils sont présents, permettent par exemple d'établir le niveau de pollution du milieu du fait de leur polluo-sensibilité. Vous pourrez retrouver des informations sur les différents taxons observés dans l'onglet correspondant ainsi que dans l'atlas PDF.</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i> Que sont les zones refuge ?</div>
        <div class="faq-answer" style="text-align: justify;">Les zones refuge sont des espaces ausin desquels les individus vont pouvoir se protéger d'un danger (événement extrême, prédateur, etc.), se reposer, se nourri ou encore se reproduire.</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i> Qui est derrière ce site ?</div>
        <div class="faq-answer" style="text-align: justify;">Au global, le projet RiverDiv s'articule autour de plusieurs axes sur lesquels sont associés différentes équipes. Notre équipe, que nous vous invitons à découvrir dans l'onglet contacts, étudie la notion de zones refuge et leur caractérisation, le tout appliqué aux macro-invertébrés aquatiques. Cette équipe est constitué de membres de l'Ecole Nationale du Génie de l'Eau et de l'Environnement de Strasbourg (ENGEES) et du Laboratoire Image, Ville, Environnement (LIVE).</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i> Comment le site a-t-il été réalisé ?</div>
        <div class="faq-answer" style="text-align: justify;">Le site a été réalisé à l'aide des langages HTML, JavaScript et CSS. Le tout a été mis en ligne grâce à GitHub et GitHub Pages. La carte interactive est issue d'un travail sur le logiciel QGIS (à l'aide du plugin QGIS2WEB) et le rendu dynamique est permis par Leaflet.</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i> Les données brutes sont-elles accessibles ?</div>
        <div class="faq-answer" style="text-align: justify;">Les données brutes d'observations des différents taxons de macro-invertébrés aquatiques présents sur la Wieslauter ne sont pas disponibles directement sur le site ou le dépôt GitHub. Si de telles données vous intéressent, veuillez prendre contacts avec l'un des membres de l'équipe.</div>
    </div>
</section>

<script>
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            let answer = item.nextElementSibling;
            let icon = item.querySelector('i');
            answer.classList.toggle('open');
            icon.classList.toggle('fa-chevron-right');
            icon.classList.toggle('fa-chevron-down');
        });
    });
</script>

## Partenaires du projet
<p align="center">
    <img src="images/Logos.png" alt="Logo 1" width="800">
</p>
