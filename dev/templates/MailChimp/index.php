<?php
/**
This Example shows how to create a basic campaign via the MCAPI class.
**/
require_once 'MCAPI/MCAPI.class.php';
require_once 'MCAPI/config.inc.php'; //contains apikey

$api = new MCAPI($apikey);

$type = 'regular';

$opts['list_id'] = 'f64563ffd6';
$opts['subject'] = 'Test Newsletter Subject 2';
$opts['from_email'] = 'jsn.crdnl@gmail.com'; 
$opts['from_name'] = 'jsncrdnl';

$opts['tracking']=array('opens' => true, 'html_clicks' => true, 'text_clicks' => false);

$opts['authenticate'] = true;
$opts['analytics'] = array('google'=>'my_google_analytics_key');
$opts['title'] = 'Test Newsletter Title';

$content = array(
	"html"=>
	"<html>
        <table width='100%' cellspacing='0' cellmargin='0' style='width:100%; background:#F1B4FF;text-align:center;'>
            <tr cellspacing='0' cellmargin='0' height='20'><td></td><td></td><td></td></tr>
            <tr cellspacing='0' cellmargin='0' height='160'>
                <td cellspacing='0' cellmargin='0'></td>
                <td cellspacing='0' cellmargin='0' width='600' height='160' bgcolor='#eee' style='background-color:#eee;border:2px solid white;border-bottom:0;'>
                    <img src='http://img826.imageshack.us/img826/8377/logoheadermailv1.jpg' alt='Logo de Poussières d´étoiles' title='Logo de Poussières d´étoiles' style='max-width:600px;' width='600' height='160' />
                </td>
                <td cellspacing='0' cellmargin='0'></td>
            </tr>
            <tr cellspacing='0' cellmargin='0' style='border-top:2px solid gray;'>
                <td cellspacing='0' cellmargin='0'></td>
                <td cellspacing='0' cellmargin='0' width='572' bgcolor='white' style='padding:15px;text-align:left;background-color:white;border:2px solid white;border-top:0;border-bottom:0;'>                                 
                    BLABLABLA
                </td>
                <td cellspacing='0' cellmargin='0'></td>
            </tr>
            <tr cellspacing='0' cellmargin='0' height='30' style='border-top:2px solid gray;'>
                <td cellspacing='0' cellmargin='0'></td>
                <td cellspacing='0' cellmargin='0' width='600' bgcolor='#e4e4e4' style='background-color:#e4e4e4;border:2px solid white;border-top:0;border-bottom:0;'>                                 
                    <a href='http://poussieres-detoiles.net?utm_campaign=fall-sale&utm_medium=email&utm_source=female-list' alt='Poussières d%27étoiles' title='Poussières d%27étoiles'>Pour plus d'information, visitez Poussières d'étoiles</a>
                </td>
                <td cellspacing='0' cellmargin='0'></td>
            </tr>
            <tr cellspacing='0' cellmargin='0' height='33'>
                <td cellspacing='0' cellmargin='0'></td>
                <td cellspacing='0' cellmargin='0' width='600' height='33' bgcolor='#eee' style='background-color:#eee;border:2px solid white;border-top:0;border-bottom:0;padding-top:3px;'>
                    <span>Parlez de Poussières d'étoiles : </span><br/>
                    <!-- NEW VERSION WITH ADDTHIS -->
                    <a href='http://api.addthis.com/oexchange/0.8/forward/facebook/offer?pco=tbx32nj-1.0&amp;url=http%3A%2F%2Fpoussieres-detoiles.net&amp;pubid=ra-519ca18f4b266658' target='_blank' ><img src='http://cache.addthiscdn.com/icons/v1/thumbs/32x32/facebook.png' border='0' alt='Facebook' /></a>
                    <a href='http://api.addthis.com/oexchange/0.8/forward/twitter/offer?pco=tbx32nj-1.0&amp;url=http%3A%2F%2Fpoussieres-detoiles.net&amp;pubid=ra-519ca18f4b266658&title=Poussi%C3%A8res%20d%27%C3%A9toiles%20-%20Cours%20et%20s%C3%A9ances%20d%27astrologie%2C%20de%20tarot%20de%20Marseille%20et%20de%20reiki%20%C3%A0%20Blaugies%20(Mons%2C%20Hainaut).' target='_blank' ><img src='http://cache.addthiscdn.com/icons/v1/thumbs/32x32/twitter.png' border='0' alt='Twitter' /></a>
                    <a href='http://www.addthis.com/bookmark.php?source=tbx32nj-1.0&amp;=300&amp;pubid=ra-519ca18f4b266658&amp;url=http%3A%2F%2Fpoussieres-detoiles.net ' target='_blank'  ><img src='http://cache.addthiscdn.com/icons/v1/thumbs/32x32/more.png' border='0' alt='More...' /></a>
                    <!-- -->
                    <!-- OLD VERSION WITH PO.ST 
                    <a href='http://po.st/v1/share/facebook?publisherKey=j8fi0rvr6cf0sh3koshv&url=http%3A%2F%2Fpoussieres-detoiles.net&title=Poussi%C3%A8res%20d%27%C3%A9toiles%20-%20Cours%20et%20s%C3%A9ances%20d%27astrologie%2C%20de%20tarot%20de%20marseille%20et%20de%20reiki%20%C3%A0%20Blaugies%20(Mons)%2C%20en%20Belgique.' target='_blank'><img src='http://i.po.st/static/img/set-32-facebook.png' alt='Facebook' width='32' height='32' border='0' /></a>
                    <a href='http://po.st/v1/share/twitter?publisherKey=j8fi0rvr6cf0sh3koshv&url=http%3A%2F%2Fpoussieres-detoiles.net&title=Poussi%C3%A8res%20d%27%C3%A9toiles%20-%20Cours%20et%20s%C3%A9ances%20d%27astrologie%2C%20de%20tarot%20de%20marseille%20et%20de%20reiki%20%C3%A0%20Blaugies%20(Mons)%2C%20en%20Belgique.' target='_blank'><img src='http://i.po.st/static/img/set-32-twitter.png' alt='Twitter' width='32' height='32' border='0' /></a>
                    <a href='http://po.st/v1/share/googleplus?publisherKey=j8fi0rvr6cf0sh3koshv&url=http%3A%2F%2Fpoussieres-detoiles.net&title=Poussi%C3%A8res%20d%27%C3%A9toiles%20-%20Cours%20et%20s%C3%A9ances%20d%27astrologie%2C%20de%20tarot%20de%20marseille%20et%20de%20reiki%20%C3%A0%20Blaugies%20(Mons)%2C%20en%20Belgique.' target='_blank'><img src='http://i.po.st/static/img/set-32-googleplus.png' alt='Google+' width='32' height='32' border='0' /></a>
                    <a href='http://po.st/v1/share/linkedin?publisherKey=j8fi0rvr6cf0sh3koshv&url=http%3A%2F%2Fpoussieres-detoiles.net&title=Poussi%C3%A8res%20d%27%C3%A9toiles%20-%20Cours%20et%20s%C3%A9ances%20d%27astrologie%2C%20de%20tarot%20de%20marseille%20et%20de%20reiki%20%C3%A0%20Blaugies%20(Mons)%2C%20en%20Belgique.' target='_blank'><img src='http://i.po.st/static/img/set-32-linkedin.png' alt='LinkedIn' width='32' height='32' border='0' /></a>
                    <a href='http://po.st/v1/share/email?publisherKey=j8fi0rvr6cf0sh3koshv&url=http%3A%2F%2Fpoussieres-detoiles.net&title=Poussi%C3%A8res%20d%27%C3%A9toiles%20-%20Cours%20et%20s%C3%A9ances%20d%27astrologie%2C%20de%20tarot%20de%20marseille%20et%20de%20reiki%20%C3%A0%20Blaugies%20(Mons)%2C%20en%20Belgique.' target='_blank'><img src='http://i.po.st/static/img/set-32-email.png' alt='Email' width='32' height='32' border='0' /></a>
                    <a href='http://po.st/v1/share/hotmail?publisherKey=j8fi0rvr6cf0sh3koshv&url=http%3A%2F%2Fpoussieres-detoiles.net&title=Poussi%C3%A8res%20d%27%C3%A9toiles%20-%20Cours%20et%20s%C3%A9ances%20d%27astrologie%2C%20de%20tarot%20de%20marseille%20et%20de%20reiki%20%C3%A0%20Blaugies%20(Mons)%2C%20en%20Belgique.' target='_blank'><img src='http://i.po.st/static/img/set-32-hotmail.png' alt='Hotmail' width='32' height='32' border='0' /></a>
                    <a href='http://po.st/v1/share/yahoomail?publisherKey=j8fi0rvr6cf0sh3koshv&url=http%3A%2F%2Fpoussieres-detoiles.net&title=Poussi%C3%A8res%20d%27%C3%A9toiles%20-%20Cours%20et%20s%C3%A9ances%20d%27astrologie%2C%20de%20tarot%20de%20marseille%20et%20de%20reiki%20%C3%A0%20Blaugies%20(Mons)%2C%20en%20Belgique.' target='_blank'><img src='http://i.po.st/static/img/set-32-yahoomail.png' alt='Yahoo Mail' width='32' height='32' border='0' /></a>
                    <a href='http://po.st/v1/share/gmail?publisherKey=j8fi0rvr6cf0sh3koshv&url=http%3A%2F%2Fpoussieres-detoiles.net&title=Poussi%C3%A8res%20d%27%C3%A9toiles%20-%20Cours%20et%20s%C3%A9ances%20d%27astrologie%2C%20de%20tarot%20de%20marseille%20et%20de%20reiki%20%C3%A0%20Blaugies%20(Mons)%2C%20en%20Belgique.' target='_blank'><img src='http://i.po.st/static/img/set-32-gmail.png' alt='GMail' width='32' height='32' border='0' /></a>
                    -->
                </td>
                <td cellspacing='0' cellmargin='0'></td>
            </tr>
            <tr cellspacing='0' cellmargin='0' height='5'>
                <td cellspacing='0' cellmargin='0'></td>
                <td cellspacing='0' cellmargin='0' bgcolor='#ddd' style='background-color:#ddd;border:2px solid white;border-top:0;border-bottom:0;'></td>
                <td cellspacing='0' cellmargin='0'></td>
            </tr>
            <tr cellspacing='0' cellmargin='0' style='border-top:2px solid gray;'>
                <td cellspacing='0' cellmargin='0'></td>
                <td cellspacing='0' cellmargin='0' width='600' bgcolor='#e4e4e4' style='background-color:#e4e4e4;border:2px solid white;border-top:0;'>
                    POUSSIÈRES D'ÉTOILES<br />
                    Virginie Clombe<br />
                    36, Rue du Joncquois - 7370 Blaugies<br />
                    CONTACT - 0487/28.66.69<br />
                    contact@poussieres-detoiles.net<br />
                    BE 0502685375
                </td>
                <td cellspacing='0' cellmargin='0'></td>
            </tr>
            <tr cellspacing='0' cellmargin='0' height='20'><td></td><td></td><td></td></tr>
        </table>
    </html>" 
	//,"text" => "text text text *|UNSUB|*"
		);
/** OR we could use this:
$content = array('html_main'=>'some pretty html content',
		 'html_sidecolumn' => 'this goes in a side column',
		 'html_header' => 'this gets placed in the header',
		 'html_footer' => 'the footer with an *|UNSUB|* message', 
		 'text' => 'text content text content *|UNSUB|*'
		);
$opts['template_id'] = "1";
**/

$retval = $api->campaignCreate($type, $opts, $content);

if ($api->errorCode){
	echo "Unable to Create New Campaign!";
	echo "\n\tCode=".$api->errorCode;
	echo "\n\tMsg=".$api->errorMessage."\n";
} else {
	echo "New Campaign ID:".$retval."\n";
}


$emails = array("jsn.crdnl@gmail.com", "jsn.crdnl@gmail.com");
$retval = $api->campaignSendTest($retval, $emails);

if ($api->errorCode){
	echo "Unable to Send Test Campaign!";
	echo "\n\tCode=".$api->errorCode;
	echo "\n\tMsg=".$api->errorMessage."\n";
} else {
	echo "Campaign Tests Sent!\n";
}

?>
