// Sélectionne l'élément avec l'ID "pdpChange"
let pdpChange = document.querySelector("#profilePicture");

// Sélectionne l'élément avec l'ID "profilePicture"
let profilePicture = document.querySelector("#profilePicture");

// Fonction pour changer la photo de profil
function changePdp() {
    // Demande à l'utilisateur de saisir le lien de son image
    let userPdp = prompt("Entrez le lien de votre image");

    // Vérifie si l'utilisateur a annulé la saisie ou n'a rien saisi
    if (userPdp === null || userPdp === undefined || userPdp === "") {
        // Stocke une URL par défaut dans le stockage local
        localStorage.setItem("pfp", "https://enioaiello.github.io/admin-services-legacy/assets/img/users/empty.jpg");
        profilePicture.src = localStorage.getItem("pfp");
    } else {
        // Stocke l'URL de la photo de profil saisie par l'utilisateur dans le stockage local
        localStorage.setItem("pfp", userPdp);
        profilePicture.src = localStorage.getItem("pfp");
        
        // Affiche un message dans la console indiquant que la photo de profil a été modifiée avec succès
        console.log("Photo de profil modifiée avec succès !");
    }
}

// Fonction pour charger la photo de profil
function loadPdp() {
    // Récupère l'URL de la photo de profil à partir du stockage local et l'assigne à la source de l'élément "profilePicture"
    profilePicture.src = localStorage.getItem("pfp");
}

// Appelle la fonction pour charger la photo de profil
loadPdp();

// Ajoute un écouteur d'événement "click" à l'élément "pdpChange" qui déclenchera la fonction "changePdp" lorsque l'utilisateur cliquera dessus
pdpChange.addEventListener("click", changePdp);