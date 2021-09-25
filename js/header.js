const menu = document.getElementById("menu");
const header = document.getElementById("header_nav");

menu.addEventListener("click", function () {
  menu.classList.add("header_figure-menu-off");
  header.classList.add("header_nav-on");
  header.classList.remove("header_nav");
});
