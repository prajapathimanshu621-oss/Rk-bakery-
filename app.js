let cart=[]

function addCart(i){

cart.push(cakes[i])

showCart()

}

function showCart(){

let html=""

cart.forEach((c,i)=>{

html+=`

<div>

${c.name} ₹${c.price}

<button onclick="removeCart(${i})">

Delete

</button>

</div>

`

})

document.getElementById("cart").innerHTML=html

}

function removeCart(i){

cart.splice(i,1)

showCart()

}}
