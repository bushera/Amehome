
$(function(){
		
		
	$("main").show();
	$("#preload-page").delay(5000).fadeOut(1000);



	
	
	

	
	
	

	$("#menu-btn").click(function(){
		$("#close-trigger").css("display", "block");
		$("#offslide").animate({left: "0%"}, 500);
		$("#slider").animate({left: "-100%"}, 700);
		$("#showbar").animate({left: "-100%"}, 700);
		$("#menu-btn").css("display", "none");
		$("#offslide-h1").animate({left: "15%"} ,900);
		$("#offslide-down-1").animate({bottom: "0%"} ,200);
		$("#offslide-down-1").animate({width: "100%"} ,400);
		$("#menu-btn").off(click);
	});

	$("#close-trigger").click(function(){
		$("#offslide").animate({left: "-100%"}, 500);
		$("#menu-btn").css("display", "block");
		$("#slider").animate({left: "0%"}, 500);
		$("#showbar").animate({left: "0%"}, 500);
		$("#offslide-h1").animate({left: "-70%"}, 900);
		$("#close-trigger").css("display", "block");
		$("#offslide-down-1").animate({bottom: "-108%"} ,400);
		$("#offslide-down-1").animate({width: "0%"} ,300);
		$("#close-trigger").off(click);
	});


	

	



	
	

});



	








