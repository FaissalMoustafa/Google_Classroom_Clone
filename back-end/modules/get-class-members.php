<?php
    $root = $_SERVER['DOCUMENT_ROOT']."\\Google_Classroom_Clone\\";
    include $root."back-end\\connection.php";

    function getClassMembers($mysqli, $class_id){
        $stmt_class_members = "
        select users.user_id, first_name, last_name, user_email from users
        join classroom_users as members on users.user_id = members.student_id
        where members.classroom_id = ?;
        ";

        $get_class_memebers = $mysqli->prepare($stmt_class_members);
        $get_class_memebers->bind_param('s',$class_id);
        $get_class_memebers->execute();
        $get_class_memebers->store_result();

        $get_class_memebers->bind_result($member_id, $first_name, $last_name, $email);
        $members = array();
        if($get_class_memebers->num_rows() > 0){
            while($get_class_memebers->fetch()){
                $members[] = [
                    "member_id"=>$member_id,
                    "first_name"=>$first_name,
                    "last_name"=>$last_name,
                    "email"=>$email
                ];
            }
            return $members;
        } else {
            return [];
        }
}

