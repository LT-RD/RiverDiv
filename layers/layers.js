var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_BV_2 = new ol.format.GeoJSON();
var features_BV_2 = format_BV_2.readFeatures(json_BV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BV_2.addFeatures(features_BV_2);
var lyr_BV_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BV_2, 
                style: style_BV_2,
                popuplayertitle: 'BV',
                interactive: false,
                title: '<img src="styles/legend/BV_2.png" /> BV'
            });
var format_Hydro_3 = new ol.format.GeoJSON();
var features_Hydro_3 = format_Hydro_3.readFeatures(json_Hydro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydro_3.addFeatures(features_Hydro_3);
var lyr_Hydro_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hydro_3, 
                style: style_Hydro_3,
                popuplayertitle: 'Hydro',
                interactive: false,
                title: '<img src="styles/legend/Hydro_3.png" /> Hydro'
            });
var format_HETERO_4 = new ol.format.GeoJSON();
var features_HETERO_4 = format_HETERO_4.readFeatures(json_HETERO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HETERO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HETERO_4.addFeatures(features_HETERO_4);
var lyr_HETERO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HETERO_4, 
                style: style_HETERO_4,
                popuplayertitle: 'HETERO',
                interactive: true,
    title: 'HETERO<br />\
    <img src="styles/legend/HETERO_4_0.png" /> 0 - 50<br />\
    <img src="styles/legend/HETERO_4_1.png" /> 50 - 100<br />\
    <img src="styles/legend/HETERO_4_2.png" /> 100 - 200<br />\
    <img src="styles/legend/HETERO_4_3.png" /> 200 - 300<br />\
    <img src="styles/legend/HETERO_4_4.png" /> 300 - 400<br />\
    <img src="styles/legend/HETERO_4_5.png" /> 400 - 500<br />\
    <img src="styles/legend/HETERO_4_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/HETERO_4_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/HETERO_4_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/HETERO_4_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/HETERO_4_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/HETERO_4_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/HETERO_4_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/HETERO_4_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/HETERO_4_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/HETERO_4_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/HETERO_4_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/HETERO_4_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/HETERO_4_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/HETERO_4_19.png" /> 7000 - 7500<br />' });
var format_NEMA_5 = new ol.format.GeoJSON();
var features_NEMA_5 = format_NEMA_5.readFeatures(json_NEMA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEMA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEMA_5.addFeatures(features_NEMA_5);
var lyr_NEMA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NEMA_5, 
                style: style_NEMA_5,
                popuplayertitle: 'NEMA',
                interactive: true,
    title: 'NEMA<br />\
    <img src="styles/legend/NEMA_5_0.png" /> 0 - 50<br />\
    <img src="styles/legend/NEMA_5_1.png" /> 50 - 100<br />\
    <img src="styles/legend/NEMA_5_2.png" /> 100 - 200<br />\
    <img src="styles/legend/NEMA_5_3.png" /> 200 - 300<br />\
    <img src="styles/legend/NEMA_5_4.png" /> 300 - 400<br />\
    <img src="styles/legend/NEMA_5_5.png" /> 400 - 500<br />\
    <img src="styles/legend/NEMA_5_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/NEMA_5_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/NEMA_5_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/NEMA_5_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/NEMA_5_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/NEMA_5_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/NEMA_5_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/NEMA_5_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/NEMA_5_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/NEMA_5_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/NEMA_5_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/NEMA_5_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/NEMA_5_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/NEMA_5_19.png" /> 7000 - 7500<br />' });
var format_TRICHO_6 = new ol.format.GeoJSON();
var features_TRICHO_6 = format_TRICHO_6.readFeatures(json_TRICHO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRICHO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRICHO_6.addFeatures(features_TRICHO_6);
var lyr_TRICHO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRICHO_6, 
                style: style_TRICHO_6,
                popuplayertitle: 'TRICHO',
                interactive: true,
    title: 'TRICHO<br />\
    <img src="styles/legend/TRICHO_6_0.png" /> 0 - 50<br />\
    <img src="styles/legend/TRICHO_6_1.png" /> 50 - 100<br />\
    <img src="styles/legend/TRICHO_6_2.png" /> 100 - 200<br />\
    <img src="styles/legend/TRICHO_6_3.png" /> 200 - 300<br />\
    <img src="styles/legend/TRICHO_6_4.png" /> 300 - 400<br />\
    <img src="styles/legend/TRICHO_6_5.png" /> 400 - 500<br />\
    <img src="styles/legend/TRICHO_6_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/TRICHO_6_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/TRICHO_6_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/TRICHO_6_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/TRICHO_6_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/TRICHO_6_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/TRICHO_6_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/TRICHO_6_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/TRICHO_6_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/TRICHO_6_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/TRICHO_6_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/TRICHO_6_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/TRICHO_6_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/TRICHO_6_19.png" /> 7000 - 7500<br />' });
