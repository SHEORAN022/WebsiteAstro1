// utils/razorpayHandler.js
import axios from "axios";

const PAYMENTS_API = "https://astrobackend-5sr6.onrender.com/api/payments";

// Load Razorpay script
export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.error("Failed to load Razorpay script");
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

// Create order
export const createRazorpayOrder = async (amount, userId) => {
  try {
    const orderRes = await axios.post(`${PAYMENTS_API}/create-order`, {
      amount,
      userId,
    });

    if (orderRes.data?.success && orderRes.data.order) {
      return {
        success: true,
        order: orderRes.data.order,
        key: orderRes.data.key || process.env.REACT_APP_RAZORPAY_KEY_ID,
      };
    }
    return { success: false, error: "Order creation failed" };
  } catch (error) {
    console.error("Create order error:", error);
    return { success: false, error: error.message };
  }
};

// Verify payment
export const verifyPayment = async (paymentData) => {
  try {
    const verifyRes = await axios.post(`${PAYMENTS_API}/verify`, paymentData);
    return verifyRes.data;
  } catch (error) {
    console.error("Verify payment error:", error);
    return { success: false, error: error.message };
  }
};

// Main payment handler
export const initiateRazorpayPayment = async ({
  amount,
  userId,
  name,
  email,
  phone,
  description = "Service Payment",
  onSuccess,
  onFailure,
  onError,
  themeColor = "#7b2cbf",
}) => {
  try {
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      onError?.("Payment system loading failed. Please refresh.");
      return false;
    }

    const orderResult = await createRazorpayOrder(amount, userId);
    if (!orderResult.success) {
      onError?.(orderResult.error || "Failed to create payment order");
      return false;
    }

    const { order, key } = orderResult;

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "THE FIFTH CUSP",
      description,
      order_id: order.id || order.order_id,
      
      handler: async (razorResponse) => {
        try {
          const verificationData = {
            razorpay_payment_id: razorResponse.razorpay_payment_id,
            razorpay_order_id: razorResponse.razorpay_order_id,
            razorpay_signature: razorResponse.razorpay_signature,
            userId,
            amount,
          };

          const verifyResult = await verifyPayment(verificationData);
          
          if (verifyResult.success) {
            onSuccess?.(verifyResult, razorResponse);
          } else {
            onFailure?.(verifyResult, razorResponse);
          }
        } catch (error) {
          console.error("Payment handler error:", error);
          onError?.("Payment verification failed");
        }
      },

      prefill: {
        name: name || "",
        email: email || "",
        contact: phone || "",
      },

      theme: {
        color: themeColor,
      },

      modal: {
        ondismiss: () => {
          onFailure?.({ success: false, error: "Payment cancelled" }, null);
        },
      },

      notes: {
        userId,
        service: description,
      },
    };

    const rzp = new window.Razorpay(options);
    
    rzp.on("payment.failed", (response) => {
      onFailure?.({ success: false, error: "Payment failed" }, response);
    });

    rzp.open();
    return true;

  } catch (error) {
    console.error("Payment initiation error:", error);
    onError?.(error.message || "Payment could not be processed");
    return false;
  }
};

// Simulate payment for development
export const simulatePayment = (delay = 1500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        simulated: true,
        paymentId: `sim_${Date.now()}`,
        orderId: `order_sim_${Date.now()}`,
      });
    }, delay);
  });
};