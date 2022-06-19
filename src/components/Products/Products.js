import React from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ productData, addToCart }) => {
  return (
    <>
      <div className="products__container">
        <h1 className="products__header">Products</h1>
        <div className="products__content">
          {productData.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