var format_PLECO_7 = new ol.format.GeoJSON();
var features_PLECO_7 = format_PLECO_7.readFeatures(json_PLECO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLECO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLECO_7.addFeatures(features_PLECO_7);
var lyr_PLECO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PLECO_7, 
                style: style_PLECO_7,
                popuplayertitle: 'PLECO',
                interactive: true,
    title: 'PLECO<br />\
    <img src="styles/legend/PLECO_7_0.png" /> 0 - 50<br />\
    <img src="styles/legend/PLECO_7_1.png" /> 50 - 100<br />\
    <img src="styles/legend/PLECO_7_2.png" /> 100 - 200<br />\
    <img src="styles/legend/PLECO_7_3.png" /> 200 - 300<br />\
    <img src="styles/legend/PLECO_7_4.png" /> 300 - 400<br />\
    <img src="styles/legend/PLECO_7_5.png" /> 400 - 500<br />\
    <img src="styles/legend/PLECO_7_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/PLECO_7_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/PLECO_7_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/PLECO_7_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/PLECO_7_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/PLECO_7_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/PLECO_7_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/PLECO_7_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/PLECO_7_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/PLECO_7_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/PLECO_7_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/PLECO_7_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/PLECO_7_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/PLECO_7_19.png" /> 7000 - 7500<br />' });
var format_HYDRA_8 = new ol.format.GeoJSON();
var features_HYDRA_8 = format_HYDRA_8.readFeatures(json_HYDRA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HYDRA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HYDRA_8.addFeatures(features_HYDRA_8);
var lyr_HYDRA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HYDRA_8, 
                style: style_HYDRA_8,
                popuplayertitle: 'HYDRA',
                interactive: true,
    title: 'HYDRA<br />\
    <img src="styles/legend/HYDRA_8_0.png" /> 0 - 50<br />\
    <img src="styles/legend/HYDRA_8_1.png" /> 50 - 100<br />\
    <img src="styles/legend/HYDRA_8_2.png" /> 100 - 200<br />\
    <img src="styles/legend/HYDRA_8_3.png" /> 200 - 300<br />\
    <img src="styles/legend/HYDRA_8_4.png" /> 300 - 400<br />\
    <img src="styles/legend/HYDRA_8_5.png" /> 400 - 500<br />\
    <img src="styles/legend/HYDRA_8_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/HYDRA_8_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/HYDRA_8_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/HYDRA_8_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/HYDRA_8_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/HYDRA_8_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/HYDRA_8_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/HYDRA_8_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/HYDRA_8_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/HYDRA_8_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/HYDRA_8_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/HYDRA_8_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/HYDRA_8_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/HYDRA_8_19.png" /> 7000 - 7500<br />' });
var format_EPHEME_9 = new ol.format.GeoJSON();
var features_EPHEME_9 = format_EPHEME_9.readFeatures(json_EPHEME_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPHEME_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPHEME_9.addFeatures(features_EPHEME_9);
var lyr_EPHEME_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPHEME_9, 
                style: style_EPHEME_9,
                popuplayertitle: 'EPHEME',
                interactive: true,
    title: 'EPHEME<br />\
    <img src="styles/legend/EPHEME_9_0.png" /> 0 - 50<br />\
    <img src="styles/legend/EPHEME_9_1.png" /> 50 - 100<br />\
    <img src="styles/legend/EPHEME_9_2.png" /> 100 - 200<br />\
    <img src="styles/legend/EPHEME_9_3.png" /> 200 - 300<br />\
    <img src="styles/legend/EPHEME_9_4.png" /> 300 - 400<br />\
    <img src="styles/legend/EPHEME_9_5.png" /> 400 - 500<br />\
    <img src="styles/legend/EPHEME_9_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/EPHEME_9_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/EPHEME_9_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/EPHEME_9_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/EPHEME_9_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/EPHEME_9_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/EPHEME_9_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/EPHEME_9_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/EPHEME_9_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/EPHEME_9_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/EPHEME_9_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/EPHEME_9_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/EPHEME_9_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/EPHEME_9_19.png" /> 7000 - 7500<br />' });
