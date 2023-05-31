let googleModeEnabled = localStorage.getItem("google-mode");

if (googleModeEnabled) {
    window.location.href = "./views/google-mode/index.html";
}