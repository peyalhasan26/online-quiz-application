<?php
include('connection.php');
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <title> Online Quiz application</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="userStyle.css">
    <link rel="stylesheet" href="style.css">
   
</head>
<body>
<nav class="navbar">
    <h1 class="logo">logo</h1>
    <ul>
        <li><a href="home.php">Home</a></li>
        <li><a href="home.php">About</a></li>
        <li><a href="home.php">Services</a></li>
        <li><a href="home.php">Contact</a></li>
        <li><a href="home.php">Orders</a></li>
    </ul>
    <div class="profile-actions">
    <span>Profile: <?php echo $_SESSION['name']; ?></span>
    <a href="logout.php" class="btn btn-danger btn-sm logout_btn">Logout</a>
    </div>
</nav>

<div class="home_section">
    <h1 class="user">Welcome <?php echo $_SESSION['name'];?>, To Our Quiz Test</h1>
</div>

<!-- Quiz Section -->
<div class="quiz-container" id="quiz">
    <div class="quiz-header">
        <h2 id="question">Question Text</h2>
        <div id="timer">Time: 60s</div>
        <div id="progress">Question 1 of 10</div>
        <ul>
            <li>
                <input type="radio" name="answer" id="a" class="answer">
                <label for="a" id="a_text">Answer A</label>
            </li>
            <li>
                <input type="radio" name="answer" id="b" class="answer">
                <label for="b" id="b_text">Answer B</label>
            </li>
            <li>
                <input type="radio" name="answer" id="c" class="answer">
                <label for="c" id="c_text">Answer C</label>
            </li>
            <li>
                <input type="radio" name="answer" id="d" class="answer">
                <label for="d" id="d_text">Answer D</label>
            </li>
        </ul>
    </div>
    <button id="submit">Submit</button>
</div>

<div class="result-container" id="result" style="display: none;">
    <h2>Quiz Completed!</h2>
    <p id="score-text">Your score: 0/10</p>
    <p id="time-text">Time remaining: 0s</p>
    <button id="restart">Restart Quiz</button>
</div>

<script src="script.js"></script>

</body>
</html>