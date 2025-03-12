document.addEventListener("DOMContentLoaded", function () {
    function initMap() {
        if (typeof L === 'undefined') {
            console.error("Leaflet n'est pas chargé !");
            return;
        }
        if (typeof L.Control.MiniMap === 'undefined') {
            console.warn("MiniMap n'est pas encore chargé... Retente dans 500ms.");
            setTimeout(initMap, 500);
            return;
        }
        if (typeof L.Control.Draw === 'undefined') {
            console.warn("Leaflet Draw n'est pas encore chargé... Retente dans 500ms.");
            setTimeout(initMap, 500);
            return;
        }

        console.log("Tous les plugins sont chargés !");

        // 1️⃣ Ajout de la mini-carte
        var miniMapLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 0, maxZoom: 13, attribution: '© OpenStreetMap'
        });

        var miniMap = new L.Control.MiniMap(miniMapLayer, { 
    		toggleDisplay: true, 
    		position: "bottomleft" // Déplace la MiniMap en bas à gauche
	}).addTo(map);


        // 2️⃣ Affichage des coordonnées de la souris
        var coordDiv = document.createElement("div");
        coordDiv.id = "coordinates";
        coordDiv.style.position = "absolute";
        coordDiv.style.bottom = "180px";
        coordDiv.style.left = "10px";
        coordDiv.style.background = "white";
        coordDiv.style.padding = "5px";
        coordDiv.style.border = "1px solid gray";
        coordDiv.style.zIndex = "1000";
        coordDiv.innerHTML = "Déplacez la souris pour voir les coordonnées";
        document.body.appendChild(coordDiv);

        map.on('mousemove', function (e) {
            document.getElementById('coordinates').innerHTML = `Lat: ${e.latlng.lat.toFixed(5)}, Lng: ${e.latlng.lng.toFixed(5)}`;
        });

        // 3️⃣ Outil de dessin
        var drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);

        var drawControl = new L.Control.Draw({
            edit: { featureGroup: drawnItems },
            draw: {
                polygon: true,
                polyline: true,
                rectangle: true,
                circle: true,
                marker: true
            }
        });
        map.addControl(drawControl);

        map.on('draw:created', function (e) {
            var layer = e.layer;
            drawnItems.addLayer(layer);
        });
    }

    initMap();
});
