<html>  <!-- This page displays an empty user form, which the admin to add fields to in
  		 order to create a Cooperative Commuting user in the database. -->
  <head>
    <title>Create A User</title>
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
	}
	</style>
	
	<h1> Create A User </h1>
	
  <body> 
    
    <form method="post" action="add_User.php">
	
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
       	<tr><td>Email:<input type='text' name='eMail' maxlength='50' placeholder="User's Email" required></td></tr>
       	<tr><td>Password:<input type='password' name='password' placeholder="Create A Password" required></td></tr>
       	<tr><td>First:<input type='text' name='fname' style="text-align:left;" placeholder="First Name" required></td></tr>
		<tr><td>Last:<input type='text' name='lname' placeholder="Last Name" required></td></tr>
  		<tr><td>Sex:<input type="radio" name="sex" value="1"> Male
 					<input type="radio" name="sex" value="0"> Female</td></tr>
		<tr><td>Home Street:<input type='text' name='hStreet' placeholder="Home Street" required></td></tr>
       	<tr><td>Home Apt:<input type='text' name='hApt' placeholder="Home Apt"></td></tr>
       	<tr><td>Home City:<input type='text' name='hCity' placeholder="Home City" required></td></tr>
       	<tr><td>Home State:<input type='text' name='hState' size='2' placeholder="Home State" required></td></tr>
       	<tr><td>Home Zip:<input type='text' name='hZip' placeholder="Home Zip" required></td></tr>
       	<tr><td>Home Country:<input type='text' name='hCountry' placeholder="Home Country" required></td></tr>
       	<tr><td>Com Street:<input type='text' name='cStreet' placeholder="Commute Street" required></td></tr>
       	<tr><td>Com City:<input type='text' name='cCity' placeholder="Commute City" required></td></tr>
       	<tr><td>Com State:<input type='text' name='cState' size='2' placeholder="Commute State" required></td></tr>
       	<tr><td>Com Zip:<input type='text' name='cZip' placeholder="Commute Zip" required></td></tr>
       	<tr><td>Drives:<input type="radio" name="driver_Status" value="Yes"> Yes
 					<input type="radio" name="driver_Status" value="No"> No</td></tr>
       	<tr><td>Vehicle:<input type='text' name='vehicle' placeholder="Vehicle Type" ></td></tr>
       	<tr><td>Preference:<input type='text' name='preference' placeholder="Vehicle Preference" ></td></tr>
       	<tr><td>About:<input type='text' name='description' placeholder="Tell Us About Yourself In One Sentence." ></td></tr>
       	<tr><td>Commuting For:<input type='text' name='commuting_For' placeholder="What Are You Commuting For?"></td></tr>
	</table>
	
		<div class="buttons">	
		<input type='submit' name='submit_value' value='Add user' autofocus>
    	</div>
    	
	</form>
	
  </body>

</html>
