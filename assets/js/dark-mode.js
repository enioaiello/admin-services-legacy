const toggleThemeButton = document.querySelector("#toggleTheme");
let dark = localStorage.getItem("theme") || "white";

function toggleTheme() {
    alert("Ce système est encore en développement. La fonction ne marche donc pas correctement.");
    alert("L'action a été annulée. Le système n'est pas stable.")
    // if (dark === "white") {
    //     localStorage.setItem("theme", "black");
    // } else if (dark === "black") {
    //     localStorage.setItem("theme", "white");
    // } else {
    //     alert("Les thèmes ne sont pas créés.");
    // }
}

toggleThemeButton.addEventListener("click", toggleTheme);
