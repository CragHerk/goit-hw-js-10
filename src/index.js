import './css/styles.css';

const DEBOUNCE_DELAY = 300;

import { fetchCountries } from './fetchCountries.js';

const searchBox = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchBox.addEventListener('input', async () => {
  const searchTerm = searchBox.value;
  if (!searchTerm) {
    countryList.innerHTML = '';
    return;
  }
  try {
    const countries = await fetchCountries(searchTerm);
    const countryItems = countries
      .map(country => `<li>${country.name.common}</li>`)
      .join('');
    countryList.innerHTML = countryItems;
  } catch (error) {
    console.error(error);
  }
});
