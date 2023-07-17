let localVersion = localStorage.getItem("version");
let latestVersion = document.querySelector("#latestVersion");
latestVersion.innerHTML = "<strong>Version actuelle :</strong> " + localVersion;