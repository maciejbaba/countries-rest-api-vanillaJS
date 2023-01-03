import countries from "./fetchApiData.js";
import renderCountries from "./renderCountries.js";

const inputEl = document.getElementById("search");
const regionEl = document.getElementById("region");

inputEl.addEventListener("input", (e) => {
  const input = e.target.value;
  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(input.toLowerCase());
  });
  renderCountries(filteredCountries);
});

regionEl.addEventListener("change", (e) => {
  const region = e.target.value;

  if (region === "All") {
    renderCountries(countries);
    return;
  }
  else {
    const filteredCountries = countries.filter((country) => {
      return country.region.toLowerCase().includes(region.toLowerCase());
    });
    renderCountries(filteredCountries);
  }
});
