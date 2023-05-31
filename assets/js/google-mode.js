'use strict'

let googleMode = document.querySelector("#googleMode");

function switchGoogleMode() {
    let resultGoogleMode = confirm("Êtes-vous sûr de vouloir activer le Google Mode ?");
    if (resultGoogleMode) {
        localStorage.setItem("google-mode", true);
        alert("Google Mode a été activé ! Déconnectez-vous pour y avoir accès !");
    } else {
        alert("Accès refusé.");
    }
}

googleMode.addEventListener("click", switchGoogleMode);