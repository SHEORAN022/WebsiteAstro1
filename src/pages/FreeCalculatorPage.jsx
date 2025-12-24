import React, { useState, useEffect } from "react";

import { Loader2, Sparkles } from "lucide-react";
import "./FreeCalculatorPage.css";

import {
  KundliAPI,
  NumerologyAPI,
  CompatibilityAPI,
  GemstoneAPI,
  PlanetaryAPI,
  TransitAPI,
  ZodiacAPI,
  ManglikAPI,
  DashaAPI,
  NakshatraAPI,
  DailyPredictionAPI,
  HoroscopeAPI,
} from "../api/apiService";
const calculatorImage =
  "https://www.astro-seek.com/seek-images/sidereal-transit-chart-astrology-calculator.jpg";



// ============ FREE CALCULATOR LIST ============

const freeCalculators = [
   { label: "KUNDLI", deliverable: "Chart", price: "Free", desc: "Generate your complete birth chart with planetary positions" },
  { label: "NUMEROLOGY", deliverable: "Report", price: "Free", desc: "Discover your life path number and destiny insights" },
  { label: "COMPATIBILITY", deliverable: "PDF", price: "Paid", desc: "Analyze relationship compatibility between two souls" },
  { label: "GEMSTONE RECOMMENDATION", deliverable: "Report", price: "Free", desc: "Find your lucky gemstones based on planetary alignment" },
  { label: "DASHA ", deliverable: "Report", price: "Paid", desc: "Explore your planetary periods and life phases" },
  { label: "MANGLIK CALCULATOR", deliverable: "Report", price: "Free", desc: "Check Manglik dosha and its effects on your life" },
  { label: "NAKASHTRA CALCULATOR", deliverable: "Report", price: "Paid", desc: "Discover your birth star and its cosmic influence" },
  { label: "PLANETARY CALCULATOR", deliverable: "Report", price: "Paid", desc: "Analyze planetary strengths and their impact" },
  { label: "TRANSOT CALCULATOR", deliverable: "Report", price: "Paid", desc: "Track current planetary movements affecting you" },
  { label: "ZODIAC CALCULATOR", deliverable: "Report", price: "Free", desc: "Find your sun, moon, and rising zodiac signs" },
  { label: "DAILY PREDICTIONS", deliverable: "Report", price: "Paid", desc: "Get personalized daily astrological guidance" },
  { label: "HORSCOPE", deliverable: "Report", price: "Free", desc: "Read your detailed horoscope and predictions" },
];

const FreeCalculatorPage = () => {
  const [faqs, setFaqs] = useState([]);
const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
    const starfield = document.getElementById("fc-starfield");
    if (starfield && !starfield.hasChildNodes()) {
      for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.className = "fc-star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;

        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;

        starfield.appendChild(star);
      }
    }
  }, []);
  useEffect(() => {
  const fetchFaqs = async () => {
    try {
      const res = await fetch(
        "https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Free Calculators"
      );
      const data = await res.json();
      setFaqs(data?.faqs || []);
    } catch (err) {
      console.error("FAQ fetch error:", err);
    }
  };

  fetchFaqs();
}, []);


  const [step, setStep] = useState(1);
  const [selectedCalculator, setSelectedCalculator] = useState(null);
  const [formData, setFormData] = useState({});
  const [backendData, setBackendData] = useState(null);
  const [loading, setLoading] = useState(false);
  

  // select calculator → go to form
  const handleCalculatorSelect = (calc) => {
    setSelectedCalculator(calc);
    setFormData({});
    setBackendData(null);
    setStep(2);
  };

  // form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // submit → call correct free API
  const handleFormSubmit = async () => {
    if (!selectedCalculator) return;

    setLoading(true);

    try {
      let response;
      let payload = { ...formData };

      switch (selectedCalculator.label) {
        case "Kundli":
          payload = {
            name: formData.fullName,
            dateOfBirth: formData.dob,
            timeOfBirth: formData.timeSlot,
            placeOfBirth: formData.birthPlace,
          };
          response = await KundliAPI.calculate(payload);
          break;

        case "Compatibility":
          payload = {
            boyName: formData.fullNameA,
            boyDob: formData.dobA,
            boyTob: formData.timeSlotA,
            boyPlace: formData.birthPlaceA,
            girlName: formData.fullNameB,
            girlDob: formData.dobB,
            girlTob: formData.timeSlotB,
            girlPlace: formData.birthPlaceB,
          };
          response = await CompatibilityAPI.calculate(payload);
          break;

        case "Numerology":
          payload = { name: formData.fullName, dateOfBirth: formData.dob };
          response = await NumerologyAPI.calculate(payload);
          break;

        case "Gemstone Recommendation":
          payload = { name: formData.name, dateOfBirth: formData.dob, zodiacSign: formData.zodiacSign };
          response = await GemstoneAPI.calculate(payload);
          break;

        case "Manglik Calculator":
        case "Nakshatra Calculator":
        case "Dasha (Vimshottari)":
        case "Planetary Calculator":
        case "Transit Calculator":
        case "Horoscope":
          payload = {
            name: formData.fullName || formData.name,
            dateOfBirth: formData.dob,
            timeOfBirth: formData.timeSlot,
            placeOfBirth: formData.birthPlace,
          };
          response = await ({
            "Manglik Calculator": ManglikAPI,
            "Nakshatra Calculator": NakshatraAPI,
            "Dasha (Vimshottari)": DashaAPI,
            "Planetary Calculator": PlanetaryAPI,
            "Transit Calculator": TransitAPI,
            "Horoscope": HoroscopeAPI,
          }[selectedCalculator.label]).calculate(payload);
          break;

        case "Zodiac Calculator":
          payload = {
            name: formData.fullName,
            dateOfBirth: formData.dob,
            timeOfBirth: formData.timeSlot,
            placeOfBirth: formData.birthPlace,
          };
          response = await ZodiacAPI.calculate(payload);
          break;

        case "Daily Predictions":
          payload = { date: formData.date, zodiacSign: formData.zodiacSign };
          response = await DailyPredictionAPI.create(payload);
          break;

        default:
          response = { data: { message: "No API mapped!" } };
      }

      console.log("✅ API Response:", response);
      setBackendData(response.data || response);
      setStep(3);
    } catch (err) {
      console.error("❌ API Error:", err);
      setBackendData({ error: err.response?.data?.message || "Something went wrong!" });
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSelectedCalculator(null);
    setBackendData(null);
    setFormData({});
  };

  const renderReport = () => {
    if (!backendData || backendData.error) {
      return (
        <div style={{ padding: "2rem", textAlign: "center", color: "#ff6b6b" }}>
          <h3>❌ Error Processing Report</h3>
          <p>{backendData?.error || "Failed to generate report"}</p>
        </div>
      );
    }

    switch (selectedCalculator.label) {
      case "Kundli":
        return <KundliReport data={backendData} formData={formData} />;
      case "Numerology":
        return <NumerologyReport data={backendData} formData={formData} />;
      case "Compatibility":
        return <CompatibilityReport data={backendData} formData={formData} />;
      case "Gemstone Recommendation":
        return <GemstoneReport data={backendData} formData={formData} />;
      case "Dasha (Vimshottari)":
        return <DashaReport data={backendData} formData={formData} />;
      case "Manglik Calculator":
        return <ManglikReport data={backendData} formData={formData} />;
      case "Nakshatra Calculator":
        return <NakshatraReport data={backendData} formData={formData} />;
      case "Planetary Calculator":
        return <PlanetaryReport data={backendData} formData={formData} />;
      case "Transit Calculator":
        return <TransitReport data={backendData} formData={formData} />;
      case "Zodiac Calculator":
        return <ZodiacReport data={backendData} formData={formData} />;
      case "Daily Predictions":
        return <DailyPredictionReport data={backendData} formData={formData} />;
      case "Horoscope":
        return <HoroscopeReport data={backendData} formData={formData} />;
      default:
        return <GenericReport data={backendData} formData={formData} />;
    }
  };


  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0a0018, #1e003f)",
        color: "#fff",
           zIndex: 5, 
        fontFamily: "'Poppins', sans-serif",
        overflowX: "hidden",
        paddingBottom: "3rem",
      }}
    >
            {/* ⭐ STARFIELD BACKGROUND */}
      <div id="fc-starfield" className="fc-starfield"></div>

      {/* 🌌 FLOATING ORBS */}
      <div className="fc-floating-orbs">
        <div className="fc-orb orb-1"></div>
        <div className="fc-orb orb-2"></div>
        <div className="fc-orb orb-3"></div>
      </div>

 {/* TOP LEFT BACK BUTTON */}
