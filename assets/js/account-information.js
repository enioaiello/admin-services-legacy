'use strict';

const username = localStorage.getItem("username");
const token = localStorage.getItem("token");
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");
const usernameLabel = document.querySelector("#usernameInformation");
const tokenLabel = document.querySelector("#tokenInformation");
const emailLabel = document.querySelector("#emailInformation");
const passwordLabel = document.querySelector("#passwordInformation");

if (username) {
    usernameLabel.textContent = username;
}

if (token) {
    tokenLabel.textContent = token;
}

if (email) {
    emailLabel.textContent = email;
}

if (password) {
    passwordLabel.textContent = password;
}