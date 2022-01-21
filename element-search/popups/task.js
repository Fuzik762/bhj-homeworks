popupMain = document.querySelector("#modal_main");
popupSuccess = document.querySelector("#modal_success");
buttonSuccess = document.querySelector(".show-success");
buttonClosePopup = document.querySelectorAll(".modal__close");
popupMain.classList.add("modal_active");
let closeLength = buttonClosePopup.length;

buttonSuccess.addEventListener("click", () => {
  popupMain.classList.remove("modal_active");
  popupSuccess.classList.add("modal_active");
});

for (let i = 0; i < closeLength; i++) {
  buttonClosePopup[i].addEventListener("click", () => {
    if(buttonClosePopup[i].className.includes('show-success') ==! true) {
      popupSuccess.classList.remove("modal_active");
      popupMain.classList.remove("modal_active");
    }
  });
}
