import React from "react";
import thumbnail from "../assets/image-product-1-thumbnail.jpg";
import deleteIccon from "../assets/icon-delete.svg";

export const Card = ({ cartCount, handleCheckout, handleDeleteItems }) => {
  return (
    <div className='checkout-items'>
      <div className='item'>
        <img src={thumbnail} alt='checkout product' />
        <div className='item-desc'>
          <p>Fall Limited Edition Sneakers</p>
          <p>
            $125 x {cartCount}
            <span className='total'> - Total: ${125 * cartCount}</span>
          </p>
        </div>
        <img
          className='delete-btn'
          src={deleteIccon}
          alt='delete'
          onClick={handleDeleteItems}
        />
      </div>
      <button className='checkout-btn' onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};
