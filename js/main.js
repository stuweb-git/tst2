let hmenu = document.querySelector('.hmenu');
let mobileMenu = document.querySelector('.mobile-menu');
let close = document.querySelector('.close');
hmenu.addEventListener('click',function(){
    // console.log("ok")
    mobileMenu.classList.toggle('show-menu');
})
close.addEventListener('click',function(){
    // console.log("ok")
    mobileMenu.classList.toggle('show-menu');
})