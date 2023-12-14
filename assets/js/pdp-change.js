let pdpChange = document.querySelector("#pdpChange");
let profilePicture = document.querySelector("#profilePicture");

function changePdp() {
    let userPdp = prompt("Entrez le lien de votre image");
    if (userPdp === null || userPdp === undefined || userPdp === "") {
        alert("Photo de profil retirée avec succès !");
        localStorage.setItem("pfp", "https://www.photoprof.fr/images_dp/photographes/profil_vide.jpg");
        window.location.reload();
    } else {
        localStorage.setItem("pfp", userPdp);
        console.log("Photo de profil modifiée avec succès !");
        window.location.reload();
    }
}

function loadPdp() {
    profilePicture.src = localStorage.getItem("pfp");
}

loadPdp();
pdpChange.addEventListener("click", changePdp);