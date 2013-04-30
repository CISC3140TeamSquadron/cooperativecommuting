<?php

	$conn = mysql_connect("localhost","kfilenko","eYX6ls") 
		or die('Could not connect:'.mysql_error());
	print "<br>"; 
	$db_found = mysql_select_db("kfilenko") or die( 'Could not select a database' );

	$query = 'SELECT home_street, home_city, home_state, home_zip, commute_street, commute_city, commute_state, commute_zip, commuting_for FROM cc_users';
	$result = mysql_query( $query ) or die( 'Query failed: '. mysql_error() );

	echo "<h2>Currently Available Carpools:</h2>";
	echo "<table border=1 cellspacing=0 cellpadding=20>\n";
	echo "<colgroup>";
    	echo "<col span=4 style=background-color:red>";
    	echo "<col span=4 style=background-color:yellow>";
	echo "<col span=1 style=background-color:white>";
  	echo "</colgroup>";
	echo "<th colspan=4>Starting Location:</th>";
	echo "<th colspan=4>Destination:</th>";
	echo "<th colspan=1>Other Info:</th>";
	echo "\t<tr>\n";
	echo "\t\t<td><b>Street</b></td>";
	echo "\t\t<td><b>City</b></td>";
	echo "\t\t<td><b>State</b></td>";
	echo "\t\t<td><b>Zip</b></td>";
	echo "\t\t<td><b>Street</b></td>";
        echo "\t\t<td><b>City</b></td>";
 	echo "\t\t<td><b>State</b></td>";
	echo "\t\t<td><b>Zip</b></td>";
	echo "\t\t<td><b>Reason For Commute</b></td>";


	while ( $row = mysql_fetch_array( $result, MYSQL_ASSOC )) {
		echo "\t<tr>\n";
		foreach ( $row as $item ) {
			echo "\t\t<td>$item</td>\n";
		}
		echo "\t</tr>\n";
	}
		echo "</table>\n";
		mysql_free_result( $result );

		



	mysql_close($conn);

?> 
