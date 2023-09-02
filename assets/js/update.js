let value = localStorage.getItem("version-value");

if (value === null) {
    console.log("Update or downgrade not available");
} else if (value === "5.0.0") {
    window.location.href = "./views/downgrade/5/index.html";
} else if (value === "custom") {
    alert("Custom version value not available.");
} else if (value === "default") {
    console.log("Connected");
} else {
    window.location.href = "./404.html";
}