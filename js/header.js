const menu = document.getElementById("menu");
const header = document.getElementById("header_nav");
const closeMenu = document.getElementById("nav_close-container");
const ligthMode = document.getElementById("ligthMode");
let ligthColors = ["#fff", "#000", "#595959"];
let blackColors = ["#1E2025", "#fff", "#A3A3A3"];
const root = document.documentElement;
const navContainer = document.getElementById("header_nav-icons");

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
  document.getElementById("img1").src = "../Assets/Remix-logo.svg";
  menu.classList.add("header_figure-menu-dm");
  closeMenu.classList.add("nav_close-dm");
  root.style.setProperty("--backgroundColor-ligthMode", blackColors[0]);
  root.style.setProperty("--black-or-White", blackColors[1]);
  root.style.setProperty("--grey", blackColors[2]);
  navContainer.classList.add("nav_container-dm");
};

const changeColorsToWhite = () => {
  document.getElementById("img1").src = "../Assets/remixLogoLightMode.svg";
  root.style.setProperty("--backgroundColor-ligthMode", ligthColors[0]);
  menu.classList.remove("header_figure-menu-dm", ".nav_close-dm");
  root.style.setProperty("--black-or-White", ligthColors[1]);
  root.style.setProperty("--grey", ligthColors[2]);
  navContainer.classList.remove("nav_container-dm");
};
