import KML from 'ol/format/KML.js';
import Map from 'ol/Map.js';
import VectorSource from 'ol/source/Vector.js';
import View from 'ol/View.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import OSM from 'ol/source/OSM';

/* const vector = new VectorLayer({
    source: new VectorSource({
        url: './Carte/test_3.kml',
        format: new KML(),
    }),
});
/* const osm = new TileLayer({
    className: 'bw',
    title: 'OSM',
    type: 'base',
    visible: true,
    source: new OSM(),
});
 */
/*
const map = new Map({
    layers: vector,
    target: document.getElementById('map'),
    view: new View({
        center: [876970.8463461736, 5859807.853963373],
        projection: 'EPSG:4326',
        zoom: 10,
    }),
});*/

var map = new ol.Map({
    target: 'map_test',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([2.35, 48.85]),
      zoom: 12
    })
  }); 

  var kmlSource = new ol.source.KML({
    url: 'C:/Users/bronner/Documents/UnivGA/Master2/Cours/Humbert/Rendu/projet/Carte/pumps.kml',
    projection: 'EPSG:2154'
  });

  var kmlLayer = new ol.layer.Vector({
    source: kmlSource
  });

  map.addLayer(kmlLayer);
  map.updateSize();