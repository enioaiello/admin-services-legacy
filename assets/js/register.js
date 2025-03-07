// Récupérer les éléments du formulaire
let usernameInput = document.querySelector('#username');
let emailInput = document.querySelector('#email');
let profilePictureInput = document.querySelector('#pfp');
let passwordInput = document.querySelector('#password');
let submitButton = document.querySelector('#submit');
let errorField = document.querySelector("#error");

// Fonction pour enregistrer un nouvel utilisateur
function registerNewUser(e) {
    e.preventDefault(); // Empêcher le rechargement de la page lors de la soumission du formulaire
    // Récupérer les valeurs des champs du formulaire
    let username = usernameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let profilePicture = profilePictureInput.value;

    // Vérifier si les champs obligatoires sont vides
    if (username === '' || email === '' || password === '') {
        errorField.textContent = "Veuillez renseigner tous les champs";
        return;
    }

    // Vérifier si l'adresse email est valide
    if (email.indexOf('@') === -1) {
        errorField.textContent = "Veuillez renseigner une adresse email valide";
        return;
    }

    // Vérifier si le mot de passe a au moins 8 caractères
    if (password.length < 8) {
        errorField.textContent = "Veuillez renseigner un mot de passe de 8 caractères minimum";
        return;
    }

    // Enregistrer l'image de profil dans le stockage local
    if (profilePicture === '') {
        localStorage.setItem('pfp', 'https://enioaiello.github.io/admin-services-legacy/assets/img/users/empty.jpg');
    } else {
        localStorage.setItem('pfp', profilePicture);
    }

    // Enregistrer les informations de l'utilisateur dans le stockage local
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Rediriger vers la page du panneau de contrôle
    window.location.href = '../panel.html';
}

// Ajouter un écouteur d'événement sur le bouton de soumission
submitButton.addEventListener('click', registerNewUser);