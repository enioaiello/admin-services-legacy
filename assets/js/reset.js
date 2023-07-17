let console = document.querySelector("#console");
// Généré par ChatGPT - GPT 3

// Fonction pour effacer les cookies
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Fonction pour rediriger vers la page de connexion
function redirectToLoginPage() {
    window.location.href = '../../index.html';
}

// Fonction principale pour le compte à rebours
function startTimer(duration, display) {
    var timer = duration;
    var countdown = setInterval(function () {
        display.textContent = 'Réinitilisation dans ' + timer + ' secondes';

        if (timer <= 0) {
            // Effacer les cookies
            localStorage.removeItem('username');
            console.innerHTML += "Nom d'utilisateur supprimé avec succès<br>";
            localStorage.removeItem('token');
            console.innerHTML += "Token supprimé avec succès<br>";
            localStorage.removeItem('email');
            console.innerHTML += "Email supprimé avec succès<br>";
            localStorage.removeItem('password');
            console.innerHTML += "Mot de passe supprimé avec succès<br>";
            localStorage.removeItem('group');
            console.innerHTML += "Groupe supprimé avec succès<br>";
            localStorage.removeItem('backgroundURL');
            console.innerHTML += "Fond d'écran supprimé avec succès<br>";
            localStorage.removeItem('plusEnabled');
            console.innerHTML += "Compte plus supprimé avec succès<br>";

            console.innerHTML += "Terminé, redirection dans 3 secondes";

            setTimeout(() => {
                // Rediriger vers la page de connexion
                redirectToLoginPage();
            }, 3000);


            clearInterval(countdown);
        }

        timer--;
    }, 1000);
}

// Fonction d'initialisation lors du chargement de la page
window.onload = function () {
    var resetTimer = document.getElementById('resetTimer');

    if (resetTimer) {
        var duration = 15; // Durée du compte à rebours en secondes

        // Lancer le compte à rebours
        startTimer(duration, resetTimer);
    }
};
