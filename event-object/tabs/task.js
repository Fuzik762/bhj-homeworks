tabs = document.querySelectorAll(".tabs");

tabs.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target.className === 'tab') {
      element.querySelector(".tab.tab_active").classList.remove("tab_active");
      element.querySelector(".tab__content.tab__content_active").classList.remove("tab__content_active");
      tabItems = Array.from(element.querySelectorAll(".tab"));
      contents = element.querySelectorAll(".tab__content");
      idx = tabItems.indexOf(e.target);
      tabItems[idx].classList.add("tab_active");
      contents[idx].classList.add("tab__content_active");
    }
  });
});
