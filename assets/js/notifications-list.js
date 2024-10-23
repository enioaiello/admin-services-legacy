const notificationsList = document.querySelector("#notificationsList");
const notificationsCount = document.querySelector("#count");
const notificationsState = localStorage.getItem("notificationsState");

function enableNotifications() {
  notificationsList.classList.remove("hidden");
  localStorage.setItem("notificationsState", "enabled");
}

function displayNotificationsCount() {
  const notifications = notificationsList.querySelectorAll("article");
  if (notifications.length === 1) {
    notificationsCount.textContent = "Vous avez " + notifications.length + " notification.";
  } else if (notifications.length >= 2) {
    notificationsCount.textContent = "Vous avez " + notifications.length + " notifications.";
  } else {
    notificationsCount.textContent = "Vous n'avez aucune notification.";
  }
}

function createNotification(type, title, message, image) {
  if (image === undefined) {
    image = "../assets/img/logo.png";
    const notification = document.createElement("article");
    notification.innerHTML = '<img src="' + image + '" alt="Logo de la notification" class="notificationIcon">\n' +
        '                <div class="information">\n' +
        '                    <h2>' + title + '</h2>\n' +
        '                    <p>' + message + '</p>\n' +
        '                </div>\n';
    notificationsList.appendChild(notification);
    displayNotificationsCount();
  } else {
    const notification = document.createElement("article");
    notification.innerHTML = '<img src="' + image + '" alt="Logo de la notification" class="notificationIcon">\n' +
        '                <div class="information">\n' +
        '                    <h2>' + title + '</h2>\n' +
        '                    <p>' + message + '</p>\n' +
        '                </div>\n';
    notificationsList.appendChild(notification);
    displayNotificationsCount();
  }
}

// createNotification("success", "Message envoyé", "Votre message a bien été envoyé.", "https://img.icons8.com/color/48/000000/ok.png");
displayNotificationsCount();