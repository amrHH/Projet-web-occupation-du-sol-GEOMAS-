import VectorLayer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import KML from 'ol/format/KML';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View.js';
import { fromLonLat } from 'ol/proj'


import VectorSource from 'ol/source/Vector';

/* var vectorSource = new ol.source.Vector({
    url: '../Carte/clc_12.geojson',
    format: new ol.format.GeoJSON()
}); */

/* var vectorSource = new ol.source.Vector({
    url: 'path/to/your/geojson/file.geojson',
    format: new ol.format.GeoJSON()
});

var map = new ol.Map({
    target: 'map1',
    layers: [vectorLayer],
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    })
}); */

// Pumps in Soho
const test_couche = new VectorLayer({
    source: new VectorSource({
        url: './Carte/test_3.kml',
        format: new KML({
            extractStyles: false,
        }),
    }),
    title: 'Pumps',
    visible: true,
});
const osm = new TileLayer({
    className: 'bw',
    title: 'OSM',
    type: 'base',
    visible: true,
    source: new OSM(),
});
const map = new Map({
    target: 'map1',
    layers: [osm, test_couche],
    view: new View({
        center: fromLonLat([-0.13664, 51.51332]), // Coordinates of the pump on Broad Street
        zoom: 16
    })
});


