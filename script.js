function validatePassword(password) {
    
    if (!( /[a-z]/.test(password) && /[A-Z]/.test(password) && password.length < 8)) {
        return "Password must include uppercase and lowercase letters.";
    }

    return "";
}

document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    console.log("Password attempt:", password);

    let error = validatePassword(password);

    if (error !== "") {
        document.getElementById("error").innerText = error;
        console.warn("Validation failed:", error);
        return;
    }

    // Save to localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password });

    localStorage.setItem("users", JSON.stringify(users));

    console.log("User saved:", username);
    alert("Registration successful!");

    document.getElementById("registerForm").reset();
});
