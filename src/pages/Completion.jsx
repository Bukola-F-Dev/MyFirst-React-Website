import React, { useEffect, useContext, useLocation } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/Completion.css';
import { Link } from 'react-router-dom';

const Completion = () => {

  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const paymentIntent = params.get('payment_intent');
  const status = params.get('redirect_status');

  const { clearCart } = useContext(ShopContext);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="completion">
      <h1>Payment Successful 🎉</h1>
      <p>Thank you for your payment!</p>

      <p>Payment Intent ID: {paymentIntent}</p>
      <p>Status: {status}</p>
      <p className='completion-link'>  <Link to='/'>Go back home </Link> </p>
    </div>
  );
};

export default Completion;