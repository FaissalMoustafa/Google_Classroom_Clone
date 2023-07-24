<?php
    $root = "C:\\xampp\\htdocs\\Google_Classroom_Clone\\";
    include("$root.\\back-end\\connection.php");
    $con = $mysqli;
    function getClasses($mysqli, $user_id){
        $statement = "
        select u.classroom_id, c.class_title, c.teacher_id 
        from classroom_users u
        join classrooms as c on u.classroom_id = c.classroom_id
        where student_id = ?;
        ";
        $get_user_classrooms = $mysqli->prepare($statement);
        $get_user_classrooms->bind_param('s',$user_id);
        $get_user_classrooms->execute();
        $get_user_classrooms->store_result();
    };
