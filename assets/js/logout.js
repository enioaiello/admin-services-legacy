'use strict'

const logoutButton = document.querySelector("#logout");

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("passsword");
    localStorage.removeItem("group");
    window.location.href = "../index.html";
}

logoutButton.addEventListener("click", logout);