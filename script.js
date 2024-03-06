const toggleMenu = () => {
  const menu = document.querySelector(".menu-links"); //select the menu
  const icon = document.querySelector(".hamburger-icon"); //select the icon

  menu.classList.toggle("open"); //toggle the class open
  icon.classList.toggle("open"); //toggle the class open
};
