dropValue = document.querySelectorAll(".dropdown__value");
dropItem = document.querySelectorAll(".dropdown__item");

changeValue = (currentValue) => {
  itemTarget = (currentTarget) => {
    currentValue.textContent = currentTarget.textContent;
    currentValue.click();
  }
}


dropValue.forEach((value) => {
  value.addEventListener("click", () => {
    value.nextElementSibling.classList.toggle("dropdown__list_active");
    changeValue(value);
  });
});

dropItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    itemTarget(e.currentTarget);
  });
});
