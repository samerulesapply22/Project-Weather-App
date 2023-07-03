import getWeather from './getWeather';

getWeather('Lviv');
const placeholder = document.getElementById('place');
const search = document.getElementById('search');

placeholder.addEventListener('mousedown', () => {
  placeholder.value = '';
});

search.addEventListener('click', () => {
  const place = placeholder.value;
  getWeather(place);
});
