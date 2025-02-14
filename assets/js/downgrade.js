// Sélectionne l'élément avec l'ID "gfapDown"
let gfapDown = document.querySelector('#gfapDown');

// Ajoute un écouteur d'événement au clic sur l'élément
gfapDown.addEventListener('click', function() {
    // Stocke la valeur "google-mode" dans le stockage local avec la clé "redirection"
    localStorage.setItem('redirection', 'google-mode');
    
    // Redirige vers l'URL spécifiée
    window.location.href = "https://enioaiello.github.io/admin-services/";
});