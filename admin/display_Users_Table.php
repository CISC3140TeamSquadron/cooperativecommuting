<html> <!--This page displays all the CC users in a table format for the admin to edit-->
  <head>

    <title>Cooperative Commuting Users</title>

  </head>

  <style> h1 {text-align:center} </style>
  <h1> Cooperative Commuting Users </h1>

  <body> 

    <form method="post" action="edit2.php">

	<?php
		include 'connect.php'; //Connect to the MySQL database.	
		
		$query = "SELECT * FROM cc_users ORDER BY user_id";
		$result = mysql_query($query) or die('Query failed: '.mysql_error());	
		
		echo "<table border=2 align=center>\n";

		echo "\t<tr><td>ID</td><td>Email</td><td>Password</td><td>F. Name</td>
		<td>L. Name</td><td>Sex</td><td>Street</td><td>Apt</td><td>City</td>
		<td>State</td><td>Zip</td><td>Country</td><td>Com Street</td><td>Com City</td>
		<td>Com State</td><td>Com Zip</td><td>Driver?</td><td>Owns</td>
		<td>Preference</td><td>About</td><td>Reason</td></tr>\n";
			
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
		
	?>      
      
    </form>
   
  </body>

</html>
