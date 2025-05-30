import React from 'react'
import './Hero.css'
import Heroimage from '../assests/Hero-img.png'

const hero = () => {
    return (
        <div className="hero-section">
 
<div className='hero-left'>
            <p>FASHION THAT FEELS LIKE YOU</p>
            <h1>fresh drops</h1>    
            <h1>bold vibes</h1>
            <h1>outfits for you</h1>
            <button className='hero-btn'>SHOP NOW</button>
            </div>
           <div class='hero-right'>
               <img src={Heroimage} class='hero-img' alt='Logo'></img>
           </div>    
        </div>
    )
}

export default hero
