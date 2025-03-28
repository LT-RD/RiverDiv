---
title: Accueil
layout: default
lang: fr
---

<link rel="stylesheet" href="{{ '/css/style.css' | relative_url }}">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- Sélecteur de langue -->
<div id="language-selector" class="language-dropdown">
    <button id="language-button" class="language-button">
        🌍 Langue <i class="fa fa-chevron-down"></i>
    </button>
    <div class="language-options">
        <button class="lang-option" data-lang="fr">🇫🇷 Français</button>
        <button class="lang-option" data-lang="en">🇬🇧 English</button>
        <button class="lang-option" data-lang="de">🇩🇪 Deutsch</button>
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

# <p class="translatable" data-key="welcome">{{ site.data.translations[page.lang].welcome }}</p>

## <p class="translatable" data-key="project">{{ site.data.translations[page.lang].project }}</p>

<div style="text-align: justify;">
    <p class="translatable" data-key="text1">{{ site.data.translations[page.lang].text1 }}</p>
</div>

## <p class="translatable" data-key="links">{{ site.data.translations[page.lang].links }}</p>

- [<p class="translatable" data-key="link1">{{ site.data.translations[page.lang].link1 }}</p>](https://nuw.rptu.de/projekte/riverdiv/version-francaise)

- [<p class="translatable" data-key="link2">{{ site.data.translations[page.lang].link2 }}</p>](https://live.unistra.fr/recherches/hydrosystemes/projets/liste-des-projets/projet-interreg-riverdiv)

## <p class="translatable" data-key="faq">{{ site.data.translations[page.lang].faq }}</p>

<section id="faq">
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i> <p class="translatable" data-key="q1">{{ site.data.translations[page.lang].q1 }}</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="r1">{{ site.data.translations[page.lang].r1 }}</p></div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i> <p class="translatable" data-key="q2">{{ site.data.translations[page.lang].q2 }}</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="r2">{{ site.data.translations[page.lang].r2 }}</p></div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i> <p class="translatable" data-key="q3">{{ site.data.translations[page.lang].q3 }}</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="r3">{{ site.data.translations[page.lang].r3 }}</p></div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i> <p class="translatable" data-key="q4">{{ site.data.translations[page.lang].q4 }}</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="r4">{{ site.data.translations[page.lang].r4 }}</p></div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i> <p class="translatable" data-key="q5">{{ site.data.translations[page.lang].q5 }}</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="r5">{{ site.data.translations[page.lang].r5 }}</p></div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i> <p class="translatable" data-key="q6">{{ site.data.translations[page.lang].q6 }}</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="r6">{{ site.data.translations[page.lang].r6 }}</p></div>
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

## <p class="translatable" data-key="partners">{{ site.data.translations[page.lang].partners }}</p>
<p align="center">
    <img src="images/Logos.png" alt="Logo 1" width="800">
</p>
