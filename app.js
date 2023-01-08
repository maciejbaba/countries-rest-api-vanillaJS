import countries from './fetchApiData.js';
import renderCountries from './renderCountries.js';
import renderCountryDetails from './countryDetails.js';

if (window.location.search.includes('?country=')) {
  const countryName = decodeURI(window.location.search.split('=')[1]); // takes countryName from URI and gets rid of encoded spaces - '%20'
  renderCountryDetails(countryName);
} else {
  renderCountries(countries);
}