import React from "react";
import { currencyFormartter } from "../../utils/utils";
import "./Checkout.css";

const Checkout = ({
  productPriceTotal,
  productVat,
  productTotal,
  setIsCheckout,
}) => {
  return (
    <>
      <div className="checkout__container">
        <div className="checkout__content">
          <div className="checkout__content-header">
            <h1>Checkout</h1>
          </div>
          <div className="checkout__content-body">
            <div className="checkout__content-body-left">
              <div className="checkout__content-body-left-header">
                <h2>Cart</h2>
              </div>
              <div className="checkout__content-body-left-body">
                <div className="checkout__content-body-left-body-item">
                  <p>Items: {currencyFormartter.format(productPriceTotal)} </p>
                  <p>VAT: {currencyFormartter.format(productVat)}</p>
                </div>
                <div className="checkout__content-body-left-body-total">
                  <p>Order Total: {currencyFormartter.format(productTotal)}</p>
                </div>
              </div>
            </div>
            <div className="checkout__content-body-right">
              <div className="checkout__content-body-right-header">
                <h2>Payment</h2>
              </div>
              <div className="checkout__content-body-right-body">
                <div className="checkout__content-body-right-body-item">
                  <p>Card Number</p>
                  <input type="text" />
                </div>
                <div className="checkout__content-body-right-body-item">
                  <p>Expiry Date</p>
                  <input type="text" />
                </div>
                <div className="checkout__content-body-right-body-item">
                  <p>Owner Name</p>
                  <input type="text" />
                </div>
                <div className="checkout__content-body-right-body-item buttons">
                  <button className="dark-button">Place Order</button>
                  <button
                    className="dark-button"
                    onClick={() => setIsCheckout(false)}
                  >
                    Back To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
