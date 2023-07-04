import getWeather from './getWeather';

const conditionTextDiv = document.getElementById('conditionText');
const locationDiv = document.getElementById('location');
const temperatureDiv = document.getElementById('temperature');
const feelslikeDiv = document.getElementById('feelslike');
const windDiv = document.getElementById('wind');
const humidityDiv = document.getElementById('humidity');

export default async function displayWeather(place) {
  const myWeatherData = await getWeather(place);
  console.log(myWeatherData);

  conditionTextDiv.textContent = myWeatherData.conditionText;
  locationDiv.textContent = myWeatherData.city + ', ' + myWeatherData.country;
  temperatureDiv.textContent = myWeatherData.temperature;
  feelslikeDiv.textContent = 'feels like: ' + myWeatherData.feelslike;
  windDiv.textContent = 'wind speed: ' + myWeatherData.wind + 'kph';
  humidityDiv.textContent = 'humidity: ' + myWeatherData.humidity + '%';
}
