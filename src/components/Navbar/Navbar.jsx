import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../assests/logo.avif'
import cart from '../assests/Cart-icon.avif'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const{getTotalCartItems}= useContext(ShopContext);
    return (
        <nav>
           <div class="company-logo">
           <img src={logo} alt="Logo" class="logo"></img>
           <p>VibeCulture</p>
               </div>
           <ul>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/womens'>Women</Link></li>
               <li><Link to='/mens'>Men</Link></li>
               <li><Link to='/kids'>Kids</Link></li>
           </ul>
          <div class="cart-btn">
              <Link to='/loginSignup'><button class="btn">Login</button></Link>
           <Link to='/Carts'><img src={cart} alt="cart" class="cart"></img>
           </Link>
    <div class="count">{getTotalCartItems()}</div>
           </div> 
        </nav>
    )
}

export default Navbar
