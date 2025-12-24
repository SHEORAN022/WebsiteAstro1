// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import "./Astrology.css";
// import AstrologyImage from "../../assets/1Astrology_Final.webp";


// import Sidebar from "../../components/Sidebar";



// const Astrology = () => {const [sidebarOpen, setSidebarOpen] = useState(false);
// const [faqs, setFaqs] = useState([]);
// const [openFaq, setOpenFaq] = useState(null);
// // const [showBookingForm, setShowBookingForm] = useState(false);
// // const [selectedService, setSelectedService] = useState(null);
// const [step, setStep] = useState(1);
// const [selectedService, setSelectedService] = useState(null);
// const [loading, setLoading] = useState(false);

// const [formData, setFormData] = useState({
//   fullName: "",
//   email: "",
//   phone: "",
//   question: "",
// });



// const [services, setServices] = useState([]);
// const [loadingServices, setLoadingServices] = useState(true);

// useEffect(() => {
//   fetch("https://astrobackend-5sr6.onrender.com/api/astrology-services/all")
//     .then(res => res.json())
//     .then(data => {
//       const active = data.filter(s => s.status === "active");
//       setServices(active);
//     })
//     .catch(err => console.error("Astrology Services error:", err))
//     .finally(() => setLoadingServices(false));
// }, []);

//     useEffect(() => {

//       fetch("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Astrology")
//     .then(res => res.json())
//     .then(data => {
//       const activeFaqs = data.faqs.filter(f => f.status === "active");
//       setFaqs(activeFaqs);
//     })
//     .catch(err => console.error("Astrology FAQ error:", err));
//     const starfield = document.getElementById("fc-starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 150; i++) {
//         const star = document.createElement("div");
//         star.className = "fc-star";
//         star.style.top = `${Math.random() * 100}%`;
//         star.style.left = `${Math.random() * 100}%`;

//         const size = Math.random() * 2 + 1;
//         star.style.width = `${size}px`;
//         star.style.height = `${size}px`;

//         star.style.animationDuration = `${Math.random() * 3 + 2}s`;
//         star.style.animationDelay = `${Math.random() * 2}s`;

//         starfield.appendChild(star);
//       }
//     }
//   }, []);

//   const navigate = useNavigate();
//   const handlePayment = async () => {
//   if (!window.Razorpay) {
//     alert("Payment system loading...");
//     return;
//   }

//   try {
//     setLoading(true);

//     const res = await fetch(
//       "https://astrobackend-5sr6.onrender.com/api/payments/create-order",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           amount: selectedService.price,
//           userId: "672af93b9cf24a87a0c5f8de",
//         }),
//       }
//     );

//     const data = await res.json();

//     const options = {
//       key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//       amount: data.order.amount,
//       currency: "INR",
//       name: "THE FIFTH CUSP",
//       description: selectedService.title,
//       order_id: data.order.id,
//       handler: () => setStep(4),
//       prefill: {
//         name: formData.fullName,
//         email: formData.email,
//         contact: formData.phone,
//       },
//       theme: { color: "#ff00ff" },
//     };

//     new window.Razorpay(options).open();
//     setLoading(false);
//   } catch (err) {
//     alert("Payment failed");
//     setLoading(false);
//   }
// };

 

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "radial-gradient(circle at top, #0a0018, #1e003f)",
//         color: "#fff",
//         zIndex: 10,
//         fontFamily: "'Poppins', sans-serif",
//         overflowX: "hidden",
//       }}
//     >
//       {/* SIDEBAR COMPONENT */}
//       {/* <Sidebar /> */}
//       <Sidebar
//   sidebarOpen={sidebarOpen}
//   setSidebarOpen={setSidebarOpen}
// />

      
//       {/* ⭐ STARFIELD BACKGROUND */}
//       <div id="fc-starfield" className="fc-starfield"></div>

//       {/* 🌌 FLOATING ORBS */}
//       <div className="fc-floating-orbs">
//         <div className="fc-orb orb-1"></div>
//         <div className="fc-orb orb-2"></div>
//         <div className="fc-orb orb-3"></div>
//       </div>

//       {/* 🔮 ASTROLOGY HERO SECTION */}
//      <div className="astro-section">

//   {/* HEADING */}
//   <div className="astro-section">

//   <div className="astro-inner">

//     {/* LEFT — IMAGE */}
//     <div className="astro-image">
//      <div className="astro-image">
//   <img
//     src={AstrologyImage}
//     alt="Astrology Cosmic Energy"
//   />
// </div>

//     </div>

//     {/* RIGHT — TEXT */}
//     <div className="astro-content">
//       <h1 className="astro-heading">ASTROLOGY + कर्म प्रधान है</h1>

//       {/* <h2 className="astro-karm">कर्म प्रधान है</h2> */}

//       <p className="astro-description">
//         To know your chart is to know your direction — your purpose.
//         It is to take charge and bring it all to fruition.
//         It is not to wait and react, nor to be a spectator to your own life.
//         It is to induce <strong>Karam</strong>.
//       </p>
//     </div>

//   </div>
// </div>


// </div>


//       {/* HEADER */}
//       <div style={{ textAlign: "center", padding: "5rem 1.5rem 2rem" }}>
//         <h1 style={{ fontSize: "2.5rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
//            {/* Astro Calculators */}
//         </h1>
//         {/* <p style={{ fontSize: "1.1rem", color: "#ccc" }}>Unlock astrological insights anytime, anywhere</p> */}
//       </div>

//       {/* ========== ASTROLOGY INTRO SECTION ========== */}
//       <div style={{ padding: "2rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}>

//         <h2
//           style={{
//             fontSize: "2.8rem",
//             fontWeight: "700",
//             background: "linear-gradient(90deg,#ff00ff,#00eaff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "white",
//             marginBottom: "1.5rem",
//             letterSpacing: "0.6px",
//             textAlign: "left",
//              textAlign: "justify",
//           }}
//         >
//           ASTROLOGY & KARAM: DECODE YOUR COSMIC INTELLIGENCE
//         </h2>

//         {/* ================= SECTION 2 : ASTROLOGY & KARAM ================= */}

//         <h2 style={{ color: "WHITE", fontSize: "1.9rem", marginBottom: "1rem" }}>
//           ASTROLOGY & KARAM (JYOTISHA)
//         </h2>

//         <p style={{ marginBottom: "1.4rem", color: "#dcdcdc", lineHeight: "1.85", fontSize: "1.12rem",  textAlign: "justify",}}>
//           <strong>Jyotisha is not an instrument of fear.</strong> Our astrology does not burden you with
//           predictions that create anxiety or limitations. Instead, we illuminate the
//           <strong> possibilities hidden within your chart</strong> and guide you toward
//           clear, logical, and practical pathways aligned with what you seek.
//         </p>

//         <p style={{ marginBottom: "1.4rem", color: "#dcdcdc", lineHeight: "1.85" , textAlign: "justify", }}>
//           No chart is doomed. Every kundli is simply <strong>fine‑tuned for a specific purpose</strong>.
//           There is always a <em>how</em>, always a <em>when</em>, and almost never a "you can't"—because
//           our approach integrates modern psychology, behavioral science, and conscious awareness
//           with the timeless language of the cosmos in today's Yuga.
//         </p>

//         <p style={{ marginBottom: "2rem", color: "#e8e8e8", fontStyle: "italic" }}>
//           धर्म को सर का ताज़ बनाओ, पैरों की बेड़ी नहीं |
//         </p>

//         {/* JYOTISHA SYSTEMS */}
//         <h3 style={{ color: "WHITE", fontSize: "1.45rem", marginBottom: "1rem" }}>
//           OUR JYOTISHA FOUNDATION
//         </h3>

//         <p style={{ marginBottom: "1rem", color: "#dcdcdc", lineHeight: "1.85" }}>
//           Our guidance flows purely from <strong>Vedic Jyotisha</strong>, integrating multiple
//           classical systems to ensure depth, accuracy, and clarity.
//         </p>

//         <ul style={{ marginLeft: "1.5rem", marginBottom: "2rem", color: "#e8e8e8" }}>
//           <li> Parashari Astrology – Core planetary principles & yogas</li>
//           <li> Krishnamurti Paddhati (KP) – Precise event‑level predictions</li>
//           <li> Jaimini Astrology – Soul psychology through Karakas & Chara Dashas</li>
//           <li> Nadi Astrology – Pattern recognition & karmic timelines</li>
//         </ul>

//         <p style={{ marginBottom: "2rem", color: "#dcdcdc", lineHeight: "1.85" }}>
//           For predictions, we primarily use <strong>Vimshottari Dasha</strong> combined with
//           <strong> KP Astrology</strong>, allowing us to answer niche, real‑life questions with
//           holistic and meaningful insight.
//         </p>

//         {/* ASTROLOGY + VASTU */}
//         <h3 style={{ color: "WHITE", fontSize: "1.45rem", marginBottom: "1rem" , textAlign: "justify",  }}>
//           ASTROLOGY, VASTU & BALANCE
//         </h3>

//         <p style={{ marginBottom: "2rem", color: "#dcdcdc", lineHeight: "1.85" }}>
//           Astrology is <strong>50% dynamic</strong>—constantly shifting with time, transits, and
//           dashas. The other <strong>50% is Vastu</strong>—structural, stable, and largely static.
//           Together, they create harmony between your inner rhythm and your external environment.
//         </p>

//         {/* KARAM */}
//         <h3 style={{ color: "WHITE", fontSize: "1.6rem", marginBottom: "1rem" }}>
//           KARAM — "कर्म प्रधान है"
//         </h3>

//         <p style={{ marginBottom: "1.2rem", color: "#dcdcdc", lineHeight: "1.85" , textAlign: "justify",  }}>
//           Your <strong>Kundli gives you the script</strong>. <strong>Karam</strong> is how you choose
//           to act within that script.
//         </p>

//         <p style={{ marginBottom: "1.2rem", color: "#dcdcdc", lineHeight: "1.85"  , textAlign: "justify", }}>
//           In its purest meaning, Karam is simply <strong>action</strong>—not good or bad, but action
//           and the energetic imprint it creates.
//         </p>

//         <ul style={{ marginLeft: "1.5rem", marginBottom: "2rem", color: "#e8e8e8" , textAlign: "justify",  }}>
//           <li>Action → Energy → Result → New Action</li>
//           <li>The cycle repeats—past, present, and future</li>
//           <li>Karma is not only what you did, but what you are doing now</li>
//         </ul>

//         <p style={{ marginBottom: "1.4rem", color: "#dcdcdc", lineHeight: "1.85" }}>
//           This is why <strong>Shani</strong>, the karmic planet, does not punish. He simply delivers
//           the outcomes of actions taken—or avoided. Since <strong>Karam = Action</strong>, the
//           remedy for karma is also <strong>action</strong>.
//         </p>

