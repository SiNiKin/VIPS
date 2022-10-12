$(document).ready(function () {
  
  $('.bxslider').bxSlider({
        
    slideWidth: 1920,
    maxSlides:1,
    moveSlide:1,
    auto: true
    // mode: fade

  });   

  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    speed: 1200,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 500,
      modifier: 1,
      slideShadows: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
    },
  });


  $('header .toggle-btn').click(function(){

    $(this).toggleClass('active');

    var to_c = $(this).hasClass('active');

    if(to_c == true){
      $('.toggle-menu-page').addClass('active');
    }else{
      $('.toggle-menu-page').removeClass('active');
    }

  });

  $('.main header .menu ul li').mouseenter(function(){

    $('.sub-menu').addClass('active');

  });

  $('.sub-menu-box').mouseleave(function(){

    $('.sub-menu').removeClass('active');

  });



});
