import countries from "./fetchApiData.js";
import renderCountries from "./renderCountries.js";

const inputEl = document.getElementById("search");
const regionEl = document.getElementById("region");

let region = "All";

inputEl.addEventListener("input", (e) => {
  const input = e.target.value;
  const filteredCountries = countries.filter((country) => {
    if(region === "All") {
      return country.name.toLowerCase().includes(input.toLowerCase());
    }
    else {
      return country.name.toLowerCase().includes(input.toLowerCase()) && country.region.toLowerCase().includes(region.toLowerCase());
    }
  });
  renderCountries(filteredCountries);
});

regionEl.addEventListener("change", (e) => {
  region = e.target.value;

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
