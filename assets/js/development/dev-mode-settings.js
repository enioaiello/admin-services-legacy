let devMode = localStorage.getItem('devMode');
let devModeSettings = document.querySelector('#devModeSettings');

if (devMode === 'true') {
    devModeSettings.innerHTML = 'Désactiver';
} else {
    devModeSettings.innerHTML = 'Activer';
}

devModeSettings.addEventListener('click', function() {
    if (devMode === 'true') {
        devModeSettings.innerHTML = 'Activer';
        localStorage.setItem('devMode', 'false');
    } else {
        devModeSettings.innerHTML = 'Désactiver';
        localStorage.setItem('devMode', 'true');
    }

    location.reload();
});