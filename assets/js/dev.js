const account = document.querySelector("#account");
const username = localStorage.getItem("username");
const group = localStorage.getItem("group");
const token = localStorage.getItem("token");
account.textContent = "Nom d'utilisateur : " + username + " ; groupe : " + group + " ; token : " + token;