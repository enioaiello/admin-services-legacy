'use strict'

const information = document.querySelector("#information");
const version = "4.0.7";
let localVersion = localStorage.setItem("version", version);
const username = localStorage.getItem("username");
const welcomeText = document.querySelector("#welcomeText");

information.innerHTML = "<strong>Admin Services</strong> " + version;

function userNameDisplay() {
    let token = localStorage.getItem("token");
    if (token === null || username === null) {
        window.location.assign("../index.html");
    }
    welcomeText.innerHTML = "Bienvenue " + username;
}

localVersion;

userNameDisplay();