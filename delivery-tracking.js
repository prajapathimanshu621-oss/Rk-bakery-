let map
let marker

function initMap(){

map = new google.maps.Map(
document.getElementById("map"),
{
zoom:15,
center:{lat:28.6139,lng:77.2090}
}
)

marker = new google.maps.Marker({
position:{lat:28.6139,lng:77.2090},
map:map
})

trackLocation()

}

function trackLocation(){

navigator.geolocation.watchPosition(

function(position){

let lat = position.coords.latitude
let lng = position.coords.longitude

let newPos = {lat:lat,lng:lng}

marker.setPosition(newPos)

map.setCenter(newPos)

}

)

}