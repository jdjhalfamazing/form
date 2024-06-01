<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In - Workout App</title>
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
    <h2>Sign In</h2>
    <form id="signin-form">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button type="submit">Sign In</button>
    </form>
    <p>Don't have an account yet? <a href="sign-up.html">Sign Up</a></p> <!-- Link to the sign-up page -->
  </div>

  <footer>
    <div class="container">
      <p>&copy; Joebeast Technologies. All rights reserved.</p>
    </div>
  </footer>

  <script src="sign-in.php"></script> <!-- Assuming you have a JavaScript file for sign-in functionality -->
</body>
</html>
