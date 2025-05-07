import React from 'react'
import './NewCollections.css'
import new_collection from '../assests/newcollections'
import Item from '../Item/Item'

const NewCollections = () => {
    return (
        <div className="newCollection">
            <h1>CURATED COLLECTIONS DESIGNED TO SPARK JOY</h1>
            <hr></hr>
            <div className="new-products-collection">
            {new_collection.map((item,i)=>{
                    return <Item key={i} id={item.id} image={item.image} name={item.name} price={item.price}/>
                })}
            </div>
        </div>
    )
}

export default NewCollections
