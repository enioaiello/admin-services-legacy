const disableGoogleMode = document.querySelector("#disableGoogleMode");

function disable() {
    localStorage.removeItem("google-mode");
    window.location.href = "../../../../index.html";
}

disableGoogleMode.addEventListener("click", disable);