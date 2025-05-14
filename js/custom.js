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

        // Outil de dessin
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
