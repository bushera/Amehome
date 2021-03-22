

$(function(){
		
		
	$("main").show();
	$("#preload-page").delay(3800).fadeOut(1200);



	
	$('.tlt').textillate({ in: { effect: 'rollIn', delayScale : 4, delay : 30,} });
	

	
	
	

	$("#menu-btn").click(function(){
		$("#close-trigger").css("display", "block");
		$("#offslide").animate({left: "0%"}, 600);
		$("#slider").animate({left: "-100%"}, 800);
		$("#showbar").animate({left: "-100%"}, 800);
		$(".navbar-house").animate({right: "-100%"}, 500);
		$("#offslide-h1").animate({left: "15%"} ,900);
		$("#offslide-down-1").animate({bottom: "0%"} ,200);
		$("#offslide-down-1").animate({width: "100%"} ,400);
		$("#menu-btn").off(click);
	});

	$("#close-trigger").click(function(){
		$("#offslide").animate({left: "-100%"}, 600);
		$(".navbar-house").animate({right: "0%"}, 400);
		$("#slider").animate({left: "0%"}, 500);
		$("#showbar").animate({left: "0%"}, 500);
		$("#offslide-h1").animate({left: "-70%"}, 900);
		$("#close-trigger").css("display", "block");
		$("#offslide-down-1").animate({bottom: "-108%"} ,400);
		$("#offslide-down-1").animate({width: "0%"} ,300);
		$("#close-trigger").off(click);
	});


	

	



	
	

});





	