//         <p style={{ marginBottom: "2rem", color: "#dcdcdc", lineHeight: "1.85" }}>
//           Your <strong>Rahu‑Ketu axis</strong> reveals both your karmic baggage and the precise path
//           to resolve it. The axis is benevolent—it shows not only the problem, but the way to
//           conclude those karmas through conscious action.
//         </p>

//         {/* REMEDIES */}
//         <h3 style={{ color: "WHITE", fontSize: "1.45rem", marginBottom: "1rem" }}>
//           REMEDIES — ACTION AS INNER RITUAL
//         </h3>

//         <p style={{ marginBottom: "1.2rem", color: "#dcdcdc", lineHeight: "1.85" }}>
//           Our remedies are not burdensome rituals. They are designed as
//           <strong> sanctuaries for the soul</strong>—simple, intentional actions that feel
//           natural, personal, and grounding.
//         </p>

//         <p style={{ marginBottom: "1.2rem", color: "#dcdcdc", lineHeight: "1.85" }}>
//           You don't need elaborate ceremonies or distant travel. You only need
//           <strong> sincerity, presence, and devotion</strong>. Each remedy becomes an organic
//           part of your life—something you look forward to, something that feels like
//           returning to yourself.
//         </p>

//         <p style={{ marginBottom: "0", color: "#e8e8e8", lineHeight: "1.85" }}>
//           The magic unfolds when the remedy is performed from within—with intention,
//           unshakable faith, curiosity, and a quiet zest for transformation.
//         </p>

//       </div>

    

// {/* ================= ASTROLOGY SERVICES ================= */}
// <section style={{ padding: "4rem 2rem" }}>
//   <h2
//     style={{
//       textAlign: "center",
//       fontSize: "2.4rem",
//       marginBottom: "1rem",
//       background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//     }}
//   >
//     SERVICES
//   </h2>

//   <p
//     style={{
//       textAlign: "center",
//       maxWidth: 650,
//       margin: "0 auto 3rem",
//       color: "#ccc",
//       lineHeight: 1.7,
//     }}
//   >
//     Choose a focused astrological service designed to decode,
//     align, and activate your karmic path.
//   </p>

//   {loadingServices ? (
//     <p style={{ textAlign: "center", color: "#aaa" }}>
//       Loading services...
//     </p>
//   ) : services.length === 0 ? (
//     <p style={{ textAlign: "center", color: "#aaa" }}>
//       No services available right now.
//     </p>
//   ) : (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
//         gap: "2rem",
//         maxWidth: 300,
//         margin: "0 auto",
//       }}
//     >
//       {services.map((service) => (
//         <div
//           key={service._id}
//           style={{
//             background: "rgba(255,255,255,0.08)",
//             borderRadius: 22,
//             padding: "1.8rem 1.5rem",
//             border: "1px solid rgba(255,255,255,0.12)",
//             backdropFilter: "blur(18px)",
//             boxShadow: "0 0 35px rgba(255,0,255,0.25)",
//             transition: "all 0.4s ease",
//             display: "flex",
//             flexDirection: "column",
//             minHeight: "300px",
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.transform = "translateY(-8px)";
//             e.currentTarget.style.boxShadow =
//               "0 0 50px rgba(255,0,255,0.5)";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.transform = "translateY(0)";
//             e.currentTarget.style.boxShadow =
//               "0 0 35px rgba(255,0,255,0.25)";
//           }}
//         >
//           {/* TOP CONTENT */}
//           <div>
//             <h3
//               style={{
//                 fontSize: "1.25rem",
//                 marginBottom: "0.7rem",
//                 background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               {service.title}
//             </h3>

//             <p
//               style={{
//                 fontSize: "0.92rem",
//                 color: "#ddd",
//                 lineHeight: "1.65",
//                 marginBottom: "1.2rem",
//               }}
//             >
//               {service.description}
//             </p>
//           </div>

//           {/* PRICE */}
//           <div
//             style={{
//               fontSize: "1.05rem",
//               fontWeight: 600,
//               marginTop: "auto",
//               marginBottom: "1.2rem",
//               color: service.price === 0 ? "#00ffcc" : "#ff66cc",
//             }}
//           >
//             {service.price === 0 ? "FREE" : `₹${service.price}`}
//           </div>
//           <button
//   // onClick={() => {
//   //   setSelectedService(service);
//   //   setShowBookingForm(true);
//   // }}
//   onClick={() => {
//   setSelectedService(service);
//   setStep(2);
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }}

//   style={{
//     alignSelf: "center",
//     padding: "10px 26px",
//     borderRadius: 30,
//     border: "none",
//     background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//     color: "#fff",
//     fontWeight: 600,
//     cursor: "pointer",
//     marginTop: "auto",
//   }}
// >
//   Book Now
// </button>


//           {/* BUTTON */}
//           {/* ================= BOOKING MODAL ================= */}


//         </div>
//       ))}
//     </div>
//   )}
  
// </section>
// {step === 2 && (
//   <section className="form-section">
//     <div className="form-container">
//       <button
//         className="back-button"
//         onClick={() => setStep(1)}
//       >
//         ← Back
//       </button>

//       <h2 className="form-title">{selectedService.title}</h2>

//       <form
//         className="consultation-form"
//         onSubmit={(e) => {
//           e.preventDefault();
//           setStep(3);
//           window.scrollTo({ top: 0, behavior: "smooth" });
//         }}
//       >
//         <input
//           placeholder="Full Name"
//           required
//           value={formData.fullName}
//           onChange={(e) =>
//             setFormData({ ...formData, fullName: e.target.value })
//           }
//           style={inputStyle}
//         />

//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={formData.email}
//           onChange={(e) =>
//             setFormData({ ...formData, email: e.target.value })
//           }
//           style={inputStyle}
//         />

//         <input
//           placeholder="Phone"
//           required
//           value={formData.phone}
//           onChange={(e) =>
//             setFormData({ ...formData, phone: e.target.value })
//           }
//           style={inputStyle}
//         />

//         <textarea
//           placeholder="Your Question (optional)"
//           rows="4"
//           value={formData.question}
//           onChange={(e) =>
//             setFormData({ ...formData, question: e.target.value })
//           }
//           style={inputStyle}
//         />

//         <button type="submit" style={submitBtnStyle}>
//           Proceed to Payment →
//         </button>
//       </form>
//     </div>
//   </section>
// )}
// {step === 3 && (
//   <section className="form-section">
//     <div className="form-container">
//       <h2 className="form-title">Confirm & Pay</h2>

//       <p><b>Service:</b> {selectedService.title}</p>
//       <p><b>Amount:</b> ₹{selectedService.price}</p>

//       <button
//         style={submitBtnStyle}
//         disabled={loading}
//         onClick={handlePayment}
//       >
//         {loading ? "Processing..." : "Pay Securely →"}
//       </button>

//       <button
//         style={backBtnStyle}
//         onClick={() => setStep(2)}
//       >
//         ← Edit Details
//       </button>
//     </div>
//   </section>
// )}

// {step === 4 && (
//   <section className="form-section">
//     <div className="form-container">
//       <h2>Payment Successful 🎉</h2>
//       <p>Thank you for booking astrology consultation.</p>

//       <button
//         style={submitBtnStyle}
//         onClick={() => {
//           setStep(1);
//           setSelectedService(null);
//           setFormData({
//             fullName: "",
//             email: "",
//             phone: "",
//             question: "",
//           });
//         }}
//       >
//         Book Another Service →
//       </button>
//     </div>
//   </section>
// )}



// {/* ================= ASTROLOGY FAQs ================= */}
// <section style={{ padding: "4rem 2rem" }}>
//   <h2
//     style={{
//       textAlign: "center",
//       fontSize: "2.3rem",
//       marginBottom: "2rem",
//       background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//     }}
//   >
//      FAQs
//   </h2>

//   <div style={{ maxWidth: 900, margin: "0 auto" }}>
//     {faqs.length === 0 && (
//       <p style={{ textAlign: "center", color: "#aaa" }}>
//         No FAQs available right now.
//       </p>
//     )}

//     {faqs.map((faq, i) => (
//       <div
//         key={faq._id}
//         style={{
//           background: "rgba(255,255,255,0.06)",
//           borderRadius: 14,
//           marginBottom: 14,
//           border: "1px solid rgba(255,255,255,0.12)",
//           overflow: "hidden",
//         }}
//       >
//         <div
//           onClick={() => setOpenFaq(openFaq === i ? null : i)}
//           style={{
//             padding: "1.2rem 1.5rem",
//             cursor: "pointer",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <h4 style={{ margin: 0 }}>{faq.question}</h4>
//           <span style={{ fontSize: "1.4rem" }}>
//             {openFaq === i ? "−" : "+"}
//           </span>
//         </div>

//         {openFaq === i && (
//           <div
//             style={{
//               padding: "1.2rem 1.5rem",
//               borderTop: "1px solid rgba(255,255,255,0.1)",
//               color: "#ddd",
//               lineHeight: "1.7",
//             }}
//           >
//             {faq.answer}
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// </section>



//     </div>
//   );
// };

// // ============ REPORT COMPONENTS ============

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
//     <span style={valueStyle}>{value && value !== "N/A" ? value : "Not Provided"}</span>
//   </div>
// );

// // ⭐ UNIVERSAL & SAFE KUNDLI REPORT
// const KundliReport = ({ data, formData }) => {
//   const kundli = data?.kundli?.kundliData || data?.kundliData || data?.data || data || {};

//   return (
//     <div>

//       {/* BASIC DETAILS */}
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow label="Name" value={formData?.fullName || data?.name || "-"} />
//         <InfoRow label="Date of Birth" value={formData?.dob || data?.dateOfBirth || "-"} />
//         <InfoRow label="Time of Birth" value={formData?.timeSlot || data?.timeOfBirth || "-"} />
//         <InfoRow label="Place of Birth" value={formData?.birthPlace || data?.placeOfBirth || "-"} />
//       </ReportSection>

//       {/* ZODIAC DETAILS */}
//       {(kundli.sunSign || kundli.moonSign || kundli.ascendant || kundli.zodiac) && (
//         <ReportSection title="Zodiac Details" icon="🌞">
//           <InfoRow label="Sun Sign" value={kundli.sunSign || "-"} />
//           <InfoRow label="Moon Sign" value={kundli.moonSign || "-"} />
//           <InfoRow label="Ascendant (Lagna)" value={kundli.ascendant || "-"} />
//           <InfoRow label="Zodiac Sign" value={kundli.zodiac || "-"} />
//         </ReportSection>
//       )}

