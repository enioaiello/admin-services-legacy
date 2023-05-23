let loginButton = document.querySelector("input[type=submit]");
let passwordError = document.querySelector(".error");
let usernameInput = document.querySelector("input[type=email]");
let passwordInput = document.querySelector("input[type=password]");
let informationRedirect = document.querySelector(".information");

let user = [
    {
        username: "root",
        email: "root@admin-services.com",
        password: "toor",
        token: "4555d6zd46da465z465d4c58",
        group: "basic"
    },
    {
        username: "default__user__0",
        email: "maintenance@admin-services.com",
        password: "J5Q8GOPR",
        token: "maintenance__access",
        group: "developper"
    },
]

const redirect = () => {
    window.location.href = "./views/admin.html";
    const audio = new Audio("./assets/sounds/login.mp3");
    audio.play();
}

const verifyToken = () => {
    const token = localStorage.getItem("token");
    for(const i of user){
        if(i.token === token){
            informationRedirect.classList.remove("none");
            loginButton.disabled = true;
            usernameInput.disabled = true;
            passwordInput.disabled = true;
            setTimeout(redirect, 3500);
        }
    }
}

verifyToken();

const login = (loginParameters) => {
    loginParameters.preventDefault();
    for (const i of user) {
        if (usernameInput.value === i.email && passwordInput.value === i.password) {
            redirect()
            localStorage.setItem('token', i.token);
            localStorage.setItem('group', i.group);
            localStorage.setItem('username', i.username);
            break;
        } else {
            passwordError.classList.remove("none");
            setTimeout(hideErrorText, 3500);
        }
    }
}

function hideErrorText() {
    passwordError.classList.add("none");
}

loginButton.addEventListener("click", login);