<div 
  style={{
    position: "absolute",
    top: "20px",
    left: "20px",  
    zIndex: 20,
  }}
>
  <button
    onClick={() => window.history.back()}
    style={{
      padding: "10px 20px",
      background: "rgba(255,255,255,0.1)",
      borderRadius: "30px",
      border: "1px solid rgba(255,255,255,0.3)",
      color: "#fff",
      fontWeight: 500,
      cursor: "pointer",
      backdropFilter: "blur(4px)",
      transition: "0.3s",
    }}
    onMouseEnter={(e) => {
      e.target.style.background = "rgba(255,255,255,0.25)";
    }}
    onMouseLeave={(e) => {
      e.target.style.background = "rgba(255,255,255,0.1)";
    }}
  >
    Back
  </button>
</div>{/* HEADER */}
<div
  style={{
    textAlign: "center",
    padding: "4rem 1.5rem 2.5rem",
    position: "relative",
    zIndex: 5,
  }}
>
  <h1
    style={{
      fontSize: "2.6rem",
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "0.6rem",
    }}
  >
    
      CALCULATORS
  </h1>

  <p
    style={{
      fontSize: "1.1rem",
      color: "#ccc",
      marginBottom: "2.2rem",
    }}
  >
    {/* 100% Free · No login required · Instant personalised reports */}
  </p>

  {/* 🌠 CENTER IMAGE */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "2.8rem",
    }}
  >
    <img
      src={calculatorImage}
      alt="Astrology Calculator"
      style={{
        width: "100%",
        maxWidth: "380px",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow:
          "0 20px 60px rgba(255,0,255,0.35), 0 0 40px rgba(0,255,255,0.2)",
        background: "rgba(255,255,255,0.05)",
      }}
    />
  </div>
