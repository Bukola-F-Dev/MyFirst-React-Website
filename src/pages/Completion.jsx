import React, { useEffect, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/Completion.css';
import { Link } from 'react-router-dom';

const Completion = () => {
  const { clearCart } = useContext(ShopContext);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="completion">
      <h1>Payment Successful 🎉</h1>
      <p>Thank you for your payment!</p>
      <p className='completion-link'>  <Link to='/'>Go back home </Link> </p>
    </div>
  );
};

export default Completion;