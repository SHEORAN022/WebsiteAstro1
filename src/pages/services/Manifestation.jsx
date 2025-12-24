
// import React, { useState, useEffect } from "react";
// import "../../styles/Manifestation.css";
// import { useNavigate } from "react-router-dom"; 

// import Sidebar from "../../components/Sidebar";
// import ManifestationHero from "../../assets/Manifestation_Final.png";
// import WellBeing from "../../assets/Well being_Final.png";






// import axios from "axios";

// const API_URL = "https://astrobackend-5sr6.onrender.com/api/manifestation"; // change if needed

// const faqs = [
//   {
//     question: "Can we show an Action button in front of every offering for booking?",
//     answer: "Yes! Each offering has a 'Book Now' button that opens the booking form with all details.",
//   },
//   {
//     question: "Will customers receive a confirmation email?",
//     answer: "Yes. After submission and payment, a confirmation email with next steps is sent automatically.",
//   },
//   {
//     question: "Can we make a portal to upload PDFs for each customer?",
//     answer: "Yes. Backend portal can be integrated where you upload PDFs that are automatically sent to customer emails.",
//   },
// ];


// const Manifestation = () => {
  
//     const navigate = useNavigate();
    
// const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [manifestationList, setManifestationList] = useState([]);
//   const [wellbeingList, setWellbeingList] = useState([]);
//   const [selectedOffering, setSelectedOffering] = useState(null);
//   const [step, setStep] = useState(1); // 1 = form, 2 = payment, 3 = success

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     notes: "",
//     file: null,
//   });

//   const [faqOpen, setFaqOpen] = useState(null);
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [paymentLoading, setPaymentLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   // fetch offerings from backend
//   const fetchOfferings = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/all`);
//       if (res.data && res.data.status) {
//         setManifestationList(res.data.manifestation || []);
//         setWellbeingList(res.data.wellbeing || []);
//       } else {
//         // if backend doesn't send expected shape, provide fallback demo items
//         setManifestationList(res.data.manifestation || []);
//         setWellbeingList(res.data.wellbeing || []);
//       }
//     } catch (err) {
//       console.warn("Error fetching offerings, loading fallback demo items:", err);
//       // Fallback demo items so UI works even if backend down
//       setManifestationList([
//         {
//           _id: "m1",
//           label: "Manifestation Blueprint",
//           description: "Personalized manifestation report.",
//           fullDesc: "In-depth energetic report and steps.",
//           deliverable: "Paid PDF",
//           price: 499,
//         },
//         {
//           _id: "m2",
//           label: "Guided Manifestation Session",
//           description: "30-minute one-on-one guided session.",
//           fullDesc: "Meditation + scripting + intention setting.",
//           deliverable: "30-min Call",
//           price: 999,
//         },
//       ]);
//       setWellbeingList([
//         {
//           _id: "w1",
//           label: "Well-being Guide",
//           description: "Free guide with rituals and practices.",
//           fullDesc: "Practical daily practices to raise vibration.",
//           deliverable: "Free PDF",
//           price: 0,
//         },
//       ]);
//     }
//   };

//   useEffect(() => {
//     fetchOfferings();
//   }, []);

//   // Important: make large decorative layers non-interactive so inputs are clickable
//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         style={{
//           position: "absolute",
//           background: "white",
//           borderRadius: "50%",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 3}px`,
//           height: `${1 + Math.random() * 3}px`,
//           opacity: 0.8,
//           animation: `starBlink ${2 + Math.random() * 4}s infinite ease-in-out`,
//           pointerEvents: "none", // <<< prevents blocking inputs
//         }}
//       ></div>
//     ));

//   // handle controlled inputs (text + file)
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData((p) => ({ ...p, [name]: files[0] }));
//     } else {
//       setFormData((p) => ({ ...p, [name]: value }));
//     }
//   };

//   // Validate form fields (simple)
//   const validateForm = () => {
//     if (!formData.fullName.trim()) return "Full name is required.";
//     if (!formData.email.trim()) return "Email is required.";
//     // basic email check
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) return "Enter a valid email.";
//     if (!formData.phone.trim()) return "Phone number is required.";
//     return null;
//   };

//   // Submit booking to backend (multipart for file)
//   const handleFormSubmit = async (e) => {
//     e && e.preventDefault();
//     setErrorMsg("");
//     const validationError = validateForm();
//     if (validationError) {
//       setErrorMsg(validationError);
//       return;
//     }

//     // create payload
//     const payload = new FormData();
//     payload.append("fullName", formData.fullName);
//     payload.append("email", formData.email);
//     payload.append("phone", formData.phone);
//     payload.append("notes", formData.notes || "");
//     if (formData.file) payload.append("file", formData.file);
//     if (selectedOffering) {
//       payload.append("offeringId", selectedOffering._id || selectedOffering.id || "");
//       payload.append("offeringLabel", selectedOffering.label || "");
//       payload.append("price", selectedOffering.price || "");
//     }

//     try {
//       setSubmitting(true);
//       // POST to backend booking endpoint - change if your endpoint differs
//       const res = await axios.post(`${API_URL}/book`, payload, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       // If backend accepted booking and returned success, proceed to payment
//       if (res.data && (res.data.status || res.status === 200)) {
//         // optionally store booking id returned by backend: res.data.bookingId
//         setStep(2); // go to payment
//       } else {
//         // gracefully handle: still allow to go to payment or show message
//         setErrorMsg(res.data?.message || "Unable to book - try again.");
//       }
//     } catch (err) {
//       console.error("Booking error:", err);
//       // If backend unreachable, still allow user to simulate payment (useful for dev)
//       // setErrorMsg("Booking failed (server error). You can still proceed to payment for testing.");
//       setStep(2);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // Simulated payment flow - replace with real payment integration
//   const handlePayment = async () => {
//     setPaymentLoading(true);
//     setErrorMsg("");
//     try {
//       // Simulate payment delay
//       await new Promise((res) => setTimeout(res, 1200));
//       // If you have payment API, call it here and check result
//       setShowConfetti(true);
//       setTimeout(() => setShowConfetti(false), 4000);
//       setStep(3);
//     } catch (err) {
//       console.error("Payment error:", err);
//       setErrorMsg("Payment failed. Try again.");
//     } finally {
//       setPaymentLoading(false);
//     }
//   };

//   const handleBookNow = (offering) => {
//     setSelectedOffering(offering);
//     setStep(1);
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       notes: "",
//       file: null,
//     });
//     setErrorMsg("");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const resetBooking = () => {
//     setStep(1);
//     setSelectedOffering(null);
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       notes: "",
//       file: null,
//     });
//     setErrorMsg("");
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "radial-gradient(circle at top, #1e003f, #0a0018)",
//         minHeight: "100vh",
//         padding: "3rem 2rem",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       {/* TOP RIGHT CTA */}
//       <a
//         href="/manifestation"
//         style={{
//           position: "fixed",
//           top: "22px",
//           right: "25px",
//           background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//           color: "#fff",
//           padding: "10px 22px",
//           borderRadius: "30px",
//           fontWeight: "600",
//           fontSize: "16px",
//           textDecoration: "none",
//           zIndex: 1500,
//           boxShadow: "0 6px 30px rgba(0,0,0,0.45)",
//         }}
//       >
//         ALIGN
//       </a>

//       <style>{`
//         @keyframes starBlink {
//           0%, 100% { opacity: 0.3; transform: scale(1); }
//           50% { opacity: 1; transform: scale(1.4); }
//         }
//         @keyframes orbFloat {
//           0%, 100% { transform: translateY(0) scale(1); }
//           50% { transform: translateY(-40px) scale(1.1); }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>

//       {/* STARS container (non-interactive) */}
//       <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
//         {renderStars(70)}
//       </div>

//       {/* ORBS decorative (non-interactive) */}
//       <div
//         style={{
//           position: "absolute",
//           width: "300px",
//           height: "300px",
//           borderRadius: "50%",
//           filter: "blur(80px)",
//           opacity: 0.3,
//           zIndex: 0,
//           animation: "orbFloat 15s ease-in-out infinite",
//           background: "radial-gradient(circle, #ff00ff, transparent)",
//           top: "10%",
//           left: "5%",
//           pointerEvents: "none",
//         }}
//       ></div>

//       <div
//         style={{
//           position: "absolute",
//           width: "300px",
//           height: "300px",
//           borderRadius: "50%",
//           filter: "blur(80px)",
//           opacity: 0.3,
//           zIndex: 0,
//           animation: "orbFloat 15s ease-in-out infinite 3s",
//           background: "radial-gradient(circle, #00ffff, transparent)",
//           bottom: "15%",
//           right: "10%",
//           pointerEvents: "none",
//         }}
//       ></div>

//       <div
//         style={{
//           position: "absolute",
//           width: "300px",
//           height: "300px",
//           borderRadius: "50%",
//           filter: "blur(80px)",
//           opacity: 0.28,
//           zIndex: 0,
//           animation: "orbFloat 15s ease-in-out infinite 6s",
//           background: "radial-gradient(circle, #8a2be2, transparent)",
//           top: "60%",
//           left: "70%",
//           pointerEvents: "none",
//         }}
//       ></div>

//       {/* SIDEBAR OVERLAY */}
//       {/* {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "rgba(0,0,0,0.4)",
//             zIndex: 900,
//           }}
//         />
//       )} */}

