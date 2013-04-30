<?php

	/*

	add_user.php - Creates acount for user in the DB.

	Author: DAVID LETTIER
	   Bio: http://www.lettier.com/

	*/

	include( "connect.php" );
	
	$user_name = "";
	$pass_word = "";
	$first_name = "";
	$last_name = "";
	$email = "";
	$driver = "";
	$address = "";
	$address2 = "";
	$city = "";
	$state = "";
	$zip = "";
	$country = "";
	$need = "";
//	$last_accessed = date( "Y-m-d" );
	
	
	if ( isset( $_POST[ 'user_name' ] ) )
	{ 		
		$user_name = mysql_real_escape_string( $_POST[ 'user_name'  ] );
	}
	
	if ( isset( $_POST[ 'pass_word' ] ) )
	{
		$pass_word = mysql_real_escape_string( $_POST[ 'pass_word'  ] );
	}
	
	if ( isset( $_POST[ 'first_name' ] ) )
	{
		$first_name = mysql_real_escape_string( $_POST[ 'first_name' ] );
	}
	
	if ( isset( $_POST[ 'last_name' ] ) )
	{
		$last_name = mysql_real_escape_string( $_POST[ 'last_name'  ] );	
	}
	
	if ( isset( $_POST[ 'email' ] ) )
	{
		$email = $_POST[ 'email'  ];	
	}
	
	if ( isset( $_POST[ 'driver' ] ) )
	{
		$driver = $_POST[ 'driver'  ];	
	}
	
	if ( isset( $_POST[ 'address' ] ) )
	{
		$address = $_POST[ 'address'  ];	
	}
	
	if ( isset( $_POST[ 'address2' ] ) )
	{
		$address2 = $_POST[ 'address2'  ];	
	}
	
	if ( isset( $_POST[ 'city' ] ) )
	{
		$city = $_POST[ 'city'  ];	
	}
	
	if ( isset( $_POST[ 'state' ] ) )
	{
		$state = $_POST[ 'state'  ];	
	}
	
	if ( isset( $_POST[ 'zip' ] ) )
	{
		$zip = $_POST[ 'zip'  ];	
	}
	
	if ( isset( $_POST[ 'country' ] ) )
	{
		$country = $_POST[ 'country'  ];	
	}
	
	if ( isset( $_POST[ 'need' ] ) )
	{
		$need = $_POST[ 'need'  ];	
	}
	
	if ( $user_name != "" || $pass_word != "" || $first_name != "" || $last_name != "" || $email != "" || $driver != "" || $address != "" || $address2 != "" || $city != "" || $state != "" || $zip != "" || $country != "" || $need != ""  )
	{
	
		$query_string = "SELECT email FROM cc_users WHERE email = '$user_name'";	
		
		$result = $db->select_record( $query_string );
		
		if ( $result == false )
		{ 
			$query_string = "INSERT INTO cc_users ( email, pword, first_name, last_name, driver, home_street, home_apt, home_city, home_state, home_zip, home_country, commuting_for) VALUES 
			( '$user_name', '$pass_word', '$first_name', '$last_name', '$driver', '$address', '$address2', '$city', '$state', '$zip', '$country', '$need' )";
		
			$result = $db->insert_record( $query_string );
		
			if ( $result )
			{
				echo "Welcome!";
			}
		}
		else
		{
			echo "Username already taken.";
		}
		
		$db->close( );
		
	}
	else
	{
		echo "No empty fields.";
	}
?>
