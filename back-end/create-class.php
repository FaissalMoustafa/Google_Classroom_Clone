<?php

include 'connection.php';
$root = $_SERVER['DOCUMENT_ROOT']."\\Google_Classroom_Clone\\";
include $root."back-end\\modules\\create-class.php";

$json_data = file_get_contents('php://input');
$_POST = json_decode($json_data, true);

