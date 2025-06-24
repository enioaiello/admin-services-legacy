const authorizedAppList = {
    'HackLab': {
        'name': 'HackLab',
        'url': 'https://enioaiello.github.io/hacklab/',
        'id': '530764',
        'permissions': ['user-information']
    },
    'SHOPEI': {
        'name': 'SHOPEI',
        'url': 'https://enioaiello.github.io/shopei/',
        'id': '823995',
        'permissions': ['user-information']
    }
};

function getAppById(appId) {
    return Object.values(authorizedAppList).find(app => app.id === appId);
}

function init() {
    const username = localStorage.getItem('username');
    const appId = localStorage.getItem('app');
    const appIndicationElement = document.querySelector('#app-indication');

    if (!username) {
        window.location.href = 'https://enioaiello.github.io/admin-services-legacy/';
        return;
    }

    const app = getAppById(appId);

    if (app) {
        appIndicationElement.textContent = `L'application ${app.name} tente d'accéder à vos informations personnelles.`;

        const permissionsElement = document.querySelector('#app-autorisation');
        app.permissions.forEach(permission => {
            const li = document.createElement('li');
            li.textContent = permission;
            permissionsElement.appendChild(li);
        });
        document.querySelector('#app-accept').addEventListener('click', () => {
            localStorage.removeItem('app');
            window.location.href = app.url;
        });
    } else {
        appIndicationElement.textContent = 'Application inconnue ou non autorisée.';
        document.querySelector('#continue').style.display = 'none';
        document.querySelector('#app-autorisation').style.display = 'none';
        document.querySelector('#buttons').style.display = 'none';
    }
}

document.querySelector('#app-refuse').addEventListener('click', () => {
    localStorage.removeItem('app');
    window.location.href = 'https://enioaiello.github.io/admin-services-legacy/';
});

init();
