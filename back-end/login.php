<?php
include 'connection.php';
//DOCUMENT_ROOT finds the path to root folder
// example: c:\xampp\htdocs
$root = $_SERVER['DOCUMENT_ROOT']."\\Google_Classroom_Clone\\";
include $root."back-end\\modules\\get-user-classes.php";

$json_data = file_get_contents('php://input');
$_POST = json_decode($json_data, true);

$email = $_POST['email'];
$password = $_POST['password'];

$query = $mysqli->prepare('select * from users where user_email=?');
$query->bind_param('s', $email);
$query->execute();
$query->store_result();

$query->bind_result($id,$email,$hashed_password,$firstname,$lastname,$type);
$query->fetch();

$num_rows = $query->num_rows();
if ($num_rows == 0) {
    $response['status'] = "Failed";
    $response['message'] = "Email not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = 'logged in';
        $response['user_id'] = $id;
        $response['firstname'] = $firstname;
        $response['lastname'] = $lastname;
        $response['email'] = $email;
        $response['role'] = $type;
        $response['classes'] = getClasses($mysqli, $id);
    } else {
        $response['status'] = "Failed";
        $response['message'] = "Incorrect Password";
    }
}
echo json_encode($response);