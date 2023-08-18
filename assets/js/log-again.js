let status = localStorage.getItem("status");
let username = localStorage.getItem("username");
let password = localStorage.getItem("password");

function logAgain() {
    if (status === "logout") {
        let result = prompt("Vous avez été déconnecté de votre compte : " + username + ". Entrez votre mot de passe pour continuer.");
        if (result === password) {
            window.location.href = "./views/login/loginAnimation.html";
        } else if (result !== password) {
            alert("Mot de passe incorrect");
            logAgain();
        }
    } else if (username === null) {
        console.log("ok");
    }
}

logAgain();