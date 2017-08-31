$(document).ready(function(){
	$("#h1").click(function(){
		$("p").css({"color":"red" ,
		"background-color": "green"});
		$("img").slideToggle(); 
		$("img").css("border","25px solid green")
	});
});

