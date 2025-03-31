document.addEventListener("DOMContentLoaded", function() {
    console.log("Script chargé");

    const langSelector = document.getElementById("language-selector");
    const langButton = document.getElementById("language-button");
    const langOptions = document.querySelectorAll(".lang-option");

    if (!langButton || !langSelector) {
        console.error("Erreur : Bouton de langue non trouvé !");
        return;
    }

    let currentLang = localStorage.getItem("language") || "fr";
    changeLanguage(currentLang);

    langButton.addEventListener("click", function(event) {
        event.stopPropagation();
        langSelector.classList.toggle("active");
    });

    langOptions.forEach(option => {
        option.addEventListener("click", function(event) {
            event.stopPropagation();
            let selectedLang = this.getAttribute("data-lang");
            localStorage.setItem("language", selectedLang);
            changeLanguage(selectedLang);
            langSelector.classList.remove("active");
        });
    });

    function changeLanguage(lang) {
        const translations = {
            "fr": {
                "menu": "Menu",
                "language": "Langue",
                "home": "Accueil",
                "macroinv": "Macro invertébrés",
                "map": "Carte Interactive",
                "downloads": "Téléchargement",
                "contacts": "Contacts",
                "welcome": "Bienvenue sur notre site !"
            },
            "en": {
                "menu": "Menu",
                "language": "Language",
                "home": "Home",
                "macroinv": "Macro invertebrates",
                "map": "Interactive Map",
                "downloads": "Downloads",
                "contacts": "Contacts",
                "welcome": "Welcome to our website!"
            },
            "de": {
                "menu": "Menü",
                "language": "Sprache",
                "home": "Startseite",
                "macroinv": "Makroinvertebraten",
                "map": "Interaktive Karte",
                "downloads": "Downloads",
                "contacts": "Kontakte",
                "welcome": "Willkommen auf unserer Website!"
            }
        };

        // Mettre à jour les éléments du menu
        document.querySelector(".menu-button").innerHTML = `<i class="fa fa-bars"></i> ${translations[lang]["menu"]}`;
        document.querySelector("#language-button").innerHTML = `🌍 ${translations[lang]["language"]} <i class="fa fa-chevron-down"></i>`;
        
        document.querySelectorAll("a[data-key]").forEach(link => {
            let key = link.getAttribute("data-key");
            if (translations[lang][key]) {
                link.innerHTML = translations[lang][key];
            }
        });

        // Mettre à jour les textes du site
        document.querySelectorAll(".translatable").forEach(el => {
            let key = el.getAttribute("data-key");
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    document.addEventListener("click", function(event) {
        if (!langSelector.contains(event.target)) {
            langSelector.classList.remove("active");
        }
    });
});
