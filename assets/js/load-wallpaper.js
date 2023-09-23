document.addEventListener('DOMContentLoaded', function () {
    const imageList = document.getElementById('wallpapers'); // Modifier l'ID en fonction de votre HTML
    const imagesCount = 10; // Nombre d'images
    const localStorageKey = 'backgroundURL';

    // Fonction pour mettre à jour le fond d'écran et le localStorage
    function updateBackgroundImage(imageNumber) {
        const imageURL = `../../assets/img/background/background-${imageNumber}.jpg`; // Chemin vers vos images
        localStorage.setItem(localStorageKey, imageURL);
        document.body.style.backgroundImage = `url(${imageURL})`;
    }

    // Gestionnaire d'événements pour supprimer le localStorage lors du clic sur "background-0.jpg"
    function removeLocalStorage() {
        localStorage.removeItem(localStorageKey);
        alert("LocalStorage supprimé.");
    }

    // Générer les articles contenant les images de fond dynamiquement
    for (let i = 0; i < imagesCount; i++) {
        const article = document.createElement('article');
        const image = document.createElement('img');
        image.src = `../../assets/img/background/background-${i}.jpg`; // Chemin vers vos images
        image.alt = `background-${i}`;
        image.classList.add("wallpaperItem");

        // Ajouter un gestionnaire d'événements au clic sur l'image
        image.addEventListener('click', function () {
            if (i === 0) {
                removeLocalStorage();
            } else {
                updateBackgroundImage(i);
                alert(`Fond d'écran mis à jour avec background-${i}.jpg`);
            }
        });

        article.appendChild(image);
        imageList.appendChild(article);
    }

    // Vérifier et définir le fond d'écran initial depuis le localStorage
    const initialBackground = localStorage.getItem(localStorageKey);
    if (initialBackground) {
        document.body.style.backgroundImage = `url(${initialBackground})`;
    }
});
