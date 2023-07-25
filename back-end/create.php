<?php

include 'connection.php';
$root = $_SERVER['DOCUMENT_ROOT']."\\Google_Classroom_Clone\\";
include $root."back-end\\modules\\create-class.php";

$json_data = file_get_contents('php://input');
$_POST = json_decode($json_data, true);

$teacher_id = $_POST['teacher_id'];
$class_title = $_POST['class_title'];
$class_description = $_POST['class_description'];

$status = createClass($mysqli, $teacher_id, $class_title, $class_description);

if($status){
    $response['status'] = "created";
    header('Content-Type: application/json'); 
    echo json_encode($response);
}
else{
$response['status'] = "failed";

header('Content-Type: application/json'); 
echo json_encode($response);
}