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
	$last_accessed = date( "Y-m-d" );
	
	
	if ( isset( $_POST[ 'user_name' ] ) )
	{ 		
		$user_name = $_POST[ 'user_name'  ];
	}
	
	if ( isset( $_POST[ 'pass_word' ] ) )
	{
		$pass_word = $_POST[ 'pass_word'  ];
	}
	
	if ( isset( $_POST[ 'first_name' ] ) )
	{
		$first_name = $_POST[ 'first_name' ];
	}
	
	if ( isset( $_POST[ 'last_name' ] ) )
	{
		$last_name = $_POST[ 'last_name'  ];	
	}
	
	
	if ( $user_name != "" || $pass_word != "" || $first_name != "" || $last_name != "" )
	{
	
		$query_string = "SELECT uname FROM " . $data_base_table . " WHERE uname = '" . $user_name . "'";
		
		$result = $db->select_record( $query_string );
		
		if ( $result == false )
		{ 
			$query_string = "INSERT INTO " . $data_base_table . " ( uname, pword, fname, lname, lastaccessed ) VALUES ( '$user_name', '$pass_word', '$first_name', '$last_name', '$last_accessed' )";
		
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
