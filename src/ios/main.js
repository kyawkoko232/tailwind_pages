import '@modules/swiper/swiper-bundle.css'
import './style.css'
import Swiper from 'swiper';

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
   
    slidesPerGroup: 1,
    // freeMode: true,
  
    // effect: "flip",
    // effect: "cards",
    
    grabCursor : "true",
    fade: "true",

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
  
    keyboard: {
      enabled: true,
    },
  });
    