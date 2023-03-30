import { fetchCountries } from './fetchCountries.js';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const searchBox = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const search = async searchTerm => {
  if (!searchTerm) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }

  try {
    const countries = await fetchCountries(searchTerm);

    if (countries.length > 10) {
      Notiflix.Notify.failure(
        'Too many matches found. Please enter a more specific name.'
      );
      return;
    }

    const countryItems = countries
      .map(country => `<li>${country.name.common}</li>`)
      .join('');
    countryList.innerHTML = countryItems;
  } catch (error) {
    console.error(error);
  }
};

searchBox.addEventListener(
  'input',
  debounce(() => {
    const searchTerm = searchBox.value.trim();
    search(searchTerm);
  }, DEBOUNCE_DELAY)
);
