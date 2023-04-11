function logout() {
    alert("Merci d'avoir participé à cette bêta !");
    localStorage.removeItem("token");
    window.location.assign("../index.html");
}