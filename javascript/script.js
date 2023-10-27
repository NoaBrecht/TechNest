var map = L.map("map").setView([51.230105976502685, 4.416225225411652], 13);

var greenIcon = L.icon({
  iconUrl: "assets/logo/favicon.svg",

  iconSize: [38, 95], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
//TODO fix icon
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map);
