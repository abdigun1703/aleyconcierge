
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';

// homeswiper.js - Fixed version for Astro
const swiperHOme = 
Swiper.use([Navigation, Pagination]);
new Swiper('.home__swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  }
});
    

