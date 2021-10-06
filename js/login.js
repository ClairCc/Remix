const menu = document.getElementById("menu");
const header = document.getElementById("header_nav");
const closeMenu = document.getElementById("nav_close-container");
const ligthMode = document.getElementById("ligthMode");
let ligthColors = ["#fff", "#000", "#595959", "#F5F6F8", "#70757C"];
let blackColors = [
  "#1E2025",
  "#fff",
  "#A3A3A3",
  "#f6ca18",
  "#434450",
  "#DFE0E2",
];

const root = document.documentElement;
const navContainer = document.getElementById("header_nav-icons");
const moon = document.getElementById("moon");

const changeColorsToBlack = () => {
  root.style.setProperty("--backgroundColor-ligthMode", blackColors[0]);
  root.style.setProperty("--black-or-White", blackColors[1]);
  root.style.setProperty("--grey", blackColors[2]);
  navContainer.classList.add("nav_container-dm");
  root.style.setProperty("--learnMore", blackColors[3]);
  root.style.setProperty("--testimonials", blackColors[4]);
  root.style.setProperty("--testimonials-description", blackColors[5]);
};

const changeColorsToWhite = () => {
  root.style.setProperty("--backgroundColor-ligthMode", ligthColors[0]);

  root.style.setProperty("--black-or-White", ligthColors[1]);
  root.style.setProperty("--grey", ligthColors[2]);
  navContainer.classList.remove("nav_container-dm");
  root.style.setProperty("--testimonials", blackColors[3]);
  root.style.setProperty("--testimonials-description", blackColors[4]);
};

ligthMode.addEventListener("click", changeColorsToWhite);
moon.addEventListener("click", changeColorsToBlack);
