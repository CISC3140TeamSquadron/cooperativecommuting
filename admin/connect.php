<?php
  $local_Host = 'localhost';
	$username = '';
	$database = '';
	$password = '';
	$conn = mysql_connect($local_Host, $username, $password, $database) 
	or die('Could not connect:'.mysql_error());	
	$db_found = mysql_select_db($database);
		
	if (!$db_found)  {		
		echo "Database not found!";		
		mysql_close($conn);
	}
?>
