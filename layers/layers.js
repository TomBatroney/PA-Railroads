var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PaRailLines2024_05_Dissolved_1 = new ol.format.GeoJSON();
var features_PaRailLines2024_05_Dissolved_1 = format_PaRailLines2024_05_Dissolved_1.readFeatures(json_PaRailLines2024_05_Dissolved_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaRailLines2024_05_Dissolved_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaRailLines2024_05_Dissolved_1.addFeatures(features_PaRailLines2024_05_Dissolved_1);
var lyr_PaRailLines2024_05_Dissolved_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PaRailLines2024_05_Dissolved_1, 
                style: style_PaRailLines2024_05_Dissolved_1,
                interactive: true,
    title: 'PaRailLines2024_05_Dissolved<br />\
    <img src="styles/legend/PaRailLines2024_05_Dissolved_1_0.png" /> Abandoned<br />\
    <img src="styles/legend/PaRailLines2024_05_Dissolved_1_1.png" /> Combo<br />\
    <img src="styles/legend/PaRailLines2024_05_Dissolved_1_2.png" /> Freight<br />\
    <img src="styles/legend/PaRailLines2024_05_Dissolved_1_3.png" /> Local Line Haul<br />\
    <img src="styles/legend/PaRailLines2024_05_Dissolved_1_4.png" /> Rail to Trail<br />\
    <img src="styles/legend/PaRailLines2024_05_Dissolved_1_5.png" /> Rapid Transit/Light Rail<br />\
    <img src="styles/legend/PaRailLines2024_05_Dissolved_1_6.png" /> Regional<br />'
        });
var format_PaCounty2024_05_2 = new ol.format.GeoJSON();
var features_PaCounty2024_05_2 = format_PaCounty2024_05_2.readFeatures(json_PaCounty2024_05_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaCounty2024_05_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PaCounty2024_05_2.addFeatures(features_PaCounty2024_05_2);
var lyr_PaCounty2024_05_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PaCounty2024_05_2, 
                style: style_PaCounty2024_05_2,
                interactive: true,
                title: '<img src="styles/legend/PaCounty2024_05_2.png" /> PaCounty2024_05'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_PaRailLines2024_05_Dissolved_1.setVisible(true);lyr_PaCounty2024_05_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_PaRailLines2024_05_Dissolved_1,lyr_PaCounty2024_05_2];
lyr_PaRailLines2024_05_Dissolved_1.set('fieldAliases', {'TRACK_USE': 'TRACK_USE', });
lyr_PaCounty2024_05_2.set('fieldAliases', {'COUNTY_NAM': 'COUNTY_NAM', });
lyr_PaRailLines2024_05_Dissolved_1.set('fieldImages', {'TRACK_USE': 'TextEdit', });
lyr_PaCounty2024_05_2.set('fieldImages', {'COUNTY_NAM': 'TextEdit', });
lyr_PaRailLines2024_05_Dissolved_1.set('fieldLabels', {'TRACK_USE': 'no label', });
lyr_PaCounty2024_05_2.set('fieldLabels', {'COUNTY_NAM': 'inline label', });
lyr_PaCounty2024_05_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});