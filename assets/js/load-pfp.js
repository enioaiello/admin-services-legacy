
const pfpLogout = document.querySelector("#pfpLogout");
const pfp = localStorage.getItem("pdp")

function loadImage() {
    if (pfp !== null || pfp !== "") {
        pfpLogout.src = pfp;
    } else {
        pfpLogout.src = "https://www.photoprof.fr/images_dp/photographes/profil_vide.jpg";
    }
}

loadImage();