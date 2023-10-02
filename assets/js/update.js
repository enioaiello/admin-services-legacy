let versionCustom = localStorage.getItem("versionCustom");

function loadVersion() {
  if (versionCustom === "6.1.2") {
      window.location.href = "./updates/6/index.html";
  }
}

loadVersion();