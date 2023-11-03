let usernameInput = document.getElementById('username');
let emailInput = document.getElementById('email');
let profilePictureInput = document.getElementById('pfp');
let passwordInput = document.getElementById('password');
let submitButton = document.getElementById('submit');

function registerNewUser(e) {
    e.preventDefault();
    let username = usernameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let profilePicture = profilePictureInput.value;
    if (username === '' || email === '' || password === '') {
        alert('Veuillez renseigner tous les champs');
        return;
    }
    if (email.indexOf('@') === -1) {
        alert('Veuillez renseigner une adresse email valide');
        return;
    }
    if (password.length < 8) {
        alert('Veuillez renseigner un mot de passe de 8 caractères minimum');
        return;
    }
    if (profilePicture === '') {
        localStorage.setItem('pfp', 'https://www.photoprof.fr/images_dp/photographes/profil_vide.jpg');
    } else {
        localStorage.setItem('pfp', profilePicture);
    }
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location.href = '../panel.html';
}

submitButton.addEventListener('click', registerNewUser);