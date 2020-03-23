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
      
    if (menu.style.display == "none")
    {
        menu.style.display = "block";
        topfloor.style.width = "38px";
        imgbody.style.display = "none";
        downbar.style.display = "block";
		fb.style.display = "block";
		ig.style.display = "block";
		wa.style.display = "block";
        }
        
        
        else{ menu.style.display = "none";
              topfloor.style.width ="33px";
              imgbody.style.display = "block";
              downbar.style.display = "none";  
			  fb.style.display = "none";
		      ig.style.display = "none";
		      wa.style.display = "none";
        }
    
   }
   
   
  /* var num = 0; 
   var downbarlowelem;
   var image = 	["<img src='/storage/emulated/0/Pictures/facebk.jpg'>"  "<img src = '/storage/emulated/0/Pictures/instagm.jpg'>", "<img src = '/storage/emulated/0/Pictures/twitterr.jpg'>", "<img src = '/storage/emulated/0/Pictures/whatsap.jpg'>"];
   
   function imgnext(){
   num++;
 
   if(num > (image.length-1)){
        num = 0;
        }
     downbarlowelem.style.opacity = 0;
      
      setTimeout('imgslide()', 500);
   }
   
   function imgslide(){
   downbarlowelem.innerHTML = image[num];
   downbarlowelem.style.opacity = 1;
   
   setTimeout('imgnext()', 2000);
   
   }
   
    $(function(){
  $("#fb").click(function(){
  $("#fbdown").toggle(1300);
  $("#igdown").css("display","none");
  $("#wadown").css("display","none");
  }); 
  
  $("#ig").click(function(){
  $("#igdown").toggle(1300);
  $("#fbdown").css("display","none");
  $("#wadown").css("display","none")
  }); 
  
  $("#wa").click(function(){
  $("#wadown").toggle(1300);
  $("#fbdown").css("display","none");
  $("#igdown").css("display","none")
  });  
  
  })*/
   
   
   
   
