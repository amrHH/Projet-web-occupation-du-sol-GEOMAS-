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
var esriLayer_c2 = new ol.layer.Tile({
    source: new ol.source.XYZ({
        url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        tileSize: 256,
        crossOrigin: 'anonymous'
    })
});
// Crée une source de vecteur pour les données geojson locales
var vectorSource = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: "./Cartes/Metro1.geojson"
});

var vectorSource_c2 = new ol.source.Vector({
    format: new ol.format.GeoJSON(),
    url: "./Cartes/carte_changement3_4326.geojson"
});

var colors = {
    'autre': '#33fdbb84',
    'desartificialisation': 'red',
    'nouveau territoires artificial': 'pink',
    'territoires artificialisés': 'yellow'
};


var vectorLayer_c1 = new ol.layer.Vector({
    source: vectorSource,
    style: function (feature) {
        var chang_arti = feature.get('chang_arti');
        var colors = this.colors
        var defaultColor = 'gray'; // couleur par défaut pour les valeurs non répertoriées dans la liste des couleurs

        // obtenir la couleur correspondante à la valeur de chang_arti
        var color = colors[chang_arti] || defaultColor;

        // définir le style de la feature en fonction de la valeur de chang_arti
        return new ol.style.Style({
            fill: new ol.style.Fill({
                color: color
            }),
            stroke: new ol.style.Stroke({
                color: 'black',
                width: 1
            })
        });
    }
});

var vectorLayer_c2 = new ol.layer.Vector({
    source: vectorSource_c2,
    style: function (feature) {
        var chang_arti = feature.get('chang_arti');
        var colors = this.colors
        var defaultColor = 'gray'; // couleur par défaut pour les valeurs non répertoriées dans la liste des couleurs

        // obtenir la couleur correspondante à la valeur de chang_arti
        var color = colors[chang_arti] || defaultColor;

        // définir le style de la feature en fonction de la valeur de chang_arti
        return new ol.style.Style({
            fill: new ol.style.Fill({
                color: color
            }),
            stroke: new ol.style.Stroke({
                color: 'black',
                width: 0.3
            })
        });
    }
});


// Crée une carte OpenLayers avec la couche OpenStreetMap
var map_1 = new ol.Map({
    target: 'carte2',
    layers: [esriLayer, vectorLayer_c1],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 2
    }),
});

var map_2 = new ol.Map({
    target: 'carte3',
    layers: [esriLayer_c2, vectorLayer_c2],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 2
    }),
});

// attendre que les données soient chargées avant de zoomer
vectorSource.once('change', function () {
    if (vectorSource.getState() === 'ready') {
        // obtenir l'étendue de la source
        var extent = vectorSource.getExtent();
        // ajuster la vue pour afficher l'étendue
        map_1.getView().fit(extent, { padding: [20, 20, 20, 20] });
    }
});

// attendre que les données soient chargées avant de zoomer
vectorSource_c2.once('change', function () {
    if (vectorSource_c2.getState() === 'ready') {
        // obtenir l'étendue de la source
        var extent = vectorSource_c2.getExtent();
        // ajuster la vue pour afficher l'étendue
        map_2.getView().fit(extent, { padding: [20, 20, 20, 20] });
    }
});
// créer une couche de surbrillance pour mettre en évidence la fonctionnalité sélectionnée
var highlightLayer_c1 = new ol.layer.Vector({
    source: new ol.source.Vector(),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255, 0, 0, 1)',
            width: 2
        })
    })
});

map_1.addLayer(highlightLayer_c1);

// créer un popup pour afficher le texte de la propriété 'chang_arti'
var popup_c1 = new ol.Overlay({
    element: document.getElementById('popup'),
    positioning: 'bottom-center',
    offset: [0, -10]
});
map_1.addOverlay(popup_c1);

// ajouter un gestionnaire d'événements click à la couche vectorielle
map_1.on('click', function (evt) {
    // réinitialiser la couche de surbrillance
    highlightLayer_c1.getSource().clear();

    // afficher le popup s'il est caché
    popup_c1.setPosition(undefined);

    // vérifier s'il y a une fonctionnalité sous le clic
    var feature = map_1.forEachFeatureAtPixel(evt.pixel, function (feature) {
        return feature;
    });

    if (feature) {
        // ajouter la fonctionnalité à la couche de surbrillance
        highlightLayer_c1.getSource().addFeature(feature);

        // afficher le texte de la propriété 'chang_arti' dans le popup
        var chang_arti = feature.get('chang_arti');
        document.getElementById('popup-content').innerHTML = chang_arti;
        popup_c1.setPosition(evt.coordinate);
    }
});

const layerSwitcher = new ol.control.LayerSwitcher({
    show_labels:true,
    tip_label:'couches',
    groupSelectStyle: 'none', // Can be 'children' [default], 'group' or 'none'
    activationMode:'mouseover',
    startActive:true
  });
  map_2.addControl(layerSwitcher);

