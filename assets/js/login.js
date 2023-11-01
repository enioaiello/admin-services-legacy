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

submit.addEventListener('click', login);