var format_DIPT_10 = new ol.format.GeoJSON();
var features_DIPT_10 = format_DIPT_10.readFeatures(json_DIPT_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DIPT_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DIPT_10.addFeatures(features_DIPT_10);
var lyr_DIPT_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DIPT_10, 
                style: style_DIPT_10,
                popuplayertitle: 'DIPT',
                interactive: true,
    title: 'DIPT<br />\
    <img src="styles/legend/DIPT_10_0.png" /> 0 - 50<br />\
    <img src="styles/legend/DIPT_10_1.png" /> 50 - 100<br />\
    <img src="styles/legend/DIPT_10_2.png" /> 100 - 200<br />\
    <img src="styles/legend/DIPT_10_3.png" /> 200 - 300<br />\
    <img src="styles/legend/DIPT_10_4.png" /> 300 - 400<br />\
    <img src="styles/legend/DIPT_10_5.png" /> 400 - 500<br />\
    <img src="styles/legend/DIPT_10_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/DIPT_10_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/DIPT_10_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/DIPT_10_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/DIPT_10_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/DIPT_10_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/DIPT_10_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/DIPT_10_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/DIPT_10_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/DIPT_10_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/DIPT_10_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/DIPT_10_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/DIPT_10_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/DIPT_10_19.png" /> 7000 - 7500<br />' });
var format_COLEO_11 = new ol.format.GeoJSON();
var features_COLEO_11 = format_COLEO_11.readFeatures(json_COLEO_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COLEO_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLEO_11.addFeatures(features_COLEO_11);
var lyr_COLEO_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COLEO_11, 
                style: style_COLEO_11,
                popuplayertitle: 'COLEO',
                interactive: true,
    title: 'COLEO<br />\
    <img src="styles/legend/COLEO_11_0.png" /> 0 - 50<br />\
    <img src="styles/legend/COLEO_11_1.png" /> 50 - 100<br />\
    <img src="styles/legend/COLEO_11_2.png" /> 100 - 200<br />\
    <img src="styles/legend/COLEO_11_3.png" /> 200 - 300<br />\
    <img src="styles/legend/COLEO_11_4.png" /> 300 - 400<br />\
    <img src="styles/legend/COLEO_11_5.png" /> 400 - 500<br />\
    <img src="styles/legend/COLEO_11_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/COLEO_11_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/COLEO_11_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/COLEO_11_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/COLEO_11_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/COLEO_11_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/COLEO_11_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/COLEO_11_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/COLEO_11_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/COLEO_11_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/COLEO_11_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/COLEO_11_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/COLEO_11_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/COLEO_11_19.png" /> 7000 - 7500<br />' });
var format_ODO_12 = new ol.format.GeoJSON();
var features_ODO_12 = format_ODO_12.readFeatures(json_ODO_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ODO_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODO_12.addFeatures(features_ODO_12);
var lyr_ODO_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ODO_12, 
                style: style_ODO_12,
                popuplayertitle: 'ODO',
                interactive: true,
    title: 'ODO<br />\
    <img src="styles/legend/ODO_12_0.png" /> 0 - 50<br />\
    <img src="styles/legend/ODO_12_1.png" /> 50 - 100<br />\
    <img src="styles/legend/ODO_12_2.png" /> 100 - 200<br />\
    <img src="styles/legend/ODO_12_3.png" /> 200 - 300<br />\
    <img src="styles/legend/ODO_12_4.png" /> 300 - 400<br />\
    <img src="styles/legend/ODO_12_5.png" /> 400 - 500<br />\
    <img src="styles/legend/ODO_12_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/ODO_12_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/ODO_12_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/ODO_12_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/ODO_12_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/ODO_12_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/ODO_12_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/ODO_12_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/ODO_12_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/ODO_12_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/ODO_12_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/ODO_12_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/ODO_12_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/ODO_12_19.png" /> 7000 - 7500<br />' });
