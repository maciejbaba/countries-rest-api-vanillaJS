import { fetchCountryByName } from "./fetchApiData.js";

export default async function renderCountryDetails(countryName) {
  const country = await fetchCountryByName(countryName)
  
  document.body.innerHTML = ''; // clear the body, delete search bar, header etc.

  const countryDetailsContainer = document.createElement('div');
  countryDetailsContainer.classList.add('country-details-container');

  const countryDetailsImg = document.createElement('img');
  countryDetailsImg.src = country.flagLink;
  countryDetailsContainer.appendChild(countryDetailsImg); 

  const countryDetailsInfo = document.createElement('div');
  countryDetailsInfo.classList.add('country-details-info');

  document.body.appendChild(countryDetailsContainer);
  
}