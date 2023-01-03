const darkModeBtn = document.getElementById('dark-mode');
const selectRegionEl = document.getElementById('region');
const moonIcon = document.getElementById('moon');

darkModeBtn.addEventListener('click', () => darkMode());

const darkMode = () => {
  document.body.classList.toggle('dark-mode');
  darkModeBtn.classList.toggle('dark-mode');
  selectRegionEl.classList.toggle('dark-mode');
  moonIcon.classList.toggle('svg-white');

  const countriesContainers = document.querySelectorAll('.country-container');
  countriesContainers.forEach((countryContainer) => {
    countryContainer.classList.toggle('dark-mode');
  });
}