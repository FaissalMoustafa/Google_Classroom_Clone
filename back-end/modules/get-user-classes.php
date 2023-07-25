<?php
    $root = $_SERVER['DOCUMENT_ROOT']."\\Google_Classroom_Clone\\";
    include $root."back-end\\connection.php";

    function getClasses($mysqli, $user_id){
        $stmt_class_details = "
        select u.classroom_id, c.class_title, c.teacher_id, c.classroom_description 
        from classroom_users as u
        join classrooms as c on u.classroom_id = c.classroom_id
        where student_id = ?;
        ";

        $get_user_classrooms = $mysqli->prepare($stmt_class_details);
        $get_user_classrooms->bind_param('s',$user_id);
        $get_user_classrooms->execute();
        $get_user_classrooms->store_result();

        $get_user_classrooms->bind_result($class_id, $class_title, $teacher_id, $class_description);

        $classes = array();
        if($get_user_classrooms->num_rows() > 0){
            while($get_user_classrooms->fetch()){
                $classes[] = [
                    "class_id"=>$class_id,
                    "title"=>$class_title,
                    "description"=>$class_description,
                    "teacher_id"=>$teacher_id
                ];
            }

            return $classes;
        } else {
            return [];
        }

    };
?>