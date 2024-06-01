// Attendez que le contenu de la fenêtre soit chargé
window.addEventListener("DOMContentLoaded", function () {
    // Récupérez l'URL de l'arrière-plan à partir du stockage local
    let backgroundURL = localStorage.getItem("backgroundURL");
    // Récupérez le type d'arrière-plan à partir du stockage local
    let backgroundType = localStorage.getItem("backgroundType");

    // Vérifiez si une URL d'arrière-plan est présente
    if (backgroundURL) {
        // Appliquez l'URL de l'arrière-plan à l'élément body
        document.body.style.backgroundImage = "url('" + backgroundURL + "')";
    }

    // Vérifiez si un type d'arrière-plan est présent
    if (backgroundType) {
        // Vérifiez si le type d'arrière-plan est "night" (nuit)
        if (backgroundType === "night") {
            // Appliquez la couleur blanche au texte de l'élément body
            document.body.style.color = "#ffffff";
        }
    }
});