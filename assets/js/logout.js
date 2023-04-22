'use srict'
function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.assign("../index.html");
}