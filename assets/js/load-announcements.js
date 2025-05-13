const articlesData = [
    {
        titre: "Futur du service",
        description: "En apprendre plus sur l'avenir du service",
        lien: "future-of-service.html"
    },
    {
        titre: "Nouveau support",
        description: "Obtenez plus d'informations sur notre nouveau support.",
        lien: "new-support.html"
    }
];

const announcementsDiv = document.querySelector("#announcements");

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
