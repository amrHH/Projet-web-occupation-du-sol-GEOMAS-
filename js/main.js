import './style.css';
import {Map, View} from 'ol';
import VectorLayer from 'ol/layer/Vector';
import GeoJSON from 'ol/format/GeoJSON';
import VectorSource from 'ol/source/Vector';
import LayerGroup from 'ol/layer/Group';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj'
import KML from 'ol/format/KML';
/* const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 4
  })
})
const pump_at_arcgisonline = new VectorSource({
  url: 'https://services9.arcgis.com/nuNzn0OMg75uWEMq/arcgis/rest/services/clc_12/FeatureServer',
  format: new GeoJSON(),
})
const pumpLayer = new VectorLayer({
  source: pump_at_arcgisonline
});

const styleFunction = function(feature) {
  const casualties_description = feature.get('description');
  const htmlDoc = parser.parseFromString(casualties_description, 'text/xml');
  const casualties_count = parseInt(htmlDoc.lastChild.textContent.replace('count: ', ''));
  const radius = 4 + 2 * (casualties_count - 1);
  let style = styleCache[radius];
  if (!style) {
    style = new Style({
      image: new CircleStyle({
        radius: radius,
        fill: new Fill({
          color: '#BADA55',
        }),
        stroke: new Stroke({
          color: '#00BFFF',
          width: 1,
        }),
      }),
    });
    styleCache[radius] = style;
  }
  return style;
};

// Basemap
const osm = new TileLayer({
  className: 'bw',
  title: 'OSM',
  type: 'base',
  visible: true,
  source: new OSM(),
});

// Cholera deaths
const cholera_deaths = new VectorLayer({
  source: new VectorSource({
    url: './Rendu/test/Carte/clc_12.geojson',
    format: new GeoJSON(),
  }),
  style: styleFunction,
  title: 'Deaths',
  visible: true,
});

const outbreak_maps = new LayerGroup({
  title: 'Outbreak maps',
  fold: 'open',
  layers: [cholera_deaths]
}); */

//const map = new Map({
//  target: 'map',
//  layers: [osm, outbreak_maps],
//  view: new View({
//    center: fromLonLat([-0.13664, 51.51332]), // Coordinates of the pump on Broad Street
//    zoom: 16
//  })
//});

// Pumps in Soho
const test_couche = new VectorLayer({
  source: new VectorSource({
      url: 'C:/Users/bronner/Documents/UnivGA/Master2/Cours/Humbert/Rendu/projet/Carte/test_3.kml',
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
  target: 'map',
  layers: [osm, test_couche],
  view: new View({
      center: fromLonLat([-0.13664, 51.51332]), // Coordinates of the pump on Broad Street
      zoom: 16
  })
});

//map.addLayer(pumpLayer);

//https://services9.arcgis.com/nuNzn0OMg75uWEMq/arcgis/rest/services/pumps/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=true&f=geojson

