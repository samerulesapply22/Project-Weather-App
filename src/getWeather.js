export default async function getWeather() {
  const responce = await fetch(
    'http://api.weatherapi.com/v1/current.json?key=de8a49aa5a1a4a91abb143538230107&q=London&aqi=no'
  );
  const weatherData = await responce.json();
  console.log(weatherData.current.temp_c);
}
