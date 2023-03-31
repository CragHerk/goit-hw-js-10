const fetchCountries = name => {
  const url = `https://restcountries.com/v3/name/${name}?fields=name,capital,population,flags,languages`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(new Error(response.status));
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
      return Promise.reject(
        new Error('An error occurred while fetching the data.')
      );
    });
};

export { fetchCountries };
