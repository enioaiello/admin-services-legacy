const safeModeStates = localStorage.getItem("safeMode");

// Vérifie si le thème sombre est actif
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (safeModeStates === "true") {
    const container = document.querySelector(".container");
    const links = document.querySelectorAll("a");
    const buttons = document.querySelectorAll("button:hover");
    const inputs = document.querySelectorAll("input:focus");
    const submitButtons = document.querySelectorAll("input[type=submit]:hover");

    if (container) {
        // Applique les styles selon le mode clair ou sombre
        container.style.background = isDarkMode ? "#333" : "#fff";
        container.style.color = isDarkMode ? "#fff" : "#000";
        // Désactive tous les effets de transition et les hover
        container.style.transition = "none";
        container.style.animation = "none";
        // Désactive les transitions de hover de tous les boutons présents sur la page
        buttons.forEach(button => {
            button.style.transition = "none";
            button.style.background = isDarkMode ? "#333" : "var(--default)";
        });
        // De même, mais désactive ceux des input[type=submit]
        submitButtons.forEach(submit => {
            submit.style.transition = "none";
            submit.style.background = isDarkMode ? "#333" : "var(--default)";
        });
        if (document.querySelector("#start")) {
            document.querySelector("#start").style.background = isDarkMode ? "#333" : "var(--default)";
        }
        // Désactive les transitions de hover de tous les liens présents sur la page
        links.forEach(link => {
            link.style.transition = "none";
            link.style.color = "var(--default)";
        });
        // Désactive les transitions de hover de tous les inputs présents sur la page
        inputs.forEach(input => {
            input.style.border = isDarkMode ? "1px solid #333" : "1px solid var(--default)";
        });
    }
}