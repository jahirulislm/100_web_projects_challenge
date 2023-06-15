const humburger = document.querySelector(".humburger");

humburger.addEventListener("click", function () {
  const menu = document.querySelector(".nav_menu");
  menu.classList.toggle("open");
});