//       {/* SIDEBAR */}
//       {/* <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           transition: "left 0.45s ease-in-out",
//           padding: "30px 20px",
//           zIndex: 1000,
//         }}
//       >
//         <h2
//           style={{
//             textAlign: "center",
//             fontSize: "28px",
//             fontWeight: 700,
//             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "white",
//           }}
//         >
//          THE FIFTH CUSP
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0, marginTop: "30px" }}>
//           {navLinks.map((link, i) => (
//             <li key={i} style={{ margin: "14px 0" }}>
//               <a
//                 href={link.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   color: "#ccc",
//                   padding: "10px 18px",
//                   borderRadius: "10px",
//                   display: "block",
//                   textDecoration: "none",
//                 }}
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div> */}

//       {/* HAMBURGER */}
//       {/* {!sidebarOpen && (
//         <button
//           onClick={() => setSidebarOpen(true)}
//           style={{
//             position: "fixed",
//             top: "22px",
//             left: "25px",
//             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//             color: "#fff",
//             border: "none",
//             fontSize: "26px",
//             borderRadius: "50%",
//             width: "55px",
//             height: "55px",
//             zIndex: 1100,
//             cursor: "pointer",
//           }}
//         >
//           ☰
//         </button>
//       )} */}
//       <Sidebar
//   sidebarOpen={sidebarOpen}
//   setSidebarOpen={setSidebarOpen}
//   isLoggedIn={false}
// />
// {sidebarOpen && (
//   <div
//     onClick={() => setSidebarOpen(false)}
//     style={{
//       position: "fixed",
//       inset: 0,
//       background: "rgba(0,0,0,0.45)",
//       zIndex: 998,
//     }}
//   />
// )}
// {/* <button
//   onClick={() => setSidebarOpen(true)}
//   style={{
//     position: "fixed",
//     top: "22px",
//     left: "25px",
//     background: "linear-gradient(135deg,#ff00ff,#7b2cbf)",
//     color: "#fff",
//     border: "none",
//     fontSize: "26px",
//     borderRadius: "50%",
//     width: "55px",
//     height: "55px",
//     zIndex: 1200,
//     cursor: "pointer",
//   }}
// >
//   ☰
// </button> */}


//       {/* MAIN CONTENT */}
//       {/* <div style={{ marginLeft: sidebarOpen ? "270px" : "0", transition: "margin-left 0.4s" }}> */}
//       <div className="manifestation-content">



//         {/* ===== RESPONSIVE HERO SECTION ===== */}
// <div
//   style={{
//     display: "flex",
//     flexWrap: "wrap",
//     alignItems: "center",
//     gap: "3rem",
//     marginBottom: "5rem",
//     padding: "clamp(1.5rem, 4vw, 3rem)",
//     borderRadius: "30px",
//     background: "rgba(255,255,255,0.05)",
//     backdropFilter: "blur(14px)",
//     boxShadow: "0 25px 70px rgba(0,0,0,0.55)",
//   }}
// >
//   {/* IMAGE */}
//   <div
//   style={{
//     flex: "1 1 360px",              // ⬅️ pehle 420px tha
//     maxWidth: "380px",              // ⬅️ image ko limit
//     minHeight: "300px",             // ⬅️ height kam
//     borderRadius: "22px",
//     overflow: "hidden",
//     boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
//   }}
// >
//   <img
//     src={ManifestationHero}
//     alt="Manifestation"
//     style={{
//       width: "100%",
//       height: "100%",
//       objectFit: "cover",
//     }}
//   />
// </div>


//   {/* CONTENT */}
//   <div
//     style={{
//       flex: "1 1 420px",
//       color: "#fff",
//        marginTop: "-70px",
//     }}
//   >
//     <h1
//       style={{
//         fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
//         fontWeight: 800,
//         marginBottom: "1.2rem",
//         background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "white",
//         textAlign: "left",
//       }}
//     >
//       MANIFESTATION
//     </h1>

//     <p
//       style={{
//         fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
//         lineHeight: 1.85,
//         color: "#e5e5e5",
//         textAlign: "justify",
//       }}
//     >
//       Manifestation is simply the ancient art of turning energy into the
//       physical. It is taking a thought, a desire, a whisper from your inner
//       self, and weaving it into the fabric of reality. It is the moment your
//       inner world and the Universe begin speaking the same language.
//       <br />
//       <br />
//       When your intention, emotion, belief, and action fall into alignment,
//       life bends, pathways open, and possibilities rearrange themselves
//       around you. Manifestation is not wishful thinking; it is conscious
//       creation.
//       <br />
//       <br />
//       It is the process of stepping into the version of yourself who already
//       holds what you seek, and allowing the Universe to meet you there, with
//       synchronicities, signs, and outcomes that feel nothing short of magical.
//     </p>
//   </div>
// </div>
// {/* ===== HERO SECTION END ===== */}





// {/* <div
//   style={{
//     display: "flex",
//     alignItems: "center",
//     gap: "3rem",
//     marginBottom: "5rem",
//     padding: "3rem",
//     borderRadius: "30px",
//     background: "rgba(255,255,255,0.05)",
//     backdropFilter: "blur(14px)",
//     boxShadow: "0 25px 70px rgba(0,0,0,0.55)",
//   }}
// >
  
//   <div
//     style={{
//       flex: "1",
//       borderRadius: "26px",
//       overflow: "hidden",
//       minHeight: "300px",
//       boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
//     }}
//   >
//     <img
//       src="https://www.shutterstock.com/image-photo/manifesting-260nw-2498746307.jpg"
//       alt="Manifestation"
//       style={{
//         width: "100%",
//         height: "100%",
//         objectFit: "cover",
//         minHeight: "300px"

//       }}
//     />
//   </div>

  
//   <div style={{ flex: "1.2", color: "#fff" }}>
//     <h1
//       style={{
//         fontSize: "3.2rem",
//         fontWeight: 800,
//         marginBottom: "1.5rem",
//         background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "white",
//       }}
//     >
//       MANIFESTATION
//     </h1>

//     <p
//       style={{
//         fontSize: "1.05rem",
//         lineHeight: 1.8,
//         color: "#e5e5e5",
//         textAlign: "justify",
//       }}
//     >
//       Manifestation is simply the ancient art of turning energy into the
//       physical. It is taking a thought, a desire, a whisper from your inner
//       self, and weaving it into the fabric of reality. It is the moment your
//       inner world and the Universe begin speaking the same language.
//       <br />
//       <br />
//       When your intention, emotion, belief, and action fall into alignment,
//       life bends, pathways open, and possibilities rearrange themselves
//       around you. Manifestation is not wishful thinking; it is conscious
//       creation.
//       <br />
//       <br />
//       It is the process of stepping into the version of yourself who already
//       holds what you seek, and allowing the Universe to meet you there, with
//       synchronicities, signs, and outcomes that feel nothing short of magical.
//     </p>
//   </div>
// </div> */}
// {/* ===== HERO SECTION END ===== */}





//         {/* BOOKING FORM */}
//         {selectedOffering && step === 1 && (
//           <div
//             style={{
//               background: "rgba(255,255,255,0.06)",
//               padding: "3.5rem 2rem",
//               borderRadius: "28px",
//               maxWidth: "720px",
//               margin: "3rem auto",
//               zIndex: 10,
//             }}
//           >
//             <h2
//               style={{
//                 fontSize: "2.2rem",
//                 background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "white",
//                 marginBottom: "0.6rem",
//                 textAlign: "center",
//               }}
//             >
//               Book: {selectedOffering.label}
//             </h2>

//             <p style={{ color: "#fff", marginTop: "1rem", textAlign: "center" }}>
//               {selectedOffering.fullDesc}
//             </p>

//             <form
//               onSubmit={handleFormSubmit}
//               style={{
//                 marginTop: "2rem",
//                 padding: "2rem",
//                 borderRadius: "20px",
//                 background: "rgba(255,255,255,0.04)",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "1rem",
//                 maxWidth: "640px",
//                 marginLeft: "auto",
//                 marginRight: "auto",
//               }}
//             >
//               {errorMsg && (
//                 <div
//                   style={{
//                     color: "#ffdddd",
//                     background: "rgba(255,0,0,0.06)",
//                     padding: "0.75rem 1rem",
//                     borderRadius: "10px",
//                   }}
//                 >
//                   {errorMsg}
//                 </div>
//               )}

//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 style={inputStyle}
//                 required
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={inputStyle}
//                 required
//               />

//               <input
//                 type="text"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 style={inputStyle}
//                 required
//               />

//               <textarea
//                 name="notes"
//                 placeholder="Notes / Details"
//                 value={formData.notes}
//                 rows="3"
//                 onChange={handleChange}
//                 style={{ ...inputStyle, height: "90px" }}
//               />

//               <label style={{ color: "#ddd", fontSize: "0.9rem" }}>
//                 Upload File (optional)
//                 <input
//                   type="file"
//                   name="file"
//                   onChange={handleChange}
//                   style={{ marginTop: "8px", display: "block" }}
//                 />
//               </label>

//               <button
//                 type="submit"
//                 disabled={submitting}
//                 style={{
//                   marginTop: "1rem",
//                   padding: "0.9rem 1.6rem",
//                   borderRadius: "30px",
//                   background: "linear-gradient(90deg,#ff00ff,#8a2be2,#00ffff)",
//                   border: "none",
//                   color: "#fff",
//                   fontWeight: "600",
//                   cursor: submitting ? "not-allowed" : "pointer",
//                 }}
//               >
//                 {submitting ? "Processing..." : "Proceed to Payment"}
//               </button>
//             </form>
//           </div>
//         )}

