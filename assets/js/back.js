const backPage = document.querySelector("#backPage");

if (window.history.length === 2) {
    backPage.style.display = "none";
}

function goBack() {
    window.history.back();
}

backPage.addEventListener("click", goBack);