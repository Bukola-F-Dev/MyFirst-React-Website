import { useState } from "react";
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

export default function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not yet loaded.
    }

    setIsProcessing(true);

    const returnUrl = `${window.location.origin}/#/completion?payment=completed`;
    
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Optional: redirect URL after successful payment
        return_url:  returnUrl,
      },
    });

    if (error) {
      // Show error to your customer (e.g., insufficient funds)
      setMessage(error.message);
    } else {
      setMessage("Payment succeeded!");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing..." : "Pay Now"}
        </span>
      </button>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}