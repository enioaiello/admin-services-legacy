let username = localStorage.getItem('username');
let password = localStorage.getItem('password');
let pfp = localStorage.getItem('pfp');

function check() {
    if (!username || !password || !pfp) {
        window.location.href = 'https://enioaiello.github.io/admin-services/';
    }

    document.getElementById('username').innerHTML =  "Bienvenue, " + username;
    document.getElementById('profilePicture').src = pfp;
}

function login(e) {
    e.preventDefault();
    let passwordInput = document.getElementById('password');
    if (passwordInput.value === password) {
        window.location.href = 'https://enioaiello.github.io/admin-services/views/panel.html';
    } else {
        alert('Mot de passe incorrect');
        console.error('Mot de passe incorrect');
    }
}

document.getElementById('start').addEventListener('click', login);
check();