<?php
  /*This php file connects to the database and deletes a user from 'cc_users'*/	
	include 'connect.php'; //Connect to the MySQL database.
	
	$userID = mysql_real_escape_string($_POST['user_ID']);
	
	$order = "DELETE FROM cc_users WHERE user_id='".$userID."'";
		
	$result = mysql_query($order) or die('Query failed: '.mysql_error());
	header("location:display_Users_Table.php"); //Go back to the display tables page.
?>
