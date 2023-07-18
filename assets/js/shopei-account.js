let shopeiUsername = localStorage.getItem("session");
let shopeiAccount = document.querySelector("#shopeiAccount");
let antoine = localStorage.getItem("antoine");
let antoineBuy = document.querySelector("#antoineBuy");
let otoMaintenance = localStorage.getItem("Oto-Maintenance");
let otoMaintenanceBuy = document.querySelector("#otoMaintenanceBuy");
let linOtoMaintenance = localStorage.getItem("linOto-Maintenance");
let linOtoMaintenanceBuy = document.querySelector("#linOtoMaintenanceBuy");

shopeiAccount.textContent = shopeiUsername;

if (antoine === undefined || antoine === null || antoine === "") {
    antoineBuy.textContent = "Cette application n'a pas été achetée";
} else {
    antoineBuy.textContent = "Cette application a été achetée";
}

if (otoMaintenance === undefined || otoMaintenance === null || otoMaintenance === "") {
    otoMaintenanceBuy.textContent = "Cette application n'a pas été achetée";
} else {
    otoMaintenanceBuy.textContent = "Cette application a été achetée";
}

if (linOtoMaintenance === undefined || linOtoMaintenance === null || linOtoMaintenance === "") {
    linOtoMaintenanceBuy.textContent = "Cette application n'a pas été achetée";
} else {
    linOtoMaintenanceBuy.textContent = "Cette application a été achetée";
}