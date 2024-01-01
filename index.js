

// navbar 
let menu_icon = document.querySelector('.menu-icon');
let close_icon = document.querySelector('.close-icon');
let mobile_nav = document.querySelector('.mobile-nav');


menu_icon.addEventListener('click', ()=>{
    mobile_nav.classList.add('nav-open')
})
close_icon.addEventListener('click', ()=>{
    mobile_nav.classList.remove('nav-open')
})


// cart
let cart_icon = document.querySelector('.cart-icon');
let cart_items = document.querySelector('.cart-items');

cart_icon.addEventListener('click', ()=>{
    cart_items.classList.toggle('cart-open')
})


//add items
 let plus_icon = document.querySelector('.plus-icon');
 let minus_icon = document.querySelector('.minus-icon');
 let add_item = document.querySelector('.add-item');

 let count = 0;

 plus_icon.addEventListener('click', ()=>{
    count ++;
    add_item.innerHTML = count
 });

minus_icon.addEventListener('click', ()=>{
    count -- ;
    if(count <= 0){
        count = 0;
    }

    add_item.innerHTML = count
    

 });

 //send items to cart
 let cart = document.querySelector('.addtocart-btn');
 let quality = document.querySelector('.quality');


 cart.addEventListener('click', ()=>{
    quality.textContent = count
    if(add_item.innerHTML == 0){
        cart_items.innerHTML = `
         <div class="empty-cart">
             <p>Cart</p>
             <hr>
             <p>your cart is empty</p>
         </div>
         `
     }else{
    cart_items.innerHTML = `
 <div class="itemincart">
    <div>
        <img class="cart-img" src="./images/image-product-1.jpg" alt="">
    </div>

    <div>
        <p>Fall Limited Edition Sneakers</p>
        <p>$125.00 * ${count} <span>$${125 * count}</span> </p>
    </div>
    <div>
        <img class="delete-icon" src="./images/icon-delete.svg" alt="">
    </div>
 </div>
    <button  class="addtocart-btn">Checkout</button>
 `
 deleteItem();
 }})

function deleteItem(){
     //delete items
 let delete_icon = document.querySelector('.delete-icon')
  delete_icon.addEventListener('click', ()=>{
     cart_items.innerHTML = `
     <div class="empty-cart">
         <p>Cart</p>
         <hr>
         <p>your cart is empty</p>
     </div>
     `
  })
}


 







