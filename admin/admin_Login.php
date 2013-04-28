<html>
  <head>	
  
    <title>Cooperative Commuting Administrators Login</title>
	
    <style> h1 {text-align:center} </style>
    <h1>Cooperative Commuting Administrators Page</h1>

  </head>

  <body>
	
    <form method='post' action='admin_Login_Validation.php'>
	<?php
		echo "<table border='4' align='center' >";
		echo ("<tr><td>Email:<input type='email' name='user_email'></td></tr>");
		echo ("<tr><td>Password:<input type='password' name='user_password'></td></tr>");
		echo ("<tr><td><input type='submit' name='submit_value' 
			  value='Login' align='center'></td>");
		echo "</table>";
	?>
	
    </form>

  </body>
</html>