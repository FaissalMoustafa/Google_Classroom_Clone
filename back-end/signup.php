<?php
include 'connection.php';


$json_data = file_get_contents('php://input');
$_POST = json_decode($json_data, true);



$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$password = $_POST['password'];
$email = $_POST['email'];
$type = $_POST['type'];

$check_email = $mysqli->prepare('select user_email from users where user_email=?');
$check_email->bind_param('s', $email);
$check_email->execute();
$check_email->store_result();
$email_exists = $check_email->num_rows();

if ($email_exists == 0) {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $query = $mysqli->prepare('insert into users(user_email,user_password,first_name,last_name,user_type) values(?,?,?,?,?)');
    $query->bind_param('sssss',$email, $hashed_password, $firstname, $lastname, $type);
    $query->execute();
    
    $response['status'] = "success";
    $response['message'] = "Account added succesfully";
}
else{
    $response['status'] = "failed";
    $response['message'] = "There is already a user with this email!";
}
header('Content-Type: application/json'); 
echo json_encode($response);
