function login(){

let u=document.getElementById("user").value
let p=document.getElementById("pass").value

if(u=="admin" && p=="1234"){

document.getElementById("panel").style.display="block"

}else{

alert("Wrong Login")

}

}

function addCake(){

let name=document.getElementById("cakeName").value
let price=document.getElementById("price").value

alert("Cake Added: "+name+" ₹"+price)

}