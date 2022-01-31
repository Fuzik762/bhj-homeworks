document.addEventListener("DOMContentLoaded", (e) => {
  book = document.querySelector("#book");
  bookControls = document.querySelectorAll(".book__control");

  bookControls.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("font-size")) {
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        e.target.classList.add("font-size_active");
        fontSize = e.target.dataset.size;
        book.className = "book";
        switch (fontSize) {
          case "small":
            book.classList.add("book_fs-small");
            break;
          case "big":
            book.classList.add("book_fs-big");
            break;
        }
      }
    });
  });
});
