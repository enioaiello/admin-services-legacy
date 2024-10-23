let usernameInput = document.querySelector("#username");
let emailInput = document.querySelector("#email");
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
        textContainer.innerHTML = `<p>Bonjour ${username} !</p>
        <p>Vous avez déjà enregistré ces informations.</p>
        <p>Continuons...</p>`;
        setTimeout(() => {
            window.location.href = "security.html";
        }, 5000);
    }
}

function registerData(e) {
    e.preventDefault();
    let username = usernameInput.value;
    let email = emailInput.value;

    if (username === "" || email === "") {
        errorDisplay.innerHTML = "Veuillez remplir tous les champs !";
        return;
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        formContainer.style.animation = "slide 1s";
        window.location.href = "security.html";
        return;
    }
}

function transition() {
    setInterval(() => {
        if (progressBar.value <= 5) {
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