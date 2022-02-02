tooltips = document.querySelectorAll(".has-tooltip");

tooltips.forEach((element) => {
  tooltipText = element.getAttribute("title");
  element.insertAdjacentHTML("afterEnd",`<div class="tooltip">${tooltipText}</div>`);
  element.addEventListener("click", (e) => {
    e.preventDefault();
    activeTooltip = document.querySelector(".tooltip_active");
    const { top, height } = e.target.getBoundingClientRect();
    targetTooltip = e.target.nextElementSibling;
    targetTooltip.classList.add("tooltip_active");
    if (activeTooltip) {
      activeTooltip.classList.remove("tooltip_active");
      targetTooltip.style.left = e.target.offsetLeft + "px";
      targetTooltip.style.top = top + height + "px";
    }   
  });
});
