let resultPassword = document.querySelector("#resultPassword");
let password = localStorage.getItem("password");
let username = localStorage.getItem("username");

if (password.includes(username)) {
    resultPassword.textContent = "Votre compte n'est pas en sécurité, ce compte utilise une chaîne de caractères qui est inclut dans votre nom d'utilisateur.";
} else {
    resultPassword.textContent = "Votre compte semble être en sécurité, ce compte utilise un mot de passe correct."
}

if (password.includes("1234")) {
    resultPassword.textContent = "Votre compte n'est pas en sécurité, ce compte utilise un mot de passe faible.";
}

if (password.includes("azerty")) {
    resultPassword.textContent = "Votre compte n'est pas en sécurité, ce compte utilise un mot de passe faible.";
}