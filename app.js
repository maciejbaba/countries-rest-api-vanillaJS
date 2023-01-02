import countries from "./fetchApiData.js";

const searchInput = document.getElementById("search");
const regionSelect = document.getElementById("region");
const darkModeBtn = document.getElementById("dark-mode");
const countriesContainer = document.getElementById("countries");

const renderCountries = (countries) => {
  countriesContainer.innerHTML = "";
  countries.forEach((country) => {
    const countryEl = document.createElement("div");
    countryEl.classList.add("country");
    countryEl.innerHTML = `
      <div>
        <img src="${country.flag}" alt="${country.name}" />
      </div>
      <div class="country-info">
        <h3 class="country-name">${country.name}</h3>
        <p><strong>Population:</strong> ${country.population}</p>
        <p class="country-region"><strong>Region:</strong> ${country.region}</p>
        <p><strong>Capital:</strong> ${country.capital}</p>
      </div>
    `;
    console.log(countryEl);
    countriesContainer.appendChild(countryEl);
  });
}

renderCountries(countries);