//       {/* NAKSHATRA */}
//       {(kundli.nakshatra || kundli.nakshatraLord) && (
//         <ReportSection title="Nakshatra Details" icon="✨">
//           <InfoRow label="Nakshatra" value={kundli.nakshatra || "-"} />
//           <InfoRow label="Nakshatra Lord" value={kundli.nakshatraLord || "-"} />
//         </ReportSection>
//       )}

//       {/* PLANETS */}
//       {kundli.planets && Object.keys(kundli.planets).length > 0 && (
//         <ReportSection title="Planetary Positions" icon="🪐">
//           {Object.entries(kundli.planets).map(([planet, details]) => (
//             <InfoRow
//               key={planet}
//               label={planet}
//               value={`${details?.sign || ""}  ${details?.degree ? details.degree + "°" : ""}`}
//             />
//           ))}
//         </ReportSection>
//       )}

//       {/* HOUSE DETAILS */}
//       {kundli.houses && Object.keys(kundli.houses).length > 0 && (
//         <ReportSection title="House Details" icon="🏠">
//           {Object.entries(kundli.houses).map(([house, sign]) => (
//             <InfoRow key={house} label={`House ${house}`} value={sign || "-"} />
//           ))}
//         </ReportSection>
//       )}

//       {/* MANGAL DOSHA */}
//       {kundli.mangalDosha && (
//         <ReportSection title="Mangal Dosha" icon="🔥">
//           <InfoRow
//             label="Status"
//             value={kundli.mangalDosha.hasDosha ? "Present" : "Not Present"}
//           />
//           <InfoRow
//             label="Description"
//             value={kundli.mangalDosha.description || "-"}
//           />
//         </ReportSection>
//       )}

//       {/* YOGAS */}
//       {kundli.yogas?.length > 0 && (
//         <ReportSection title="Yogas in Kundli" icon="🔯">
//           {kundli.yogas.map((y, i) => (
//             <InfoRow key={i} label={y.name} value={y.description} />
//           ))}
//         </ReportSection>
//       )}

//       {/* NAVAMSA (if exists) */}
//       {kundli.navaamsas && (
//         <ReportSection title="Navamsa Chart" icon="🌙">
//           {Object.entries(kundli.navaamsas).map(([key, val]) => (
//             <InfoRow key={key} label={key} value={val} />
//           ))}
//         </ReportSection>
//       )}

//       {/* DESCRIPTION */}
//       {kundli.description && (
//         <ReportSection title="Summary" icon="📝">
//           <InfoRow label="Details" value={kundli.description} />
//         </ReportSection>
//       )}

//     </div>
//   );
// };


// // 2. NUMEROLOGY REPORT
// const NumerologyReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   return (
//     <div>

//       {/* BASIC INFO */}
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow label="Name" value={formData?.fullName || report?.name || "-"} />
//         <InfoRow label="Date of Birth" value={formData?.dob || report?.dateOfBirth || "-"} />
//       </ReportSection>

//       {/* CORE NUMBERS */}
//       <ReportSection title="Core Numbers" icon="🔢">
//         <InfoRow label="Life Path Number" value={report?.lifePathNumber || "-"} />
//         <InfoRow label="Destiny Number" value={report?.destinyNumber || "-"} />
//         <InfoRow label="Soul Urge Number" value={report?.soulUrgeNumber || "-"} />
//         <InfoRow label="Personality Number" value={report?.personalityNumber || "-"} />
//       </ReportSection>

//       {/* LIFE PATH INTERPRETATION */}
//       {report?.lifePathInterpretation && (
//         <ReportSection title="Life Path Interpretation" icon="">
//           <p style={textStyle}>{report.lifePathInterpretation}</p>
//         </ReportSection>
//       )}

//       {/* PERSONALITY DESCRIPTION */}
//       {report?.description && (
//         <ReportSection title="Overall Personality" icon="">
//           <p style={textStyle}>{report.description}</p>
//         </ReportSection>
//       )}

//       {/* STRENGTHS */}
//       {report?.strengths && (
//         <ReportSection title="Strengths" icon="💪">
//           <p style={textStyle}>{report.strengths}</p>
//         </ReportSection>
//       )}

//       {/* WEAKNESSES */}
//       {report?.weaknesses && (
//         <ReportSection title="Weaknesses" icon="⚠️">
//           <p style={textStyle}>{report.weaknesses}</p>
//         </ReportSection>
//       )}

//       {/* LUCKY NUMBERS */}
//       {report?.luckyNumbers && (
//         <ReportSection title="Lucky Numbers" icon="🍀">
//           <p style={textStyle}>
//             {Array.isArray(report.luckyNumbers)
//               ? report.luckyNumbers.join(", ")
//               : report.luckyNumbers}
//           </p>
//         </ReportSection>
//       )}

//       {/* LUCKY COLOR */}
//       {report?.luckyColor && (
//         <ReportSection title="Lucky Color" icon="🎨">
//           <p style={textStyle}>{report.luckyColor}</p>
//         </ReportSection>
//       )}

//       {/* LUCKY DAYS */}
//       {report?.luckyDays && (
//         <ReportSection title="Lucky Days" icon="📅">
//           <p style={textStyle}>
//             {Array.isArray(report.luckyDays)
//               ? report.luckyDays.join(", ")
//               : report.luckyDays}
//           </p>
//         </ReportSection>
//       )}

//       {/* LUCKY DIRECTION */}
//       {report?.luckyDirection && (
//         <ReportSection title="Lucky Direction" icon="🧭">
//           <p style={textStyle}>{report.luckyDirection}</p>
//         </ReportSection>
//       )}

//     </div>
//   );
// };


// // ⭐ UNIVERSAL COMPATIBILITY REPORT
// const CompatibilityReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   const score = report?.score || report?.compatibilityScore || 0;
//   const percentage = Math.round((score / (report?.maxScore || 36)) * 100);

//   return (
//     <div>

//       {/* PERSONS INFO */}
//       <ReportSection title="Persons Information" icon="👥">
//         <h4 style={{ color: "#00ffff" }}>Person A</h4>
//         <InfoRow label="Name" value={formData?.fullNameA} />
//         <InfoRow label="Date of Birth" value={formData?.dobA} />
//         <InfoRow label="Time of Birth" value={formData?.timeSlotA} />
//         <InfoRow label="Place of Birth" value={formData?.birthPlaceA} />

//         <h4 style={{ color: "#ff66cc", marginTop: "1rem" }}>Person B</h4>
//         <InfoRow label="Name" value={formData?.fullNameB} />
//         <InfoRow label="Date of Birth" value={formData?.dobB} />
//         <InfoRow label="Time of Birth" value={formData?.timeSlotB} />
//         <InfoRow label="Place of Birth" value={formData?.birthPlaceB} />
//       </ReportSection>

//       {/* OVERALL SCORE */}
//       <ReportSection title="Overall Compatibility" icon="💑">
//         <div style={{ textAlign: "center", margin: "2rem 0" }}>
//           <div
//             style={{
//               fontSize: "3rem",
//               fontWeight: "bold",
//               background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             {percentage}%
//           </div>

//           <p style={textStyle}>{report?.message || report?.compatibilityLevel || "Compatibility Assessment"}</p>
//         </div>
//       </ReportSection>

//       {/* BOY DOSHA */}
//       {report?.boyDosha && (
//         <ReportSection title="Person A - Mangal Dosha" icon="🔥">
//           <InfoRow label="Has Dosha" value={report.boyDosha.hasDosha ? "Yes" : "No"} />
//           <InfoRow label="Type" value={report.boyDosha.dosha_type || "N/A"} />
//           <InfoRow label="Exception" value={report.boyDosha.has_exception ? "Yes" : "No"} />
//           <InfoRow label="Description" value={report.boyDosha.description} />
//         </ReportSection>
//       )}

//       {/* GIRL DOSHA */}
//       {report?.girlDosha && (
//         <ReportSection title="Person B - Mangal Dosha" icon="🔥">
//           <InfoRow label="Has Dosha" value={report.girlDosha.hasDosha ? "Yes" : "No"} />
//           <InfoRow label="Type" value={report.girlDosha.dosha_type || "N/A"} />
//           <InfoRow label="Exception" value={report.girlDosha.has_exception ? "Yes" : "No"} />
//           <InfoRow label="Description" value={report.girlDosha.description} />
//         </ReportSection>
//       )}

//       {/* ASHTA KOOT MATCHING */}
//       {Array.isArray(report.kutas) && report.kutas.length > 0 && (
//         <ReportSection title="Ashta Koota Matching" icon="🔯">
//           {report.kutas.map((k, i) => (
//             <div key={i} style={{ marginBottom: "1rem", padding: "1rem", background: "rgba(255,255,255,0.06)", borderRadius: "10px" }}>
//               <InfoRow label="Koot" value={k.name} />
//               <InfoRow label="Points" value={`${k.obtained_points}/${k.maximum_points}`} />
//               <InfoRow label="Person A (Boy)" value={k.boy_koot} />
//               <InfoRow label="Person B (Girl)" value={k.girl_koot} />
//               <p style={{ ...textStyle, marginTop: "0.5rem" }}>{k.description}</p>
//             </div>
//           ))}
//         </ReportSection>
//       )}

//       {/* LOVE COMPATIBILITY */}
//       {report?.loveCompatibility && (
//         <ReportSection title="Love & Romance" icon="❤️">
//           <p style={textStyle}>{report.loveCompatibility}</p>
//         </ReportSection>
//       )}

//       {/* COMMUNICATION */}
//       {report?.communication && (
//         <ReportSection title="Communication" icon="💬">
//           <p style={textStyle}>{report.communication}</p>
//         </ReportSection>
//       )}

//       {/* EMOTIONAL CONNECTION */}
//       {report?.emotionalConnection && (
//         <ReportSection title="Emotional Connection" icon="🧡">
//           <p style={textStyle}>{report.emotionalConnection}</p>
//         </ReportSection>
//       )}

//       {/* LONG TERM POTENTIAL */}
//       {report?.longTermPotential && (
//         <ReportSection title="Long-Term Potential" icon="🔮">
//           <p style={textStyle}>{report.longTermPotential}</p>
//         </ReportSection>
//       )}

//       {/* RECOMMENDATIONS */}
//       {report?.recommendations && (
//         <ReportSection title="Recommendations" icon="💡">
//           <p style={textStyle}>{report.recommendations}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };


// // ⭐ UNIVERSAL GEMSTONE REPORT
// const GemstoneReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   return (
//     <div>

//       {/* BASIC INFO */}
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow label="Name" value={formData?.name || report?.name || "-"} />
//         <InfoRow label="Date of Birth" value={formData?.dob || report?.dateOfBirth || "-"} />
//         <InfoRow label="Zodiac Sign" value={formData?.zodiacSign || report?.zodiacSign || "-"} />
//       </ReportSection>

