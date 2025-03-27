---
title: Macro-invertébrés
layout: default
---

<link rel="stylesheet" href="{{ '/css/style.css' | relative_url }}">

<div class="tab-container">
    <a href="index" class="tab-button">Accueil</a>
    <a href="macroinv" class="tab-button">Macro invertébrés</a>
    <a href="map" class="tab-button">Carte Interactive</a>
    <a href="downloads" class="tab-button">Téléchargement</a>
    <a href="contacts" class="tab-button">Contacts</a>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function() {
      const tabs = document.querySelectorAll(".tab-button");
      const currentPath = window.location.pathname;

      tabs.forEach(tab => {
          if (tab.getAttribute("href") === currentPath) {
              tab.classList.add("active");
          }
      });
  });
</script>

<p align="left">
    <img src="images/RD.png" alt="Logo 1" width="180">
</p>

# Galerie des macro-invertébrés

Cette partie est actuellement en construction !

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<section id="faq">
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Acantocéphales</div>
        <div class="faq-answer" style="text-align: justify;">En construction... <img src="images/ACH.jpg" alt="Logo 1" width="180"></div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Achètes</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Amphipodes</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Annélidés</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Bivalves</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Coléoptères</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Décapodes</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Diptères</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Ephéméroptères</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Gastéropodes</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Hétéroptères</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Hydracariens</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Isopodes</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Némathelminthes</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Odonates</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Oligochètes</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Plécoptères</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>
    <div class="faq-item">
        <div class="faq-question"><i class="fa-solid fa-chevron-down"></i> Trichoptères</div>
        <div class="faq-answer" style="text-align: justify;">En construction...</div>
    </div>  
</section>

<script>
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            let answer = item.nextElementSibling;
            let icon = item.querySelector('i');
            answer.classList.toggle('open');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });
</script>
