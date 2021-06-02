

	function yScroll(){
		var menubar = document.getElementById("menubar");
		yPos = window.pageYOffset;

		if(yPos > 523 ){
			menubar.style.display = "block";
			
		}
		
		if(yPos < 523 ) {
			menubar.style.display = "none";
			
		}
	}

window.addEventListener("scroll", yScroll);






