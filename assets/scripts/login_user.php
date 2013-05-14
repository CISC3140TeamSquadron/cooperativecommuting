<?php

	/*

	login_user.php - Logins in the user from the DB.

	Author: DAVID LETTIER
	   Bio: http://www.lettier.com/

	*/

	include( "connect.php" );
	
	$user_name = "";
	$pass_word = "";
	//$last_accessed = date( "Y-m-d" );	
	
	if ( isset( $_POST[ 'user_name' ] ) )
	{ 		
		$user_name = mysql_real_escape_string( $_POST[ 'user_name'  ] );
	}
	
	if ( isset( $_POST[ 'pass_word' ] ) )
	{
		$pass_word = mysql_real_escape_string( $_POST[ 'pass_word'  ] );
	}
	
	if ( $user_name != "" || $pass_word != "" )
	{
	
		$query_string = "SELECT * FROM " . cc_users . " WHERE email = '" . $user_name . "' AND pword = '" . $pass_word . "'";
		
		$result = $db->select_record( $query_string );
		
		if( count( $result ) ) 
		{
	
			foreach( $result as $r ) 
			{
				$user_name      = $r['email'];
				$first_name     = $r['first_name'];
				$last_name      = $r['last_name'];
				$driver			= $r['driver'];
				$address		= $r['home_street'];
				$address2		= $r['home_apt'];
				$city			= $r['home_city'];
				$state			= $r['home_state'];
				$zip			= $r['home_zip'];
				$country		= $r['home_country'];
				$commuting_for	= $r['commuting_for'];
			}
		
		//	$query_string = "UPDATE " . cc_users . " SET lastaccessed = '" . $last_accessed ."' WHERE email = '" . $user_name ."' AND pword ='" . $pass_word . "'";
		
			$result = $db->update_record( $query_string );
		
			if ( $result )
			{
					echo "Welcome back!;" . $user_name . ";" . $first_name . ";" . $last_name . ";" . $driver . ";" . $address . ";" . $address2 . ";" . $city . ";" . $state . ";" . $zip . ";" . $country . ";" . $commuting_for . ";";
			}
		
		}
		else
		{
			echo "You do not have an account. Why not sign up?";
		}
		
		$db->close( );		
	}
	else
	{
		echo "No empty fields.";
	}
?>
