// Récupère le nom d'utilisateur depuis le stockage local
let username = localStorage.getItem('username');
// Récupère l'adresse email depuis le stockage local
let email = localStorage.getItem('email');
// Défini le bouton pour afficher les bordures
let showBordersButton = document.querySelector("#showBorders");

// Fonction pour vérifier si l'utilisateur est connecté
function logged() {
    if (!username) {
        // Code à exécuter si l'utilisateur n'est pas connecté
    }
}

// Fonction pour charger les informations de l'utilisateur
function loadUserInfo() {
    // Sélectionne l'élément avec l'ID "username"
    let usernameContent = document.querySelector("#username");
    // Sélectionne l'élément avec l'ID "email"
    let emailContent = document.querySelector("#email");
    // Affiche le nom d'utilisateur dans l'élément "username"
    usernameContent.innerHTML = "Nom d'utilisateur : " + username;
    // Affiche l'adresse email dans l'élément "email"
    emailContent.innerHTML = "Adresse email : " + email;
}

// Fonction pour charger les informations du navigateur
function loadBrowserInfo() {
    // Crée une chaîne de caractères contenant le type de navigateur
    let browserInfo = "Type de navigateur : " + navigator.userAgent;
    // Modifie le contenu de l'élément avec l'ID "browserInfo" avec la chaîne de caractères
    document.querySelector("#browserInfo").textContent = browserInfo;
}

// Fonction pour afficher les bordures des éléments
function showBorders() {
    // Sélectionne tous les éléments avec la classe "border"
    let element = document.querySelector("*");
    // Défini la bordure de chaque élément à 1px solide rouge
    element.style.border = "1px solid red";
}

// Appelle les fonctions pour charger les informations de l'utilisateur et du navigateur
loadUserInfo();
loadBrowserInfo();
showBordersButton.addEventListener("click", showBorders);