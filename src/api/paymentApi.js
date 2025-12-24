import axios from "axios";

const API_URL = "https://astrobackend-5sr6.onrender.com/api/payments";

// ================= CREATE ORDER =================
export async function createOrder({ amount, userId, planId }) {
  try {
    const res = await axios.post(`${API_URL}/create-order`, {
      amount,
      userId,
      planId,
    });
    return res.data;
  } catch (err) {
    console.error("❌ Create Order Error:", err.response?.data || err.message);
    return null;
  }
}

// ================= VERIFY PAYMENT =================
export async function verifyPayment(paymentData) {
  try {
    const res = await axios.post(`${API_URL}/verify`, paymentData);
    return res.data;
  } catch (err) {
    console.error("❌ Verify Error:", err.response?.data || err.message);
    return null;
  }
}
