<html>  <!-- This page displays the selected user from 'display_Users_Table' and allows
			 the current admin to make changes to the user's account. -->

  <head>
    <title>Edit Selected User</title>
  </head>

  <style> h1 {text-align:center} </style>
  <h1> Edit Selected User </h1>
	
  <body> 
    
    <form method="post" action="edit_User.php">


      <?php
		
		$id = $_GET['user_ID'];
		
		//Connection to MySQL DB Portion.
		$local_Host = 'localhost';
		$username = '';
		$DB_Username = '';
		$password = '';
	
		$conn = mysql_connect($local_Host, $DB_Username, $password) 
		or die('Could not connect:'.mysql_error());	
		$db_found = mysql_select_db($DB_Username);	
	
		if ($db_found)  {		
			$query = "SELECT * FROM cc_users WHERE user_id='".$id."'";
			$result = mysql_query($query) or die('Query failed: '.mysql_error());	
			
			if ($result) {
				$row = mysql_fetch_assoc($result);			
												
				echo "<table border=4 align=center>\n";
				//Hide 'user_ID' value to pass into 'edit_User.php' upon submit.
				echo ("<input type='hidden' name='user_ID' size='10' value=$row[user_id]>"); 
				echo ("<tr><td>User \t $row[user_id]</td></tr>"); //Display only. Non-Editable;
       		 	echo ("<tr><td>Email:<input type='text' name='eMail' size='15' value=$row[email]></td></tr>");
       		 	echo ("<tr><td>Password:<input type='text' name='password' size='15' value=$row[pword]></td></tr>");
       		 	echo ("<tr><td>First:<input type='text' name='fname' size='15' value=$row[first_name]></td></tr>");
       		 	echo ("<tr><td>Last:<input type='text' name='lname' size='15' value=$row[last_name]></td></tr>");
       		 	echo ("<tr><td>Sex:<input type='text' name='gen' size='1' value=$row[gender]></td></tr>");
       		 	echo ("<tr><td>Home Street:<input type='text' name='hStreet' size='15' value=$row[home_street]></td></tr>");
       			echo ("<tr><td>Home Apt:<input type='text' name='hApt' size='5' value=$row[home_apt]></td></tr>");
       			echo ("<tr><td>Home City:<input type='text' name='hCity' size='10' value=$row[home_city]></td></tr>");
       			echo ("<tr><td>Home State:<input type='text' name='hState' size='2' value=$row[home_state]></td></tr>");
       		 	echo ("<tr><td>Home Zip:<input type='text' name='hZip' size='5' value=$row[home_zip]></td></tr>");
       		 	echo ("<tr><td>Home Country:<input type='text' name='hCountry' size='10' value=$row[home_country]></td></tr>");
       		 	echo ("<tr><td>Com Street:<input type='text' name='cStreet' size='15' value=$row[commute_street]></td></tr>");
       		 	echo ("<tr><td>Com City:<input type='text' name='cCity' size='10' value=$row[commute_city]></td></tr>");
       		 	echo ("<tr><td>Com State:<input type='text' name='cState' size='2' value=$row[commute_state]></td></tr>");
       		 	echo ("<tr><td>Com Zip:<input type='text' name='cZip' size='5' value=$row[commute_zip]></td></tr>");
       		 	echo ("<tr><td>Driver:<input type='text' name='driver' size='3' value=$row[driver]></td></tr>");
       		 	echo ("<tr><td>Vehicle:<input type='text' name='vehicle' size='1' value=$row[owns_vehicle]></td></tr>");
       		 	echo ("<tr><td>Preference:<input type='text' name='preference' size='5' value=$row[vehicle_pref]></td></tr>");
       		 	echo ("<tr><td>About:<input type='text' name='description' size='10' value=$row[user_desc]></td></tr>");
       		 	echo ("<tr><td>Commuting For:<input type='text' name='commuting_For' size='5' value=$row[commuting_for]></td></tr>");
				echo ("<tr><td align='center'><input type='submit' name='submit value' value='Submit Changes'></td></tr>");
				echo "</table> \n";
			}
				mysql_close($conn);	
		}
		else { 
			echo "Database not found";		
			mysql_close($conn);
		}
	?>      
     
    </form>
	
  </body>

</html>