var format_ISO_13 = new ol.format.GeoJSON();
var features_ISO_13 = format_ISO_13.readFeatures(json_ISO_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISO_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISO_13.addFeatures(features_ISO_13);
var lyr_ISO_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ISO_13, 
                style: style_ISO_13,
                popuplayertitle: 'ISO',
                interactive: true,
    title: 'ISO<br />\
    <img src="styles/legend/ISO_13_0.png" /> 0 - 50<br />\
    <img src="styles/legend/ISO_13_1.png" /> 50 - 100<br />\
    <img src="styles/legend/ISO_13_2.png" /> 100 - 200<br />\
    <img src="styles/legend/ISO_13_3.png" /> 200 - 300<br />\
    <img src="styles/legend/ISO_13_4.png" /> 300 - 400<br />\
    <img src="styles/legend/ISO_13_5.png" /> 400 - 500<br />\
    <img src="styles/legend/ISO_13_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/ISO_13_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/ISO_13_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/ISO_13_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/ISO_13_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/ISO_13_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/ISO_13_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/ISO_13_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/ISO_13_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/ISO_13_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/ISO_13_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/ISO_13_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/ISO_13_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/ISO_13_19.png" /> 7000 - 7500<br />' });
var format_OLIGO_14 = new ol.format.GeoJSON();
var features_OLIGO_14 = format_OLIGO_14.readFeatures(json_OLIGO_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OLIGO_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OLIGO_14.addFeatures(features_OLIGO_14);
var lyr_OLIGO_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OLIGO_14, 
                style: style_OLIGO_14,
                popuplayertitle: 'OLIGO',
                interactive: true,
    title: 'OLIGO<br />\
    <img src="styles/legend/OLIGO_14_0.png" /> 0 - 50<br />\
    <img src="styles/legend/OLIGO_14_1.png" /> 50 - 100<br />\
    <img src="styles/legend/OLIGO_14_2.png" /> 100 - 200<br />\
    <img src="styles/legend/OLIGO_14_3.png" /> 200 - 300<br />\
    <img src="styles/legend/OLIGO_14_4.png" /> 300 - 400<br />\
    <img src="styles/legend/OLIGO_14_5.png" /> 400 - 500<br />\
    <img src="styles/legend/OLIGO_14_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/OLIGO_14_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/OLIGO_14_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/OLIGO_14_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/OLIGO_14_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/OLIGO_14_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/OLIGO_14_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/OLIGO_14_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/OLIGO_14_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/OLIGO_14_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/OLIGO_14_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/OLIGO_14_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/OLIGO_14_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/OLIGO_14_19.png" /> 7000 - 7500<br />' });
var format_ANNE_15 = new ol.format.GeoJSON();
var features_ANNE_15 = format_ANNE_15.readFeatures(json_ANNE_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANNE_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANNE_15.addFeatures(features_ANNE_15);
var lyr_ANNE_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANNE_15, 
                style: style_ANNE_15,
                popuplayertitle: 'ANNE',
                interactive: true,
    title: 'ANNE<br />\
    <img src="styles/legend/ANNE_15_0.png" /> 0 - 50<br />\
    <img src="styles/legend/ANNE_15_1.png" /> 50 - 100<br />\
    <img src="styles/legend/ANNE_15_2.png" /> 100 - 200<br />\
    <img src="styles/legend/ANNE_15_3.png" /> 200 - 300<br />\
    <img src="styles/legend/ANNE_15_4.png" /> 300 - 400<br />\
    <img src="styles/legend/ANNE_15_5.png" /> 400 - 500<br />\
    <img src="styles/legend/ANNE_15_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/ANNE_15_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/ANNE_15_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/ANNE_15_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/ANNE_15_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/ANNE_15_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/ANNE_15_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/ANNE_15_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/ANNE_15_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/ANNE_15_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/ANNE_15_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/ANNE_15_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/ANNE_15_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/ANNE_15_19.png" /> 7000 - 7500<br />' });
