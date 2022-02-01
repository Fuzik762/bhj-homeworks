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
      productsId = Array.from(cart.querySelectorAll(".cart__product"));
      hasId = productsId.find(el => el.dataset.id === element.dataset.id)

      if (hasId){
        cartValue = hasId.querySelector('.cart__product-count');
        cartValue.textContent = Number(cartValue.textContent) + value;
      } else {
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
