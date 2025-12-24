// src/components/shared/PaymentButton.jsx
import React, { useState } from "react";
import { Zap, Loader2 } from "lucide-react";
import { initiateRazorpayPayment } from "../utils/razorpayHandler";

const PaymentButton = ({
  amount,
  userId,
  name = "",
  email = "",
  phone = "",
  description = "Service Payment",
  onSuccess,
  onFailure,
  onError,
  themeColor = "#7b2cbf",
  className = "",
  disabled = false,
  loading = false,
  showSimulatedPayment = process.env.NODE_ENV === "development",
  children,
  buttonText = "Pay Securely Now",
  size = "md",
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (disabled || loading) return;

    setIsProcessing(true);

    try {
      const paymentConfig = {
        amount,
        userId,
        name,
        email,
        phone,
        description,
        themeColor,
        onSuccess: (verifyResult, razorResponse) => {
          setIsProcessing(false);
          onSuccess?.(verifyResult, razorResponse);
        },
        onFailure: (verifyResult, razorResponse) => {
          setIsProcessing(false);
          onFailure?.(verifyResult, razorResponse);
        },
        onError: (errorMsg) => {
          setIsProcessing(false);
          onError?.(errorMsg);
        },
      };

      const initiated = await initiateRazorpayPayment(paymentConfig);
      
      if (!initiated && showSimulatedPayment) {
        const useSimulated = window.confirm(
          "Razorpay not available. Use simulated payment? (Development only)"
        );
        
        if (useSimulated) {
          const simulatedResult = {
            success: true,
            simulated: true,
            paymentId: `sim_${Date.now()}`,
          };
          onSuccess?.(simulatedResult, null);
        }
        setIsProcessing(false);
      }
    } catch (error) {
      setIsProcessing(false);
      console.error("Payment button error:", error);
      onError?.(error.message);
    }
  };

  const isDisabled = disabled || loading || isProcessing;

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isDisabled}
      className={`payment-button ${className} ${sizeClasses[size]} ${isDisabled ? "opacity-60 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"}`}
      style={{
        background: `linear-gradient(135deg, ${themeColor}, #7b2cbf)`,
        transition: "all 0.3s ease",
      }}
    >
      {isProcessing ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin mr-2" />
          Processing...
        </>
      ) : loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin mr-2" />
          Loading...
        </>
      ) : (
        <>
          {children || (
            <>
              <Zap className="w-5 h-5 mr-2" />
              {buttonText}
            </>
          )}
        </>
      )}
    </button>
  );
};

export default PaymentButton;