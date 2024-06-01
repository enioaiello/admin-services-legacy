// Récupère l'élément avec l'ID 'erase'
let erase = document.querySelector('#erase');

// Fonction pour effacer le compte
function eraseAccount() {
    // Efface toutes les données stockées localement
    localStorage.clear();
    // Redirige vers la page d'accueil
    window.location.href = "../../index.html";
}

// Ajoute un écouteur d'événement pour le clic sur l'élément 'erase'
erase.addEventListener('click', eraseAccount);