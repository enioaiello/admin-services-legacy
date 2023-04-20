const welcomeText = document.querySelector("#welcomeText");
let username;
username = localStorage.getItem("username");

const userNameDisplay = () => {
    let token = localStorage.getItem("token");
    if (token === null) {
        window.location.assign("../index.html");
    } else {
        welcomeText.innerHTML = "Bienvenue " + username + " sur votre panel !";
    }
    const googleMode = localStorage.getItem("google-mode");
}  

function googleModeCheck() {
    if (googleMode === true) {
        window.location.assign("./google-fake-admin-panel/index.html");
        console.log("Google-Mode est activé");
    } else {
        console.log("Google-Mode est désactivé");
    }
}

googleModeCheck();

userNameDisplay();