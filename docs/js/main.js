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