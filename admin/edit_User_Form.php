<html>  <!-- This page displays the selected user from 'display_Users_Table' and allows
			 the current admin to make changes to the user's account. Also allows admin
			 to delete the user's account.-->
  <head>
    <title>Edit Selected User</title>
  </head>

	<style type="text/css">
	
	h1 {
		text-align:center;
		color: #666666;
		padding: 10px; 
	}
	body {
		font-family: Arial, Verdana, sans-serif;
		background-color: #f8f8f8;
	}
	table {
		border-spacing: 0px; 
		border-color: #f8f8f8;
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
		text-align: left;
		background-color: #efefef;  
	}
	input { 
		text-align:left; 
	}
	div.buttons {
		text-align:center;
		margin: 5px;
	}
	</style>
	
	<h1> Edit Selected User </h1>
	
  <body> 
    
    <form method="post" action="edit_User.php">
    
 
	
      <?php
		$id = $_GET['user_ID'];
		include 'connect.php'; //Connect to the MySQL database.	
			
		$query = "SELECT * FROM cc_users WHERE user_id='".$id."'";
		$result = mysql_query($query) or die('Query failed: '.mysql_error());	
			
		if ($result) {
			$row = mysql_fetch_assoc($result);			
		}
	?>      
     
     <!--The php 'trim' function removes leading and trailing whitespace and other 
     	 predefined characters (optional). In this case, it is needed because the input
     	 tag's value attribute adds whitespace to the php-derived data.-->
     <table class="table_Form" border=2 align=center>
     <!--The 'user_id' is passed onto either the 'delete_User.php' or 'edit_User.php'-->
      		<input type='hidden' name='user_ID' value=<?php echo $row[user_id]; ?>>
		<tr><td>User <?php echo $row[user_id]; ?> </td></tr> <!--Display only. Non-Editable;-->
     	  	<tr><td>Email:<input type='text' name='eMail' maxlength='50' value="<?php echo trim($row[email]); ?>"></td></tr>
     	  	<tr><td>Password:<input type='text' name='password' value="<?php echo trim($row[pword]); ?>" ></td></tr>
     	  	<tr><td>First:<input type='text' name='fname' style="text-align:left;" value="<?php echo trim($row[first_name]); ?>" ></td></tr>
		<tr><td>Last:<input type='text' name='lname' value="<?php echo trim($row[last_name]); ?>" ></td></tr>
  		<tr><td>Sex:<input type='text' name='gen' value="<?php echo trim($row[gender]); ?>" ></td></tr>
		<tr><td>Home Street:<input type='text' name='hStreet' value="<?php echo trim($row[home_street]); ?>" ></td></tr>
      	 	<tr><td>Home Apt:<input type='text' name='hApt' value="<?php echo trim($row[home_apt]); ?>" ></td></tr>
     	  	<tr><td>Home City:<input type='text' name='hCity' value="<?php echo trim($row[home_city]); ?>" ></td></tr>
     	  	<tr><td>Home State:<input type='text' name='hState' size='2' value="<?php echo trim($row[home_state]); ?>" ></td></tr>
     	  	<tr><td>Home Zip:<input type='text' name='hZip' value="<?php echo trim($row[home_zip]); ?>" ></td></tr>
     	  	<tr><td>Home Country:<input type='text' name='hCountry' value="<?php echo trim($row[home_country]); ?>" ></td></tr>
     	  	<tr><td>Com Street:<input type='text' name='cStreet' value="<?php echo trim($row[commute_street]); ?>" ></td></tr>
     	  	<tr><td>Com City:<input type='text' name='cCity' value="<?php echo trim($row[commute_city]);?>" ></td></tr>
      	 	<tr><td>Com State:<input type='text' name='cState' size='2' value="<?php echo trim($row[commute_state]); ?>" ></td></tr>
      	 	<tr><td>Com Zip:<input type='text' name='cZip' value="<?php echo trim($row[commute_zip]); ?>" ></td></tr>
      	 	<tr><td>Driver:<input type='text' name='driver' value="<?php echo trim($row[driver]); ?>" ></td></tr>
      	 	<tr><td>Vehicle:<input type='text' name='vehicle' value="<?php echo trim($row[owns_vehicle]); ?>" ></td></tr>
       		<tr><td>Preference:<input type='text' name='preference' value="<?php echo trim($row[vehicle_pref]); ?>" ></td></tr>
       		<tr><td>About:<input type='text' name='description' value="<?php echo trim($row[user_desc]); ?>" ></td></tr>
       		<tr><td>Commuting For:<input type='text' name='commuting_For' value="<?php echo trim($row[commuting_for]); ?>" ></td></tr>
		<tr><td><input type='submit' name='submit_value' value='Submit changes' autofocus></td></tr>

		</table>
		
	</form>
	
	<div class="buttons">	
	
		<form method="post" action="delete_User.php">
        	<input type='hidden' name='user_ID' value=<?php echo $row[user_id]; ?>>
		<input type='submit' name='delete_value' value='Delete user'>
		</form>
		
    </div>
	
  </body>

</html>
