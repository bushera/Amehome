
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
		$("#menu-btn").off(click);
	});

	$("#close-trigger").click(function(){
		$("#offslide").animate({left: "-100%"}, 500);
		$("#menu-btn").css("display", "block");
		$("#slider").animate({left: "0%"}, 500);
		$("#showbar").animate({left: "0%"}, 500);
		$("#offslide-h1").animate({left: "-70%"}, 900);
		$("#close-trigger").css("display", "block");
		$("#close-trigger").off(click);
	});


	

	



	
	

});



	








