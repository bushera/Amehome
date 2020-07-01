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
      
    if (menu.style.display == "none")
    {
        menu.style.display = "block";
        topfloor.style.width = "25px";
        imgbody.style.display = "none";
        downbar.style.display = "block";
		fb.style.display = "block";
		ig.style.display = "block";
		wa.style.display = "none";
        }
        
        
        else{ menu.style.display = "none";
              topfloor.style.width ="18px";
              imgbody.style.display = "block";
              downbar.style.display = "none";  
			  fb.style.display = "none";
		      ig.style.display = "none";
		      wa.style.display = "none";
        }
    
   }
   
   function change(){
	document.location.href="http://amehegwuh.netlify.com";
   }