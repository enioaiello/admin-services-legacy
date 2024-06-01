// Sélectionne l'élément avec l'ID "usernameChange"
const usernameChange = document.querySelector("#usernameChange");

// Sélectionne l'élément avec l'ID "emailChange"
const emailChange = document.querySelector("#emailChange");

// Fonction pour changer le nom d'utilisateur
function usernameChangeSettings() {
    let confirm = "Système de sécurité : Entrez votre mot de passe";
    if (confirm !== localStorage.getItem("password")) {
        usernameChangeSettings();
    } else {
        // Demande à l'utilisateur d'entrer un nouveau nom d'utilisateur
        let result = prompt("Entrez votre nouveau nom d'utilisateur");

        // Vérifie si la réponse est vide ou annulée
        if (result === undefined || result === null || result === "") {
            // Appelle récursivement la fonction pour demander à nouveau un nom d'utilisateur
            usernameChangeSettings();
        } else {
            // Stocke le nouveau nom d'utilisateur dans le stockage local
            localStorage.setItem("username", result);
            // Recharge la page pour appliquer les modifications
            window.location.reload();
        }
    }
}

// Fonction pour changer l'adresse email
function emailChangeSettings() {
    let confirm = "Système de sécurité : Entrez votre mot de passe";
    if (confirm !== localStorage.getItem("password")) {
        emailChangeSettings();
    } else {
        // Demande à l'utilisateur d'entrer une nouvelle adresse email
        let result = prompt("Entrez votre nouvelle adresse email");

        // Vérifie si la réponse est vide ou annulée
        if (result === undefined || result === null || result === "") {
            // Appelle récursivement la fonction pour demander à nouveau une adresse email
            emailChangeSettings();
        } else {
            // Stocke la nouvelle adresse email dans le stockage local
            localStorage.setItem("email", result);
            // Recharge la page pour appliquer les modifications
            window.location.reload();
        }
    }
}

// Ajoute un écouteur d'événement pour le clic sur l'élément "usernameChange"
usernameChange.addEventListener("click", usernameChangeSettings);

// Ajoute un écouteur d'événement pour le clic sur l'élément "emailChange"
emailChange.addEventListener("click", emailChangeSettings);