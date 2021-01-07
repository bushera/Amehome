
$(function(){
		
		
	$("main").show();
	$("#preload-page").delay(5000).fadeOut(1000);



	$("#menu-trigger").click(function(){
		$("#menubar").animate({height: "8%"},700);
		$("#menu-close").css("display", "block");
		$("#fb").css("display", "block");
		$("#ig").css("display", "block");
	});
	

	$("#menu-close").click(function(){
		$("#menubar").animate({height: "0%"},700);
		$("#menu-close").css("display", "none");
		$("#fb").css("display", "none");
		$("#ig").css("display", "none");
	});
	
	

	$("#news-trigger").click(function(){
		$("#news-page").animate({height: "100%"},1000);
		$("#news-roll").animate({height: "99.94%"},700);
		$("#slide1").css("display", "block");
		$("#menubar").css("display", "none");
	});
	
	
	
	$("#cancel0").click(function(){
		$("#news-page").animate({height: "0%"},1000);
		$("#news-roll").animate({height: "0%"}, 700);
		$("#slide1").css("display", "none");
		$("#menubar").css("display", "block");
	});
	
	
	
	$("#subscribe").click(function(){
		$("#subscribe-cover").css("display", "block");		
		
	});
	
	$("#cancel1").click(function(){
		$("#subscribe-cover").css("display", "none");		
	});
	
	$("#email-sub0").keydown(function(){
		$("#btn-sub0").css("display", "block");
	});
	






	

	$("#menu-cover").click(function(){
		$("#menu-cover").css("display", "none");
		$("#close-trigger").css("display", "block");
		$("#offslide").animate({left: "0%"}, 800);
		$("#offslide-btn").css("display", "none");
		$("#offslide-h1").animate({left: "15%"} ,900);
		$("#offslide-downbar").animate({top: "78%"} ,500);
		$("#offslide-downbar").animate({width: "100%"} ,700);
		$("#menu-cover").off(click);
	});

	$("#close-trigger").click(function(){
		$("#menu-cover").css("display", "block");
		$("#offslide").animate({left: "-100%"}, 800);
		$("#offslide-btn").css("display", "block");
		$("#offslide-h1").animate({left: "-70%"}, 900);
		$("#offslide-downbar").animate({bottom: "-108%"} ,500);
		$("#offslide-downbar").animate({width: "0%"} ,300);
		$("#close-trigger").css("display", "block");
		$("#close-trigger").off(click);
	});


	

	$("#works-span").click(function(){
	$("#down").animate({height: "13%"}, 800);
	$("#contact").animate({top: "58%"}, 500);
	$("#exhibition").animate({top: "68%"}, 500);
	$("#works-span").css("display", "none");
	$("#works-span2").css("display", "block");
	$("#mob-year").css("display", "block");
	$("#mob-series").css("display", "block");
	$("#mob-year").animate({bottom: "0%", opacity: ".3"}, 800);
	$("#mob-series").animate({bottom: "35%", opacity: ".3"}, 800);
	$("#offslide-downbar").animate({bottom: "-108%"} ,400);
	$("#offslide-downbar").animate({width: "0%"} ,550);
	$("#works-span").off(click);
	});

	$("#works-span2").click(function(){
	$("#down").animate({height: "0%"}, 800);
	$("#contact").animate({top: "48%"}, 1000);
	$("#exhibition").animate({top: "58%"}, 1000);
	$("#works-span").css("display", "block");
	$("#works-span2").css("display", "none");
	$("#mob-year").animate({bottom: "0%", opacity: "0"}, 800);
	$("#mob-series").animate({bottom: "35%", opacity: "0"}, 800);
	$("#offslide-downbar").animate({top: "78%"} ,500);
	$("#offslide-downbar").animate({width: "100%"} ,700);
	$("#works-span2").off(click);
	});




	
	

});



	








