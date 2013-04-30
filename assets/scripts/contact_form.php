<?php

	/*

	contact_form.php - sends email to site admins

	Author: Drraisy Sabel
	
	*/

	include( "connect.php" );
	
	$fname = "";
	$lname = "";
	$email_add = "";
	$message = "";
	
	
	if ( isset( $_POST[ 'fname' ] ) )
	{ 		
		$fname = $_POST[ 'fname'  ];
	}
	
	if ( isset( $_POST[ 'lname' ] ) )
	{
		$lname = $_POST[ 'lname'  ];
	}
	
	if ( isset( $_POST[ 'email_add' ] ) )
	{
		$email_add = $_POST[ 'email_add' ];
	}
	
	if ( isset( $_POST[ 'message' ] ) )
	{
		$message = $_POST[ 'message'  ];
		$message = wordwrap($message, 70, "\r\n");		
	}
	
	$to = 'cisc3140-team-squadron@googlegroups.';
	$subject = 'Contact Us Form';
	$headers = 'From:'. email_add . "\r\n" . 'Reply-To:' .email_add . "\r\n" . 'X-Mailer: PHP/' . phpversion();
	
	$mail = mail($to, $subject, $message, $headers);
	
	if ( $mail )
	{
		echo "Message Sent!";
	}
	
	else
	{
		echo "Requires special server permissions.";
	}

?>	
	