var format_DECA_16 = new ol.format.GeoJSON();
var features_DECA_16 = format_DECA_16.readFeatures(json_DECA_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DECA_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DECA_16.addFeatures(features_DECA_16);
var lyr_DECA_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DECA_16, 
                style: style_DECA_16,
                popuplayertitle: 'DECA',
                interactive: true,
    title: 'DECA<br />\
    <img src="styles/legend/DECA_16_0.png" /> 0 - 50<br />\
    <img src="styles/legend/DECA_16_1.png" /> 50 - 100<br />\
    <img src="styles/legend/DECA_16_2.png" /> 100 - 200<br />\
    <img src="styles/legend/DECA_16_3.png" /> 200 - 300<br />\
    <img src="styles/legend/DECA_16_4.png" /> 300 - 400<br />\
    <img src="styles/legend/DECA_16_5.png" /> 400 - 500<br />\
    <img src="styles/legend/DECA_16_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/DECA_16_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/DECA_16_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/DECA_16_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/DECA_16_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/DECA_16_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/DECA_16_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/DECA_16_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/DECA_16_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/DECA_16_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/DECA_16_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/DECA_16_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/DECA_16_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/DECA_16_19.png" /> 7000 - 7500<br />' });
var format_GAST_17 = new ol.format.GeoJSON();
var features_GAST_17 = format_GAST_17.readFeatures(json_GAST_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GAST_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GAST_17.addFeatures(features_GAST_17);
var lyr_GAST_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GAST_17, 
                style: style_GAST_17,
                popuplayertitle: 'GAST',
                interactive: true,
    title: 'GAST<br />\
    <img src="styles/legend/GAST_17_0.png" /> 0 - 50<br />\
    <img src="styles/legend/GAST_17_1.png" /> 50 - 100<br />\
    <img src="styles/legend/GAST_17_2.png" /> 100 - 200<br />\
    <img src="styles/legend/GAST_17_3.png" /> 200 - 300<br />\
    <img src="styles/legend/GAST_17_4.png" /> 300 - 400<br />\
    <img src="styles/legend/GAST_17_5.png" /> 400 - 500<br />\
    <img src="styles/legend/GAST_17_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/GAST_17_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/GAST_17_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/GAST_17_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/GAST_17_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/GAST_17_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/GAST_17_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/GAST_17_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/GAST_17_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/GAST_17_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/GAST_17_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/GAST_17_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/GAST_17_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/GAST_17_19.png" /> 7000 - 7500<br />' });
var format_ACAN_18 = new ol.format.GeoJSON();
var features_ACAN_18 = format_ACAN_18.readFeatures(json_ACAN_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACAN_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACAN_18.addFeatures(features_ACAN_18);
var lyr_ACAN_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACAN_18, 
                style: style_ACAN_18,
                popuplayertitle: 'ACAN',
                interactive: true,
    title: 'ACAN<br />\
    <img src="styles/legend/ACAN_18_0.png" /> 0 - 50<br />\
    <img src="styles/legend/ACAN_18_1.png" /> 50 - 100<br />\
    <img src="styles/legend/ACAN_18_2.png" /> 100 - 200<br />\
    <img src="styles/legend/ACAN_18_3.png" /> 200 - 300<br />\
    <img src="styles/legend/ACAN_18_4.png" /> 300 - 400<br />\
    <img src="styles/legend/ACAN_18_5.png" /> 400 - 500<br />\
    <img src="styles/legend/ACAN_18_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/ACAN_18_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/ACAN_18_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/ACAN_18_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/ACAN_18_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/ACAN_18_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/ACAN_18_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/ACAN_18_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/ACAN_18_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/ACAN_18_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/ACAN_18_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/ACAN_18_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/ACAN_18_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/ACAN_18_19.png" /> 7000 - 7500<br />' });
var format_ACHE_19 = new ol.format.GeoJSON();
var features_ACHE_19 = format_ACHE_19.readFeatures(json_ACHE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ACHE_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ACHE_19.addFeatures(features_ACHE_19);
var lyr_ACHE_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ACHE_19, 
                style: style_ACHE_19,
                popuplayertitle: 'ACHE',
                interactive: true,
    title: 'ACHE<br />\
    <img src="styles/legend/ACHE_19_0.png" /> 0 - 50<br />\
    <img src="styles/legend/ACHE_19_1.png" /> 50 - 100<br />\
    <img src="styles/legend/ACHE_19_2.png" /> 100 - 200<br />\
    <img src="styles/legend/ACHE_19_3.png" /> 200 - 300<br />\
    <img src="styles/legend/ACHE_19_4.png" /> 300 - 400<br />\
    <img src="styles/legend/ACHE_19_5.png" /> 400 - 500<br />\
    <img src="styles/legend/ACHE_19_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/ACHE_19_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/ACHE_19_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/ACHE_19_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/ACHE_19_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/ACHE_19_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/ACHE_19_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/ACHE_19_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/ACHE_19_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/ACHE_19_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/ACHE_19_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/ACHE_19_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/ACHE_19_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/ACHE_19_19.png" /> 7000 - 7500<br />' });
