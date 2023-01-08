const API_URL_ALL_COUNTRIES = 'https://restcountries.com/v3.1/all';
const API_URL_COUNTRY_BY_NAME = 'https://restcountries.com/v3.1/name/';

let modifiedCountries = [];

await fetch(API_URL_ALL_COUNTRIES)
.then(async res => await res.json())
.then(countries => {
  countries.forEach(country => {

    const modifiedCountry = {
      name: country.name.common,
      capital: country.capital,
      population: country.population.toLocaleString(),
      region: country.region,
      flagLink: country.flags.png,
      nativeName: country.name.nativeName,
      subregion: country.subregion,
      topLevelDomain: country.tld,
      currencies: country.currencies,
      languages: country.languages,
      borders: country.borders || 'No borders',
    }

    modifiedCountries.push(modifiedCountry);
  });
})
.catch(err => console.log(err));

export const fetchCountryByName = async (countryName) => {
  const countryAsArr = await fetch(`${API_URL_COUNTRY_BY_NAME}${countryName}`)
  .then(async res => await res.json())
  .catch(err => console.log(err));

  const country = countryAsArr[0]
  return country;
}

export default modifiedCountries ;