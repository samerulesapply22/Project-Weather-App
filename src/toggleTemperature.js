const temperatureDiv = document.getElementById('temperature');
const feelslikeDiv = document.getElementById('feelslike');

export default function toggleTemperature(
  tempC,
  tempF,
  feelslikeC,
  feelslikeF
) {
  temperatureDiv.addEventListener('click', () => {
    temperatureDiv.classList.toggle('ff');
    if (temperatureDiv.classList.contains('ff')) {
      temperatureDiv.textContent = tempF;
    } else {
      temperatureDiv.textContent = tempC;
    }
  });

  feelslikeDiv.addEventListener('click', () => {
    feelslikeDiv.classList.toggle('ff');
    if (feelslikeDiv.classList.contains('ff')) {
      feelslikeDiv.textContent = 'feels like: ' + feelslikeF;
    } else {
      feelslikeDiv.textContent = 'feels like: ' + feelslikeC;
    }
  });
}