//       {/* PRIMARY GEMSTONE */}
//       <ReportSection title="Primary Gemstone" icon="💎">
//         <InfoRow label="Recommended Stone" value={report?.primaryGemstone || report?.gemstone || "-"} />
//       </ReportSection>

//       {/* BENEFITS */}
//       {report?.benefits && (
//         <ReportSection title="Benefits" icon="✨">
//           <p style={textStyle}>{report.benefits}</p>
//         </ReportSection>
//       )}

//       {/* ALTERNATIVE GEMSTONES */}
//       {report?.alternativeGemstones && (
//         <ReportSection title="Alternative Gemstones" icon="💠">
//           <p style={textStyle}>
//             {Array.isArray(report.alternativeGemstones)
//               ? report.alternativeGemstones.join(", ")
//               : report.alternativeGemstones}
//           </p>
//         </ReportSection>
//       )}

//       {/* PRECAUTIONS */}
//       {report?.precautions && (
//         <ReportSection title="Precautions" icon="⚠️">
//           <p style={textStyle}>{report.precautions}</p>
//         </ReportSection>
//       )}

//       {/* PRICE RANGE */}
//       {report?.price && (
//         <ReportSection title="Price Range" icon="💰">
//           <p style={textStyle}>{report.price}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// // ⭐ UNIVERSAL DASHA REPORT
// const DashaReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   return (
//     <div>

//       {/* BASIC INFO */}
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow label="Name" value={formData?.fullName || report?.name || "-"} />
//         <InfoRow label="Date of Birth" value={formData?.dob || report?.dateOfBirth || "-"} />
//         <InfoRow label="Time of Birth" value={formData?.timeSlot || report?.timeOfBirth || "-"} />
//         <InfoRow label="Place of Birth" value={formData?.birthPlace || report?.placeOfBirth || "-"} />
//       </ReportSection>

//       {/* CURRENT DASHA */}
//       <ReportSection title="Current Dasha Period" icon="⏰">
//         <InfoRow label="Maha Dasha" value={report?.mahaDasha || report?.current?.mahaDasha || "-"} />
//         <InfoRow label="Antar Dasha" value={report?.antarDasha || report?.current?.antarDasha || "-"} />
//         <InfoRow label="Pratyantara Dasha" value={report?.pratyantaraDasha || report?.current?.pratyantarDasha || "-"} />
//         <InfoRow label="Start Date" value={report?.startDate || report?.current?.start || "-"} />
//         <InfoRow label="End Date" value={report?.endDate || report?.current?.end || "-"} />
//       </ReportSection>

//       {/* EFFECTS */}
//       {report?.effects && (
//         <ReportSection title="Current Period Effects" icon="🌟">
//           <p style={textStyle}>{report.effects}</p>
//         </ReportSection>
//       )}

//       {/* DETAILED EFFECTS OBJECT (Optional) */}
//       {report?.current?.effects && (
//         <ReportSection title="Detailed Effects" icon="✨">
//           {Object.entries(report.current.effects).map(([key, value], idx) => (
//             <InfoRow key={idx} label={key} value={value} />
//           ))}
//         </ReportSection>
//       )}

//       {/* UPCOMING DASHA LIST */}
//       {Array.isArray(report?.upcomingDashas) && report.upcomingDashas.length > 0 && (
//         <ReportSection title="Upcoming Dasha Periods" icon="📅">
//           {report.upcomingDashas.map((d, i) => (
//             <div
//               key={i}
//               style={{
//                 marginBottom: "1rem",
//                 padding: "0.75rem",
//                 background: "rgba(255,255,255,0.05)",
//                 borderRadius: "8px",
//               }}
//             >
//               <InfoRow label="Planet" value={d?.planet || "-"} />
//               <InfoRow label="Start Date" value={d?.startDate || "-"} />
//               <InfoRow label="End Date" value={d?.endDate || "-"} />
//             </div>
//           ))}
//         </ReportSection>
//       )}

//       {/* NESTED UPCOMING MAHADASHA → ANTARDASHA → PRATYANTAR */}
//       {report?.timeline && (
//         <ReportSection title="Detailed Dasha Timeline" icon="🕰️">
//           {Object.entries(report.timeline).map(([planet, details], idx) => (
//             <div
//               key={idx}
//               style={{
//                 padding: "0.8rem",
//                 marginBottom: "1rem",
//                 background: "rgba(255,255,255,0.06)",
//                 borderRadius: "8px",
//               }}
//             >
//               <h4 style={{ color: "#00ffff", marginBottom: "0.5rem" }}>{planet} Maha Dasha</h4>
//               <InfoRow label="Period" value={`${details.startDate} - ${details.endDate}`} />

//               {details?.antarDashas && (
//                 <div style={{ marginTop: "0.5rem" }}>
//                   {details.antarDashas.map((antar, x) => (
//                     <div
//                       key={x}
//                       style={{
//                         marginTop: "0.5rem",
//                         padding: "0.5rem",
//                         background: "rgba(255,255,255,0.04)",
//                         borderRadius: "6px",
//                       }}
//                     >
//                       <InfoRow label="Antar Dasha" value={antar.planet} />
//                       <InfoRow label="Period" value={`${antar.startDate} - ${antar.endDate}`} />
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </ReportSection>
//       )}

//       {/* RECOMMENDATIONS */}
//       {report?.recommendations && (
//         <ReportSection title="Recommendations" icon="💡">
//           <p style={textStyle}>{report.recommendations}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// // ⭐ UNIVERSAL MANGLIK REPORT
// const ManglikReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   // Detect Manglik from all API types
//   const isManglik =
//     report?.isManglik ||
//     report?.manglik ||
//     report?.hasDosha ||
//     report?.mangalDosha?.hasDosha ||
//     report?.dosha?.hasDosha ||
//     false;

//   const doshaData =
//     report?.mangalDosha ||
//     report?.dosha ||
//     report?.dosha_details ||
//     report;

//   return (
//     <div>

//       {/* BASIC INFO */}
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow label="Name" value={formData.fullName || report?.name || "-"} />
//         <InfoRow label="Date of Birth" value={formData.dob || report?.dateOfBirth || "-"} />
//         <InfoRow label="Time of Birth" value={formData.timeSlot || report?.timeOfBirth || "-"} />
//         <InfoRow label="Place of Birth" value={formData.birthPlace || report?.placeOfBirth || "-"} />
//       </ReportSection>

//       {/* MANGALIK STATUS */}
//       <ReportSection title="Manglik Status" icon="🔴">
//         <div style={{ textAlign: "center", margin: "2rem 0" }}>
//           <div
//             style={{
//               fontSize: "2.6rem",
//               fontWeight: "bold",
//               color: isManglik ? "#ff4444" : "#44ff44",
//             }}
//           >
//             {isManglik ? "✓ Yes, Manglik" : "✗ No, Not Manglik"}
//           </div>

//           {doshaData?.description && (
//             <p style={{ ...textStyle, marginTop: "1rem" }}>{doshaData.description}</p>
//           )}
//         </div>
//       </ReportSection>

//       {/* IF MANGALIK – SHOW DETAILS */}
//       {isManglik && (
//         <>
//           <ReportSection title="Manglik Dosha Details" icon="⚠️">
//             <InfoRow label="Mars House" value={doshaData?.house || doshaData?.marsHouse || "-"} />
//             <InfoRow label="Dosha Type" value={doshaData?.doshaType || doshaData?.dosha_type || "-"} />
//             <InfoRow label="Intensity" value={doshaData?.intensity || "-"} />
//             <InfoRow label="Affected Planet" value={doshaData?.planet || "Mars"} />
//             <InfoRow label="Has Exception" value={doshaData?.hasException ? "Yes" : "No"} />
//           </ReportSection>

//           {doshaData?.effects && (
//             <ReportSection title="Effects" icon="📊">
//               <p style={textStyle}>{doshaData.effects}</p>
//             </ReportSection>
//           )}

//           {doshaData?.remedies && (
//             <ReportSection title="Remedies" icon="🙏">
//               <p style={textStyle}>{doshaData.remedies}</p>
//             </ReportSection>
//           )}
//         </>
//       )}

//       {/* IF NOT MANGALIK */}
//       {!isManglik && (
//         <ReportSection title="Analysis" icon="✅">
//           <p style={textStyle}>No Manglik Dosha detected. Marriage compatibility is favourable.</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// // ⭐ UNIVERSAL NAKSHATRA REPORT
// const NakshatraReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   // Detect Nakshatra from any format
//   const nakshatra =
//     report?.nakshatra ||
//     report?.nakshatra_name ||
//     report?.nakshatraDetails?.nakshatra ||
//     report?.nakshatraDetails?.name ||
//     report?.star ||
//     "-";

//   const pada =
//     report?.pada ||
//     report?.nakshatraDetails?.pada ||
//     report?.quarter ||
//     "-";

//   const deity =
//     report?.deity ||
//     report?.nakshatraDetails?.deity ||
//     report?.rulingDeity ||
//     "-";

//   const rulingPlanet =
//     report?.rulingPlanet ||
//     report?.lord ||
//     report?.nakshatraDetails?.planet ||
//     "-";

//   const symbol =
//     report?.symbol ||
//     report?.nakshatraDetails?.symbol ||
//     "-";

//   const element =
//     report?.element ||
//     report?.nakshatraDetails?.element ||
//     "-";

//   return (
//     <div>

//       {/* BASIC INFO */}
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow label="Name" value={formData.fullName || report?.name || "-"} />
//         <InfoRow label="Date of Birth" value={formData.dob || report?.dateOfBirth || "-"} />
//         <InfoRow label="Time of Birth" value={formData.timeSlot || report?.timeOfBirth || "-"} />
//         <InfoRow label="Place of Birth" value={formData.birthPlace || report?.placeOfBirth || "-"} />
//       </ReportSection>

//       {/* NAKSHATRA MAIN DETAILS */}
//       <ReportSection title="Birth Nakshatra" icon="⭐">
//         <InfoRow label="Nakshatra" value={nakshatra} />
//       </ReportSection>

//       {/* PERSONALITY */}
//       {(report?.personality || report?.traits) && (
//         <ReportSection title="Personality Traits" icon="👤">
//           <p style={textStyle}>{report.personality || report.traits}</p>
//         </ReportSection>
//       )}

//       {/* CAREER */}
//       {(report?.career || report?.profession) && (
//         <ReportSection title="Career & Profession" icon="💼">
//           <p style={textStyle}>{report.career || report.profession}</p>
//         </ReportSection>
//       )}

//       {/* STRENGTHS */}
//       {report?.strengths && (
//         <ReportSection title="Strengths" icon="⚡">
//           <p style={textStyle}>{report.strengths}</p>
//         </ReportSection>
//       )}

