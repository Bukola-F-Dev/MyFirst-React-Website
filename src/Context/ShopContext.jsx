import React, { createContext, useState, useEffect } from "react";
 import all_product from '../components/assests/all_product';
 

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let Carts = {};
    for (let index = 0; index < all_product.length+1; index++) {
        Carts[index] = 0;  
    }
    return Carts;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : getDefaultCart();
    });
  
    useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);
   
 const addToCart = (itemId)=>{
setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))

 }
    
 const removeFromCart = (itemId)=>{
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
     }
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

const getTotalCartItems = () =>{
    let totalItem = 0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            totalItem += cartItems[item];
        }
    }
    return totalItem;
}

     const contextValue = {getTotalCartItems, getTotalCartAmount,all_product, cartItems, addToCart, removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}
 
export default ShopContextProvider;