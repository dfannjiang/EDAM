$(document).ready(function() {
  var map = L.map('map', {scrollWheelZoom: false}).setView([22.0833, -129.5000], 3);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'koalaboy808.kf3oj9o7',
  accessToken: 'pk.eyJ1Ijoia29hbGFib3k4MDgiLCJhIjoiQlkzb3l0USJ9.o-SHU46rak_miT5dRXIhaw'
  }).addTo(map);
  
  var greenIcon = L.icon({
      iconUrl: 'resources/map_pointer.png',

      iconSize:     [30, 48], // size of the icon
      iconAnchor:   [15, 48], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [0, -48] // point from which the popup should open relative to the iconAnchor
  });

  L.marker([22.0833, -159.5000], {icon: greenIcon}).addTo(map, map).bindPopup("Kauai<br>Completeness: 92.6%");
  L.marker([-17.5333, -149.8333], {icon: greenIcon}).addTo(map).bindPopup("Moorea<br>Completeness: 44%");
  L.marker([48.5353, -123.0311], {icon: greenIcon}).addTo(map).bindPopup("Friday Harbor<br>Completeness: 97.6%");
  L.marker([-0.6667, -90.5500], {icon: greenIcon}).addTo(map).bindPopup("Galapagos Islands<br>Completeness: 90.5%");

  var kauai = L.map('kauai_map', 
    {attributionControl: false, zoomControl: false, scrollWheelZoom: false, dragging: false}).setView([22.0833, -159.5000], 7);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'koalaboy808.kf3oj9o7',
  accessToken: 'pk.eyJ1Ijoia29hbGFib3k4MDgiLCJhIjoiQlkzb3l0USJ9.o-SHU46rak_miT5dRXIhaw'
  }).addTo(kauai);

  var moorea = L.map('moorea_map', 
    {attributionControl: false, zoomControl: false, scrollWheelZoom: false, dragging: false}).setView([-17.5333, -149.8333], 9);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'koalaboy808.kf3oj9o7',
  accessToken: 'pk.eyJ1Ijoia29hbGFib3k4MDgiLCJhIjoiQlkzb3l0USJ9.o-SHU46rak_miT5dRXIhaw'
  }).addTo(moorea);

  var friday_harbor = L.map('friday_harbor_map', 
    {attributionControl: false, zoomControl: false, scrollWheelZoom: false, dragging: false}).setView([48.5353, -123.0311], 8);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'koalaboy808.kf3oj9o7',
  accessToken: 'pk.eyJ1Ijoia29hbGFib3k4MDgiLCJhIjoiQlkzb3l0USJ9.o-SHU46rak_miT5dRXIhaw'
  }).addTo(friday_harbor);

  var galapagos = L.map('galapagos_map', 
    {attributionControl: false, zoomControl: false, scrollWheelZoom: false, dragging: false}).setView([-0.6667, -90.5500], 5);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  id: 'koalaboy808.kf3oj9o7',
  accessToken: 'pk.eyJ1Ijoia29hbGFib3k4MDgiLCJhIjoiQlkzb3l0USJ9.o-SHU46rak_miT5dRXIhaw'
  }).addTo(galapagos);
});