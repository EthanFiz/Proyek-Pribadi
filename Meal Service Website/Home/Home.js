var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var nav = document.querySelector('nav');
var topBan = document.querySelector('.bannerContainer');

window.addEventListener('scroll', function(){
    if(window.scrollY > 50){
        nav.classList.add('navScrolled');
        topBan.classList.add('topBanUpd')
    } else {
        nav.classList.remove('navScrolled');
        topBan.classList.remove('topBanUpd')
    } 
});