//       {/* WEAKNESSES */}
//       {report?.weaknesses && (
//         <ReportSection title="Weaknesses" icon="⚠️">
//           <p style={textStyle}>{report.weaknesses}</p>
//         </ReportSection>
//       )}

//       {/* LUCKY ATTRIBUTES */}
//       {(report?.luckyAttributes || report?.lucky) && (
//         <ReportSection title="Lucky Attributes" icon="🍀">
//           <InfoRow
//             label="Lucky Color"
//             value={
//               report?.luckyAttributes?.color ||
//               report?.lucky?.color ||
//               "-"
//             }
//           />
//           <InfoRow
//             label="Lucky Number"
//             value={
//               report?.luckyAttributes?.number ||
//               report?.lucky?.number ||
//               "-"
//             }
//           />
//           <InfoRow
//             label="Lucky Day"
//             value={
//               report?.luckyAttributes?.day ||
//               report?.lucky?.day ||
//               "-"
//             }
//           />
//         </ReportSection>
//       )}

//     </div>
//   );
// };

// // ⭐ UNIVERSAL PLANETARY REPORT
// const PlanetaryReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   // Planet list from any format
//   const planets =
//     report?.planets ||
//     report?.planetPositions ||
//     report?.planetaryPositions ||
//     {};

//   return (
//     <div>

//       {/* BASIC INFO */}
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow label="Name" value={formData.fullName || report?.name || "-"} />
//         <InfoRow label="Date of Birth" value={formData.dob || report?.dateOfBirth || "-"} />
//         <InfoRow label="Time of Birth" value={formData.timeSlot || report?.timeOfBirth || "-"} />
//         <InfoRow label="Place of Birth" value={formData.birthPlace || report?.placeOfBirth || "-"} />
//       </ReportSection>

//       {/* PLANETARY POSITIONS */}
//       <ReportSection title="Planetary Positions" icon="🪐">
//         {Object.entries(planets).map(([planet, sign]) => (
//           <InfoRow key={planet} label={planet} value={sign || "-"} />
//         ))}
//       </ReportSection>

//     </div>
//   );
// };

// // 9. TRANSIT REPORT
// const TransitReport = ({ data, formData }) => {
//   const reportData = data?.data || data;
//   return (
//     <div>
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow label="Name" value={formData.fullName} />
//         <InfoRow label="Date of Birth" value={formData.dob} />
//       </ReportSection>

//       {reportData?.transits && Object.keys(reportData.transits).length > 0 && (
//         <ReportSection title="Current Planetary Transits" icon="🔄">
//           {Object.entries(reportData.transits).map(([planet, details]) => (
//             <div key={planet} style={{ marginBottom: "1rem" }}>
//               <InfoRow label={planet} value={`Currently in ${details?.sign || "N/A"}`} />
//               {details?.effects && <p style={{ ...textStyle, fontSize: "0.9rem", marginLeft: "1rem" }}>{details.effects}</p>}
//             </div>
//           ))}
//         </ReportSection>
//       )}

//       <ReportSection title="Impact on Life Areas" icon="🎯">
//         <InfoRow label="Career" value={reportData?.careerImpact} />
//         <InfoRow label="Finance" value={reportData?.financeImpact} />
//         <InfoRow label="Relationships" value={reportData?.relationshipImpact} />
//         <InfoRow label="Health" value={reportData?.healthImpact} />
//       </ReportSection>

//       {reportData?.importantDates && (
//         <ReportSection title="Important Dates" icon="📅">
//           <p style={textStyle}>{reportData.importantDates}</p>
//         </ReportSection>
//       )}

//       {reportData?.remedies && (
//         <ReportSection title="Remedies" icon="🙏">
//           <p style={textStyle}>{reportData.remedies}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// // ⭐ UNIVERSAL ZODIAC REPORT (Format A Compatible)
// const ZodiacReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   // Auto-detect zodiac from any API structure
//   const zodiac =
//     report?.zodiac ||
//     report?.zodiacSign ||
//     report?.sunSign ||
//     report?.sign ||
//     "-";

//   const sunSign =
//     report?.sunSign ||
//     report?.sun ||
//     "-";

//   const moonSign =
//     report?.moonSign ||
//     report?.moon ||
//     "-";

//   const risingSign =
//     report?.risingSign ||
//     report?.ascendant ||
//     report?.lagna ||
//     "-";

//   const rulingPlanet =
//     report?.rulingPlanet ||
//     report?.lord ||
//     "-";

//   return (
//     <div>

//       {/* BASIC DETAILS */}
//       <ReportSection title="Basic Information" icon="👤">
//         <InfoRow label="Name" value={formData.fullName || report?.name || "-"} />
//         <InfoRow label="Date of Birth" value={formData.dob || report?.dateOfBirth || "-"} />
//         <InfoRow label="Time of Birth" value={formData.timeSlot || report?.timeOfBirth || "-"} />
//         <InfoRow label="Place of Birth" value={formData.birthPlace || report?.placeOfBirth || "-"} />
//       </ReportSection>

//       {/* MAIN ZODIAC SIGN */}
//       <ReportSection title="Zodiac Sign" icon="♓">
//         <InfoRow label="Zodiac Sign" value={zodiac} />
//       </ReportSection>

//       {/* PERSONALITY TEXTS */}
//       {report?.sunSignTraits && (
//         <ReportSection title="Sun Sign Traits" icon="☀️">
//           <p style={textStyle}>{report.sunSignTraits}</p>
//         </ReportSection>
//       )}

//       {report?.moonSignTraits && (
//         <ReportSection title="Moon Sign Traits" icon="🌙">
//           <p style={textStyle}>{report.moonSignTraits}</p>
//         </ReportSection>
//       )}

//       {report?.risingSignTraits && (
//         <ReportSection title="Rising Sign Traits" icon="⬆️">
//           <p style={textStyle}>{report.risingSignTraits}</p>
//         </ReportSection>
//       )}

//       {/* COMPATIBILITY */}
//       {report?.compatibility && (
//         <ReportSection title="Compatibility" icon="💕">
//           <p style={textStyle}>{report.compatibility}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };

// // 11. DAILY PREDICTION REPORT
// const DailyPredictionReport = ({ data, formData }) => {
//   const report = data?.data || data || {};

//   return (
//     <div>

//       {/* TODAY'S OVERVIEW */}
//       <ReportSection title="Today's Overview" icon="📅">
//         <InfoRow label="Date" value={formData.date} />
//         <InfoRow label="Zodiac Sign" value={formData.zodiacSign} />
//         <InfoRow label="Lucky Number" value={report?.luckyNumber || "-"} />
//         <InfoRow label="Lucky Color" value={report?.luckyColor || "-"} />
//         <InfoRow label="Mood" value={report?.mood || "-"} />
//       </ReportSection>

//       {report?.dailyGuidance && (
//         <ReportSection title="Daily Guidance" icon="✨">
//           <p style={textStyle}>{report.dailyGuidance}</p>
//         </ReportSection>
//       )}

//       {report?.love && (
//         <ReportSection title="Love & Relationships" icon="❤️">
//           <p style={textStyle}>{report.love}</p>
//         </ReportSection>
//       )}

//       {report?.career && (
//         <ReportSection title="Career & Finance" icon="💼">
//           <p style={textStyle}>{report.career}</p>
//         </ReportSection>
//       )}

//       {report?.health && (
//         <ReportSection title="Health & Wellness" icon="🏥">
//           <p style={textStyle}>{report.health}</p>
//         </ReportSection>
//       )}

//       {report?.tips && (
//         <ReportSection title="Tips for the Day" icon="💡">
//           <p style={textStyle}>{report.tips}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };


// // 12. HOROSCOPE REPORT
// const HoroscopeReport = ({ data, formData }) => {
//   const reportData = data?.data || data;
//   return (
//     <div>
//       <ReportSection title="Horoscope Overview" icon="🔮">
//         <InfoRow label="Name" value={formData.fullName} />
//         <InfoRow label="Date of Birth" value={formData.dob} />
//         <InfoRow label="Zodiac Sign" value={reportData?.zodiacSign} />
//       </ReportSection>

//       {reportData?.monthlyPrediction && (
//         <ReportSection title="This Month's Prediction" icon="📆">
//           <p style={textStyle}>{reportData.monthlyPrediction}</p>
//         </ReportSection>
//       )}

//       {reportData?.love && (
//         <ReportSection title="Love & Romance" icon="💕">
//           <p style={textStyle}>{reportData.love}</p>
//         </ReportSection>
//       )}

//       {reportData?.career && (
//         <ReportSection title="Career & Money" icon="💰">
//           <p style={textStyle}>{reportData.career}</p>
//         </ReportSection>
//       )}

//       {reportData?.health && (
//         <ReportSection title="Health & Wellness" icon="🧘">
//           <p style={textStyle}>{reportData.health}</p>
//         </ReportSection>
//       )}

//       <ReportSection title="Lucky Factors" icon="🍀">
//         <InfoRow label="Lucky Day" value={reportData?.luckyDay} />
//         <InfoRow label="Lucky Number" value={reportData?.luckyNumber} />
//         <InfoRow label="Lucky Color" value={reportData?.luckyColor} />
//       </ReportSection>

//       {reportData?.advice && (
//         <ReportSection title="Advice" icon="🌟">
//           <p style={textStyle}>{reportData.advice}</p>
//         </ReportSection>
//       )}
//     </div>
//   );
// };


// // GENERIC FALLBACK REPORT
// const GenericReport = ({ data, formData }) => {
//   const reportData = data?.data || data;
//   return (
//     <div>
//       <ReportSection title="Report Details" icon="📄">
//         {Object.entries(reportData || {})
//           .filter(([key, value]) => value && value !== "N/A")
//           .map(([key, value]) => (
//             <InfoRow
//               key={key}
//               label={key.replace(/([A-Z])/g, " $1").trim()}
//               value={typeof value === "object" ? JSON.stringify(value) : String(value).substring(0, 200)}
//             />
//           ))}
//       </ReportSection>
//     </div>
//   );
// };

// // ============ STYLES ============
// const formContainerStyle = {
//   background: "rgba(255,255,255,0.08)",
//   borderRadius: "20px",
//   padding: "2.5rem 2rem",
//   maxWidth: "700px",
//   margin: "2rem auto",
//   textAlign: "center",
//   border: "1px solid rgba(255,255,255,0.1)",
// };

// const resultContainerStyle = {
//   background: "rgba(255,255,255,0.08)",
//   borderRadius: "20px",
//   padding: "2.5rem",
//   maxWidth: "900px",
//   margin: "2rem auto",
//   border: "1px solid rgba(255,255,255,0.1)",
// };

