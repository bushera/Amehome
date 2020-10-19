$(function(){
		
		$("#cancel0").click(function(){
		$("main").show();
		$("#preload-page").delay(50).fadeOut(800);
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


var prev, next, h1, menu, topfloor, slider, imgbody;
    
     
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
		ig.style.display = "block";
		wa.style.display = "none";
		slider.style.display = "block";
        }
        
        
        else{ menu.style.display = "none";           
              imgbody.style.display = "block";
              downbar.style.display = "none";  
			  fb.style.display = "none";
		      ig.style.display = "none";
		      wa.style.display = "none";
			  slider.style.display = "block";
        }
    
   }
   
   
   function change(){
	document.location.href="https://amehegwuh.netlify.com";
   }