//         {/* PAYMENT STEP */}
//         {selectedOffering && step === 2 && (
//           <div style={{ textAlign: "center", marginTop: "4rem", zIndex: 10 }}>
//             <h2
//               style={{
//                 fontSize: "2.4rem",
//                 background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "white",
//               }}
//             >
//               Payment
//             </h2>

//             <p style={{ color: "#ddd", marginTop: "1rem" }}>
//               You're booking <strong>{selectedOffering.label}</strong>{" "}
//               {selectedOffering.price ? `— ₹${selectedOffering.price}` : ""}
//             </p>

//             <div
//               style={{
//                 marginTop: "2rem",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "1rem",
//                 alignItems: "center",
//               }}
//             >
//               {/* Simulated payment inputs (for demo) */}
//               <input type="text" placeholder="Cardholder Name" style={paymentInput} />
//               <input type="text" placeholder="Card Number" maxLength={19} style={paymentInput} />
//               <div style={{ display: "flex", gap: "1rem", width: "90%", maxWidth: "420px" }}>
//                 <input type="text" placeholder="MM/YY" maxLength={5} style={{ ...paymentInput, flex: 1 }} />
//                 <input type="text" placeholder="CVV" maxLength={4} style={{ ...paymentInput, flex: 1 }} />
//               </div>

//               <button
//                 onClick={handlePayment}
//                 disabled={paymentLoading}
//                 style={{
//                   marginTop: "0.5rem",
//                   padding: "0.9rem 1.6rem",
//                   borderRadius: "30px",
//                   background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                   border: "none",
//                   color: "#fff",
//                   fontWeight: 600,
//                   cursor: paymentLoading ? "not-allowed" : "pointer",
//                 }}
//               >
//                 {paymentLoading ? "Processing..." : "Pay Now"}
//               </button>

//               <div style={{ color: "#ccc", marginTop: "0.8rem" }}>
//                 Or pay with:
//                 <div style={{ marginTop: "0.6rem", display: "flex", gap: "0.6rem", justifyContent: "center" }}>
//                   <button style={smallPayBtn}>Google Pay</button>
//                   <button style={smallPayBtn}>UPI</button>
//                   <button style={smallPayBtn}>PhonePe</button>
//                 </div>
//               </div>

//               {errorMsg && (
//                 <div style={{ color: "#ffdddd", marginTop: "0.6rem" }}>{errorMsg}</div>
//               )}
//             </div>
//           </div>
//         )}

//         {/* SUCCESS STEP */}
//         {selectedOffering && step === 3 && (
//           <div style={{ textAlign: "center", marginTop: "4rem", zIndex: 10 }}>
//             {showConfetti && (
//               <div style={{ fontSize: "48px", marginBottom: "0.6rem" }}>🎉</div>
//             )}
//             <h2
//               style={{
//                 fontSize: "2rem",
//                 background: "linear-gradient(90deg,#00ffff,#ff00ff)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Payment Successful!
//             </h2>

//             <p style={{ color: "#ccc", marginTop: "1rem" }}>
//               Thank you, <strong>{formData.fullName || "Customer"}</strong>. Your booking for{" "}
//               <strong>{selectedOffering.label}</strong> has been received.
//             </p>

//             <button
//               onClick={resetBooking}
//               style={{
//                 marginTop: "2rem",
//                 padding: "0.9rem 1.6rem",
//                 borderRadius: "30px",
//                 background: "linear-gradient(90deg,#ff00ff,#8a2be2,#00ffff)",
//                 border: "none",
//                 color: "#fff",
//                 fontWeight: 600,
//                 cursor: "pointer",
//               }}
//             >
//               Back to Offerings
//             </button>
//           </div>
//         )}






        

       
//         {!selectedOffering && (
//           <>
           
           

//             {/* GALLERY */}
//             <div style={{ margin: "4rem 0", textAlign: "center" }}>
//               {/* <h2
//                 style={{
//                   fontSize: "2.4rem",
//                   background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "white",
//                   marginBottom: "1.5rem",
//                 }}
//               >
//                 VISUAL JOURNEY
//               </h2> */}

//               <div
//                 style={{
//                   display: "grid",
//                   gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
//                   gap: "1.5rem",
//                 }}
//               >
//                 {[
//                   "v1731850200/gallery1_cfks3s.jpg",
//                   "v1731850201/gallery2_gcrait.jpg",
//                   "v1731850202/gallery3_ym9nkn.jpg",
//                   "v1731850203/gallery4_at782l.jpg",
//                 ].map((img, i) => (
//                   <img
//                     key={i}
//                     src={`https://res.cloudinary.com/doerrm32l/image/upload/${img}`}
//                     alt={`Gallery ${i + 1}`}
//                     style={{
//                       width: "100%",
//                       height: "240px",
//                       objectFit: "cover",
//                       borderRadius: "20px",
//                     }}
//                   />
//                 ))}
//               </div>
        
//  <div style={{ margin: "5rem 0", textAlign: "center" }}>
//   <h2
//     style={{
//       fontSize: "2.6rem",
//       fontWeight: 800,
//       background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "white",
//       marginBottom: "2.5rem",
//     }}
//   >
//     HOW MANIFESTATION WORKS
//   </h2>

//   <div
//     style={{
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
//       gap: "2rem",
//       justifyItems: "center",
//     }}
//   >
//     {[
//       {
//         step: "1",
//         title: "Set Your Intention",
//         desc: "Focus clearly on what you desire. Write it down or visualize it.",
//         color: "#ff00ff",
//       },
//       {
//         step: "2",
//         title: "Align Emotion & Belief",
//         desc: "Feel the emotions of already having it. Believe it's possible.",
//         color: "#00ffff",
//       },
//       {
//         step: "3",
//         title: "Take Inspired Action",
//         desc: "Act consistently toward your goal. Small steps matter.",
//         color: "#8a2be2",
//       },
//       {
//         step: "4",
//         title: "Receive & Celebrate",
//         desc: "Acknowledge results, stay open to synchronicities, and celebrate.",
//         color: "#ff8a00",
//       },
//     ].map((item, i) => (
//       <div
//         key={i}
//         style={{
//           background: "rgba(255,255,255,0.06)",
//           backdropFilter: "blur(16px)",
//           padding: "2rem 1.5rem",
//           borderRadius: "22px",
//           border: `1px solid ${item.color}33`,
//           boxShadow: `0 0 35px ${item.color}22`,
//           color: "#fff",
//           transition: "transform 0.35s, box-shadow 0.35s",
//           cursor: "default",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
//           e.currentTarget.style.boxShadow = `0 0 45px ${item.color}55`;
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "translateY(0) scale(1)";
//           e.currentTarget.style.boxShadow = `0 0 35px ${item.color}22`;
//         }}
//       >
//         <div
//           style={{
//             width: "50px",
//             height: "50px",
//             borderRadius: "50%",
//             background: item.color,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             fontWeight: 700,
//             fontSize: "1.3rem",
//             margin: "0 auto 1rem auto",
//           }}
//         >
//           {item.step}
//         </div>

//         <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.6rem" }}>
//           {item.title}
//         </h3>

//         <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "#ddd" }}>
//           {item.desc}
//         </p>
//       </div>
//     ))}
//   </div>
// </div>
 

// {/* SECTION 3: HOW MANIFESTATION WORKS */}
// <div style={{ margin: "5rem 0", textAlign: "center", padding: "0 1rem" }}>
//   <h2
//     style={{
//       fontSize: "2.6rem",
//       fontWeight: 800,
//       background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "white",
//       marginBottom: "2rem",
//     }}
//   >
//     {/* How Manifestation Works */}
//   </h2>

//   <p style={{ fontSize: "1.1rem", color: "#ccc", maxWidth: "800px", margin: "0 auto 3rem auto", lineHeight: "1.7" }}>
//     Here is a clearly defined six-step process, which gives you insights as to how the Manifestation process really works.
//   </p>

//   {/* Step 0 */}
//   <div style={{ textAlign: "left", maxWidth: "900px", margin: "0 auto", color: "white" }}>
//     <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "1rem" }}>
//       0. PREPARATION OF THE INNER FIELD
//     </h3>
//     <p style={{ marginBottom: "0.8rem" }}>
//       Paving the Path for Manifestation. The Reset. Before you manifest, you must prepare the internal landscape from which manifestation grows. This step is about knowing yourself: identifying your energetic blueprint, understanding blockages, and creating safety for your desires to land.
//     </p>
//     <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
//       <li><strong>Energy Measurement:</strong> Measure your vibration using the Bovis & Hawkins Scale.</li>
//       <li><strong>Astrological Fit:</strong> Determine the best manifestation method based on Moon sign, emotional wiring, and energetic constitution.</li>
//       <li><strong>Identifying Blockages:</strong> Uncover energy leaks, past traumas, limiting beliefs, and hidden resistance causes.</li>
//       <li><strong>Emotional Release:</strong> Surrender fear, guilt, shame, anger, and other blocking emotions.</li>
//       <li><strong>Subconscious Safety:</strong> Instill safety in your subconscious for limitless manifestation.</li>
//       <li><strong>Chakra Balancing:</strong> Regulate and empower chakras to fuel manifestation.</li>
//       <li><strong>Holistic Well Being:</strong> Stabilize mind, body, and energy to become a magnetic field for manifestation.</li>
//     </ul>

