import React, { useState } from "react";
import Cart from "../Cart/Cart";
import "./Nav.css";

const Nav = ({ cartData, addToCart, removeFromCart, clearCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="nav__container">
        <h1>Shopping Cart</h1>{" "}
        <button className="nav__button" onClick={() => setIsOpen(true)}>
          Your Cart ({cartData.length})
        </button>
        {isOpen ? (
          <Cart
            cartData={cartData}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            setIsOpen={setIsOpen}
          />
        ) : null}
      </header>
    </>
  );
};

export default Nav;