// const titleStyle = {
//   background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "transparent",
//   marginBottom: "1.5rem",
//   fontSize: "2rem",
//   fontWeight: "700",
// };

// const inputStyle = {
//   width: "100%",
//   padding: "12px 16px",
//   borderRadius: "10px",
//   border: "1px solid rgba(255,255,255,0.2)",
//   background: "rgba(255,255,255,0.05)",
//   color: "#fff",
//   fontSize: "1rem",
//   outline: "none",
//   transition: "0.3s",
//   marginBottom: "16px",
  
// };

// const submitBtnStyle = {
//   marginTop: "2rem",
//   padding: "14px 40px",
//   background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//   border: "none",
//   borderRadius: "30px",
//   color: "#fff",
//   fontWeight: 600,
//   cursor: "pointer",
//   fontSize: "1.05rem",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   gap: "8px",
//   margin: "2rem auto 1rem",
//   transition: "0.3s",
// };

// const backBtnStyle = {
//   background: "rgba(255,255,255,0.1)",
//   border: "1px solid rgba(255,255,255,0.2)",
//   color: "#fff",
//   padding: "10px 30px",
//   borderRadius: "25px",
//   fontWeight: 600,
//   cursor: "pointer",
//   marginTop: "1.5rem",
//   transition: "0.3s",
// };

// const sectionStyle = {
//   background: "rgba(255,255,255,0.05)",
//   borderRadius: "15px",
//   padding: "1.5rem",
//   marginBottom: "1.5rem",
//   border: "1px solid rgba(255,255,255,0.1)",
// };

// const sectionTitleStyle = {
//   fontSize: "1.4rem",
//   fontWeight: "600",
//   color: "#00ffff",
//   marginBottom: "1rem",
//   display: "flex",
//   alignItems: "center",
// };

// const sectionContentStyle = {
//   fontSize: "1rem",
//   lineHeight: "1.8",
// };

// const infoRowStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   padding: "0.75rem 0",
//   borderBottom: "1px solid rgba(255,255,255,0.05)",
// };

// const labelStyle = {
//   color: "#aaa",
//   fontWeight: "500",
// };

// const valueStyle = {
//   color: "#fff",
//   fontWeight: "600",
//   textAlign: "right",
//   maxWidth: "50%",
//   wordBreak: "break-word",
// };

// const textStyle = {
//   color: "#ddd",
//   lineHeight: "1.8",
//   marginBottom: "0.5rem",
// };


// export default Astrology;
































import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Astrology.css";
import AstrologyImage from "../../assets/1Astrology_Final.webp";
import Sidebar from "../../components/Sidebar";
import { ArrowRight, CheckCircle, Loader2, Zap, FileText } from "lucide-react";

const SERVICES_API = "https://astrobackend-5sr6.onrender.com/api/astrology-services";
const BOOKING_API = "https://astrobackend-5sr6.onrender.com/api/bookings";
const PAYMENTS_API = "https://astrobackend-5sr6.onrender.com/api/payments";

