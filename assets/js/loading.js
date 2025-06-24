let version = '10.4.0';
let bootMessage = document.querySelector("#message");

function init() {
    console.info("Vous exécutez Admin Services en version " + version);
    console.log("Préparation du chargeur d'Admin Services...");

    localStorage.setItem("version", version);
    localStorage.setItem("last-page", "none");
    localStorage.setItem("last-error", "none");
    localStorage.setItem("fast-reconnect", "true");
}

init();

function disableOtherFunctions() {
    // Désactive les autres fonctions ici
    userLoginCheck = function() {};
    checkUserchange = function() {};
    asSecurityComponentCheck = function() {};
    loader = function() {};
}

function userLoginCheck() {
    console.info("Vérification de l'utilisateur...");
    if (localStorage.getItem("username") === null) {
        console.error("Aucun utilisateur n'est connecté !");
        setTimeout(() => {
            loader();
        }, 2500);
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
            setTimeout(() => {
                loader();
            }, 2500);
        }

        if (localStorage.getItem("username") !== localStorage.getItem("usernameBackup") ||
            localStorage.getItem("email") !== localStorage.getItem("emailBackup") ||
            localStorage.getItem("password") !== localStorage.getItem("passwordBackup")) {
            window.location.href = "https://enioaiello.github.io/admin-services-legacy/views/utility/developer-mode/safe-mode.html";
        }
    } else {
        console.info("Le système de sécurité est inactif !");
        setTimeout(() => {
            loader();
        }, 2500);
    }
}

function asSecurityComponentCheck() {
    if (localStorage.getItem("as-security-load-component") === "true") {
        localStorage.setItem("usernameBackup", localStorage.getItem("username"));
        localStorage.setItem("emailBackup", localStorage.getItem("email"));
        localStorage.setItem("passwordBackup", localStorage.getItem("password"));
        console.log("Chargement des composants de sécurité...");
        setTimeout(() => {
            loader();
        }, 2500);
    } else {
        console.log("Composants de sécurité désactivés");
        
        // Si la sécurité est désactivée, supprime les sauvegardes
        localStorage.removeItem("usernameBackup");
        localStorage.removeItem("emailBackup");
        localStorage.removeItem("passwordBackup");
        setTimeout(() => {
            loader();
        }, 2500);
    }
}

asSecurityComponentCheck();
checkUserchange();

console.log("Chargement des fichiers de démarrage...");

function loader() {
    console.info("Prêt !");
    setTimeout(() => {
        if (localStorage.getItem("redirection") === "google-mode") {
            window.location.href = "./views/google-mode/index.html";
        } else {
            console.log("Chargement du site...");
            if (localStorage.getItem("username") === null) {
                window.location.href = "./views/login/options.html";
            } else {
                window.location.href = "./views/login/reconnect.html";
            }
        }
    }, 750);
}