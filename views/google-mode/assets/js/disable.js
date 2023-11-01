const disableGoogleMode = document.querySelector("#disableGoogleMode");

function disable() {
    localStorage.removeItem("gfap");
    window.location.href = "https://enioaiello.github.io/admin-services";
}

disableGoogleMode.addEventListener("click", disable);