<?php
	/*This php file connects to the database and modifies the field data of the 'cc_users'
	table based on the post input from 'edit_User_Form'.*/
	
	include 'connect.php'; //Connect to the MySQL database.
	
	$userID = $_POST['user_ID'];
	$email = $_POST['eMail'];
	$pass = $_POST['password'];
	$firstname = $_POST['fname'];
	$lastname = $_POST['lname'];
	$gender = $_POST['gen'];
	$home_APT = $_POST['hApt'];
	$home_STREET = $_POST['hStreet'];
	$home_CITY = $_POST['hCity'];
	$home_STATE = $_POST['hState'];
	$home_COUNTRY = $_POST['hCountry'];
	$home_ZIP = $_POST['hZip'];
	$com_STREET = $_POST['cStreet'];
	$com_APT = $_POST['cApt'];
	$com_CITY = $_POST['cCity'];
	$com_STATE = $_POST['cState'];
	$com_ZIP = $_POST['cZip'];
	$driver_Stat = $_POST['driver'];
	$vehicle_Stat = $_POST['vehicle'];
	$preference_Stat = $_POST['preference'];
	$desc = $_POST['description'];
	$commute_Stat = $_POST['commuting_For'];
	
	$order = "UPDATE cc_users SET email=' ".$email."
		', pword=' ".$pass." 
		', first_name=' ".$firstname." 
		', last_name=' ".$lastname." 
		', gender=' ".$gender."
		', home_apt=' ".$home_APT."
		', home_street=' ".$home_STREET."
		', home_city=' ".$home_CITY."
		', home_state=' ".$home_STATE."
		', home_zip=' ".$home_ZIP."
		', home_country=' ".$home_COUNTRY."
		', commute_street=' ".$com_STREET."
		', commute_city=' ".$com_CITY."
		', commute_state=' ".$com_STATE."
		', commute_zip=' ".$com_ZIP."
		', commuting_for=' ".$commute_Stat."
		', driver=' ".$driver_Stat."
		', owns_Vehicle=' ".$vehicle_Stat."
		', vehicle_pref=' ".$preference_Stat."
		', user_desc=' ".$desc."
		' WHERE user_id= '".$userID."'";
		
	$result = mysql_query($order) or die('Query failed: '.mysql_error());
	header("location:display_Users_Table.php");
?>
