// Charger le fichier GeoJSON contenant les données
$.getJSON('./Cartes/Metro1.geojson', function(data) {
     // Initialisation des variables pour les données du graphique
  var labels = [];
  var values = [];

  // Itération sur chaque feature du geojson
  data.features.forEach(function(feature) {

    // Extraction de la valeur de la propriété "chang_arti"
    var chang_arti = feature.properties.chang_arti;

    // Si la valeur n'existe pas déjà dans le tableau des labels, l'ajouter
    if (!labels.includes(chang_arti)) {
      labels.push(chang_arti);
    }

    // Ajout d'un compteur pour chaque valeur de "chang_arti"
    if (values[chang_arti] === undefined) {
      values[chang_arti] = 1;
    } else {
      values[chang_arti]++;
    }
  });

  // Conversion des compteurs en pourcentages
  var total = data.features.length;
  var percentages = [];
  labels.forEach(function(label) {
    var percentage = (values[label] / total) * 100;
    percentages.push(percentage.toFixed(2));
  });

  // Création du graphique
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Changements',
        data: percentages,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          ticks: {
            beginAtZero: true,
            callback: function(value) {
              return value + '%';
            }
          }
        }
      }
    }
  });
});

labels2 =['1990','2000','2006','2012','2018']
populations=[6.668,7.001,7.357,7.695,7.992]
var ctx2 = document.getElementById('myChart_2').getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: labels2,
    datasets: [{
      label: 'Changements',
      data: populations,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          callback: function(value) {
            return value + 'M';
          }
        }
      }
    }
  }
});
  