//     {/* Step I */}
//     <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>I. THE DESIRE</h3>
//     <p style={{ marginBottom: "0.8rem" }}>
//       Your manifestation journey begins when a desire rises within you. A true desire feels like memory, not fantasy.
//     </p>
//     <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
//       <li><strong>The Inner Self Signals:</strong> You sense a future you are ready to hold.</li>
//       <li><strong>The Subconscious Responds:</strong> You feel longing, curiosity, or emotional pull.</li>
//       <li><strong>The Bridge Activates:</strong> Your future self communicates with your present self.</li>
//     </ul>

//     {/* Step II */}
//     <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>II. INTENTION + CLARITY</h3>
//     <p style={{ marginBottom: "0.8rem" }}>
//       Turning Desire into Direction. Intention bridges desiring and becoming. Your thought takes shape, structure, and direction.
//     </p>
//     <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
//       <li><strong>Intention:</strong> Set your intention and define your request.</li>
//       <li><strong>Direction:</strong> Clarify specifics to create energetic direction and inevitability.</li>
//     </ul>

//     {/* Step III */}
//     <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>III. EMOTION + BELIEF</h3>
//     <p style={{ marginBottom: "0.8rem" }}>
//       Align your frequency with your desire. Believe and create. Manifestation responds to frequency, not words.
//     </p>
//     <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
//       <li><strong>Emotional Resonance:</strong> Feel already having your desire.</li>
//       <li><strong>Belief Examination:</strong> Identify patterns contradicting your intention.</li>
//       <li><strong>Rewiring Subconscious:</strong> Shift from “I cannot” to “This is meant for me.”</li>
//       <li><strong>Energetic Coherence:</strong> Align thoughts, emotions, expectations, and actions to amplify manifestation.</li>
//     </ul>

//     {/* Step IV */}
//     <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>IV. IDENTITY ALIGNMENT</h3>
//     <p style={{ marginBottom: "0.8rem" }}>
//       Become the version of you who already has it. Manifestation accelerates when your identity matches the life you are calling in.
//     </p>
//     <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
//       <li><strong>Self Image Upgrade:</strong> Visualize your future self.</li>
//       <li><strong>Behavioural Evolution:</strong> Align habits and decisions to your future self.</li>
//       <li><strong>Internal Standard Reset:</strong> Only say yes to what aligns with your manifestation.</li>
//       <li><strong>State of Being:</strong> Embody worthiness, confidence, and alignment.</li>
//     </ul>

//     {/* Step V */}
//     <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>V. ALIGNED ACTION</h3>
//     <p style={{ marginBottom: "0.8rem" }}>
//       Act as your future self would. Do what aligns with your intention. The mental starts manifesting into the tangible.
//     </p>
//     <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
//       <li><strong>Intuitive Movement:</strong> Act effortlessly in alignment with your desires.</li>
//       <li><strong>Momentum Building:</strong> Reinforce belief within your subconscious.</li>
//       <li><strong>Energetic Cycle:</strong> Enter a powerful flow state where reality bends.</li>
//     </ul>

//     {/* Step VI */}
//     <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>VI. RECEIVING + EMBODIMENT</h3>
//     <p style={{ marginBottom: "0.8rem" }}>
//       Allow the Universe to deliver. Detach from outcomes and embody the version of yourself who already has your manifestation.
//     </p>
//     <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
//       <li><strong>Surrender:</strong> Release control, timelines, and pressure.</li>
//       <li><strong>Openness:</strong> Recognize signs, synchronicities, and support.</li>
//       <li><strong>Receiving State:</strong> Allow manifestation to arrive naturally.</li>
//       <li><strong>Integration:</strong> Live as if your new reality is already yours.</li>
//       <li><strong>Gratitude:</strong> Express gratitude to stabilize manifestation.</li>
//     </ul>
//   </div>
// </div>


//             </div>
//             <div style={{ margin: "5rem 0", textAlign: "center" }}>
    
//   <h2
//     style={{
//       fontSize: "2.6rem",
//       fontWeight: 800,
//       background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "white",
//       marginBottom: "2rem",
//     }}
    
//   >
//     MANIFESTATION OFFERINGS
//   </h2>

//   <div
//     style={{
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "center",
//       gap: "2.5rem",
//     }}
//   >
//     {manifestationList.map((item) => (
//       <div
//         key={item._id}
//         style={{
//           width: "330px",
//           padding: "2.2rem",
//           borderRadius: "22px",
//           background: "rgba(255,255,255,0.08)",
//           backdropFilter: "blur(18px)",
//           border: "1px solid rgba(255,255,255,0.18)",

//           boxShadow: "0 0 35px rgba(255,0,255,0.20)",
//           position: "relative",
//           overflow: "hidden",
//           transition: "all 0.35s ease",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
//           e.currentTarget.style.boxShadow = "0 0 45px rgba(255,0,255,0.35)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "translateY(0) scale(1)";
//           e.currentTarget.style.boxShadow = "0 0 35px rgba(255,0,255,0.20)";
//         }}
//       >
//         {/* Glow Border */}
//         <div
//           style={{
//             position: "absolute",
//             inset: "-2px",
//             borderRadius: "24px",
//             background: "linear-gradient(135deg,#ff00ff,#8a2be2,#00ffff)",
//             filter: "blur(15px)",
//             zIndex: -1,
//             opacity: 0.22,
//           }}
//         />

//         <h3
//           style={{
//             fontSize: "1.4rem",
//             fontWeight: 700,
//             background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "white",
//             marginBottom: "0.7rem",
//           }}
//         >
//           {item.label}
//         </h3>

//         <p style={{ color: "white", fontSize: "1rem", lineHeight: "1.55" }}>
//           {item.description}
//         </p>

//         <p style={{ color: "#ccc", marginTop: "0.8rem" }}>
//           <strong>Deliverable:</strong> {item.deliverable}
//         </p>

//         <div
//           style={{
//             marginTop: "1.5rem",
//             display: "flex",
//             gap: "12px",
//           }}
//         >
//           {/* <button
//             onClick={() => alert(item.fullDesc)}
//             style={{
//               flex: 1,
//               padding: "0.8rem 1rem",
//               borderRadius: "14px",
//               background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
//               border: "none",
//               color: "white",
//               fontWeight: 600,
//               cursor: "pointer",
//               transition: "0.3s",
//             }}
//           >
//             Know More
//           </button> */}

//           <button
//   onClick={() => navigate("/know-more")}
//   style={{
//     flex: 1,
//     padding: "0.8rem 1rem",
//     borderRadius: "14px",
//     background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
//     border: "none",
//     color: "white",
//     fontWeight: 600,
//     cursor: "pointer",
//   }}
// >
//   KNOW MORE
// </button>


//           <button
//             onClick={() => handleBookNow(item)}
//             style={{
//               flex: 1,
//               padding: "0.8rem 1rem",
//               borderRadius: "14px",
//               background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//               border: "none",
//               color: "white",
//               fontWeight: 600,
//               cursor: "pointer",
//               transition: "0.3s",
//             }}
//           >
//             BOOK NOW
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>




// {/*     
        
// <div style={{ margin: "5rem 0", textAlign: "center" }}>
//   <h2
//     style={{
//       fontSize: "2.6rem",
//       fontWeight: 800,
//       background: "linear-gradient(90deg,#00ffff,#ff00ff)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "white",
//       marginBottom: "2rem",
//     }}
//   >
//     Well-being Offerings
//   </h2>

//   <div
//     style={{
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "center",
//       gap: "2.5rem",
//     }}
//   >
//     {wellbeingList.map((item) => (
//       <div
//         key={item._id}
//         style={{
//           width: "330px",
//           padding: "2.2rem",
//           borderRadius: "22px",
//           background: "rgba(255,255,255,0.08)",
//           backdropFilter: "blur(18px)",
//           border: "1px solid rgba(255,255,255,0.18)",

//           boxShadow: "0 0 35px rgba(0,255,255,0.20)",
//           position: "relative",
//           overflow: "hidden",
//           transition: "all 0.35s ease",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
//           e.currentTarget.style.boxShadow = "0 0 45px rgba(0,255,255,0.35)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "translateY(0) scale(1)";
//           e.currentTarget.style.boxShadow = "0 0 35px rgba(0,255,255,0.20)";
//         }}
//       >
        
//         <div
//           style={{
//             position: "absolute",
//             inset: "-2px",
//             borderRadius: "24px",
//             background: "linear-gradient(135deg,#00ffff,#8a2be2,#ff00ff)",
//             filter: "blur(15px)",
//             zIndex: -1,
//             opacity: 0.22,
//           }}
//         />

//         <h3
//           style={{
//             fontSize: "1.4rem",
//             fontWeight: 700,
//             background: "linear-gradient(90deg,#00ffff,#ff00ff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "white",
//             marginBottom: "0.7rem",
//           }}
//         >
//           {item.label}
//         </h3>

//         <p style={{ color: "white", fontSize: "1rem", lineHeight: "1.55" }}>
//           {item.description}
//         </p>

//         <p style={{ color: "#ccc", marginTop: "0.8rem" }}>
//           <strong>Deliverable:</strong> {item.deliverable}
//         </p>

//         <div
//           style={{
//             marginTop: "1.5rem",
//             display: "flex",
//             gap: "12px",
//           }}
//         >
//           <button
//   onClick={() => navigate("/know-more")}
//   style={{
//     flex: 1,
//     padding: "0.8rem 1rem",
//     borderRadius: "14px",
//     background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
//     border: "none",
//     color: "white",
//     fontWeight: 600,
//     cursor: "pointer",
//   }}
// >
//   Know More
// </button>


