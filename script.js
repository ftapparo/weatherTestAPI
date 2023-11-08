document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '86d9547854ca1f8b9d1597e1a97ca61f'; // Substitua com sua chave da OpenWeatherMap

    async function fetchWeather(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        return data;
    }

    function updateWeatherInfo(data) {
        const cityElement = document.getElementById('city');
        const temperatureElement = document.getElementById('temperature');
        const descriptionElement = document.getElementById('description');

        cityElement.textContent = data.name;
        temperatureElement.textContent = `${data.main.temp}°C`;
        descriptionElement.textContent = data.weather[0].description;
    }

    const city = 'São José do Rio Preto'; // Substitua com a cidade desejada

    fetchWeather(city)
        .then(data => updateWeatherInfo(data))
        .catch(error => console.error('Erro ao obter a previsão do tempo:', error));
});
