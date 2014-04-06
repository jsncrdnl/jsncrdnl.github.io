<?php 
header('Content-Type: text/html; charset=ISO-8859-1');

$allValid = true;
$error = "";

$name = $_POST["name"];
if( $name==null || $name=="" )
{
    $error .= "Vous n'avez pas renseigné de nom<br />";
	$allValid = false;
}
else
{	
	$name = stripslashes(htmlspecialchars($name, ENT_QUOTES));
}

$email 	= $_POST["mail"];
$atom   = '[-a-z0-9!#$%&\'*+\\/=?^_`{|}~]'; 
$domain = '([a-z0-9]([-a-z0-9]*[a-z0-9]+)?)';                               
$regex 	= '/^' . $atom . '+' . '(\.' . $atom . '+)*' . '@' . '(' . $domain . '{1,63}\.)+' .  $domain . '{2,63}$/i';
if ( !preg_match($regex, $email)) 
{
    $error .= "L'adresse e-mail $email n'est pas valide<br />";
	$allValid = false;
}
else
{	
	$email = stripslashes(htmlspecialchars($email, ENT_QUOTES));
}

$message = $_POST["msg"];
if( $message==null || $message=="" )
{
    $error .= "Veuillez entrer un message<br />";
	$allValid = false;
}
else
{	
	$message = stripslashes(htmlspecialchars($message, ENT_QUOTES));
}


if( $allValid==true ) 
{
	mail(
		"jsn.crdnl@gmail.com", 
		"Contact@Alwaysdata", 
		"<html>".
			"<body>".
				"<p>Vous avez reçu un nouveau message !</p>".
				"<span style='display:inline-block; width:100px;'>Nom : ".			"</span>" 	. $name  . "<br />".
				"<span style='display:inline-block; width:100px;'>Email : ".		"</span>" 	. $email . "<br />".
				"<br />Message :<br />" . $message . 
			"</body>".
		"</html>",
		"MIME-Version: 1.0\nContent-type: text/html; charset=ISO-8859-1\nFrom: ".$name." <".$email.">\n" );
	echo "<span style='font-weight:bold;color:green;'>Le formulaire de contact a été envoyé avec succès !</span>";
			// FOR DEBUG PURPOSE
			//'<br />name : "'. $name .'" <br />mail : "'. $email .'" <br /> message : "'. $message .'" !';
}
else  						
	echo 	"<span style='font-weight:bold;color:red;'>L'envoi du formulaire a échoué pour la raison suivante : <br />" . $error . "</span>" . 
				"<br /><span style='font-weight:bold;color:red;'>Ré-essayez en rafraichissant cette page</span>";

?>