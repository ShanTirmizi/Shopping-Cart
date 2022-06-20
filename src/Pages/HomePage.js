import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import Nav from "../components/Nav/Nav";
import "../Pages/HomePage.css";
import { PropTypes } from "prop-types";

const HomePage = () => {
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    setProductData(data);
    setIsLoading(false);
  };

  const addToCart = (product) => {
    let newCartData = [...cartData];
    let itemExist = newCartData.find((item) => product.id === item.id);
    if (itemExist) {
      itemExist.quantity += 1;
    } else {
      itemExist = {
        ...product,
        quantity: 1,
      };
      newCartData = [...newCartData, itemExist];
    }
    setCartData(newCartData);
  };
  const removeFromCart = (product) => {
    let newCartData = [...cartData];
    let itemExist = newCartData.find((item) => product.id === item.id);
    if (itemExist) {
      itemExist.quantity -= 1;
      if (itemExist.quantity === 0) {
        newCartData = newCartData.filter((item) => item.id !== product.id);
      }
    }
    setCartData(newCartData);
  };
  const clearCart = () => {
    setCartData([]);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="homepage__container">
          <Nav
            cartData={cartData}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
          <Products addToCart={addToCart} productData={productData} />
        </div>
      )}
    </>
  );
};

HomePage.PropTypes = {
  productData: PropTypes.array,
  cartData: PropTypes.array,
  isLoading: PropTypes.bool,
  addToCart: PropTypes.func,
  removeFromCart: PropTypes.func,
  clearCart: PropTypes.func,
};

export default HomePage;
