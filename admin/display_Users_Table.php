<html> <!--This page displays all the CC users in a table format for the admin to edit-->
  <head>

    <title>Cooperative Commuting Users</title>

  </head>

  <style> h1 {text-align:center} </style>
  <h1> Cooperative Commuting Users </h1>

  <body> 

    <form method="post" action="edit2.php">

	<?php
		$local_Host = 'localhost';
		$username = 'pcheung';
		$DB_Username = '';
		$password = '';
	
		$conn = mysql_connect($local_Host, $username, $password) 
		or die('Could not connect:'.mysql_error());	
		$db_found = mysql_select_db($DB_Username);	
	
		if ($db_found)  {		
			$query = "SELECT * FROM cc_users ORDER BY user_id";
			$result = mysql_query($query) or die('Query failed: 
			'.mysql_error());	
		
			echo "<table border=4 align=center>\n";

			echo "\t<tr><td>USER ID</td><td>EMAIL</td><td>PASSWORD</td><td>FIRSTNAME</td>
			<td>LASTNAME</td><td>GENDER</td><td>Street</td><td>APT</td><td>CITY</td>
			<td>STATE</td><td>ZIP</td><td>COUNTRY</td><td>COM STREET</td><td>COM CITY</td>
			<td>COM STATE</td><td>COM ZIP</td><td>DRIVER</td><td>VEHICLE</td>
			<td>PREFERENCE</td><td>ABOUT</td><td>REASON</td></tr>\n";
			while ($row = mysql_fetch_assoc($result))  {
			 //First line below passes the value of 'user_ID' into the URL link in order to update the DB.
			 echo ("<tr><td><a href=\"edit_User_Form.php?user_ID=$row[user_id]\">User\t$row[user_id]</a></td>");
       		 echo ("<td>$row[email]</td>");
       		 echo ("<td>$row[pword]</td>");
       		 echo ("<td>$row[first_name]</td>");
       		 echo ("<td>$row[last_name]</td>");
       		 echo ("<td>$row[gender]</td>");
       		 echo ("<td>$row[home_street]</td>");
       		 echo ("<td>$row[home_apt]</td>");
       		 echo ("<td>$row[home_city]</td>");
       		 echo ("<td>$row[home_state]</td>");
       		 echo ("<td>$row[home_zip]</td>");
       		 echo ("<td>$row[home_country]</td>");
       		 echo ("<td>$row[commute_street]</td>");
       		 echo ("<td>$row[commute_city]</td>");
       		 echo ("<td>$row[commute_state]</td>");
       		 echo ("<td>$row[commute_zip]</td>");
       		 echo ("<td>$row[driver]</td>");
       		 echo ("<td>$row[owns_vehicle]</td>");
       		 echo ("<td>$row[vehicle_pref]</td>");
       		 echo ("<td>$row[user_desc]</td>");
       		 echo ("<td>$row[commuting_for]</td>");
			}
			
			echo "</table> \n";
			
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
