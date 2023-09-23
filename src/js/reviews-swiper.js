import Swiper from 'swiper/bundle';
import {  Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/pagination';

// init Swiper:
const swiperContainer = document.querySelector('.swiper');
const swiperPagination = document.querySelector('.swiper-pagination');


let swiperReviews = new Swiper('.swiper', {
  modules: [ Pagination],
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    
  speed: 1000,
 
  pagination: {
      el: '.swiper-pagination',
    clickable: true,
  
  },

  slidesPerView: 1,
  preloadImages: false,
 
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1279: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

swiperContainer.addEventListener('mouseover', function () {
  swiperReviews.autoplay.stop();
});

swiperContainer.addEventListener('mouseout', function () {
  swiperReviews.autoplay.start();
});


swiperPagination.addEventListener('focusin', async function (event) {
  swiperReviews.autoplay.stop();
  let interval = setTimeout(function () {
      event.target.blur()
      swiperReviews.autoplay.start();
      clearTimeout(interval);
  }, 1000)
  
  
})