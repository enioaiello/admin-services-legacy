const usernameChange = document.querySelector("#usernameChange");
const emailChange = document.querySelector("#emailChange");

function usernameChangeSettings() {
    let result = prompt("Entrez votre nouveau nom d'utilisateur");
    if (result === undefined || result === null || result === "") {
        usernameChangeSettings();
    } else {
        localStorage.setItem("username", result);
        window.location.reload();
    }
}

function emailChangeSettings() {
    let result = prompt("Entrez votre nouvelle adresse email");
    if (result === undefined || result === null || result === "") {
        emailChangeSettings();
    } else {
        localStorage.setItem("email", result);
        window.location.reload();
    }
}

usernameChange.addEventListener("click", usernameChangeSettings);
emailChange.addEventListener("click", emailChangeSettings);