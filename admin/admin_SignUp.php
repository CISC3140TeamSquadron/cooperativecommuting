<?php
	/*This php file connects to the database and inserts the field data to the 
	'admins_Table' table based on the post input from 'admin_SignUp_Form'.*/
	
	include 'connect.php'; //Connect to the MySQL database.
	
	//Not necessary now since create-an-admin-account feature has been removed. 
	//Checks if user entered empty input.
	/*if( !empty($_POST['user_email']) && !empty($_POST['user_password']) && 
		!empty($_POST['firstname']) && !empty($_POST['lastname']) &&
		!empty($_POST['security_answer']) ) {
	*/
		$email = $_POST['user_email'];
		
		//If valid email block.
		if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$pass = $_POST['user_password'];
			$firstname = $_POST['firstname'];
			$lastname = $_POST['lastname'];
			$security_ans = $_POST['security_answer'];
	
			//Check for security answer
			if( strcmp($security_ans, 'Frederick Brooks') == 0 || 
				strcmp($security_ans, 'Fred Brooks') == 0 ||
				strcmp($security_ans, 'Frederick Brooks, Jr') == 0 ||
				strcmp($security_ans, 'Frederick P. Brooks') == 0 ||
				strcmp($security_ans, 'Frederick P. Brooks, Jr') == 0 ) {  
			
				$order = "INSERT INTO admin_Users (user_email, user_pass, firstname, lastname) 
				VALUES  ('".$email."' , '".$pass."' , '".$firstname."' , '".$lastname."')"; 
		
				$result = mysql_query($order) or die('Query failed: '.mysql_error());
	
				header("location:admin_Welcome.php"); //Redirect the brower.
			}
			else {
				echo "Invalid answer to the security question!";
			}	
		}
		//End of valid email block.
		else {
  			echo "E-mail is not valid. Please Re-enter.";
		}
  	}
	else {
		echo "You must enter in data for all fields.";
	}	
?>
