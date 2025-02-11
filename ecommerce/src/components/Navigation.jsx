import React, { useState } from "react";
import iconCart from "../assets/icon-cart.svg";
import logo from "../assets/logo.svg";
import avatar from "../assets/image-avatar.png";
import { Card } from "./Card";

const Navigation = (props) => {
  const [toggleCart, setToggleCart] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const showCart = (e) => {
    e.preventDefault();
    setToggleCart((prevState) => !prevState);
  };

  const handleDeleteItems = () => props.setCartCount(0);

  const handleCheckout = () => {
    setCheckout((prevState) => !prevState);
    props.setCartCount(0);
  };

  return (
    <nav className={"nav"}>
      <div className='primary-nav'>
        <div className={"toggle"}>
          <a href='/'>
            <img className='logo' src={logo} alt='logo' />
          </a>
        </div>

        <ul className={"nav-links"}>
          <li className='nav-link'>
            <a href='/'>Collections</a>
          </li>
          <li className='nav-link'>
            <a href='/'>Men</a>
          </li>
          <li className='nav-link'>
            <a href='/'>Women</a>
          </li>
          <li className='nav-link'>
            <a href='/'>About</a>
          </li>
          <li className='nav-link'>
            <a href='/'>Contact</a>
          </li>
        </ul>
      </div>

      <ul className={"secondary-links"}>
        <li className='cart' onClick={showCart}>
          <p className={props.cartCount ? "cart-count" : "hide"}>
            {props.cartCount}
          </p>
          <a href='/'>
            <img src={iconCart} alt='cart' />
          </a>
        </li>
        <li className='account'>
          <a href='/'>
            <img className='avatar' src={avatar} alt='avatar' />
          </a>
        </li>
      </ul>
      <div className={toggleCart ? "cart-container" : "cart-container hide"}>
        <h2>Cart</h2>
        <div
          className={
            props.cartCount ? "cart-items basket-layout" : "cart-items"
          }
        >
          {props.cartCount ? (
            <Card
              cartCount={props.cartCount}
              handleCheckout={handleCheckout}
              handleDeleteItems={handleDeleteItems}
            />
          ) : (
            <p>{checkout ? "Checkout successful!" : "Your cart is empty"}</p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
