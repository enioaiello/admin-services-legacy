let resultPassword = document.querySelector("#resultPassword"); // Sélectionne l'élément avec l'ID "resultPassword"
let password = localStorage.getItem("password"); // Récupère la valeur stockée dans la clé "password" du localStorage
let username = localStorage.getItem("username"); // Récupère la valeur stockée dans la clé "username" du localStorage

// Vérifie si le mot de passe contient le nom d'utilisateur
if (password.includes(username)) {
    resultPassword.textContent = "Votre compte n'est pas en sécurité, ce compte utilise une chaîne de caractères qui est inclut dans votre nom d'utilisateur.";
} else if (password.length < 8) {
    resultPassword.textContent = "Votre compte n'est pas en sécurité, ce compte utilise un mot de passe trop court.";
} else if (password.includes("1234")) {
    resultPassword.textContent = "Votre compte n'est pas en sécurité, ce compte utilise un mot de passe faible.";
} else if (password.includes("azerty")) {
    resultPassword.textContent = "Votre compte n'est pas en sécurité, ce compte utilise un mot de passe faible.";
} else if (password.includes("password")) {
    resultPassword.textContent = "Votre compte n'est pas en sécurité, ce compte utilise un mot de passe commun.";
} else if (password.includes("qwerty")) {
    resultPassword.textContent = "Votre compte n'est pas en sécurité, ce compte utilise un mot de passe faible.";
} else {
    resultPassword.textContent = "Votre compte semble être en sécurité, ce compte utilise un mot de passe correct.";
}
