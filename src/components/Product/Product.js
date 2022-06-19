import React from "react";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  return (
    <>
      <div className="product__container">
        <h2 className="product__title">{product.title}</h2>
        <img className="product__image" src={product.images[0]} />
        <p className="product__content">{product.category.name}</p>
        <p className="product__content">£{product.price}</p>
        <button className="product__button" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Product;
