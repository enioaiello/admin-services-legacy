let settings = document.getElementById("settings");

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
    }
];

articles.forEach(articleData => {
    let article = document.createElement("article");
    article.innerHTML = `
        <h3>${articleData.title}</h3>
        <p>${articleData.description}</p>
        <a href="${articleData.link}" class="button">Démarrer</a>
    `;

    settings.appendChild(article);
});
