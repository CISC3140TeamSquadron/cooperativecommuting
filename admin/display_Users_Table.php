<html> <!--This page displays all the CC users in a table format for the admin to edit-->
  <head>

    <title>Cooperative Commuting Users</title>
	
	<style type="text/css">
	
	h1 {
		text-align:center;
		color: #666666;
		padding: 10px; 
	}
	body {
		font-family: Arial, Verdana, sans-serif;
		background-color: #f8f8f8;
		color: #666666; 
	}
	table {
		border-spacing: 0px; 
	}
	tr, td {
		color: #0262a8;
		padding: 5px 30px 5px 10px;
		border-spacing: 1px;
		border-top: 1px solid #f1f8fe;
		border-bottom: 1px solid #cbd2d8;
		border-right: 1px solid #cbd2d8;
		font-size: 90%;
		margin: 0px; 
		text-align: center;
		background-color: #efefef;  
	}
	tr.head th {
		color: #666666;	 
		background-color: #cccccc;
		border-spacing: 1px;
		border-top: 1px solid #8d8f91;
		border-bottom: 2px solid #8d8f91;
		border-right: 1px solid #8d8f91;
		text-align: center;
		letter-spacing: 0.15em; 
	}
	
	</style>
		
  </head>

  <h1> Cooperative Commuting Users </h1>

  <body> 
  	<!--Continue here! CREATE A PHP FORM THAT WILL ADD A USER. ALSO, ADD A DELETE USER 
  	BUTTON THAT WILL DELETE THE SELECTED USER. HAVE THIS FEATUR ON THE 'edit_User_Form' page-->
  	<a href="add_User_Form.php" style="text-decoration: none" >Add a user</a>
    <!--
    <input type='hidden' name='user_ID' value=<?php echo $row[user_id]; ?>>

    <form method="link" action="add_User_Form.php">
	<input type="submit" value="Add a user">
	</form>	
	-->
    <!--<form method="post" action="edit2.php">-->

	<?php
		include 'connect.php'; //Connect to the MySQL database.	
		
		$query = "SELECT * FROM cc_users ORDER BY user_id";
		$result = mysql_query($query) or die('Query failed: '.mysql_error());	
		
		echo "<table align=center>\n";

		echo '<tr class="head"> 
		<th>ID</th>
		<th>Email</th>
		<th>Password</th>
		<th>F.Name</th>
		<th>L.Name</th>
		<th>Sex</th>
		<th>Street</th>
		<th>Apt</th>
		<th>City</th>
		<th>State</th>
		<th>Zip</th>
		<th>Country</th>
		<th>Com Street</th>
		<th>Com City</th>
		<th>Com State</th>
		<th>Com Zip</th>
		<th>Driver?</th>
		<th>Owns</th>
		<th>Preference</th>
		<th>About</th>
		<th>Reason</th> </tr>';
			
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
       		 echo ("<td>$row[commuting_for]</td></tr>");
		}
			
		echo "</table> \n";
		
	?>      
   
  </body>

</html>
