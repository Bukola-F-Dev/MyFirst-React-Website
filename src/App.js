import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
 

function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path= '/' element={<Shop/>}/>
        <Route path= '/womens' element={<ShopCategory category="Women"/>}/>
        <Route path= '/mens' element={<ShopCategory category="Men"/>}/>
        <Route path= '/kids' element={<ShopCategory category="Kid"/>}/> 
        <Route path= '/product/:productId' element={<Product/>}/> 
        <Route path= ':productId' element={<Product/>}/> 
        <Route path= '/Carts' element={<Cart/>}/> 
        <Route path= '/loginSignup' element={<Login/>}/> 
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  ); 
}

export default App;