</div>


      {/* HEADER */}
      
      <div style={{ textAlign: "center", padding: "4rem 1.5rem 2rem" }}>
        <h1
          style={{
            fontSize: "2.6rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          
          
        </h1>
        {/* <p style={{ fontSize: "1.1rem", color: "#ccc" }}>
          100% Free · No login required · Instant personalised reports
        </p> */}
      </div>

      {/* STEP 1: CALCULATOR SELECTION */}
      {step === 1 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.8rem",
            padding: "0 1.5rem",
            maxWidth: "1100px",
            margin: "0 auto 3rem",
          }}
        >
          {freeCalculators.map((calc, i) => (
            <div
              key={i}
              onClick={() => handleCalculatorSelect(calc)}
              style={{
                background: "rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "1.8rem 1.5rem",
                cursor: "pointer",
                textAlign: "left",
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "0.35s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(255,0,255,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 600,
                  marginBottom: "0.4rem",
                }}
              >
                {calc.label}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#ddd",
                  marginBottom: "0.8rem",
                }}
              >
                {calc.desc}
              </p>
              <p style={{ fontSize: "0.9rem", marginBottom: "0.3rem" }}>
                📄 {calc.deliverable}
              </p>
              <p>
                <span
                  style={{
                    color: "#00ffcc",
                    fontWeight: 600,
                  }}
                >
                  {calc.price}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}

      {/* ================= FREE CALCULATOR FAQs ================= */}
{faqs.length > 0 && (
  <div
    style={{
      maxWidth: "900px",
      margin: "5rem auto 2rem",
      padding: "0 1.5rem",
      position: "relative",
      zIndex: 5,
    }}
  >
    <h2
      style={{
        fontSize: "2.2rem",
        fontWeight: 700,
        textAlign: "center",
        marginBottom: "2rem",
        background: "linear-gradient(90deg,#ff00ff,#00ffff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      FAQ
    </h2>

    {faqs.map((faq, index) => (
      <div
        key={faq._id}
        onClick={() => setOpenFaq(openFaq === index ? null : index)}
        style={{
          background: "rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "1.2rem 1.4rem",
          marginBottom: "1rem",
          cursor: "pointer",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontSize: "1.05rem", fontWeight: 600 }}>
            {faq.question}
          </h4>
          <span style={{ fontSize: "1.5rem" }}>
            {openFaq === index ? "−" : "+"}
          </span>
        </div>

        {openFaq === index && (
          <p
            style={{
              marginTop: "0.8rem",
              color: "#ddd",
              lineHeight: "1.7",
            }}
          >
            {faq.answer}
          </p>
        )}
      </div>
    ))}
  </div>
)}


      {/* STEP 2: FORM */}
      {step === 2 && selectedCalculator && (
       <div style={formContainerStyle}>
                 <h2 style={titleStyle}>{selectedCalculator.label}</h2>
                 <p style={{ color: "#ccc", marginBottom: "2rem" }}>{selectedCalculator.desc}</p>
       
                 <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                   {["Kundli", "Zodiac Calculator", "Dasha (Vimshottari)", "Manglik Calculator", "Nakshatra Calculator", "Planetary Calculator", "Transit Calculator", "Horoscope"].includes(selectedCalculator.label) && (
                     <>
                       <input name="fullName" placeholder="Full Name *" onChange={handleChange} value={formData.fullName || ""} style={inputStyle} required />
                       <input type="date" name="dob" onChange={handleChange} value={formData.dob || ""} style={inputStyle} required />
                       <input type="time" name="timeSlot" onChange={handleChange} value={formData.timeSlot || ""} style={inputStyle} required />
                       <input name="birthPlace" placeholder="Place of Birth *" onChange={handleChange} value={formData.birthPlace || ""} style={inputStyle} required />
                     </>
                   )}
       
                   {selectedCalculator.label === "Numerology" && (
                     <>
                       <input name="fullName" placeholder="Full Name *" onChange={handleChange} value={formData.fullName || ""} style={inputStyle} required />
                       <input type="date" name="dob" onChange={handleChange} value={formData.dob || ""} style={inputStyle} required />
                     </>
                   )}
       
                   {selectedCalculator.label === "Compatibility" && (
                     <>
                       <h4 style={{ color: "#00ffff", marginTop: "1rem" }}> Person A</h4>
                       <input name="fullNameA" placeholder="Full Name *" onChange={handleChange} value={formData.fullNameA || ""} style={inputStyle} required />
                       <input type="date" name="dobA" onChange={handleChange} value={formData.dobA || ""} style={inputStyle} required />
                       <input type="time" name="timeSlotA" onChange={handleChange} value={formData.timeSlotA || ""} style={inputStyle} required />
                       <input name="birthPlaceA" placeholder="Place of Birth *" onChange={handleChange} value={formData.birthPlaceA || ""} style={inputStyle} required />
       
                       <h4 style={{ color: "#ff66cc", marginTop: "1.5rem" }}>Person B</h4>
                       <input name="fullNameB" placeholder="Full Name *" onChange={handleChange} value={formData.fullNameB || ""} style={inputStyle} required />
                       <input type="date" name="dobB" onChange={handleChange} value={formData.dobB || ""} style={inputStyle} required />
                       <input type="time" name="timeSlotB" onChange={handleChange} value={formData.timeSlotB || ""} style={inputStyle} required />
                       <input name="birthPlaceB" placeholder="Place of Birth *" onChange={handleChange} value={formData.birthPlaceB || ""} style={inputStyle} required />
                     </>
                   )}
       
                   {selectedCalculator.label === "Gemstone Recommendation" && (
                     <>
                       <input name="name" placeholder="Full Name *" onChange={handleChange} value={formData.name || ""} style={inputStyle} required />
                       <input type="date" name="dob" onChange={handleChange} value={formData.dob || ""} style={inputStyle} required />
                       <input name="zodiacSign" placeholder="Zodiac Sign (Optional)" onChange={handleChange} value={formData.zodiacSign || ""} style={inputStyle} />
                     </>
                   )}
       
                   {selectedCalculator.label === "Daily Predictions" && (
                     <>
                       <input type="date" name="date" onChange={handleChange} value={formData.date || ""} style={inputStyle} required />
                       <input name="zodiacSign" placeholder="Zodiac Sign *" onChange={handleChange} value={formData.zodiacSign || ""} style={inputStyle} required />
                     </>
                   )}
                 </div>
       
                 <button onClick={handleFormSubmit} disabled={loading} style={submitBtnStyle}>
                   {loading ? (
                     <>
                       <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> Generating...
                     </>
                   ) : (
                     " Generate Report"
                   )}
                 </button>
       
                 <button onClick={resetForm} style={backBtnStyle}>
                   ⬅ Back to Calculators
                 </button>
               </div>
             )}

      {/* STEP 3: REPORT */}
      {step === 3 && selectedCalculator && (
        <div style={resultContainerStyle}>
          <h2 style={titleStyle}>📊 {selectedCalculator.label} Report</h2>
          {renderReport()}
          <button onClick={resetForm} style={backBtnStyle}>
            ⬅ Back to Calculators
          </button>
        </div>
      )}
    </div>
  );
};

// ============ SHARED REPORT WRAPPERS ============

// const ReportSection = ({ title, children, icon }) => (
//   <div style={sectionStyle}>
//     <h3 style={sectionTitleStyle}>
//       {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
//       {title}
//     </h3>
//     <div style={sectionContentStyle}>{children}</div>
//   </div>
// );

// const InfoRow = ({ label, value }) => (
//   <div style={infoRowStyle}>
//     <span style={labelStyle}>{label}:</span>
//     <span style={valueStyle}>
//       {value && value !== "N/A" ? value : "Not Provided"}
//     </span>
//   </div>
// );

// ============ 1. KUNDLI REPORT ============

const ReportSection = ({ title, children, icon }) => (
  <div style={sectionStyle}>
    <h3 style={sectionTitleStyle}>
      {icon && <span style={{ marginRight: "8px" }}>{icon}</span>}
      {title}
    </h3>
    <div style={sectionContentStyle}>{children}</div>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div style={infoRowStyle}>
    <span style={labelStyle}>{label}:</span>
    <span style={valueStyle}>{value && value !== "N/A" ? value : "Not Provided"}</span>
  </div>
);

// ⭐ UNIVERSAL & SAFE KUNDLI REPORT
const KundliReport = ({ data, formData }) => {
  const kundli = data?.kundli?.kundliData || data?.kundliData || data?.data || data || {};

  return (
    <div>

      {/* BASIC DETAILS */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData?.fullName || data?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData?.dob || data?.dateOfBirth || "-"} />
        <InfoRow label="Time of Birth" value={formData?.timeSlot || data?.timeOfBirth || "-"} />
        <InfoRow label="Place of Birth" value={formData?.birthPlace || data?.placeOfBirth || "-"} />
      </ReportSection>

      {/* ZODIAC DETAILS */}
      {(kundli.sunSign || kundli.moonSign || kundli.ascendant || kundli.zodiac) && (
        <ReportSection title="Zodiac Details" icon="🌞">
          <InfoRow label="Sun Sign" value={kundli.sunSign || "-"} />
          <InfoRow label="Moon Sign" value={kundli.moonSign || "-"} />
          <InfoRow label="Ascendant (Lagna)" value={kundli.ascendant || "-"} />
          <InfoRow label="Zodiac Sign" value={kundli.zodiac || "-"} />
        </ReportSection>
      )}

      {/* NAKSHATRA */}
      {(kundli.nakshatra || kundli.nakshatraLord) && (
        <ReportSection title="Nakshatra Details" icon="✨">
          <InfoRow label="Nakshatra" value={kundli.nakshatra || "-"} />
          <InfoRow label="Nakshatra Lord" value={kundli.nakshatraLord || "-"} />
        </ReportSection>
      )}

      {/* PLANETS */}
      {kundli.planets && Object.keys(kundli.planets).length > 0 && (
        <ReportSection title="Planetary Positions" icon="🪐">
          {Object.entries(kundli.planets).map(([planet, details]) => (
            <InfoRow
              key={planet}
              label={planet}
              value={`${details?.sign || ""}  ${details?.degree ? details.degree + "°" : ""}`}
            />
          ))}
        </ReportSection>
      )}

      {/* HOUSE DETAILS */}
      {kundli.houses && Object.keys(kundli.houses).length > 0 && (
        <ReportSection title="House Details" icon="🏠">
          {Object.entries(kundli.houses).map(([house, sign]) => (
            <InfoRow key={house} label={`House ${house}`} value={sign || "-"} />
          ))}
        </ReportSection>
      )}

      {/* MANGAL DOSHA */}
      {kundli.mangalDosha && (
        <ReportSection title="Mangal Dosha" icon="🔥">
          <InfoRow
            label="Status"
            value={kundli.mangalDosha.hasDosha ? "Present" : "Not Present"}
          />
          <InfoRow
            label="Description"
            value={kundli.mangalDosha.description || "-"}
          />
        </ReportSection>
      )}

      {/* YOGAS */}
      {kundli.yogas?.length > 0 && (
        <ReportSection title="Yogas in Kundli" icon="🔯">
          {kundli.yogas.map((y, i) => (
            <InfoRow key={i} label={y.name} value={y.description} />
          ))}
        </ReportSection>
      )}

      {/* NAVAMSA (if exists) */}
      {kundli.navaamsas && (
        <ReportSection title="Navamsa Chart" icon="🌙">
          {Object.entries(kundli.navaamsas).map(([key, val]) => (
            <InfoRow key={key} label={key} value={val} />
          ))}
        </ReportSection>
      )}

      {/* DESCRIPTION */}
      {kundli.description && (
        <ReportSection title="Summary" icon="📝">
          <InfoRow label="Details" value={kundli.description} />
        </ReportSection>
      )}

    </div>
  );
};


// 2. NUMEROLOGY REPORT
const NumerologyReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  return (
    <div>

      {/* BASIC INFO */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData?.fullName || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData?.dob || report?.dateOfBirth || "-"} />
      </ReportSection>

      {/* CORE NUMBERS */}
      <ReportSection title="Core Numbers" icon="🔢">
        <InfoRow label="Life Path Number" value={report?.lifePathNumber || "-"} />
        <InfoRow label="Destiny Number" value={report?.destinyNumber || "-"} />
        <InfoRow label="Soul Urge Number" value={report?.soulUrgeNumber || "-"} />
        <InfoRow label="Personality Number" value={report?.personalityNumber || "-"} />
      </ReportSection>

      {/* LIFE PATH INTERPRETATION */}
      {report?.lifePathInterpretation && (
        <ReportSection title="Life Path Interpretation" icon="">
          <p style={textStyle}>{report.lifePathInterpretation}</p>
        </ReportSection>
      )}

      {/* PERSONALITY DESCRIPTION */}
      {report?.description && (
        <ReportSection title="Overall Personality" icon="">
          <p style={textStyle}>{report.description}</p>
        </ReportSection>
      )}

      {/* STRENGTHS */}
      {report?.strengths && (
        <ReportSection title="Strengths" icon="💪">
          <p style={textStyle}>{report.strengths}</p>
        </ReportSection>
      )}

      {/* WEAKNESSES */}
      {report?.weaknesses && (
        <ReportSection title="Weaknesses" icon="⚠️">
          <p style={textStyle}>{report.weaknesses}</p>
        </ReportSection>
      )}

      {/* LUCKY NUMBERS */}
      {report?.luckyNumbers && (
        <ReportSection title="Lucky Numbers" icon="🍀">
          <p style={textStyle}>
            {Array.isArray(report.luckyNumbers)
              ? report.luckyNumbers.join(", ")
              : report.luckyNumbers}
          </p>
        </ReportSection>
      )}

      {/* LUCKY COLOR */}
      {report?.luckyColor && (
        <ReportSection title="Lucky Color" icon="🎨">
          <p style={textStyle}>{report.luckyColor}</p>
        </ReportSection>
      )}

      {/* LUCKY DAYS */}
      {report?.luckyDays && (
        <ReportSection title="Lucky Days" icon="📅">
          <p style={textStyle}>
            {Array.isArray(report.luckyDays)
              ? report.luckyDays.join(", ")
              : report.luckyDays}
          </p>
        </ReportSection>
      )}

      {/* LUCKY DIRECTION */}
      {report?.luckyDirection && (
        <ReportSection title="Lucky Direction" icon="🧭">
          <p style={textStyle}>{report.luckyDirection}</p>
        </ReportSection>
      )}

    </div>
  );
};


