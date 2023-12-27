

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

