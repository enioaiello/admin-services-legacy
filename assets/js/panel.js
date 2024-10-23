// Sélectionne l'élément avec l'ID 'welcomeText'
let welcomeText = document.querySelector('#welcomeText');

// Récupère l'heure actuelle
let actualHour = new Date().getHours();

// Récupère la valeur de 'username' depuis le stockage local
let username = localStorage.getItem('username');

// Sélectionne l'élément avec l'ID 'logoutButton'
let logoutButton = document.querySelector('#logoutButton');

// Sélectionne l'élément avec l'ID 'devMode'
let devMode = document.querySelector("#devMode");

// Vérifie si l'heure actuelle est entre 8h et 19h
function welcomeMessage() {
    if (actualHour >= 8 && actualHour < 12) {
        welcomeText.textContent = "Bonjour " + username;
        console.log("Dashboard: Message d'accueil mis à jour avec succès !");
    } else if (actualHour >= 12 && actualHour < 18) {
        welcomeText.textContent = "Bon après-midi " + username;
        console.log("Dashboard: Message d'accueil mis à jour avec succès !");
    } else {
        welcomeText.textContent = "Bonsoir " + username;
        console.log("Dashboard: Message d'accueil mis à jour avec succès !");
    }
}

// Vérifie si le mode développeur est activé dans le stockage local
if (localStorage.getItem("devMode") === "true") {
    console.warn("Admin-Services: Attention, le mode développeur est activé !");
    devMode.style.display = "block";
}

// Vérifie si 'username' est null et redirige vers la page de connexion si c'est le cas
if (username == null) {
    window.location.href = "./login/options.html";
    console.error("Dashboard: Vous n'êtes pas connecté !");
}

// Attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.querySelector(`#${targetId}`);

            if (this.checked) {
                targetSection.style.display = 'block';
            } else {
                targetSection.style.display = 'none';
            }

            const checkboxStates = {};
            checkboxes.forEach(checkbox => {
                checkboxStates[checkbox.getAttribute('data-target')] = checkbox.checked;
            });
            localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
        });
    });

    const savedCheckboxStates = JSON.parse(localStorage.getItem('checkboxStates'));
    if (savedCheckboxStates) {
        for (const targetId in savedCheckboxStates) {
            const targetSection = document.querySelector(`#${targetId}`);
            const checkbox = document.querySelector(`[data-target="${targetId}"]`);
            if (targetSection && checkbox) {
                if (savedCheckboxStates[targetId]) {
                    targetSection.style.display = 'block';
                    checkbox.checked = true;
                } else {
                    targetSection.style.display = 'none';
                    checkbox.checked = false;
                }
            }
        }
    }

    const panelDivs = ['recommandes', 'services', 'annonces', 'support', 'actions', 'widgets', 'hints'];

    panelDivs.forEach(divId => {
        const div = document.querySelector(`#${divId}`);
        const checkbox = document.querySelector(`[data-target="${divId}"]`);

        if (div && checkbox) {
            if (checkbox.checked) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        }
    });
});

// Fonction de déconnexion
function logout() {
    let result = confirm("Êtes-vous sûr de vous déconnecter ?");
    if (result) {
        window.location.href = "../login/password.html";
        console.info("Admin-Services: Déconnexion réussie");
    }
}

// Fonction pour calculer la date et l'heure actuelles
function calculateDateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    // Ajoute un zéro devant les minutes si nécessaire
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    // Ajoute un zéro devant le mois et le jour si nécessaire
    // const dateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
    const dateString = `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year.toString().slice(-2)}`;

    document.querySelector('#dateTime').innerHTML = `Date actuelle : ${dateString}. Heure actuelle : ${hours}:${formattedMinutes}`;

    setTimeout(calculateDateTime, 1000);
}

// Appelle la fonction calculateDateTime lorsque la fenêtre est chargée
window.onload = function () {
    console.log("Admin-Services: Date et heure mises à jour avec succès !");
    calculateDateTime();
};

// Vérifie sur le mode développeur est actif
if (localStorage.getItem("dev-mode") === "true") {
    console.warn("Attention, le mode développeur est activé !");
    // Affiche les options de développeurs
    devMode.style.display = "block";
}

setInterval(welcomeMessage, 3600000);