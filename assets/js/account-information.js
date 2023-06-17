'use strict';

const username = localStorage.getItem("username");
const token = localStorage.getItem("token");
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");
const group = localStorage.getItem("group");
let sessionShopei = localStorage.getItem("session");
let createdSession = localStorage.getItem("createdAccount");
const usernameLabel = document.querySelector("#usernameInformation");
const tokenLabel = document.querySelector("#tokenInformation");
const emailLabel = document.querySelector("#emailInformation");
const passwordLabel = document.querySelector("#passwordInformation");
const groupLabel = document.querySelector("#groupInformation");
const groupArticle = document.querySelector("#groupArticle");
const sessionInformation = document.querySelector("#shopeiInformation");
const sessionArticle = document.querySelector("#sessionArticle");
const createdArticle = document.querySelector("#createdArticle");

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

if (sessionShopei) {
    sessionInformation.textContent = sessionShopei;
    sessionArticle.classList.remove("none");
}

if (createdSession) {
    createdArticle.textContent("Compte enregistré sur l'appareil");
}