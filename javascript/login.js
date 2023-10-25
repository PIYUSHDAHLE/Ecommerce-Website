// JavaScript code for handling the form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the entered email and password
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Check if the email and password are correct
  if (email === "admin@admin.com" && password === "123456") {
    alert("Login successful");
  } else {
    alert("Incorrect email or password");
  }
});
