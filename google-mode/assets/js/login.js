let access = document.querySelector("#access");
let loginContent = document.querySelector("input");
let loginButton = document.querySelector("#loginButton");
let passwordError = document.querySelector("#errorPassword");
let usernameInput = document.querySelector("#usernameInput");
let passwordInput = document.querySelector("#passwordInput");
let registerButton = document.querySelector("#registerButton");

let user = [
    {
        user: "root",
        password: "toor",
        token: "5665d6zd46da465z465d4b57"
    },
]

const redirect = () => {
    window.location.href = "success.html";
}

const verifyToken = () => {
    const token = localStorage.getItem("token");
    for(const i of user){
        if(i.token === token){
            redirect();
        }
    }
}

verifyToken();

const login = (loginParameters) => {
    loginParameters.preventDefault();
    for(const i of user){
        if(usernameInput.value === i.user && passwordInput.value === i.password){
            redirect()
            localStorage.setItem('token', i.token);
            break;
        }else{
            passwordError.classList.remove("none");
        }
    }
}
function hideErrorText() {
    passwordError.classList.add("none");
}

function generate_token(length){
    let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    let b = [];
    for (let i = 0; i < length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}

function register() {
    let newUsername = prompt("Enter a username");
    let newPassword = prompt("Enter a password");
    let newUser = [
        {
            user: newUsername,
            password: newPassword,
            token: generate_token(23)
        }
    ]
    user.push(newUser);
    console.log(user);
}

loginButton.addEventListener("click", login);
registerButton.addEventListener("click", register);
