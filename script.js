
const apiKey = '30db64bb037a4acca201a763254a4a76'; 


function getWeather() {
    const cityInput = document.getElementById("city"); 
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    

 const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === "404") {
                displayError("City not found.");
                return;
            }

        
            displayWeather(data);
            changeBackground(data.weather[0].main); 
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            displayError("Error fetching data. Check your network.");
        });
}



const inputField = document.getElementById("city");
inputField.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        getWeather();
    }
});

function displayWeather(data) {
    const weatherInfo = document.getElementById("weather-info");
    
    weatherInfo.innerHTML = 
        `<h3>${data.name}, ${data.sys.country}</h3>
        <p class="temperature">${Math.round(data.main.temp)} °C</p>
        <p>${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>`;
}

function displayError(message) {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `<p style="color: #ff5733;">${message}</p>`;
    document.body.style.background = 'linear-gradient(135deg, #4a75e0, #a0d2eb)';
}


function changeBackground(weatherCondition) {
    let backgroundGradient;
    
    switch (weatherCondition.toLowerCase()) {
        case 'clear':
            backgroundGradient = 'linear-gradient(135deg, #ffb347, #ffcc33)'; 
            break;
        case 'clouds':
        case 'mist':
        case 'haze':
            backgroundGradient = 'linear-gradient(135deg, #708090, #b0c4de)';
            break;
        case 'rain':
        case 'drizzle':
        case 'thunderstorm':
            backgroundGradient = 'linear-gradient(135deg, #4a75e0, #1e3a8a)'; 
            break;
        case 'snow':
            backgroundGradient = 'linear-gradient(135deg, #e0eafc, #cfdef3)'; 
        default:
            backgroundGradient = 'linear-gradient(135deg, #4a75e0, #a0d2eb)'; 
    }
    
    
    document.body.style.background = backgroundGradient;
}

