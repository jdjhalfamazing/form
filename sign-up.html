<?php 
    session_start();

    include("db.php");

    if($_SERVER['REQUEST_METHOD'] == "POST")
    {
        $firstname = $_POST['fname'];
        $lastname = $_POST['lname'];
        $gender = $_POST['gender'];
        $num = $_POST['cnum']; // Corrected input name
        $address = $_POST['address']; // Corrected input name
        $email = $_POST['email']; // Corrected input name
        $password = $_POST['pass'];

        if(!empty($email) && !empty($password) && !is_numeric($email))
        {
            $query = "INSERT INTO form (fname, lname, gender, cnum, address, email, pass) VALUES ('$firstname', '$lastname', '$gender', '$num', '$address', '$email', '$password')";
            
            // Establish connection to database
            $con = mysqli_connect("hostname", "username", "password", "database_name");
            
            // Check connection
            if (mysqli_connect_errno()) {
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
                exit();
            }

            mysqli_query($con, $query);

            echo "<script type='text/javascript'> alert('Successfully Registered')</script>";

        }
        else
        {
            echo "<script type='text/javascript'> alert('Please Enter Some Valid Information')</script>";

        }
    }
?>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up - Workout App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <div class="container">
      <h1>Welcome to Your Workout Planner</h1>
      <nav>
        <ul>
          <li><a href="index.html" id="home-link">Home</a></li>
          <li><a href="profile.html" id="profile-link">Profile</a></li>
          <li><a href="#" id="logout-link">Logout</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <div class="container">
    <h2>Sign Up</h2>
    <form id="signup-form" method="post" action="sign-up.php">
    <div>
        <label for="fname">First Name:</label>
        <input type="text" id="fname" name="fname" required>
    </div>

    <div>
        <label for="lname">Last Name:</label>
        <input type="text" id="lname" name="lname" required>
    </div>

    <div>
        <label for="gender">Gender:</label>
        <input type="text" id="gender" name="gender" required>
    </div>

    <div>
        <label for="cnum">Phone Number:</label>
        <input type="tel" id="cnum" name="cnum" required>
    </div>

    <div>
        <label for="address">Address:</label>
        <input type="text" id="address" name="address" required>
    </div>

    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div>
        <label for="pass">Password:</label>
        <input type="password" id="pass" name="pass" required>
    </div>
     
    <button type="submit">Sign Up</button>
</form>

    <p>Already have an account? <a href="sign-in.html">Sign In</a></p> <!-- Link/button for signing in -->

  </div>

  <footer>
    <div class="container">
      <p>&copy; Joebeast Technologies. All rights reserved.</p>
    </div>
  </footer>

  <script src="sign-up.php"></script> <!-- Assuming you have a JavaScript file for sign-up functionality -->
</body>
</html>
