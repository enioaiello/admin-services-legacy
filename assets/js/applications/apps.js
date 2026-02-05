let apps;
let appContain = document.querySelector("#list");

document.addEventListener("DOMContentLoaded", () => {
    apps = [
        {
            "name": "Accueil",
            "category": "Système",
            "description": "L'accueil d'Admin Services !",
            "screen": "../../assets/img/capture/panel.png",
            "link": "../panel.html",
            "author": "Admin Services",
            "type": "internal",
            "compatibility": "Admin Services 10.1",
            "version": "10.1",
            "source": "https://github.com/enioaiello/admin-services-legacy/"
        },
        {
            "name": "Paramètres",
            "description": "Gérez vos paramètres de compte !",
            "link": "./settings.html",
            "author": "Admin Services",
            "type": "internal",
            "version": "10.1",
            "compatibility": "Admin Services 10.1",
            "screen": "../../assets/img/capture/settings.png",
            "category": "Système",
            "source": "https://github.com/enioaiello/admin-services-legacy/"
        },
        {
            "name": "Support",
            "description": "Obtenez de l'aide à travers le support !",
            "link": "../support/support.html",
            "author": "Admin Services",
            "type": "internal",
            "version": "10.1",
            "compatibility": "Admin Services 10.1",
            "screen": "../../assets/img/capture/support.png",
            "category": "Système",
            "source": "https://github.com/enioaiello/admin-services-legacy/"
        },
        {
            "name": "Services",
            "description": "Découvrez les services disponibles !",
            "link": "./services.html",
            "author": "Admin Services",
            "type": "internal",
            "version": "10.1",
            "compatibility": "Admin Services 10.1",
            "screen": "../../assets/img/capture/services.png",
            "category": "Système",
            "source": "https://github.com/enioaiello/admin-services-legacy/"
        },
        {
            "name": "Centre de sécurité",
            "description": "Gérez la sécurité de votre compte !",
            "link": "./security.html",
            "author": "Admin Services",
            "type": "internal",
            "version": "10.1",
            "compatibility": "Admin Services 10.1",
            "screen": "../../assets/img/capture/security.png",
            "category": "Système",
            "source": "https://github.com/enioaiello/admin-services-legacy/"
        },
        {
            "name": "Astuces",
            "description": "Découvrez des astuces pour mieux utiliser Admin Services !",
            "link": "./hints.html",
            "author": "Admin Services",
            "type": "internal",
            "version": "10.1",
            "compatibility": "Admin Services 10.1",
            "screen": "../../assets/img/capture/hints.png",
            "category": "Système",
            "source": "https://github.com/enioaiello/admin-services-legacy/"
        },
        {
            "name": "Éditeur de texte",
            "description": "Éditez des textes simples au format txt. Vous pouvez les modifier, les charger et les sauvegarder localement.",
            "link": "./text/app.html",
            "author": "Enio Aiello",
            "type": "external",
            "version": "1.1",
            "compatibility": "Admin Services 10.1",
            "screen": "./text/capture.png",
            "category": "Utilitaire"
        }
    ];

    apps.forEach((app, index) => {
        let article = document.createElement("article");
        article.innerHTML = `
            <h3>${app.name}</h3>
            <div class="buttons">
                <a href="${app.link || '#'}" class="button semi" style="width: 84%" title="Démarrer">Démarrer</a>
                <a onclick='showInfo(${index})' class="button semi" style="width: 15%;" title="Obtenir les informations"><i class="ri-information-line"></i></a>
            </div>
        `;
        appContain.appendChild(article);
    });

    const appInfo = document.querySelector("#info");

    document.querySelector("#back").addEventListener("click", () => {
        appContain.style.display = "flex";
        appInfo.style.display = "none";
    });
});

function showInfo(index) {
    const app = apps[index];

    const appNameText = document.querySelector("#appName");
    const appDevText = document.querySelector("#appDev");
    const appCategoryText = document.querySelector("#appCategory");
    const appDescText = document.querySelector("#appDescription");
    const appLinkText = document.querySelector("#appLink");
    const appScreen = document.querySelector("#appScreen");
    const appVersion = document.querySelector("#appVersion");
    const appCompatibility = document.querySelector("#appCompatibility");
    const appInfo = document.querySelector("#info");
    let appSource = document.querySelector("#appSource");

    appNameText.innerHTML = app.name;
    appDevText.innerHTML = app.author;
    appCategoryText.innerHTML = app.category || "N/A";
    appDescText.innerHTML = app.description;
    appLinkText.href = app.link;
    appScreen.src = app.screen;
    appVersion.innerHTML = app.version || "Version initiale";
    if (app.compatibility) {
        appCompatibility.innerHTML = app.compatibility + " minimum"
    } else {
        appCompatibility.innerHTML = "Admin Service 6.0 minimum";
    }
    if (app.source) {
        appSource.innerHTML = "<a href='" + app.source + "' target='_blank'>Voir le code source</a>";
    } else {
        appSource.innerHTML = "Code source non disponible";
    }

    appContain.style.display = "none";
    appInfo.style.display = "block";
}
