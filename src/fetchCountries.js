export async function fetchCountries(name) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const countries = await response.json();
  return countries;
}
