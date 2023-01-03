const countriesContainer = document.getElementById("countries");

const renderCountries = (countries) => {
  countriesContainer.innerHTML = "";
  countries.forEach((country) => {
    const countryEl = document.createElement("div");

    // this if statement is needed for country container dark mode styles to apply after re-render during region change
    if (document.body.classList.contains("dark-mode")) {
      countryEl.classList.add("dark-mode");
    }

    countryEl.classList.add("country-container");
    countryEl.innerHTML = `
      <a href="?country=${country.name}">
        <div>
          <img src="${country.flagLink}" alt="${country.name}" loading="lazy" />
        </div>
        <div class="country-info">
          <h3 class="country-name">${country.name}</h3>
          <p><strong>Population:</strong> ${country.population}</p>
          <p class="country-region"><strong>Region:</strong> ${country.region}</p>
          <p><strong>Capital:</strong> ${country.capital}</p>
        </div>
      </a>
    `;
    countriesContainer.appendChild(countryEl);
  });
};

export default renderCountries;
