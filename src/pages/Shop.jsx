import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import Newsletter from '../components/Newsletter/Newsletter'


const shop = () => {
    return (
        <div>
           <Hero/>
           <Popular/>
           <Offers/>
           <NewCollections/>
           <Newsletter/>
        </div>
    )
}

export default shop