//           <button
//             onClick={() => handleBookNow(item)}
//             style={{
//               flex: 1,
//               padding: "0.8rem 1rem",
//               borderRadius: "14px",
//               background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//               border: "none",
//               color: "white",
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
// </div> */}



// <div style={{ margin: "5rem 0", textAlign: "center" , padding: "0 1rem",}}>
//   <h2
//     style={{
//       fontSize: "2.6rem",
//       fontWeight: 800,
//       background: "linear-gradient(90deg,#00ffff,#ff00ff)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "white",
//       marginBottom: "2rem",
//     }}
//   >
//     WELL-BEING OFFERINGS
//   </h2>

//   <div
//     style={{
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "center",
//       gap: "2.5rem",
//     }}
//   >
//     {wellbeingList.map((item) => (
//       <div
//         key={item._id}
//         style={{
//           width: "330px",
//           padding: "2.2rem",
//           borderRadius: "22px",
//           background: "rgba(255,255,255,0.08)",
//           backdropFilter: "blur(18px)",
//           border: "1px solid rgba(255,255,255,0.18)",
//           boxShadow: "0 0 35px rgba(0,255,255,0.20)",
//           position: "relative",
//           overflow: "hidden",
//           transition: "all 0.35s ease",
//           textAlign : "center",
          

//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
//           e.currentTarget.style.boxShadow = "0 0 45px rgba(0,255,255,0.35)";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "translateY(0) scale(1)";
//           e.currentTarget.style.boxShadow = "0 0 35px rgba(0,255,255,0.20)";
//         }}
//       >
     
//         <div
//           style={{
//             position: "absolute",
//             inset: "-2px",
//             borderRadius: "24px",
//             background: "linear-gradient(135deg,#00ffff,#8a2be2,#ff00ff)",
//             filter: "blur(15px)",
//             zIndex: -1,
//             opacity: 0.22,
//           }}
//         />

//         <h3
//           style={{
//             fontSize: "1.4rem",
//             fontWeight: 700,
//             background: "linear-gradient(90deg,#00ffff,#ff00ff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "white",
//             marginBottom: "0.7rem",
//           }}
//         >
//           {item.label}
//         </h3>

//         <p style={{ color: "white", fontSize: "1rem", lineHeight: "1.55" }}>
//           {item.description}
//         </p>

//         <p style={{ color: "#ccc", marginTop: "0.8rem" }}>
//           <strong>Deliverable:</strong> {item.deliverable}
//         </p>

//         <div
//           style={{
//             marginTop: "1.5rem",
//             display: "flex",
//             gap: "12px",
//           }}
//         >
//           <button
//             onClick={() => navigate("/know-more")}
//             style={{
//               flex: 1,
//               padding: "0.8rem 1rem",
//               borderRadius: "14px",
//               background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
//               border: "none",
//               color: "white",
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//           >
//             KNOW MORE
//           </button>

//           <button
//             onClick={() => handleBookNow(item)}
//             style={{
//               flex: 1,
//               padding: "0.8rem 1rem",
//               borderRadius: "14px",
//               background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//               border: "none",
//               color: "white",
//               fontWeight: 600,
                 
//               cursor: "pointer",
//             }}
//           >
//             BOOK NOW
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
// <div
//   style={{
//     margin: "5rem auto",
//     maxWidth: "1200px",
//     padding: "0 1.5rem",
//     display: "flex",
//     alignItems: "center",
//     gap: "4rem",
//     flexWrap: "wrap",
//     color: "#ffffff",
//   }}
// >
//   {/* IMAGE */}
//   <div
//     className="wellbeing-image"
//     style={{
//       flex: "1 1 420px",
//       maxWidth: "420px",
//       borderRadius: "26px",
//       overflow: "hidden",
//       boxShadow: "0 25px 70px rgba(0,255,255,0.18)",
//     }}
//   >
//     <img
//       src={WellBeing}
//       alt="Well Being"
//       style={{
//         width: "100%",
//         height: "100%",
//         objectFit: "cover",
//         display: "block",
//       }}
//     />
//   </div>

//   {/* TEXT */}
//   <div
//     className="wellbeing-text"
//     style={{
//       flex: "1 1 520px",
//     }}
//   >
//     <h3
//       style={{
//         fontSize: "2.3rem",
//         fontWeight: 800,
//         marginBottom: "1.2rem",
//         background: "linear-gradient(90deg,#00ffff,#ff00ff)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "white",
//         textAlign: "left",
//       }}
//     >
//       WELL BEING
//     </h3>

//     <p
//       style={{
//         fontSize: "1.1rem",
//         lineHeight: "1.85",
//         color: "#e5e5e5",
//         textAlign: "left",
//       }}
//     >
//       Your well-being is the core of everything you build. When you thrive,
//       every part of your life moves into alignment. Well-being is not
//       self-care — it is the foundation that allows your desires to land,
//       settle, and expand within you.
//     </p>
//   </div>


//   <div
//   style={{
//     margin: "6rem auto",
//     maxWidth: "1000px",
//     padding: "0 1.5rem",
//     color: "#ffffff",
//   }}
// >
//   {/* MAIN TITLE */}
//   <h2
//     style={{
//       fontSize: "2.6rem",
//       fontWeight: 800,
//       textAlign: "center",
//       marginBottom: "0.6rem",
//       background: "linear-gradient(90deg,#00ffff,#ff00ff)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "white",
//     }}
//   >
//     WELL BEING
//   </h2>

//   {/* SUB TITLE */}
//   <h3
//     style={{
//       fontSize: "1.6rem",
//       fontWeight: 600,
//       textAlign: "center",
//       marginBottom: "2.5rem",
//       color: "#ffd6ff",
//     }}
//   >
//     The Architecture of Your Inner Home
//   </h3>

//   {/* INTRO */}
//   <p style={paraStyle}>
//     Before manifestation takes form outside you, it must find a stable,
//     high-frequency home within you. Well-being is not optional. It is the
//     mandatory foundation for anyone who desires to create, attract, or
//     transform.
//   </p>

//   <p style={paraStyle}>Think of yourself as a home.</p>

//   {/* LEFT ALIGNED BULLETS (NO GRID) */}
//   <ul
//     style={{
//       margin: "1.8rem 0 2.2rem",
//       paddingLeft: "1.4rem",
//       lineHeight: "1.9",
//       color: "#eaeaea",
//       fontSize: "1.05rem",
//       listStyle: "none", 
//       textAlign: "left",
//     }}
//   >
//     <li>Your thoughts are the walls.</li>
//     <li>Your emotions are the decor.</li>
//     <li>Your energy is the lighting.</li>
//     <li>Your body is the structure.</li>
//     <li>Your spirit is the presence filling the space.</li>
//   </ul>

//   <p style={paraStyle}>
//     When this home is cluttered, dim, or leaking energy, no desire can settle
//     inside it. Manifestation requires a clean, aligned, energised inner space
//     that can receive, hold, and expand.
//   </p>

//   <p style={paraStyle}>
//     This is the housekeeping of your soul — the cleaning, upkeep, and decor
//     of the home within you.
//   </p>

//   {/* SECTION */}
//  <h4 style={sectionHeading }>
//   Why Well-Being Is Mandatory for Manifestation
// </h4>

// <p style={paraStyle}>
//   You cannot manifest desires beyond the frequency you are currently holding.
// </p>

// <p style={paraStyle}>
//   Fear cannot receive abundance. A nervous system in survival mode blocks expansion.
// </p>

// <p style={paraStyle}>
//   Grief struggles to receive love. Heavy emotional residue lowers receptivity.
// </p>

// <p style={paraStyle}>
//   Low energy cannot hold new timelines. A depleted inner field cannot sustain
//   higher possibilities.
// </p>


//   <p style={paraStyle}>
//     Your desires are not denied. They are waiting for your inner home to rise
//     to meet them.
//   </p>

//   <p style={paraStyle}>
//     Well-being raises your frequency so your desires can finally enter.
//   </p>

//   {/* FINAL LINE */}
//   <p
//     style={{
//       ...paraStyle,
//       fontWeight: 600,
//       textAlign: "center",
//       marginTop: "3rem",
//       textAlign: "left", 
//     }}
//   >
//     Well-being is not self-care.  
//     It is the silent architecture of your destiny.
//   </p>

//   <p
//     style={{
//       ...paraStyle,
//       fontWeight: 700,
//       textAlign: "center",
//       fontSize: "1.2rem",
//        textAlign: "left", 
//     }}
//   >
//     You are the home.  
//     Your frequency is the foundation.
//   </p>
// </div>

// </div>



// </div>

            // <div style={{ margin: "4rem 0", textAlign: "center" }}>
            //   <h2
            //     style={{
            //       fontSize: "2.4rem",
                  
            //       WebkitBackgroundClip: "text",
            //       WebkitTextFillColor: "white",
            //     }}
            //   >
            //     FAQs
            //   </h2>

            //   {faqs.map((faq, idx) => (
            //     <div key={idx} style={{ marginBottom: "1rem" }}>
            //       <h3
            //         onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
            //         style={{
            //           cursor: "pointer",
            //           background: "rgba(255,255,255,0.1)",
            //           padding: "1rem",
            //           borderRadius: "16px",
            //         }}
            //       >
            //         {faq.question}
            //       </h3>

            //       {faqOpen === idx && (
            //         <p
            //           style={{
            //             marginTop: "0.5rem",
            //             padding: "1rem",
            //             background: "rgba(255,255,255,0.08)",
            //             borderRadius: "12px",
            //           }}
            //         >
            //           {faq.answer}
            //         </p>
            //       )}
            //     </div>
            //   ))}
            // </div>
      //     </>
      //   )}
      // </div>
