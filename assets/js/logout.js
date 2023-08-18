'use strict'

const logoutButton = document.querySelector("#logout");

function logout() {
    let result = confirm("Se déconnecter ?");
    if (result) {
        localStorage.setItem('status', 'logout');
        window.location.href = "../../index.html";
    }
}

logoutButton.addEventListener("click", logout);