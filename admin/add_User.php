<?php
  /*This php file connects to the database and adds a row to the 'cc_users'
	table based on the post input from 'add_User_Form'.*/
	
	include 'connect.php'; //Connect to the MySQL database.
	
	$email = mysql_real_escape_string($_POST['eMail']);
	$pass = mysql_real_escape_string($_POST['password']);
	$firstname = mysql_real_escape_string($_POST['fname']);
	$lastname = mysql_real_escape_string($_POST['lname']);
	$gender = mysql_real_escape_string($_POST['sex']);
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
	$driver_Stat = mysql_real_escape_string($_POST['driver_Status']);
	$vehicle_Stat = mysql_real_escape_string($_POST['vehicle']);
	$preference_Stat = mysql_real_escape_string($_POST['preference']);
	$desc = mysql_real_escape_string($_POST['description']);
	$commute_Stat = mysql_real_escape_string($_POST['commuting_For']);
	
	$add_User = "INSERT INTO cc_users 
	(email, pword, first_name, last_name, gender, home_apt, home_street, 
	home_city, home_state, home_zip, home_country, commute_street, commute_city, 
	commute_state, commute_zip, commuting_for, driver, owns_vehicle, vehicle_pref, 
	user_desc) VALUES ('".$email."' , '".$pass."' , '".$firstname."' , '".$lastname."', 
	'".$gender."' , '".$home_APT."' , '".$home_STREET."' , '".$home_CITY."' , 
	'".$home_STATE."' , '".$home_ZIP."' , '".$home_COUNTRY."' , '".$com_STREET."' , 
	'".$com_CITY."' , '".$com_STATE."' , '".$com_ZIP."' , '".$commute_Stat."' , 
	'".$driver_Stat."' , '".$vehicle_Stat."' , '".$preference_Stat."' , '".$desc."' )";
		
	$result = mysql_query($add_User) or die('Query failed: '.mysql_error());
	header("location:display_Users_Table.php");
?>
