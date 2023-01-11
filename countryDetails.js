import { fetchCountryByName } from "./fetchApiData.js";
import countries from "./fetchApiData.js";

export default async function renderCountryDetails(countryName) {
  const country = await fetchCountryByName(countryName);

  const navEl = document.querySelector("nav");

  navEl.innerHTML = `
    <div class="country-details-container">
      <div class="country-flag-back-button">
        <a href="/" class="back-a dark-mode">Back</a>
        <img src="${country.flagLink}" alt="${country.name} flag">
      </div>
      <div class="country-details-info">
        <div class="country-name-details">
          <h1>${country.name}</h1>
        </div>
        <div class="country-details">
          <div class="country-details-left">
            <p><strong>Native Name:</strong> ${country.nativeName}</p>
            <p><strong>Population:</strong> ${country.population}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Sub Region:</strong> ${country.subregion}</p>
            <p><strong>Capital:</strong> ${country.capital}</p>
          </div>
          <div class="country-details-right">
            <p><strong>Top Level Domain:</strong> ${country.topLevelDomain}</p>
            <p><strong>Currencies:</strong> ${country.currencies}</p>
            <div class="languages-div"><strong>Languages:</strong> ${country.languages.map(lang => `<p>${lang}</p>`).join('')}</div>
          </div>
        </div>
        <div class="country-borders">
          <div><p><strong>Border Countries:</strong></p></div>
          <div class="country-borders-codes">
            ${ typeof country.borders === "object"
            ?
            country.borders.map(borderCode => 
              `<a href="/?country=${getCountryNameFromBorderCode(borderCode)}" class="border-a dark-mode">
                ${borderCode}
              </a>`).join('')
            :
            country.borders }
          </div>
        </div>
      </div>
    </div>`;
}

function getCountryNameFromBorderCode(borderCode) {;
  const country = countries.find(country => country.borderCode === borderCode);
  return country.name;
}