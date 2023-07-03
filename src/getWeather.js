import displayWeather from './displayWeather';
const dealer = document.getElementById('error');

function dealwitherror() {
  dealer.textContent = 'Cannot find the city';
}

export default async function getWeather(place) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=de8a49aa5a1a4a91abb143538230107&q=${place}`,
    {
      mode: 'cors',
    }
  );
  if (response.status === 400) {
    dealwitherror();
    return;
  } 
  dealer.textContent = '';
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
