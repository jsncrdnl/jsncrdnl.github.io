<?php 
	session_start();
	
	if ( isset($_POST, $_POST["editabledata"], $_SESSION, $_SESSION["administrator"]) && $_SESSION['administrator'] == "Active" )
	{
		$handle = fopen("./content1.htm", "w");
		fwrite($handle, $_POST["editabledata"]);
		fclose($handle);
	}
?>