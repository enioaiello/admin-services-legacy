// Récupère la valeur de la clé 'developperMode' dans le stockage local
let developperMode = localStorage.getItem('developperMode');

// Vérifie si la valeur récupérée n'est pas nulle
if (developperMode !== null) {
    // Affiche un message dans la console indiquant que le mode développeur est activé
    console.info("Mode développeur activé");
}