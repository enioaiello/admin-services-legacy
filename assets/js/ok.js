const valide = localStorage.getItem("welcome");

if (valide == "true") {
    console.log("The user has already registered!");
} else if (valide === undefined || null) {
    // console.log("The user has not already registered!");
    window.location.href = "./welcome.html";
}