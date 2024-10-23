// Sélection des éléments du DOM
let resetProfileButton = document.querySelector("#resetProfile"); // Bouton de réinitialisation du profil
let backResetProfile = document.querySelector("#backResetProfile"); // Bouton de retour pour la réinitialisation du profil
let updateProfileButton = document.querySelector("#updateProfile"); // Bouton de mise à jour du profil
let backUpdateProfile = document.querySelector("#backUpdateProfile"); // Bouton de retour pour la mise à jour du profil
let resetAdminServicesButton = document.querySelector("#resetAdminServices"); // Bouton de réinitialisation des services d'administration
let backResetAdminServices = document.querySelector("#backResetAdminServices"); // Bouton de retour pour la réinitialisation des services d'administration
let resetStartupButton = document.querySelector("#resetStartup"); // Bouton de réinitialisation du démarrage
let backResetStartup = document.querySelector("#backResetStartup"); // Bouton de retour pour la réinitialisation du démarrage
let startAdminUtilityButton = document.querySelector("#startAdminUtility"); // Bouton de démarrage de l'utilitaire d'administration
let backUtility = document.querySelector("#backUtility"); // Bouton de retour pour l'utilitaire d'administration
let updateButton = document.querySelector("#update"); // Bouton de mise à jour des services d'administration
let backUpdate = document.querySelector("#backUpdate"); // Bouton de retour pour la mise à jour des services d'administration
let quitButton = document.querySelector("#quit"); // Bouton de quitter

// Fonctions pour afficher les différentes sections
function displayResetProfile() {
    document.querySelector("#resetProfileSection").style.display = "block"; // Afficher la section de réinitialisation du profil
    document.querySelector("#home").style.display = "none"; // Masquer la section d'accueil
}

function displayUpdateProfile() {
    document.querySelector("#updateProfileSection").style.display = "block"; // Afficher la section de mise à jour du profil
    document.querySelector("#home").style.display = "none"; // Masquer la section d'accueil
}

function displayResetAdminServices() {
    document.querySelector("#resetAdminServicesSection").style.display = "block"; // Afficher la section de réinitialisation des services d'administration
    document.querySelector("#home").style.display = "none"; // Masquer la section d'accueil
}

function displayResetStartup() {
    document.querySelector("#resetStartupSection").style.display = "block"; // Afficher la section de réinitialisation du démarrage
    document.querySelector("#home").style.display = "none"; // Masquer la section d'accueil
}

function displayStartAdminUtility() {
    document.querySelector("#startAdminUtilitySection").style.display = "block"; // Afficher la section de démarrage de l'utilitaire d'administration
    document.querySelector("#home").style.display = "none"; // Masquer la section d'accueil
}

function displayUpdate() {
    document.querySelector("#updateAdminServicesSection").style.display = "block"; // Afficher la section de mise à jour des services d'administration
    document.querySelector("#home").style.display = "none"; // Masquer la section d'accueil
}

// Fonctions pour effectuer des actions spécifiques
function resetProfile() {
    localStorage.removeItem("username"); // Supprimer le nom d'utilisateur du stockage local
    localStorage.removeItem("email"); // Supprimer l'e-mail du stockage local
    localStorage.removeItem("password"); // Supprimer le mot de passe du stockage local
    localStorage.removeItem("pfp"); // Supprimer l'image de profil du stockage local
    localStorage.removeItem("developer-mode"); // Supprimer le mode développeur du stockage local
    returnToHome(); // Revenir à la page d'accueil
}

function updateProfile() {
    localStorage.removeItem("backgroundURL"); // Supprimer l'URL de l'arrière-plan du stockage local
    localStorage.removeItem("backgroundType"); // Supprimer le type d'arrière-plan du stockage local
    returnToHome(); // Revenir à la page d'accueil
}

function resetAdminServices() {
    localStorage.clear(); // Supprimer tous les éléments du stockage local
    window.location.href = "./index.html"; // Rediriger vers la page d'accueil
}

