$(function(){

$('.cryistals-header__menu').click(function(){
	$(this).toggleClass('active');
})

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".cryistals-header__menu"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div.removeClass('active');

    }
  });
});

$('.cryistals-slider').slick({
  slidesToShow: 1,
  arrows:false,
  dots:false,
  centerPadding: '50px',
  centerMode: true
 
})





});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".search-modal"); 
    var div2 = $(".game");
    if (!div2.is(e.target) 
        && div2.has(e.target).length === 0) {
      div.fadeOut();

    }
  });
});


$(window).scroll(function() {
   var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('.leaderboard__item--user-position').removeClass('fixed');
       $('.leaderboard__item--user-position').addClass('transition');
   } else {
     $('.leaderboard__item--user-position').addClass('fixed');
     $('.leaderboard__item--user-position').removeClass('transition');
   }
});

$(function(){
$(".lottery-tab").click(function() { 
  $(".lottery-tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".lottery-tab__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


});