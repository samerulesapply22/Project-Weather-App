const dealer = document.getElementById('error');

export default async function getWeather(place) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=de8a49aa5a1a4a91abb143538230107&q=${place}`,
    {
      mode: 'cors',
    }
  );
  if (response.status === 400) {
    dealer.textContent = 'Cannot find the city';
    return;
  }
  dealer.textContent = '';
  const weatherData = await response.json();
  const myWeatherData = {
    conditionText: weatherData.current.condition.text,
    city: weatherData.location.name,
    country: weatherData.location.country,
    temperature: weatherData.current.temp_c,
    feelslike: weatherData.current.feelslike_c,
    wind: weatherData.current.wind_kph,
    humidity: weatherData.current.humidity,
    temperatureF: weatherData.current.temp_f,
    feelslikeF: weatherData.current.feelslike_f,
  };

  return myWeatherData;
}
