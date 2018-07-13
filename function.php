

<?php
function  connect()
{
	$dsn = "mysql:dbname=college; host=localhost;";
	$password = "";
	$user = "root";
	
	$dbh = new PDO($dsn, $user, $password);
	
	return $dbh;
	
}
?>