
for(var j, x, i = imgList.length; i; j = parseInt(Math.random() * i), x = imgList[--i], imgList[i] = imgList[j], imgList[j] = x);
  
var overlayOpacity = 0.45;
  
$(document).ready(function(){	
	
	$.vegas('slideshow', {
	  delay:10000,
	  preload: true,
	  backgrounds:[
		{ src:imgList[0], fade:2500 },
		{ src:imgList[1], fade:2500 },
		{ src:imgList[2], fade:2500 },
		{ src:imgList[3], fade:2500 },
		{ src:imgList[4], fade:2500 },
		{ src:imgList[5], fade:2500 },
		{ src:imgList[6], fade:2500 },
		{ src:imgList[7], fade:2500 },
		{ src:imgList[8], fade:2500 },
		{ src:imgList[9], fade:2500 },
		{ src:imgList[10], fade:2500 },
		{ src:imgList[11], fade:2500 },
		{ src:imgList[12], fade:2500 },
		{ src:imgList[13], fade:2500 }
	  ]
	})('overlay', {
	  src:'vegas/overlays/20.png',
	  opacity: overlayOpacity
	});		

});

