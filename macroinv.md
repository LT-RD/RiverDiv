---
title: Macro-invertébrés
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
    <a href="mentions-legales" class="tab-button"><i class="fa-solid fa-scale-balanced"></i> Mentions légales</a>
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

<h1 class="translatable" data-key="macroinv2">Galerie des macroinvertébrés de la Wieslauter</h1>

<div style="text-align: justify;">
<p class="translatable" data-key="text2">Explorez ici les macroinvertébrés recensés dans l’atlas de la Wieslauter. De courtes descriptions accompagnées de quelques photographies vous permettront d’en apprendre davantage à leur sujet.</p>
</div>

<section id="faq">
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="acan">Acantocéphales</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="acan2">Les acantocéphales, aussi connus sous le nom de vers à tête épineuse, sont des parasites capables de s’accrocher à leurs hôtes. N’ayant pas de vie libre, ils parasitent les arthropodes à l’état juvénile puis contaminent les vertébrés à l’âge adulte. Ces derniers sont contaminés en mangeant les hôtes intermédiaires. C’est en modifiant le comportement des hôtes intermédiaires pour les forcer à se faire manger que les hôtes finaux seront contaminés.</p>
            <p>
                <span class="translatable" data-key="extax">
                    Exemple de taxon trouvé sur la Wieslauter :
                </span>
                <em>Rhadinorhynchus sp.</em>
            </p>
                <img src="images/ACAN.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="ach">Achètes</p></div>
        <div class="faq-answer" style="text-align: justify;"><p class="translatable" data-key="ach2">De la classe des annélidés, les sangsues disposent de ventouses et sont hermaphrodites. Certaines espèces sont hématophages. Les achètes peuvent être considérés comme polluo-résistants notamment du fait de leur résistance à des conditions d’hypoxie. Cela fait souvent de ces derniers les seuls prédateurs là où la pollution organique est élevée.
Prédatrices ou parasites, les achètes peuvent se disperser par le biais du courant.</p>
            <p>
                <span class="translatable" data-key="extax">
                    Exemple de taxon trouvé sur la Wieslauter :
                </span>
                <em>Batracobdella sp..</em>
            </p>
                <img src="images/ACH.jpg" alt="Logo 1" width="250" class="logo">
        </div>
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
