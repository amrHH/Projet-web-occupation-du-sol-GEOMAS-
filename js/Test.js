var vectorSource = new ol.source.Vector({
    url: '..Cartes/Communes.geojson',
    format: new ol.format.GeoJSON()
  });
  
  var vectorLayer = new ol.layer.Vector({
    source: vectorSource
  });
  
  var map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      }),
      vectorLayer
    ],
    target: 'map',
    view: new ol.View({
      center: [0, 0],
      zoom: 2
    })
  });
  