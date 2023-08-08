<?php
$root = $_SERVER['DOCUMENT_ROOT']."\\Google_Classroom_Clone\\";
include $root."back-end\\connection.php";

/*
    Assuming data is recieved as follows:
    {
        user_id: #####
        class_id: #####
    }

*/

/*
    TO BE IMPLEMENTED:                                      ==> all done
    >> check if class already exists                        ==> done
    >> check if user is already a member in this class      ==> done
        >>if not: add user                                  ==> done
        >>else: return user already exists                  ==> done
    >>return true if joined successfully; false if not.     ==> done

*/

function classExists($mysqli, $class_id){
    $stmt_check_if_class_exists = "
        select * from classrooms
        where classroom_id = ?
    ";

    $check_if_class_exists = $mysqli->prepare($stmt_check_if_class_exists);
    $check_if_class_exists->bind_param('s',$class_id);
    $check_if_class_exists->execute();
    $check_if_class_exists->store_result();

    if($check_if_class_exists->num_rows() > 0){
        return true;
    }
    return false;
    
    

}

function isMember($mysqli, $class_id, $student_id){
    if(classExists($mysqli, $class_id)){
        $stmt_check_if_member = "
            select * from classroom_users
            where classroom_id = ?
            and student_id = ?

        ";

        $check_if_member = $mysqli->prepare($stmt_check_if_member);
        $check_if_member->bind_param('ss',$class_id, $student_id);
        $check_if_member->execute();
        $check_if_member->store_result();

        if($check_if_member->num_rows() > 0){
            return true;
        }
        return false;
    }
    return false;
}

function joinClass($mysqli, $class_id, $student_id){
    if(!isMember($mysqli, $class_id, $student_id)){
        $stmt_add_student_to_class="
            insert into classroom_users
            (Student_id ,classroom_id)
            values
            (?, ?)
        ";
        $add_student_to_class = $mysqli->prepare($stmt_add_student_to_class);
        $add_student_to_class->bind_param('ss', $student_id, $class_id);
        $status = $add_student_to_class->execute();

        return $status;
    }

    return false;

}