let plusAccount = localStorage.getItem("group");
let enabledDiv = document.querySelector(".enabled");
let disabledDiv = document.querySelector(".disabled");
let date = document.querySelector("#date");
let dateMaintenant = new Date();
let dateEtHeure = dateMaintenant.toLocaleString();

function activatePlus() {
    localStorage.setItem("group", "plus");
    localStorage.setItem("plusEnabled", dateEtHeure);
    window.location.reload();
}

function desactivatePlus() {
    let avertissement = confirm("Si vous continuez, vous perdrez l'accès à Admin Services Plus.");
    if (avertissement) {
        localStorage.setItem("group", "basic");
        localStorage.removeItem("plusEnabled");
        window.location.reload();
    }
}

if (plusAccount === "plus") {
    enabledDiv.classList.remove("none");
    disabledDiv.classList.add("none");
    let dateActivated = localStorage.getItem("plusEnabled");
    date.innerHTML = "Activé le " + dateActivated;
}

if (plusAccount === "") {
    alert("Données d'Admin Services Plus corrompues. Confirmez la réinitialisation d'Admin Services");
}