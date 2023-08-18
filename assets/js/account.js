const status = localStorage.getItem("status");
const updated = localStorage.getItem("updated");

if (status === null) {
    window.location.href = "./warning.html";
}