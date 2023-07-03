const conditionTextDiv = document.getElementById('conditionText');
const locationDiv = document.getElementById('location');
const temperatureDiv = document.getElementById('temperature');
const feelslikeDiv = document.getElementById('feelslike');
const windDiv = document.getElementById('wind');
const humidityDiv = document.getElementById('humidity');

export default function displayWeather(
  conditionText,
  city,
  country,
  temperature,
  feelslike,
  wind,
  humidity,
) {
  conditionTextDiv.textContent = conditionText;
  locationDiv.textContent = city + ', ' + country;

  temperatureDiv.textContent = temperature;
  feelslikeDiv.textContent = 'feels like: ' + feelslike;
  windDiv.textContent = 'wind speed: ' + wind + 'kph';
  humidityDiv.textContent = 'humidity: ' + humidity + '%';
}
