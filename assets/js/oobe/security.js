let passwordInput = document.querySelector("#password");
let passwordRepeatInput = document.querySelector("#passwordRepeat");
let submitBtn = document.querySelector("input[type=submit]");
let textContainer = document.querySelector("#text");
let formContainer = document.querySelector("form");
let errorDisplay = document.querySelector("#error");
let progressBar = document.querySelector("progress");
errorDisplay.innerHTML = "";

function checkData() {
    let username = localStorage.getItem("username");
    let email = localStorage.getItem("email");

    if (username !== null && email !== null) {
        textContainer.innerHTML = `<p>Il semble que vous ayez également ces informations d'enregistrées.</p>
        <p>Continuons...</p>`;
        setTimeout(() => {
            window.location.href = "security.html";
        }, 5000);
    }
}

function registerData(e) {
    e.preventDefault();
    let password = passwordInput.value;
    let passwordRepeat = passwordRepeatInput.value;

    if (password === "" || passwordRepeat === "") {
        errorDisplay.innerHTML = "Veuillez remplir tous les champs !";
        return;
    } else if (password !== passwordRepeat) {
        errorDisplay.innerHTML = "Les mots de passe ne correspondent pas !";
        return;
    } else {
        localStorage.setItem("password", password);
        formContainer.style.animation = "slide 1s";
        // window.location.href = "security.html";
        return;
    }
}

function transition() {
    setInterval(() => {
        if (progressBar.value <= 47) {
            progressBar.value += 1;
        }
    }, 5);
    textContainer.style.display = "block";
    textContainer.style.animation = "slide 1s";

    setTimeout(() => {
        textContainer.style.animation = "dispawn 0.5s";
        setTimeout(() => {
            textContainer.style.display = "none";
            formContainer.style.display = "block";
            formContainer.style.animation = "slide 1s";
        }, 500);
    }, 10000);
}

transition();
checkData();
submitBtn.addEventListener("click", registerData);