import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/LoginSignup';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Completion from './pages/Completion';
import Payment from './pages/Payment';

// This component must be inside HashRouter to use useNavigate
function AppRoutes() {
  useEffect(() => {
    const query = window.location.search;
    const isStripeRedirect = query.includes('payment_intent');
  
    if (isStripeRedirect) {
      window.location.href = `${window.location.origin}/MyFirst-React-Website/#/completion${query}`;
    }
  }, []);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/womens' element={<ShopCategory category="Women" />} />
        <Route path='/mens' element={<ShopCategory category="Men" />} />
        <Route path='/kids' element={<ShopCategory category="Kid" />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/:productId' element={<Product />} />
        <Route path='/carts' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/loginSignup' element={<Login />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/completion' element={<Completion />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;