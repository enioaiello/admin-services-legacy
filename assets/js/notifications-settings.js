let notificationsButton = document.querySelector("#notificationsButton");
let notificationsStatus = localStorage.getItem("notificationsStatus");

function initNotifications() {
    if (notificationsStatus === "enabled") {
        notificationsButton.textContent = "Désactiver";
    } else if (notificationsStatus === "disabled") {
        notificationsButton.textContent = "Activer";
    } else {
        localStorage.setItem("notificationsStatus", "enabled");
        notificationsButton.textContent = "Désactiver";
    }
}

function toggleNotifications() {
    if (notificationsStatus === "enabled") {
        localStorage.setItem("notificationsStatus", "disabled");
        notificationsButton.textContent = "Activer";
    } else if (notificationsStatus === "disabled") {
        localStorage.setItem("notificationsStatus", "enabled");
        notificationsButton.textContent = "Désactiver";
    } else {
        console.error("Admin-Services: notificationsStatus n'est pas défini");
    }
}

initNotifications();
notificationsButton.addEventListener("click", toggleNotifications);