// Récupérer les valeurs du localStorage
let username = localStorage.getItem('username');
let password = localStorage.getItem('password');
let pfp = localStorage.getItem('pfp');

// Récupérer l'erreur
let error = document.querySelector('#error');

// Récupérer les éléments de date et time
const timeElement = document.querySelector("#time");
const dateElement = document.querySelector("#date");

// Vérifier si les valeurs existent dans le localStorage
function check() {
    if (!username || !password || !pfp) {
        // Rediriger vers une autre page si les valeurs sont manquantes
        window.location.href = 'https://enioaiello.github.io/admin-services-legacy/';
    }

    if (localStorage.getItem('fast-reconnect') === 'false') {
        window.location.href = 'https://enioaiello.github.io/admin-services-legacy/';
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
            document.querySelector("#form").classList.add("none");
            document.querySelector("#loading").classList.remove("none");
            // Joue le son de connexion
            let audio = new Audio('../../assets/sound/logon.mp3');
            audio.play();
            setTimeout(() => {
                audio.pause();
                // Rediriger vers la page du panneau de contrôle si le mot de passe est correct
                window.location.href = '../panel.html';
            }, 5000);
        } else {
            document.querySelector("#form").classList.add("none");
            document.querySelector("#loading").classList.remove("none");
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

function updateDateTime() {
    const now = new Date(); // Récupère la date et l'heure actuelles

    // Options pour la date
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    // Formatter en français
    const formattedDate = now.toLocaleDateString('fr-FR', dateOptions);

    // Récupère l'heure et les minutes séparément
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // Ajoute la classe blink au :
    const formattedTime = `${hours}<span class="blink">:</span>${minutes}`;

    // Met à jour le contenu HTML
    document.querySelector('#date').textContent = formattedDate;
    document.querySelector('#time').innerHTML = formattedTime;
}

function unlock() {
    document.getElementById("timeContainer").style.display = "none";
    document.getElementById("passwordContainer").style.display = "block";
}

// Mettre à jour l'heure chaque seconde
setInterval(updateDateTime, 1000);

// Met à jour immédiatement au chargement
updateDateTime();

// Affiche le fond d'écran dans les deux container
function applyBackground() {
    if (localStorage.getItem("backgroundURL")) {
        document.querySelector("#timeContainer").style.background = "url('" + localStorage.getItem("backgroundURL") + "')";
        document.querySelector("#passwordContainer").style.background = "url('" + localStorage.getItem("backgroundURL") + "')";
    }
}

applyBackground();

// Ajouter un écouteur d'événement pour le bouton de connexion
document.getElementById('start').addEventListener('click', login);

// Ajouter un écouteur d'événement sur l'écran de verrouillage
document.getElementById('timeContainer').addEventListener('click', unlock);

// Appeler la fonction de vérification au chargement de la page
check();