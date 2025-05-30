import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../components/Item/Item';
import dropdown_icon from '../components/assests/dropdown-icon.png'

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext); 
    return (
        <div className="shop-category">
            <div className="shopcategory-indexsort">
                <p>
                    <span>Showing 1-10</span> out of 30 products
                </p>
                <div className='shopcategory-sort'>
                    Sort by  <img src={dropdown_icon} alt=""></img>
                </div>
            </div>
            <div className='shopcategory-product'>
            {all_product
                    .filter((item) => props.category === item.category)
                    .map((item, i) => (
                        <Item
                            key={i}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            category={item.category}
                            price={item.price}
                            />
                    ))
                }
            </div>
        </div>
    )
}

export default ShopCategory;
