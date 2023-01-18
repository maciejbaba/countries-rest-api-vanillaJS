import countries from './fetchApiData.js';
import renderCountries from './renderCountries.js';
import renderCountryDetails from './renderCountryDetails.js';
import applyDarkModeChanges from './darkMode.js';

if (window.location.search.includes('?country=')) {
  const countryName = decodeURI(window.location.search.split('=')[1]); // takes countryName from URI and gets rid of encoded spaces - '%20'
  await renderCountryDetails(countryName);
  applyDarkModeChanges();
} else {
  renderCountries(countries);
  applyDarkModeChanges();
}