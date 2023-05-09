function alertResize() {
    if (window.innerWidth < 768) {
        window.location.href("../../views/mobileAlert.html");
    }
}

window.addEventListener("resize", alertResize);