import React, { useState } from "react";
import { createOrder, verifyPayment } from "../api/paymentApi";

export default function PaymentPage() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Get logged-in user
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id || "672af93b9cf24a87a0c5f8de"; // fallback for testing

  const handlePayment = async () => {
    if (!name || !email || !amount) {
      return alert("Please fill all fields");
    }

    const orderRes = await createOrder({
      amount: Number(amount),
      userId,
    });

    if (!orderRes?.success) {
      return alert("Order creation failed");
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: orderRes.order.amount,
      currency: "INR",
      name: "Astrology Website",
      description: "Wallet / Subscription Payment",
      order_id: orderRes.order.id,

      handler: async function (response) {
        alert("Payment Successful!");

        await verifyPayment({
          ...response,
          amount,
          userId,
        });
      },

      prefill: { name, email },
      theme: { color: "#3399cc" },
    };

    const rzp = new window.Razorpay(options);

    rzp.on("payment.failed", function (err) {
      alert("Payment Failed!" + err.error.description);
      console.log(err);
    });

    rzp.open();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>💳 Make a Payment</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input"
      />

      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="input"
      />

      <button onClick={handlePayment} className="pay-btn">
        Pay Now
      </button>

      <style>{`
        .input {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border-radius: 6px;
          border: 1px solid #ddd;
        }
        .pay-btn {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          background: #3399cc;
          color: white;
          font-size: 18px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
