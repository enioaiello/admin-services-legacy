// Initialise les boutons
let recommended = document.querySelector('#recommended');
let custom = document.querySelector('#custom');

// Fonctions pour les boutons
function recommendedSecurity() {
    localStorage.setItem('security', 'recommended');
}