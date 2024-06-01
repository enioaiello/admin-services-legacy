// Récupérer les éléments du formulaire
let usernameInput = document.querySelector('#username');
let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let passwordRepeatInput = document.querySelector('#passwordRepeat');
let submitButton = document.querySelector('#continue');

// Fonction pour enregistrer un nouvel utilisateur
function registerNewUser(e) {
    e.preventDefault(); // Empêcher le rechargement de la page lors de la soumission du formulaire

    // Récupérer les valeurs des champs du formulaire
    let username = usernameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let passwordRepeat = passwordRepeatInput.value;

    // Vérifier si les champs obligatoires sont vides
    if (username === '' || email === '' || password === '' || passwordRepeat === '') {
        alert('Veuillez renseigner tous les champs');
        return;
    }

    // Vérifier si l'adresse email est valide
    if (email.indexOf('@') === -1) {
        alert('Veuillez renseigner une adresse email valide');
        return;
    }

    // Vérifier si le mot de passe a au moins 8 caractères
    if (password.length < 8) {
        alert('Veuillez renseigner un mot de passe de 8 caractères minimum');
        return;
    }

    // Vérifier si les mots de passe correspondent
    if (password !== passwordRepeat) {
        alert('Les mots de passe ne correspondent pas');
        return;
    }

    // Enregistrer les informations de l'utilisateur dans le stockage local
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Rediriger vers la configuration de sécurité
    window.location.href = './security.html';
    window.location.href = './personnalisation.html';
}

// Ajouter un écouteur d'événement sur le bouton de soumission
submitButton.addEventListener('click', registerNewUser);