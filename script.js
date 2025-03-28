document.addEventListener("DOMContentLoaded", function() {
    console.log("Script chargé"); // Vérifie que le script est bien exécuté

    const langSelector = document.getElementById("language-selector");
    const langButton = document.getElementById("language-button"); // Sélecteur plus précis
    const langOptions = document.querySelectorAll(".lang-option");

    if (!langButton || !langSelector) {
        console.error("Erreur : Bouton de langue non trouvé !");
        return;
    }

    // Charger la langue sauvegardée
    let currentLang = localStorage.getItem("language") || "fr";
    changeLanguage(currentLang);

    // Ouvrir/fermer le menu des langues
    langButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Empêche la fermeture immédiate
        console.log("Clic détecté sur le bouton de langue !");
        langSelector.classList.toggle("active");
    });

    // Gestion du changement de langue
    langOptions.forEach(option => {
        option.addEventListener("click", function(event) {
            event.stopPropagation();
            let selectedLang = this.getAttribute("data-lang");
            console.log("Langue sélectionnée :", selectedLang);
            localStorage.setItem("language", selectedLang);
            changeLanguage(selectedLang);
            langSelector.classList.remove("active"); // Ferme le menu après sélection
        });
    });

function translatePage(lang) {
    fetch("/data/translations.json") // Charger le fichier JSON avec les traductions
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll(".translatable").forEach(el => {
                let key = el.getAttribute("data-key");
                if (translations[lang] && translations[lang][key]) {
                    el.innerHTML = translations[lang][key];
                }
            });
        })
        .catch(error => console.error("Erreur lors du chargement des traductions :", error));
}
    
    // Fonction de traduction dynamique
    function changeLanguage(lang) {
        const translations = {
    "fr": {
        "menu": "Menu",
        "language": "Langue",
        "home": "Accueil",
        "macroinv": "Macro invertébrés",
        "map": "Carte Interactive",
        "downloads": "Téléchargement",
        "contacts": "Contacts"
    },
    "en": {
        "menu": "Menu",
        "language": "Language",
        "home": "Home",
        "macroinv": "Macro invertebrates",
        "map": "Interactive Map",
        "downloads": "Downloads",
        "contacts": "Contacts"
    },
    "de": {
        "menu": "Menü",
        "language": "Sprache",
        "home": "Startseite",
        "macroinv": "Makroinvertebraten",
        "map": "Interaktive Karte",
        "downloads": "Downloads",
        "contacts": "Kontakte"
    }
};

        document.querySelector(".menu-button").innerHTML = `<i class="fa fa-bars"></i> ${translations[lang]["menu"]}`;
        document.querySelector("#language-button").innerHTML = `🌍 ${translations[lang]["language"]} <i class="fa fa-chevron-down"></i>`;
        document.querySelector("a[href='index']").innerHTML = `<i class="fa-solid fa-house"></i> ${translations[lang]["home"]}`;
        document.querySelector("a[href='macroinv']").innerHTML = `<i class="fa-solid fa-bug"></i> ${translations[lang]["macroinv"]}`;
        document.querySelector("a[href='map']").innerHTML = `<i class="fa-solid fa-map"></i> ${translations[lang]["map"]}`;
        document.querySelector("a[href='downloads']").innerHTML = `<i class="fa-solid fa-floppy-disk"></i> ${translations[lang]["downloads"]}`;
        document.querySelector("a[href='contacts']").innerHTML = `<i class="fa-solid fa-address-book"></i> ${translations[lang]["contacts"]}`;

        translatePage(lang);
    }

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", function(event) {
        if (!langSelector.contains(event.target)) {
            langSelector.classList.remove("active");
        }
    });
});
