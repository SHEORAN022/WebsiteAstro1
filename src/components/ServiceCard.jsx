// src/components/shared/ServiceCard.jsx
import React from "react";
import { Zap, Star, Clock, Sparkles } from "lucide-react";

const ServiceCard = ({ 
  service, 
  onSelect, 
  themeColor = "#7b2cbf",
  popular = false 
}) => {
  return (
    <div 
      className={`service-card cosmic-card ${popular ? 'popular-card' : ''}`}
      onClick={() => onSelect(service)}
    >
      {popular && (
        <div className="popular-badge">
          <Sparkles className="w-3 h-3" />
          Most Popular
        </div>
      )}

      <div className="service-header">
        <div 
          className="service-tag"
          style={{ background: `linear-gradient(135deg, ${themeColor}20, ${themeColor}40)` }}
        >
          {service.tag || service.category || "SERVICE"}
        </div>
        
        <div className="service-price">
          ₹{service.price?.toLocaleString('en-IN') || service.amount}
        </div>
      </div>

      <h3 className="service-title">{service.title || service.name}</h3>
      
      <p className="service-description">
        {service.description || service.short}
      </p>

      <div className="service-features">
        <div className="feature">
          <Clock className="w-4 h-4" />
          <span>24-48hr delivery</span>
        </div>
        <div className="feature">
          <Star className="w-4 h-4" />
          <span>PDF Report</span>
        </div>
      </div>

      <button 
        className="service-select-button"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(service);
        }}
        style={{
          background: `linear-gradient(135deg, ${themeColor}, #7b2cbf)`,
        }}
      >
        <Zap className="w-5 h-5" />
        SELECT SERVICE
      </button>
    </div>
  );
};

export default ServiceCard;