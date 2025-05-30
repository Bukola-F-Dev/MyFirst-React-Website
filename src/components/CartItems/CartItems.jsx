import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const {getTotalCartAmount, all_product, cartItems, removeFromCart, addToCartInCartPage } = useContext(ShopContext);

  const hasItems = Object.values(cartItems).some((qty) => qty > 0);

const navigate = useNavigate();

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        <p>Add</p>
      </div>
      <hr />

      {hasItems ? (
        all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className='cartitems-format cartitems-format-main'>
                  <img src={e.image} alt='' className='carticon-product-icon' />
                  <p>{e.name}</p>
                  <p>${e.price}</p>
                  <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                  <p>${e.price * cartItems[e.id]}</p>
                  <button className='carticon-product-icon-remove' onClick={() => removeFromCart(e.id)}>-</button>
                  <button className='carticon-product-icon-remove' onClick={() => addToCartInCartPage(e.id)}>+</button>
                
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })
        
      ) : (
        <p style={{ textAlign: 'center', padding: '20px', fontSize: '18px', fontWeight: 'bold' }}>Your cart is empty.</p>
      )}
      <div className='cartitems-down'>
          <div className='cartitems-total'>
              <h2>Cart Total</h2>
              <div>
                  <div className='cartitems-total-item'>
                      <p>SubTotal</p>
      <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr></hr>
                  <div className='cartitems-total-item'>
                      <p>Shipping Fee</p>
                      <p>Free</p>
                  </div>
                  <hr></hr>
                  <div className='cartitems-total-item'>
                      <h3>Total</h3>
      <h3>${getTotalCartAmount()}</h3>
                  </div>
              </div>
              <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
      </div>
    </div>
  );
};

export default CartItems;
