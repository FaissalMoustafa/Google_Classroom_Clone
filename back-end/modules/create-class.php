<?php

$root = $_SERVER['DOCUMENT_ROOT']."\\Google_Classroom_Clone\\";
include $root."back-end\\connection.php";

/*
    Assuming the request looks like this:
    {
        teacher_id: ####
        class_title: #####
        class_description: #####
    }
*/

function createClass($mysqli, $teacher_id, $class_title, $class_description){
    //database query
    $stmt_create_class = "
        insert into classrooms
        (teacher_id, class_title, class_description)
        values
        (?,?,?)
    ";
}