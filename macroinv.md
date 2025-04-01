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

<h1 class="translatable" data-key="macroinv2">Galerie des macro-invertébrés</h1>

<p class="translatable" data-key="text2">Cette partie est actuellement en construction !</p>

<section id="faq">
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="acan">Acantocéphales</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="acan2">En construction</p></p>
            <img src="images/ACAN.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="ache">Achètes</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="ache2">En construction</p></p>
            <img src="images/ACH.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="amphi">Amphipodes</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="amphi2">En construction</p></p>
            <img src="images/Gammarus.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="anne">Annélidés</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="anne2">En construction</p></p>
            <img src="images/ANNE.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="biva">Bivalves</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="biva2">En construction</p></p>
            <img src="images/BIVA.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="coleo">Coléoptères</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="coleo2">En construction</p></p>
            <img src="images/COLEO.jpg" alt="Logo 1" width="250" class="logo">
            <img src="images/COLEO2.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="deca">Décapodes</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="deca2">En construction</p></p>
            <img src="images/DECA.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="dipt">Diptères</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="dipt2">En construction</p></p>
            <img src="images/DIPT.jpg" alt="Logo 1" width="250" class="logo">
            <img src="images/DIPT2.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="epheme">Ephéméroptères</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="epheme2">En construction</p></p>
            <img src="images/EPHEME.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="gast">Gastéropodes</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="gast2">En construction</p></p>
            <img src="images/GAST.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="hetero">Hétéroptères</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="hetero2">En construction</p></p>
            <img src="images/HETERO.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="hydra">Hydracariens</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="hydra2">En construction</p></p>
            <img src="images/HYDRA.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="iso">Isopodes</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="iso2">En construction</p></p>
            <img src="images/ISO.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="nema">Némathelminthes</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="nema2">En construction</p></p>
            <img src="images/NEMA.jpg" alt="Logo 1" width="250" class="logo">
            <img src="images/NEMATO.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="odo">Odonates</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="odo2">En construction</p></p>
            <img src="images/ODO.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="oligo">Oligochètes</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="oligo2">En construction</p></p>
            <img src="images/OLIGO.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="pleco">Plécoptères</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="pleco2">En construction</p></p>
            <img src="images/PLECO.jpg" alt="Logo 1" width="250" class="logo">
        </div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-right"></i><p class="translatable" data-key="tricho">Trichoptères</p></div>
        <div class="faq-answer">
            <p style="text-align: justify;"><p class="translatable" data-key="tricho2">En construction</p></p>
            <img src="images/TRICHOtinodes.jpg" alt="Logo 1" width="250" class="logo">
            <img src="images/hydropsyche.jpg" alt="Logo 1" width="250" class="logo">
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
