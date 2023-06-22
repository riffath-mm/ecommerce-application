import React from "react";
class CartModule {
  constructor() {
    this.cart = [];
  }
  addToCart = (product) => {
    this.cart.push(product);
    localStorage.setItem("cart", JSON.stringify(this.cart));
  };
  getCart = () => {
    if (this.cart?.length > 0) {
      return this.cart;
    } else {
      let cartList = localStorage.getItem("cart");
      this.cart = JSON.parse(cartList);
      return this.cart;
    }
    return [];
  };
}

export default new CartModule();
