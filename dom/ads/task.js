document.addEventListener("DOMContentLoaded", (e) => {
  cards = document.querySelectorAll(".card");

  rotator = function(cases, idx) {
    cases[idx].classList.remove('rotator__case_active');
    idx = cases[idx].nextElementSibling ? idx + 1 : 0;
    cases[idx].classList.add('rotator__case_active');
    setTimeout(rotator, 1000, cases, idx);
  } 

  cards.forEach((element) => {
      cases = element.querySelectorAll(".rotator__case");
      casesArr = Array.from(cases);
      rotator(cases, 0);
    });
});
