let welcomeText = document.getElementById('welcomeText');
let actualHour = new Date().getHours();
let username = localStorage.getItem('username');
let logoutButton = document.getElementById('logoutButton');

console.log("Bienvenue sur la console !");
console.log("Nous espérons que vous respecterez la vie privée des autres utilisateurs !");
console.log("Faites attention aux commandes que vous tapez, elles peuvent être dangereuses !");

if (actualHour >= 8 && actualHour < 19) {
    welcomeText.textContent = "Bonjour " + username;
    console.log("Bonjour " + username);
} else {
    welcomeText.textContent = "Bonsoir " + username;
    console.log("Bonsoir " + username);
}

if (username == null) {
    window.location.href = "./login/options.html";
    console.error("Vous n'êtes pas connecté !");
}

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

            const checkboxStates = {};
            checkboxes.forEach(checkbox => {
                checkboxStates[checkbox.getAttribute('data-target')] = checkbox.checked;
            });
            localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
        });
    });

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

    const panelDivs = ['recommandes', 'services', 'annonces', 'support', 'actions', 'widgets', 'hints'];

    panelDivs.forEach(divId => {
        const div = document.getElementById(divId);
        const checkbox = document.querySelector(`[data-target="${divId}"]`);

        if (div && checkbox) {
            if (checkbox.checked) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        }
    });
});


function logout() {
    let result = confirm("Êtes-vous sûr de vous déconnecter ?");
    if (result) {
        window.location.href = "https://enioaiello.github.io/admin-services/";
        console.info("Déconnexion réussie");
    }
}

function calculateDateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const dateString = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

    document.getElementById('dateTime').innerHTML = `Date actuelle : ${dateString}, Heure actuelle : ${hours}:${minutes}`;
}

window.onload = function () {
    calculateDateTime();
};

logoutButton.addEventListener("click", logout);