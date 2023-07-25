<?php

include 'connection.php';
$root = $_SERVER['DOCUMENT_ROOT']."\\Google_Classroom_Clone\\";
include $root."back-end\\modules\\join-class.php";

$json_data = file_get_contents('php://input');
$_POST = json_decode($json_data, true);

$user_id = $_POST['user_id'];
$class_id = $_POST['class_id'];

$response['status'] = joinClass($mysqli, $class_id, $user_id);

echo json_encode($response);