console.info("Vous exécutez Admin Services en version 10.0.0");
console.log("Préparation du chargeur d'Admin Services...");

function userLoginCheck() {
    console.info("Vérification de l'utilisateur...");
    if (localStorage.getItem("username") === null) {
        console.error("Aucun utilisateur n'est connecté !");
        loader();
    }
}

function checkUserchange() {
    console.info("Démarrage de l'analyse");

    // Vérifie si la sécurité est activée
    if (localStorage.getItem("as-security-load-component") === "true") {
        if (localStorage.getItem("usernameBackup") === null) {
            console.error("Le système de sauvegarde n'est pas initialisé ! Création d'une sauvegarde");
            localStorage.setItem("usernameBackup", localStorage.getItem("username"));
            localStorage.setItem("emailBackup", localStorage.getItem("email"));
            localStorage.setItem("passwordBackup", localStorage.getItem("password"));
            loader();
        }

        if (localStorage.getItem("username") !== localStorage.getItem("usernameBackup") ||
            localStorage.getItem("email") !== localStorage.getItem("emailBackup") ||
            localStorage.getItem("password") !== localStorage.getItem("passwordBackup")) {
            window.location.href = "./recovery.html";
        }
    } else {
        console.info("Le système de sécurité est inactif !");
        loader();
    }
}

function asSecurityComponentCheck() {
    if (localStorage.getItem("as-security-load-component") === "true") {
        console.log("Chargement des composants de sécurité...");
        loader();
    } else {
        console.log("Composants de sécurité désactivés");
        
        // Si la sécurité est désactivée, supprime les sauvegardes
        localStorage.removeItem("usernameBackup");
        localStorage.removeItem("emailBackup");
        localStorage.removeItem("passwordBackup");
        loader();
    }
}

asSecurityComponentCheck();
checkUserchange();

console.log("Chargement des fichiers de démarrage...");

function loader() {
    console.info("Prêt !");
    setTimeout(() => {
        if (localStorage.getItem("gfap") === "true") {
            window.location.href = "./views/google-mode/index.html";
        } else {
            console.log("Chargement du site...");
            if (localStorage.getItem("username") === null) {
                window.location.href = "./views/login/options.html";
            } else {
                window.location.href = "./views/login/password.html";
            }
        }
    }, 5000);
}
