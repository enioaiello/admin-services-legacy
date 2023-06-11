window.addEventListener("DOMContentLoaded", function() {
    let backgroundURL = localStorage.getItem("backgroundURL");
    if (backgroundURL) {
      document.body.style.backgroundImage = "url('" + backgroundURL + "')";
    }
});