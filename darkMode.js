const darkModeBtn = document.getElementById("dark-mode");
const selectRegionEl = document.getElementById("region");
const moonIcon = document.getElementById("moon");

let isDarkModeEnabled = localStorage.getItem("darkMode") ;

darkModeBtn.addEventListener("click", () => darkMode());

const darkMode = () => {
  localStorage.setItem(
    "darkMode",
    isDarkModeEnabled === "enabled" ? "disabled" : "enabled"
  );
  isDarkModeEnabled = localStorage.getItem("darkMode");
  applyDarkModeChanges();
};

export default function applyDarkModeChanges() {
  const backBtn = document.querySelector(".back-a");
  console.log(backBtn);
  const borderBtns = document.querySelectorAll(".border-a");
  const countriesContainers = document.querySelectorAll(".country-container");

  if (isDarkModeEnabled === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeBtn.classList.add("dark-mode");
    if (selectRegionEl) selectRegionEl.classList.add("dark-mode");
    moonIcon.classList.add("svg-white");
    if (backBtn) backBtn.classList.add("dark-mode");

    if (borderBtns)
      borderBtns.forEach((borderBtn) => {
        borderBtn.classList.add("dark-mode");
      });

    countriesContainers.forEach((countryContainer) => {
      countryContainer.classList.add("dark-mode");
    });
  } else {
    document.body.classList.remove("dark-mode");
    darkModeBtn.classList.remove("dark-mode");
    selectRegionEl.classList.remove("dark-mode");
    moonIcon.classList.remove("svg-white");

    if (backBtn) backBtn.classList.remove("dark-mode");

    if (borderBtns)
      borderBtns.forEach((borderBtn) => {
        borderBtn.classList.remove("dark-mode");
      });

    countriesContainers.forEach((countryContainer) => {
      countryContainer.classList.remove("dark-mode");
    });
  }
}