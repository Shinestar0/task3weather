// Get weather data
function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'a0698fb0c470117ccca12ff114effe61'; 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}
