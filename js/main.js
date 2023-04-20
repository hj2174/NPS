
$(function(){
  //메뉴 슬라이드다운(전체)
  $('nav::before').hide();

  $('nav > ul > li').mouseenter(function(){
  $('.sub_nav, nav::before').show();
  });
  
  $('nav > ul > li').mouseleave(function(){
  $('.sub_nav, nav::before').hide();
    });

});

      

var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,    // 슬라이드 사이 여백
  slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
  centeredSlides: true,    //센터모드
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop : false,   // 슬라이드 반복 여부
  loopAdditionalSlides : 1,
  navigation: {  
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



 