import './css/styles.css';

import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries.js';
const DEBOUNCE_DELAY = 300;

const searchInput = document.getElementById('search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
// obsługa klikniecia w kraj
countryList.addEventListener('click', event => {
  const clickedElement = event.target;
  const listItem = clickedElement.closest('li');
  if (listItem) {
    const selectedCountry = listItem.id;
    fetchCountries(selectedCountry).then(data => {
      renderList(data);
    });
  }
});
// pobieranie i render krajow
const handleSearch = debounce(() => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    fetchCountries(searchTerm).then(data => {
      renderList(data);
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length >= 2 && data.length <= 10) {
        Notiflix.Notify.success(`${data.length} countries found.`);
      } else if (data.length === 1) {
        Notiflix.Notify.success('One country found.');
      } else {
        Notiflix.Notify.failure('Oops, there is no country with that name.');
      }
    });
  } else {
    countryList.innerHTML = '';
  }
}, DEBOUNCE_DELAY);
//generowanie styli
const generateStyleString = styleKey => {
  const styles = {
    ul: {
      display: 'flex',
      'flex-direction': 'column',
      gap: '10px',
      padding: 0,
    },
    li: {
      'list-style': 'none',
      display: 'inline-flex',
      gap: '10px',
      cursor: 'pointer',
    },
    img: {
      width: '40px',
    },
    p: {
      margin: 0,
    },
    h4: {
      'font-size': '30px',
      'font-weight': 'bold',
      margin: 0,
    },
    span: {
      'font-weight': 'bold',
    },
  };
  const selectedStyles = styles[styleKey];
  return Object.entries(selectedStyles)
    .map(([property, value]) => `${property}:${value}`)
    .join(';');
};
// tworzenie okna z informacją o panstwie
const renderList = data => {
  const markup = data
    .map(
      ({ name: { common }, flags }) => `
        <li id="${common}" style="${generateStyleString('li')}">
          <img src="${
            flags[0]
          }" alt="${common} flag" style="${generateStyleString('img')}">
          <p style="${generateStyleString('p')}">${common}</p>
        </li>
      `
    )
    .join('');

  countryList.innerHTML = markup;
  countryList.style.cssText = generateStyleString('ul');
  countryInfo.innerHTML = '';

  if (data.length === 1) {
    const { name, capital, population, languages, flags } = data[0];
    countryList.innerHTML = '';
    countryInfo.innerHTML = `
        <ul style="${generateStyleString('ul')}">
          <li style="${generateStyleString('li')}">
            <img src="${flags[0]}" alt="${
      name.common
    } flag" style="${generateStyleString('img')}">
            <h4 style="${generateStyleString('h4')}">${name.common}</h4>
          </li>
          <li style="${generateStyleString('li')}">
            <span style="${generateStyleString('span')}">Capital:</span>
            <p style="${generateStyleString('p')}">${capital[0] || '-'}</p>
          </li>
          <li style="${generateStyleString('li')}">
            <span style="${generateStyleString('span')}">Population:</span>
            <p style="${generateStyleString('p')}">${population}</p>
          </li>
          <li style="${generateStyleString('li')}">
            <span style="${generateStyleString('span')}">Languages:</span>
            <p style="${generateStyleString('p')}">${Object.values(
      languages
    ).join(', ')}</p>
</li>
</ul>`;
  }
};
searchInput.addEventListener('input', handleSearch);
