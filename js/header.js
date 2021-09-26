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
const heroimg = document.getElementById("img2");
const root = document.documentElement;
const navContainer = document.getElementById("header_nav-icons");
const moon = document.getElementById("moon");

menu.addEventListener("click", function () {
  menu.classList.add("header_figure-menu-off");
  header.classList.add("header_nav-on");
  header.classList.remove("header_nav");
});
closeMenu.addEventListener("click", function () {
  header.classList.add("header_nav");
  header.classList.remove("header_nav-on");
  menu.classList.remove("header_figure-menu-off");
});

const changeColorsToBlack = () => {
  document.getElementById("img1").src =
    "https://raw.githubusercontent.com/ClairCc/Remix/96e8525574a88542522e755fa97bfdb49740a284/Assets/Remix-logo.svg";
  heroimg.src = "https://raw.githubusercontent.com/ClairCc/Remix/f7d75916774a902d332bbe9435f13fbeea2c0748/Assets/heroDM.svg;
  menu.classList.add("header_figure-menu-dm");
  closeMenu.classList.add("nav_close-dm");
  root.style.setProperty("--backgroundColor-ligthMode", blackColors[0]);
  root.style.setProperty("--black-or-White", blackColors[1]);
  root.style.setProperty("--grey", blackColors[2]);
  navContainer.classList.add("nav_container-dm");
  root.style.setProperty("--learnMore", blackColors[3]);
  root.style.setProperty("--testimonials", blackColors[4]);
  root.style.setProperty("--testimonials-description", blackColors[5]);
};

const changeColorsToWhite = () => {
  document.getElementById("img1").src =
    "https://raw.githubusercontent.com/ClairCc/Remix/96e8525574a88542522e755fa97bfdb49740a284/Assets/remixLogoLightMode.svg";
  heroimg.src = "https://raw.githubusercontent.com/ClairCc/Remix/f7d75916774a902d332bbe9435f13fbeea2c0748/Assets/heroImage.svg";
  root.style.setProperty("--backgroundColor-ligthMode", ligthColors[0]);
  menu.classList.remove("header_figure-menu-dm");
  closeMenu.classList.remove("nav_close-dm");
  root.style.setProperty("--black-or-White", ligthColors[1]);
  root.style.setProperty("--grey", ligthColors[2]);
  navContainer.classList.remove("nav_container-dm");
  root.style.setProperty("--testimonials", blackColors[3]);
  root.style.setProperty("--testimonials-description", blackColors[4]);
};

ligthMode.addEventListener("click", changeColorsToWhite);
moon.addEventListener("click", changeColorsToBlack);
