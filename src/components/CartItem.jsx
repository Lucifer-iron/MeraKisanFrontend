// CartItem.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./CartItem.css";

const CartItem = ({ item }) => {
  
  const [quantity, setQuantity] = useState(1);

 

  const incrQty = () => {
    setQuantity(quantity + 1);
  };

  const decrQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="cartItem">
      <div className="cartItemInner">
        <div className="cartItemImage">
          <a title={item.name} href="/shop/larq-bottle-purevis?sku=BSBO071">
            <img src={item.image} alt={item.name} decoding="async" loading="lazy" />
          </a>
        </div>
        <div className="cartItemInfo">
          <div className="cartItemDescription">
            <span className="cartItemName">
              <a title={item.name} href="/shop/larq-bottle-purevis?sku=BSBO071A">
                {item.name}
              </a>
            </span>
            <div className="cartItemOptions">
              <span>{item.desc}</span>
              <span>{item.desc}</span>
              <span>{item.desc}</span>
            </div>
            <button title="Delete Item" className="cartItemDelete" type="button" >
              <MdOutlineDeleteOutline />
            </button>
          </div>
          <div className="cartItemQuantityPriceWrap">
            <div className="cartItemQuantityWrap">
              <div className="css-1si7uj3 e12z4cbb0">
                <button
                  className="cartItemQuantityButton isMinus"
                  type="button"
                  aria-label="Remove from Cart"
                  disabled=""
                  onClick={decrQty}
                >
                  <FaMinus />
                </button>
                <div className="cartItemQuantityInput">
                  <input
                    id="cartItemQuantity"
                    className="cartItemQuantityInput_input"
                    type="text"
                    name="Quantity"
                    aria-label="Quantity"
                    readOnly=""
                    defaultValue={1}
                    value={quantity}
                  />
                </div>
                <button className="cartItemQuantityButton isPlus" type="button" aria-label="Add to Cart" onClick={incrQty}>
                  <FaPlus />
                </button>
              </div>
            </div>
            <div className="cartItemPrice">
              <span>INR {item.price * quantity} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;