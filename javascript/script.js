var map = L.map("map").setView([51.230105976502685, 4.416225225411652], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
var Logo = L.icon({
  iconUrl: "assets/logo/favicon.svg",

  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
L.marker([51.230105976502685, 4.416225225411652], { icon: Logo }).addTo(map);
