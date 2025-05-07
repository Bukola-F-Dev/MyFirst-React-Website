import React, { useContext } from 'react'
import './Productdisplay.css'
import { ShopContext } from '../../Context/ShopContext';
 

const Productdisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
     
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
<div className="productdisplay-img-list">
    <img src={product.image} alt="" className="productdisplay-img-list"></img>
    <img src={product.image} alt="" className="productdisplay-img-list"></img>
    <img src={product.image} alt="" className="productdisplay-img-list"></img>
    <img src={product.image} alt="" className="productdisplay-img-list"></img>
</div>
<div className='productdisplay-img'>
<img src={product.image} alt="" className='productdisplay-main-img'></img>
</div>
            </div>
            <div className="productdisplay-right">
    <h1>{product.name}</h1>
    <p>${product.price}</p>
            </div>
            <div className="productdisplay-right-size1">
                <h1>Select Size</h1>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}} className='button-button'>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags:</span>Modern, Latest</p>
        </div>
    )
}

export default Productdisplay;
