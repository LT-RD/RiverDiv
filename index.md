---
title: Accueil
layout: default
lang: fr
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
    <i class="fa-solid fa-house"></i><a href="index" class="tab-button translatable" data-key="home"> Accueil</a>
    <i class="fa-solid fa-bug"></i><a href="macroinv" class="tab-button translatable" data-key="macroinv"> Macro invertébrés</a>
    <i class="fa-solid fa-map"></i><a href="map" class="tab-button translatable" data-key="map"> Carte Interactive</a>
    <i class="fa-solid fa-floppy-disk"></i><a href="downloads" class="tab-button translatable" data-key="downloads"> Téléchargement</a>
    <i class="fa-solid fa-address-book"></i><a href="contacts" class="tab-button translatable" data-key="contacts"> Contacts</a>
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

<h1 class="translatable" data-key="welcome">Bienvenue sur l’Atlas RiverDiv !</h1>

<h2 class="translatable" data-key="project">Le projet</h2>

<div style="text-align: justify;">
    <p class="translatable" data-key="text1">Dans le cadre du projet INTERREG RIVERDIV, des travaux comprenant des campagnes de terrain visent à étudier les zones refuges et les macro-invertébrés. Suite à un travail d'identification, l'atlas suivant a été produit pour permettre de visualiser les différents ordres présents et leurs proportions. Sur ce site, vous pouvez accéder à la version interactive de l’atlas ainsi qu’à sa version PDF. Une présentation des différents taxons observés sur la Wieslauter et de leurs caractéristiques est également disponible.</p>
</div>

<h2 class="translatable" data-key="links">Liens vers le projet</h2>

- <a href="https://nuw.rptu.de/projekte/riverdiv/" class="translatable" data-key="link1">Projet RiverDiv - Site de la RPTU</a>
- <a href="https://live.unistra.fr/recherches/hydrosystemes/projets/liste-des-projets/projet-interreg-riverdiv" class="translatable" data-key="link2">Projet RiverDiv - Site du LIVE</a>

<h2 class="translatable" data-key="faq">Foire aux questions</h2>

<section id="faq">
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="q1">Pourquoi un tel site ?</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="r1">Ce site permet de présenter plusieurs résultats concernant les macro-invertébrés : carte interactive, atlas PDF, galerie présentant les différents taxons.</p></div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="q2">Pourquoi les macro-invertébrés ?</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="r2">Les macro invertébrés, du fait de leur caractéristiques spécifiques, sont souvent étudiés pour évaluer l'état d'un milieu aquatique. Certains taxons, s'ils sont présents, permettent par exemple d'établir le niveau de pollution du milieu du fait de leur polluo-sensibilité. Vous pourrez retrouver des informations sur les différents taxons observés dans l'onglet correspondant ainsi que dans l'atlas PDF.</p></div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="q3">Que sont les zones refuge ?</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="r3">Les zones refuge sont des espaces ausin desquels les individus vont pouvoir se protéger d'un danger (événement extrême, prédateur, etc.), se reposer, se nourri ou encore se reproduire.</p></div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="q4">Qui est derrière ce site ?</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="r4">Au global, le projet RiverDiv s'articule autour de plusieurs axes sur lesquels sont associés différentes équipes. Notre équipe, que nous vous invitons à découvrir dans l'onglet contacts, étudie la notion de zones refuge et leur caractérisation, le tout appliqué aux macro-invertébrés aquatiques. Cette équipe est constitué de membres de l'Ecole Nationale du Génie de l'Eau et de l'Environnement de Strasbourg (ENGEES) et du Laboratoire Image, Ville, Environnement (LIVE).</p></div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="q5">Comment le site a-t-il été réalisé ?</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="r5">Le site a été réalisé à l'aide des langages HTML, JavaScript et CSS. Le tout a été mis en ligne grâce à GitHub et GitHub Pages. La carte interactive est issue d'un travail sur le logiciel QGIS (à l'aide du plugin QGIS2WEB) et le rendu dynamique est permis par Leaflet.</p></div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="q6">Les données brutes sont-elles accessibles ?</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="r6">Les données brutes d'observations des différents taxons de macro-invertébrés aquatiques présents sur la Wieslauter ne sont pas disponibles directement sur le site ou le dépôt GitHub. Si de telles données vous intéressent, veuillez prendre contacts avec l'un des membres de l'équipe.</p></div>
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

<h2 class="translatable" data-key="partners">Partenaires du projet</h2>
<p align="center">
    <img src="images/Logos.png" alt="Logo 1" width="800">
</p>
