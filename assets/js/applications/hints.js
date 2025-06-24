let topicsDiv = document.querySelector("#hints");

let articles = [
    {
        "title": "Personnalisation",
        "description": "Apprenez à personnaliser l'interface d'Admin Services ainsi que votre profil.",
        "link": "../hints/personalisation.html"
    },
    {
        "title": "Fast-reconnect",
        "description": "Découvrez ce nouveau système de connexion rapide !",
        "link": "../hints/fast-login.html"
    },
    {
        "title": "Paramètres",
        "description": "Apprenez à paramétrer correctement Admin Services.",
        "link": "../hints/settings.html"
    },
    {
        "title": "Outils de développement",
        "description": "Découvrez les possibilités de développement pour Admin Services.",
        "link": "../hints/dev.html"
    }
];

articles.forEach(articleData => {
    let article = document.createElement("article");
    article.innerHTML = `
        <h3>${articleData.title}</h3>
        <p>${articleData.description}</p>
        <a href="${articleData.link}" class="button">Démarrer</a>
    `;

    topicsDiv.appendChild(article);
});
