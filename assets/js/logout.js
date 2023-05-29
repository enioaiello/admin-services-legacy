'use strict'

const logoutButton = document.querySelector("#logout");

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.href = "../index.html";
}

logoutButton.addEventListener("click", logout);