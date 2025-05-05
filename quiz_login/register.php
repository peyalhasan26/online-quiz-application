

<?php
include("connection.php");
$msg = '';

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = sha1($_POST['password']);
    $cpassword = sha1($_POST['cpassword']);
    $select = "SELECT * FROM user WHERE email='$email' AND password='$password'";
    $select_user = mysqli_query($conn, $select);
    if (mysqli_num_rows($select_user) > 0) {
         $msg = "User already exists";
    } else {
             if ($password != $cpassword) {
                $msg = "Passwords do not match";
        }else {
                $insert = "INSERT INTO `user` (name, email, password) VALUES ('$name', '$email', '$password')";
                  mysqli_query($conn, $insert); 
                    $msg = "Registered successfully, login now!";
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="userStyle.css">
</head>
<body>
<div class="form">
    <form method="post">
        <h2>Registration</h2>
        <h3 class="msg"><?= $msg ?></h3>
        <div class="form-group">
            <input type="text" name="name" placeholder="user name" class="form-control" required>
        </div>
        <div class="form-group">
            <input type="email" name="email" placeholder="Email" class="form-control" required>
        </div>
        <div class="form-group">
            <input type="password" name="password" placeholder=" Password" class="form-control" required>
        </div>
        <div class="form-group">
            <input type="password" name="cpassword" placeholder="Confirm Password" class="form-control" required>
        </div>
        <button type="submit" name="submit" class="btn btn-primary">Register</button>
        <p>Already have an account? <a href="login.php">Login now</a></p>
    </form>
</div>
</body>
</html>
