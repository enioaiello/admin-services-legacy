'use strict'

let loginButton = document.querySelector("input[type=submit]");
let usernameInput = document.querySelector("input[type=email]");
let passwordInput = document.querySelector("input[type=password]");
let passwordError = document.querySelector(".loginError");

let user = [
    {
        username: "Enio Aiello",
        email: "aielloenio@icloud.com",
        password: "EnioAiello1",
        token: "4555d6zd46da465z465d4c58"
    },
    {
        username: "Compte universel",
        email: "root@admin-services.com",
        password: "toor",
        token: "8535d6zd46db565z465d4a57"
    },
]

const redirect = () => {
    window.location.href = "./views/panel.html";
}

const verifyToken = () => {
    const token = localStorage.getItem("token");
    for (const i of user) {
        if (i.token === token) {
            loginButton.disabled = true;
            usernameInput.disabled = true;
            passwordInput.disabled = true;
            setTimeout(redirect, 100);
        }
    }
}

verifyToken();

const login = (loginParameters) => {
    loginParameters.preventDefault();
    for (const i of user) {
        if (usernameInput.value === i.email && passwordInput.value === i.password) {
            redirect()
            localStorage.setItem('token', i.token);
            localStorage.setItem('username', i.username);
            break;
        } else {
            passwordError.classList.remove("none");
            setTimeout(hideErrorText, 3500);
        }
    }
}

function hideErrorText() {
    passwordError.classList.add("none");
}

loginButton.addEventListener("click", login);