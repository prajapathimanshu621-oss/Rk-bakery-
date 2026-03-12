const instagramCakes = [

{
name:"Chocolate Cake",
price:350,
img:"https://source.unsplash.com/400x300/?chocolate-cake",
link:"https://www.instagram.com/rk_bakery_cake?igsh=MWt5M2k1ZzhhNnduZg=="
},

{
name:"Black Forest Cake",
price:200,
img:"https://source.unsplash.com/400x300/?black-forest-cake",
link:"https://www.instagram.com/rk_bakery_cake?igsh=MWt5M2k1ZzhhNnduZg=="
},

{
name:"Strawberry Cake",
price:200,
img:"https://source.unsplash.com/400x300/?strawberry-cake",
link:"https://www.instagram.com/rk_bakery_cake?igsh=MWt5M2k1ZzhhNnduZg=="
},

{
name:"Red Velvet Cake",
price:250,
img:"https://source.unsplash.com/400x300/?red-velvet-cake",
link:"https://www.instagram.com/rk_bakery_cake?igsh=MWt5M2k1ZzhhNnduZg=="
},

{
name:"Butterscotch Cake",
price:200,
img:"https://source.unsplash.com/400x300/?butterscotch-cake",
link:"https://www.instagram.com/rk_bakery_cake?igsh=MWt5M2k1ZzhhNnduZg=="
}

]

function loadInstagramCakes(){

let html=""

instagramCakes.forEach((c,i)=>{

html+=`

<div class="instaCake">

<img src="${c.img}">

<h3>${c.name}</h3>

₹${c.price}

<br>

<button onclick="addCart(${i})">

Order Now

</button>

<br>

<a href="${c.link}" target="_blank">

View Instagram Post

</a>

</div>

`

})

document.getElementById("instagram-cakes").innerHTML=html

}

loadInstagramCakes()