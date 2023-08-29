let links = document.querySelector("#links");

function changeLink() {
    let result = prompt("Choisissez une nouvelle couleur");
    if (result === null) {
        localStorage.removeItem("linkColor");
    } else {
        localStorage.setItem("linkColor", result);
    }
}

links.addEventListener("click", changeLink);