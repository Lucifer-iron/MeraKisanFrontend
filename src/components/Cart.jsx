// Cart.js

import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = ({ cartItems }) => {




  return (
    <div className="cart">
      <div className="cart-header">
        <div className="cart-header-product">Product</div>
        <div className="cart-header-quantity">Quantity</div>
        <div className="cart-header-total">Total</div>
      </div>

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <div className="cart-footer">
        <div className="cart-footer-total">
          <span className="cart-footer-total-label">Total</span>
          <span className="cart-footer-total-value">$0.00</span>
        </div>

        <div className="promo-code">
          <div className="promo-code-label">
            <label htmlFor="promo-code">Apply Promo Code</label>
          </div>
          <div className="promo-code-input">
            <input
              id="promo-code"
              type="text"
              name="promo-code"
              placeholder="Enter Code"
            />
            <button className="promo-code-input-button" type="button">
              Apply
            </button>
          </div>
        </div>

        <div className="cart-footer-buttons">
          <button className="cart-footer-buttons-continue" type="button">
            Continue Shopping
          </button>
          <button className="cart-footer-buttons-clear" type="button">
            Clear Cart
          </button>
        </div>
        <div className="cart-footer-checkout">
          <button className="cart-footer-checkout-button" type="button">
            Checkout
          </button>
        </div>
      </div>



    </div>

  );
};

export default Cart;
