'use strict';

let registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let emailInput = document.getElementById("email");
    let password = prompt("Veuillez entrer votre mot de passe :");
    let confirmPassword = prompt("Veuillez confirmer votre mot de passe :");

    if (emailInput.value.includes("@") && password && password === confirmPassword) {
        let user = {
            username: "",
            email: emailInput.value,
            password: password,
            token: generateToken()
        };

        saveUser(user);
        redirect();
    } else {
        passwordError.classList.remove("none");
        setTimeout(hideErrorText, 3500);
    }
});

function generateToken() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 20; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

function saveUser(user) {
    let users = localStorage.getItem("users");
    if (!users) {
        users = [];
    } else {
        users = JSON.parse(users);
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

function redirect() {
    window.location.href = "../admin.html";
}

function hideErrorText() {
    passwordError.classList.add("none");
}
