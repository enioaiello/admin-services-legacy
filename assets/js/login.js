let emailInput = document.querySelector('#email'); // Récupère l'élément input avec l'id 'email'
let passwordInput = document.querySelector('#password'); // Récupère l'élément input avec l'id 'password'
let submit = document.querySelector('#submit'); // Récupère l'élément avec l'id 'submit'
let users = [
    {
        email: 'aielloenio@icloud.com',
        password: '1234567890',
        pfp: 'https://enioaiello.github.io/assets/img/profile.png',
        username: 'Enio Aiello'
    }
];
let username = localStorage.getItem('username'); // Récupère la valeur de 'username' depuis le stockage local
let pfp = localStorage.getItem('pfp'); // Récupère la valeur de 'pfp' depuis le stockage local
let email = localStorage.getItem('email'); // Récupère la valeur de 'email' depuis le stockage local
let password = localStorage.getItem('password'); // Récupère la valeur de 'password' depuis le stockage local
let reset = document.querySelector('#reset'); // Récupère l'élément avec l'id 'reset'
let error = document.querySelector('#error'); // Récupère l'élément avec l'id 'error'

function login(e) {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire

    if (email !== null && password !== null) {
        if (emailInput.value === '' || passwordInput.value === '') {
            error.textContent = 'Veuillez remplir tous les champs'; // Affiche une erreur si l'email ou le mot de passe est incorrect
            console.error('Veuillez remplir tous les champs'); // Affiche une erreur dans la console
            return;
        }
    } else if (email !== null) {
        if (passwordInput.value === '') {
            error.textContent = 'Veuillez remplir tous les chaînes'; // Affiche une erreur si l'email ou le mot de passe est incorrect
            console.error('Veuillez remplir tous les champs'); // Affiche une erreur dans la console
            return;
        }
        if (passwordInput.value !== localStorage.getItem('password')) {
            error.textContent = 'Mot de passe incorrect'; // Affiche une erreur si l'email ou le mot de passe est incorrect
            console.error('Mot de passe incorrect'); // Affiche une erreur dans la console
            return;
        }
    }

    if (email !== null && password !== null) {
        if (emailInput.value === email && passwordInput.value === password) {
            window.location.href = "../panel.html"; // Redirige vers la page 'panel.html' si les identifiants sont corrects
            return;
        } else {
            error.textContent = 'Veuillez remplir tous les chaînes'; // Affiche une erreur si l'email ou le mot de passe est incorrect
            console.error('Mot de passe incorrect'); // Affiche une erreur dans la console
            return;
        }
    }

    for (let i = 0; i < users.length; i++) {
        if (emailInput.value === users[i].email && passwordInput.value === users[i].password) {
            localStorage.setItem('username', users[i].username);
            console.log("Nom d'utilisateur défini"); // Affiche un message dans la console
            localStorage.setItem('pfp', users[i].pfp);
            console.log("Photo de profil définie"); // Affiche un message dans la console
            localStorage.setItem('email', users[i].email);
            console.log("Adresse email défini"); // Affiche un message dans la console
            localStorage.setItem('password', users[i].password);
            console.log("Mot de passe défini"); // Affiche un message dans la console

            window.location.href = "../panel.html"; // Redirige vers la page 'panel.html' si les identifiants sont corrects
            return;
        }
    }

    alert('Mot de passe incorrect'); // Affiche une alerte si les identifiants sont incorrects
    console.error('Mot de passe incorrect'); // Affiche une erreur dans la console
}


if (email !== null && password !== null) {
    emailInput.disabled = true; // Désactive l'input de l'email
    emailInput.value = email; // Remplit l'input de l'email avec la valeur du stockage local
    console.info("Compte déjà enregistré !"); // Affiche une information dans la console
}

function resetPassword() {
    if (localStorage.getItem('username') === null) {
        alert("Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste contactez le support. Pour plus d'informations, consultez la console.");
        if (localStorage.getItem('username') === null && localStorage.getItem('password') !== null) {
            console.error("Votre compte est corrompu, veuillez le supprimer et en créer un nouveau. Pour plus d'informations, contactez le support.");
        }
        if (localStorage.getItem('username') === null && localStorage.getItem('password') === null) {
            console.error("Aucune donnée n'a été trouvée, veuillez créer un compte. Pour plus d'informations, contactez le support.");
        }
    } else if (localStorage.getItem('username') !== null) {
        let usernameConfirm = prompt("Entrez votre nom d'utilisateur (s'affiche sur la page d'accueil)");
        if (usernameConfirm === localStorage.getItem('username')) {
            let newPassword = prompt("Entrez un nouveau mot de passe (il sera appliqué à partir de maintenant)");
            if (newPassword < 8) {
                localStorage.setItem("password", newPassword);
            } else {
                alert("Le mot de passe doit contenir au moins 8 caractères"); // Affiche une alerte si le mot de passe est trop court
                resetPassword();
            }
        } else {
            alert("Nom d'utilisateur incorrect"); // Affiche une alerte si le nom d'utilisateur est incorrect
            resetPassword();
        }
    }
}

reset.addEventListener("click", resetPassword); // Ajoute un écouteur d'événement pour le clic sur le bouton 'reset'
submit.addEventListener('click', login); // Ajoute un écouteur d'événement pour le clic sur le bouton 'submit'
