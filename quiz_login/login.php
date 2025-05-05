<?php

include("connection.php");
$msg = '';  
session_start();
if(isset($_POST['submit'])){

    $email = $_POST['email'];
    $password = sha1($_POST['password']);
    $select = "SELECT * FROM user WHERE email='$email' AND password='$password'";
    $select_user = mysqli_query($conn, $select);
    if (mysqli_num_rows($select_user) > 0) {
       $row1=mysqli_fetch_assoc($select_user);
       $_SESSION['email']=$row1['email'];
       $_SESSION['name']=$row1['name'];
       $_SESSION['id']=$row1['id'];
       header('location:home.php');

    } 
    else{
        $msg = "incorrect email and password";
    }

}

?>



<!DOCTYPE html>
<html>
<head>
    <title>login</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="userStyle.css">
</head>
<body>
<div class="form">
    <form method="post">
        <h2>login</h2>
        <h3 class="msg"><?= $msg ?></h3>
        
        <div class="form-group">
            <input type="email" name="email" placeholder=" Email" class="form-control" required>
        </div>
        <div class="form-group">
            <input type="password" name="password" placeholder="Password" class="form-control" required>
        </div>
       
        <button type="submit" name="submit" class="btn btn-primary">login</button>
        <p>don't have an account? <a href="register.php">register now</a></p>
    </form>
</div>
</body>
</html>
