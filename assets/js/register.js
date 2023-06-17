'use strict';

const registrationForm = document.querySelector("#registrationForm");
const emailInput = document.querySelector("input[type=email]");
const submitButton = document.querySelector("input[type=submit]");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const token = generateToken();
    const username = generateUsername();

    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("createdAccount", "true");

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
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let username = "";
    for (let i = 0; i < 8; i++) {
        username += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return username;
}

function redirect() {
    window.location.href = "../panel.html";
}
