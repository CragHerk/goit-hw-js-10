const fetchCountries = async name => {
  const url = `https://restcountries.com/v3/name/${name}?fields=name,capital,population,flags,languages`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return Promise.reject(new Error(response.status));
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return Promise.reject(
      new Error('An error occurred while fetching the data.')
    );
  }
};

export { fetchCountries };
