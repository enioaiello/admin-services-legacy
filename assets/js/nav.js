// Sélectionne l'élément avec l'ID "pfpLogout"
let pfpLogout = document.querySelector("#pfpLogout");

// Récupère l'image de profil de l'utilisateur depuis le stockage local
let pfp = localStorage.getItem("pfp");

// Fonction pour charger l'image de profil
function loadImage() {
    // Définit la source de l'image de déconnexion avec l'image de profil récupérée
    pfpLogout.src = pfp && pfp.trim() !== "" ? pfp : "https://enioaiello.github.io/admin-services-legacy/assets/img/users/empty.jpg";
}

// Fonction pour se déconnecter
function logout() {
    // Affiche une boîte de dialogue de confirmation
    let result = confirm("Êtes-vous sûr de vous déconnecter ?");
    if (result) {
        if (localStorage.getItem("sound") === "true") {
            // Joue le son de déconnexion
            let audio = new Audio("../../assets/sound/logoff.mp3");
            audio.play();
            setTimeout(() => {
                audio.pause();
                // Redirige vers la page de déconnexion si l'utilisateur confirme
                window.location.href = "https://enioaiello.github.io/admin-services-legacy/";
            }, 4000);
        } else {
            // Redirige vers la page de déconnexion si l'utilisateur confirme
            window.location.href = "https://enioaiello.github.io/admin-services-legacy/";
        }
    }
}

// Charge l'image de profil au chargement de la page
loadImage();

// Ajoute un écouteur d'événement pour la déconnexion lors du clic sur l'image de déconnexion
pfpLogout.addEventListener("click", logout);

// Sélectionne l'élément de retour en arrière
const backPage = document.querySelector("#backPage");

// Si l'historique du navigateur ne contient pas de pages, on masque le bouton de retour
if (window.history.length === 0) {
    backPage.style.display = "none";
}

// Fonction pour revenir à la page précédente dans l'historique
function goBack() {
    window.history.back();
}

// Ajoute un écouteur d'événement pour revenir en arrière lors d'un clic sur le bouton
backPage.addEventListener("click", goBack);