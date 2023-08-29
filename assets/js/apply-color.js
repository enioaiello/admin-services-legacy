const links = document.querySelector("a");
const linksConfig = localStorage.getItem("linkColor");

if (linksConfig) {
    links.style.color = linksConfig;
}