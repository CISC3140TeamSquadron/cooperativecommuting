<html> <!--This page validates the email and password provided in the 'admin_Login' page.-->
  <head>
    <title>Welcome to the Cooperative Commuting admin page!</title>
  </head>

  <body>

    <?php
		
		//User-submitted information gathered from 'admin_Login.php'.
		if ( !empty( $_POST[ 'user_email' ]) ) { 
			$email = $_POST[ 'user_email'  ];
			mysql_real_escape_string($email); //To prevent MySQL injection.
		}
		else { echo "You must enter an email address."; }
		
		if ( !empty( $_POST[ 'user_password' ]) ) {
			$pass = $_POST[ 'user_password'  ]; 
			mysql_real_escape_string($pass);
		}
		else { echo "You must enter a password."; }

		include 'connect.php'; //Connect to the MySQL database.
		
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
    
  </body>
</html>
