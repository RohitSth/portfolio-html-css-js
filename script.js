function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const darkModeToggle = document.getElementById("dark-mode-icon");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
