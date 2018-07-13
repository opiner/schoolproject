<?php
require_once ("function.php");

$conn = connect();


$sql = "CREATE TABLE Student(
StudentId int (10) Primary Key Auto_increment not null,
First Varchar (30),
Last Varchar (30),
State Varchar (30),
Phone Varchar (30),
Dept Varchar (30),
Gender Varchar (20),
Matric Varchar (10),
Password Varchar(10),
)";

$con->query($sql);

?>

