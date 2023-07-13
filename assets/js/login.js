'use strict'

let usernameInput = document.querySelector("input[type=email]");
let loginButton = document.querySelector("input[type=submit]");
let passwordInput = document.querySelector("input[type=password]");
let passwordError = document.querySelector(".loginError");

let user = [
    {
        username: "Enio Aiello",
        email: "aielloenio@icloud.com",
        password: "Sezfet97",
        token: "4555d6zd46da465z465d4c58",
        group: "plus"
    }
]

const redirect = () => {
    window.location.href = "./views/login/loginAnimation.html";
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
        if (usernameInput.value === "root@admin-services.com") {
            alert("Nous sommes désolés mais le compte universel n'est plus accessible.")
        } else if (usernameInput.value === i.email && passwordInput.value === i.password) {
            redirect()
            localStorage.setItem('token', i.token);
            localStorage.setItem('username', i.username);
            localStorage.setItem('email', i.email);
            localStorage.setItem('password', i.password);
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