//     </div>
//   );
// };


// const inputStyle = {
//   width: "100%",
//   padding: "1rem",
//   borderRadius: "12px",
//   border: "1px solid rgba(255,255,255,0.18)",
//   background: "rgba(255,255,255,0.06)",
//   color: "#fff",
//   fontSize: "1rem",
//   outline: "none",
// };

// const paymentInput = {
//   width: "90%",
//   maxWidth: "420px",
//   padding: "0.9rem 1rem",
//   borderRadius: "12px",
//   border: "1px solid rgba(255,255,255,0.16)",
//   background: "rgba(255,255,255,0.04)",
//   color: "#fff",
//   fontSize: "1rem",
//   outline: "none",
// };

// const smallPayBtn = {
//   margin: "0.4rem",
//   padding: "0.6rem 1.3rem",
//   borderRadius: "30px",
//   border: "1px solid rgba(255,255,255,0.12)",
//   background: "rgba(255,255,255,0.04)",
//   color: "#fff",
//   cursor: "pointer",
// };
// /* ================= WELL BEING TEXT STYLES ================= */

// const paraStyle = {
//   fontSize: "1rem",
//   lineHeight: "1.85",
//   color: "#ddd",
//   marginBottom: "1.2rem",
//   textAlign: "justify",
// };

// const listStyle = {
//   paddingLeft: "1.4rem",
//   marginBottom: "1.6rem",
//   lineHeight: "1.7",
//   color: "#ddd",
// };

// const sectionHeading = {
//   fontSize: "1.8rem",
//   fontWeight: 800,
//   margin: "3rem 0 1.2rem",
//   background: "linear-gradient(90deg,#00ffff,#ff00ff)",
//   WebkitBackgroundClip: "text",
//   WebkitTextFillColor: "white",
//   textAlign: "left",
// };

// const subHeading = {
//   fontSize: "1.3rem",
//   fontWeight: 700,
//   margin: "1.8rem 0 0.8rem",
//   color: "#ffd6ff",
// };



// export default Manifestation;






























import React, { useState, useEffect, useRef } from "react";
import "../../styles/Manifestation.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import ManifestationHero from "../../assets/Manifestation_Final.png";
import WellBeing from "../../assets/Well being_Final.png";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Loader2,
  Zap,
  FileText,
} from "lucide-react";

const API_URL = "https://astrobackend-5sr6.onrender.com/api/manifestation";
const BOOKING_API = "https://astrobackend-5sr6.onrender.com/api/bookings";
const PAYMENTS_API = "https://astrobackend-5sr6.onrender.com/api/payments";

// Updated FAQs with API integration
const faqs = [
  {
    question: "Can we show an Action button in front of every offering for booking?",
    answer: "Yes! Each offering has a 'Book Now' button that opens the booking form with all details.",
  },
  {
    question: "Will customers receive a confirmation email?",
    answer: "Yes. After submission and payment, a confirmation email with next steps is sent automatically.",
  },
  {
    question: "Can we make a portal to upload PDFs for each customer?",
    answer: "Yes. Backend portal can be integrated where you upload PDFs that are automatically sent to customer emails.",
  },
];


