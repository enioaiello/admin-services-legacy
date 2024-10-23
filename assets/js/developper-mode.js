// Récupère la valeur de la clé 'developerMode' dans le stockage local
let developerMode = localStorage.getItem('dev-mode');

// Vérifie si la valeur récupérée n'est pas nulle
if (developerMode !== null) {
    // Affiche un message dans la console indiquant que le mode développeur est activé
    console.info("Mode développeur activé");
}