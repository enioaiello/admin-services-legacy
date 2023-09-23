'use strict'

let googleMode = document.querySelector("#googleMode");

function switchGoogleMode() {
    let resultGoogleMode = confirm("Êtes-vous sûr de vouloir activer le Google Mode ?");
    if (resultGoogleMode) {
        localStorage.setItem("google-mode", true);
        alert("Retour à la page de connexion...");
        window.location.href = "../index.html";
    }
}

googleMode.addEventListener("click", switchGoogleMode);