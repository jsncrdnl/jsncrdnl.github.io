<?php
	session_start();	
	if( isset($_POST, $_POST["uName"], $_POST["uPass"]) && $_POST["uName"]=="jsn" && $_POST["uPass"]=="jsn" )
		$_SESSION['administrator'] = "Active";		
	else if( isset($_POST, $_POST["admin_log_out"], $_SESSION, $_SESSION['administrator']) && $_POST["admin_log_out"]=="true" )
		unset($_SESSION['administrator']);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>Jsn.crdnl</title>
        
        <!-- Our CSS stylesheet file -->
		<link type="text/css" rel="stylesheet" href="assets/css/navigation.css">
		<link type="text/css" rel="stylesheet" href="assets/css/lightbox.css">
        <link rel="stylesheet" href="assets/css/styles.css" />
		<link href='http://fonts.googleapis.com/css?family=Orbitron:900' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Iceland' rel='stylesheet' type='text/css'>
        
        <!--[if lt IE 9]>
          <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
		
    </head>
     
    <body>
			
		<div id="container">
		
				<?php if( isset($_SESSION, $_SESSION['administrator']) && $_SESSION['administrator']=="Active" ) { ?>
					<div id="adminBlock" class="loggedIn">
						<p>Mode administrateur</p>
						<form method="post" action="?">
							<input type="hidden" value="true" name="admin_log_out" id="admin_log_out" />
							<input type="submit" value="Déconnexion" name="uDeconn" id="uDeconn" />
						</form>		
					</div>
					
					<div id="mainAdminPanel" style="z-index: 100;position: fixed;top: -2px;left: -2px;padding: 10px;background: #f1f1f1;border-radius: 0 0 5px 0;border: 2px solid black;">
						<p>
							<span style="width: 285px;display: inline-block;">Couleur conteneur principal : </span>
							<a href="#" class="colorSwitch" rel="html" style="background: #f1f1f1; display: inline-block;width: 20px;height: 20px;margin-left: 5px;border: 1px solid black;"></a>
							<a href="#" class="colorSwitch" rel="html" style="background: rgb(193, 193, 252); display: inline-block;width: 20px;height: 20px;margin-left: 5px;border: 1px solid black;"></a>
							<a href="#" class="colorSwitch" rel="html" style="background: rgb(200, 240, 202); display: inline-block; width: 20px; height: 20px; border: 1px solid black; margin-left: 5px;"></a>
							<a href="#" class="colorSwitch" rel="html" style="background: rgb(240, 200, 226); display: inline-block; width: 20px; height: 20px; border: 1px solid black; margin-left: 5px;"></a>
						</p>
						<p>
							<span style="width: 285px;display: inline-block;">Couleur secondaire : </span>
							<a href="#" class="colorSwitch" rel=".movieBlock" style="background: rgb(31, 31, 31); display: inline-block;width: 20px;height: 20px;margin-left: 5px;border: 1px solid black;"></a>
							<a href="#" class="colorSwitch" rel=".movieBlock" style="background: rgb(47, 87, 47); display: inline-block;width: 20px;height: 20px;margin-left: 5px;border: 1px solid black;"></a>
							<a href="#" class="colorSwitch" rel=".movieBlock" style="background: rgb(87, 47, 53); display: inline-block; width: 20px; height: 20px; border: 1px solid black; margin-left: 5px;"></a>
							<a href="#" class="colorSwitch" rel=".movieBlock" style="background: rgb(37, 94, 133); display: inline-block; width: 20px; height: 20px; border: 1px solid black; margin-left: 5px;"></a>
						</p>
					</div>
					
				<?php } else { ?>	
					<div id="adminBlock" class="loggedOut">
						<p>Mode administrateur</p>
						<form method="post" action="?">
							<label for="uName">Login :</label><input type="text" value="" name="uName" id="uName" /><br/>
							<label for="uPass">Mot de passe :</label><input type="password" value="" name="uPass" id="uPass" /><br/>
							<input type="submit" value="Connexion" name="uConn" id="uConn" />
						</form>		
					</div>
				<?php } ?>
		
			<div id="signature"> 
				jsn.crdnl
			</div> 
			
			<!--nav id="navigationMap">
				<ul>
					<li><a class="ascensorLink ascensorLink0"></a></li>
					<li><a class="ascensorLink ascensorLink1"></a></li>
					<li><a class="ascensorLink ascensorLink2"></a></li>
					<li><a class="ascensorLink ascensorLink3"></a></li>
				</ul>
			</nav-->
			
			<div id="menu">			
				<a href="#" rel="qualif"><h2>Qualification</h2></a>
				<a href="#" rel="mobile"><h2>Développement mobile</h2></a>
				<a href="#" rel="web"><h2>Création de sites</h2></a>
				<a href="#" rel="contact"><h2>Contact</h2></a>
			</div>
			
			<div id='ascensor'>
				 <div id="qualif">
					<?php if( isset($_SESSION, $_SESSION['administrator']) && $_SESSION['administrator']=="Active" ) { ?>
						<div contenteditable="true">
					<?php } else { ?>
						<div>
					<?php } ?>
						<?php include("content1.htm"); ?>
					</div>
						<!--p>Qualification................................... Développeur</p>
						<p>Domaines d'action.......................... Sites web, lociciels, applications Android, etc.</p>
						<p>Connaissances web........................ HTML, CSS, PHP, JS, jQ, AJAX, CMS, etc.</p>
						<p>Connaissances logiciel................... C, C++, C#, Java, etc.</p>
						<p>Connaissances système................. Linux (Apache, Tomcat, Scripts, etc.)</p>
						<br/>
						<p>Ce dont je suis capable :</p>
						<p>&nbsp;&gt; maintenance et mise à jour de sites web,</p>
						<p>&nbsp;&gt;&nbsp;création de sites web personnels, de présentation d'une activité,</p>
						<p>&nbsp;&gt;&nbsp;création de sites web 2.0 (interaction avec les visiteurs),</p>
						<p>&nbsp;&gt;&nbsp;création d'applications / jeux en ligne,</p>
						<p>&nbsp;&gt;&nbsp;création de logiciels Windows (également Linux et Mac -en Java-),</p>
						<p>&nbsp;&gt;&nbsp;création d'applications pour smartphone (Android),</p>
						<p>&nbsp;&gt;&nbsp;administration de systèmes Linux,</p>
						<p>&nbsp;&gt;&nbsp;etc.</p-->
				</div>
				<div id="mobile">
					<div>
						<p>Développement d'application (pour usage personnel / non commercial) :</p>

						<p>Interface permettant l'accès aux horaires et fiches de films d'un célèbre cinéma de la région de Mons</p>
						<p>Cliquez sur l'une des images pour l'afficher dans un diaporama :</p>
						<p style="text-align:center;">
							<a href="assets/img/android/imagix/0.jpg" data-lightbox="imagix">
								<img src="assets/img/android/imagix/0.jpg" alt="cinemaMons 1" height="150" />
							</a>
							<a href="assets/img/android/imagix/1.jpg" data-lightbox="imagix">
								<img src="assets/img/android/imagix/1.jpg" alt="cinemaMons 2" height="150" />
							</a>
							<a href="assets/img/android/imagix/2.jpg" data-lightbox="imagix">
								<img src="assets/img/android/imagix/2.jpg" alt="cinemaMons 3" height="150" />
							</a>
						</p>

						<p>Interface permettant l'accès aux horaires des boxes du squash de l'Aramis club Mons</p>
						<p>Cliquez sur l'une des images pour l'afficher dans un diaporama :</p>
						<p style="text-align:center;">
							<a href="assets/img/android/aramis/0.jpg" data-lightbox="aramis">
								<img src="assets/img/android/aramis/0.jpg" alt="aramis 1" height="150" />
							</a>
							<a href="assets/img/android/aramis/1.jpg" data-lightbox="aramis">
								<img src="assets/img/android/aramis/1.jpg" alt="aramis 2" height="150" />
							</a>
							<a href="assets/img/android/aramis/2.jpg" data-lightbox="aramis">
								<img src="assets/img/android/aramis/2.jpg" alt="aramis 3" height="150" />
							</a>
							<a href="assets/img/android/aramis/3.jpg" data-lightbox="aramis">
								<img src="assets/img/android/aramis/3.jpg" alt="aramis 4" height="150" />
							</a>
							<a href="assets/img/android/aramis/4.jpg" data-lightbox="aramis">
								<img src="assets/img/android/aramis/4.jpg" alt="aramis 5" height="150" />
							</a>
							<a href="assets/img/android/aramis/5.jpg" data-lightbox="aramis">
								<img src="assets/img/android/aramis/5.jpg" alt="aramis 6" height="150" />
							</a>
						</p>
					</div>
				</div>
				<div id="web">
					<div>
						<p>
							<a href="http://poussieres-detoiles.net" target="_blank" title="Poussieres-detoiles.net">Poussières d'étoiles</a> : <br/>
							Cours et consutations en astrologie et tarôt de Marseille ainsi que séance de Reiki.
						</p>
						<p style="text-align:center;">
							<a href="assets/img/web/poussieres-detoiles/poussieres-detoiles.jpg" title="poussières d'étoiles" data-lightbox="web">
								<img src="assets/img/web/poussieres-detoiles/poussieres-detoiles.jpg" alt="poussières d'étoiles" height="150" />
							</a>
						</p>
						
						<p>
							<a href="http://fiscorol.be" target="_blank" title="Fiscorol.be">Fiscorol</a> : <br/>
							Comptable-fiscaliste agréé.
						</p>
						<p style="text-align:center;">
							<a href="assets/img/web/fiscorol/fiscorol.JPG" title="Fiscorol" data-lightbox="web">
								<img src="assets/img/web/fiscorol/fiscorol.JPG" alt="Fiscorol" height="150" />
							</a>
						</p>					
						
						<p>
							<a href="http://le-spizzico.be" target="_blank" title="le-spizzico.be">Spizzico</a> - <a href="http://la-factory.be" target="_blank" title="la-factory.be">Factory</a> : <br/>
							Restaurant à la cuisine italienne et française - Livraison de pizzas
						</p>
						<p style="text-align:center;">
							<a href="assets/img/web/spizzico-factory/spizzico-factory.jpg" title="Spizzico / Factory" data-lightbox="web">
								<img src="assets/img/web/spizzico-factory/spizzico-factory.jpg" alt="Spizzico / Factory" height="150" />
							</a>
						</p>

						<p>(Dans le cadre d'un TFE : ) Site web de jeux multijoueurs (Puissance 4, le jeu de Nim, ...)</p>
					</div>
				</div>
				 <div id="contact">
					<div>
						<p>À venir...</p>
						<p>En attendant, voici mon adresse mail : <a href="mailto:jsn.crdnl@gmail.com" title="jsn.crdnl@gmail.com">jsn.crdnl@gmail.com</a></p>
						<!--p>N'hésitez pas à utiliser le formulaire ci-dessous pour vos requêtes, commentaires, etc.</p>
						<p>Nom : </p>
						<p>Mail : </p>
						<p>Message : </p>
						<p>Envoyer</p-->
					</div>
				</div>
			</div>
			
			<!--div style="position: fixed;display: block;background: black;top: -245px;left: 0;width: 200px;height: 500px;-webkit-transform: rotate(65deg);}"></div>
			<div style="position: fixed;display: block;background: black;bottom: -201px;right: 0;width: 200px;height: 500px;-webkit-transform: rotate(65deg);}"></div-->
			
		</div>
		
        <!-- JavaScript includes -->
		<script src="assets/js/jquery_1-7-2.min.js"></script>
		<!--script src="assets/js/jquery-1.8.3.min.js"></script-->
        <script src="assets/js/jquery.color-2.1.2.min.js"></script>
        <script src="assets/js/jquery.animate-textshadow.min.js"></script>
		<script src="assets/js/jquery.shuffleLetters.js"></script>
		<script src="assets/js/jquery.firefly.js"></script>
		<script src="assets/js/easing.js"></script>		
        <script src="assets/js/lightbox-2.6.min.js"></script>
		<!--script src="assets/js/mousewheel.js"></script-->
        <!--script src="assets/js/jquery.ascensor.min.js"></script-->
        <script src="assets/js/script.js"></script>
		<?php if( isset($_SESSION, $_SESSION['administrator']) && $_SESSION['administrator']=="Active" ) { ?>
			<script src="ckeditor/ckeditor.js"></script>
			<script>

			
				$(document).ready(function()
				{
					$(".colorSwitch").click(function()
					{
						console.log("colorSwitch clicked with rel = " + $(this).attr("rel") + " and color = " + $(this).css("background") );
						$( $(this).attr("rel") ).css("background-color", $(this).css("background-color") );
					});
				});
			
			
			
				// This code is generally not necessary, but it is here to demonstrate
				// how to customize specific editor instances on the fly. This fits well
				// this demo because we have editable elements (like headers) that
				// require less features.

				// The "instanceCreated" event is fired for every editor instance created.
				CKEDITOR.on( 'instanceCreated', function( event ) {
					var editor = event.editor,
						element = editor.element;

					// Customize editors for headers and tag list.
					// These editors don't need features like smileys, templates, iframes etc.
					if ( element.is( 'h1', 'h2', 'h3' ) || element.getAttribute( 'id' ) == 'taglist' ) {
						// Customize the editor configurations on "configLoaded" event,
						// which is fired after the configuration file loading and
						// execution. This makes it possible to change the
						// configurations before the editor initialization takes place.
						editor.on( 'configLoaded', function() {

							// Remove unnecessary plugins to make the editor simpler.
							editor.config.removePlugins = 'colorbutton,find,flash,font,' +
								'forms,iframe,image,newpage,removeformat,' +
								'smiley,specialchar,stylescombo,templates';

							// Rearrange the layout of the toolbar.
							editor.config.toolbarGroups = [
								{ name: 'editing',		groups: [ 'basicstyles', 'links' ] },
								{ name: 'undo' },
								{ name: 'clipboard',	groups: [ 'selection', 'clipboard' ] },
								{ name: 'about' }
							];
						});
					}
				});

			</script>
	   <?php } ?>
    </body>
</html>

