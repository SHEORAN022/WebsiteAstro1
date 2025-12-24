// src/pages/services/reports/KundliReport.jsx
import React from "react";
import "./KundliReport.css";

const KundliReport = ({ kundli }) => {
  if (!kundli) return null;

  const {
    name,
    dateOfBirth,
    timeOfBirth,
    placeOfBirth,
    kundliData,
  } = kundli;

  const {
    sunSign,
    moonSign,
    ascendant,
    zodiac,
    nakshatra,
    nakshatraLord,
    mangalDosha,
    yogas,
    planets,
    description,
  } = kundliData || {};

  return (
    <div className="kr-container">
      {/* ===== HEADER ===== */}
      <div className="kr-header">
        <h2>Kundli Report</h2>
        <p className="kr-sub">Complete Vedic Birth Chart Analysis</p>
      </div>

      {/* ===== Personal Info ===== */}
      <div className="kr-card">
        <h3>Personal Details</h3>
        <ul>
          <li><strong>Name:</strong> {name}</li>
          <li><strong>Date of Birth:</strong> {dateOfBirth}</li>
          <li><strong>Time of Birth:</strong> {timeOfBirth}</li>
          <li><strong>Place of Birth:</strong> {placeOfBirth}</li>
        </ul>
      </div>

      {/* ===== Main Signs ===== */}
      <div className="kr-grid-3">
        <div className="kr-sign-card">
          <h4>Sun Sign</h4>
          <p>{sunSign}</p>
        </div>
        <div className="kr-sign-card">
          <h4>Moon Sign</h4>
          <p>{moonSign}</p>
        </div>
        <div className="kr-sign-card">
          <h4>Ascendant</h4>
          <p>{ascendant}</p>
        </div>
      </div>

      {/* ===== Nakshatra ===== */}
      <div className="kr-card">
        <h3>Nakshatra Details</h3>
        <ul>
          <li><strong>Nakshatra:</strong> {nakshatra}</li>
          <li><strong>Nakshatra Lord:</strong> {nakshatraLord}</li>
        </ul>
      </div>

      {/* ===== Mangal Dosha ===== */}
      <div className={`kr-card ${mangalDosha?.hasDosha ? "kr-danger" : "kr-success"}`}>
        <h3>Mangal Dosha</h3>
        <p className="kr-dosha-status">
          {mangalDosha?.hasDosha ? "⚠️ Manglik" : "✅ Not Manglik"}
        </p>
        <p>{mangalDosha?.description}</p>
      </div>

      {/* ===== Yogas ===== */}
      {yogas?.length > 0 && (
        <div className="kr-card">
          <h3>Important Yogas</h3>
          <ul className="kr-list">
            {yogas.map((y, i) => (
              <li key={i}>
                <strong>{y.name}:</strong> {y.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ===== Description ===== */}
      <div className="kr-card">
        <h3>Summary</h3>
        <p className="kr-desc">{description}</p>
      </div>
    </div>
  );
};

export default KundliReport;
