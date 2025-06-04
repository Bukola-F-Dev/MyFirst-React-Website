import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  useStripe,
  useElements,
  PaymentElement
} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51RPgDeCIYq07lQ5BsglcwSEcoHR5Q11V5qrzk0Dd4enbebpbDM3BNB9tkWo4WUK8S4FrErphFnPNdzbgjVB65FpP00E0pz1Pf7'); // Replace with your Stripe publishable key

const CheckoutForm = ({ clientSecret }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);
    

    const returnUrl ="https://Bukola-F-Dev.github.io/MyFirst-React-Website/#/completion?payment=completed";
    
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Optional: redirect URL after successful payment
        return_url:  returnUrl,
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Payment succeeded!");
    }

    setIsProcessing(false);
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={isProcessing || !stripe || !elements}>
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {message && <div>{message}</div>}
    </form>
  );
};
      

const Payment = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    
    fetch("https://stripe-backend-f060.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ name: "T-shirt", price: 20, quantity: 1 }],
      }),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }
      return res.json();
    })
      .then((data) => {
        console.log("🔐 Client Secret from backend:", data.clientSecret);
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError("Failed to get client secret");
        }
      })
      .catch((err) => {
        console.error("❌ Error fetching client secret:", err);
        setError(err.message);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!clientSecret) return <div>Loading payment form...</div>;

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm clientSecret={clientSecret} />
    </Elements>
  );
};

export default Payment;