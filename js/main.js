$(document).ready(function(){

  //pc 메뉴 슬라이드다운(전체)
  $('.pc_menu > ul > li').mouseenter(function(){
  $('.pc_menu .sub_nav').show();
  $('.pc_menu').addClass("active");
  });
  
  $('.pc_menu > ul > li').mouseleave(function(){
  $('.pc_menu .sub_nav').hide();
  $('.pc_menu').removeClass("active");
    });

  //모바일 메뉴
  $(".mo_menu_btn").click(function(){
    $('.mobile_menu_inner').addClass("active")
  });

  




  // $(".mobile-nav .gnav-dep3").parent().addClass("is-sub");
  // $("#gnav-m .btn-all-menu").remove();

  // var $headerNav = $(".mobile-nav");
  // var $btn = $(".btn-mobile-menu");

  // $btn.click(function(){
  //     if(!$(this).hasClass("active")){
  //         gnavOpen();                
  //     }else{
  //         gnavClose();                
  //     }            
  // });

  // function gnavOpen(){
  //     $headerNav.addClass("active");
  //     $btn.addClass("active");
  //     $("html").css("overflow", "hidden");
  // }
  // function gnavClose(){
  //     $headerNav.removeClass("active");
  //     $btn.removeClass("active");
  //     $("html").css("overflow", "auto");
  // }

  // $(".mobile-nav .gnav-dep1 > li > a").click(function(e){
  //     e.preventDefault();
  //     $(this).parent().toggleClass("active");
  // });
  // $(".mobile-nav .gnav-dep2 > li.is-sub > a").click(function(e){
  //     e.preventDefault();
  //     $(this).parent().toggleClass("active");
  // });




  // 메인 배너 슬라이드 
  var main_banner_swiper = new Swiper(".main_banner .swiper-container", {
    spaceBetween: 30,    // 슬라이드 사이 여백
    slidesPerView : 'auto', // 한 슬라이드에 보여줄 갯수
    centeredSlides: true,    //센터모드
    //autoHeight : true,
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

  //top 버튼 실행
  const header_top = document.querySelector('.header_top')
  const top_btn = document.querySelector('.top_btn')

  top_btn.addEventListener('click', () => {
    header_top.scrollIntoView({ behavior: 'smooth' , block: 'nearest' })
  });




	
});

