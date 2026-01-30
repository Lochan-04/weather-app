// Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
const apiKey = '30db64bb037a4acca201a763254a4a76'; 

// --- 20 Famous Cities in Maharashtra ---

const cityForMumbai = 'Mumbai';
const apiUrlMumbai = `https://api.openweathermap.org{cityForMumbai}&appid=${apiKey}&units=metric`;

const cityForPune = 'Pune';
const apiUrlPune = `https://api.openweathermap.org{cityForPune}&appid=${apiKey}&units=metric`;

const cityForNagpur = 'Nagpur';
const apiUrlNagpur = `https://api.openweathermap.org{cityForNagpur}&appid=${apiKey}&units=metric`;

const cityForNashik = 'Nashik';
const apiUrlNashik = `https://api.openweathermap.org{cityForNashik}&appid=${apiKey}&units=metric`;

const cityForAurangabad = 'Aurangabad';
const apiUrlAurangabad = `https://api.openweathermap.org{cityForAurangabad}&appid=${apiKey}&units=metric`;

const cityForThane = 'Thane';
const apiUrlThane = `https://api.openweathermap.org{cityForThane}&appid=${apiKey}&units=metric`;

const cityForKolhapur = 'Kolhapur';
const apiUrlKolhapur = `https://api.openweathermap.org{cityForKolhapur}&appid=${apiKey}&units=metric`;

const cityForSolapur = 'Solapur';
const apiUrlSolapur = `https://api.openweathermap.org{cityForSolapur}&appid=${apiKey}&units=metric`;

const cityForAmravati = 'Amravati';
const apiUrlAmravati = `https://api.openweathermap.org{cityForAmravati}&appid=${apiKey}&units=metric`;

const cityForJalgaon = 'Jalgaon';
const apiUrlJalgaon = `https://api.openweathermap.org{cityForJalgaon}&appid=${apiKey}&units=metric`;

const cityForMalegaon = 'Malegaon';
const apiUrlMalegaon = `https://api.openweathermap.org{cityForMalegaon}&appid=${apiKey}&units=metric`;

const cityForSangli = 'Sangli';
const apiUrlSangli = `https://api.openweathermap.org{cityForSangli}&appid=${apiKey}&units=metric`;

const cityForAkola = 'Akola';
const apiUrlAkola = `https://api.openweathermap.org{cityForAkola}&appid=${apiKey}&units=metric`;

const cityForLatur = 'Latur';
const apiUrlLatur = `https://api.openweathermap.org{cityForLatur}&appid=${apiKey}&units=metric`;

const cityForDhule = 'Dhule';
const apiUrlDhule = `https://api.openweathermap.org{cityForDhule}&appid=${apiKey}&units=metric`;

const cityForNanded = 'Nanded';
const apiUrlNanded = `https://api.openweathermap.org{cityForNanded}&appid=${apiKey}&units=metric`;

const cityForIchalkaranji = 'Ichalkaranji';
const apiUrlIchalkaranji = `https://api.openweathermap.org{cityForIchalkaranji}&appid=${apiKey}&units=metric`;

const cityForPanvel = 'Panvel';
const apiUrlPanvel = `https://api.openweathermap.org{cityForPanvel}&appid=${apiKey}&units=metric`;

const cityForGondia = 'Gondia';
const apiUrlGondia = `https://api.openweathermap.org{cityForGondia}&appid=${apiKey}&units=metric`;

const cityForBhusawal = 'Bhusawal';
const apiUrlBhusawal = `https://api.openweathermap.org{cityForBhusawal}&appid=${apiKey}&units=metric`;


function getWeather() {
    // Note: The HTML input ID is 'city', so we select that here
    const cityInput = document.getElementById("city"); 
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    cityInput.addEventListener("")

    // The dynamic URL used for the search button
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === "404") {
                displayError("City not found.");
                return;
            }

            // Display data and dynamically change the body background
            displayWeather(data);
            changeBackground(data.weather[0].main); // pass the main weather condition
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
            displayError("Error fetching data. Check your network.");
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById("weather-info");
    
    weatherInfo.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p class="temperature">${Math.round(data.main.temp)} °C</p>
        <p>${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

function displayError(message) {
    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = `<p style="color: #ff5733;">${message}</p>`;
    // Revert to default background on error
    document.body.style.background = 'linear-gradient(135deg, #4a75e0, #a0d2eb)';
}


// --- Dynamic Background Logic ---

function changeBackground(weatherCondition) {
    let backgroundGradient;
    
    switch (weatherCondition.toLowerCase()) {
        case 'clear':
            backgroundGradient = 'linear-gradient(135deg, #ffb347, #ffcc33)'; // Sunny
            break;
        case 'clouds':
        case 'mist':
        case 'haze':
            backgroundGradient = 'linear-gradient(135deg, #708090, #b0c4de)'; // Cloudy
            break;
        case 'rain':
        case 'drizzle':
        case 'thunderstorm':
            backgroundGradient = 'linear-gradient(135deg, #4a75e0, #1e3a8a)'; // Rainy/Stormy
            break;
        case 'snow':
            backgroundGradient = 'linear-gradient(135deg, #e0eafc, #cfdef3)'; // Snow
            break;
        default:
            backgroundGradient = 'linear-gradient(135deg, #4a75e0, #a0d2eb)'; // Default
    }
    
    // Apply the new background to the whole body
    document.body.style.background = backgroundGradient;
}
