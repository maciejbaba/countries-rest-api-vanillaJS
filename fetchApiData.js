const API_URL_ALL_COUNTRIES = 'https://restcountries.com/v3.1/all';

let modifiedCountries = [];

fetch(API_URL_ALL_COUNTRIES)
.then(res => res.json())
.then(countries => {
  countries.forEach(country => {

    const modifiedCountry = {
      name: country.name.common,
      capital: country.capital,
      population: country.population,
      region: country.region,
      flagLink: country.flags.png,
      nativeName: country.name.nativeName,
      subregion: country.subregion,
      topLevelDomain: country.tld,
      currencies: country.currencies,
      languages: country.languages,
      borders: country.borders || "No borders",
    }

    modifiedCountries.push(modifiedCountry);
  });
})
.catch(err => console.log(err));

export default modifiedCountries ;