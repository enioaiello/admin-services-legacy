const continueButton = document.querySelector("#continue");
const returnButton = document.querySelector("#return");

function continueToSite() {
    localStorage.setItem("safeMode", "true");
    window.location.href = "../../../index.html";
}

continueButton.addEventListener("click", continueToSite);

function returnToSite() {
    localStorage.removeItem("safeMode");
    window.location.href = "../../../index.html";
}

returnButton.addEventListener("click", returnToSite);