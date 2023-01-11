const API_URL_ALL_COUNTRIES = 'https://restcountries.com/v3.1/all';
const API_URL_COUNTRY_BY_NAME = 'https://restcountries.com/v3.1/name/';

let modifiedCountries = [];

await fetch(API_URL_ALL_COUNTRIES)
.then(async res => await res.json())
.then(countries => {
  countries.forEach(country => {

    const modifiedCountry = {
      name: country.name.common,
      capital: country.capital ? country.capital[0] : 'No capital',
      population: country.population.toLocaleString(),
      region: country.region,
      flagLink: country.flags.png,
    }

    modifiedCountries.push(modifiedCountry);
  });
})
.catch(err => console.log(err));

export const fetchCountryByName = async (countryName) => {
  const countryAsArr = await fetch(`${API_URL_COUNTRY_BY_NAME}${countryName}`)
  .then(async res => await res.json())
  .catch(err => console.log(err));

  const country = countryAsArr[0];

  const modifiedCountry = {
    name: country.name.common,
    nativeName: Object.values(country.name.nativeName).map(name => name.common),
    capital: country.capital ? country.capital[0] : 'No capital',
    population: country.population.toLocaleString(),
    region: country.region,
    subregion: country.subregion,
    topLevelDomain: country.tld[0],
    currencies: Object.values(country.currencies).map(currency => currency.name),
    languages: Object.values(country.languages),
    borders: country.borders || 'No borders',
    flagLink: country.flags.svg,
  }
  console.log(modifiedCountry)
  return modifiedCountry;
}

export default modifiedCountries ;