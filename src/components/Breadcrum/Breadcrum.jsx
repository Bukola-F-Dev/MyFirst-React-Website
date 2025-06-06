import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assests/dropdown-icon.png'

const Breadcrum = (props) => {
    const {product} = props;

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt=""></img> SHOP <img src={arrow_icon} alt=""></img> {product.category} <img src={arrow_icon} alt=""></img> {product.name} 
            
        </div>
    )
}
 
export default Breadcrum;
