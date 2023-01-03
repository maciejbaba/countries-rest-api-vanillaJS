import countries from "./fetchApiData.js";

const countriesContainer = document.getElementById("countries");

const renderCountries = (countries) => {
  countriesContainer.innerHTML = "";
  countries.forEach((country) => {
    const countryEl = document.createElement("div");
    countryEl.classList.add("country-container");
    countryEl.innerHTML = `
      <div>
        <img src="${country.flagLink}" alt="${country.name}" loading="lazy" />
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