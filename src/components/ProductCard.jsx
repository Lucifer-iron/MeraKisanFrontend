import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
    <div className="cardImage">
      <img src={product.image} alt={product.name} />
    </div>
    <div className="card-info">
      <div className='productInfo'>
      <p className="text-title">{product.name} </p>
      <p className="text-category">{product.category}</p>
      </div>
      <div className='sellerInfo'>
      <p className="text-seller">{product.seller}</p>
       
      </div>
    </div>

    <div className="card-footer">
    <span className="text-title">{product.price}</span>
    <div className="card-button">
      <FaShoppingCart/>
    </div>
  </div></div>
  );
};

export default ProductCard;