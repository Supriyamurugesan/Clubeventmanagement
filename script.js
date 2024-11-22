document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password from the form
    var username = document.getElementsByName("uname")[0].value;
    var password = document.getElementsByName("upswd")[0].value;

    // Perform your login validation logic here
    // This is just a simple example, replace it with your actual validation logic
    if (username === "your_valid_username" && password === "your_valid_password") {
        // Redirect to another page after successful login
        window.location.href = "cithome.html"; // Replace 'dashboard.html' with your desired page
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
