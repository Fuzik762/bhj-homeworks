products = document.querySelectorAll(".product");
cart = document.querySelector(".cart__products");

products.forEach((element) => {
  controls = element.querySelector(".product__controls");
  controls.addEventListener("click", (e) => {
    quantity = e.currentTarget.querySelector(".product__quantity-value");
    value = Number(quantity.textContent);

    if (e.target.classList.contains("product__quantity-control_dec") && value !== 1) {
      value--;
      quantity.textContent = value;
    }
    if (e.target.classList.contains("product__quantity-control_inc")) {
      value++;
      quantity.textContent = value;
    }
    if (e.target.classList.contains("product__add")) {
      srcImage = element.querySelector(".product__image").getAttribute("src");
      productsId = cart.querySelectorAll(".cart__product");
      hasId = false;
      if (productsId.length !== 0) {
        productsId.forEach((el) => {
          if (el.dataset.id === element.dataset.id) {
            el.querySelector(".cart__product-count").textContent = value;
            hasId = true;
          }
        });
      }
      if (!hasId){
        setCartId = element.dataset.id;
        cart.innerHTML += `
      <div class="cart__product" data-id="${setCartId}">
        <img class="cart__product-image" src="${srcImage}">
        <div class="cart__product-count">${quantity.textContent}</div>
      </div>
      `;
      }
    }
  });
});
