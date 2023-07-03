import displayWeather from './displayWeather';

export default async function getWeather() {
  const place = document.getElementById('place').value;
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=de8a49aa5a1a4a91abb143538230107&q=${place}`,
    {
      mode: 'cors',
    }
  );
  if (response.status === 400) {
    return 'bad request';
  }
  const weatherData = await response.json();
  displayWeather(
    weatherData.current.condition.text,
    weatherData.location.name,
    weatherData.location.country,
    weatherData.current.temp_c,
    weatherData.current.feelslike_c,
    weatherData.current.wind_kph,
    weatherData.current.humidity
  );
}
