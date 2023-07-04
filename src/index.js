import displayWeather from './displayWeather';

displayWeather('Lviv');

const placeholder = document.getElementById('place');
const search = document.getElementById('search');

placeholder.addEventListener('mousedown', () => {
  placeholder.value = '';
});

search.addEventListener('click', () => {
  const place = placeholder.value;
  displayWeather(place);
});
