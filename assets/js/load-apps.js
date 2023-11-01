let apps = [
    {
        "name": "Vador",
        "description": "Découvrez des applications FOSS et gratuites !",
        "link": "./vador.html",
        "type": "external"
    },
    {
        "name": "PassSearch",
        "description": "Recherchez de l'information via Google !",
        "link": "./passsearch.html",
        "type": "external"
    },
    {
        "name": "Paramètres",
        "description": "Gérez vos paramètres de compte !",
        "link": "./settings.html",
        "type": "internal"
    },
    {
        "name": "Support",
        "description": "Obtenez de l'aide à travers le support !",
        "link": "../support/support.html",
        "type": "internal"
    },
    {
        "name": "Services",
        "description": "Découvrez les services disponibles !",
        "link": "./services.html",
        "type": "internal"
    },
    {
        "name": "Centre de sécurité",
        "description": "Gérez la sécurité de votre compte !",
        "link": "./security.html",
        "type": "internal"
    }
];

let internalDiv = document.getElementById("internal");
let externalDiv = document.getElementById("external");

apps.forEach(app => {
    let article = document.createElement("article");
    article.innerHTML = `
        <h3>${app.name}</h3>
        <p>${app.description}</p>
        <a href="${app.link}" class="button">Démarrer</a>
    `;

    if (app.type === "internal") {
        internalDiv.appendChild(article);
    } else if (app.type === "external") {
        externalDiv.appendChild(article);
    }
});