const Manifestation = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef(null);

  // Services/Offerings state
  const [manifestationList, setManifestationList] = useState([]);
  const [wellbeingList, setWellbeingList] = useState([]);
  const [loadingServices, setLoadingServices] = useState(false);

  // Booking flow state (matching Energy component structure)
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState(null);

  // Form state
  const [question, setQuestion] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [photoFile, setPhotoFile] = useState(null);

  // Payment & confirmation state
  const [processing, setProcessing] = useState(false);
  const [confirmationMsg, setConfirmationMsg] = useState("");
  const [pdfReady, setPdfReady] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // FAQ state
  const [faqOpen, setFaqOpen] = useState(null);
  const [dynamicFaqs, setDynamicFaqs] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  // Refs
  const bookingFormRef = useRef(null);

  // Get user from localStorage
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

  // FETCH OFFERINGS
  useEffect(() => {
    fetchOfferings();
    fetchFAQs();
  }, []);

  const fetchOfferings = async () => {
    try {
      setLoadingServices(true);
      const res = await axios.get(`${API_URL}/all`);
      if (res.data && res.data.status) {
        setManifestationList(res.data.manifestation || []);
        setWellbeingList(res.data.wellbeing || []);
      } else {
        // Fallback demo items
        setManifestationList(res.data.manifestation || [
          {
            _id: "m1",
            label: "Manifestation Blueprint",
            description: "Personalized manifestation report.",
            fullDesc: "In-depth energetic report and steps.",
            deliverable: "Paid PDF",
            price: 499,
            key: "manifestation_blueprint"
          },
          {
            _id: "m2",
            label: "Guided Manifestation Session",
            description: "30-minute one-on-one guided session.",
            fullDesc: "Meditation + scripting + intention setting.",
            deliverable: "30-min Call",
            price: 999,
            key: "guided_session"
          },
        ]);
        setWellbeingList(res.data.wellbeing || [
          {
            _id: "w1",
            label: "Well-being Guide",
            description: "Free guide with rituals and practices.",
            fullDesc: "Practical daily practices to raise vibration.",
            deliverable: "Free PDF",
            price: 0,
            key: "wellbeing_guide"
          },
        ]);
      }
    } catch (err) {
      console.warn("Error fetching offerings:", err);
      // Fallback demo items
      setManifestationList([
        {
          _id: "m1",
          label: "Manifestation Blueprint",
          description: "Personalized manifestation report.",
          fullDesc: "In-depth energetic report and steps.",
          deliverable: "Paid PDF",
          price: 499,
          key: "manifestation_blueprint"
        },
        {
          _id: "m2",
          label: "Guided Manifestation Session",
          description: "30-minute one-on-one guided session.",
          fullDesc: "Meditation + scripting + intention setting.",
          deliverable: "30-min Call",
          price: 999,
          key: "guided_session"
        },
      ]);
      setWellbeingList([
        {
          _id: "w1",
          label: "Well-being Guide",
          description: "Free guide with rituals and practices.",
          fullDesc: "Practical daily practices to raise vibration.",
          deliverable: "Free PDF",
          price: 0,
          key: "wellbeing_guide"
        },
      ]);
    } finally {
      setLoadingServices(false);
    }
  };

  // FETCH FAQs FROM API
  const fetchFAQs = async () => {
    try {
      const res = await axios.get("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Manifestation");
      if (res.data?.success) {
        const activeFaqs = res.data.faqs.filter(f => f.status === "active");
        setDynamicFaqs(activeFaqs);
      }
    } catch (err) {
      console.error("FAQ fetch error:", err);
      setDynamicFaqs(faqs); // Use static FAQs as fallback
    }
  };

  // SELECT SERVICE - WITH SCROLLING (matching Energy component)
  const selectService = (service) => {
    if (!service) {
      alert("Service not found");
      return;
    }

    setSelectedService(service);
    setStep(1);
    
    // Scroll to booking form
    setTimeout(() => {
      if (bookingFormRef.current) {
        bookingFormRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  // FORM SUBMIT HANDLER
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !dob) {
      alert("Please fill required fields");
      return;
    }

    setStep(2);
    setErrorMsg("");
  };

  // BOOKING BACKEND FUNCTION (matching Energy component)
  const createBookingOnBackend = async (paymentStatus = "pending", paymentInfo = {}) => {
    try {
      const form = new FormData();
      form.append("serviceKey", selectedService.key || selectedService._id || "");
      form.append("serviceTitle", selectedService.label || selectedService.title || "");
      form.append("name", name);
      form.append("email", email);
      form.append("dob", dob);
      form.append("phone", phone || "");
      form.append("question", question || "");
      form.append("details", details || "");
      form.append("paymentStatus", paymentStatus);
      form.append("userId", userId);
      form.append("category", selectedService.price === 0 ? "wellbeing" : "manifestation");
      
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
          // Try alternative endpoint
          bookingRes = await axios.post(`${API_URL}/book`, form, {
            headers: { "Content-Type": "multipart/form-data" },
          });
        } catch (err2) {
          // Fallback to JSON payload
          const payload = {
            serviceKey: selectedService.key || selectedService._id || "",
            serviceTitle: selectedService.label || selectedService.title || "",
            name,
            email,
            dob,
            phone,
            question,
            details,
            paymentStatus,
            userId,
            paymentInfo,
            category: selectedService.price === 0 ? "wellbeing" : "manifestation"
          };
          bookingRes = await axios.post(`${API_URL}/create-booking`, payload).catch(() => null);
        }
      }

      return bookingRes?.data ?? null;
    } catch (err) {
      console.error("createBookingOnBackend error:", err);
      return null;
    }
  };

  // RAZORPAY PAYMENT HANDLER (from Energy component)
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
          `Thank you ${name}! Your free "${selectedService.label}" has been booked. We'll email it to ${email} within 24-48 hours.`
        );
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
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
        description: selectedService.label || selectedService.title,
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
                `Thank you ${name}! Payment successful. We'll email the ${selectedService.label} to ${email} within 24-48 hours.`
              );
              setPdfReady(!!verifyRes.data.pdfUrl);
              setShowConfetti(true);
              setTimeout(() => setShowConfetti(false), 4000);
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

  // RESET FUNCTION
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
    setErrorMsg("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Render stars for background (non-interactive)
  const renderStars = (count = 70) =>
    Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="star"
        style={{
          position: "absolute",
          background: "white",
          borderRadius: "50%",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${1 + Math.random() * 3}px`,
          height: `${1 + Math.random() * 3}px`,
          opacity: 0.8,
          animation: `starBlink ${2 + Math.random() * 4}s infinite ease-in-out`,
          pointerEvents: "none",
        }}
      />
    ));

  const progressWidth = (step / 3) * 100;

  // CSS for star animation
  const starStyles = `
    @keyframes starBlink {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.4); }
    }
    @keyframes orbFloat {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-40px) scale(1.1); }
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .spin { animation: spin 1s linear infinite; }
    @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg);} }
  `;

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        color: "#fff",
        background: "radial-gradient(circle at top, #1e003f, #0a0018)",
        minHeight: "100vh",
        padding: "3rem 2rem",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* TOP RIGHT CTA */}
      <a
        href="/manifestation"
        style={{
          position: "fixed",
          top: "22px",
          right: "25px",
          background: "linear-gradient(90deg, #ff00ff, #00ffff)",
          color: "#fff",
          padding: "10px 22px",
          borderRadius: "30px",
          fontWeight: "600",
          fontSize: "16px",
          textDecoration: "none",
          zIndex: 1500,
          boxShadow: "0 6px 30px rgba(0,0,0,0.45)",
        }}
      >
        ALIGN
      </a>

      <style>{starStyles}</style>

      {/* STARS container */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        {renderStars(70)}
      </div>

      {/* ORBS decorative */}
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.3,
          zIndex: 0,
          animation: "orbFloat 15s ease-in-out infinite",
          background: "radial-gradient(circle, #ff00ff, transparent)",
          top: "10%",
          left: "5%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.3,
          zIndex: 0,
          animation: "orbFloat 15s ease-in-out infinite 3s",
          background: "radial-gradient(circle, #00ffff, transparent)",
          bottom: "15%",
          right: "10%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          filter: "blur(80px)",
          opacity: 0.28,
          zIndex: 0,
          animation: "orbFloat 15s ease-in-out infinite 6s",
          background: "radial-gradient(circle, #8a2be2, transparent)",
          top: "60%",
          left: "70%",
          pointerEvents: "none",
        }}
      />

      {/* SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isLoggedIn={false}
      />
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 998,
          }}
        />
      )}

      {/* MAIN CONTENT */}
      <div className="manifestation-content" style={{ marginLeft: !isMobile && sidebarOpen ? 300 : 0, transition: "margin-left .3s" }}>
        
        {/* ===== RESPONSIVE HERO SECTION ===== */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "3rem",
            marginBottom: "5rem",
            padding: "clamp(1.5rem, 4vw, 3rem)",
            borderRadius: "30px",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 25px 70px rgba(0,0,0,0.55)",
          }}
        >
          {/* IMAGE */}
          <div
            style={{
              flex: "1 1 360px",
              maxWidth: "380px",
              minHeight: "300px",
              borderRadius: "22px",
              overflow: "hidden",
              boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
            }}
          >
            <img
              src={ManifestationHero}
              alt="Manifestation"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* CONTENT */}
          <div
            style={{
              flex: "1 1 420px",
              color: "#fff",
              marginTop: "-70px",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                fontWeight: 800,
                marginBottom: "1.2rem",
                background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "white",
                textAlign: "left",
              }}
            >
              MANIFESTATION
            </h1>

            <p
              style={{
                fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
                lineHeight: 1.85,
                color: "#e5e5e5",
                textAlign: "justify",
              }}
            >
              Manifestation is simply the ancient art of turning energy into the
              physical. It is taking a thought, a desire, a whisper from your inner
              self, and weaving it into the fabric of reality. It is the moment your
              inner world and the Universe begin speaking the same language.
              <br />
              <br />
              When your intention, emotion, belief, and action fall into alignment,
              life bends, pathways open, and possibilities rearrange themselves
              around you. Manifestation is not wishful thinking; it is conscious
              creation.
              <br />
              <br />
              It is the process of stepping into the version of yourself who already
              holds what you seek, and allowing the Universe to meet you there, with
              synchronicities, signs, and outcomes that feel nothing short of magical.
            </p>
          </div>
        </div>

        {/* GALLERY SECTION */}
        <div style={{ margin: "4rem 0", textAlign: "center" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              "v1731850200/gallery1_cfks3s.jpg",
              "v1731850201/gallery2_gcrait.jpg",
              "v1731850202/gallery3_ym9nkn.jpg",
              "v1731850203/gallery4_at782l.jpg",
            ].map((img, i) => (
              <img
                key={i}
                src={`https://res.cloudinary.com/doerrm32l/image/upload/${img}`}
                alt={`Gallery ${i + 1}`}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
            ))}
          </div>
        </div>

        {/* HOW MANIFESTATION WORKS SECTION */}
         <div style={{ margin: "5rem 0", textAlign: "center", padding: "0 1rem" }}>
   <h2
    style={{
      fontSize: "2.6rem",
      fontWeight: 800,
      background: "linear-gradient(90deg,#ff00ff,#00ffff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "white",
      marginBottom: "2rem",
    }}
  >
    {/* How Manifestation Works */}
  </h2>

  <p style={{ fontSize: "1.1rem", color: "#ccc", maxWidth: "800px", margin: "0 auto 3rem auto", lineHeight: "1.7" }}>
    Here is a clearly defined six-step process, which gives you insights as to how the Manifestation process really works.
  </p>

   {/* Step 0 */}
  <div style={{ textAlign: "left", maxWidth: "900px", margin: "0 auto", color: "white" }}>
    <h3 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "1rem" }}>
      0. PREPARATION OF THE INNER FIELD
    </h3>
    <p style={{ marginBottom: "0.8rem" }}>
      Paving the Path for Manifestation. The Reset. Before you manifest, you must prepare the internal landscape from which manifestation grows. This step is about knowing yourself: identifying your energetic blueprint, understanding blockages, and creating safety for your desires to land.
    </p>
    <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
      <li><strong>Energy Measurement:</strong> Measure your vibration using the Bovis & Hawkins Scale.</li>
      <li><strong>Astrological Fit:</strong> Determine the best manifestation method based on Moon sign, emotional wiring, and energetic constitution.</li>
      <li><strong>Identifying Blockages:</strong> Uncover energy leaks, past traumas, limiting beliefs, and hidden resistance causes.</li>
      <li><strong>Emotional Release:</strong> Surrender fear, guilt, shame, anger, and other blocking emotions.</li>
      <li><strong>Subconscious Safety:</strong> Instill safety in your subconscious for limitless manifestation.</li>
      <li><strong>Chakra Balancing:</strong> Regulate and empower chakras to fuel manifestation.</li>
      <li><strong>Holistic Well Being:</strong> Stabilize mind, body, and energy to become a magnetic field for manifestation.</li>
    </ul>

     {/* Step I */}
    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>I. THE DESIRE</h3>
    <p style={{ marginBottom: "0.8rem" }}>
      Your manifestation journey begins when a desire rises within you. A true desire feels like memory, not fantasy.
    </p>
    <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
      <li><strong>The Inner Self Signals:</strong> You sense a future you are ready to hold.</li>
      <li><strong>The Subconscious Responds:</strong> You feel longing, curiosity, or emotional pull.</li>
      <li><strong>The Bridge Activates:</strong> Your future self communicates with your present self.</li>
    </ul>

     {/* Step II */}
    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>II. INTENTION + CLARITY</h3>
    <p style={{ marginBottom: "0.8rem" }}>
      Turning Desire into Direction. Intention bridges desiring and becoming. Your thought takes shape, structure, and direction.
    </p>
    <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
      <li><strong>Intention:</strong> Set your intention and define your request.</li>
      <li><strong>Direction:</strong> Clarify specifics to create energetic direction and inevitability.</li>
    </ul>

     {/* Step III */}
    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>III. EMOTION + BELIEF</h3>
    <p style={{ marginBottom: "0.8rem" }}>
      Align your frequency with your desire. Believe and create. Manifestation responds to frequency, not words.
    </p>
    <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
      <li><strong>Emotional Resonance:</strong> Feel already having your desire.</li>
      <li><strong>Belief Examination:</strong> Identify patterns contradicting your intention.</li>
      <li><strong>Rewiring Subconscious:</strong> Shift from “I cannot” to “This is meant for me.”</li>
      <li><strong>Energetic Coherence:</strong> Align thoughts, emotions, expectations, and actions to amplify manifestation.</li>
    </ul>

     {/* Step IV */}
    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>IV. IDENTITY ALIGNMENT</h3>
    <p style={{ marginBottom: "0.8rem" }}>
      Become the version of you who already has it. Manifestation accelerates when your identity matches the life you are calling in.
    </p>
    <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
      <li><strong>Self Image Upgrade:</strong> Visualize your future self.</li>
      <li><strong>Behavioural Evolution:</strong> Align habits and decisions to your future self.</li>
      <li><strong>Internal Standard Reset:</strong> Only say yes to what aligns with your manifestation.</li>
      <li><strong>State of Being:</strong> Embody worthiness, confidence, and alignment.</li>
    </ul>

     {/* Step V */}
    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>V. ALIGNED ACTION</h3>
    <p style={{ marginBottom: "0.8rem" }}>
      Act as your future self would. Do what aligns with your intention. The mental starts manifesting into the tangible.
    </p>
    <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
      <li><strong>Intuitive Movement:</strong> Act effortlessly in alignment with your desires.</li>
      <li><strong>Momentum Building:</strong> Reinforce belief within your subconscious.</li>
      <li><strong>Energetic Cycle:</strong> Enter a powerful flow state where reality bends.</li>
    </ul>

     {/* Step VI */}
    <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>VI. RECEIVING + EMBODIMENT</h3>
    <p style={{ marginBottom: "0.8rem" }}>
      Allow the Universe to deliver. Detach from outcomes and embody the version of yourself who already has your manifestation.
    </p>
    <ul style={{ marginBottom: "2rem", paddingLeft: "1.2rem", lineHeight: "1.6" }}>
      <li><strong>Surrender:</strong> Release control, timelines, and pressure.</li>
      <li><strong>Openness:</strong> Recognize signs, synchronicities, and support.</li>
      <li><strong>Receiving State:</strong> Allow manifestation to arrive naturally.</li>
      <li><strong>Integration:</strong> Live as if your new reality is already yours.</li>
      <li><strong>Gratitude:</strong> Express gratitude to stabilize manifestation.</li>
    </ul>
  </div>
