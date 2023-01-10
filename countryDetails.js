import { fetchCountryByName } from "./fetchApiData.js";

export default async function renderCountryDetails(countryName) {
  const country = await fetchCountryByName(countryName);

  const navEl = document.querySelector("nav");

  navEl.innerHTML = `
    <div class="country-details-container">
      <div class="country-flag">
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
            <p><strong>Languages:</strong> ${country.languages}</p>
          </div>
        </div>
        <div class="country-borders">
          <p><strong>Border Countries:</strong> ${country.borders}</p>
        </div>
      </div>
    </div>`;
}
