import React, { useEffect } from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import Newsletter from '../components/Newsletter/Newsletter'


const shop = () => {

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const paymentIntent = params.get('payment_intent');
        const redirectStatus = params.get('redirect_status');
    
        if (paymentIntent && redirectStatus === 'succeeded') {
          // Redirect manually to hash-based route
          window.location.href = `/#/completion?payment_intent=${paymentIntent}&redirect_status=${redirectStatus}`;
        }
      }, []);

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
