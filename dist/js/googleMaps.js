// Initialize and add the map
function initMap() {
  // The location of New York
  var newYork = { lat: 40.73061, lng: -73.935242 };
  // The map, centered at newYork
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: newYork,
  });
  // The marker, positioned at newYork
  var marker = new google.maps.Marker({ position: newYork, map: map });
}
