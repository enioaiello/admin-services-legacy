document.addEventListener('DOMContentLoaded', (event) => {
    const apiKey = '6271124950ad3a11168970847a769525';
    const weatherDiv = document.getElementById('weather');

    // Fonction pour obtenir la position de l'utilisateur
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            weatherDiv.innerHTML = "La géolocalisation n'est pas supportée par ce navigateur.";
        }
    }

    // Fonction pour afficher la position et obtenir la météo
    function showPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=fr`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.weather && data.weather.length > 0) {
                    const city = data.name;
                    const weatherDescription = data.weather[0].description;
                    const temperature = data.main.temp.toFixed(1);
                    weatherDiv.innerHTML = `${city} : ${weatherDescription}, température de ${temperature}°C.`;
                } else {
                    weatherDiv.innerHTML = "Impossible de récupérer les données météo.";
                }
            })
            .catch(error => {
                weatherDiv.innerHTML = "Erreur lors de la récupération des données météo.";
                console.error("Erreur :", error);
            });
    }

    // Fonction pour afficher les erreurs de géolocalisation
    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                weatherDiv.innerHTML = "L'utilisateur a refusé la demande de géolocalisation.";
                break;
            case error.POSITION_UNAVAILABLE:
                weatherDiv.innerHTML = "Les informations de localisation ne sont pas disponibles.";
                break;
            case error.TIMEOUT:
                weatherDiv.innerHTML = "La demande de localisation a expiré.";
                break;
            case error.UNKNOWN_ERROR:
                weatherDiv.innerHTML = "Une erreur inconnue est survenue.";
                break;
        }
    }

    // Appel de la fonction pour obtenir la localisation
    getLocation();

    // refreshWeather.addEventListener('click', getLocation);
    setTimeout(getLocation, 60000);
});
