let oldPassword = document.getElementById("oldPassword");
let newPassword = document.getElementById("newPassword");
let repeatPassword = document.getElementById("repeatPassword");
let confirmPassword = document.getElementById("confirmPassword");

function changePassword(e) {
    e.preventDefault();
    let oldPasswordValue = oldPassword.value;
    let newPasswordValue = newPassword.value;
    let repeatPasswordValue = repeatPassword.value;

    if (oldPasswordValue === "" || newPasswordValue === "" || repeatPasswordValue === "") {
        alert("Veuillez remplir tous les champs");
    } else if (oldPasswordValue !== localStorage.getItem("password")) {
        alert("Ancien mot de passe incorrect");
    } else if (newPasswordValue !== repeatPasswordValue) {
        alert("Les mots de passe ne correspondent pas");
    } else {
        localStorage.setItem("password", newPasswordValue);
        alert("Mot de passe changé avec succès");
        window.location.reload();
    }
}


confirmPassword.addEventListener("click", changePassword);
