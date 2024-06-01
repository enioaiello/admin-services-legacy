let asReset = document.querySelector("#as-reset"); // Sélectionne l'élément avec l'ID "as-reset"
let passwordReset = document.querySelector("#password-reset"); // Sélectionne l'élément avec l'ID "password-reset"
let quit = document.querySelector("#quit"); // Sélectionne l'élément avec l'ID "quit"

function adminServicesReset() {
    let choice = confirm("Cette action va effacer vos données. Continuer ?"); // Affiche une boîte de dialogue de confirmation
    if (choice) {
        localStorage.clear(); // Efface toutes les données stockées localement
        window.location.href = "https://enioaiello.github.io/admin-services/"; // Redirige vers une autre page
    }
}

function passwordLoginReset() {
    let passwordPrompt = prompt("Entrez un nouveau mot de passe"); // Affiche une boîte de dialogue pour entrer un nouveau mot de passe
    if (passwordPrompt === "") {
        alert("Veuillez renseigner un mot de passe"); // Affiche une alerte si aucun mot de passe n'est saisi
    }
    localStorage.setItem("password", passwordPrompt); // Stocke le mot de passe saisi localement
    window.location.href = "https://enioaiello.github.io/admin-services/"; // Redirige vers une autre page
}

function quitFunction() {
    let quitConfirm = confirm("Voulez-vous vraiment quitter ?"); // Affiche une boîte de dialogue de confirmation
    if (quitConfirm) {
        window.location.href = "https://enioaiello.github.io/admin-services/"; // Redirige vers une autre page
    }
}

asReset.addEventListener("click", adminServicesReset); // Ajoute un écouteur d'événement pour le clic sur l'élément "asReset"
passwordReset.addEventListener("click", passwordLoginReset); // Ajoute un écouteur d'événement pour le clic sur l'élément "passwordReset"
quit.addEventListener("click", quitFunction); // Ajoute un écouteur d'événement pour le clic sur l'élément "quit"