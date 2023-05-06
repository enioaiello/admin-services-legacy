const username = document.querySelector('#username')
const password = document.querySelector('#password')
const button = document.querySelector('button')
const fs = require("fs");
const users = require("./user.json");

const writeUser = () => {

    let user = {
        name: username.value
    };


    users.push(user);
    fs.writeFile("./user.json", JSON.stringify(users), err => {
        if (err) throw err;

        console.log("Done writing");
    });
}


button.addEventListener('click', writeUser)