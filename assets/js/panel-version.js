let localVersion = localStorage.getItem("version");
let latestVersion = document.querySelector("#latestVersion");
let functionPack = localStorage.getItem("functionPack");
if (functionPack === undefined) {
    latestVersion.innerHTML = "<strong>Version actuelle :</strong> " + localVersion;
} else {
    latestVersion.innerHTML = "<strong>Version actuelle :</strong> " + localVersion + " (fonctionnalités avancées)";
}