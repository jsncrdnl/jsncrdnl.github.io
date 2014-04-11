	

$(function(){

	$("#mySpecs h2:eq(0)").animate({ 'margin-top':0, 'opacity':1.0}, 1500);
	$("#mySpecs h2:eq(1)").animate({ 'margin-top':0, 'opacity':1.0}, 2500);
	$("#mySpecs h2:eq(2)").animate({ 'margin-top':0, 'opacity':1.0}, 3500);
	$("#mySpecs h2:eq(3)").animate({ 'margin-top':0, 'opacity':1.0}, 4500);

	var availableHeight = $(window).height() - 600;	
	$("#container").css("margin-top", (availableHeight/2)+"px");
	//$("#ascensor div div")	.css("height",contentHeight+"px"); 
	
	var movieBlockHeight = (availableHeight / 3);
	$("#container").append(
		"<div class='movieBlock' style='position:fixed;top:0;left:0;width:100%;height:0;background:#1F1F1F;'></div>" + 
		"<div class='movieBlock' style='position:fixed;bottom:0;left:0;width:100%;height:0;background:#1F1F1F;'></div>"
	);
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
	
	//$("html,body").css("height", "100%");
	/*$("#container").css("margin-top", "0").css("margin-bottom", "0").css("height",availableHeight+"px"); //.css("height", "100%");
	$("#container").animate({
		//"height": availableHeight+"px", //"550px",
		"margin-bottom":marginHeight+"px", //"90px",
		"margin-top":marginHeight+"px" //"90px"
	}, 1500);*/
	
	spectrum(); function spectrum(){ currColor = 'rgb('+(Math.floor(Math.random()*256))+','+ 
	(Math.floor(Math.random()*256))+','+ (Math.floor(Math.random()*256))+')'; 
	if(currShadow=="80px") currShadow = "40px";
	if(currShadow=="40px") currShadow = "80px";
	$('#signature').animate( { color : currColor, textShadow : currColor+' 0px 0px '+currShadow }, colorAnimDuration);
	$("#menu a, #menu a:visited").css("color", currColor);
	//$('.glow').animate( { color : currColor, textShadow : currColor+' 0px 0px 40px ' }, colorAnimDuration);
	setTimeout( spectrum, colorAnimDuration );}	
	
	//$.firefly({images : ['assets/img/1.jpg', 'assets/img/2.jpg'],total : 50}); 		
	//$.firefly({images : ['assets/img/sprite1.png', 'assets/img/sprite2.png'],total : 100});	
	
	/*
	$('#ascensor').ascensor({
		ascensorName: 'ascensor',
		childType: 'div',
		ascensorFloorName: ['Home','Implementation','HTML','Jquery','CSS','martphone ','Credits'],
		time: 1000,
		windowsOn: 0,
		direction: "chocolate",
		ascensorMap: [[1,0],[1,1],[2,1],[2,2],[2,3],[1,3]],
		keyNavigation: true,
		queued: false,
		queuedDirection: "y",
		overflow:"hidden"
	});
	*/
	/*$("#menu a h2").each(function(index, value)
	{
		$(this)	.css("display", "inline-block")
				.css("height", $(this).height()+"px")
				.css("width", $(this).width()+"px");
	});*/
	
	$("#menu a h2").hover(function(){ 	
		//$(this).shuffleLetters({"step"	: 1});	
		$(this).stop().animate({textShadow: currColor + ' 0px 0px 30px;'}, 2000);
	},function(){
		$(this).stop().animate({textShadow:'#ffffff 0px 0px 30px;'}, 2500);	
	});
	
	var currentEl = "";
	$("#menu a").click(function()
	{
		currentEl = "#" + $(this).attr('rel');
		setTimeout(function(){
			$("#ascensor").children("div").stop().animate({opacity:0.0},1000);
			$("#ascensor").children("div").css('display', 'none');
			$(currentEl).css('display', 'block').css('opacity', '0.0');
			$(currentEl).stop().animate({opacity:1.0}, 1000);
		}, 900);
		
		$('#ascensor div p').animate({
				color: 		'transparent', 
				textShadow: '#000000 0px 0px 10px'}, 
				1000)		.animate({
				color: 		'black', 
				textShadow: '#000000 0px 0px 0px'}, 
				1000);	

		$('#ascensor div img').animate({
				opacity: 		'0.2' }, 
				1000)		.animate({
				opacity: 		'1.0' }, 
				1000);					
	});
	
	$("#adminBlock").hover(function(){ 	
		$(this).stop().animate({ "bottom":"0", "left":"0" }, 1000);
	},function(){
		$(this).stop().animate({ "bottom":"-123px", "left":"-335px" }, 1000);	
	});
	
});
