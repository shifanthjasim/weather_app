// script.js

// Function to fetch and display the weather
async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = '849ddf634c618a3e0663595f531609fc';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found');
        
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    }
}

// Function to update the UI with the weather data
function displayWeather(data) {
    const { name, sys, main, weather, wind } = data;
    document.getElementById("weatherResult").innerHTML = `
        <h3>Weather in ${name}, ${sys.country}</h3>
        <p><strong>Temperature:</strong> ${main.temp}°C</p>
        <p><strong>Description:</strong> ${weather[0].description}</p>
        <p><strong>Humidity:</strong> ${main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
    `;
}
