let pdpChange = document.querySelector("#pdpChange");

function changePdp() {
    let userPdp = prompt("Entrez le lien de votre image");
    if (userPdp === null || userPdp === undefined || userPdp === "") {
        alert("Photo de profil retirée avec succès !");
        localStorage.setItem("pdp", "https://www.photoprof.fr/images_dp/photographes/profil_vide.jpg");
        window.location.reload();
    } else {
        localStorage.setItem("pdp", userPdp);
        console.log("Photo de profil modifiée avec succès !");
        window.location.reload();
    }
}

pdpChange.addEventListener("click", changePdp);