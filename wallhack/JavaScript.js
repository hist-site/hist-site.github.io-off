$(function(){
	$('.menu-btn').on('click', function(e) {
  		e.preventDefault();
  	$(this).toggleClass('menu-btn_active');
  	$('.menu').toggleClass('menu_active');
	});

	$('.menu-btn-on').on('click', function(e) {
		e.preventDefault();
	$('.menu-info').toggleClass('menu-info_active');
	$('.wrapper').toggleClass('wrapper_active');
	});

	$('.menu-btn-off').on('click', function(e) {
		e.preventDefault();
	$('.menu-info').toggleClass('menu-info_active');
	$('.wrapper').toggleClass('wrapper_active');
	});
});