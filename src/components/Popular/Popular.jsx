import React from 'react'
import './Popular.css'
import data_product from '../assests/data'
import Item from '../Item/Item'

const Popular = () => {
    return (
        <div className="popular">
            <h1>OUTFITS DESIGNS CRAFTED WITH INTENTION</h1>
            <hr></hr>
            <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} image={item.image} name={item.name} price={item.price}/>
                })}
            </div>
        </div>
    )
}

export default Popular
