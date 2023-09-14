'use strict';

const information = document.querySelector("#information");
const version = "6.1.1";
let localVersion = localStorage.setItem("version", version);
const username = localStorage.getItem("username");
const welcomeText = document.querySelector("#welcomeText");

information.innerHTML = "<strong>Admin Services</strong> " + version;

function userNameDisplay() {
    let token = localStorage.getItem("token");
    if (token === null || username === null) {
        window.location.assign("../../index.html");
    }
    welcomeText.innerHTML = "Bienvenue " + username;
}

localVersion;

userNameDisplay();

// Généré par ChatGPT : GPT-3 (OpenAI)
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (this.checked) {
                targetSection.style.display = 'block';
            } else {
                targetSection.style.display = 'none';
            }

            // Sauvegarde de l'état des cases à cocher dans le localStorage
            const checkboxStates = {};
            checkboxes.forEach(checkbox => {
                checkboxStates[checkbox.getAttribute('data-target')] = checkbox.checked;
            });
            localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
        });
    });

    // Récupération et application des états des cases à cocher depuis le localStorage
    const savedCheckboxStates = JSON.parse(localStorage.getItem('checkboxStates'));
    if (savedCheckboxStates) {
        for (const targetId in savedCheckboxStates) {
            const targetSection = document.getElementById(targetId);
            const checkbox = document.querySelector(`[data-target="${targetId}"]`);
            if (targetSection && checkbox) {
                if (savedCheckboxStates[targetId]) {
                    targetSection.style.display = 'block';
                    checkbox.checked = true;
                } else {
                    targetSection.style.display = 'none';
                    checkbox.checked = false;
                }
            }
        }
    }
});