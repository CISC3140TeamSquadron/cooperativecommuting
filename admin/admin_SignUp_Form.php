<html>
  <head>  
  
    <title>Cooperative Commuting administrators sign up</title>
	
    <style> h1 {text-align:center} </style>
    <h1>Become a Cooperative Commuting administrator!</h1>

  </head>

  <body>
	
    <form method='post' action='admin_SignUp.php'>
	<?php
		echo "<table cellspacing='0' align='center' >";
		
		echo ("<tr><td> <label for='user_email'> Email </label></td></tr>");
		echo ("<tr><td><input type='email' id='user_email' size='20' name='user_email' 
			 placeholder='Enter your email' maxlength='50' required></td></tr>");
		
		echo ("<tr><td> <label for='user_password'> Password </label></td></tr>");
		echo ("<tr><td><input type='password' id='password' size='20' name='user_password' 
			 placeholder='Enter a password' maxlength='10' required></td></tr>");
		
		echo ("<tr><td> <label for='firstname'> First Name </label></td></tr>");
		echo ("<tr><td><input type='text' id='firstname' size='20' name='firstname' 
			 placeholder='First Name' maxlength='30' required></td></tr>");

		echo ("<tr><td> <label for='lastname'> Last Name </label></td></tr>");
		echo ("<tr><td><input type='text' id='lastname' size='20' name='lastname' 
			 placeholder='Last Name' maxlength='30' required></td></tr>");
		
		echo ("<tr><td> <label for='security_answer'> What was the name of the software 
			engineer that Professor Meyer introduced to his CISC 3140 class? 
			</label></td></tr>");	 
			
		echo ("<tr><td><input type='text' id='security_answer'
			size='20' name='security_answer' placeholder='Enter the full name' 
			maxlength='40' required></td></tr>");
			
		echo ("<tr><td><input type='submit' name='submit_value' 
			  value='Sign up!'></td>");
		echo "</table>";
	?>
	
    </form>

  </body>
</html>
