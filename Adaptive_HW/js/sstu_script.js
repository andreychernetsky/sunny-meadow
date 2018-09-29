$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:3,
  loop:true,
  autoplay:true,
  autoplayTimeout:2000,
  margin:2,
  mouseDrag:true,
  merge:true,
  slideTransition:'.3s'
  });
  $(".btn-nav").on("click", function(){
		var target = $(this).data("target");
		$(target).toggleClass("nav__list--open")
	});

});

// jQuery(function($) {
	
// });

