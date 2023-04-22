const welcomeText = document.querySelector("#welcomeText");
let username = localStorage.getItem("username");

function userNameDisplay() {
    let token = localStorage.getItem("token");
    if (token === null) {
        window.location.assign("../index.html");
    } else {
        welcomeText.innerHTML = "Bienvenue " + username + " sur votre panel !";
    }
}

userNameDisplay();