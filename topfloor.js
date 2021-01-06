
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
	
	
	

});


var prev, next, h1, menu, topfloor, topfloor2, slider, slider1, imgbody;

 
  function downmenu(menu){
  menu = document.getElementById(menu);
  h1 = document.getElementById("h1");
  topfloor = document.getElementById("topfloor");
  imgbody = document.getElementById("imgbody");
  downbar = document.getElementById("downbar");
  fb = document.getElementById("fb");
  ig = document.getElementById("ig");
  wa = document.getElementById("wa");
  topbar = document.getElementById("topbar");
  slider = document.getElementById("slider");
  
if (menu.style.display == "none")
{
	menu.style.display = "block";
	imgbody.style.display = "none";
	downbar.style.display = "block";
	fb.style.display = "block";
	slider.style.display = "block";
	ig.style.display = "block";
	wa.style.display = "none";
	}
	
	
	else{ menu.style.display = "none";           
		  imgbody.style.display = "block";
		  downbar.style.display = "none"; 
		  slider.style.display = "block";			  
		  fb.style.display = "none";
		  ig.style.display = "none";
		  wa.style.display = "none";
	}

}







