let resultPassword = document.querySelector("#resultPassword"); // Sélectionne l'élément avec l'ID "resultPassword"
let password = localStorage.getItem("password"); // Récupère la valeur stockée dans la clé "password" du localStorage
let username = localStorage.getItem("username"); // Récupère la valeur stockée dans la clé "username" du localStorage
let fastReconnectStates = document.querySelector("#fastReconnectStates"); // Sélectionne l'élément avec l'ID "fastReconnectStates"
let fastReconnectSwitch = document.querySelector("#fastReconnectSwitch");

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

function switchFastReconnect(e) {
    e.preventDefault();
    if (fastReconnectSwitch === "true") {
        localStorage.setItem("fast-reconnect", "false");
        fastReconnectStates.textContent = "Désactivé";
    } else {
        localStorage.setItem("fast-reconnect", "true");
        fastReconnectStates.textContent = "Activé";
    }
    window.location.reload();
}

fastReconnectSwitch.addEventListener("click", switchFastReconnect); // Ajoute un écouteur d'événement pour le clic sur l'élément "fastReconnectSwitch" qui appelle la fonction "switchFastReconnect" lorsqu'il est cliqué