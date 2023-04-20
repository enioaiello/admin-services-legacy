function logout() {
    alert("Merci d'avoir participé à cette bêta !");
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.assign("../index.html");
}