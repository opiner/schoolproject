<?php
session_start();
require_once 'config.php';
$data = json_decode($_POST["data"]);
$con = con();