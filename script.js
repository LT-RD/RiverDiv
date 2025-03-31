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
                "welcome": "Bienvenue sur l’Atlas RiverDiv !",
                "project": "Le projet",
                "text1": "Dans le cadre du projet INTERREG RIVERDIV, des travaux comprenant des campagnes de terrain visent à étudier les zones refuges et les macro-invertébrés. Suite à un travail d'identification, l'atlas suivant a été produit pour permettre de visualiser les différents ordres présents et leurs proportions. Sur ce site, vous pouvez accéder à la version interactive de l’atlas ainsi qu’à sa version PDF. Une présentation des différents taxons observés sur la Wieslauter et de leurs caractéristiques est également disponible.",
                "links": "Liens vers le projet",
                "link1": "Projet RiverDiv - Site de la RPTU",
                "link2": "Projet RiverDiv - Site du LIVE",
                "faq": "Foire aux questions",
                "q1": "Pourquoi un tel site ?",
                "r1": "Ce site permet de présenter plusieurs résultats concernant les macro-invertébrés : carte interactive, atlas PDF, galerie présentant les différents taxons.",
                "q2": "Pourquoi les macro-invertébrés ?",
                "r2": "Les macro invertébrés, du fait de leur caractéristiques spécifiques, sont souvent étudiés pour évaluer l'état d'un milieu aquatique. Certains taxons, s'ils sont présents, permettent par exemple d'établir le niveau de pollution du milieu du fait de leur polluo-sensibilité. Vous pourrez retrouver des informations sur les différents taxons observés dans l'onglet correspondant ainsi que dans l'atlas PDF.",
                "q3": "Que sont les zones refuge ?",
                "r3": "Les zones refuge sont des espaces ausin desquels les individus vont pouvoir se protéger d'un danger (événement extrême, prédateur, etc.), se reposer, se nourri ou encore se reproduire.",
                "q4": "Qui est derrière ce site ?",
                "r4": "Au global, le projet RiverDiv s'articule autour de plusieurs axes sur lesquels sont associés différentes équipes. Notre équipe, que nous vous invitons à découvrir dans l'onglet contacts, étudie la notion de zones refuge et leur caractérisation, le tout appliqué aux macro-invertébrés aquatiques. Cette équipe est constitué de membres de l'Ecole Nationale du Génie de l'Eau et de l'Environnement de Strasbourg (ENGEES) et du Laboratoire Image, Ville, Environnement (LIVE).",
                "q5": "Comment le site a-t-il été réalisé ?",
                "r5": "Le site a été réalisé à l'aide des langages HTML, JavaScript et CSS. Le tout a été mis en ligne grâce à GitHub et GitHub Pages. La carte interactive est issue d'un travail sur le logiciel QGIS (à l'aide du plugin QGIS2WEB) et le rendu dynamique est permis par Leaflet.",
                "q6": "Les données brutes sont-elles accessibles ?",
                "r6": "Les données brutes d'observations des différents taxons de macro-invertébrés aquatiques présents sur la Wieslauter ne sont pas disponibles directement sur le site ou le dépôt GitHub. Si de telles données vous intéressent, veuillez prendre contacts avec l'un des membres de l'équipe.",
                "partners": "Partenaires du projet"
            },
            "en": {
                "menu": "Menu",
                "language": "Language",
                "home": "Home",
                "macroinv": "Macro invertebrates",
                "map": "Interactive Map",
                "downloads": "Downloads",
                "contacts": "Contacts",
                "welcome": "Welcome to the RiverDiv Atlas !",
                "project": "The project",
                "text1": "As part of the INTERREG RIVERDIV project, field campaigns are being carried out to study refuge areas and macro-invertebrates. Following identification work, the following atlas has been produced to help visualize the different orders present and their proportions. On this site, you can access the interactive version of the atlas as well as the PDF version. A presentation of the different taxa observed on the Wieslauter and their characteristics is also available.",
                "links": "Links to the project",
                "link1": "RiverDiv Project - RPTU website",
                "link2": "RiverDiv Project - LIVE website",
                "faq": "Frequently asked questions",
                "q1": "Why such a site ?",
                "r1": "This site makes it possible to present several results concerning macroinvertebrates: interactive map, PDF atlas, gallery presenting the various taxa.",
                "q2": "Why macro-invertebrates ?",
                "r2": "Because of their specific characteristics, macro-invertebrates are often studied to assess the state of an aquatic environment. Certain taxa, if present, can be used, for example, to establish the level of pollution in the environment, due to their polluo-sensitivity. You can find information on the various taxa observed in the corresponding tab as well as in the PDF atlas.",
                "q3": "What are refuge areas ?",
                "r3": "Refuge areas are spaces in which individuals can protect themselves from danger (extreme events, predators, etc.), rest, feed or reproduce.",
                "q4": "Who is behind this site ?",
                "r4": "Overall, the RiverDiv project revolves around several axes on which different teams are associated. Our team, which we invite you to discover in the contacts tab, is studying the notion of refuge zones and their characterization, all applied to aquatic macro-invertebrates. This team is made up of members of the Ecole Nationale du Génie de l'Eau et de l'Environnement de Strasbourg (ENGEES) and the Laboratoire Image, Ville, Environnement (LIVE).",
                "q5": "How was the site created ?",
                "r5": "The site was created using HTML, JavaScript and CSS. It was put online using GitHub and GitHub Pages. The interactive map was created using QGIS software (with the QGIS2WEB plugin), and dynamic rendering is enabled by Leaflet.",
                "q6": "Is raw data accessible ?",
                "r6": "Raw observation data for the various taxa of aquatic macroinvertebrates present on the Wieslauter are not available directly from the website or the GitHub repository. If you are interested in such data, please contact one of our team members.",
                "partners": "Project partners"
            },
            "de": {
                "menu": "Menü",
                "language": "Sprache",
                "home": "Startseite",
                "macroinv": "Makroinvertebraten",
                "map": "Interaktive Karte",
                "downloads": "Downloads",
                "contacts": "Kontakte",
                "welcome": "Willkommen beim RiverDiv Atlas!",
                "project": "Das Projekt",
                "text1": "Im Rahmen des INTERREG-Projekts RIVERDIV wurden Arbeiten einschließlich Feldkampagnen durchgeführt, um Rückzugsgebiete und Makroinvertebraten zu untersuchen. Im Anschluss an eine Identifikationsarbeit wurde der folgende Atlas erstellt, der es ermöglicht, die verschiedenen vorhandenen Ordnungen und ihre Proportionen zu visualisieren. Auf dieser Website können Sie sowohl auf die interaktive Version des Atlas als auch auf seine PDF-Version zugreifen. Eine Übersicht über die verschiedenen an der Wieslauter beobachteten Taxa und ihre Merkmale ist ebenfalls verfügbar.",
                "links": "Links zum Projekt",
                "link1": "RiverDiv-Projekt - RPTU-Website",
                "link2": "RiverDiv-Projekt - LIVE-Site",
                "faq": "Häufig gestellte Fragen",
                "q1": "Warum eine solche Website ?",
                "r1": "Auf dieser Seite können verschiedene Ergebnisse zu Makroinvertebraten präsentiert werden: interaktive Karte, PDF-Atlas, Galerie, in der die verschiedenen Taxa vorgestellt werden.",
                "q2": "Warum Makroinvertebraten ?",
                "r2": "Makroinvertebraten werden aufgrund ihrer spezifischen Eigenschaften häufig untersucht, um den Zustand einer aquatischen Umwelt zu beurteilen. Bestimmte Taxa können, wenn sie vorhanden sind, aufgrund ihrer Verschmutzungsempfindlichkeit z. B. den Verschmutzungsgrad des Lebensraums bestimmen. Informationen zu den einzelnen beobachteten Taxa finden Sie auf der entsprechenden Registerkarte sowie im PDF-Atlas.",
                "q3": "Was sind Zufluchtsorte ?",
                "r3": "Schutzgebiete sind Räume, in denen sich Menschen vor Gefahren (Extremereignisse, Raubtiere usw.) schützen, sich ausruhen, ernähren oder sich fortpflanzen können.",
                "q4": "Wer steht hinter dieser Seite ?",
                "r4": "Insgesamt ist das RiverDiv-Projekt in mehrere Achsen gegliedert, an denen verschiedene Teams beteiligt sind. Unser Team, das Sie auf der Registerkarte Kontakte kennenlernen können, untersucht das Konzept der Rückzugsgebiete und deren Charakterisierung, wobei das Ganze auf aquatische Makroinvertebraten angewandt wird. Dieses Team besteht aus Mitgliedern der Ecole Nationale du Génie de l'Eau et de l'Environnement de Strasbourg (ENGEES) und des Laboratoire Image, Ville, Environnement (LIVE).",
                "q5": "Wie wurde die Website erstellt ?",
                "r5": "Die Website wurde mithilfe der Sprachen HTML, JavaScript und CSS erstellt. Das Ganze wurde mithilfe von GitHub und GitHub Pages online gestellt. Die interaktive Karte wurde mit QGIS (mithilfe des QGIS2WEB-Plugins) erstellt und mit Leaflet dynamisch gerendert.",
                "q6": "Sind die Rohdaten zugänglich ?",
                "r6": "Die Rohdaten der Beobachtungen der verschiedenen Taxa aquatischer Makroinvertebraten, die in der Wieslauter vorkommen, sind nicht direkt auf der Website oder im GitHub-Repository verfügbar. Wenn Sie an solchen Daten interessiert sind, nehmen Sie bitte Kontakt mit einem der Teammitglieder auf.",
                "partners": "Projektpartner"
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
