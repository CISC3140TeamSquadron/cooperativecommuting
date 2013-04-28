<?php

	/*

	login_user.php - Logins in the user from the DB.

	Author: DAVID LETTIER
	   Bio: http://www.lettier.com/

	*/

	include( "connect.php" );
	
	$user_name = "";
	$pass_word = "";
	$last_accessed = date( "Y-m-d" );	
	
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
	
		$query_string = "SELECT * FROM " . $data_base_table . " WHERE uname = '" . $user_name . "' AND pword = '" . $pass_word . "'";
		
		$result = $db->select_record( $query_string );
		
		if( count( $result ) ) 
		{
	
			foreach( $result as $r ) 
			{
				$user_name      = $r['uname'];
				$first_name     = $r['fname'];
				$last_name      = $r['lname'];
				$last_accessed  = $r['lastaccessed'];
			}
		
			$query_string = "UPDATE " . $data_base_table . " SET lastaccessed = '" . $last_accessed ."' WHERE uname = '" . $user_name ."' AND pword ='" . $pass_word . "'";
		
			$result = $db->update_record( $query_string );
		
			if ( $result )
			{
					echo "Welcome back!;" . $user_name . ";" . $first_name . ";" . $last_name . ";" . $last_accessed . ";";
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
