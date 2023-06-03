'use strict';

const username = localStorage.getItem("username");
const token = localStorage.getItem("token");
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");
const group = localStorage.getItem("group");
const usernameLabel = document.querySelector("#usernameInformation");
const tokenLabel = document.querySelector("#tokenInformation");
const emailLabel = document.querySelector("#emailInformation");
const passwordLabel = document.querySelector("#passwordInformation");
const groupLabel = document.querySelector("#groupInformation");
const groupArticle = document.querySelector("#groupArticle");

if (username) {
    usernameLabel.textContent = username;
}

if (username === "root") {
    usernameLabel.textContent = username + " (ancien compte)";
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

if (group) {
    groupLabel.textContent = group;
    groupArticle.classList.remove("none");
}