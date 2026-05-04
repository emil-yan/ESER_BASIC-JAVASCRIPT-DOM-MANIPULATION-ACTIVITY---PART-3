function validatePassword(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long. At least one lowercase letter, one UPPERCASE letter, and one number.";
    }

    if (!/[a-z]/.test(password)) {
        return "Password must be at least 8 characters long. At least one lowercase letter, one UPPERCASE letter, and one number.";
    }

    if (!/[A-Z]/.test(password)) {
        return "Password must be at least 8 characters long. At least one lowercase letter, one UPPERCASE letter, and one number.";
    }

    if (!/[0-9]/.test(password)) {
        return "Password must be at least 8 characters long. At least one lowercase letter, one UPPERCASE letter, and one number.";
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
