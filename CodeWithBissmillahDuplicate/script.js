import Typed from "./typed/typed.js";
const menu_btn = document.getElementById('menu'); 
const Main_links = document.getElementById('main-links');


var typed = new Typed('#element', {
    strings: ['Web Development','Java','Python','C++','JavaScript'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    smartBackspace: true,
});

menu_btn.addEventListener('click',()=>{
    Main_links.classList.toggle('visibale')
})