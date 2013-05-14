<?php

	/*

	add_user.php - Creates acount for user in the DB.

	Author: DAVID LETTIER
	   Bio: http://www.lettier.com/

	*/

	include( "connect.php" );
	
	$user_name = "";
	$first_name = "";
	$last_name = "";
	$driver = "";
	$address = "";
	$address2 = "";
	$city = "";
	$state = "";
	$zip = "";
	$country = "";
	$need = "";

	if ( isset( $_POST[ 'user_name' ] ) )
	{ 		
		$user_name = mysql_real_escape_string( $_POST[ 'user_name'  ] );
	}
	
	if ( isset( $_POST[ 'first_name' ] ) )
	{
		$first_name = mysql_real_escape_string( $_POST[ 'first_name' ] );
	}
	
	if ( isset( $_POST[ 'last_name' ] ) )
	{
		$last_name = mysql_real_escape_string( $_POST[ 'last_name'  ] );	
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
	
	if ( $user_name != "" || $first_name != "" || $last_name != "" || $driver != "" || $address != "" || $address2 != "" || $city != "" || $state != "" || $zip != "" || $country != "" || $need != ""  )
	{
	
		$query_string = "SELECT email FROM cc_users WHERE email = '$user_name'";	
		
		$result = $db->select_record( $query_string );
		
		if ( $result != false )
		{ 
			$query_string = "UPDATE cc_users SET first_name='$first_name', last_name='$last_name', driver='$driver', home_street='$address', home_apt='$address2', home_city='$city', home_state='$state', home_zip='$zip', home_country='$country', commuting_for='$need' WHERE 
			email='$user_name'";
		
			$result = $db->update_record( $query_string );
		
			if ( $result )
			{
				echo "Updated!";
			}
			else
			{
				echo $result;
			}
		}
		else
		{
			echo "User does not exist: " . $user_name;
		}
		
		$db->close( );		
	}
	else
	{
		echo "No empty fields.";
	}
?>
