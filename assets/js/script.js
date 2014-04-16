	

$(function(){
	$("#admin_credentials")	.css("display", "inline");
	$("#admin_loading")		.css("display", "none");
	$("#admin_logged_in")	.css("display", "none");

	$("#mySpecs h2:eq(0)").animate({ 'margin-top': '10px', 'opacity':1.0}, 1500);
	setTimeout(function(){
		$("#mySpecs h2:eq(1)").animate({ 'margin-top': '10px', 'opacity':1.0}, 1500);
	}, 1000);
	setTimeout(function(){
		$("#mySpecs h2:eq(2)").animate({ 'margin-top': '10px', 'opacity':1.0}, 1500);
	}, 2000);
	setTimeout(function(){
		$("#mySpecs h2:eq(3)").animate({ 'margin-top': '10px', 'opacity':1.0}, 1500);
	}, 3000);
	setTimeout(function(){
		$("#ascensor div div").animate({ 'opacity':1.0}, 1500);
		$('.editableAware').realshadow();
	}, 4000);
	

	var availableHeight = $(window).height() - 600;	
	$("#container").css("margin-top", (availableHeight/2)+"px");
	
	var movieBlockHeight = (availableHeight / 3);
	//$("#container").append(
	//	"<div class='movieBlock' style='position:fixed;top:0;left:0;width:100%;height:0;background:#1F1F1F;'></div>" + 
	//	"<div class='movieBlock' style='position:fixed;bottom:0;left:0;width:100%;height:0;background:#1F1F1F;'></div>"
	//);
	$(".movieBlock").animate({
		"height" : movieBlockHeight+"px"
	}, 1500);
		
	var colorAnimDuration = 8000;
	var currColor = "#73FFDC";
	var currShadow = "40px";
		
	$("#signature").shuffleLetters({
		"step"	: 15
	});	
	
	$(window).resize(function()
	{		
		availableHeight = $(window).height() - 600;
		$("#container").css("margin-top", (availableHeight/2)+"px");
		
		movieBlockHeight = (availableHeight / 3);
		$(".movieBlock").css("height", movieBlockHeight+"px");
	}); 
		
	spectrum(); function spectrum(){ currColor = 'rgb('+(Math.floor(Math.random()*256))+','+ 
	(Math.floor(Math.random()*256))+','+ (Math.floor(Math.random()*256))+')'; 
	if(currShadow=="80px") currShadow = "40px";
	if(currShadow=="40px") currShadow = "80px";
	$('#signature').animate( { color : currColor, textShadow : currColor+' 0px 0px '+currShadow }, colorAnimDuration);
	/*$("#mySpecs a, #mySpecs a:visited").css("color", currColor);*/
	$("#mySpecs h2 span").animate( { color : currColor }, colorAnimDuration);
	setTimeout( spectrum, colorAnimDuration );}	
	
	/*setTimeout(function(){
		$("#mySpecs h2 a").hover(function(){ 	
			$(this).stop().animate({textShadow: currColor + ' 0px 0px 30px;'}, 2000);
		},function(){
			$(this).stop().animate({textShadow:'#ffffff 0px 0px 30px;'}, 2500);	
		});
	}, 4000);*/
	
	setTimeout(function(){
		$('#mySpecs h2 a').css("position", "relative");
		$('#mySpecs h2').each(function(){
			$(this).find("a").html( "<span>" + $(this).find("a").text() + "</span>" + $(this).find("a").html() );
			$(this).find('span').css("display", "none");
			$(this).find('span').css("position", "absolute");
			$(this).find('span').css("z-index", "10");
			$(this).find('span').css("top", "0");
			$(this).find('span').css("left", "0");
			$(this).find('span').css("overflow", "hidden");
			$(this).find('span').css("white-space", "nowrap");
			$(this).find('span').css("width", "0");
			$(this).find('span').css("display", "block");
			$(this).find('span').css("text-decoration", "underline");
		
			$(this).hover(function(){
				$(this).find('span').stop().animate( { width: $(this).find("a").width(), color : currColor }, 1000 );
			},function(){        
				$(this).find('span').stop().animate( { width: 0, color : currColor }, 1000);			
			});
		});
	}, 4000  );
		
	$("#adminBlock").hover(function(){ 
		$("#container").stop().animate({
			"-webkit-transform":	"rotateY(-25deg)",
			"translateZ":		"43px", 
			"rotateX":		"13deg", 
			"translateX":		"107px", 
			"scale":		"0.75"},
		1000);
		$(this).stop().animate({ "bottom":"0", "left":"0" }, 1000);
	},function(){
		$(this).stop().animate({ "bottom":"-123px", "left":"-335px" }, 1000);	
	});
	
});
