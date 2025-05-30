import React, { createContext, useState, useEffect } from "react";
import all_product from '../components/assests/all_product';

export const ShopContext = createContext(null);

// Updated to return an empty cart
const getDefaultCart = () => {
  return {}; // completely empty cart
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : getDefaultCart();
  });

  const [message, setMessage] = useState('');

  // Keep localStorage in sync
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setMessage("Product is already in the cart");
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
      setMessage("Product added to cart!");
    }

    setTimeout(() => setMessage(''), 5000);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const addToCartInCartPage = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
    localStorage.removeItem("cartItems");
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = all_product.find((p) => p.id === Number(itemId));
        if (product) {
          totalAmount += cartItems[itemId] * product.price;
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    addToCartInCartPage,
    clearCart,
    message,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;