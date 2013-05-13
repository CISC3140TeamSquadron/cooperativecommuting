<?php
	/*5/8/13 UPDATE: Fixed the problem where updating was causing some issues in the table.
	The way I had initially setup '$order' caused there to be some extra whitespace 
	added onto the values each time the admin submitted the changes. For example, before
	it was pword=' ".$pass." ', which added whitesapce to it; now, it's pword='".$pass."',
	and the update shows successfully on the mysql table when you search up the updated user
	by typing in the command SELECT * FROM cc_users WHERE pword='some_new_value';*/
	
	/*This php file connects to the database and modifies the field data of the 'cc_users'
	table based on the post input from 'edit_User_Form'.*/
	
	include 'connect.php'; //Connect to the MySQL database.
	
	$userID = mysql_real_escape_string($_POST['user_ID']);
//	mysql_real_escape_string($userID);
	$email = mysql_real_escape_string($_POST['eMail']);
	$pass = mysql_real_escape_string($_POST['password']);
	$firstname = mysql_real_escape_string($_POST['fname']);
	$lastname = mysql_real_escape_string($_POST['lname']);
	$gender = mysql_real_escape_string($_POST['gen']);
	$home_APT = mysql_real_escape_string($_POST['hApt']);
	$home_STREET = mysql_real_escape_string($_POST['hStreet']);
	$home_CITY = mysql_real_escape_string($_POST['hCity']);
	$home_STATE = mysql_real_escape_string($_POST['hState']);
	$home_COUNTRY = mysql_real_escape_string($_POST['hCountry']);
	$home_ZIP = mysql_real_escape_string($_POST['hZip']);
	$com_STREET = mysql_real_escape_string($_POST['cStreet']);
	$com_APT = mysql_real_escape_string($_POST['cApt']);
	$com_CITY = mysql_real_escape_string($_POST['cCity']);
	$com_STATE = mysql_real_escape_string($_POST['cState']);
	$com_ZIP = mysql_real_escape_string($_POST['cZip']);
	$driver_Stat = mysql_real_escape_string($_POST['driver']);
	$vehicle_Stat = mysql_real_escape_string($_POST['vehicle']);
	$preference_Stat = mysql_real_escape_string($_POST['preference']);
	$desc = mysql_real_escape_string($_POST['description']);
	$commute_Stat = mysql_real_escape_string($_POST['commuting_For']);
	
	$order = "UPDATE cc_users SET email='".$email."', 
		pword='".$pass."', 
		first_name='".$firstname."', 
		last_name='".$lastname."', 
		gender='".$gender."', 
		home_apt='".$home_APT."', 
		home_street='".$home_STREET."', 
		home_city='".$home_CITY."', 
		home_state='".$home_STATE."', 
		home_zip='".$home_ZIP."', 
		home_country='".$home_COUNTRY."', 
		commute_street='".$com_STREET."', 
		commute_city='".$com_CITY."', 
		commute_state='".$com_STATE."', 
		commute_zip='".$com_ZIP."', 
		commuting_for='".$commute_Stat."', 
		driver='".$driver_Stat."', 
		owns_Vehicle='".$vehicle_Stat."', 
		vehicle_pref='".$preference_Stat."', 
		user_desc='".$desc."'
		WHERE user_id='".$userID."'";
		
	$result = mysql_query($order) or die('Query failed: '.mysql_error());
	header("location:display_Users_Table.php");
?>
