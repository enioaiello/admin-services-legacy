let profilePictureInput = document.querySelector('#pfp');
let profilePicture = profilePictureInput.value;
let finish = document.querySelector('#finish');

// Enregistrer l'image de profil dans le stockage local
function setupPfp() {
    if (profilePicture === '') {
        localStorage.setItem('pfp', 'https://enioaiello.github.io/admin-services-legacy/assets/img/users/empty.jpg');
    } else {
        localStorage.setItem('pfp', profilePicture);
    }
}

// Ajouter un écouteur d'événement sur le bouton de soumission
finish.addEventListener('click', setupPfp);