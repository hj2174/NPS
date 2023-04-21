
$(document).ready(function(){
  //메뉴 슬라이드다운(전체)
  $('nav::before').hide();

  $('nav > ul > li').mouseenter(function(){
  $('.sub_nav, nav::before').show();
  });
  
  $('nav > ul > li').mouseleave(function(){
  $('.sub_nav, nav::before').hide();
    });


      
// 메인 배너 슬라이드 
var main_banner_swiper = new Swiper(".main_banner .swiper-container", {
  spaceBetween: 30,    // 슬라이드 사이 여백
  slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
  centeredSlides: true,    //센터모드
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop : false,   // 슬라이드 반복 여부
  loopAdditionalSlides : 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// 팝업존 스와이퍼 슬라이드
var popup_zone_swiper = new Swiper(".popup_zone .swiper-container", {
  spaceBetween: 30,   
  slidesPerView : 'auto',
  centeredSlides: true,    
  autoplay: {    
    delay: 3000, 
    disableOnInteraction: false, 
  },
  loop : false,  
  loopAdditionalSlides : 1,
	pagination: {
        el: '.popupzone-slider-nav .slider-page',
        type: "fraction",
        clickable: true,
      },
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});

var $btnStop = $(".popupzone-slider-nav .btn-stop");
	$btnStop.click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			sliderPlay();
		}else{
			sliderStop();
		}
	});
	
	function sliderStop(){
		$btnStop.addClass("play");
		$btnStop.text("자동슬라이드 시작");
		popup_zone_swiper.autoplay.stop();
	}
	function sliderPlay(){
		$btnStop.removeClass("play");
		$btnStop.text("자동슬라이드 멈춤");
		popup_zone_swiper.autoplay.start();
	}


  // sns 탭메뉴
  $(".sns_tab_menu li").click(function() {
    var idx = $(this).index();
    console.log('idx');
    
    $(".sns_tab_menu li").removeClass("on");
    $(".sns_tab_menu li").eq(idx).addClass("on");

    $(".sns_tab_con > div").hide();
    $(".sns_tab_con > div").removeClass("on");
    $(".sns_tab_con > div").eq(idx).show()
    $(".sns_tab_con > div").eq(idx).addClass("on");
  })


	
});

