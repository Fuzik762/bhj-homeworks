arrowRight = document.querySelector(".slider__arrow_next");
arrowLeft = document.querySelector(".slider__arrow_prev");
sliderItem = document.querySelectorAll(".slider__item");
sliderDots = document.querySelectorAll(".slider__dot");

lengthSlide = sliderItem.length - 1;
lengthDots = sliderDots.length;
countSlide = 0;
sliderDots[countSlide].classList.toggle("slider__dot_active");

swap = (countSlide) => {
  sliderItem[countSlide].classList.toggle("slider__item_active");
  sliderDots[countSlide].classList.toggle("slider__dot_active");
};

arrowRight.addEventListener("click", () => {
  if (sliderItem[countSlide].className.includes("slider__item_active")) {
    swap(countSlide);
    if (countSlide < lengthSlide) {
      countSlide++;
    } else {
      countSlide = 0;
    }
    swap(countSlide);
  }
});

arrowLeft.addEventListener("click", () => {
  if (sliderItem[countSlide].className.includes("slider__item_active")) {
    swap(countSlide);
    if (countSlide > 0) {
      countSlide--;
    } else {
      countSlide = lengthSlide;
    }
    swap(countSlide);
  }
});


for (let i = 0; i < lengthDots; i++) {
  sliderDots[i].addEventListener("click", () => {
    swap(countSlide);
    swap(i);
    countSlide = i;
  });
}