function resetStartup() {
    localStorage.removeItem("startup"); // Supprimer le démarrage du stockage local
    returnToHome(); // Revenir à la page d'accueil
}

function startAdminUtility() {
    window.location.href = "https://enioaiello.github.io/admin-utility"; // Rediriger vers l'utilitaire d'administration
}

// Fonctions pour télécharger des fichiers
function downloadAdminUtility() {
    window.location.href = "https://github.com/enioaiello/admin-utility/releases/latest/download/admin-utility.html"; // Télécharger l'utilitaire d'administration
    returnToHome(); // Revenir à la page d'accueil
}

function downloadUpdate() {
    window.location.href = "https://github.com/enioaiello/admin-services/archive/refs/heads/main.zip"; // Télécharger la mise à jour des services d'administration
    returnToHome(); // Revenir à la page d'accueil
}

// Fonction pour revenir à la page d'accueil
function returnToHome() {
    document.querySelector("#home").style.display = "block"; // Afficher la section d'accueil
    document.querySelector("#resetProfileSection").style.display = "none"; // Masquer la section de réinitialisation du profil
    document.querySelector("#updateProfileSection").style.display = "none"; // Masquer la section de mise à jour du profil
    document.querySelector("#resetAdminServicesSection").style.display = "none"; // Masquer la section de réinitialisation des services d'administration
    document.querySelector("#resetStartupSection").style.display = "none"; // Masquer la section de réinitialisation du démarrage
    document.querySelector("#startAdminUtilitySection").style.display = "none"; // Masquer la section de démarrage de l'utilitaire d'administration
    document.querySelector("#updateAdminServicesSection").style.display = "none"; // Masquer la section de mise à jour des services d'administration
}

// Fonction pour quitter
function quit() {
    window.location.href = "./index.html"; // Rediriger vers la page d'accueil
}

// Ajout des écouteurs d'événements pour les boutons et les actions
backResetProfile.addEventListener("click", returnToHome); // Retour pour la réinitialisation du profil
backUpdateProfile.addEventListener("click", returnToHome); // Retour pour la mise à jour du profil
backResetAdminServices.addEventListener("click", returnToHome); // Retour pour la réinitialisation des services d'administration
backResetStartup.addEventListener("click", returnToHome); // Retour pour la réinitialisation du démarrage
backUtility.addEventListener("click", returnToHome); // Retour pour l'utilitaire d'administration
backUpdate.addEventListener("click", returnToHome); // Retour pour la mise à jour des services d'administration
resetProfileButton.addEventListener("click", displayResetProfile); // Réinitialisation du profil
updateProfileButton.addEventListener("click", displayUpdateProfile); // Mise à jour du profil
resetAdminServicesButton.addEventListener("click", displayResetAdminServices); // Réinitialisation des services d'administration
resetStartupButton.addEventListener("click", displayResetStartup); // Réinitialisation du démarrage
startAdminUtilityButton.addEventListener("click", displayStartAdminUtility); // Démarrage de l'utilitaire d'administration
updateButton.addEventListener("click", displayUpdate); // Mise à jour des services d'administration
document.querySelector("#confirmResetProfile").addEventListener("click", resetProfile); // Confirmation de la réinitialisation du profil
document.querySelector("#confirmUpdateProfile").addEventListener("click", updateProfile); // Confirmation de la mise à jour du profil
document.querySelector("#confirmResetAdminServices").addEventListener("click", resetAdminServices); // Confirmation de la réinitialisation des services d'administration
document.querySelector("#confirmResetStartup").addEventListener("click", resetStartup); // Confirmation de la réinitialisation du démarrage
document.querySelector("#launchUtility").addEventListener("click", startAdminUtility); // Lancement de l'utilitaire d'administration
document.querySelector("#downloadUtility").addEventListener("click", downloadAdminUtility); // Téléchargement de l'utilitaire d'administration
document.querySelector("#startUpdate").addEventListener("click", downloadUpdate); // Téléchargement de la mise à jour des services d'administration
quitButton.addEventListener("click", quit); // Quitter