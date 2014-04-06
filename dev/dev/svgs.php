<?php
	session_start();
?>


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Jsn.crdnl</title>
        
        <!-- Our CSS stylesheet file -->
		<link type="text/css" rel="stylesheet" href="../assets/css/navigation.css">
		<link type="text/css" rel="stylesheet" href="../assets/css/lightbox.css">
		<link rel='stylesheet' href='../assets/css/spectrum.css' />
        <link rel="stylesheet" href="../assets/css/styles.css" />
		<link href='http://fonts.googleapis.com/css?family=Orbitron:900' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Iceland' rel='stylesheet' type='text/css'>
        <link rel='stylesheet' type='text/css' href='../assets/css/box-lid.css'>
        <!--[if lt IE 9]>
          <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
		
		<style>
			html{
				height: 100%;
			}
			body{
				overflow-y: scroll;
				height : 100%;
			}
			.imgContainer{
			  position:relative;
			  display:inline-block;
			  margin:10px;
			}
			.imgContainer img{
			  display:block;
			}
			.border-top-left{
			  top:0; left:0;
			}
			.border-bottom-left{
			  bottom:0; left:0;  
			}
			.border-top-right{
			  top:0; right:0;  
			}
			.border-bottom-right{
			  bottom:0; right:0; 
			}
			.custom-border{
			  position:absolute;
			  display:inline-block;
			  background:#000000; 
			}
			.border-vert-growing{
			  height:0;
			  width:5px;  
			  
			}
			.border-vert-reducing{
			  height:100%;
			  width:5px;  
			  
			}
			.border-hori-growing{
			  height:5px;  
			  width:0;
			  
			}
			.border-hori-reducing{
			  height:5px;  
			  width:100%;  
			}
			
			/* OVERRIDES */
			.box-lid-menu {
				width: 100px;
			}
			.box-lid-icon:before {
			content: '';
			font-family: fantasy;
			font-size: 45px;
			position: absolute;
			width : auto;
			height: auto;
			background: none;
			box-shadow: none;
			}
		</style>
		
    </head>
     
    <body>
		
		 <!-- BEGIN OF NAVIGATION CONTENTS -->
		<div class='box-lid-menu'> <div class='box-lid-icon'><img src="../assets/img/Starbucks.svg" width="90" style="margin-left: -20px;" /></div> <nav>
		  <a href="../index.php" style="font-size:30px;margin-left:15px;">Accueil du site</a>
		  <a href="index.php" style="font-size:30px;margin-left:15px;">Modif d'images</a>
		  
		 <!-- BEGIN OF MAIN CONTENT -->		  
		</nav> </div> <div class='box-lid' style='height:100%;'> <div class='box-lid-content' style='height:100%;'>
		 
			<div id="container" style='height:100%; width:auto;margin-left:100px' >
			
				<div id="signature" style="font-size:50px;line-height:60px;text-align:left;width:250px;display:inline-block;"> 
					&nbsp;jsn.crdnl&nbsp;
				</div> 
				 
					  <!--a href="../index.php" style="font-size:50px;margin-left:15px;">Accueil du site</a>
					  <a href="index.php" style="font-size:50px;margin-left:15px;">Modif d'images</a-->
				
				<div style="position:relative; height:100%;">
					<?php 
						$files = scandir("img");
						
						foreach ($files as $key => $value) 
							if( $value!="." && $value != ".." )
								echo "<div class='imgContainer'><img title='". $value ."' src='img/" . $value . "' style='width:300px; float:left;' /></div>\n";					
										
					?> 
					<br style='clear:both;'/>
				</div>
				
				<div id="colorInputs">
				</div>
				
			</div>
			
		 <!-- END OF MAIN CONTENT -->		
		 </div> </div>
		
		<script src="../assets/js/jquery_1-7-2.min.js"></script>
		<script src='../assets/js/jquery.box-lid.min.js'></script>
		<script>
			var borderAnimSpeed = 500;

			$(document).ready(function()
			{
			  //alert("dazed"); 
			  $(".imgContainer").append(
				"<div class='custom-border border-hori-reducing border-top-left'></div>"+
				"<div class='custom-border border-vert-growing border-top-left'></div>"+
				"<div class='custom-border border-hori-growing border-bottom-left'></div>"+
				"<div class='custom-border border-vert-reducing border-bottom-left'></div>"+
				"<div class='custom-border border-hori-growing border-top-right'></div>"+
				"<div class='custom-border border-vert-reducing border-top-right'></div>"+
				"<div class='custom-border border-hori-reducing border-bottom-right'></div>"+
				"<div class='custom-border border-vert-growing border-bottom-right'></div>"
			  );
			  $(".imgContainer").hover(function(){
				$(this).find(".border-hori-reducing").stop().animate({ width : "20px" }, borderAnimSpeed);
				$(this).find(".border-vert-reducing").stop().animate({ height : "20px" }, borderAnimSpeed);
				$(this).find(".border-hori-growing").stop().animate({ width : "20px" }, borderAnimSpeed);
				$(this).find(".border-vert-growing").stop().animate({ height : "20px" }, borderAnimSpeed);
			  }, function(){
				//console.log("aaaaa");
				$(this).find(".border-hori-reducing").stop().animate({ width : "100%" }, borderAnimSpeed);
				$(this).find(".border-vert-reducing").stop().animate({ height : "100%" }, borderAnimSpeed);
				$(this).find(".border-hori-growing").stop().animate({ width : "0" }, borderAnimSpeed);
				$(this).find(".border-vert-growing").stop().animate({ height : "0" }, borderAnimSpeed); 
			  });
			  
			  $('.box-lid-menu').boxLid();
			});
		</script>	
	</body>
	
</html>