// ⭐ UNIVERSAL COMPATIBILITY REPORT
const CompatibilityReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  const score = report?.score || report?.compatibilityScore || 0;
  const percentage = Math.round((score / (report?.maxScore || 36)) * 100);

  return (
    <div>

      {/* PERSONS INFO */}
      <ReportSection title="Persons Information" icon="👥">
        <h4 style={{ color: "#00ffff" }}>Person A</h4>
        <InfoRow label="Name" value={formData?.fullNameA} />
        <InfoRow label="Date of Birth" value={formData?.dobA} />
        <InfoRow label="Time of Birth" value={formData?.timeSlotA} />
        <InfoRow label="Place of Birth" value={formData?.birthPlaceA} />

        <h4 style={{ color: "#ff66cc", marginTop: "1rem" }}>Person B</h4>
        <InfoRow label="Name" value={formData?.fullNameB} />
        <InfoRow label="Date of Birth" value={formData?.dobB} />
        <InfoRow label="Time of Birth" value={formData?.timeSlotB} />
        <InfoRow label="Place of Birth" value={formData?.birthPlaceB} />
      </ReportSection>

      {/* OVERALL SCORE */}
      <ReportSection title="Overall Compatibility" icon="💑">
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <div
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              background: "linear-gradient(90deg, #ff00ff, #00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {percentage}%
          </div>

          <p style={textStyle}>{report?.message || report?.compatibilityLevel || "Compatibility Assessment"}</p>
        </div>
      </ReportSection>

      {/* BOY DOSHA */}
      {report?.boyDosha && (
        <ReportSection title="Person A - Mangal Dosha" icon="🔥">
          <InfoRow label="Has Dosha" value={report.boyDosha.hasDosha ? "Yes" : "No"} />
          <InfoRow label="Type" value={report.boyDosha.dosha_type || "N/A"} />
          <InfoRow label="Exception" value={report.boyDosha.has_exception ? "Yes" : "No"} />
          <InfoRow label="Description" value={report.boyDosha.description} />
        </ReportSection>
      )}

      {/* GIRL DOSHA */}
      {report?.girlDosha && (
        <ReportSection title="Person B - Mangal Dosha" icon="🔥">
          <InfoRow label="Has Dosha" value={report.girlDosha.hasDosha ? "Yes" : "No"} />
          <InfoRow label="Type" value={report.girlDosha.dosha_type || "N/A"} />
          <InfoRow label="Exception" value={report.girlDosha.has_exception ? "Yes" : "No"} />
          <InfoRow label="Description" value={report.girlDosha.description} />
        </ReportSection>
      )}

      {/* ASHTA KOOT MATCHING */}
      {Array.isArray(report.kutas) && report.kutas.length > 0 && (
        <ReportSection title="Ashta Koota Matching" icon="🔯">
          {report.kutas.map((k, i) => (
            <div key={i} style={{ marginBottom: "1rem", padding: "1rem", background: "rgba(255,255,255,0.06)", borderRadius: "10px" }}>
              <InfoRow label="Koot" value={k.name} />
              <InfoRow label="Points" value={`${k.obtained_points}/${k.maximum_points}`} />
              <InfoRow label="Person A (Boy)" value={k.boy_koot} />
              <InfoRow label="Person B (Girl)" value={k.girl_koot} />
              <p style={{ ...textStyle, marginTop: "0.5rem" }}>{k.description}</p>
            </div>
          ))}
        </ReportSection>
      )}

      {/* LOVE COMPATIBILITY */}
      {report?.loveCompatibility && (
        <ReportSection title="Love & Romance" icon="❤️">
          <p style={textStyle}>{report.loveCompatibility}</p>
        </ReportSection>
      )}

      {/* COMMUNICATION */}
      {report?.communication && (
        <ReportSection title="Communication" icon="💬">
          <p style={textStyle}>{report.communication}</p>
        </ReportSection>
      )}

      {/* EMOTIONAL CONNECTION */}
      {report?.emotionalConnection && (
        <ReportSection title="Emotional Connection" icon="🧡">
          <p style={textStyle}>{report.emotionalConnection}</p>
        </ReportSection>
      )}

      {/* LONG TERM POTENTIAL */}
      {report?.longTermPotential && (
        <ReportSection title="Long-Term Potential" icon="🔮">
          <p style={textStyle}>{report.longTermPotential}</p>
        </ReportSection>
      )}

      {/* RECOMMENDATIONS */}
      {report?.recommendations && (
        <ReportSection title="Recommendations" icon="💡">
          <p style={textStyle}>{report.recommendations}</p>
        </ReportSection>
      )}
    </div>
  );
};


