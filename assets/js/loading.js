if (localStorage.getItem("gfap") === true) {
    window.location.href = "./views/google-mode/index.html";
} else {
    console.log("Chargement du site...");

    if (localStorage.getItem("username") === null) {
        window.location.href = "./views/login/options.html";
    }
    if (localStorage.getItem("username") !== null) {
        window.location.href = "./views/login/password.html";
    }
}