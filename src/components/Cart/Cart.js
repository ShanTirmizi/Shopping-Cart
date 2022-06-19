import React, { useState } from "react";
import "./Cart.css";
import { currencyFormartter } from "../../utils/utils";
import Checkout from "../Checkout/Checkout";

const Cart = ({
  addToCart,
  cartData,
  removeFromCart,
  clearCart,
  setIsOpen,
}) => {
  const [isCheckout, setIsCheckout] = useState(false);

  const productPriceTotal = cartData.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);
  const productVat = productPriceTotal * 0.2;
  const productTotal = productPriceTotal + productVat;

  return (
    <>
      <div className="cart__container">
        <div className="cart__content">
          {isCheckout ? (
            <Checkout
              productPriceTotal={productPriceTotal}
              productVat={productVat}
              productTotal={productTotal}
              setIsCheckout={setIsCheckout}
            />
          ) : (
            <>
              <div className="cart__content-header">
                <h1>Shopping Cart</h1>

                <button onClick={() => setIsOpen(false)}>close</button>
              </div>
              <div className="cart__products">
                {cartData.length > 0 ? (
                  <>
                    {" "}
                    <div className="cart__list">
                      {cartData.map((product) => {
                        return (
                          <div className="cart__list-item" key={product._id}>
                            <h2 className="cart__list-header">
                              {product.title}
                            </h2>
                            <div className="cart__list-quantity">
                              <button
                                className="cart__list-quantity-button dark-button minus"
                                onClick={() => removeFromCart(product)}
                              >
                                -
                              </button>
                              <p>{product.quantity}</p>
                              <button
                                className="cart__list-quantity-button dark-button plus"
                                onClick={() => addToCart(product)}
                              >
                                +
                              </button>
                              <p>
                                Price:{" "}
                                {currencyFormartter.format(
                                  product.quantity * product.price
                                )}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="cart__total">
                      <p>
                        Total: {currencyFormartter.format(productPriceTotal)}
                      </p>
                      <p>Tax: {currencyFormartter.format(productVat)}</p>
                      <p>
                        Total inc VAT: {currencyFormartter.format(productTotal)}
                      </p>
                      <button
                        className="dark-button"
                        onClick={() => clearCart()}
                      >
                        Clear Cart
                      </button>
                      <button
                        className="dark-button"
                        onClick={() => setIsCheckout(true)}
                      >
                        Checkout
                      </button>
                    </div>
                  </>
                ) : (
                  <h3>You have no Items in your cart</h3>
                )}
              </div>
            </>
          )}
        </div>{" "}
      </div>
    </>
  );
};

export default Cart;