var format_BIVA_20 = new ol.format.GeoJSON();
var features_BIVA_20 = format_BIVA_20.readFeatures(json_BIVA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BIVA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BIVA_20.addFeatures(features_BIVA_20);
var lyr_BIVA_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BIVA_20, 
                style: style_BIVA_20,
                popuplayertitle: 'BIVA',
                interactive: true,
    title: 'BIVA<br />\
    <img src="styles/legend/BIVA_20_0.png" /> 0 - 50<br />\
    <img src="styles/legend/BIVA_20_1.png" /> 50 - 100<br />\
    <img src="styles/legend/BIVA_20_2.png" /> 100 - 200<br />\
    <img src="styles/legend/BIVA_20_3.png" /> 200 - 300<br />\
    <img src="styles/legend/BIVA_20_4.png" /> 300 - 400<br />\
    <img src="styles/legend/BIVA_20_5.png" /> 400 - 500<br />\
    <img src="styles/legend/BIVA_20_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/BIVA_20_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/BIVA_20_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/BIVA_20_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/BIVA_20_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/BIVA_20_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/BIVA_20_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/BIVA_20_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/BIVA_20_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/BIVA_20_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/BIVA_20_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/BIVA_20_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/BIVA_20_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/BIVA_20_19.png" /> 7000 - 7500<br />' });
var format_AMPH_21 = new ol.format.GeoJSON();
var features_AMPH_21 = format_AMPH_21.readFeatures(json_AMPH_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMPH_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMPH_21.addFeatures(features_AMPH_21);
var lyr_AMPH_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMPH_21, 
                style: style_AMPH_21,
                popuplayertitle: 'AMPH',
                interactive: true,
    title: 'AMPH<br />\
    <img src="styles/legend/AMPH_21_0.png" /> 0 - 50<br />\
    <img src="styles/legend/AMPH_21_1.png" /> 50 - 100<br />\
    <img src="styles/legend/AMPH_21_2.png" /> 100 - 200<br />\
    <img src="styles/legend/AMPH_21_3.png" /> 200 - 300<br />\
    <img src="styles/legend/AMPH_21_4.png" /> 300 - 400<br />\
    <img src="styles/legend/AMPH_21_5.png" /> 400 - 500<br />\
    <img src="styles/legend/AMPH_21_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/AMPH_21_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/AMPH_21_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/AMPH_21_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/AMPH_21_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/AMPH_21_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/AMPH_21_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/AMPH_21_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/AMPH_21_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/AMPH_21_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/AMPH_21_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/AMPH_21_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/AMPH_21_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/AMPH_21_19.png" /> 7000 - 7500<br />' });
var format_EPT_22 = new ol.format.GeoJSON();
var features_EPT_22 = format_EPT_22.readFeatures(json_EPT_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EPT_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPT_22.addFeatures(features_EPT_22);
var lyr_EPT_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPT_22, 
                style: style_EPT_22,
                popuplayertitle: 'EPT',
                interactive: true,
    title: 'EPT<br />\
    <img src="styles/legend/EPT_22_0.png" /> 0 - 50<br />\
    <img src="styles/legend/EPT_22_1.png" /> 50 - 100<br />\
    <img src="styles/legend/EPT_22_2.png" /> 100 - 200<br />\
    <img src="styles/legend/EPT_22_3.png" /> 200 - 300<br />\
    <img src="styles/legend/EPT_22_4.png" /> 300 - 400<br />\
    <img src="styles/legend/EPT_22_5.png" /> 400 - 500<br />\
    <img src="styles/legend/EPT_22_6.png" /> 500 - 1000<br />\
    <img src="styles/legend/EPT_22_7.png" /> 1000 - 1500<br />\
    <img src="styles/legend/EPT_22_8.png" /> 1500 - 2000<br />\
    <img src="styles/legend/EPT_22_9.png" /> 2000 - 2500<br />\
    <img src="styles/legend/EPT_22_10.png" /> 2500 - 3000<br />\
    <img src="styles/legend/EPT_22_11.png" /> 3000 - 3500<br />\
    <img src="styles/legend/EPT_22_12.png" /> 3500 - 4000<br />\
    <img src="styles/legend/EPT_22_13.png" /> 4000 - 4500<br />\
    <img src="styles/legend/EPT_22_14.png" /> 4500 - 5000<br />\
    <img src="styles/legend/EPT_22_15.png" /> 5000 - 5500<br />\
    <img src="styles/legend/EPT_22_16.png" /> 5500 - 6000<br />\
    <img src="styles/legend/EPT_22_17.png" /> 6000 - 6500<br />\
    <img src="styles/legend/EPT_22_18.png" /> 6500 - 7000<br />\
    <img src="styles/legend/EPT_22_19.png" /> 7000 - 7500<br />' });
