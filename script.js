const darkModeToggle = document.getElementById("dark-mode-icon");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
