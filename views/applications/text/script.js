document.addEventListener('DOMContentLoaded', function() {
    const textArea = document.getElementById('text');
    const saveButton = document.getElementById('save');
    const loadButton = document.getElementById('load');
    const clearButton = document.getElementById('clear');
    const quitButton = document.getElementById('quit');
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none';
    document.body.appendChild(fileInput);

    // Charger un fichier
    loadButton.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function() {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                textArea.value = e.target.result;
            };
            reader.readAsText(file);
        }
    });

    // Sauvegarder le contenu dans un fichier
    saveButton.addEventListener('click', function() {
        const blob = new Blob([textArea.value], {type: 'text/plain'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'texte_sauvegarde.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    // Effacer le contenu de la zone de texte
    clearButton.addEventListener('click', function() {
        textArea.value = '';
    });

    // Quitter l'application
    quitButton.addEventListener('click', function() {
        if (confirm('Êtes-vous sûr de vouloir quitter ?')) {
            window.location = '../../panel.html';
        }
    });
});