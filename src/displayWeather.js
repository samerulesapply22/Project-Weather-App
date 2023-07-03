const conditionTextDiv = document.getElementById('conditionText');
const cityDiv = document.getElementById('city');
const countryDiv = document.getElementById('country');
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
  humidity
) {
  conditionTextDiv.textContent = conditionText;
  cityDiv.textContent = city;
  countryDiv.textContent = country;
  temperatureDiv.textContent = temperature;
  feelslikeDiv.textContent = feelslike;
  windDiv.textContent = wind;
  humidityDiv.textContent = humidity;
}
