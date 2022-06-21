import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

function Payment() {
  async function handleToken(token) {
    console.log(token);
    await axios.post("http://localhost:8080/api/payment/charge", "", {
      headers: {
        token: token.id,
        amount: 500
      }
    }).then(() => {
      alert("Payment Success");
    }).catch((error) => {
      alert(error);
    });
  }

  return (
    <div className="App">
      <Stripe
        stripeKey="pk_test_51KxvOSJykHzJCqSqCllpOo4SJ1P3Gsybh1HWapmjT7ud1qmfcRAMTngTe9bvVqU4cfe325fHxpac9FL7vFr2E6tr00eZBtqmXU"
        token={handleToken}
      />
    </div>
  );
}

export default Payment;