// ⭐ UNIVERSAL GEMSTONE REPORT
const GemstoneReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  return (
    <div>

      {/* BASIC INFO */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData?.name || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData?.dob || report?.dateOfBirth || "-"} />
        <InfoRow label="Zodiac Sign" value={formData?.zodiacSign || report?.zodiacSign || "-"} />
      </ReportSection>

      {/* PRIMARY GEMSTONE */}
      <ReportSection title="Primary Gemstone" icon="💎">
        <InfoRow label="Recommended Stone" value={report?.primaryGemstone || report?.gemstone || "-"} />
      </ReportSection>

      {/* BENEFITS */}
      {report?.benefits && (
        <ReportSection title="Benefits" icon="✨">
          <p style={textStyle}>{report.benefits}</p>
        </ReportSection>
      )}

      {/* ALTERNATIVE GEMSTONES */}
      {report?.alternativeGemstones && (
        <ReportSection title="Alternative Gemstones" icon="💠">
          <p style={textStyle}>
            {Array.isArray(report.alternativeGemstones)
              ? report.alternativeGemstones.join(", ")
              : report.alternativeGemstones}
          </p>
        </ReportSection>
      )}

      {/* PRECAUTIONS */}
      {report?.precautions && (
        <ReportSection title="Precautions" icon="⚠️">
          <p style={textStyle}>{report.precautions}</p>
        </ReportSection>
      )}

      {/* PRICE RANGE */}
      {report?.price && (
        <ReportSection title="Price Range" icon="💰">
          <p style={textStyle}>{report.price}</p>
        </ReportSection>
      )}
    </div>
  );
};

