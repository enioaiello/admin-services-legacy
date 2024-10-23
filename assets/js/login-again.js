// Récupérer les valeurs du localStorage
let username = localStorage.getItem('username');
let password = localStorage.getItem('password');
let pfp = localStorage.getItem('pfp');

// Récupérer l'erreur
let error = document.querySelector('#error');

// Vérifier si les valeurs existent dans le localStorage
function check() {
    if (!username || !password || !pfp) {
        // Rediriger vers une autre page si les valeurs sont manquantes
        window.location.href = 'https://enioaiello.github.io/admin-services/';
    }

    if (localStorage.getItem('fast-reconnect') === 'false') {
        window.location.href = 'https://enioaiello.github.io/admin-services/';
    }

    // Afficher le nom d'utilisateur et l'image de profil
    document.getElementById('username').innerHTML =  "Bienvenue, " + username;
    document.getElementById('profilePicture').src = pfp;
}

// Fonction de connexion
function login(e) {
    e.preventDefault();
    let passwordInput = document.getElementById('password');
    if (passwordInput.value === password) {
        passwordInput.disabled = "true";
        document.getElementById('start').disabled = "true";
        if (localStorage.getItem("sound") === "true") {
            // Joue le son de connexion
            let audio = new Audio('../../../assets/sound/logon.mp3');
            audio.play();
            setTimeout(() => {
                audio.pause();
                // Rediriger vers la page du panneau de contrôle si le mot de passe est correct
                window.location.href = '../panel.html';
            }, 5000);
        } else {
            setTimeout(() => {
                // Rediriger vers la page du panneau de contrôle si le mot de passe est correct
                window.location.href = '../panel.html';
            }, 1000);
        }
    } else {
        // Afficher une alerte et un message d'erreur si le mot de passe est incorrect
        error.style.display = 'block';
        console.error('Mot de passe incorrect');
        setTimeout(() => {
            error.style.display = 'none';
        }, 5000);
    }
}

// Ajouter un écouteur d'événement pour le bouton de connexion
document.getElementById('start').addEventListener('click', login);

// Appeler la fonction de vérification au chargement de la page
check();