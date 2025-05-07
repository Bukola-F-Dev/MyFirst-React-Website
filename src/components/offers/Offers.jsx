import React from 'react'
import './Offers.css'
import Offer_Img from '../assests/Hero-img.png'

const Offers = () => {
    return (
        <div class='offer'>
            <div class="offer-left">
            <h1>Elegant</h1>
            <h1>Designs For You</h1>
            <p>COLLECTIONS DESIGNED TO INSPIRE CONFIDENCE</p>
            <button>Explore Now</button>
            </div>

            <div class="offer-right">
                <img src={Offer_Img} alt=""></img>
            </div>
        </div>
    )
}

export default Offers
