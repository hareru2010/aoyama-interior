const hamburgerMenu = document.querySelector(".hamburger-menu");
console.log(hamburgerMenu)
const navi = document.getElementById("navi");

const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");
const mask = document.querySelector("#mask")

hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("active");
  mask.classList.toggle("active");
    navi.classList.toggle('active');
  });

  hamburgerMenuSections.forEach((hamburgerMenuSection) => {
    hamburgerMenuSection.addEventListener("click", function () {
    hamburgerMenu.classList.remove("active");
    navi.classList.remove("active");
  });
  });




