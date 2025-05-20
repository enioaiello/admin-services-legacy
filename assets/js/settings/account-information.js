const username = localStorage.getItem("username");
const email = localStorage.getItem("email");
const password = localStorage.getItem("password");
const usernameLabel = document.querySelector("#usernameInformation");
const emailLabel = document.querySelector("#emailInformation");
const passwordLabel = document.querySelector("#passwordInformation");

if (username) {
    usernameLabel.textContent = username;
}

if (email) {
    emailLabel.textContent = email;
}

if (password) {
    passwordLabel.textContent = password.replace(/./g, "*");
}