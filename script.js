document.addEventListener("DOMContentLoaded", function() {
    const langSelector = document.getElementById("language-selector");
    const langButton = langSelector.querySelector(".language-button");
    const langOptions = document.querySelectorAll(".lang-option");

    // Charger la langue sauvegardée
    let currentLang = localStorage.getItem("language") || "fr";
    changeLanguage(currentLang);

    // Ouvrir/fermer le menu des langues
    langButton.addEventListener("click", function() {
        langSelector.classList.toggle("active");
    });

    // Gestion du changement de langue
    langOptions.forEach(option => {
        option.addEventListener("click", function() {
            let selectedLang = this.getAttribute("data-lang");
            localStorage.setItem("language", selectedLang);
            changeLanguage(selectedLang);
            langSelector.classList.remove("active"); // Ferme le menu après sélection
        });
    });

    // Fonction de traduction dynamique
    function changeLanguage(lang) {
        const translations = {
            "fr": {
                "menu": "Menu",
                "home": "Accueil",
                "macroinv": "Macro invertébrés",
                "map": "Carte Interactive",
                "downloads": "Téléchargement",
                "contacts": "Contacts"
            },
            "en": {
                "menu": "Menu",
                "home": "Home",
                "macroinv": "Macro invertebrates",
                "map": "Interactive Map",
                "downloads": "Downloads",
                "contacts": "Contacts"
            },
            "es": {
                "menu": "Menú",
                "home": "Inicio",
                "macroinv": "Macro invertebrados",
                "map": "Mapa Interactivo",
                "downloads": "Descargas",
                "contacts": "Contactos"
            }
        };

        // Modifier les textes des boutons et éléments HTML
        document.querySelector(".menu-button").innerHTML = `🌍 ${translations[lang]["menu"]} <i class="fa fa-chevron-down"></i>`;
        document.querySelector("a[href='index']").innerHTML = `<i class="fa-solid fa-house"></i> ${translations[lang]["home"]}`;
        document.querySelector("a[href='macroinv']").innerHTML = `<i class="fa-solid fa-bug"></i> ${translations[lang]["macroinv"]}`;
        document.querySelector("a[href='map']").innerHTML = `<i class="fa-solid fa-map"></i> ${translations[lang]["map"]}`;
        document.querySelector("a[href='downloads']").innerHTML = `<i class="fa-solid fa-floppy-disk"></i> ${translations[lang]["downloads"]}`;
        document.querySelector("a[href='contacts']").innerHTML = `<i class="fa-solid fa-address-book"></i> ${translations[lang]["contacts"]}`;
    }

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", function(event) {
        if (!langSelector.contains(event.target)) {
            langSelector.classList.remove("active");
        }
    });
});
