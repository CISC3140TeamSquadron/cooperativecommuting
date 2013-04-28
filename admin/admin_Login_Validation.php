<html> <!--This page validates the email and password provided in the 'admin_Login' page.-->
  <head>

    <title>Welcome to the Cooperative Commuting Admin Page!</title>

  </head>

  <body>

    <?php
		
		//User-submitted information gathered from 'admin_Login.php'.
		if ( isset( $_POST[ 'user_email' ]) ) { 
			$email = $_POST[ 'user_email'  ];
		}
		else { echo "You must enter an email address."; }
		
		if ( isset( $_POST[ 'user_password' ]) ) {
			$pass = $_POST[ 'user_password'  ]; 
		}
		else { echo "You must enter a password."; }

	
		//Connecting to the selected database portion.
		$local_Host = 'localhost';
		$username = 'pcheung';
		$DB_Username = 'pcheung';
		$password = 'cwNwv5';
	
		$conn = mysql_connect($local_Host, $username, $password) 
		or die('Could not connect:'.mysql_error());	
		$db_found = mysql_select_db($DB_Username);	
		$query = "SELECT * FROM admin_Users WHERE user_email='".$email."'";
		$result = mysql_query($query);
		
		if ($db_found) {
			$row = mysql_fetch_array($result);
		
			$search_SQL_Table= "SELECT * FROM admin_Users WHERE 		
			user_email='$email' AND user_pass='$pass'";

			$result = mysql_query($search_SQL_Table);
			$count = mysql_num_rows($result);
			
			if($count == 1){ //If a row in the table with matching email and password has been found.
				echo '<style> h1 {text-align:center} </style>';
				echo '<h1>Welcome, ' .$row['firstname']. ' ' 							
				.$row['lastname']. '!</h1>';
				echo '<style> form {text-align:center} </style>';
				echo '<form method="link" action="display_Users_Table.php">
				<input type="submit" value="View Users"></form>';
			}
			else {
				echo 'Invalid login information.';
			}
			mysql_close($conn);				
		}
		else {
			echo 'Database not found.';
			mysql_close($conn);			
		}
?>
    
  </body>
</html>
