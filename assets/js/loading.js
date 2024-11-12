let version = '10.1.1';
let progressBar = document.querySelector("progress");
let bootMessage = document.querySelector("#message");

function init() {
    console.info("Vous exécutez Admin Services en version 10.1.1");
    console.log("Préparation du chargeur d'Admin Services...");

    progressBar.style.display = "block";

    localStorage.setItem("version", version);
    localStorage.setItem("last-page", "none");
    localStorage.setItem("last-error", "none");
    localStorage.setItem("fast-reconnect", "true");
}

init();

document.addEventListener('keydown', function(event) {
    if (event.key === "s" || event.key === "S") {
        bootMessage.style.display = "inline-block";
        bootMessage.textContent = "Veuillez patienter";
        setInterval(() => {
            if (progressBar.value !== 100) {
                progressBar.value++;
            }
            if (progressBar.value === 70) {
                bootMessage.style.display = "none";
            }
            if (progressBar.value === 100) {
                progressBar.style.display = "none";
                setTimeout(() => {
                    window.location.href = "./views/utility/developer-mode/safe-mode.html";
                }, 1000);
            }
        }, Math.random());
        disableOtherFunctions();
    }
});

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
    progressBar.value = 15;

    // Vérifie si la sécurité est activée
    if (localStorage.getItem("as-security-load-component") === "true") {
        if (localStorage.getItem("usernameBackup") === null) {
            console.error("Le système de sauvegarde n'est pas initialisé ! Création d'une sauvegarde");
            localStorage.setItem("usernameBackup", localStorage.getItem("username"));
            progressBar.value = 26;
            localStorage.setItem("emailBackup", localStorage.getItem("email"));
            progressBar.value = 48;
            localStorage.setItem("passwordBackup", localStorage.getItem("password"));
            progressBar.value = 60;
            setTimeout(() => {
                loader();
            }, 2500);
        }

        if (localStorage.getItem("username") !== localStorage.getItem("usernameBackup") ||
            localStorage.getItem("email") !== localStorage.getItem("emailBackup") ||
            localStorage.getItem("password") !== localStorage.getItem("passwordBackup")) {
            window.location.href = "./recovery.html";
        }
    } else {
        console.info("Le système de sécurité est inactif !");
        setTimeout(() => {
            loader();
        }, 2500);
    }
}

function asSecurityComponentCheck() {
    progressBar.value = 50;
    if (localStorage.getItem("as-security-load-component") === "true") {
        localStorage.setItem("usernameBackup", localStorage.getItem("username"));
        progressBar.value = 55;
        localStorage.setItem("emailBackup", localStorage.getItem("email"));
        progressBar.value = 65;
        localStorage.setItem("passwordBackup", localStorage.getItem("password"));
        progressBar.value = 85;
        console.log("Chargement des composants de sécurité...");
        setTimeout(() => {
            loader();
        }, 2500);
    } else {
        console.log("Composants de sécurité désactivés");
        
        // Si la sécurité est désactivée, supprime les sauvegardes
        localStorage.removeItem("usernameBackup");
        progressBar.value = 55;
        localStorage.removeItem("emailBackup");
        progressBar.value = 65;
        localStorage.removeItem("passwordBackup");
        progressBar.value = 85;
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
    progressBar.value = 100;
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
    }, 500);
}