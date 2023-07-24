<?php
    $root = "C:\\xampp\\htdocs\\Google_Classroom_Clone\\";
    include("$root.\\back-end\\connection.php");

    function getClasses($mysqli, $user_id){
        $stmt_class_details = "
        select u.classroom_id, c.class_title, c.teacher_id 
        from classroom_users u
        join classrooms as c on u.classroom_id = c.classroom_id
        where student_id = ?;
        ";
        $stmt_class_members = "
        select users.user_id, first_name, last_name from users
        join classroom_users as members on users.user_id = members.student_id
        where members.classroom_id = ?;
        ";
        $get_user_classrooms = $mysqli->prepare($stmt_class_details);
        $get_user_classrooms->bind_param('s',$user_id);
        $get_user_classrooms->execute();
        $get_user_classrooms->store_result();

    };
