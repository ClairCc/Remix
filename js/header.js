const menu = document.getElementById("menu");
const header = document.getElementById("header_nav");
const closeMenu = document.getElementById("nav_close-container");

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
