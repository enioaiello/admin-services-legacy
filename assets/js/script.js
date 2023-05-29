window.addEventListener("load", function() {
    let darkMode = localStorage.getItem("theme");
    const body = document.querySelector("body");
  
    if (darkMode === "white") {
      body.classList.add("darkMode");
    } else if (darkMode === "black") {
      body.classList.remove("darkMode");
    } else {
      alert("Les paramètres d'Admin Services sont corrompus. Cliquez sur le bouton pour restaurer les paramètres");
      localStorage.removeItem("theme");
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      alert("Les paramètres ont été restaurés. Rechargement d'Admin Services.");
      window.location.reload();
    }
  });
  