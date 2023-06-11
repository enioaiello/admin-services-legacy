// 'use strict';

// let loginButton = document.querySelector("input[type=submit]");
// let usernameInput = document.querySelector("input[type=email]");
// let passwordInput;
// let passwordError = document.querySelector(".loginError");

// let user = [
//     {
//         username: "Enio Aiello",
//         email: "aielloenio@icloud.com",
//         password: "EnioAiello1",
//         token: "4555d6zd46da465z465d4c58"
//     },
//     {
//         username: "Compte universel",
//         email: "root@admin-services.com",
//         password: "toor",
//         token: "8535d6zd46db565z465d4a57"
//     },
// ];

// const redirect = () => {
//     window.location.href = "../admin.html";
// };

// const verifyToken = () => {
//     const token = localStorage.getItem("token");
//     for (const i of user) {
//         if (i.token === token) {
//             loginButton.disabled = true;
//             usernameInput.disabled = true;
//             setTimeout(redirect, 100);
//             return;
//         }
//     }
// };

// verifyToken();

// const login = (loginParameters) => {
//     loginParameters.preventDefault();
//     const email = usernameInput.value;
//     if (email.includes('@')) {
//         passwordInput = prompt("Veuillez entrer votre mot de passe :");
//         if (passwordInput) {
//             const confirmPassword = prompt("Veuillez confirmer votre mot de passe :");
//             if (confirmPassword === passwordInput) {
//                 const token = generateToken();
//                 saveUser(email, passwordInput, token);
//                 redirect();
//             } else {
//                 passwordError.classList.remove("none");
//                 setTimeout(hideErrorText, 3500);
//             }
//         }
//     }
// };

// function generateToken() {
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let token = "";
//     for (let i = 0; i < 20; i++) {
//         token += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return token;
// }

// function saveUser(email, password, token) {
//     const newUser = {
//         username: "",
//         email: email,
//         password: password,
//         token: token
//     };
//     user.push(newUser);
//     localStorage.setItem('token', token);
//     localStorage.setItem('username', '');
//     localStorage.setItem('email', email);
//     localStorage.setItem('password', password);
// }

// function hideErrorText() {
//     passwordError.classList.add("none");
// }

// // Récupérer les données du localStorage et les stocker dans l'objet user
// const storedEmail = localStorage.getItem('email');
// const storedPassword = localStorage.getItem('password');
// if (storedEmail && storedPassword) {
//     user.push({
//         username: "",
//         email: storedEmail,
//         password: storedPassword,
//         token: ""
//     });
// }

// loginButton.addEventListener("click", login);


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