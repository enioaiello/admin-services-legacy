const articlesData = [
    {
        titre: "Suppression totale d'Admin Services Desktop",
        description: "L'application a été supprimée le 26/09/2023, merci de l'avoir utilisée.",
        lien: "#"
    },
    {
        titre: "Passage à la 7.0.0",
        description: "Obtenez des informations sur la future mise à niveau majeure.",
        lien: "7.0.0.html"
    },
    {
        titre: "Mises à jour des comptes",
        description: "Obtenez des mises à jour pour les anciens comptes directement sur Admin Services.",
        lien: "update-account.html"
    },
    {
        titre: "Ajout des applications internes",
        description: "En savoir plus sur la nouvelle fonctionnalité d'application interne d'<strong>Admin Services</strong>.",
        lien: "in-app.html"
    },
    {
        titre: "Fin d'Admin Services Plus",
        description: "En savoir plus sur les pertes d'<strong>Admin Services Plus</strong> et de ses fonctionnalités.",
        lien: "eol-plus.html"
    }
];

const announcementsDiv = document.getElementById("announcements");

articlesData.forEach(article => {
    const articleElement = document.createElement("article");
    const titleElement = document.createElement("h3");
    const descriptionElement = document.createElement("p");
    const linkElement = document.createElement("a");

    titleElement.textContent = article.titre;
    descriptionElement.textContent = article.description;
    linkElement.textContent = "Consulter";
    linkElement.href = article.lien;
    linkElement.classList.add("button");

    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(linkElement);
    announcementsDiv.appendChild(articleElement);
});
