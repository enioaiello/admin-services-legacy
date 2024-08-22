let apps = [
    {
        "name": "Admin Utility",
        "description": "L'outil ultime pour Admin Services",
        "link": "./admin-utility.html",
        "author": "Enio Aiello",
        "type": "external"
    },
    {
        "name": "Paramètres",
        "description": "Gérez vos paramètres de compte !",
        "link": "./settings.html",
        "author": "Admin Services",
        "type": "internal"
    },
    {
        "name": "Support",
        "description": "Obtenez de l'aide à travers le support !",
        "link": "../support/support.html",
        "author": "Admin Services",
        "type": "internal"
    },
    {
        "name": "Services",
        "description": "Découvrez les services disponibles !",
        "link": "./services.html",
        "author": "Admin Services",
        "type": "internal"
    },
    {
        "name": "Centre de sécurité",
        "description": "Gérez la sécurité de votre compte !",
        "link": "./security.html",
        "author": "Admin Services",
        "type": "internal"
    },
    {
        "name": "Astuces",
        "description": "Découvrez des astuces pour mieux utiliser Admin Services !",
        "link": "./tips.html",
        "author": "Admin Services",
        "type": "internal"
    },
    {
        "name": "Éditeur de texte",
        "description": "Éditez des textes simples au format <strong>txt</strong>. Vous pouvez les modifier, les charger et les sauvegarder localement.",
        "link": "./text/app.html",
        "author": "Enio Aiello",
        "type": "external"
    }
];

let internalDiv = document.querySelector("#internal");
let externalDiv = document.querySelector("#external");

apps.forEach(app => {
    let article = document.createElement("article");
    article.innerHTML = `
        <h3>${app.name}</h3>
        <p><small>${app.author}</small></p>
        <p>${app.description}</p>
        <a href="${app.link}" class="button">Démarrer</a>
    `;

    if (app.type === "internal") {
        internalDiv.appendChild(article);
    } else if (app.type === "external") {
        externalDiv.appendChild(article);
    }
});
