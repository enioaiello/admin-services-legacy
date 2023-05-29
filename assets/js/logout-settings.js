'use strict';

const logoutButton = document.querySelector("#logout");

function logout() {
    const confirmLogout = confirm("Êtes-vous sûr de vouloir quitter la page ?");

    if (confirmLogout) {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        window.location.href = "../../index.html";
    }
}

logoutButton.addEventListener("click", logout);
