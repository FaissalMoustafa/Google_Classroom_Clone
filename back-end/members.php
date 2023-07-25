<?php

include 'connection.php';
$root = $_SERVER['DOCUMENT_ROOT']."\\Google_Classroom_Clone\\";
include $root."back-end\\modules\\get-class-members.php";

$json_data = file_get_contents('php://input');
$_POST = json_decode($json_data, true);

$class_id = $_POST['class_id'];

$members = getClassMembers($mysqli, $class_id);

$response['members'] = $members;

echo json_encode($response);

