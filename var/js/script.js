$('.menu-btn').on('click', function(e){
	e.preventDefault;
	$(this).toggleClass('menu-btn-active');
	$('.menu-nav').toggleClass('menu-nav-active');
	
});
var $top = $(".top")
$(window).on("scroll", function(){
	if($(window).scrollTop() >= 30){
		$top.fadeIn();
	}else {
		$top.fadeOut();
	}
});
$top.on("click", function(){
	$("html, body").animate({scrollTop:0}, 900)
});