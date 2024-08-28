import Autoplay from './modules/autoplay.min.mjs';
import {Swiper} from './swiper-bundle.min.mjs'
const array = ['img1.png','img2.png','img3.png','img4.png','img5.png'];
const slider = document.getElementById('swiper-wrapper')

array.map((item)=>{
    let div = document.createElement('div');
    div.setAttribute('class','swiper-slide');
    let image = document.createElement('img');
    image.setAttribute('src',`./images/${item}`);
    div.append(image);
    slider.appendChild(div);
})


const swiper = new Swiper('.swiper', {
    autoplay:{
        delay:3000,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });