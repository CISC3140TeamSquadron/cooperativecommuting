<?php
		/*UPDATE: 5/8/13 Fixed 'mysql_real_escape_string' problem. Solution: have to be 
		connected to the database BEFORE assigning the value using 
		mysql_real_escape_string.*/

		include 'connect.php'; //Connect to the MySQL database

		//Checks to see if the variables are empty.
		if ( !empty( $_POST[ 'user_email' ]) ) { 
			$email = mysql_real_escape_string($_POST[ 'user_email'  ]); 
		}
		else { echo "You must enter an email address."; }
		
		if ( !empty( $_POST[ 'user_password' ]) ) {
			$pass = mysql_real_escape_string($_POST[ 'user_password'  ]);
		}
		else { echo "You must enter a password."; }
		
		//Search the table for a matching email address.
		$query = "SELECT * FROM admin_Users WHERE user_email='".$email."'";
		$result = mysql_query($query);
		
		$row = mysql_fetch_array($result);
		
		$search_SQL_Table= "SELECT * FROM admin_Users WHERE user_email='$email' AND user_pass='$pass'";

		$result = mysql_query($search_SQL_Table);
		$count = mysql_num_rows($result);
			
		if($count == 1){ //If a row in the table with matching email and password has been found.
			header("location:admin_Welcome.php"); //Redirect the brower.
		}
		else {
			echo 'Invalid login information.';
		}
	
?>
