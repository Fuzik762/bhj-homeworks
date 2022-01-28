window.addEventListener("scroll", (e) => {
  reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    viewportHeigh = window.innerHeight;
    topEl = element.getBoundingClientRect().top;
    heightEl = element.getBoundingClientRect().height;
    if(topEl < viewportHeigh && topEl > 0 - heightEl) {
      element.classList.add('reveal_active');
    } else { 
      element.classList.remove('reveal_active');
    } 
  });
});
