let pdpChange = document.querySelector("#pdpChange");

function changePdp() {
    let userPdp = prompt("Entrez le lien de votre image");
    if (userPdp === null || userPdp === undefined) {
        alert("Photo de profil retirée avec succès !");
    } else {
        localStorage.setItem("pdp", userPdp);
        console.log("Photo de profil modifiée avec succès !")
    }
}

pdpChange.addEventListener("click", changePdp);