const welcomeText = document.querySelector("#welcomeText");
let username = localStorage.getItem("username");
let token = localStorage.getItem("token");
let group = localStorage.getItem("group");
const developper = document.querySelector(".developper");

function userNameDisplay() {
    let token = localStorage.getItem("token");
    if (token === null || username === null) {
        window.location.assign("../index.html");
    }
    welcomeText.innerHTML = "Bienvenue " + username + " sur votre panel !";
    if (group === "developper") {
        welcomeText.innerHTML = "Compte développeur actif enregistré sous " + username;
        developper.classList.remove("none");
    }
}

userNameDisplay();