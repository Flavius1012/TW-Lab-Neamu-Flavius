let loginForm = document.getElementById("loginForm");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const emailRegex = /^[a-z]+\.[a-z]+\d{0,2}@e-uvt\.ro$/i
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{7,}$/;
    if (!emailRegex.test(email)) {
        alert("Adresa de e-mail nu corespunde cu cea institutionala!");
        return;
    }
    if (!passwordRegex.test(password)) {
        alert("Parola nu indeplineste conditiile!");
        return;
    }

    alert("Login reușit!");
    window.location.href = "./home.html";
});