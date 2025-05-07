import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
 

const Item = (props) => {
     
    return (
        <div className="item">
            <img src={props.image} alt=""></img>
            <p>{props.name}</p>
    <p className='item-price'>${props.price}</p>
    <Link to={`/product/${props.id}`}><button>Check</button></Link> 
        </div>
    )
}

export default Item;
