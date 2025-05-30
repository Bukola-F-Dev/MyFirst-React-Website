import React, { useContext } from 'react'
import '../CSS/PlaceOrder.css'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom';
 
 

const PlaceOrder = () => {
    const {getTotalCartAmount}= useContext(ShopContext);
    
 
    return (
        <form className='place-order'>
         <div className='place-order-left'>
             <p className='title'>Delivery Information</p>
             <div className='multiple-fields'>
                 <input type='text' name='first-name' placeholder='First Name' required></input>
                 <input type='text' name='last-name' placeholder='Last Name' required></input>
             </div>
             <input type='text' name='email' placeholder='Email Address' required></input>
                 <input type='text' name='street' placeholder='Street' required></input>
                 <div className='multiple-fields'>
                 <input type='text' name='city' placeholder='City' required></input>
                 <input type='text' name='state' placeholder='State' required></input>
             </div>
             <input type='text' placeholder='Phone' required></input>
             </div>

             <div className='place-order-right'>
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
              <button className='place-order-right-button'><Link to="/payment">PROCEED TO PAYMENT</Link></button>
          </div>
             </div>   
        </form>
    )
}

export default PlaceOrder;
