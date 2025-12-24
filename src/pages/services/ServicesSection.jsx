import React from "react";
import "../../styles/Energy.css";

const ServicesSection = ({ services, loadingServices, onSelectService }) => {
  return (
    <section className="services-section" style={{ padding: "2rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 20 }}>
          <h2 style={{ margin: 0 }}>SERVICES</h2>
          <p style={{ color: "#c4b5fd" }}>Choose the reading that resonates with you</p>
        </div>

        {loadingServices ? (
          <div style={{ color: "#ddd" }}>Loading services...</div>
        ) : (
          <div className="services-grid">
            {services.map((s) => (
              <article key={s._id || s.key} className="service-card">
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "rgba(255,0,255,0.15)",
                      color: "#ff00ff",
                      fontWeight: 700,
                      fontSize: 12,
                      marginBottom: 10,
                    }}
                  >
                    {s.tag || s.label || "Service"}
                  </div>

                  <h3>{s.title || s.name}</h3>
                  <p>{s.short || s.description}</p>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div className="service-price">₹{s.price ?? s.amount ?? "—"}</div>
                  <button className="book-btn" onClick={() => onSelectService(s)}>
                    BOOK NOW
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;