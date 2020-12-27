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


$('.cryistals-wrapper').scroll(function() {
   var wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > wH){
       $('.leaderboard__item--user-position').removeClass('fixed');
   } else {
     $('.leaderboard__item--user-position').addClass('fixed');
   }
});

$(function(){
$(".lottery-tab").click(function() { 
  $(".lottery-tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".lottery-tab__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


});
var container = $("#container");
var box = $(".box");

var width  = 50;
var height = 50;
var rows   = 12;
var cols   = 12;
var snap   = 50;

for (var i = 0; i < rows * cols; i++) {
    var y = Math.floor(i / cols) * height;
    var x = (i * width) % (cols * width);
    $("<div grid-cell></div>").css({ top: y, left: x }).prependTo(container);
}

Draggable.create(box, {
    bounds: container,
    onDrag: onDrag
});

function onDrag() {

    TweenLite.to(box, 0.5, {
        x: Math.round(this.x / snap) * snap,
        y: Math.round(this.y / snap) * snap,
        ease: Back.easeOut.config(2)
    });   
}





