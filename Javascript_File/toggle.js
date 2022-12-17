$(document).ready(function(){
 	$("#nav").addClass("js");
 	$("#nav").addClass("js").after(`<div id="menu"><i class="fa-solid fa-bars"></i></div>`);
 	$("#menu").click(function(){
 		$(".nav_mid").css({"position":"absolute",
    						"top":"150px",
 									})
 		$(".col").css({"border":"2px solid white",
 						"padding":"5px",
 						"border-radius":"5px",
 						"width":"97vw",
 						"background":"white",
 						"color":"black"
 						})
 		$(".nav_mid").slideToggle();

 		// for resize window screen

 		$(window).resize(function(){
 		 	if($(window).innerWidth()>1279){
 		 		$(".nav_mid").removeAttr("style");
 		 		$(".col").removeAttr("style");
 		 }
 	})
 })
})
