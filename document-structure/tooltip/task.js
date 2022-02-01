tooltips = document.querySelectorAll(".has-tooltip");

tooltips.forEach((element) => {
  tooltipText = element.getAttribute("title");
  element.insertAdjacentHTML("afterEnd",`<div class="tooltip">${tooltipText}</div>`);
  element.addEventListener("click", (e) => {
    e.preventDefault();
    activeTooltip = document.querySelector(".tooltip_active");
    const { top, height } = e.target.getBoundingClientRect();
    if (activeTooltip) {
      activeTooltip.classList.remove("tooltip_active");
    } else {
      e.target.nextElementSibling.style.left = e.target.offsetLeft + "px";
    e.target.nextElementSibling.style.top = top + height + "px";
    e.target.nextElementSibling.classList.toggle("tooltip_active");
    }
    
  });
});
