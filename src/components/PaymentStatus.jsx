// src/components/shared/PaymentStatus.jsx
import React from "react";
import { CheckCircle, XCircle, AlertCircle, Clock, FileText, Home } from "lucide-react";

const PaymentStatus = ({ 
  status, 
  message, 
  details, 
  onReset, 
  onRetry,
  serviceType = "service",
  themeColor = "#7b2cbf"
}) => {
  const statusConfig = {
    success: {
      icon: <CheckCircle className="w-16 h-16 text-green-400" />,
      title: "Payment Successful! 🎉",
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)",
    },
    failed: {
      icon: <XCircle className="w-16 h-16 text-red-400" />,
      title: "Payment Failed",
      color: "#ef4444",
      bgColor: "rgba(239, 68, 68, 0.1)",
    },
    pending: {
      icon: <Clock className="w-16 h-16 text-yellow-400" />,
      title: "Payment Pending",
      color: "#f59e0b",
      bgColor: "rgba(245, 158, 11, 0.1)",
    },
    error: {
      icon: <AlertCircle className="w-16 h-16 text-orange-400" />,
      title: "Payment Error",
      color: "#f59e0b",
      bgColor: "rgba(245, 158, 11, 0.1)",
    },
  };

  const config = statusConfig[status] || statusConfig.error;

  return (
    <div className="payment-status-container cosmic-card">
      <div className="success-icon-wrapper">
        {config.icon}
      </div>

      <h2 className="success-title" style={{ color: config.color }}>
        {config.title}
      </h2>

      <p className="success-message">
        {message || `Thank you for booking the ${serviceType} service. We'll contact you shortly.`}
      </p>

      {details && (
        <div className="payment-details">
          <h4>Transaction Details:</h4>
          <div className="details-grid">
            {Object.entries(details).map(([key, value]) => (
              <div key={key} className="detail-row">
                <span className="detail-label">{key}:</span>
                <span className="detail-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {status === "success" && (
        <div className="success-badge">
          <FileText className="w-5 h-5" />
          Your booking confirmation has been sent to your email
        </div>
      )}

      <div className="action-buttons">
        {onReset && (
          <button
            onClick={onReset}
            className="primary-button"
            style={{ background: `linear-gradient(135deg, ${themeColor}, #4c1d95)` }}
          >
            Book Another {serviceType}
          </button>
        )}

        {onRetry && status !== "success" && (
          <button
            onClick={onRetry}
            className="secondary-button"
          >
            Try Again
          </button>
        )}

        <button
          onClick={() => window.location.href = '/'}
          className="outline-button"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentStatus;