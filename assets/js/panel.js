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

// Sélectionne l'élément avec l'ID 'notificationWidget'
let notificationWidget = document.querySelector("#notificationWidget");

// Vérifie si les notifications sont activées dans le stockage local
if (localStorage.getItem("notifications-status") === "disabled") {
    notificationWidget.style.display = "none";
}

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

welcomeMessage();

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

    // Récupérez l'URL de l'arrière-plan à partir du stockage local
    let backgroundURL = localStorage.getItem("backgroundURL");
    // Récupérez le type d'arrière-plan à partir du stockage local
    let backgroundType = localStorage.getItem("backgroundType");

    // Vérifiez si une URL d'arrière-plan est présente
    if (backgroundURL) {
        // Appliquez l'URL de l'arrière-plan à l'élément body
        document.body.style.backgroundImage = "url('" + backgroundURL + "')";
    }

    // Vérifiez si un type d'arrière-plan est présent
    if (backgroundType) {
        // Vérifiez si le type d'arrière-plan est "night" (nuit)
        if (backgroundType === "night") {
            // Appliquez la couleur blanche au texte de l'élément body
            document.body.style.color = "#ffffff";
            // Appliquez la couleur noire au texte des éléments de tous les articles
            document.querySelectorAll("article").forEach(article => {
                // Vérifier si le thème sombre du navigateur est actif, si c'est le cas, appliquer la couleur blanche
                if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    article.style.color = "#ffffff";
                } else {
                    article.style.color = "#000000";
                }
            });
        }
    }

    const apiKey = '6271124950ad3a11168970847a769525';
    const weatherDiv = document.getElementById('weather');

    // Fonction pour obtenir la position de l'utilisateur
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            weatherDiv.innerHTML = "La géolocalisation n'est pas supportée par ce navigateur.";
        }
    }

    // Fonction pour afficher la position et obtenir la météo
    function showPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.weather && data.weather.length > 0) {
                    const city = data.name;
                    const weatherDescription = data.weather[0].description;
                    const temperature = data.main.temp.toFixed(1);
                    weatherDiv.innerHTML = `${city} : ${weatherDescription} | ${temperature}°C.`;
                } else {
                    weatherDiv.innerHTML = "Impossible de récupérer les données météo.";
                }
            })
            .catch(error => {
                weatherDiv.innerHTML = "Erreur lors de la récupération des données météo.";
                console.error("Erreur :", error);
            });
    }

    // Fonction pour afficher les erreurs de géolocalisation
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                weatherDiv.innerHTML = "L'utilisateur a refusé la demande de géolocalisation.";
                break;
            case error.POSITION_UNAVAILABLE:
                weatherDiv.innerHTML = "Les informations de localisation ne sont pas disponibles.";
                break;
            case error.TIMEOUT:
                weatherDiv.innerHTML = "La demande de localisation a expiré.";
                break;
            case error.UNKNOWN_ERROR:
                weatherDiv.innerHTML = "Une erreur inconnue est survenue.";
                break;
        }
    }

    // Appel de la fonction pour obtenir la localisation
    getLocation();

    // refreshWeather.addEventListener('click', getLocation);
    setTimeout(getLocation, 60000);
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

setInterval(welcomeMessage, 500);

function toggleDetails(button) {
    const details = button.closest('article').querySelector('.details');
    details.classList.toggle('none');
}