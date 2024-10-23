// Sélectionne l'élément avec l'id "settings"
let settings = document.querySelector("#settings");

// Définit un tableau d'articles
let articles = [
    {
        "title": "Mon compte",
        "description": "Accéder aux paramètres de votre compte",
        "link": "../settings/account.html"
    },
    {
        "title": "Paramètres locaux",
        "description": "Gérer les paramètres locaux d'<strong>Admin Services</strong>",
        "link": "../settings/admin.html"
    },
    {
        "title": "Paramètres de l'accueil",
        "description": "Changez le thème ou définissez un fond d'écran à votre page d'accueil",
        "link": "../settings/panel.html"
    },
    {
        "title": "Paramètres de notifications",
        "description": "Modifiez vos préférences relatives aux notifications reçues sur Admin Services",
        "link": "../settings/notifications.html"
    }
];

// Parcourt chaque élément du tableau d'articles
articles.forEach(articleData => {
    // Crée un nouvel élément "article"
    let article = document.createElement("article");
    // Définit le contenu HTML de l'article en utilisant les données de l'article actuel
    article.innerHTML = `
        <h3>${articleData.title}</h3>
        <p>${articleData.description}</p>
        <a href="${articleData.link}" class="button">Démarrer</a>
    `;

    // Ajoute l'article à l'élément "settings"
    settings.appendChild(article);
});