// ⭐ UNIVERSAL DASHA REPORT
const DashaReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  return (
    <div>

      {/* BASIC INFO */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData?.fullName || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData?.dob || report?.dateOfBirth || "-"} />
        <InfoRow label="Time of Birth" value={formData?.timeSlot || report?.timeOfBirth || "-"} />
        <InfoRow label="Place of Birth" value={formData?.birthPlace || report?.placeOfBirth || "-"} />
      </ReportSection>

      {/* CURRENT DASHA */}
      <ReportSection title="Current Dasha Period" icon="⏰">
        <InfoRow label="Maha Dasha" value={report?.mahaDasha || report?.current?.mahaDasha || "-"} />
        <InfoRow label="Antar Dasha" value={report?.antarDasha || report?.current?.antarDasha || "-"} />
        <InfoRow label="Pratyantara Dasha" value={report?.pratyantaraDasha || report?.current?.pratyantarDasha || "-"} />
        <InfoRow label="Start Date" value={report?.startDate || report?.current?.start || "-"} />
        <InfoRow label="End Date" value={report?.endDate || report?.current?.end || "-"} />
      </ReportSection>

      {/* EFFECTS */}
      {report?.effects && (
        <ReportSection title="Current Period Effects" icon="🌟">
          <p style={textStyle}>{report.effects}</p>
        </ReportSection>
      )}

      {/* DETAILED EFFECTS OBJECT (Optional) */}
      {report?.current?.effects && (
        <ReportSection title="Detailed Effects" icon="✨">
          {Object.entries(report.current.effects).map(([key, value], idx) => (
            <InfoRow key={idx} label={key} value={value} />
          ))}
        </ReportSection>
      )}

      {/* UPCOMING DASHA LIST */}
      {Array.isArray(report?.upcomingDashas) && report.upcomingDashas.length > 0 && (
        <ReportSection title="Upcoming Dasha Periods" icon="📅">
          {report.upcomingDashas.map((d, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1rem",
                padding: "0.75rem",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "8px",
              }}
            >
              <InfoRow label="Planet" value={d?.planet || "-"} />
              <InfoRow label="Start Date" value={d?.startDate || "-"} />
              <InfoRow label="End Date" value={d?.endDate || "-"} />
            </div>
          ))}
        </ReportSection>
      )}

      {/* NESTED UPCOMING MAHADASHA → ANTARDASHA → PRATYANTAR */}
      {report?.timeline && (
        <ReportSection title="Detailed Dasha Timeline" icon="🕰️">
          {Object.entries(report.timeline).map(([planet, details], idx) => (
            <div
              key={idx}
              style={{
                padding: "0.8rem",
                marginBottom: "1rem",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "8px",
              }}
            >
              <h4 style={{ color: "#00ffff", marginBottom: "0.5rem" }}>{planet} Maha Dasha</h4>
              <InfoRow label="Period" value={`${details.startDate} - ${details.endDate}`} />

              {details?.antarDashas && (
                <div style={{ marginTop: "0.5rem" }}>
                  {details.antarDashas.map((antar, x) => (
                    <div
                      key={x}
                      style={{
                        marginTop: "0.5rem",
                        padding: "0.5rem",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: "6px",
                      }}
                    >
                      <InfoRow label="Antar Dasha" value={antar.planet} />
                      <InfoRow label="Period" value={`${antar.startDate} - ${antar.endDate}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ReportSection>
      )}

      {/* RECOMMENDATIONS */}
      {report?.recommendations && (
        <ReportSection title="Recommendations" icon="💡">
          <p style={textStyle}>{report.recommendations}</p>
        </ReportSection>
      )}
    </div>
  );
};

// ⭐ UNIVERSAL MANGLIK REPORT
const ManglikReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  // Detect Manglik from all API types
  const isManglik =
    report?.isManglik ||
    report?.manglik ||
    report?.hasDosha ||
    report?.mangalDosha?.hasDosha ||
    report?.dosha?.hasDosha ||
    false;

  const doshaData =
    report?.mangalDosha ||
    report?.dosha ||
    report?.dosha_details ||
    report;

  return (
    <div>

      {/* BASIC INFO */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData.fullName || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData.dob || report?.dateOfBirth || "-"} />
        <InfoRow label="Time of Birth" value={formData.timeSlot || report?.timeOfBirth || "-"} />
        <InfoRow label="Place of Birth" value={formData.birthPlace || report?.placeOfBirth || "-"} />
      </ReportSection>

      {/* MANGALIK STATUS */}
      <ReportSection title="Manglik Status" icon="🔴">
        <div style={{ textAlign: "center", margin: "2rem 0" }}>
          <div
            style={{
              fontSize: "2.6rem",
              fontWeight: "bold",
              color: isManglik ? "#ff4444" : "#44ff44",
            }}
          >
            {isManglik ? "✓ Yes, Manglik" : "✗ No, Not Manglik"}
          </div>

          {doshaData?.description && (
            <p style={{ ...textStyle, marginTop: "1rem" }}>{doshaData.description}</p>
          )}
        </div>
      </ReportSection>

      {/* IF MANGALIK – SHOW DETAILS */}
      {isManglik && (
        <>
          <ReportSection title="Manglik Dosha Details" icon="⚠️">
            <InfoRow label="Mars House" value={doshaData?.house || doshaData?.marsHouse || "-"} />
            <InfoRow label="Dosha Type" value={doshaData?.doshaType || doshaData?.dosha_type || "-"} />
            <InfoRow label="Intensity" value={doshaData?.intensity || "-"} />
            <InfoRow label="Affected Planet" value={doshaData?.planet || "Mars"} />
            <InfoRow label="Has Exception" value={doshaData?.hasException ? "Yes" : "No"} />
          </ReportSection>

          {doshaData?.effects && (
            <ReportSection title="Effects" icon="📊">
              <p style={textStyle}>{doshaData.effects}</p>
            </ReportSection>
          )}

          {doshaData?.remedies && (
            <ReportSection title="Remedies" icon="🙏">
              <p style={textStyle}>{doshaData.remedies}</p>
            </ReportSection>
          )}
        </>
      )}

      {/* IF NOT MANGALIK */}
      {!isManglik && (
        <ReportSection title="Analysis" icon="✅">
          <p style={textStyle}>No Manglik Dosha detected. Marriage compatibility is favourable.</p>
        </ReportSection>
      )}
    </div>
  );
};

// ⭐ UNIVERSAL NAKSHATRA REPORT
const NakshatraReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  // Detect Nakshatra from any format
  const nakshatra =
    report?.nakshatra ||
    report?.nakshatra_name ||
    report?.nakshatraDetails?.nakshatra ||
    report?.nakshatraDetails?.name ||
    report?.star ||
    "-";

  const pada =
    report?.pada ||
    report?.nakshatraDetails?.pada ||
    report?.quarter ||
    "-";

  const deity =
    report?.deity ||
    report?.nakshatraDetails?.deity ||
    report?.rulingDeity ||
    "-";

  const rulingPlanet =
    report?.rulingPlanet ||
    report?.lord ||
    report?.nakshatraDetails?.planet ||
    "-";

  const symbol =
    report?.symbol ||
    report?.nakshatraDetails?.symbol ||
    "-";

  const element =
    report?.element ||
    report?.nakshatraDetails?.element ||
    "-";

  return (
    <div>

      {/* BASIC INFO */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData.fullName || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData.dob || report?.dateOfBirth || "-"} />
        <InfoRow label="Time of Birth" value={formData.timeSlot || report?.timeOfBirth || "-"} />
        <InfoRow label="Place of Birth" value={formData.birthPlace || report?.placeOfBirth || "-"} />
      </ReportSection>

      {/* NAKSHATRA MAIN DETAILS */}
      <ReportSection title="Birth Nakshatra" icon="⭐">
        <InfoRow label="Nakshatra" value={nakshatra} />
      </ReportSection>

      {/* PERSONALITY */}
      {(report?.personality || report?.traits) && (
        <ReportSection title="Personality Traits" icon="👤">
          <p style={textStyle}>{report.personality || report.traits}</p>
        </ReportSection>
      )}

      {/* CAREER */}
      {(report?.career || report?.profession) && (
        <ReportSection title="Career & Profession" icon="💼">
          <p style={textStyle}>{report.career || report.profession}</p>
        </ReportSection>
      )}

      {/* STRENGTHS */}
      {report?.strengths && (
        <ReportSection title="Strengths" icon="⚡">
          <p style={textStyle}>{report.strengths}</p>
        </ReportSection>
      )}

      {/* WEAKNESSES */}
      {report?.weaknesses && (
        <ReportSection title="Weaknesses" icon="⚠️">
          <p style={textStyle}>{report.weaknesses}</p>
        </ReportSection>
      )}

      {/* LUCKY ATTRIBUTES */}
      {(report?.luckyAttributes || report?.lucky) && (
        <ReportSection title="Lucky Attributes" icon="🍀">
          <InfoRow
            label="Lucky Color"
            value={
              report?.luckyAttributes?.color ||
              report?.lucky?.color ||
              "-"
            }
          />
          <InfoRow
            label="Lucky Number"
            value={
              report?.luckyAttributes?.number ||
              report?.lucky?.number ||
              "-"
            }
          />
          <InfoRow
            label="Lucky Day"
            value={
              report?.luckyAttributes?.day ||
              report?.lucky?.day ||
              "-"
            }
          />
        </ReportSection>
      )}

    </div>
  );
};

// ⭐ UNIVERSAL PLANETARY REPORT
const PlanetaryReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  // Planet list from any format
  const planets =
    report?.planets ||
    report?.planetPositions ||
    report?.planetaryPositions ||
    {};

  return (
    <div>

      {/* BASIC INFO */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData.fullName || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData.dob || report?.dateOfBirth || "-"} />
        <InfoRow label="Time of Birth" value={formData.timeSlot || report?.timeOfBirth || "-"} />
        <InfoRow label="Place of Birth" value={formData.birthPlace || report?.placeOfBirth || "-"} />
      </ReportSection>

      {/* PLANETARY POSITIONS */}
      <ReportSection title="Planetary Positions" icon="🪐">
        {Object.entries(planets).map(([planet, sign]) => (
          <InfoRow key={planet} label={planet} value={sign || "-"} />
        ))}
      </ReportSection>

    </div>
  );
};

// 9. TRANSIT REPORT
const TransitReport = ({ data, formData }) => {
  const reportData = data?.data || data;
  return (
    <div>
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData.fullName} />
        <InfoRow label="Date of Birth" value={formData.dob} />
      </ReportSection>

      {reportData?.transits && Object.keys(reportData.transits).length > 0 && (
        <ReportSection title="Current Planetary Transits" icon="🔄">
          {Object.entries(reportData.transits).map(([planet, details]) => (
            <div key={planet} style={{ marginBottom: "1rem" }}>
              <InfoRow label={planet} value={`Currently in ${details?.sign || "N/A"}`} />
              {details?.effects && <p style={{ ...textStyle, fontSize: "0.9rem", marginLeft: "1rem" }}>{details.effects}</p>}
            </div>
          ))}
        </ReportSection>
      )}

      <ReportSection title="Impact on Life Areas" icon="🎯">
        <InfoRow label="Career" value={reportData?.careerImpact} />
        <InfoRow label="Finance" value={reportData?.financeImpact} />
        <InfoRow label="Relationships" value={reportData?.relationshipImpact} />
        <InfoRow label="Health" value={reportData?.healthImpact} />
      </ReportSection>

      {reportData?.importantDates && (
        <ReportSection title="Important Dates" icon="📅">
          <p style={textStyle}>{reportData.importantDates}</p>
        </ReportSection>
      )}

      {reportData?.remedies && (
        <ReportSection title="Remedies" icon="🙏">
          <p style={textStyle}>{reportData.remedies}</p>
        </ReportSection>
      )}
    </div>
  );
};

// ⭐ UNIVERSAL ZODIAC REPORT (Format A Compatible)
const ZodiacReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  // Auto-detect zodiac from any API structure
  const zodiac =
    report?.zodiac ||
    report?.zodiacSign ||
    report?.sunSign ||
    report?.sign ||
    "-";

  const sunSign =
    report?.sunSign ||
    report?.sun ||
    "-";

  const moonSign =
    report?.moonSign ||
    report?.moon ||
    "-";

  const risingSign =
    report?.risingSign ||
    report?.ascendant ||
    report?.lagna ||
    "-";

  const rulingPlanet =
    report?.rulingPlanet ||
    report?.lord ||
    "-";

  return (
    <div>

      {/* BASIC DETAILS */}
      <ReportSection title="Basic Information" icon="👤">
        <InfoRow label="Name" value={formData.fullName || report?.name || "-"} />
        <InfoRow label="Date of Birth" value={formData.dob || report?.dateOfBirth || "-"} />
        <InfoRow label="Time of Birth" value={formData.timeSlot || report?.timeOfBirth || "-"} />
        <InfoRow label="Place of Birth" value={formData.birthPlace || report?.placeOfBirth || "-"} />
      </ReportSection>

      {/* MAIN ZODIAC SIGN */}
      <ReportSection title="Zodiac Sign" icon="♓">
        <InfoRow label="Zodiac Sign" value={zodiac} />
      </ReportSection>

      {/* PERSONALITY TEXTS */}
      {report?.sunSignTraits && (
        <ReportSection title="Sun Sign Traits" icon="☀️">
          <p style={textStyle}>{report.sunSignTraits}</p>
        </ReportSection>
      )}

      {report?.moonSignTraits && (
        <ReportSection title="Moon Sign Traits" icon="🌙">
          <p style={textStyle}>{report.moonSignTraits}</p>
        </ReportSection>
      )}

      {report?.risingSignTraits && (
        <ReportSection title="Rising Sign Traits" icon="⬆️">
          <p style={textStyle}>{report.risingSignTraits}</p>
        </ReportSection>
      )}

      {/* COMPATIBILITY */}
      {report?.compatibility && (
        <ReportSection title="Compatibility" icon="💕">
          <p style={textStyle}>{report.compatibility}</p>
        </ReportSection>
      )}
    </div>
  );
};

// 11. DAILY PREDICTION REPORT
const DailyPredictionReport = ({ data, formData }) => {
  const report = data?.data || data || {};

  return (
    <div>

      {/* TODAY'S OVERVIEW */}
      <ReportSection title="Today's Overview" icon="📅">
        <InfoRow label="Date" value={formData.date} />
        <InfoRow label="Zodiac Sign" value={formData.zodiacSign} />
        <InfoRow label="Lucky Number" value={report?.luckyNumber || "-"} />
        <InfoRow label="Lucky Color" value={report?.luckyColor || "-"} />
        <InfoRow label="Mood" value={report?.mood || "-"} />
      </ReportSection>

      {report?.dailyGuidance && (
        <ReportSection title="Daily Guidance" icon="✨">
          <p style={textStyle}>{report.dailyGuidance}</p>
        </ReportSection>
      )}

      {report?.love && (
        <ReportSection title="Love & Relationships" icon="❤️">
          <p style={textStyle}>{report.love}</p>
        </ReportSection>
      )}

      {report?.career && (
        <ReportSection title="Career & Finance" icon="💼">
          <p style={textStyle}>{report.career}</p>
        </ReportSection>
      )}

      {report?.health && (
        <ReportSection title="Health & Wellness" icon="🏥">
          <p style={textStyle}>{report.health}</p>
        </ReportSection>
      )}

      {report?.tips && (
        <ReportSection title="Tips for the Day" icon="💡">
          <p style={textStyle}>{report.tips}</p>
        </ReportSection>
      )}
    </div>
  );
};


// 12. HOROSCOPE REPORT
const HoroscopeReport = ({ data, formData }) => {
  const reportData = data?.data || data;
  return (
    <div>
      <ReportSection title="Horoscope Overview" icon="🔮">
        <InfoRow label="Name" value={formData.fullName} />
        <InfoRow label="Date of Birth" value={formData.dob} />
        <InfoRow label="Zodiac Sign" value={reportData?.zodiacSign} />
      </ReportSection>

      {reportData?.monthlyPrediction && (
        <ReportSection title="This Month's Prediction" icon="📆">
          <p style={textStyle}>{reportData.monthlyPrediction}</p>
        </ReportSection>
      )}

      {reportData?.love && (
        <ReportSection title="Love & Romance" icon="💕">
          <p style={textStyle}>{reportData.love}</p>
        </ReportSection>
      )}

      {reportData?.career && (
        <ReportSection title="Career & Money" icon="💰">
          <p style={textStyle}>{reportData.career}</p>
        </ReportSection>
      )}

      {reportData?.health && (
        <ReportSection title="Health & Wellness" icon="🧘">
          <p style={textStyle}>{reportData.health}</p>
        </ReportSection>
      )}

      <ReportSection title="Lucky Factors" icon="🍀">
        <InfoRow label="Lucky Day" value={reportData?.luckyDay} />
        <InfoRow label="Lucky Number" value={reportData?.luckyNumber} />
        <InfoRow label="Lucky Color" value={reportData?.luckyColor} />
      </ReportSection>

      {reportData?.advice && (
        <ReportSection title="Advice" icon="🌟">
          <p style={textStyle}>{reportData.advice}</p>
        </ReportSection>
      )}
    </div>
  );
};


// GENERIC FALLBACK REPORT
const GenericReport = ({ data, formData }) => {
  const reportData = data?.data || data;
  return (
    <div>
      <ReportSection title="Report Details" icon="📄">
        {Object.entries(reportData || {})
          .filter(([key, value]) => value && value !== "N/A")
          .map(([key, value]) => (
            <InfoRow
              key={key}
              label={key.replace(/([A-Z])/g, " $1").trim()}
              value={typeof value === "object" ? JSON.stringify(value) : String(value).substring(0, 200)}
            />
          ))}
      </ReportSection>
    </div>
  );
};

// ============ STYLES (Same visual tone as Astrology.jsx) ============

const formContainerStyle = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "2.2rem 2rem",
  maxWidth: "700px",
  margin: "0 auto 2.5rem",
  textAlign: "center",
  border: "1px solid rgba(255,255,255,0.15)",
};

const resultContainerStyle = {
  background: "rgba(255,255,255,0.08)",
  borderRadius: "20px",
  padding: "2.5rem 2rem",
  maxWidth: "900px",
  margin: "2.5rem auto 0",
  border: "1px solid rgba(255,255,255,0.15)",
};

const titleStyle = {
  background: "linear-gradient(90deg, #ff00ff, #00ffff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: "1.2rem",
  fontSize: "2rem",
  fontWeight: 700,
};

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "10px",
  border: "1px solid rgba(255,255,255,0.25)",
  background: "rgba(255,255,255,0.06)",
  color: "#fff",
  fontSize: "1rem",
  outline: "none",
  transition: "0.25s",
};

const submitBtnStyle = {
  marginTop: "1.8rem",
  padding: "14px 32px",
  background: "linear-gradient(90deg, #ff00ff, #00ffff)",
  border: "none",
  borderRadius: "30px",
  color: "#fff",
  fontWeight: 600,
  cursor: "pointer",
  fontSize: "1.03rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
};

const backBtnStyle = {
  marginTop: "1.4rem",
  padding: "10px 26px",
  background: "rgba(255,255,255,0.08)",
  borderRadius: "24px",
  border: "1px solid rgba(255,255,255,0.22)",
  color: "#fff",
  fontWeight: 500,
  cursor: "pointer",
};

const sectionStyle = {
  background: "rgba(255,255,255,0.05)",
  borderRadius: "15px",
  padding: "1.5rem",
  marginBottom: "1.5rem",
  border: "1px solid rgba(255,255,255,0.12)",
};

const sectionTitleStyle = {
  fontSize: "1.35rem",
  fontWeight: 600,
  color: "#00ffff",
  marginBottom: "1rem",
  display: "flex",
  alignItems: "center",
};

const sectionContentStyle = {
  fontSize: "1rem",
  lineHeight: "1.8",
};

const infoRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0.7rem 0",
  borderBottom: "1px solid rgba(255,255,255,0.06)",
};

const labelStyle = {
  color: "#aaa",
  fontWeight: 500,
};

const valueStyle = {
  color: "#fff",
  fontWeight: 600,
  textAlign: "right",
  maxWidth: "60%",
  wordBreak: "break-word",
};

const textStyle = {
  color: "#ddd",
  lineHeight: "1.85",
  marginBottom: "0.6rem",
};

export default FreeCalculatorPage;
