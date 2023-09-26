let securityVar = localStorage.getItem("login-check");
let allow = document.querySelector("#allow");

function validation() {
    if (securityVar === null) {
        window.location.href = "https://enioaiello.github.io/admin-services";
    } else {
        let choice = prompt("Entrez votre mot de passe pour autoriser cette connexion");
        if (choice !== localStorage.getItem("password")) {
            localStorage.setItem("login-check", false);
            validation();
        } else if (choice === null) {
            console.log("Annulé !");
        } else {
            localStorage.setItem("login-check", true);
            window.location.href = "https://enioaiello.github.io/admin-services";
        }
    }
}

allow.addEventListener("click", validation);