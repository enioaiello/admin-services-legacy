const browserInfo = document.querySelector('#browser-info');
browserInfo.innerHTML += `Navigateur: ${navigator.userAgent}<br>`;
browserInfo.innerHTML += `Système d'exploitation: ${window.navigator.platform}`;

const url = 'https://enioaiello.github.io/admin-services/';
const pingInfo = document.querySelector('#ping-info');

const xhr = new XMLHttpRequest();
let startTime, endTime, pingTime;

xhr.onreadystatechange = function() {
  if (this.readyState === this.HEADERS_RECEIVED) {
    startTime = new Date().getTime();
  }
  console.log(endTime);
  if (this.readyState === this.COMPLETE) {
    endTime = new Date().getTime();

    pingTime = endTime - startTime;

    console.log(`Ping vers ${url} : ${pingTime}ms`);
    pingInfo.innerText = `Ping vers ${url} : ${pingTime}ms`;
  }
};

xhr.open('HEAD', url);
xhr.send();