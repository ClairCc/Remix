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
  "#41424e",
  "#C6C8CD",
];
const back = document.getElementsByClassName("back");
const next = document.getElementsByClassName("next");
const hero = document.getElementsByClassName("hero");

const iconBlack =
  "https://raw.githubusercontent.com/ClairCc/Remix/96e8525574a88542522e755fa97bfdb49740a284/Assets/Remix-logo.svg";

const foundDisplay = (object) => {
  let mostrar = window.getComputedStyle(object);
  let heroDisplay = mostrar.getPropertyValue("display");
  return heroDisplay;
};
let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");
let anterior1 = document.getElementById("anterior");
let anterior2 = document.getElementById("anterior2");

const root = document.documentElement;
const navContainer = document.getElementById("header_nav-icons");
const moon = document.getElementById("moon");

const changeColorsToBlack = () => {
  document.getElementById("img1").src = iconBlack;
  document.getElementById("img2").src = iconBlack;
  document.getElementById("img3").src = iconBlack;
  root.style.setProperty("--backgroundColor-ligthMode", blackColors[0]);
  root.style.setProperty("--black-or-White", blackColors[1]);
  root.style.setProperty("--grey", blackColors[7]);
  navContainer.classList.add("nav_container-dm");
  root.style.setProperty("--learnMore", blackColors[3]);
  root.style.setProperty("--testimonials", blackColors[4]);
  root.style.setProperty("--testimonials-description", blackColors[5]);
  root.style.setProperty("--backgroundColor-hero", blackColors[6]);
  root.style.setProperty("--black-or-Whiteb", blackColors[3]);
  root.style.setProperty("--copy", blackColors[7]);
};

const changeColorsToWhite = () => {
  document.getElementById("img1").src =
    "https://raw.githubusercontent.com/ClairCc/Remix/96e8525574a88542522e755fa97bfdb49740a284/Assets/remixLogoLightMode.svg";
  document.getElementById("img2").src =
    "https://raw.githubusercontent.com/ClairCc/Remix/96e8525574a88542522e755fa97bfdb49740a284/Assets/remixLogoLightMode.svg";
  document.getElementById("img3").src =
    "https://raw.githubusercontent.com/ClairCc/Remix/96e8525574a88542522e755fa97bfdb49740a284/Assets/remixLogoLightMode.svg";
  root.style.setProperty("--backgroundColor-ligthMode", ligthColors[0]);
  root.style.setProperty("--black-or-White", ligthColors[1]);
  root.style.setProperty("--grey", ligthColors[2]);
  navContainer.classList.remove("nav_container-dm");
  root.style.setProperty("--testimonials", blackColors[3]);
  root.style.setProperty("--testimonials-description", blackColors[4]);
  root.style.setProperty("--backgroundColor-hero", ligthColors[3]);
  root.style.setProperty("--black-or-Whiteb", ligthColors[1]);
  root.style.setProperty("--copy", ligthColors[2]);
};

ligthMode.addEventListener("click", changeColorsToWhite);
moon.addEventListener("click", changeColorsToBlack);
let contador = 0;
const suma = (i) => {
  const siguiente = () => {
    if (foundDisplay(hero[i]) === "flex" && contador < 2) {
      hero[i].style.display = "none";
    }
    ++contador;
    if (contador < 3) {
      hero[contador].style.display = "flex";
    }
  };
  return siguiente();
};
const resta = (i) => {
  const siguiente = () => {
    if (
      foundDisplay(hero[i]) === foundDisplay(hero[1]) ||
      foundDisplay(hero[i]) === foundDisplay(hero[2])
    ) {
      hero[i].style.display = "none";
      hero[(i -= 1)].style.display = "flex";
      contador -= 1;
    }
  };
  return siguiente();
};

let x = suma;
let y = resta;

function ejecutar() {
  x(contador);
}
function restar() {
  y(contador);
}
next1.addEventListener("click", ejecutar);
next2.addEventListener("click", ejecutar);
anterior1.addEventListener("click", restar);
anterior2.addEventListener("click", restar);
