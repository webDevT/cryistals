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
/*
See https://greensock.com/draggable/ for details. 
This demo uses InertiaPlugin which is a membership benefit of Club GreenSock, https://greensock.com/club/
*/
gsap.registerPlugin(InertiaPlugin);

var $snap = $("#snap"),
  $liveSnap = $("#liveSnap"),
  $container = $("#container"),
  gridWidth = $("body").width() / 5,
  gridHeight = 100,
  gridRows = 6,
  gridColumns = 5,
  i, x, y;

//loop through and create the grid (a div for each cell). Feel free to tweak the variables above
for (i = 0; i < gridRows * gridColumns; i++) {
  y = Math.floor(i / gridColumns) * gridHeight;
  x = (i * gridWidth) % (gridColumns * gridWidth);
  $("<div/>").css({position:"absolute", width:gridWidth-1, height:gridHeight-1, top:y, left:x}).prependTo($container);
}

//set the container's size to match the grid, and ensure that the box widths/heights reflect the variables above
gsap.set($container, {height: gridRows * gridHeight + 1, width: gridColumns * gridWidth + 1});
gsap.set(".box", {width:gridWidth, height:gridHeight, lineHeight:gridHeight + "px"});
gsap.set("#box2", {left: gridWidth * 2})

//the update() function is what creates the Draggable according to the options selected (snapping).
function update() {
  var snap = $snap.prop("checked"),
      liveSnap = $liveSnap.prop("checked");
  Draggable.create(".box", {
    bounds: $container,
    edgeResistance: 0.65,
    type: "x,y",
    inertia: true,
    autoScroll: true,
    liveSnap: liveSnap,
    snap:{
      x: function(endValue) {
        return (snap || liveSnap) ? Math.round(endValue / gridWidth) * gridWidth : endValue;
      },
      y: function(endValue) {
        return (snap || liveSnap) ? Math.round(endValue / gridHeight) * gridHeight : endValue;
      }
    }
  });
}


update();