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
                "partners": "Partenaires du projet",
                "macroinv2": "Galerie des macro-invertébrés",
                "text2": "Dans cette partie, vous trouverez les différents macro-invertébrés recensés au sein de l'atlas. De courtes descriptions et quelques photos vous permettront d'en apprendre plus à leur sujet.",
                "acan": "Acantocéphales",
                "acan2": "Les acantocéphales, aussi connus sous le nom de vers à tête épineuse, sont des parasites capables de s’accrocher à leurs hôtes. N’ayant pas de vie libre, ils parasitent les arthropodes à l’état juvénile puis contaminent les vertébrés à l’âge adulte. Ces derniers sont contaminés en mangeant les hôtes intermédiaires. C’est en modifiant le comportement des hôtes intermédiaires pour les forcer à se faire manger que les hôtes finaux seront contaminés.",
                "ach": "Achètes",
                "ach2": "De la classe des annélidés, les sangsues disposent de ventouses et sont hermaphrodites. Certaines espèces sont hématophages. Les achètes peuvent être considérés comme polluo-résistants notamment du fait de leur résistance à des conditions d’hypoxie. Cela fait souvent de ces derniers les seuls prédateurs là où la pollution organique est élevée. Prédatrices ou parasites, les achètes peuvent se disperser par le biais du courant.",
                "amph": "Amphipodes",
                "amph2": "Les amphipodes se caractérisent notamment par l’aplatissement latéral de leurs corps ainsi que par le fait qu’ils soient détritivores. Capables de coloniser tous les types d’habitats, ils sont souvent la proie de poissons et d’oiseaux. Le parasitage par des larves d’acantocéphales est également courant (forme une tache orangée). Enfin, les amphipodes sont tolérants face à la pollution.",
                "anne": "Annélidés",
                "anne2": "Les annélides, ou vers, se composent d’une succession de segments. La plupart d’entre eux vivent essentiellement dans l’eau et s’avèrent être tolérant à la pollution. Cet embranchement englobe trois classes : les polychètes, les oligochètes et les achètes.",
                "biva": "Bivalves",
                "biva2": "Faisant partie de l’embranchement des mollusques, la classe des bivalves représente les individus de tout types et de toutes tailles possédant deux valves. Les bivalves d’eau douce sont des filtreurs (phytoplancton, bactéries, fins débris organiques) et sont également les hôtes de nombreux parasites. Les individus du genre Pisidium (famille des Sphaeriidae) et de la famille Unionacea ont une grande résistance à l’hypoxie. Ce type de résistance ne se retrouve pas dans d’autres familles ou genres.",
                "coleo": "Coléoptères",
                "coleo2": "Les coléoptères sont polymorphes et de tailles variées. Chez les larves, le régime alimentaire est également varié (appareil buccal de type broyeur, herbivores stricts, détritivores, algivores, carnivores, etc.). Les adultes ont, quant à eux, tous un appareil buccal de type broyeur. Certains sont prédateurs mais la majorité sont détritivore ou algivore. Enfin, les coléoptères sont capables de coloniser tous les types de milieux aquatiques et leur tolérance à la pollution est moyenne.",
                "deca": "Décapodes",
                "deca2": "Les décapodes se caractérisent par leur cinq paires de pattes. On y retrouve donc notamment des écrevisses ou des crabes.  La compétition est importante chez les écrevisses (espèces indigènes vs étrangères). De plus, certaines espèces sont fouisseurs et fragilisent les berges. Il est à noter que les décapodes sont moyennement résistants à la pollution.",
                "dipt": "Diptères",
                "dipt2": "Les diptères sont répandus dans toutes les grandes régions du monde. De nombreuses espèces sont fouisseurs et les régimes alimentaires sont variés (broyeur, détritivore, racleur, etc.). Les larves de diptères se caractérisent notamment par l’absence de pattes thoraciques articulées. Les adultes, quant à eux, ont une paire d’ailes et un appareil buccal de type lécheur, piqueur ou les deux. Enfin, en ce qui concerne la tolérance à la pollution, les Chironomidae (famille la plus importante) sont tolérants mais les autres familles ne le sont que moyennement.",
                "epheme": "Ephéméroptères",
                "epheme2": "Les éphéméroptères forment un groupe présent dans le monde entier dont la distribution est très diversifiée (présence aussi bien en eau courante que stagnante). Cette diversité concerne aussi bien la relation avec le substrat (individus fouisseurs, rampants, nageurs, etc.) que l’alimentation (individus broyeurs, détritivores, filtreurs, prédateurs, etc.). La durée de vie des individus varie de 3 à 6 mois en général. Enfin, ce groupe fait partie des bioindicateurs d’eaux peu polluées utilisé en France pour le suivi de la qualité des milieux aquatiques.",
                "gast": "Gastéropodes",
                "gast2": "Groupe rassemblant les mollusques asymétriques, les gastéropodes sont des individus herbivores et détritivores dont la durée de vie s’élève entre 9 et 15 mois. Les gastéropodes sont souvent la proie de poissons et d’oiseaux ainsi que de certains macroinvertébrés. Leur dispersion se fait par le biais des oiseaux, crues et canaux. Enfin, les individus de ce groupe ont une préférence pour les eaux à pH plus basique qu’acide.",
                "hetero": "Hétéroptères",
                "hetero2": "Les hétéroptères sont un sous-ordre des hémiptères. Ces derniers se caractérisent par la transformation de l’appareil buccal en rostre. Leur régime alimentaire est, par conséquent, liquide (seuls certains genres ont une modification permettant l’absorption de particules). La majorité des hétéroptères s’avère être des prédateurs bien que certains genres soient détritivores. Enfin, les hétéroptères sont moyennement tolérant à la pollution.",
                "hydra": "Hydracariens",
                "hydra2": "Les hydracariens forment un groupe très diversifié et abondant. Ces derniers sont omniprésents dans presque tous les types d’habitats et s’avèrent être d’excellents nageurs. Toutefois, les ruisseaux et marais sont des habitats typiques. A l’état larvaire, les individus se développent par parasitisme en se fixant sur des insectes. Les adultes, quant à eaux, sont capables de prédation. D’ailleurs, les chélicères et palpes des individus varient selon le régime alimentaire. Enfin, les hydracariens sont moyennement tolérant à la pollution.",
                "iso": "Isopodes",
                "iso2": "Caractérisés par un aplatissement dorso-ventral, les isopodes forment un groupe d’individus variés qui peuvent être herbivores, détritivores, carnivores ou encore parasites. Les isopodes sont la proie des poissons, des sangsues, des oiseaux ou encore des planaires. Par ailleurs, les isopodes ont une préférence pour les milieux lentiques et sont peu aptes à coloniser de nouveaux milieux bien qu’ils soient souvent entraînés en dérive par le courant. Enfin, les isopodes sont tolérants face à la pollution.",
                "nema": "Nématodes",
                "nema2": "Les némathelminthes d’eau douce se divisent en 2 classes : les nématodes et les gordiacés. Les nématodes sont très abondants en eau douce mais la plupart sont microscopiques. Ils sont allongés et blancs. Les gordiacés sont, quant à eux, des parasites larvaires qui deviennent libres à l’âge adulte. Ils sont très allongés et bruns. La tolérance à la pollution des némathelminthes est moyenne.",
                "odo": "Odonates",
                "odo2": "Les odonates se rassemblent en 2 sous-ordre principaux : les zygoptères (qui ont des ailes de longueurs similaires)  et les anisoptères (qui ont des ailes de longueurs différentes). Les larves d’odonates sont exclusivement prédatrices. Les adultes, quant à eux, sont des prédateurs diurnes d’insectes ailés. La durée de vie est de quelques semaines pour l’adulte et de quelques années pour la larve. Les odonates sont surtout trouvés en milieux stagnants bien que certains genres puissent être trouvés en cours d’eau. Enfin, leur tolérance à la pollution est moyenne.",
                "oligo": "Oligochètes",
                "oligo2": "Les oligochètes sont des vers aussi bien terrestres qu’aquatiques dont le corps segmenté est couvert de soies permettant la reptation. On les retrouve dans tous les types de milieux. Ces derniers sont qualifiés de polluo-résistants.",
                "pleco": "Plécoptères",
                "pleco2": "Les plécoptères sont des invertébrés dont la diversité est plus élevée dans les cours d’eau supérieur. Ils sont également plus abondants dans les eaux courantes. La dispersion se fait par dérive pour les larves et par le biais des femelles adultes qui vivent plus longtemps. Les individus peuvent être des broyeurs, des racleurs ou des prédateurs selon le genre. Ils sont la proie de poissons, d’oiseaux et d’autres macroinvertébrés. Les larves des plécoptères sont utilisés comme bioindicateur du fait de leur grande sensibilité aux taux en oxygène dissous dans l’eau. Dans la globalité, ils sont sensibles à la pollution.",
                "tricho": "Trichoptères",
                "tricho2": "Les trichoptères forment un groupe dont les larves et les nymphes sont aquatiques. De nombreuses larves sont dites “à étui” car elles construisent des fourreaux divers pour se protéger. Certaines larves peuvent, quant à elle, être libres et errantes ou fixes. Les trichoptères peuvent être des filtreurs, des racleurs ou des prédateurs. Les adultes sont souvent la proie des oiseaux et des chiroptères. Enfin, les trichoptères sont en général sensibles à la pollution.",
                "map2": "Carte interactive",
                "tuto": "Tutoriel",
                "tuto2": "Ici, vous trouverez un tutoriel vidéo pour vous permettre de comprendre le fonctionnement de la carte interactive.",
                "dlpdf": "Télécharger le PDF",
                "textpdf": "Ici, vous pouvez télécharger une version PDF de l’atlas :",
                "linkpdf": "Télécharger l’atlas en PDF",
                "textcontact": "Pour toute question ou besoin éventuel, n’hésitez pas à prendre contact avec nous !",
                "LT": "Ingénieur d’études ENGEES - LIVE",
                "ML": "Doctorant ENGEES - LIVE",
                "CS": "Enseignante-chercheure ENGEES - LIVE",
                "JNB": "Professeur ENGEES - LIVE"        
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
                "partners": "Project partners",
                "macroinv2": "Macro-invertebrate gallery",
                "text2": "In this section, you will find the various macroinvertebrates listed in the atlas. Short descriptions and a few photos will help you learn more about them.",
                "acan": "Acanthocephala",
                "acan2": "Acanthocephalans, also known as spiny-headed worms, are parasites capable of attaching themselves to their hosts. They do not live freely, but instead parasitize arthropods in their juvenile stage and then infect vertebrates in their adult stage. The latter become infected by eating the intermediate hosts. By altering the behavior of intermediate hosts to force them to be eaten, the final hosts become infected.",
                "ach": "Hirudinea",
                "ach2": "Belonging to the annelid class, leeches have suction cups and are hermaphroditic. Some species are hematophagous. Leeches can be considered pollution-resistant, particularly due to their resistance to hypoxic conditions. This often makes them the only predators in areas with high levels of organic pollution. Whether predators or parasites, leeches can disperse via currents.",
                "amph": "Amphipoda",
                "amph2": "Amphipods are characterized in particular by the lateral flattening of their bodies and by the fact that they are detritivores. Capable of colonizing all types of habitats, they are often preyed upon by fish and birds. Parasitism by acanthocephalan larvae is also common (forming an orange spot). Finally, amphipods are tolerant of pollution.",
                "anne": "Annelida",
                "anne2": "Annelids, or worms, are made up of a series of segments. Most of them live mainly in water and are tolerant to pollution. This phylum includes three classes: polychaetes, oligochaetes, and acheta.",
                "biva": "Bivalvia",
                "biva2": "Part of the mollusk phylum, the class Bivalvia includes individuals of all types and sizes that have two valves. Freshwater bivalves are filter feeders (phytoplankton, bacteria, fine organic debris) and are also hosts to numerous parasites. Individuals of the genus Pisidium (family Sphaeriidae) and the family Unionacea have a high resistance to hypoxia. This type of resistance is not found in other families or genera.",
                "coleo": "Coleoptera",
                "coleo2": "Beetles are polymorphic and vary in size. Larvae also have varied diets (grinding mouthparts, strict herbivores, detritivores, algivores, carnivores, etc.). Adults, on the other hand, all have chewing mouthparts. Some are predators, but the majority are detritivores or algivores. Finally, beetles are capable of colonizing all types of aquatic environments and have moderate tolerance to pollution.",
                "deca": "Decapoda",
                "deca2": "Decapods are characterized by their five pairs of legs. They include crayfish and crabs.  Competition is fierce among crayfish (native vs. non-native species). In addition, some species are burrowers and weaken riverbanks. It should be noted that decapods are moderately resistant to pollution.",
                "dipt": "Diptera",
                "dipt2": "Diptera are widespread throughout all major regions of the world. Many species are burrowing insects and have varied diets (grinders, detritivores, scrapers, etc.). Diptera larvae are characterized in particular by the absence of articulated thoracic legs. Adults, on the other hand, have a pair of wings and a mouthpart that is either licking, piercing, or both. Finally, in terms of tolerance to pollution, Chironomidae (the largest family) are tolerant, but other families are only moderately tolerant.",
                "epheme": "Ephemeroptera",
                "epheme2": "Ephemeroptera form a group found throughout the world with a highly diverse distribution (present in both flowing and stagnant water). This diversity applies both to their relationship with the substrate (burrowing, crawling, swimming individuals, etc.) and their diet (grinding, detritivorous, filtering, predatory individuals, etc.). The lifespan of individuals generally varies from 3 to 6 months. Finally, this group is one of the bioindicators of low-pollution waters used in France to monitor the quality of aquatic environments.",
                "gast": "Gastropoda",
                "gast2": "A group comprising asymmetrical mollusks, gastropods are herbivorous and detritivorous individuals with a lifespan of between 9 and 15 months. Gastropods are often preyed upon by fish and birds, as well as certain macroinvertebrates. They are dispersed by birds, floods, and canals. Finally, individuals in this group prefer waters with a more basic than acidic pH.",
                "hetero": "Heteroptera",
                "hetero2": "Heteroptera are a suborder of Hemiptera. They are characterized by the transformation of their mouthparts into a rostrum. Their diet is therefore liquid (only certain genera have a modification that allows them to absorb particles). The majority of Heteroptera are predators, although some genera are detritivores. Finally, heteroptera are moderately tolerant to pollution.",
                "hydra": "Hydrachnidia",
                "hydra2": "Water mites form a highly diverse and abundant group. They are ubiquitous in almost all types of habitats and are excellent swimmers. However, streams and marshes are their typical habitats. In their larval stage, individuals develop through parasitism by attaching themselves to insects. Adults, on the other hand, are capable of predation. Moreover, the chelicerae and palps of individuals vary depending on their diet. Finally, hydracarians are moderately tolerant to pollution.",
                "iso": "Isopoda",
                "iso2": "Characterized by a dorsoventral flattening, isopods form a diverse group of individuals that can be herbivorous, detritivorous, carnivorous, or even parasitic. Isopods are preyed upon by fish, leeches, birds, and flatworms. Furthermore, isopods prefer lentic environments and are not very adept at colonizing new environments, even though they are often carried away by currents. Finally, isopods are tolerant of pollution.",
                "nema": "Round worms",
                "nema2": "Freshwater nemathelminths are divided into two classes: nematodes and gordias. Nematodes are very abundant in freshwater, but most are microscopic. They are elongated and white. Gordias, on the other hand, are larval parasites that become free-living in adulthood. They are very elongated and brown. Nemathelminths have moderate tolerance to pollution.",
                "odo": "Odonata",
                "odo2": "Odonata are divided into two main suborders: Zygoptera (which have wings of similar lengths) and Anisoptera (which have wings of different lengths). Odonata larvae are exclusively predatory. Adults, on the other hand, are diurnal predators of winged insects. Adults live for a few weeks, while larvae live for several years. Odonata are mainly found in stagnant environments, although some species can be found in flowing water. Finally, their tolerance to pollution is moderate.",
                "oligo": "Oligochaeta",
                "oligo2": "Oligochaetes are both terrestrial and aquatic worms whose segmented bodies are covered with bristles that enable them to crawl. They are found in all types of environments. They are considered to be resistant to pollution.",
                "pleco": "Plecoptera",
                "pleco2": "Stoneflies are invertebrates that are most diverse in upper watercourses. They are also more abundant in flowing waters. Dispersal occurs through drift for larvae and through adult females, which live longer. Individuals can be grazers, scrapers, or predators depending on the genus. They are preyed upon by fish, birds, and other macroinvertebrates. Stonefly larvae are used as bioindicators because of their high sensitivity to dissolved oxygen levels in water. Overall, they are sensitive to pollution.",
                "tricho": "Trichoptera",
                "tricho2": "Caddisflies form a group whose larvae and nymphs are aquatic. Many larvae are known as “case-bearers” because they build various cases to protect themselves. Some larvae, on the other hand, may be free-swimming and wandering or sessile. Caddisflies can be filter feeders, scrapers, or predators. Adults are often preyed upon by birds and bats. Finally, caddisflies are generally sensitive to pollution.",
                "map2": "Interactive map",
                "tuto": "Tutorial",
                "tuto2": "Here you will find a video tutorial to help you understand how the interactive map works.",
                "dlpdf": "Download PDF",
                "textpdf": "Here you can download a PDF version of the atlas :",
                "linkpdf": "Download the atlas in PDF",
                "textcontact": "If you have any questions, please don't hesitate to contact us !",
                "LT": "Study engineer ENGEES - LIVE",
                "ML": "PhD student ENGEES - LIVE",
                "CS": "Teacher-researcher ENGEES - LIVE",
                "JNB": "Professor ENGEES - LIVE"        
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
                "partners": "Projektpartner",
                "macroinv2": "Galerie der Makroinvertebraten",
                "text2": "In diesem Abschnitt finden Sie die verschiedenen Makroinvertebraten, die im Atlas erfasst sind. Anhand kurzer Beschreibungen und einiger Fotos können Sie mehr über sie erfahren.",
                "acan": "Acanthocephala",
                "acan2": "Acanthocephala, auch bekannt als Stachelkopfwürmer, sind Parasiten, die sich an ihren Wirten festsetzen können. Da sie kein freies Leben führen, parasitieren sie in ihrem Jugendstadium Arthropoden und infizieren im Erwachsenenalter Wirbeltiere. Letztere werden durch den Verzehr der Zwischenwirte infiziert. Durch die Veränderung des Verhaltens der Zwischenwirte, um sie dazu zu zwingen, gefressen zu werden, werden die Endwirte infiziert.",
                "ach": "Hirudinea",
                "ach2": "Als Vertreter der Klasse der Ringelwürmer verfügen Blutegel über Saugnäpfe und sind Zwitter. Einige Arten sind blutsaugend. Achtfüßer können insbesondere aufgrund ihrer Widerstandsfähigkeit gegenüber hypoxischen Bedingungen als umweltresistent angesehen werden. Dies macht sie oft zu den einzigen Raubtieren in Gebieten mit hoher organischer Verschmutzung. Ob Raubtiere oder Parasiten, Achtfüßer können sich durch Strömungen ausbreiten.",
                "amph": "Amphipoda",
                "amph2": "Amphipoden zeichnen sich insbesondere durch die seitliche Abflachung ihres Körpers sowie durch ihre detritivore Lebensweise aus. Sie können alle Arten von Lebensräumen besiedeln und sind oft Beute von Fischen und Vögeln. Auch Parasitenbefall durch Larven von Acanthocephala ist häufig (bildet einen orangefarbenen Fleck). Schließlich sind Amphipoden tolerant gegenüber Umweltverschmutzung.",
                "anne": "Annelida",
                "anne2": "Ringelwürmer, oder Würmer, bestehen aus einer Reihe von Segmenten. Die meisten von ihnen leben hauptsächlich im Wasser und sind gegenüber Verschmutzung tolerant. Dieser Stamm umfasst drei Klassen: Polychaeten, Oligochaeten und Achaeten.",
                "biva": "Bivalvia",
                "biva2": "Die Klasse der Muscheln gehört zur Gattung der Weichtiere und umfasst Individuen aller Arten und Größen, die zwei Schalen haben. Süßwassermuscheln sind Filterer (Phytoplankton, Bakterien, feine organische Ablagerungen) und beherbergen auch zahlreiche Parasiten. Arten der Gattung Pisidium (Familie Sphaeriidae) und der Familie Unionacea weisen eine hohe Resistenz gegen Hypoxie auf. Diese Art der Resistenz findet sich in anderen Familien oder Gattungen nicht.",
                "coleo": "Coleoptera",
                "coleo2": "Käfer sind vielgestaltig und unterschiedlich groß. Auch die Larven ernähren sich sehr unterschiedlich (Mundwerkzeuge vom Typ Zermalmer, reine Pflanzenfresser, Aasfresser, Algenfresser, Fleischfresser usw.). Die adulten Tiere verfügen hingegen alle über einen zermahlenden Mundapparat. Einige sind Raubtiere, die meisten jedoch sind Detritusfresser oder Algenfresser. Schließlich sind Käfer in der Lage, alle Arten von aquatischen Lebensräumen zu besiedeln, und ihre Toleranz gegenüber Verschmutzung ist durchschnittlich.",
                "deca": "Decapoda",
                "deca2": "Die Zehnfußkrebse zeichnen sich durch ihre fünf Beinpaare aus. Zu ihnen gehören insbesondere Flusskrebse und Krabben.  Der Wettbewerb unter den Flusskrebsen (einheimische vs. fremde Arten) ist groß. Darüber hinaus sind einige Arten grabende Tiere, die die Ufer destabilisieren. Es ist anzumerken, dass Zehnfußkrebse mäßig resistent gegen Verschmutzung sind.",
                "dipt": "Diptera",
                "dipt2": "Dipteren sind in allen großen Regionen der Welt verbreitet. Viele Arten sind grabend und ihre Ernährung ist vielfältig (Zerkleinerer, Aasfresser, Schaber usw.). Die Larven der Dipteren zeichnen sich insbesondere durch das Fehlen von gegliederten Brustbeinen aus. Die adulten Tiere hingegen haben ein Paar Flügel und einen Mundapparat vom Typ Lecken, Stechen oder beides. Was schließlich die Toleranz gegenüber Umweltverschmutzung angeht, so sind die Chironomidae (die größte Familie) tolerant, während die anderen Familien nur mäßig tolerant sind.",
                "epheme": "Ephemeroptera",
                "epheme2": "Ephemeropteren bilden eine weltweit verbreitete Gruppe mit einer sehr vielfältigen Verbreitung (sie kommen sowohl in fließenden als auch in stehenden Gewässern vor). Diese Vielfalt betrifft sowohl die Beziehung zum Substrat (grabende, kriechende, schwimmende Individuen usw.) als auch die Ernährung (zerkleinernde, detritivore, filternde, räuberische Individuen usw.). Die Lebensdauer der Individuen variiert im Allgemeinen zwischen 3 und 6 Monaten. Schließlich gehört diese Gruppe zu den Bioindikatoren für wenig verschmutzte Gewässer, die in Frankreich zur Überwachung der Qualität aquatischer Lebensräume verwendet werden.",
                "gast": "Gastropoda",
                "gast2": "Die Gastropoden sind eine Gruppe asymmetrischer Weichtiere, die sich von Pflanzen und Aas ernähren und eine Lebensdauer von 9 bis 15 Monaten haben. Gastropoden sind oft Beute von Fischen und Vögeln sowie bestimmten Makroinvertebraten. Ihre Verbreitung erfolgt durch Vögel, Hochwasser und Kanäle. Schließlich bevorzugen die Individuen dieser Gruppe Gewässer mit einem eher basischen als sauren pH-Wert.",
                "hetero": "Heteroptera",
                "hetero2": "Die Heteroptera sind eine Unterordnung der Hemiptera. Diese zeichnen sich durch die Umwandlung ihres Mundapparats in einen Rüssel aus. Ihre Nahrung ist daher flüssig (nur bestimmte Gattungen verfügen über eine Veränderung, die die Aufnahme von Partikeln ermöglicht). Die meisten Heteroptera sind Raubtiere, obwohl einige Gattungen Aasfresser sind. Schließlich sind Heteroptera mäßig tolerant gegenüber Umweltverschmutzung.",
                "hydra": "Hydrachnidia",
                "hydra2": "Wasserläufer bilden eine sehr vielfältige und zahlreiche Gruppe. Sie sind in fast allen Lebensräumen allgegenwärtig und ausgezeichnete Schwimmer. Typische Lebensräume sind jedoch Bäche und Sümpfe. Im Larvenstadium entwickeln sich die Individuen parasitär, indem sie sich an Insekten festsetzen. Die adulten Tiere sind hingegen räuberisch. Die Cheliceren und Palpen der Individuen variieren übrigens je nach Ernährungsweise. Schließlich sind Wasserkäfer mäßig tolerant gegenüber Umweltverschmutzung.",
                "iso": "Isopoda",
                "iso2": "Isopoden zeichnen sich durch eine dorsoventrale Abflachung aus und bilden eine Gruppe vielfältiger Individuen, die pflanzenfressend, detritivor, fleischfressend oder auch parasitär sein können. Isopoden sind Beute für Fische, Blutegel, Vögel oder auch Strudelwürmer. Außerdem bevorzugen Isopoden stehende Gewässer und sind wenig geeignet, neue Lebensräume zu besiedeln, obwohl sie oft von der Strömung mitgerissen werden. Schließlich sind Isopoden tolerant gegenüber Umweltverschmutzung.",
                "nema": "Rundwürmer",
                "nema2": "Süßwasser-Nemathelminthen lassen sich in zwei Klassen unterteilen: Nematoden und Gordiasen. Nematoden kommen in Süßwasser sehr häufig vor, sind jedoch meist mikroskopisch klein. Sie sind länglich und weiß. Gordiasen hingegen sind Larvenparasiten, die im Erwachsenenalter frei werden. Sie sind sehr länglich und braun. Die Toleranz der Nematoden gegenüber Verschmutzung ist durchschnittlich.",
                "odo": "Odonata",
                "odo2": "Die Odonaten lassen sich in zwei Hauptunterordnungen einteilen: die Zygoptera (mit gleich langen Flügeln)  und die Anisoptera (mit unterschiedlich langen Flügeln). Die Larven der Odonaten sind ausschließlich Raubtiere. Die ausgewachsenen Tiere sind hingegen tagaktive Raubtiere, die sich von geflügelten Insekten ernähren. Die Lebensdauer beträgt bei den ausgewachsenen Tieren einige Wochen und bei den Larven einige Jahre. Odonaten kommen vor allem in stehenden Gewässern vor, obwohl einige Gattungen auch in Fließgewässern zu finden sind. Ihre Toleranz gegenüber Umweltverschmutzung ist mittelmäßig.",
                "oligo": "Oligochaeta",
                "oligo2": "Oligochaeten sind sowohl terrestrische als auch aquatische Würmer, deren segmentierter Körper mit Borsten bedeckt ist, die ihnen das Kriechen ermöglichen. Sie kommen in allen Arten von Lebensräumen vor. Sie gelten als resistent gegen Umweltverschmutzung.",
                "pleco": "Plecoptera",
                "pleco2": "Steinfliegen sind wirbellose Tiere, deren Artenvielfalt in den Oberläufen von Flüssen am größten ist. Sie kommen auch in fließenden Gewässern häufiger vor. Die Verbreitung erfolgt durch die Larven, die sich treiben lassen, und durch die erwachsenen Weibchen, die länger leben. Je nach Gattung können die Tiere Zerkleinerer, Schaber oder Raubtiere sein. Sie sind Beute für Fische, Vögel und andere Makroinvertebraten. Die Larven der Steinfliegen werden aufgrund ihrer hohen Empfindlichkeit gegenüber dem Gehalt an gelöstem Sauerstoff im Wasser als Bioindikatoren verwendet. Insgesamt reagieren sie empfindlich auf Verschmutzung.",
                "tricho": "Trichoptera",
                "tricho2": "Die Köcherfliegen bilden eine Gruppe, deren Larven und Puppen im Wasser leben. Viele Larven werden als „Hüllenlarven” bezeichnet, da sie zum Schutz verschiedene Hüllen bauen. Einige Larven können hingegen frei und wandernd oder feststehend sein. Köcherfliegen können Filterfresser, Schaber oder Raubtiere sein. Die ausgewachsenen Tiere sind oft Beute für Vögel und Fledermäuse. Schließlich sind Köcherfliegen im Allgemeinen empfindlich gegenüber Umweltverschmutzung.",
                "map2": "Interaktive Karte",
                "tuto": "Tutorial",
                "tuto2": "Hier finden Sie ein Video-Tutorial, das Ihnen die Funktionsweise der interaktiven Karte erklärt."
                "dlpdf": "PDF herunterladen",
                "textpdf": "Hier können Sie eine PDF-Version des Atlas herunterladen :",
                "linkpdf": "Atlas als PDF herunterladen",
                "textcontact": "Bei Fragen oder eventuellem Bedarf können Sie sich gerne mit uns in Verbindung setzen !",
                "LT": "Studieningenieur ENGEES - LIVE",
                "ML": "Doktorandin ENGEES - LIVE",
                "CS": "Lehrende und Forschende ENGEES - LIVE",
                "JNB": "Professor ENGEES - LIVE"                        
            }
        };

        // Mettre à jour les éléments du menu
        document.querySelector(".menu-button").innerHTML = `<i class="fa fa-bars"></i> ${translations[lang]["menu"]}`;
        document.querySelector("#language-button").innerHTML = `<i class="fa-solid fa-language"></i> ${translations[lang]["language"]}`;
        document.querySelector("a[href='index']").innerHTML = `<i class="fa-solid fa-house"></i> ${translations[lang]["home"]}`;
        document.querySelector("a[href='macroinv']").innerHTML = `<i class="fa-solid fa-bug"></i> ${translations[lang]["macroinv"]}`;
        document.querySelector("a[href='map']").innerHTML = `<i class="fa-solid fa-map"></i> ${translations[lang]["map"]}`;
        document.querySelector("a[href='downloads']").innerHTML = `<i class="fa-solid fa-floppy-disk"></i> ${translations[lang]["downloads"]}`;
        document.querySelector("a[href='contacts']").innerHTML = `<i class="fa-solid fa-address-book"></i> ${translations[lang]["contacts"]}`;
        
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
