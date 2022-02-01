interests = document.querySelectorAll(".interests");

interests.forEach((element) => {
  element.addEventListener("change", (e) => {
    if (e.target.closest(".interests_main")) {
      subInterest = e.target.closest("li").querySelectorAll(".interest__check");
      subInterest.forEach((el) => {
        if (e.target.checked) {
          el.checked = true;
        } else {
          el.checked = false;
        }
      });
    }
  });
});
