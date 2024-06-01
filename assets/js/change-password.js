// Récupération des éléments du formulaire
let oldPassword = document.getElementById("oldPassword");
let newPassword = document.getElementById("newPassword");
let repeatPassword = document.getElementById("repeatPassword");
let confirmPassword = document.getElementById("confirmPassword");

// Fonction pour changer le mot de passe
function changePassword(e) {
    e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Récupération des valeurs des champs de mot de passe
    let oldPasswordValue = oldPassword.value;
    let newPasswordValue = newPassword.value;
    let repeatPasswordValue = repeatPassword.value;

    // Vérification si tous les champs sont remplis
    if (oldPasswordValue === "" || newPasswordValue === "" || repeatPasswordValue === "") {
        alert("Veuillez remplir tous les champs");
    } 
    // Vérification si l'ancien mot de passe est correct
    else if (oldPasswordValue !== localStorage.getItem("password")) {
        alert("Ancien mot de passe incorrect");
    } 
    // Vérification si les nouveaux mots de passe correspondent
    else if (newPasswordValue !== repeatPasswordValue) {
        alert("Les mots de passe ne correspondent pas");
    } 
    // Si toutes les vérifications passent, le mot de passe est changé
    else {
        localStorage.setItem("password", newPasswordValue);
        alert("Mot de passe changé avec succès");
        window.location.reload(); // Recharge la page
    }
}

// Ajout d'un écouteur d'événement sur le bouton de confirmation du mot de passe
confirmPassword.addEventListener("click", changePassword);
