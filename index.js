let menu_icon = document.querySelector('.menu-icon');
let close_icon = document.querySelector('.close-icon');
let mobile_nav = document.querySelector('.mobile-nav');


menu_icon.addEventListener('click', ()=>{
    mobile_nav.classList.add('nav-open')
})
close_icon.addEventListener('click', ()=>{
    mobile_nav.classList.remove('nav-open')
})