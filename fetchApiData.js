const API_URL_ALL_COUNTRIES = 'https://restcountries.com/v3.1/all';

let countries = [];

fetch(API_URL_ALL_COUNTRIES)
.then(res => res.json())
.then(res => {
  res.forEach(country => {
    countries.push(country);
  })
})
.catch(err => console.log(err));

export default countries;