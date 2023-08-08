<?php
include 'connection.php';
// $root= $_SERVER["DOCUMENT_ROOT"] . "\\Google_Classroom_Clone\\";
// include $root . "back-end\\connection.php";

// Read from request payload
$userId = $_POST["user_id"];
$lastName = $_POST["last_name"];
$firstName = $_POST["first_name"];
$password = password_hash($_POST["password"], PASSWORD_BCRYPT);


if (!$userId) echo json_decode("User id is required");

// Get User
$getUserQuery = $mysqli->prepare("select * from users where user_id=?"); // same as column name
$getUserQuery->bind_param("s", $userId);
$getUserQuery->execute();
$query->bind_result($id, $email, $oldHashedPassword, $oldFirstname, $oldLastname, $type); // Values from database query
$query->fetch();

$userExists = $query->num_rows(); //returns the number of rows in the result set

//Check if code stops here
if (!$userExists) echo json_decode("User doesn't exist");

// Update User
$updateUserQuery = $mysqli->prepare("UPDATE users SET first_name =?, last_name =?, password=?");
$updateUserQuery->bind_param("sss", $firstName ?? $oldFirstname, $lastName ?? $oldLastname, $password ?? $oldHashedPassword);
$updateUserQuery->execute();

// Re-get updated user
$getUserQuery = $mysqli->prepare("select * from users where user_id=?"); // same as column name
$getUserQuery->bind_param("s", $userId);
$getUserQuery->execute();
$query->bind_result($id, $email, $newHashedPassword, $newFirstname, $newLastname, $type); // Values from database query
$query->fetch();

$response["status"] = "User updated";
$response["user_id"] = $id;
$response['firstname'] = $newFirstname;
$response['lastname'] = $newLastname;
$response['email'] = $email;
$response['role'] = $type;

echo json_encode($response);
