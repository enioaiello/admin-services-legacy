'use strict';

const registrationForm = document.querySelector("#registrationForm");
const emailInput = document.querySelector("input[type=email]");
const submitButton = document.querySelector("input[type=submit]");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
let accountType = localStorage.getItem("group");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const token = generateToken();
    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    if (username === "") {
        username = generateUsername();
    }

    if (password === "") {
        alert("Le champ du mot de passe ne peut pas être vide.");
        return;
    }

    const email = emailInput.value.trim();
    if (email === "") {
        alert("Le champ de l'adresse email ne peut pas être vide.");
        return;
    }

    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("createdAccount", true);
    localStorage.setItem("group", "basic");

    redirect();
});

function generateToken() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let token = "";
    for (let i = 0; i < 20; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

function generateUsername() {
    const characters = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789";
    let username = "";
    for (let i = 0; i <= 16; i++) {
        username += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return username;
}

function redirect() {
    window.location.href = "../panel.html";
}
