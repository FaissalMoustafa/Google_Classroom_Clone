<?php

$root = $_SERVER['DOCUMENT_ROOT']."\\Google_Classroom_Clone\\";
include $root."back-end\\connection.php";


function createClass($mysqli, $teacher_id, $class_title, $class_description){
    
    $stmt_create_class = "
        insert into classrooms
        (teacher_id, class_title, class_description)
        values
        (?,?,?)

        update teacher_id 
    ";

    $create_class = $mysqli->prepare($stmt_create_class);
    $create_class->bind_param('sss',$teacher_id, $class_title, $class_description);
    $is_class_created = $create_class->execute();

    if($is_class_created)
        return $is_class_created;

    return false;
}