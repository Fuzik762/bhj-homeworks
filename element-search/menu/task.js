menuLink = document.querySelectorAll(".menu__link");
menuLength = menuLink.length;

for (let i = 0; i < menuLength; i++) {
  menuLink[i].addEventListener("click", (e) => {
    hasSub = menuLink[i].nextElementSibling;
    if (hasSub !== null) {
      e.preventDefault();
      if (hasSub.className.includes("menu_sub")) {
        hasSub.classList.toggle("menu_active");
      }
    }
  });
}
