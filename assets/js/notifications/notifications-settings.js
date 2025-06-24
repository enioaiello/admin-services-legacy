// Récupère le bouton de notifications dans le DOM
let notificationsButton = document.querySelector("#notificationsButton");

// Récupère le statut des notifications depuis le localStorage
let notificationsStatus = localStorage.getItem("notifications-status");

// Initialise l'affichage du bouton selon le statut des notifications
function initNotifications() {
    // Vérifie le statut actuel des notifications
    if (notificationsStatus === "enabled") {
        // Si activé, le bouton propose de désactiver
        notificationsButton.textContent = "Désactiver";
    } else if (notificationsStatus === "disabled") {
        // Si désactivé, le bouton propose d'activer
        notificationsButton.textContent = "Activer";
    } else {
        // Si le statut n'existe pas, on l'active par défaut
        localStorage.setItem("notifications-status", "enabled");
        notificationsButton.textContent = "Désactiver";
    }
}

// Bascule l'état des notifications lors d'un clic sur le bouton
function toggleNotifications() {
    // Met à jour le statut selon l'état actuel
    if (notificationsStatus === "enabled") {
        // Désactive les notifications
        localStorage.setItem("notifications-status", "disabled");
        notificationsButton.textContent = "Activer";
    } else if (notificationsStatus === "disabled") {
        // Active les notifications
        localStorage.setItem("notifications-status", "enabled");
        notificationsButton.textContent = "Désactiver";
    } else {
        // Cas d'erreur si le statut est inconnu
        console.error("Admin-Services: notifications-status n'est pas défini");
    }
}

// Initialise l'état du bouton au chargement
initNotifications();

// Ajoute l'écouteur d'événement pour le clic sur le bouton
notificationsButton.addEventListener("click", toggleNotifications);