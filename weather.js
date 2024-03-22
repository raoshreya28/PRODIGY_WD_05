function getWeather() {
    const locationInput = document.getElementById('locationInput').value;

    // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiKey = 'dc00ae6cb8d00f6ba5e476f114865578';

    // API URL for current weather data
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Extract relevant weather data
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const feelsLike = data.main.feels_like;
            const humidity = data.main.humidity;

            // Display weather data
            const weatherDataElement = document.getElementById('weatherData');
            weatherDataElement.innerHTML = `
                <p>Weather: ${weatherDescription}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Feels like: ${feelsLike}°C</p>
                <p>Humidity: ${humidity}%</p>
            `;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
