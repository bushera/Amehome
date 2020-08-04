$(function(){
		
		$("#cancel0").click(function(){
		$("main").show();
		$("#preload-page").delay(50).fadeOut(800);
		});
		
  
	});


var prev, next, h1, menu, topfloor,imgbody;
    
     
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
	  topbar-img = document.getElementById("topbar-img");
	 
      
    if (menu.style.display == "none")
    {
        menu.style.display = "block";
        imgbody.style.display = "none";
		topbar-img.style.display = "block";
        downbar.style.display = "block";
		fb.style.display = "block";
		ig.style.display = "block";
		wa.style.display = "none";
        }
        
        
        else{ menu.style.display = "none";  		
              imgbody.style.display = "block";
			  topbar-img.style.display = "none";
              downbar.style.display = "none";  
			  fb.style.display = "none";
		      ig.style.display = "none";
		      wa.style.display = "none";
        }
    
   }
   
   
   function change(){
	document.location.href="https://amehegwuh.netlify.com";
   }