</div>

        {/* MANIFESTATION OFFERINGS */}
        <div style={{ margin: "5rem 0", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: 800,
              background: "linear-gradient(90deg,#ff00ff,#00ffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "white",
              marginBottom: "2rem",
            }}
          >
            MANIFESTATION OFFERINGS
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {manifestationList.map((item) => (
              <div
                key={item._id}
                style={{
                  width: "330px",
                  padding: "2.2rem",
                  borderRadius: "22px",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 0 35px rgba(255,0,255,0.20)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 0 45px rgba(255,0,255,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 35px rgba(255,0,255,0.20)";
                }}
              >
                {/* Glow Border */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-2px",
                    borderRadius: "24px",
                    background: "linear-gradient(135deg,#ff00ff,#8a2be2,#00ffff)",
                    filter: "blur(15px)",
                    zIndex: -1,
                    opacity: 0.22,
                  }}
                />

                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "white",
                    marginBottom: "0.7rem",
                  }}
                >
                  {item.label}
                </h3>

                <p style={{ color: "white", fontSize: "1rem", lineHeight: "1.55" }}>
                  {item.description}
                </p>

                <p style={{ color: "#ccc", marginTop: "0.8rem" }}>
                  <strong>Deliverable:</strong> {item.deliverable}
                </p>

                <div style={{ marginTop: "1.5rem", display: "flex", gap: "12px" }}>
                  <button
                    onClick={() => navigate("/know-more")}
                    style={{
                      flex: 1,
                      padding: "0.8rem 1rem",
                      borderRadius: "14px",
                      background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
                      border: "none",
                      color: "white",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    KNOW MORE
                  </button>

                  <button
                    onClick={() => selectService(item)}
                    style={{
                      flex: 1,
                      padding: "0.8rem 1rem",
                      borderRadius: "14px",
                      background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                      border: "none",
                      color: "white",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WELL-BEING OFFERINGS */}
        <div style={{ margin: "5rem 0", textAlign: "center", padding: "0 1rem" }}>
          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: 800,
              background: "linear-gradient(90deg,#00ffff,#ff00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "white",
              marginBottom: "2rem",
            }}
          >
            WELL-BEING OFFERINGS
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            {wellbeingList.map((item) => (
              <div
                key={item._id}
                style={{
                  width: "330px",
                  padding: "2.2rem",
                  borderRadius: "22px",
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(18px)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  boxShadow: "0 0 35px rgba(0,255,255,0.20)",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.35s ease",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-12px) scale(1.03)";
                  e.currentTarget.style.boxShadow = "0 0 45px rgba(0,255,255,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 0 35px rgba(0,255,255,0.20)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "-2px",
                    borderRadius: "24px",
                    background: "linear-gradient(135deg,#00ffff,#8a2be2,#ff00ff)",
                    filter: "blur(15px)",
                    zIndex: -1,
                    opacity: 0.22,
                  }}
                />

                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    background: "linear-gradient(90deg,#00ffff,#ff00ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "white",
                    marginBottom: "0.7rem",
                  }}
                >
                  {item.label}
                </h3>

                <p style={{ color: "white", fontSize: "1rem", lineHeight: "1.55" }}>
                  {item.description}
                </p>

                <p style={{ color: "#ccc", marginTop: "0.8rem" }}>
                  <strong>Deliverable:</strong> {item.deliverable}
                </p>

                <div style={{ marginTop: "1.5rem", display: "flex", gap: "12px" }}>
                  <button
                    onClick={() => navigate("/know-more")}
                    style={{
                      flex: 1,
                      padding: "0.8rem 1rem",
                      borderRadius: "14px",
                      background: "linear-gradient(90deg,#8a2be2,#ff00ff)",
                      border: "none",
                      color: "white",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    KNOW MORE
                  </button>

                  <button
                    onClick={() => selectService(item)}
                    style={{
                      flex: 1,
                      padding: "0.8rem 1rem",
                      borderRadius: "14px",
                      background: "linear-gradient(90deg,#ff00ff,#00ffff)",
                      border: "none",
                      color: "white",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* WELL BEING CONTENT SECTION */}
          <div
            style={{
              margin: "5rem auto",
              maxWidth: "1200px",
              padding: "0 1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "4rem",
              flexWrap: "wrap",
              color: "#ffffff",
            }}
          >
            {/* IMAGE */}
            <div
              className="wellbeing-image"
              style={{
                flex: "1 1 420px",
                maxWidth: "420px",
                borderRadius: "26px",
                overflow: "hidden",
                boxShadow: "0 25px 70px rgba(0,255,255,0.18)",
              }}
            >
              <img
                src={WellBeing}
                alt="Well Being"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* TEXT */}
            <div
              className="wellbeing-text"
              style={{
                flex: "1 1 520px",
              }}
            >
              <h3
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 800,
                  marginBottom: "1.2rem",
                  background: "linear-gradient(90deg,#00ffff,#ff00ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "white",
                  textAlign: "left",
                }}
              >
                WELL BEING
              </h3>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.85",
                  color: "#e5e5e5",
                  textAlign: "left",
                }}
              >
                Your well-being is the core of everything you build. When you thrive,
                every part of your life moves into alignment. Well-being is not
                self-care — it is the foundation that allows your desires to land,
                settle, and expand within you.
              </p>
            </div>
          </div>

    

        </div>

        {/* BOOKING FORM SECTION (Updated to match Energy component) */}
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
                      {selectedService.price === 0 ? "Well-being" : "Manifestation"}
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h3 style={{ 
                        margin: "0 0 12px",
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#fff",
                      }}>
                        {selectedService.label}
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

                      {/* Additional Details */}
                      <div style={{ marginBottom: "25px" }}>
                        <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
                          Additional Details / Notes
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
                          <div style={{ fontWeight: "600", color: "#fff", fontSize: "16px" }}>{selectedService.label}</div>
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
                      {showConfetti && (
                        <div style={{ fontSize: "48px", marginBottom: "0.6rem" }}>🎉</div>
                      )}
                      
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
                        {confirmationMsg || `Thank you ${name}! ${selectedService.price === 0 ? 'Your free booking has been confirmed.' : 'Payment successful.'} We'll email the ${selectedService.label} to ${email} within 24-48 hours.`}
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
                          {selectedService.price === 0 ? "Book Another Service" : "Book Another Reading"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
        </div>

        {/* FAQs SECTION */}
        <div style={{ maxWidth: 1200,margin: "0 auto", textAlign: "center" }}>

          {/* <div style={{ margin: "4rem 0", textAlign: "center" }}> */}
              <h2
                style={{
                  fontSize: "2.4rem",
                  
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "white",
                }}
              >
                FAQs
              </h2>

              {faqs.map((faq, idx) => (
                <div key={idx} style={{ marginBottom: "1rem" }}>
                  <h3
                    onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                    style={{
                      cursor: "pointer",
                      background: "rgba(255,255,255,0.1)",
                      padding: "1rem",
                      borderRadius: "16px",
                    }}
                  >
                    {faq.question}
                  </h3>

                  {faqOpen === idx && (
                    <p
                      style={{
                        marginTop: "0.5rem",
                        padding: "1rem",
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: "12px",
                      }}
                    >
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            {/* </div> */}
        </div>
      </div>
    </div>
  );
};

// Style constants (same as original)
const paraStyle = {
  fontSize: "1rem",
  lineHeight: "1.85",
  color: "#ddd",
  marginBottom: "1.2rem",
  textAlign: "justify",
};

const listStyle = {
  paddingLeft: "1.4rem",
  marginBottom: "1.6rem",
  lineHeight: "1.7",
  color: "#ddd",
};

const sectionHeading = {
  fontSize: "1.8rem",
  fontWeight: 800,
  margin: "3rem 0 1.2rem",
  background: "linear-gradient(90deg,#00ffff,#ff00ff)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "white",
  textAlign: "left",
};

const subHeading = {
  fontSize: "1.3rem",
  fontWeight: 700,
  margin: "1.8rem 0 0.8rem",
  color: "#ffd6ff",
};

export default Manifestation;







