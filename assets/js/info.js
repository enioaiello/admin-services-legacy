const browserInfo = document.querySelector('#browser-info');
browserInfo.innerHTML += `Navigateur: ${navigator.userAgent}<br>`;
browserInfo.innerHTML += `Système d'exploitation: ${window.navigator.platform}`;