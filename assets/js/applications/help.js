let topicsDiv = document.querySelector("#topics");

let articles = [
    {
        "title": "Connexion et utilisation des comptes",
        "description": "Découvrez comment vous connecter et utiliser les comptes !",
        "link": "./login.html"
    },
    {
        "title": "Passage en Google Mode",
        "description": "Découvrez comment passer en Google Mode !",
        "link": "./google-mode.html"
    },
    {
        "title": "Mettre à jour un compte",
        "description": "Découvrez comment mettre à jour votre compte et renforcer la sécurité de votre compte.",
        "link": "./update-account.html"
    },
    {
        "title": "Supprimer un compte",
        "description": "Découvrez comment supprimer votre compte.",
        "link": "./delete-account.html"
    },
    {
        "title": "Centre de mises à jour",
        "description": "Découvrez les dernières mises à jour du site.",
        "link": "./updates/updates.html"
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