var group_Printemps2024 = new ol.layer.Group({
                                layers: [lyr_HETERO_4,lyr_NEMA_5,lyr_TRICHO_6,lyr_PLECO_7,lyr_HYDRA_8,lyr_EPHEME_9,lyr_DIPT_10,lyr_COLEO_11,lyr_ODO_12,lyr_ISO_13,lyr_OLIGO_14,lyr_ANNE_15,lyr_DECA_16,lyr_GAST_17,lyr_ACAN_18,lyr_ACHE_19,lyr_BIVA_20,lyr_AMPH_21,lyr_EPT_22,],
                                fold: "open",
                                title: 'Printemps 2024'});

lyr_OSMStandard_0.setVisible(false);lyr_OpenTopoMap_1.setVisible(true);lyr_BV_2.setVisible(true);lyr_Hydro_3.setVisible(true);lyr_HETERO_4.setVisible(false);lyr_NEMA_5.setVisible(false);lyr_TRICHO_6.setVisible(false);lyr_PLECO_7.setVisible(false);lyr_HYDRA_8.setVisible(false);lyr_EPHEME_9.setVisible(false);lyr_DIPT_10.setVisible(false);lyr_COLEO_11.setVisible(false);lyr_ODO_12.setVisible(false);lyr_ISO_13.setVisible(false);lyr_OLIGO_14.setVisible(false);lyr_ANNE_15.setVisible(false);lyr_DECA_16.setVisible(false);lyr_GAST_17.setVisible(false);lyr_ACAN_18.setVisible(false);lyr_ACHE_19.setVisible(false);lyr_BIVA_20.setVisible(false);lyr_AMPH_21.setVisible(true);lyr_EPT_22.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_OpenTopoMap_1,lyr_BV_2,lyr_Hydro_3,group_Printemps2024];
lyr_BV_2.set('fieldAliases', {'id': 'id', 'polygon': 'polygon', 'Surface (k': 'Surface (k', });
lyr_Hydro_3.set('fieldAliases', {'ID': 'ID', 'GEW_NAME': 'GEW_NAME', 'GEWAESSER': 'GEWAESSER', 'GEW_TYP': 'GEW_TYP', 'LAENGE': 'LAENGE', 'Lenght(km)': 'Lenght(km)', });
lyr_HETERO_4.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_NEMA_5.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_TRICHO_6.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_PLECO_7.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_HYDRA_8.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_EPHEME_9.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_DIPT_10.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_COLEO_11.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_ODO_12.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_ISO_13.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_OLIGO_14.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_ANNE_15.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_DECA_16.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_GAST_17.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_ACAN_18.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_ACHE_19.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_BIVA_20.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_AMPH_21.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', });
lyr_EPT_22.set('fieldAliases', {'Id': 'Id', 'Source': 'Source', 'X': 'X', 'Y': 'Y', 'CAMPAGNE': 'CAMPAGNE', 'TOTAL': 'TOTAL', 'AMPH': 'AMPH', 'BIVA': 'BIVA', 'ACHE': 'ACHE', 'ACAN': 'ACAN', 'GAST': 'GAST', 'DECA': 'DECA', 'ANNE': 'ANNE', 'OLIGO': 'OLIGO', 'ISO': 'ISO', 'ODO': 'ODO', 'COLEO': 'COLEO', 'DIPT': 'DIPT', 'EPHEME': 'EPHEME', 'HYDRA': 'HYDRA', 'PLECO': 'PLECO', 'TRICHO': 'TRICHO', 'NEMA': 'NEMA', 'PLECOAD': 'PLECOAD', 'HETERO': 'HETERO', 'EPT': 'EPT', });
lyr_BV_2.set('fieldImages', {'id': 'TextEdit', 'polygon': 'TextEdit', 'Surface (k': 'TextEdit', });
lyr_Hydro_3.set('fieldImages', {'ID': 'TextEdit', 'GEW_NAME': '', 'GEWAESSER': 'TextEdit', 'GEW_TYP': '', 'LAENGE': '', 'Lenght(km)': '', });
lyr_HETERO_4.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_NEMA_5.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_TRICHO_6.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_PLECO_7.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_HYDRA_8.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_EPHEME_9.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_DIPT_10.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_COLEO_11.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_ODO_12.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_ISO_13.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_OLIGO_14.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_ANNE_15.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_DECA_16.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_GAST_17.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_ACAN_18.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_ACHE_19.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_BIVA_20.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_AMPH_21.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', });
lyr_EPT_22.set('fieldImages', {'Id': 'TextEdit', 'Source': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CAMPAGNE': 'TextEdit', 'TOTAL': 'TextEdit', 'AMPH': 'TextEdit', 'BIVA': 'TextEdit', 'ACHE': 'TextEdit', 'ACAN': 'TextEdit', 'GAST': 'TextEdit', 'DECA': 'TextEdit', 'ANNE': 'TextEdit', 'OLIGO': 'TextEdit', 'ISO': 'TextEdit', 'ODO': 'TextEdit', 'COLEO': 'TextEdit', 'DIPT': 'TextEdit', 'EPHEME': 'TextEdit', 'HYDRA': 'TextEdit', 'PLECO': 'TextEdit', 'TRICHO': 'TextEdit', 'NEMA': 'TextEdit', 'PLECOAD': 'TextEdit', 'HETERO': 'TextEdit', 'EPT': 'Range', });
lyr_BV_2.set('fieldLabels', {'id': 'hidden field', 'polygon': 'hidden field', 'Surface (k': 'hidden field', });
lyr_Hydro_3.set('fieldLabels', {'ID': 'hidden field', 'GEW_NAME': 'hidden field', 'GEWAESSER': 'hidden field', 'GEW_TYP': 'hidden field', 'LAENGE': 'hidden field', 'Lenght(km)': 'hidden field', });
lyr_HETERO_4.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'inline label - always visible', });
lyr_NEMA_5.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'inline label - always visible', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_TRICHO_6.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'inline label - always visible', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_PLECO_7.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'inline label - always visible', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_HYDRA_8.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'inline label - always visible', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_EPHEME_9.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'inline label - always visible', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_DIPT_10.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'inline label - always visible', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_COLEO_11.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'inline label - always visible', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_ODO_12.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'inline label - always visible', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_ISO_13.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'inline label - always visible', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_OLIGO_14.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'inline label - always visible', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_ANNE_15.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'inline label - always visible', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_DECA_16.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'inline label - always visible', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_GAST_17.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'inline label - always visible', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_ACAN_18.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'inline label - always visible', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_ACHE_19.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'inline label - always visible', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_BIVA_20.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'inline label - always visible', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_AMPH_21.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'inline label - always visible', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'hidden field', 'HYDRA': 'hidden field', 'PLECO': 'hidden field', 'TRICHO': 'hidden field', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', });
lyr_EPT_22.set('fieldLabels', {'Id': 'inline label - always visible', 'Source': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'CAMPAGNE': 'inline label - always visible', 'TOTAL': 'hidden field', 'AMPH': 'hidden field', 'BIVA': 'hidden field', 'ACHE': 'hidden field', 'ACAN': 'hidden field', 'GAST': 'hidden field', 'DECA': 'hidden field', 'ANNE': 'hidden field', 'OLIGO': 'hidden field', 'ISO': 'hidden field', 'ODO': 'hidden field', 'COLEO': 'hidden field', 'DIPT': 'hidden field', 'EPHEME': 'inline label - always visible', 'HYDRA': 'hidden field', 'PLECO': 'inline label - always visible', 'TRICHO': 'inline label - always visible', 'NEMA': 'hidden field', 'PLECOAD': 'hidden field', 'HETERO': 'hidden field', 'EPT': 'inline label - always visible', });
lyr_EPT_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});