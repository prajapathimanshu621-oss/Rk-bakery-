const cakes=[

{name:"Chocolate Cake",price:240},
{name:"Black Forest",price:200},
{name:"Strawberry Cake",price:200},
{name:"Vanilla Cake",price:200},
{name:"Pineapple Cake",price:200}

]

let cart=[]

function loadCakes(){

let html=""

cakes.forEach((cake,i)=>{

html+=`

<div class="cake">

<h3>${cake.name}</h3>

₹${cake.price}

<br>

<button onclick="addCart(${i})">

Add to Cart

</button>

</div>

`

})

document.getElementById("cakeList").innerHTML=html

}

loadCakes()

function addCart(i){

cart.push(cakes[i])

updateCart()

}

function updateCart(){

let html=""

cart.forEach(c=>{

html+=c.name+" ₹"+c.price+"<br>"

})

document.getElementById("cartItems").innerHTML=html

}

function checkout(){

navigator.geolocation.getCurrentPosition(function(position){

let lat=position.coords.latitude
let lng=position.coords.longitude

let shopLat=26.8818326
let shopLng=75.2389793

let distance=getDistance(lat,lng,shopLat,shopLng)

if(distance<=50){

alert("Delivery Available")

}else{

alert("Delivery not available")

}

})

}

function getDistance(lat1,lon1,lat2,lon2){

const R=6371

const dLat=(lat2-lat1)*Math.PI/180
const dLon=(lon2-lon1)*Math.PI/180

const a=
Math.sin(dLat/2)*Math.sin(dLat/2)+
Math.cos(lat1*Math.PI/180)*
Math.cos(lat2*Math.PI/180)*
Math.sin(dLon/2)*Math.sin(dLon/2)

const c=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))

return R*c

}