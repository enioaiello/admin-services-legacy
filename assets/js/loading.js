if (localStorage.getItem("gfap") === true) {
    window.location.href = "./views/google-mode/index.html";
}

console.log("Chargement du site...");

if (localStorage.getItem("username") === null) {
    window.location.href = "./views/login/options.html";
}
if (localStorage.getItem("username") !== null) {
    window.location.href = "./views/login/login.html";
    alert("Votre session a expirée, veuillez vous reconnecter.");
}