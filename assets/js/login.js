let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let submit = document.getElementById('submit');
let users = [
    {
        email: 'aielloenio@icloud.com',
        password: 'Sezfet97',
        pfp: 'https://enioaiello.github.io/assets/img/profile.png',
        username: 'Enio Aiello'
    }
];
let username = localStorage.getItem('username');
let pfp = localStorage.getItem('pfp');
let email = localStorage.getItem('email');
let password = localStorage.getItem('password');
let reset = document.getElementById('reset');

function login(e) {
    e.preventDefault();

    if (email !== null && password !== null) {
        if (emailInput.value === '' || passwordInput.value === '') {
            alert('Veuillez remplir tous les champs');
            console.error('Veuillez remplir tous les champs');
            return;
        }
    } else if (email !== null) {
        if (passwordInput.value === '') {
            alert('Veuillez remplir tous les champs');
            console.error('Veuillez remplir tous les champs');
            return;
        }
    }

    if (email !== null && password !== null) {
        if (emailInput.value === email && passwordInput.value === password) {
            window.location.href = "../panel.html";
            return;
        } else {
            alert('Mot de passe incorrect');
            console.error('Mot de passe incorrect');
            return;
        }
    }

    for (let i = 0; i < users.length; i++) {
        if (emailInput.value === users[i].email && passwordInput.value === users[i].password) {
            localStorage.setItem('username', users[i].username);
            console.log("Nom d'utilisateur défini");
            localStorage.setItem('pfp', users[i].pfp);
            console.log("Photo de profil définie");
            localStorage.setItem('email', users[i].email);
            console.log("Adresse email défini");
            localStorage.setItem('password', users[i].password);
            console.log("Mot de passe défini");

            window.location.href = "../panel.html";
            return;
        }
    }

    alert('Mot de passe incorrect');
    console.error('Mot de passe incorrect');
}


if (email !== null && password !== null) {
    emailInput.disabled = true;
    emailInput.value = email;
    console.info("Compte déjà enregistré !");
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
            alert("Le mot de passe doit contenir au moins 8 caractères");
            resetPassword();
        }
    } else {
        alert("Nom d'utilisateur incorrect");
        resetPassword();
    }
    }
}

reset.addEventListener("click", resetPassword);
submit.addEventListener('click', login);