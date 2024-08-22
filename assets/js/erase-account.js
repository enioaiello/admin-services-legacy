// Récupère l'élément avec l'ID 'erase'
let erase = document.querySelector('#erase');

// Fonction pour effacer le compte
function eraseAccount() {
    let prompt = window.prompt('Pour effacer votre compte, veuillez saisir votre mot de passe');
    let password = localStorage.getItem('password');
    if (prompt === password) {
        // Efface toutes les données stockées localement
        localStorage.clear();
        // Redirige vers la page d'accueil
        window.location.href = "../../index.html";
    } else {
        alert('Mot de passe incorrect');
    }
}

// Ajoute un écouteur d'événement pour le clic sur l'élément 'erase'
erase.addEventListener('click', eraseAccount);