<?php

	/*

	connect.php - For connecting to the DB..

	Author: DAVID LETTIER
	   Bio: http://www.lettier.com/

	*/

	require( "/virtual/users/e14157-14235/storage/vars.php" ); // needed for user id / pass to database
	include ( "config.php" );

	class db 
	{	
		private $dbh;

		function __construct( $id, $pass, $db_name )
		{
			$this->dbh = mysql_pconnect( "localhost", $id, $pass ) or die( mysql_error( ) ); 
			
			$db_found = mysql_select_db( $db_name, $this->dbh ) or die( mysql_error( ) );
			
			if ( !( $db_found ) )
			{
				echo "Could not connect to database.";
				
				$this->close( );
				
				return false;
			}			
			
			mysql_query( 'SET NAMES utf8' );
		}

		function select_record( $query )
		{
			$query = mysql_real_escape_string( $query );
			
			$q = mysql_query( $query );
			
			if ( !$q ) 
			{ 
				echo mysql_error( );
				return false; 
			}
			
			$ret = array();
			
			while ( $row = mysql_fetch_array( $q, MYSQL_ASSOC ) ) 
			{
				array_push( $ret, $row );
			}
			
			mysql_free_result( $q );
			
			return $ret;
		}
		
		function update_record( $query )
		{
			$query = mysql_real_escape_string( $query );
			
			$db_query = mysql_query( $query ) or die( mysql_error( ) );
			 
			if ( $db_query )
			{
				return true;
			}
			else
			{
				echo mysql_error();
				return false;
			}
		}
		
		function insert_record( $query )
		{
			$query = mysql_real_escape_string( $query );
			
			$db_query = mysql_query( $query ) or die( mysql_error( ) ); 
			
			if ( $db_query )
			{
				return true;
			}
			else
			{
				echo mysql_error();
				return false;
			}
		}
		
		function close( )
		{
			mysql_close( $this->dbh );
		}
	}
	
	$db = new db( $data_base_id, $data_base_pass, $data_base_name );
	
?>
