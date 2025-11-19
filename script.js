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
                "macroinv": "Galerie des macroinvertébrés de la Wieslauter",
                "map": "L’atlas en cartographie interactive",
                "downloads": "Télécharger l’atlas en format pdf",
                "contacts": "Equipe du projet Interreg RiverDiv – Volet « Biodiversité et zones refuges »",
                "welcome": "Bienvenue sur l’Atlas RiverDiv !",
                "project": "Le projet Interreg RiverDiv « Volet Biodiversité et zones-refuges »",
                "text1": "Le projet Interreg RiverDiv s'intéresse à notre capacité à mettre en œuvre une gestion intégrée et transfrontalière des écosystèmes aquatiques dans un contexte de changement climatique. Les recherches ici présentées sont celles portées par l’Ecole Nationale du Génie de l’Eau et de l’Environnement de Strasbourg (ENGEES) et le Laboratoire Image Ville Environnement de Strasbourg (LIVE) au sein du volet « Biodiversité et zones-refuge » de ce projet, porté par l’Université technique de Rhénanie-Palatinat Kaiserslautern-Landau. Elles portent sur la caractérisation des zones-refuges aquatiques, à travers l’analyse de la répartition des communautés de macro-invertébrés et de la structure des habitats variant selon les régimes hydrologiques et thermiques induits par le changement climatique. Suite à un travail de terrain et d'identification, l'atlas suivant a été produit pour permettre de visualiser les différents taxons présents et leurs proportions. Sur ce site, vous pouvez accéder à la version interactive de l’atlas ainsi qu’à sa version PDF. Une présentation des différents taxons observés sur la Wieslauter et de leurs caractéristiques est également disponible.",
                "links": "Liens vers le projet",
                "link1": "Projet RiverDiv - Site de la RPTU",
                "link2": "Projet RiverDiv - Site du LIVE",
                "faq": "A propos de ce site",
                "q1": "A quoi sert cet atlas ?",
                "r1": "Cet atlas a pour objectif de présenter plusieurs résultats issus des travaux menés sur les communautés de macroinvertébrés dans le cadre du projet Interreg RiverDiv. Il est disponible en format interactif et en format pdf, accompagné d’une galerie présentant les taxons de macroinvertébrés les plus couramment observés au sein de la Wieslauter.",
                "q2": "Pourquoi les macroinvertébrés ?",
                "r2": "Les macroinvertébrés aquatiques, en raison de leurs caractéristiques écologiques, sont d’excellents indicateurs de la qualité des milieux. Certains taxons, par leur polluo-sensibilité, permettent d’évaluer le niveau de pollution ou le degré de perturbation d’un cours d’eau. Des informations complémentaires sur les taxons observés sont disponibles dans l’onglet Galerie ainsi que dans l’atlas PDF.",
                "q3": "Que sont les zones refuge ? A REVOIR !",
                "r3": "Les zones refuge sont des espaces ausin desquels les individus vont pouvoir se protéger d'un danger (événement extrême, prédateur, etc.), se reposer, se nourri ou encore se reproduire.",
                "q6": "Les données brutes sont-elles accessibles ?",
                "r6": "Les données brutes d’observation des taxons de macroinvertébrés aquatiques présents sur la Wieslauter ne sont pas disponibles directement sur le site ni sur le dépôt GitHub. Si vous souhaitez y accéder ou obtenir des informations complémentaires, merci de contacter un membre de l’équipe (voir onglet Equipe).",
                "partners": "Partenaires du projet",
                "macroinv2": "Galerie des macroinvertébrés de la Wieslauter",
                "text2": "Explorez ici les macroinvertébrés recensés dans l’atlas de la Wieslauter. De courtes descriptions accompagnées de quelques photographies vous permettront d’en apprendre davantage à leur sujet.",
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
                "map2": "L’atlas en cartographie interactive",
                "tuto": "Tutoriel",
                "tuto2": "Ici, vous trouverez un tutoriel vidéo pour vous permettre de comprendre le fonctionnement de la carte interactive.",
                "dlpdf": "Télécharger le PDF",
                "textpdf": "Ici, vous pouvez télécharger une version PDF de l’atlas :",
                "linkpdf": "Télécharger l’atlas en PDF",
                "textcontact": "Pour toute question ou besoin éventuel, n’hésitez pas à prendre contact avec nous !",
                "LT": "Ingénieur d’études ENGEES - LIVE",
                "ML": "Doctorant ENGEES - LIVE",
                "CS": "Enseignante-chercheure ENGEES - LIVE",
                "JNB": "Professeur ENGEES - LIVE",
                "mentions-legales": "Mentions légales",
                "mentleg": "Mentions légales",
                "mentleg1": "Ces pages web sont proposées par l'équipe du projet Interreg RiverDiv – Volet « Biodiversité et zones refuges », basée à l’Ecole Nationale du Génie de l’Eau et de l’Environnement, rattachée au laboratoire Image Ville Environnement de Strasbourg.",
                "resp": "Responsable du contenu et de la plateforme",
                "conc": "Conception du site web",
                "regl": "Règlement général sur la protection des données (RGPD)",
                "pol": "Politique de confidentialité",
                "data": "Toutes les données présentes sur ce site sont traitées conformément à la législation en vigueur (RGPD/DSGVO). Vous pouvez utiliser le site sans fournir ni enregistrer de données personnelles. Si des données personnelles sont demandées, elles ne seront utilisées que pour l’objectif spécifique ayant été mentionné et uniquement avec votre consentement. Vos données sont ici respectées et ne seront jamais transmises à un tiers.",
                "cont": "Contact",
                "conttext": "Si vous contactez par email ou via un formulaire de contact sur ce site, les informations reçues seront conservées dans le cadre d’échanges ultérieurs. Ces informations seront exclusivement utilisées pour la communication avec vous et ne seront pas transmises à des tiers.",
                "connex": "Enregistrement des connexions",
                "heber": "Le fournisseur de l’hébergement du site (github.com) enregistre les connexions au site. Cela n'inclut que la date et le nombre de connexions.",
                "traf": "Analyse de trafic web",
                "traftext": "Nous n’utilisons aucun outil d’analyse web pour suivre votre visite sur notre site.",
                "droits": "Vos droits",
                "droitstext": "Vous avez le droit de demander des informations, des corrections ou la suppression de vos données personnelles que nous pourrions avoir enregistrées, à tout moment. Vous pouvez nous contacter à ce sujet en utilisant les coordonnées fournies dans l'onglet correspondant.",
                "author": "Droits d’auteur",
                "authortext": "Ce site contient des liens vers des contenus protégés par le droit d’auteur, des marques déposées ou d’autres droits de propriété intellectuelle. En utilisant notre site, vous reconnaissez que les contenus et informations – y compris, mais sans s’y limiter, les textes, sons, photographies, vidéos, graphiques ou autres éléments – peuvent être protégés. Le contenu et/ou les liens disponibles sur ce site ne constituent en aucun cas des conseils juridiques, politiques ou autres. Vous êtes autorisé à utiliser le contenu de ce site, en tout ou partie, à des fins personnelles ou éducatives, mais pas à des fins commerciales, à condition de conserver toutes les mentions de droits d’auteur et autres avis de propriété, et de créditer correctement notre site et les auteurs respectifs. Vous ne pouvez pas modifier, copier, reproduire, republier, téléverser, publier, transmettre ou distribuer le contenu de ce site, sauf s’il s’agit de documents publics tels que des traités ou conventions.",
                "photos": "Les photographies proviennent majoritairement du site web [Perla](https://www.perla.developpement-durable.gouv.fr/).",
                "error": "Erreurs",
                "errortext": "Bien que nous nous efforcions d’être exacts, nous ne garantissons pas l’exactitude, la fiabilité, la disponibilité ou la pertinence des informations contenues sur ce site. Les pages sont fournies « en l’état », sans aucune garantie. Nous ne garantissons pas que ce site soit exempt d’interruptions ou d’erreurs, ni que les défauts seront corrigés, ou que le serveur soit exempt de virus ou de composants nuisibles. Des modifications ou améliorations peuvent être apportées au site à tout moment.",
                "links": "Liens",
                "linkstext": "Nous ne garantissons pas non plus le contenu ou la qualité des informations contenues dans les sites vers lesquels nous établissons des liens. Ces sites ne sont pas sous notre contrôle, et nous ne sommes pas responsables de leur contenu ni des mises à jour qui y sont apportées."
            },
            "en": {
                "menu": "Menu",
                "language": "Language",
                "home": "Home",
                "macroinv": "Gallery of macroinvertebrates of the Wieslauter",
                "map": "Interactive map atlas",
                "downloads": "Download the atlas in PDF format",
                "contacts": "Interreg RiverDiv project team – « Biodiversity and refuge areas » section",
                "welcome": "Welcome to the RiverDiv Atlas !",
                "project": "The Interreg RiverDiv project – « Biodiversity and Refuge Areas » section",
                "text1": "The Interreg RiverDiv project focuses on our ability to implement integrated, cross-border management of aquatic ecosystems in the context of climate change. The research presented here is carried out by the National School of Water and Environmental Engineering in Strasbourg (ENGEES) and the Image Ville Environnement Laboratory in Strasbourg (LIVE) as part of the “Biodiversity and Refuge Areas” component of this project, led by the Technical University of Rhineland-Palatinate Kaiserslautern-Landau. It focuses on the characterization of aquatic refuge areas through the analysis of the distribution of macroinvertebrate communities and the structure of habitats that vary according to the hydrological and thermal regimes induced by climate change. Following fieldwork and identification, the following atlas was produced to visualize the different taxa present and their proportions. On this site, you can access the interactive version of the atlas as well as its PDF version. A presentation of the different taxa observed on the Wieslauter and their characteristics is also available.",
                "links": "Links to the project",
                "link1": "RiverDiv Project - RPTU website",
                "link2": "RiverDiv Project - LIVE website",
                "faq": "About this site",
                "q1": "What is this atlas for ?",
                "r1": "This atlas aims to present several results from research conducted on macroinvertebrate communities as part of the Interreg RiverDiv project. It is available in interactive and PDF formats, accompanied by a gallery presenting the most commonly observed macroinvertebrate taxa in the Wieslauter.",
                "q2": "Why macroinvertebrates ?",
                "r2": "Aquatic macroinvertebrates, due to their ecological characteristics, are excellent indicators of environmental quality. Certain taxa, due to their sensitivity to pollution, can be used to assess the level of pollution or the degree of disturbance in a watercourse. Additional information on the taxa observed is available in the Gallery tab and in the PDF atlas.",
                "q3": "What are refuge areas ?",
                "r3": "Refuge areas are spaces in which individuals can protect themselves from danger (extreme events, predators, etc.), rest, feed or reproduce.",
                "q6": "Is raw data accessible ?",
                "r6": "The raw observation data for aquatic macroinvertebrate taxa present in the Wieslauter are not available directly on the website or on GitHub. If you would like to access this data or obtain further information, please contact a member of the team (see the Team tab).",
                "partners": "Project partners",
                "macroinv2": "Gallery of macroinvertebrates of the Wieslauter",
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
                "map2": "Interactive map atlas",
                "tuto": "Tutorial",
                "tuto2": "Here you will find a video tutorial to help you understand how the interactive map works.",
                "dlpdf": "Download PDF",
                "textpdf": "Here you can download a PDF version of the atlas :",
                "linkpdf": "Download the atlas in PDF",
                "textcontact": "If you have any questions, please don't hesitate to contact us !",
                "LT": "Study engineer ENGEES - LIVE",
                "ML": "PhD student ENGEES - LIVE",
                "CS": "Teacher-researcher ENGEES - LIVE",
                "JNB": "Professor ENGEES - LIVE",
                "mentions-legales": "Legal notices",
                "mentleg": "Legal notices",
                "mentleg1": "These web pages are provided by the Interreg RiverDiv project team – « Biodiversity and Refuge Areas » section, based at the National School of Water and Environmental Engineering, attached to the Image Ville Environnement laboratory in Strasbourg.",
                "resp": "Content and Platform Manager",
                "conc": "Website design",
                "regl": "General Data Protection Regulation (GDPR)",
                "pol": "Privacy Policy",
                "data": "All data on this website is processed in accordance with current legislation (GDPR/DSGVO). You can use the website without providing or storing any personal data. If personal data is requested, it will only be used for the specific purpose mentioned and only with your consent. Your data is respected here and will never be passed on to third parties.",
                "cont": "Contact",
                "conttext": "If you contact us by email or via a contact form on this website, the information received will be stored for future correspondence. This information will be used exclusively for communication with you and will not be passed on to third parties.",
                "connex": "Connection logging",
                "heber": "The website hosting provider (github.com) logs connections to the site. This only includes the date and number of connections.",
                "traf": "Web traffic analysis",
                "traftext": "We do not use any web analytics tools to track your visit to our site.",
                "droits": "Your rights",
                "droitstext": "You have the right to request information, corrections, or deletion of your personal data that we may have stored at any time. You can contact us about this using the contact details provided in the corresponding tab.",
                "author": "Copyright",
                "authortext": "This site contains links to content protected by copyright, trademarks, or other intellectual property rights. By using our site, you acknowledge that the content and information—including, but not limited to, text, sound, photographs, videos, graphics, or other elements—may be protected. The content and/or links available on this site do not constitute legal, political, or other advice. You are authorized to use the content of this site, in whole or in part, for personal or educational purposes, but not for commercial purposes, provided that you retain all copyright and other proprietary notices and properly credit our site and the respective authors. You may not modify, copy, reproduce, republish, upload, post, transmit, or distribute the content of this site, except in the case of public documents such as treaties or conventions.",
                "photos": "Most of the photographs come from the [Perla website](https://www.perla.developpement-durable.gouv.fr/).",
                "error": "Errors",
                "errortext": "Although we strive for accuracy, we do not guarantee the accuracy, reliability, availability, or suitability of the information contained on this site. The pages are provided “as is,” without warranty of any kind. We do not guarantee that this site will be free of interruptions or errors, that defects will be corrected, or that the server is free of viruses or harmful components. Changes or improvements may be made to the site at any time.",
                "links": "Links",
                "linkstext": "We also do not guarantee the content or quality of the information contained in the sites to which we provide links. These sites are not under our control, and we are not responsible for their content or any updates made to them."
            },
            "de": {
                "menu": "Menü",
                "language": "Sprache",
                "home": "Startseite",
                "macroinv": "Galerie der Makroinvertebraten der Wieslauter",
                "map": "Der Atlas in interaktiver Kartografie",
                "downloads": "Atlas im PDF-Format herunterladen",
                "contacts": "Projektteam Interreg RiverDiv – Teilbereich « Biodiversität und Rückzugsgebiete »",
                "welcome": "Willkommen beim RiverDiv Atlas!",
                "project": "Das Interreg-Projekt RiverDiv « Biodiversität und Rückzugsgebiete »",
                "text1": "Das Interreg-Projekt RiverDiv befasst sich mit unserer Fähigkeit, ein integriertes und grenzüberschreitendes Management aquatischer Ökosysteme im Kontext des Klimawandels umzusetzen. Die hier vorgestellten Forschungsarbeiten wurden von der École Nationale du Génie de l'Eau et de l'Environnement de Strasbourg (ENGEES) und dem Laboratoire Image Ville Environnement de Strasbourg (LIVE) im Rahmen des Teilprojekts „Biodiversität und Rückzugsgebiete” dieses Projekts durchgeführt, das von der Technischen Universität Rheinland-Pfalz Kaiserslautern-Landau geleitet wird. Sie befassen sich mit der Charakterisierung aquatischer Rückzugsgebiete durch die Analyse der Verteilung von Makroinvertebratengemeinschaften und der Struktur von Lebensräumen, die je nach den durch den Klimawandel bedingten hydrologischen und thermischen Bedingungen variieren. Nach Feld- und Identifizierungsarbeiten wurde der folgende Atlas erstellt, um die verschiedenen vorhandenen Taxa und ihre Anteile zu visualisieren. Auf dieser Website können Sie auf die interaktive Version des Atlas sowie auf die PDF-Version zugreifen. Eine Präsentation der verschiedenen an der Wieslauter beobachteten Taxa und ihrer Merkmale ist ebenfalls verfügbar.",
                "links": "Links zum Projekt",
                "link1": "RiverDiv-Projekt - RPTU-Website",
                "link2": "RiverDiv-Projekt - LIVE-Site",
                "faq": "Über diese Website",
                "q1": "Wozu dient dieser Atlas ?",
                "r1": "Dieser Atlas hat zum Ziel, mehrere Ergebnisse aus den Arbeiten zu Makroinvertebratengemeinschaften im Rahmen des Interreg-Projekts RiverDiv vorzustellen. Er ist in interaktivem Format und im PDF-Format verfügbar und enthält eine Galerie mit den am häufigsten in der Wieslauter beobachteten Makroinvertebratentaxa.",
                "q2": "Warum Makroinvertebraten ?",
                "r2": "Wasserlebende Makroinvertebraten sind aufgrund ihrer ökologischen Eigenschaften ausgezeichnete Indikatoren für die Qualität der Umwelt. Bestimmte Taxa ermöglichen aufgrund ihrer Empfindlichkeit gegenüber Verschmutzung eine Bewertung des Verschmutzungsgrades oder des Störungsgrades eines Gewässers. Weitere Informationen zu den beobachteten Taxa finden Sie unter der Registerkarte Galerie sowie im PDF-Atlas.",
                "q3": "Was sind Zufluchtsorte ?",
                "r3": "Schutzgebiete sind Räume, in denen sich Menschen vor Gefahren (Extremereignisse, Raubtiere usw.) schützen, sich ausruhen, ernähren oder sich fortpflanzen können.",
                "q6": "Sind die Rohdaten zugänglich ?",
                "r6": "Die Rohdaten der Beobachtungen der aquatischen Makroinvertebraten-Taxa in der Wieslauter sind weder direkt auf der Website noch im GitHub-Repository verfügbar. Wenn Sie darauf zugreifen oder weitere Informationen erhalten möchten, wenden Sie sich bitte an ein Mitglied des Teams (siehe Registerkarte Projektteam).",
                "partners": "Projektpartner",
                "macroinv2": "Galerie der Makroinvertebraten der Wieslauter",
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
                "map2": "Der Atlas in interaktiver Kartografie",
                "tuto": "Tutorial",
                "tuto2": "Hier finden Sie ein Video-Tutorial, das Ihnen die Funktionsweise der interaktiven Karte erklärt.",
                "dlpdf": "PDF herunterladen",
                "textpdf": "Hier können Sie eine PDF-Version des Atlas herunterladen :",
                "linkpdf": "Atlas als PDF herunterladen",
                "textcontact": "Bei Fragen oder eventuellem Bedarf können Sie sich gerne mit uns in Verbindung setzen !",
                "LT": "Studieningenieur ENGEES - LIVE",
                "ML": "Doktorandin ENGEES - LIVE",
                "CS": "Lehrende und Forschende ENGEES - LIVE",
                "JNB": "Professor ENGEES - LIVE",
                "mentions-legales": "Rechtliche Hinweise",
                "mentleg": "Rechtliche Hinweise",
                "mentleg1": "Diese Webseiten werden vom Team des Interreg-Projekts RiverDiv – Bereich « Biodiversität und Rückzugsgebiete » angeboten, das an der École Nationale du Génie de l’Eau et de l’Environnement (Nationale Hochschule für Wasserbau und Umwelttechnik) angesiedelt ist und dem Labor Image Ville Environnement (Labor für Stadtbild und Umwelt) in Straßburg angehört.",
                "resp": "Verantwortlich für Inhalt und Plattform",
                "conc": "Website-Design",
                "regl": "Datenschutz-Grundverordnung (DSGVO)",
                "pol": "Datenschutzerklärung",
                "data": "Alle Daten auf dieser Website werden gemäß den geltenden Rechtsvorschriften (DSGVO) verarbeitet. Sie können die Website nutzen, ohne personenbezogene Daten anzugeben oder zu speichern. Wenn personenbezogene Daten abgefragt werden, werden diese nur für den angegebenen Zweck und nur mit Ihrer Zustimmung verwendet. Ihre Daten werden hier respektiert und niemals an Dritte weitergegeben.",
                "cont": "Kontact",
                "conttext": "Wenn Sie uns per E-Mail oder über ein Kontaktformular auf dieser Website kontaktieren, werden die erhaltenen Informationen für den weiteren Austausch gespeichert. Diese Informationen werden ausschließlich für die Kommunikation mit Ihnen verwendet und nicht an Dritte weitergegeben.",
                "connex": "Aufzeichnung von Verbindungen",
                "heber": "Der Hosting-Anbieter der Website (github.com) protokolliert die Zugriffe auf die Website. Dabei werden lediglich das Datum und die Anzahl der Zugriffe erfasst.",
                "traf": "Analyse des Webverkehrs",
                "traftext": "Wir verwenden keine Webanalyse-Tools, um Ihren Besuch auf unserer Website zu verfolgen.",
                "droits": "Ihre Rechte",
                "droitstext": "Sie haben jederzeit das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu verlangen, diese berichtigen oder löschen zu lassen. Zu diesem Zweck können Sie sich unter Verwendung der auf der entsprechenden Registerkarte angegebenen Kontaktdaten an uns wenden.",
                "author": "Urheberrechte",
                "authortext": "Diese Website enthält Links zu Inhalten, die durch Urheberrechte, Markenrechte oder andere Rechte an geistigem Eigentum geschützt sind. Durch die Nutzung unserer Website erkennen Sie an, dass die Inhalte und Informationen – einschließlich, aber nicht beschränkt auf Texte, Töne, Fotos, Videos, Grafiken oder andere Elemente – geschützt sein können. Die auf dieser Website verfügbaren Inhalte und/oder Links stellen in keinem Fall eine rechtliche, politische oder sonstige Beratung dar. Sie sind berechtigt, die Inhalte dieser Website ganz oder teilweise für persönliche oder Bildungszwecke, jedoch nicht für kommerzielle Zwecke zu nutzen, sofern Sie alle Urheberrechtsvermerke und sonstigen Eigentumsvermerke beibehalten und unsere Website sowie die jeweiligen Urheber ordnungsgemäß als Quelle angeben. Sie dürfen den Inhalt dieser Website nicht verändern, kopieren, reproduzieren, erneut veröffentlichen, hochladen, veröffentlichen, übertragen oder verbreiten, es sei denn, es handelt sich um öffentliche Dokumente wie Verträge oder Übereinkommen.",
                "photos": "Die Fotos stammen überwiegend von der Website [Perla](https://www.perla.developpement-durable.gouv.fr/).",
                "error": "Fehler",
                "errortext": "Obwohl wir uns um Genauigkeit bemühen, übernehmen wir keine Gewähr für die Richtigkeit, Zuverlässigkeit, Verfügbarkeit oder Relevanz der auf dieser Website enthaltenen Informationen. Die Seiten werden „wie besehen“ ohne jegliche Gewährleistung bereitgestellt. Wir garantieren nicht, dass diese Website frei von Unterbrechungen oder Fehlern ist, dass Fehler behoben werden oder dass der Server frei von Viren oder schädlichen Komponenten ist. Änderungen oder Verbesserungen an der Website können jederzeit vorgenommen werden.",
                "links": "Links",
                "linkstext": "Wir übernehmen ebenfalls keine Gewähr für den Inhalt oder die Qualität der Informationen auf den Websites, zu denen wir Links bereitstellen. Diese Websites unterliegen nicht unserer Kontrolle, und wir sind weder für deren Inhalt noch für deren Aktualisierungen verantwortlich."
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
        document.querySelector("a[href='mentions-legales']").innerHTML = `<i class="fa-solid fa-scale-balanced"></i> ${translations[lang]["mentions-legales"]}`;

        
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
