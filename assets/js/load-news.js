let topicsDiv = document.querySelector("#news");

let articles = [
    {
        "title": "Lecteur multimédia",
        "description": "Ouvrez vos fichiers multimédias dans un lecteur simple, rapide et léger.",
        "type": "Bibliothèque d'applications",
    },
    {
        "title": "Météo",
        "description": "Obtenez la météo en fonction de votre position.",
        "type": "Widgets",
    },
    {
        "title": "ArticlesUI 3.0",
        "description": "Une nouvelle version, plus belle, plus pratique.",
        "type": "Système : Interface graphique",
    },
    {
        "title": "Mode sombre",
        "description": "En plus d'un mode automatique, vous pouvez également choisir l'activation du mode sombre.",
        "type": "Système : Interface graphique",
    },
    {
        "title": "Sécurité au démarrage (beta)",
        "description": "Lors du chargement d'Admin Services, une sécurité permet d'avertir l'utilisateur en cas de modification d'un paramètre important lié au compte.",
        "type": "Système : Sécurité",
    },
    {
        "title": "Éditeur de texte",
        "description": "Ouvrez, modifiez et sauvegardez des fichiers textes.",
        "type": "Bibliothèque d'applications",
    },
    {
        "title": "Fonds d'écran",
        "description": "Faites votre choix dans une nouvelle mise à jour des fonds d'écran, qui refont leur apparition.",
        "type": "Système : Interface graphique",
    },
    {
        "title": "Fast-Reconnect",
        "description": "Vous pouvez désormais choisir si <strong>Fast-Reconnect</strong> est actif.",
        "type": "Système : Sécurité",
    },
    {
        "title": "Fast-Reconnect",
        "description": "Vous pouvez réinitialiser votre mot de passe directement depuis la page de connexion.",
        "type": "Système : Sécurité",
    },
    {
        "title": "Nouvelles fonctionnalités d'inscription",
        "description": "Définissez une photo de profil, le thème du site, le mode développeur, un fond d'écran, un tutoriel d'utilisation.",
        "type": "Système : Comptes",
    },
    {
        "title": "Nouvelle liste de nouveautés",
        "description": "Les dernières nouveautés d'Admin Services s'affichent également dans les paramètres d'Admin Services.",
        "type": "Système : Mises à jour et sécurité",
    },
    {
        "title": "Mode développeur",
        "description": "Obtenez les outils nécessaires au développement d'applications ou pour le développement d'Admin Services.",
        "type": "Mode développeur",
    },
    {
        "title": "Google-mode",
        "description": "Un bug important empêchant le démarrage de <strong>google-fake-admin-panel</strong> a été résolu.",
        "type": "Système : Google-mode",
    },
    {
        "title": "Nouvelle bibliothèque d'applications (bêta)",
        "description": "Recherchez des applications, obtenez des recommandations d'applications, obtenez des informations sur une application (version, développeur…).",
        "type": "Bibliothèque d'applications",
    },
    {
        "title": "Modifications de compte protégées",
        "description": "Pour modifier vos informations de connexion ou des paramètres importants d'Admin Services, vous devrez taper votre mot de passe.",
        "type": "Système : Sécurité",
    },
    {
        "title": "Changez les redirections",
        "description": "Si vous espérez démarrer un autre site plus rapidement, vous pouvez le paramétrer au démarrage d'Admin Services.",
        "type": "Mode développeur",
    },
    {
        "title": "Astuces",
        "description": "Cette nouvelle mise à jour du système d'astuces affichera toutes les astuces utiles (lors d'une mise à jour majeure) et des fonctionnalités disponibles dans une seule application.",
        "type": "Bibliothèque d'applications",
    },
    {
        "title": "Astuces de bienvenue",
        "description": "Une fois inscrit, vous verrez une catégorie supplémentaire sur Admin Services, qui vous indiquera les fonctionnalités de base du site.",
        "type": "Système : Interface graphique",
    },
    {
        "title": "Nouveau support",
        "description": "Le support a refait peau neuve, avec un système de suivi de versions, de disponibilité de support, de documentation et plus !",
        "type": "Système : Interface graphique",
    },
    {
        "title": "Informations d'applications",
        "description": "Vous pouvez maintenant obtenir plus d'informations sur une application, telles que l'éditeur, la licence, la date de mise à jour et de publication, et plus !",
        "type": "Bibliothèque d'applications",
    },
    {
        "title": "Recherche rapide",
        "description": "Recherchez rapidement des astuces, applications, paramètres, annonces, mises à jour et bien plus !",
        "type": "Bibliothèque d'applications",
    }
];

articles.forEach(articleData => {
    let article = document.createElement("article");
    article.innerHTML = `
        <h3>${articleData.title}</h3>
        <p>${articleData.description}</p>
        
    `;

    topicsDiv.appendChild(article);
});
