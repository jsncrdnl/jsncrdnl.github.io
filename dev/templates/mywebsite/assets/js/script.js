$(function(){
		
	var colorAnimDuration = 4000;
		
	var container = $("#signature"); 
	container.shuffleLetters({
		"step"	: 15
	});	
	
	spectrum(); function spectrum(){ var hue = 'rgb('+(Math.floor(Math.random()*256))+','+ 
	(Math.floor(Math.random()*256))+','+ (Math.floor(Math.random()*256))+')'; 
	$('#signature').animate( { textShadow : ' #FFFF26 10px 10px 10px' }, colorAnimDuration);
	$('#signature').animate( { color : hue }, colorAnimDuration); setTimeout( spectrum, colorAnimDuration );}	
	
	$.firefly({images : ['assets/img/1.jpg', 'assets/img/2.jpg'],total : 100}); 		
	
	
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
});

