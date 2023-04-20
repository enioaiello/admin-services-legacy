const welcomeText = document.querySelector("#welcomeText");
let username;
username = localStorage.getItem("username");

const userNameDisplay = () => {
    let token = localStorage.getItem("token");
    if(token === null){
        window.location.assign("../index.html");
    } else {
        welcomeText.innerHTML = "Bienvenue " + username + " sur votre panel !";
    }
}  

userNameDisplay();