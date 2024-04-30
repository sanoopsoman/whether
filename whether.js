// Function to fetch weather data from the API
async function getWeather(location) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to process JSON data and return required information
function processWeatherData(data) {
    return {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description
    };
}

// Function to display weather information on the console
function displayWeatherInfo(weatherInfo) {
    console.log('Weather in', weatherInfo.city);
    console.log('Temperature:', weatherInfo.temperature + '°C');
    console.log('Description:', weatherInfo.description);
}

// Event listener for form submission
const locationForm = document.getElementById('locationForm');
locationForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const locationInput = document.getElementById('location');
    const location = locationInput.value;
    const weatherData = await getWeather(location);
    const processedWeatherData = processWeatherData(weatherData);
    displayWeatherInfo(processedWeatherData);
});
