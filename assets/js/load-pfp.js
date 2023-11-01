let pfpLogout = document.querySelector("#pfpLogout");
let pfp = localStorage.getItem("pfp");

function loadImage() {
    pfpLogout.src = pfp;
}

function logout() {
    let result = confirm("Êtes-vous sûr de vous déconnecter ?");
    if (result) {
        window.location.href = "https://enioaiello.github.io/admin-services/";
    }
}

loadImage();

pfpLogout.addEventListener("click", logout);