/*let buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button) {
    button.onclick = function(){
    button.innerText ="Clicked";
    };
});*/

let buttons = document.querySelectorAll(".btn");
buttons.forEach(function(button){
button.onclick=function(){
    button.innerText="Added";
    button.style.backgroundColor="green"; 
};
});

/*alert(Product added to Cart!);

let title=document.querySelector("h2");
title.innerText = "New Product";

let count = 0
button.onclick = function(){
    count++;
    button.innerText=count;
}

let cart = 0
button.onclick = function(){
    cart++;
    console.log("Cart:", cart);
}*/

     
