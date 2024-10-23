// Initialise les boutons
let recommended = document.querySelector('#recommended');
let custom = document.querySelector('#custom');

// Fonctions pour les boutons
function recommendedSecurity() {
    localStorage.setItem('security', 'recommended');
    localStorage.setItem("as-security-load-component", "true");
    window.location.href = "../../panel.html";
}

function customSecurity() {
    localStorage.setItem('security', 'custom');
    let securityComponent = confirm("Utiliser le système de sauvegarde et de protection contre la réécriture ?");
    if (securityComponent) {
        localStorage.setItem("as-security-load-component", "true");
    } else {
        if(localStorage.getItem("as-security-load-component")) {
            localStorage.removeItem("as-security-load-component");
        }
    }
    window.location.href = "../../panel.html";
}

recommended.addEventListener("click", recommendedSecurity);
custom.addEventListener("click", customSecurity);