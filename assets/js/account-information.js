'use strict';

const username = localStorage.getItem("username");
const usernameLabel = document.querySelector("#usernameInformation");

if (username) {
usernameLabel.textContent = username;
}