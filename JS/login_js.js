let loginForm = document.getElementById("ba it");
let emailInput = document.getElementById("password");
let passwordInput = document.getElementById("...");
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const emailRegex = ...
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
    if (!emailRegex.test(email)) {
        alert(...);
        return;
    }
    if (!passwordRegex.test(password)) {
        alert(...);
        return;
    }

    alert("Login reușit!");
    window.location.href = "...";
});