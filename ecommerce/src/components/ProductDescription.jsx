import React, { useState } from "react";
import iconMinus from "../assets/icon-minus.svg";
import iconPlus from "../assets/icon-plus.svg";
import iconCart from "../assets/icon-cart.svg";

const ProductDescription = (props) => {
  const [count, setCount] = useState(0);

  const handlePlus = () => setCount((prevCount) => prevCount + 1);

  const handleSubstract = () => {
    setCount((ronaldinho) => (ronaldinho > 0 ? ronaldinho - 1 : 0));
  };

  const handleInputChange = (e) => {
    setCount(e.target.value);
  };

  const handleAddToCart = (e) => {
    props.setCartCount(count);
    setCount(0);
  };

  return (
    <div className='details-wrapper'>
      <p className='details-company'>Sneaker Company</p>
      <h1 className='details-product-name'>Fall Limited Edition Sneakers</h1>
      <p className='details-description'>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className='price'>
        <h2 className='price-new'>
          $125.00 <span className='discount'>50%</span>
        </h2>
        <p className='price-old'>$250.00</p>
      </div>

      <div className='buy'>
        <div className='quantity-btns'>
          <button className='minus-btn' onClick={handleSubstract}>
            <img src={iconMinus} alt='minus' />
          </button>
          <input
            type='number'
            name='number'
            value={count}
            id='number'
            onChange={handleInputChange}
            min='0'
          />
          <button className='plus-btn' onClick={handlePlus}>
            <img src={iconPlus} alt='plus' />
          </button>
        </div>
        <button className='add-to-cart' onClick={handleAddToCart}>
          <img src={iconCart} alt='add to cart' />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;
