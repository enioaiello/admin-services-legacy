'use srict'

username = localStorage.getItem("username");

function logout() {
    if (username == "default__user__0") {
        alert("Impossible de terminer cette session, cette action à été désactivée.");
        console.error("Le compte est réservé et ne peut donc pas être déconnecté.");
    } else if (username == null || undefined) {
        alert("Vous n'êtes pas connectés !");
        console.error("L'utilisateur n'est pas connecté. Impossible de se déconnecter.");
    } else {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        window.location.assign("../index.html");
    }
}