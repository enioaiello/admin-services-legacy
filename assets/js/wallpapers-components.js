const images = [
    { name: "Arbres autonome", link: "https://enioaiello.github.io/admin-services-legacy/assets/img/background/background-4.jpg", category: "nature" },
    { name: "Vieille grande roue", link: "https://enioaiello.github.io/admin-services-legacy/assets/img/background/background-3.jpg", category: "city" },
    { name: "Feu sur forêt nocturne", link: "https://enioaiello.github.io/admin-services-legacy/assets/img/background/background-9.jpg", category: "night" },
    { name: "Village de montagne", link: "https://enioaiello.github.io/admin-services-legacy/assets/img/background/background-2.jpg", category: "nature" },
    { name: "Coucher de soleil sur montagnes", link: "https://enioaiello.github.io/admin-services-legacy/assets/img/background/background-8.jpg", category: "nature" },
    { name: "Montagnes enneigée de nuit", link: "https://enioaiello.github.io/admin-services-legacy/assets/img/background/background-6.jpg", category: "night" },
    { name: "Mer translucide", link: "https://enioaiello.github.io/admin-services-legacy/assets/img/background/background-7.jpg", category: "nature" },
    { name: "Forêt sur montagne", link: "https://enioaiello.github.io/admin-services-legacy/assets/img/background/background-5.jpg", category: "nature" },
    { name: "Maisons colorées", link: "https://enioaiello.github.io/admin-services-legacy/assets/img/background/background-1.jpg", category: "city" }
];

const background = document.querySelector("#background");

// Fonction pour afficher les images
function displayImages() {
    images.forEach(image => {
        const imageElement = document.createElement("article");
        imageElement.innerHTML = `<img src="${image.link}" alt="${image.name}" onclick="redirect('${image.name}')" title="${image.name}">`;

        // Ajouter l'image à la catégorie correspondante
        switch (image.category) {
            case "nature":
                document.getElementById("nature").appendChild(imageElement);
                break;
            case "city":
                document.getElementById("city").appendChild(imageElement);
                break;
            case "night":
                document.getElementById("night").appendChild(imageElement);
                break;
            default:
                console.error(`Catégorie inconnue pour l'image : ${image.name}`);
        }
    });
}

// Fonction pour rediriger vers l'image sélectionnée
function redirect(imageName) {
    const selectedImage = images.find(image => image.name === imageName);

    if (selectedImage) {
        // Enregistrer l'URL et la catégorie de l'image sélectionnée dans le stockage local
        localStorage.setItem("backgroundURL", selectedImage.link);
        localStorage.setItem("backgroundType", selectedImage.category);
        background.textContent = `Fond d'écran défini sur ${imageName} avec succès !`;
    } else {
        console.error(`Aucune image trouvée avec le nom : ${imageName}`);
    }
}

// Fonction pour supprimer l'image de fond active
function removeActiveBackground() {
    localStorage.removeItem("backgroundURL");
    localStorage.removeItem("backgroundType");
}

// Ajouter un écouteur d'événement pour supprimer l'image de fond active lors du clic sur le bouton "remove"
document.getElementById("remove").addEventListener("click", removeActiveBackground);

// Appeler la fonction displayImages lorsque la page est entièrement chargée
window.onload = displayImages;