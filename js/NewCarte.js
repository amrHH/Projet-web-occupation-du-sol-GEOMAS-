/*var osmLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
});*/
var esriLayer = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        tileSize: 256,
        crossOrigin: 'anonymous'
    })
});
// Crée une source de vecteur pour les données geojson locales
var vectorSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: "./Cartes/Communes.geojson"
});


// Crée une couche de vecteur pour les données geojson locales
var vectorLayer = new ol.layer.Vector({
    source: vectorSource,

});
// Crée une carte OpenLayers avec la couche OpenStreetMap
var map = new ol.Map({
    target: 'carte2',
    layers: [esriLayer,vectorLayer],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 2
    })
});

// attendre que les données soient chargées avant de zoomer
vectorSource.once('change', function () {
    if (vectorSource.getState() === 'ready') {
        // obtenir l'étendue de la source
        var extent = vectorSource.getExtent();
        // ajuster la vue pour afficher l'étendue
        map.getView().fit(extent, { padding: [20, 20, 20, 20] });
    }
});