const Astrology = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef(null);
  
  const [services, setServices] = useState([]);
  const [loadingServices, setLoadingServices] = useState(false);
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  
  const [question, setQuestion] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [photoFile, setPhotoFile] = useState(null);
  
  const [processing, setProcessing] = useState(false);
  const [confirmationMsg, setConfirmationMsg] = useState("");
  const [pdfReady, setPdfReady] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  
  const bookingFormRef = useRef(null);
  
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?._id || "672af93b9cf24a87a0c5f8de";

  // RESPONSIVE
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // FETCH SERVICES
  useEffect(() => {
    fetchServices();
    fetchFAQs();
  }, []);

  const fetchServices = async () => {
    try {
      setLoadingServices(true);
      const res = await axios.get(`${SERVICES_API}/all`);
      if (Array.isArray(res.data?.services)) {
        setServices(res.data.services.filter(s => s.status === "active"));
      } else if (Array.isArray(res.data)) {
        setServices(res.data.filter(s => s.status === "active"));
      }
    } catch (err) {
      console.log("Service fetch error:", err);
    } finally {
      setLoadingServices(false);
    }
  };

  const fetchFAQs = async () => {
    try {
      const res = await axios.get("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Astrology");
      if (res.data?.success) {
        const activeFaqs = res.data.faqs.filter(f => f.status === "active");
        setFaqs(activeFaqs);
      }
    } catch (err) {
      console.error("Astrology FAQ fetch error:", err);
    }
  };

  // SELECT SERVICE
  const selectService = (service) => {
    if (!service) {
      alert("Service not found");
      return;
    }

    setSelectedService(service);
    setStep(1);
    
    setTimeout(() => {
      if (bookingFormRef.current) {
        bookingFormRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  // FORM SUBMIT
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !dob) {
      alert("Please fill required fields");
      return;
    }

    setStep(2);
  };

  // BOOKING BACKEND
  const createBookingOnBackend = async (paymentStatus = "pending", paymentInfo = {}) => {
    try {
      const form = new FormData();
      form.append("serviceKey", selectedService.key || selectedService._id || "");
      form.append("serviceTitle", selectedService.title || selectedService.name || "");
      form.append("name", name);
      form.append("email", email);
      form.append("dob", dob);
      form.append("phone", phone || "");
      form.append("question", question || "");
      form.append("details", details || "");
      form.append("paymentStatus", paymentStatus);
      form.append("userId", userId);
      
      if (paymentInfo && typeof paymentInfo === "object") {
        form.append("paymentInfo", JSON.stringify(paymentInfo));
      }
      if (photoFile) form.append("photo", photoFile);

      let bookingRes = null;
      try {
        bookingRes = await axios.post(`${BOOKING_API}/create`, form, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch (err) {
        try {
          bookingRes = await axios.post(`${SERVICES_API}/book`, form, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch (err2) {
          const payload = {
            serviceKey: selectedService.key || selectedService._id || "",
            serviceTitle: selectedService.title || selectedService.name || "",
            name,
            email,
            dob,
            phone,
            question,
            details,
            paymentStatus,
            userId,
            paymentInfo,
          };
          bookingRes = await axios.post(`${SERVICES_API}/create-booking`, payload).catch(() => null);
        }
      }

      return bookingRes?.data ?? null;
    } catch (err) {
      console.error("createBookingOnBackend error:", err);
      return null;
    }
  };

  // RAZORPAY PAYMENT HANDLER
  const handlePayment = async () => {
    if (!selectedService) {
      alert("Please select a service first!");
      return;
    }

    // For free services, skip payment
    if (selectedService.price === 0) {
      try {
        setProcessing(true);
        await createBookingOnBackend("free", { amount: 0, status: "free" });
        setConfirmationMsg(
          `Thank you ${name}! Your free "${selectedService.title}" has been booked. We'll email it to ${email} within 24-48 hours.`
        );
        setStep(3);
      } catch (err) {
        alert("Booking failed. Please try again.");
      } finally {
        setProcessing(false);
      }
      return;
    }

    if (!window.Razorpay) {
      alert("Payment system loading... Try again.");
      return;
    }

    try {
      setProcessing(true);

      const amount = selectedService.price || 499;

      const orderRes = await axios.post(
        "https://astrobackend-5sr6.onrender.com/api/payments/create-order",
        {
          amount: amount,
          userId: userId,
        }
      );

      if (!orderRes.data.success) {
        alert("Order creation failed.");
        setProcessing(false);
        return;
      }

      const order = orderRes.data.order;

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "THE FIFTH CUSP",
        description: selectedService.title || selectedService.label,
        order_id: order.id,

        handler: async function (response) {
          try {
            const verifyRes = await axios.post(
              "https://astrobackend-5sr6.onrender.com/api/payments/verify",
              {
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                userId,
                amount: amount,
              }
            );

            if (verifyRes.data.success) {
              await createBookingOnBackend("paid", verifyRes.data);
              setConfirmationMsg(
                `Thank you ${name}! Payment successful. We'll email the ${selectedService.title} to ${email} within 24-48 hours.`
              );
              setPdfReady(!!verifyRes.data.pdfUrl);
              setStep(3);
            } else {
              await createBookingOnBackend("failed", { razor: response, verify: verifyRes?.data });
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.log("VERIFY ERROR:", error);
            await createBookingOnBackend("failed", { error: error?.message });
            alert("Verification request failed.");
          } finally {
            setProcessing(false);
          }
        },

        prefill: {
          name: name,
          email: email,
          contact: phone,
        },

        theme: {
          color: "#7b2cbf",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

      setProcessing(false);
    } catch (err) {
      console.log("ORDER ERROR:", err);
      alert("Payment could not be processed.");
      setProcessing(false);
    }
  };

  // RESET
  const resetAll = () => {
    setStep(0);
    setSelectedService(null);
    setQuestion("");
    setDetails("");
    setName("");
    setEmail("");
    setDob("");
    setPhone("");
    setPhotoFile(null);
    setConfirmationMsg("");
    setPdfReady(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const progressWidth = (step / 3) * 100;

  // Star field effect
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

  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #0a0018, #1e003f)",
        color: "#fff",
        zIndex: 10,
        fontFamily: "'Poppins', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* SIDEBAR */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* STARFIELD BACKGROUND */}
      <div id="fc-starfield" className="fc-starfield"></div>

      {/* FLOATING ORBS */}
      <div className="fc-floating-orbs">
        <div className="fc-orb orb-1"></div>
        <div className="fc-orb orb-2"></div>
        <div className="fc-orb orb-3"></div>
      </div>

      {/* MAIN CONTENT */}
      <main style={{ marginLeft: !isMobile && sidebarOpen ? 300 : 0, transition: "margin-left .3s" }}>
        
        {/* ASTROLOGY HERO SECTION */}
        <div className="astro-section">
          <div className="astro-inner">
            {/* IMAGE */}
            <div className="astro-image">
              <img src={AstrologyImage} alt="Astrology Cosmic Energy" />
            </div>

            {/* TEXT */}
            <div className="astro-content">
              <h1 className="astro-heading">ASTROLOGY + कर्म प्रधान है</h1>
              <p className="astro-description">
                To know your chart is to know your direction — your purpose.
                It is to take charge and bring it all to fruition.
                It is not to wait and react, nor to be a spectator to your own life.
                It is to induce <strong>Karam</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* HEADER */}
        <div style={{ textAlign: "center", padding: "5rem 1.5rem 2rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            {/* Astro Calculators */}
          </h1>
        </div>

        {/* ASTROLOGY INTRO SECTION */}
        <div style={{ padding: "2rem 1.5rem", maxWidth: "960px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              background: "linear-gradient(90deg,#ff00ff,#00eaff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "white",
              marginBottom: "1.5rem",
              letterSpacing: "0.6px",
              textAlign: "justify",
            }}
          >
            ASTROLOGY & KARAM: DECODE YOUR COSMIC INTELLIGENCE
          </h2>

          <h2 style={{ color: "WHITE", fontSize: "1.9rem", marginBottom: "1rem" }}>
            ASTROLOGY & KARAM (JYOTISHA)
          </h2>

          <p style={{ marginBottom: "1.4rem", color: "#dcdcdc", lineHeight: "1.85", fontSize: "1.12rem", textAlign: "justify" }}>
            <strong>Jyotisha is not an instrument of fear.</strong> Our astrology does not burden you with
            predictions that create anxiety or limitations. Instead, we illuminate the
            <strong> possibilities hidden within your chart</strong> and guide you toward
            clear, logical, and practical pathways aligned with what you seek.
          </p>

          <p style={{ marginBottom: "1.4rem", color: "#dcdcdc", lineHeight: "1.85", textAlign: "justify" }}>
            No chart is doomed. Every kundli is simply <strong>fine‑tuned for a specific purpose</strong>.
            There is always a <em>how</em>, always a <em>when</em>, and almost never a "you can't"—because
            our approach integrates modern psychology, behavioral science, and conscious awareness
            with the timeless language of the cosmos in today's Yuga.
          </p>

          <p style={{ marginBottom: "2rem", color: "#e8e8e8", fontStyle: "italic" }}>
            धर्म को सर का ताज़ बनाओ, पैरों की बेड़ी नहीं |
          </p>

          {/* JYOTISHA SYSTEMS */}
          <h3 style={{ color: "WHITE", fontSize: "1.45rem", marginBottom: "1rem" }}>
            OUR JYOTISHA FOUNDATION
          </h3>

          <p style={{ marginBottom: "1rem", color: "#dcdcdc", lineHeight: "1.85" }}>
            Our guidance flows purely from <strong>Vedic Jyotisha</strong>, integrating multiple
            classical systems to ensure depth, accuracy, and clarity.
          </p>

          <ul style={{ marginLeft: "1.5rem", marginBottom: "2rem", color: "#e8e8e8" }}>
            <li> Parashari Astrology – Core planetary principles & yogas</li>
            <li> Krishnamurti Paddhati (KP) – Precise event‑level predictions</li>
            <li> Jaimini Astrology – Soul psychology through Karakas & Chara Dashas</li>
            <li> Nadi Astrology – Pattern recognition & karmic timelines</li>
          </ul>

          <p style={{ marginBottom: "2rem", color: "#dcdcdc", lineHeight: "1.85" }}>
            For predictions, we primarily use <strong>Vimshottari Dasha</strong> combined with
            <strong> KP Astrology</strong>, allowing us to answer niche, real‑life questions with
            holistic and meaningful insight.
          </p>

          {/* ASTROLOGY + VASTU */}
          <h3 style={{ color: "WHITE", fontSize: "1.45rem", marginBottom: "1rem", textAlign: "justify" }}>
            ASTROLOGY, VASTU & BALANCE
          </h3>

          <p style={{ marginBottom: "2rem", color: "#dcdcdc", lineHeight: "1.85" }}>
            Astrology is <strong>50% dynamic</strong>—constantly shifting with time, transits, and
            dashas. The other <strong>50% is Vastu</strong>—structural, stable, and largely static.
            Together, they create harmony between your inner rhythm and your external environment.
          </p>

          {/* KARAM */}
          <h3 style={{ color: "WHITE", fontSize: "1.6rem", marginBottom: "1rem" }}>
            KARAM — "कर्म प्रधान है"
          </h3>

          <p style={{ marginBottom: "1.2rem", color: "#dcdcdc", lineHeight: "1.85", textAlign: "justify" }}>
            Your <strong>Kundli gives you the script</strong>. <strong>Karam</strong> is how you choose
            to act within that script.
          </p>

          <p style={{ marginBottom: "1.2rem", color: "#dcdcdc", lineHeight: "1.85", textAlign: "justify" }}>
            In its purest meaning, Karam is simply <strong>action</strong>—not good or bad, but action
            and the energetic imprint it creates.
          </p>

          <ul style={{ marginLeft: "1.5rem", marginBottom: "2rem", color: "#e8e8e8", textAlign: "justify" }}>
            <li>Action → Energy → Result → New Action</li>
            <li>The cycle repeats—past, present, and future</li>
            <li>Karma is not only what you did, but what you are doing now</li>
          </ul>

          <p style={{ marginBottom: "1.4rem", color: "#dcdcdc", lineHeight: "1.85" }}>
            This is why <strong>Shani</strong>, the karmic planet, does not punish. He simply delivers
            the outcomes of actions taken—or avoided. Since <strong>Karam = Action</strong>, the
            remedy for karma is also <strong>action</strong>.
          </p>

          <p style={{ marginBottom: "2rem", color: "#dcdcdc", lineHeight: "1.85" }}>
            Your <strong>Rahu‑Ketu axis</strong> reveals both your karmic baggage and the precise path
            to resolve it. The axis is benevolent—it shows not only the problem, but the way to
            conclude those karmas through conscious action.
          </p>

          {/* REMEDIES */}
          <h3 style={{ color: "WHITE", fontSize: "1.45rem", marginBottom: "1rem" }}>
            REMEDIES — ACTION AS INNER RITUAL
          </h3>

          <p style={{ marginBottom: "1.2rem", color: "#dcdcdc", lineHeight: "1.85" }}>
            Our remedies are not burdensome rituals. They are designed as
            <strong> sanctuaries for the soul</strong>—simple, intentional actions that feel
            natural, personal, and grounding.
          </p>

          <p style={{ marginBottom: "1.2rem", color: "#dcdcdc", lineHeight: "1.85" }}>
            You don't need elaborate ceremonies or distant travel. You only need
            <strong> sincerity, presence, and devotion</strong>. Each remedy becomes an organic
            part of your life—something you look forward to, something that feels like
            returning to yourself.
          </p>

          <p style={{ marginBottom: "0", color: "#e8e8e8", lineHeight: "1.85" }}>
            The magic unfolds when the remedy is performed from within—with intention,
            unshakable faith, curiosity, and a quiet zest for transformation.
          </p>
        </div>

        {/* ASTROLOGY SERVICES */}
        <section style={{ padding: "4rem 2rem" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.4rem",
              marginBottom: "1rem",
              background: "linear-gradient(90deg,#ff00ff,#00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SERVICES
          </h2>

          <p
            style={{
              textAlign: "center",
              maxWidth: 650,
              margin: "0 auto 3rem",
              color: "#ccc",
              lineHeight: 1.7,
            }}
          >
            Choose a focused astrological service designed to decode, align, and activate your karmic path.
          </p>

          {loadingServices ? (
            <p style={{ textAlign: "center", color: "#aaa" }}>Loading services...</p>
          ) : services.length === 0 ? (
            <p style={{ textAlign: "center", color: "#aaa" }}>No services available right now.</p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "2rem",
                maxWidth: 300,
                margin: "0 auto",
              }}
            >
              {services.map((service) => (
                <div
                  key={service._id}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: 22,
                    padding: "1.8rem 1.5rem",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(18px)",
                    boxShadow: "0 0 35px rgba(255,0,255,0.25)",
                    transition: "all 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "300px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 0 50px rgba(255,0,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 0 35px rgba(255,0,255,0.25)";
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        marginBottom: "0.7rem",
                        background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.92rem",
                        color: "#ddd",
                        lineHeight: "1.65",
                        marginBottom: "1.2rem",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  <div
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      marginTop: "auto",
                      marginBottom: "1.2rem",
                      color: service.price === 0 ? "#00ffcc" : "#ff66cc",
                    }}
                  >
                    {service.price === 0 ? "FREE" : `₹${service.price}`}
                  </div>
                  
                  <button
                    onClick={() => selectService(service)}
                    style={{
                      alignSelf: "center",
                      padding: "10px 26px",
                      borderRadius: 30,
                      border: "none",
                      background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                      color: "#fff",
                      fontWeight: 600,
                      cursor: "pointer",
                      marginTop: "auto",
                    }}
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* BOOKING FORM SECTION */}
        <div ref={bookingFormRef}>
          {step > 0 && selectedService && (
            <section className="form-section" style={{ padding: "2rem", marginTop: "4rem" }}>
              <div style={{
                maxWidth: 1600,
                margin: "0 auto",
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(15px)",
                WebkitBackdropFilter: "blur(15px)",
                borderRadius: "20px",
                padding: "35px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 15px 50px rgba(0, 0, 0, 0.2)",
                position: "relative",
                overflow: "hidden",
              }}>
                
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: "radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05), transparent 50%)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}></div>
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Service Header */}
                  <div style={{ marginBottom: "25px" }}>
                    <div style={{
                      display: "inline-block",
                      padding: "6px 14px",
                      background: selectedService.price === 0 
                        ? "rgba(0,255,255,0.15)" 
                        : "rgba(255,0,255,0.15)",
                      color: selectedService.price === 0 ? "#00ffff" : "#ff00ff",
                      fontWeight: "700",
                      fontSize: "12px",
                      borderRadius: "999px",
                      marginBottom: "12px",
                    }}>
                      {selectedService.price === 0 ? "Free Service" : "Paid Service"}
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h3 style={{ 
                        margin: "0 0 12px",
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#fff",
                      }}>
                        {selectedService.title}
                      </h3>
                      <div style={{ 
                        color: "#c4b5fd",
                        fontSize: "14px",
                        fontWeight: "600",
                        padding: "6px 14px",
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "12px",
                      }}>
                        Step {step} of 3
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div style={{ marginBottom: "30px" }}>
                    <div style={{
                      height: "8px",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "4px",
                      overflow: "hidden",
                    }}>
                      <div 
                        style={{
                          width: `${Math.max(0, Math.min(100, progressWidth))}%`,
                          height: "100%",
                          background: "linear-gradient(90deg, #ff00ff, #7b2cbf)",
                          borderRadius: "4px",
                          transition: "width 0.4s ease",
                        }}
                      />
                    </div>
                  </div>

                  {/* STEP 1 - Personal Details */}
                  {step === 1 && (
                    <form onSubmit={handleFormSubmit} style={{ marginTop: "20px" }}>
                      <div style={{ 
                        display: "grid", 
                        gridTemplateColumns: "1fr 1fr", 
                        gap: "20px",
                        marginBottom: "20px",
                      }}>
                        <div>
                          <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your full name"
                            required
                            style={{
                              width: "100%",
                              padding: "14px 16px",
                              background: "rgba(255, 255, 255, 0.07)",
                              border: "1px solid rgba(255, 255, 255, 0.15)",
                              borderRadius: "12px",
                              color: "#fff",
                              fontSize: "15px",
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
                            Email *
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@email.com"
                            required
                            style={{
                              width: "100%",
                              padding: "14px 16px",
                              background: "rgba(255, 255, 255, 0.07)",
                              border: "1px solid rgba(255, 255, 255, 0.15)",
                              borderRadius: "12px",
                              color: "#fff",
                              fontSize: "15px",
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
                            Date of Birth *
                          </label>
                          <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required
                            style={{
                              width: "100%",
                              padding: "14px 16px",
                              background: "rgba(255, 255, 255, 0.07)",
                              border: "1px solid rgba(255, 255, 255, 0.15)",
                              borderRadius: "12px",
                              color: "#fff",
                              fontSize: "15px",
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            style={{
                              width: "100%",
                              padding: "14px 16px",
                              background: "rgba(255, 255, 255, 0.07)",
                              border: "1px solid rgba(255, 255, 255, 0.15)",
                              borderRadius: "12px",
                              color: "#fff",
                              fontSize: "15px",
                            }}
                          />
                        </div>
                      </div>

                      {/* Question for Astrology Service */}
                      <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
                          Your Question (Optional)
                        </label>
                        <input
                          type="text"
                          value={question}
                          onChange={(e) => setQuestion(e.target.value)}
                          placeholder="What would you like to know about your chart?"
                          style={{
                            width: "100%",
                            padding: "14px 16px",
                            background: "rgba(255, 255, 255, 0.07)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: "12px",
                            color: "#fff",
                            fontSize: "15px",
                          }}
                        />
                      </div>

                      {/* Photo Upload */}
                      <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
                          Upload Photo (Optional)
                        </label>
                        <div style={{
                          border: "2px dashed rgba(255, 255, 255, 0.2)",
                          borderRadius: "12px",
                          padding: "20px",
                          textAlign: "center",
                          cursor: "pointer",
                          background: "rgba(255, 255, 255, 0.05)",
                          position: "relative",
                        }}>
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={(e) => setPhotoFile(e.target.files[0])} 
                            style={{
                              position: "absolute",
                              width: "100%",
                              height: "100%",
                              top: 0,
                              left: 0,
                              opacity: 0,
                              cursor: "pointer",
                            }}
                          />
                          <div style={{ color: "#c4b5fd", fontSize: "14px" }}>
                            {photoFile ? (
                              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                                <div style={{ color: "#4ade80" }}>✓</div>
                                <span>{photoFile.name}</span>
                              </div>
                            ) : (
                              "Click to upload or drag & drop photo"
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Additional Details */}
                      <div style={{ marginBottom: "25px" }}>
                        <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
                          Additional Details
                        </label>
                        <textarea
                          value={details}
                          onChange={(e) => setDetails(e.target.value)}
                          rows={3}
                          style={{
                            width: "100%",
                            padding: "14px 16px",
                            background: "rgba(255, 255, 255, 0.07)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            borderRadius: "12px",
                            color: "#fff",
                            fontSize: "15px",
                            resize: "vertical",
                          }}
                          placeholder="Anything else we should know..."
                        />
                      </div>

                      {/* Form Actions */}
                      <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
                        <button
                          type="submit"
                          style={{
                            padding: "15px 24px",
                            background: "linear-gradient(135deg,#ff00ff,#7b2cbf)",
                            color: "#fff",
                            borderRadius: "12px",
                            border: "none",
                            cursor: "pointer",
                            fontWeight: "600",
                            fontSize: "15px",
                            flex: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",
                          }}
                        >
                          {selectedService.price === 0 ? "Confirm Booking" : "Continue to Payment"} <ArrowRight size={18} />
                        </button>

                        <button
                          type="button"
                          onClick={resetAll}
                          style={{
                            padding: "15px 24px",
                            background: "rgba(255,255,255,0.1)",
                            color: "#fff",
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.15)",
                            cursor: "pointer",
                            fontWeight: "600",
                            fontSize: "15px",
                            flex: 1,
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}

                  {/* STEP 2 - Payment Summary */}
                  {step === 2 && (
                    <div>
                      <div style={{ 
                        background: "rgba(255,255,255,0.06)", 
                        borderRadius: "16px", 
                        padding: "25px", 
                        marginBottom: "25px",
                        border: "1px solid rgba(255,255,255,0.1)"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                          <div style={{ color: "#c4b5fd", fontSize: "14px" }}>Service</div>
                          <div style={{ fontWeight: "600", color: "#fff", fontSize: "16px" }}>{selectedService.title}</div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                          <div style={{ color: "#c4b5fd", fontSize: "14px" }}>Name</div>
                          <div style={{ color: "#fff", fontSize: "15px" }}>{name}</div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                          <div style={{ color: "#c4b5fd", fontSize: "14px" }}>Email</div>
                          <div style={{ color: "#fff", fontSize: "15px" }}>{email}</div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                          <div style={{ color: "#c4b5fd", fontSize: "14px" }}>Delivery Time</div>
                          <div style={{ color: "#4ade80", fontSize: "15px", fontWeight: "600" }}>24-48 Hours</div>
                        </div>

                        <div style={{ 
                          display: "flex", 
                          justifyContent: "space-between", 
                          alignItems: "center", 
                          marginTop: "20px",
                          paddingTop: "20px",
                          borderTop: "1px solid rgba(255,255,255,0.1)"
                        }}>
                          <div style={{ color: "#c4b5fd", fontSize: "16px", fontWeight: "600" }}>Total Amount</div>
                          <div style={{
                            fontSize: selectedService.price === 0 ? "20px" : "28px",
                            fontWeight: "800",
                            color: selectedService.price === 0 ? "#00ffff" : "#ff00ff",
                          }}>
                            {selectedService.price === 0 ? "FREE" : `₹${selectedService.price}`}
                          </div>
                        </div>
                      </div>

                      {/* Security Badge */}
                      {selectedService.price > 0 && (
                        <div style={{ marginBottom: "25px" }}>
                          <div style={{
                            padding: "12px 16px",
                            background: "rgba(255, 255, 255, 0.06)",
                            borderRadius: "10px",
                            color: "#c4b5fd",
                            textAlign: "center",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            fontSize: "13px",
                          }}>
                            Secure Payment • Razorpay Encrypted
                          </div>
                        </div>
                      )}

                      {/* Payment Actions */}
                      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                        <button
                          onClick={handlePayment}
                          disabled={processing}
                          style={{
                            padding: "16px 24px",
                            background: selectedService.price === 0 
                              ? "linear-gradient(135deg,#00ffff,#7b2cbf)" 
                              : "linear-gradient(135deg,#ff00ff,#7b2cbf)",
                            color: "#fff",
                            borderRadius: "12px",
                            border: "none",
                            cursor: processing ? "not-allowed" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "10px",
                            fontWeight: "600",
                            fontSize: "15px",
                            flex: 1,
                            whiteSpace: "nowrap",
                            minWidth: "220px",
                            opacity: processing ? 0.7 : 1,
                          }}
                        >
                          {processing ? (
                            <>
                              <Loader2 size={18} className="spin" /> Processing...
                            </>
                          ) : selectedService.price === 0 ? (
                            <>
                              <CheckCircle size={18} /> Confirm Free Booking
                            </>
                          ) : (
                            <>
                              <Zap size={18} /> Pay Securely Now
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => setStep(1)}
                          style={{
                            padding: "16px 24px",
                            background: "rgba(255,255,255,0.1)",
                            color: "#fff",
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.15)",
                            cursor: "pointer",
                            fontWeight: "600",
                            fontSize: "15px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          ← Edit Details
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3 - Success */}
                  {step === 3 && (
                    <div style={{ textAlign: "center", padding: "20px 0" }}>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "90px",
                          height: "90px",
                          background: "radial-gradient(circle at center, rgba(74, 222, 128, 0.15), transparent 70%)",
                          borderRadius: "50%",
                          marginBottom: "25px",
                        }}
                      >
                        <CheckCircle size={48} color="#4ade80" />
                      </div>
                      
                      <h3 style={{ 
                        marginTop: "0", 
                        marginBottom: "15px",
                        fontSize: "26px",
                        fontWeight: "700",
                        color: "#4ade80",
                      }}>
                        {selectedService.price === 0 ? "Booking Confirmed!" : "Payment Successful!"}
                      </h3>
                      
                      <p style={{ 
                        color: "#c4b5fd", 
                        fontSize: "15px",
                        lineHeight: "1.6",
                        margin: "0 auto 25px",
                        maxWidth: "600px",
                      }}>
                        {confirmationMsg || `Thank you ${name}! ${selectedService.price === 0 ? 'Your free booking has been confirmed.' : 'Payment successful.'} We'll email the ${selectedService.title} to ${email} within 24-48 hours.`}
                      </p>

                      {pdfReady && (
                        <div
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "10px",
                            marginTop: "8px",
                            padding: "12px 20px",
                            borderRadius: "10px",
                            background: "rgba(74,222,128,0.1)",
                            border: "1px solid rgba(74,222,128,0.25)",
                            color: "#4ade80",
                            fontWeight: 600,
                            marginBottom: "25px",
                            fontSize: "14px",
                          }}
                        >
                          <FileText size={18} /> Your PDF report is ready
                        </div>
                      )}

                      <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "30px" }}>
                        <button
                          onClick={resetAll}
                          style={{
                            padding: "14px 24px",
                            background: "rgba(255,255,255,0.1)",
                            color: "#fff",
                            borderRadius: "12px",
                            border: "1px solid rgba(255,255,255,0.15)",
                            cursor: "pointer",
                            fontWeight: "600",
                            fontSize: "15px",
                          }}
                        >
                          Book Another Service
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
        </div>

        {/* ASTROLOGY FAQs */}
        <section style={{ padding: "4rem 2rem" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.3rem",
              marginBottom: "2rem",
              background: "linear-gradient(90deg,#ff00ff,#00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FAQs
          </h2>

          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            {faqs.length === 0 && (
              <p style={{ textAlign: "center", color: "#aaa" }}>
                No FAQs available right now.
              </p>
            )}

            {faqs.map((faq, i) => (
              <div
                key={faq._id}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 14,
                  marginBottom: 14,
                  border: "1px solid rgba(255,255,255,0.12)",
                  overflow: "hidden",
                }}
              >
                <div
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    padding: "1.2rem 1.5rem",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h4 style={{ margin: 0 }}>{faq.question}</h4>
                  <span style={{ fontSize: "1.4rem" }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </div>

                {openFaq === i && (
                  <div
                    style={{
                      padding: "1.2rem 1.5rem",
                      borderTop: "1px solid rgba(255,255,255,0.1)",
                      color: "#ddd",
                      lineHeight: "1.7",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* INLINE STYLES */}
      <style>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg);} }
      `}</style>
    </div>
  );
};

export default Astrology;