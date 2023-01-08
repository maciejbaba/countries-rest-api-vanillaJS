import { fetchCountryByName } from "./fetchApiData.js";



export default async function renderCountryDetails(countryName) {
  const country = await fetchCountryByName(countryName)
  
  
}