
for(var j, x, i = imgList.length; i; j = parseInt(Math.random() * i), x = imgList[--i], imgList[i] = imgList[j], imgList[j] = x);
var backs = [];
for(var i=0; i<imgList.length; i++)
	backs[i] = { src:imgList[i], fade: 2500 };

var mobileView = false;
var overlayOpacity = 0.45;

$(document).ready(function(){

//	$('nav a').click(function(){
//		$("body").removeClass("bodyLoaded");
//	});
//	$("body").addClass("bodyLoaded");

	// if( jQuery.browser.mobile==true || $(window).height()>$(window).width() )
	// {
		// $("body").addClass("mobileView");
		// mobileview = true;
		$("body").append(
			"<div id='mobileBack'>"+
				"<div id='mobileBackImg' style='background:url("+imgList[0]+") no-repeat; background-size:cover;'></div>" +
				"<div id='mobileBackOverlay' style='background: rgba(35, 31, 32, 0.65);'></div>" +
			"</div>");
	// }
	// else
	// {
		// $.vegas('slideshow', {
		  // delay:10000,
		  // preload: true,
		  // backgrounds: backs
		// })('overlay', {
		  // src:'vegas/overlays/20.png',
		  // opacity: overlayOpacity
		// });
	// }


});

	function submitform()
	{
		var noError = true;

		if( $.trim($("#contactname").val())=="" )
		{
			$("#errorMsg").text("Veuillez remplir votre nom ... ");
			noError = false;
		}
		else { $("#errorMsg").text(""); }


		/////////

		if( $.trim($("#contactmail").val())=="" )
		{
			$("#errorMsg").text("Veuillez remplir votre addresse mail ... ");
			noError = false;
		}
		else if(  	(""+$.trim($("#contactmail").val())).indexOf("@")==-1
		||  		 (""+$.trim($("#contactmail").val())).split("@")[0].length<1
		||  		 (""+$.trim($("#contactmail").val())).split("@")[1].length<1
		||  		 (""+$.trim($("#contactmail").val())).split("@")[1].indexOf(".")==-1
		||  		 (""+$.trim($("#contactmail").val())).split(".")[1].length <1
				  )
		{
			$("#errorMsg").text("Entrez une adresse email valide ... ");
			noError = false;
		}
		else { $("#errorMsg").text(""); }

		/////////

		if( $.trim($("#contactmsg").val())=="")
		{
			$("#errorMsg").html("<br />Veuillez remplir votre message ... ");
			noError = false;
		}
		else { $("#errorMsg").text(""); }

		////////

		if(noError)
		{
			var	name_ = $.trim($("#contactname").val());
			var	mail_ = $.trim($("#contactmail").val());
			var	msg_ = $.trim($("#contactmsg").val());

			$.ajax
			({
				url 	: "sendMail.php",
				type 	: "POST",
				data	:
				{
					user 		: name_,
					mail		: mail_,
					msg 		: msg_,
					subj		: 'Demande de contact'
				},
				success : function(data)
				{
					// $("#contactForm").css("display", "none");
					if (data==1)
						$("#contactForm").html( 'Mail envoyé avec succès.' );
					else
						$("#contactForm").html( "Une erreur s'est produite lors de l'envoi du mail." );
				}
			});
		}
	}
