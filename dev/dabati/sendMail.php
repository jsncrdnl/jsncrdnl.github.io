<?php

    if (    isset($_POST, $_POST['user'],$_POST['subj'],$_POST['mail'],$_POST['msg']) &&
            preg_match("/^[a-zA-ZéàèàëïöäüâêûîôçÁÉÚÍÓÀÈÙÌÒÄËÜÏÖ ]+$/", $_POST['user']) &&
            preg_match("/^[a-zA-ZéàèàëïöäüâêûîôçÁÉÚÍÓÀÈÙÌÒÄËÜÏÖ ]+$/", $_POST['subj']) &&
            //(strlen($_POST['subj'])>10) &&
            preg_match("/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/", $_POST['mail'])
       )
    {
        $to      = 'david.cursio@dabaticonstruction.be';
        $subject = "SITE WEB contact: " . $_POST['user'];
        $message =  "Prise de contact de " . $_POST['user'] . "\n".
                    "Mail de réponse : " . $_POST['mail'] . "\n" .
                    "Sujet : " . $_POST['subj'] . "\n" .
                    "Message:\n\n" . $_POST['msg'];
        $headers =  'From: david.cursio@dabaticonstruction.be' . "\r\n" .
                    'Reply-To: ' . $_POST['mail'] . "\r\n" .
                    'X-Mailer: PHP/' . phpversion();;

        mail($to, $subject, $message, $headers);

        echo 1;
    }
    else
    {
        echo 0;
    }
?>
