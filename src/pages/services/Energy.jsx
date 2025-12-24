// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../../styles/Energy.css";
// import Sidebar from "../../components/Sidebar";
// import {
//   Sparkles,
//   Star,
//   ArrowRight,
//   CheckCircle,
//   Loader2,
//   Zap,
//   FileText,
// } from "lucide-react";

// const SERVICES_API = "https://astrobackend-5sr6.onrender.com/api/energy-services";
// const BOOKING_API = "https://astrobackend-5sr6.onrender.com/api/bookings";
// const PAYMENTS_API = "https://astrobackend-5sr6.onrender.com/api/payments";

// export default function Energy() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const sidebarRef = useRef(null);

//   const [services, setServices] = useState([]);
//   const [loadingServices, setLoadingServices] = useState(false);

//   const [step, setStep] = useState(0);
//   const [selectedService, setSelectedService] = useState(null);

//   const [question, setQuestion] = useState("");
//   const [details, setDetails] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [dob, setDob] = useState("");
//   const [photoFile, setPhotoFile] = useState(null);

//   const [processing, setProcessing] = useState(false);
//   const [confirmationMsg, setConfirmationMsg] = useState("");
//   const [pdfReady, setPdfReady] = useState(false);
//   const [faqs, setFaqs] = useState([]);
//   const [openFaq, setOpenFaq] = useState(null);

//   // Ref for booking form
//   const bookingFormRef = useRef(null);

//   // RESPONSIVE
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // FETCH SERVICES
//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       setLoadingServices(true);
//       const res = await axios.get(`${SERVICES_API}/all`);
//       if (Array.isArray(res.data?.services)) {
//         setServices(res.data.services);
//       } else if (Array.isArray(res.data)) {
//         setServices(res.data);
//       }
//     } catch (err) {
//       console.log("Service fetch error:", err);
//     } finally {
//       setLoadingServices(false);
//     }
//   };
//   // FETCH FAQs (ENERGY PAGE)
//   useEffect(() => {
//     axios
//       .get("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Energy")
//       .then((res) => {
//         const activeFaqs = res.data.faqs.filter(
//           (f) => f.status === "active"
//         );
//         setFaqs(activeFaqs);
//       })
//       .catch((err) => {
//         console.error("Energy FAQ fetch error:", err);
//       });
//   }, []);


//   // SELECT SERVICE - FIXED SCROLLING
//   const selectService = (service) => {
//     if (!service) {
//       alert("Service not found");
//       return;
//     }

//     setSelectedService(service);
//     setStep(1);
    
//     // Scroll to booking form
//     setTimeout(() => {
//       if (bookingFormRef.current) {
//         bookingFormRef.current.scrollIntoView({ 
//           behavior: 'smooth', 
//           block: 'start' 
//         });
//       }
//     }, 100);
//   };


//   // FORM SUBMIT
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !email || !dob) return alert("Please fill required fields");

//     setStep(2);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // BOOKING BACKEND
//   const createBookingOnBackend = async (paymentStatus = "pending", paymentInfo = {}) => {
//     try {
//       const form = new FormData();
//       form.append("serviceKey", selectedService.key || selectedService._id || "");
//       form.append("serviceTitle", selectedService.title || selectedService.name || "");
//       form.append("name", name);
//       form.append("email", email);
//       form.append("dob", dob);
//       form.append("question", question || "");
//       form.append("details", details || "");
//       form.append("paymentStatus", paymentStatus);
//       if (paymentInfo && typeof paymentInfo === "object") {
//         form.append("paymentInfo", JSON.stringify(paymentInfo));
//       }
//       if (photoFile) form.append("photo", photoFile);

//       let bookingRes = null;
//       try {
//         bookingRes = await axios.post(`${BOOKING_API}/create`, form, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//       } catch (err) {
//         try {
//           bookingRes = await axios.post(`${SERVICES_API}/book`, form, {
//             headers: { "Content-Type": "multipart/form-data" },
//           });
//         } catch (err2) {
//           const payload = {
//             serviceKey: selectedService.key || selectedService._id || "",
//             serviceTitle: selectedService.title || selectedService.name || "",
//             name,
//             email,
//             dob,
//             question,
//             details,
//             paymentStatus,
//             paymentInfo,
//           };
//           bookingRes = await axios.post(`${SERVICES_API}/create-booking`, payload).catch(() => null);
//         }
//       }

//       return bookingRes?.data ?? null;
//     } catch (err) {
//       console.error("createBookingOnBackend error:", err);
//       return null;
//     }
//   };

//   // PAYMENT HANDLER
//   const handlePayment = async () => {
//     setProcessing(true);

//     const amount =
//       Number(selectedService.price || selectedService.amount || selectedService.price_inr || 0) || 499;

//     try {
//       const createOrderRes = await axios.post(`${PAYMENTS_API}/create-order`, { amount });
//       if (createOrderRes?.data?.success && createOrderRes.data.order && createOrderRes.data.key) {
//         const { order, key } = createOrderRes.data;

//         const options = {
//           key,
//           amount: order.amount,
//           currency: order.currency || "INR",
//           name: "THE FIFTH CUSP",
//           description: selectedService.title || selectedService.name || "Energy Reading",
//           order_id: order.id || order.order_id || order._id,
//           handler: async (razorResponse) => {
//             try {
//               const verifyRes = await axios.post(`${PAYMENTS_API}/verify`, {
//                 ...razorResponse,
//                 orderAmount: amount,
//               });

//               if (verifyRes?.data?.success) {
//                 await createBookingOnBackend("paid", verifyRes.data);
//                 setConfirmationMsg(
//                   `✨ Thank you ${name}! Payment successful. We'll email the reading to ${email} within 24-48 hours.`
//                 );
//                 setPdfReady(!!verifyRes.data.pdfUrl);
//                 setStep(3);
//               } else {
//                 await createBookingOnBackend("failed", { razor: razorResponse, verify: verifyRes?.data });
//                 alert("Payment verification failed. Contact support if amount was captured.");
//                 setConfirmationMsg("Payment processed but verification failed — contact support.");
//                 setStep(3);
//               }
//             } catch (err) {
//               console.error("verify error", err);
//               await createBookingOnBackend("failed", { error: err?.message });
//               alert("Payment verification failed due to network error.");
//               setStep(3);
//             } finally {
//               setProcessing(false);
//             }
//           },
//           prefill: { name, email },
//           theme: { color: "#7b2cbf" },
//         };

//         if (typeof window !== "undefined" && window.Razorpay) {
//           const rzp = new window.Razorpay(options);
//           rzp.on && rzp.on("payment.failed", function () {
//             alert("Payment failed. Try again.");
//             setProcessing(false);
//           });
//           rzp.open();
//           return;
//         }
//       }
//     } catch (err) {
//       console.warn("Payments backend unavailable:", err?.message || err);
//     }

//     // fallback success (dev mode)
//     setTimeout(async () => {
//       try {
//         await createBookingOnBackend("paid", { simulated: true });
//         setConfirmationMsg(
//           `✨ Thank you ${name}! Your booking for "${selectedService.title || selectedService.name || ""}" is confirmed. We'll email the reading to ${email} within 24-48 hours.`
//         );
//         setPdfReady(false);
//         setStep(3);
//       } catch (err) {
//         alert("Failed to save booking. Contact admin.");
//       } finally {
//         setProcessing(false);
//       }
//     }, 900);
//   };

//   // RESET
//   const resetAll = () => {
//     setStep(0);
//     setSelectedService(null);
//     setQuestion("");
//     setDetails("");
//     setName("");
//     setEmail("");
//     setDob("");
//     setPhotoFile(null);
//     setConfirmationMsg("");
//     setPdfReady(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const progressWidth = (step / 3) * 100;

//   return (
//     <div className="energy-page cosmic-bg" style={{ minHeight: "100vh", position: "relative", color: "#fff" }}>
      
//       {/* GLOBAL SIDEBAR */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* NOTE: No local <aside> sidebar & no hamburger button — removed */}

//       {/* COSMIC BG */}
//       <div className="vc-cosmic-stars" />
//       <div className="vc-stars-container">
//         {Array.from({ length: 36 }).map((_, i) => (
//           <div
//             key={i}
//             className="vc-star"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               width: `${1 + Math.random() * 2}px`,
//               height: `${1 + Math.random() * 2}px`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="vc-floating-orbs">
//         <div className="vc-orb vc-orb-1" />
//         <div className="vc-orb vc-orb-2" />
//         <div className="vc-orb vc-orb-3" />
//       </div>

//       {/* MAIN CONTENT */}
//       <main style={{ marginLeft: !isMobile && sidebarOpen ? 300 : 0, transition: "margin-left .3s" }}>
        
//         {/* HERO - EXACTLY AS BEFORE */}
//         <section className="hero-section" style={{ padding: "5rem 2rem 2rem" }}>
//           <div
//             className="hero-container"
//             style={{
//               maxWidth: 1200,
//               margin: "0 auto",
//               display: "grid",
//               gridTemplateColumns: "1.2fr 1fr",
//               gap: 24,
//               alignItems: "center",
//             }}
//           >
//             <div>
//               <div
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: 8,
//                   padding: "6px 12px",
//                   borderRadius: 999,
//                   background: "rgba(123,44,191,0.08)",
//                   color: "#ffb7ff",
//                   fontWeight: 700,
//                   marginBottom: 12,
//                 }}
//               >
                
//               </div>

//               <h1 style={{ fontSize: "2.6rem", margin: "0 0 12px", lineHeight: 1.05 }}>
//                 ENERGY
//               </h1>
//               <p style={{ color: "#c4b5fd", marginBottom: 18 }}>
//                LIVE THE ENERGY. COMMAND THE FREQUENCY.ALL MATTER IS ENERGY, EVERYTHING ELSE FOLLOWS.
//               </p>
//                  <h1 style={{ fontSize: "2.6rem", margin: "0 0 12px", lineHeight: 1.05 }}>
//                 WHAT IS ENERGY
//               </h1>
//               <p style={{ color: "#c4b5fd", marginBottom: 18 }}>
//                You don't attract what you want, you attract what you resonate with. Shift your frequency, and your entire reality rearranges itself to match you. Outer responds to the Inner. It is the only way to truly realize the gifts in your chart.
//               </p>

//               <div style={{ display: "flex", gap: 12 }}>
//                 <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#aaa" }}>
//                   <div style={{ display: "flex" }}>
//                     {[1, 2, 3, 4, 5].map((i) => (
//                       <Star key={i} size={14} color />
//                     ))}
//                   </div>
//                   <div style={{ fontSize: 14 }}></div>
//                 </div>
//               </div>
//             </div>

//             <div style={{ textAlign: "center" }}>
//               <div
//                 style={{
//                   borderRadius: 16,
//                   padding: 20,
//                   background: "linear-gradient(180deg, rgba(123,44,191,0.06), rgba(255,0,255,0.03))",
//                   display: "inline-block",
//                 }}
//               >
//                 <img
//                   src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
//                   alt="logo"
//                   style={{ width: 260, maxWidth: "100%", borderRadius: 12 }}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ================= HOW ENERGY WORKS ================= */}
//         <section className="energy-works-section">
//           <div className="energy-works-container">

//             <div className="energy-works-header">
//               <span className="energy-badge">ENERGY SCIENCE</span>
//               <h2 className="energy-works-title">
//                 HOW ENERGY WORKS
//               </h2>
//               <p className="energy-works-subtitle">
//                 Understanding resonance, frequency, and alignment
//               </p>
//             </div>

//             <div className="energy-works-card">
//               <p>
//                 All of us operate like a vibrational field, constantly broadcasting a
//                 frequency measured in Hertz. Emotions, thoughts, memories, traumas,
//                 beliefs, and even intentions carry distinct energetic signatures.
//               </p>

//               <p>
//                 Low-frequency states such as <strong>shame (20–30 Hz)</strong>,{" "}
//                 <strong>guilt (30 Hz)</strong>, <strong>fear (100–150 Hz)</strong>,{" "}
//                 <strong>grief (50–60 Hz)</strong>,{" "}
//                 <strong>depression (40–60 Hz)</strong>,{" "}
//                 <strong>confusion (100 Hz)</strong>, and{" "}
//                 <strong>anxiety (100–300 Hz)</strong> create contraction — heaviness,
//                 stagnation, and repeated negative outcomes.
//               </p>

//               <p>
//                 High-frequency states like <strong>courage (200–250 Hz)</strong>,{" "}
//                 <strong>acceptance (350–400 Hz)</strong>,{" "}
//                 <strong>love (500–540 Hz)</strong>, <strong>joy (540–600 Hz)</strong>,{" "}
//                 <strong>peace (600–700 Hz)</strong>,{" "}
//                 <strong>intuition (700–800 Hz)</strong>, and{" "}
//                 <strong>expanded consciousness (700–1000+ Hz)</strong> create expansion —
//                 health, peace, synchronicity, and effortless manifestation.
//               </p>

//               <div className="energy-highlight-box">
//                 <p>
//                   All because of <strong>Resonance</strong>. <br />
//                   All because of <strong>Alignment</strong>.
//                 </p>
//               </div>

//               <p>
//                 Resonance means whatever frequency you emit attracts experiences
//                 vibrating at the same level. Fear attracts more fear; abundance attracts
//                 opportunity, momentum, and growth.
//               </p>

//               <p>
//                 Alignment is not motivation — it is truth. When emotional, mental,
//                 physical, and energetic frequencies synchronize toward one intention,
//                 creation happens. The law of attraction is resonance in motion.
//               </p>

//               <p>
//                 Astrology reveals your blueprint, but it cannot always detect learned
//                 beliefs, childhood wounds, generational trauma, or emotional imprints
//                 stored in the body as <strong>energy leaks</strong>.
//               </p>

//               <p>
//                 Energy reading senses the frequency you are emitting <strong>today</strong>.
//                 When you understand your frequency, you understand why your life moves
//                 the way it does — and how to shift it into alignment.
//               </p>
//             </div>

//           </div>
//         </section>

//         {/* SERVICES - EXACTLY AS BEFORE */}
//         <section className="services-section" style={{ padding: "2rem" }}>
//           <div style={{ maxWidth: 1200, margin: "0 auto" }}>
//             <div style={{ marginBottom: 20 }}>
//               <h2 style={{ margin: 0 }}>SERVICES</h2>
//               <p style={{ color: "#c4b5fd" }}>Choose the reading that resonates with you</p>
//             </div>

//             {loadingServices ? (
//               <div style={{ color: "#ddd" }}>Loading services...</div>
//             ) : (
//               <div className="services-grid">
//                 {services.map((s) => (
//                   <article key={s._id || s.key} className="service-card">
//                     <div>
//                       <div
//                         style={{
//                           display: "inline-block",
//                           padding: "4px 10px",
//                           borderRadius: 999,
//                           background: "rgba(255,0,255,0.15)",
//                           color: "#ff00ff",
//                           fontWeight: 700,
//                           fontSize: 12,
//                           marginBottom: 10,
//                         }}
//                       >
//                         {s.tag || s.label || "Service"}
//                       </div>

//                       <h3>{s.title || s.name}</h3>
//                       <p>{s.short || s.description}</p>
//                     </div>

//                     <div style={{ textAlign: "right" }}>
//                       <div className="service-price">₹{s.price ?? s.amount ?? "—"}</div>

//                       <button className="book-btn" onClick={() => selectService(s)}>
//                         BOOK NOW
//                       </button>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>

//         {/* ================= FAQs ================= */}
//         <section className="home-section faq-section" style={{ padding: "4rem 2rem" }}>
//           <h2 style={{ textAlign: "center", marginBottom: 30 }}>FAQs</h2>

//           <div className="faq-container">
//             {faqs.map((faq, i) => (
//               <div className="faq-item" key={faq._id}>
//                 <div
//                   className="faq-question"
//                   onClick={() => setOpenFaq(openFaq === i ? null : i)}
//                 >
//                   <h4>{faq.question}</h4>
//                   <span>{openFaq === i ? "−" : "+"}</span>
//                 </div>

//                 {openFaq === i && (
//                   <div className="faq-answer">
//                     <p>{faq.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//        {/* BEAUTIFUL BOOKING FORM SECTION */}
// <div ref={bookingFormRef}>
//   {step > 0 && selectedService && (
//     <section className="form-section" style={{ padding: "2rem" }}>
//       <div className="cosmic-form-container" style={{
//         maxWidth: "1000px",
//         margin: "0 auto",
//         background: "rgba(30, 0, 50, 0.85)",
//         backdropFilter: "blur(15px)",
//         WebkitBackdropFilter: "blur(15px)",
//         borderRadius: "20px",
//         padding: "35px",
//         border: "1px solid rgba(255, 0, 255, 0.25)",
//         boxShadow: "0 15px 50px rgba(123, 44, 191, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
//         position: "relative",
//         overflow: "hidden",
//       }}>
        
//         <div style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: "radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.05), transparent 50%)",
//           pointerEvents: "none",
//           zIndex: 0,
//         }}></div>
        
//         <div style={{ position: "relative", zIndex: 1 }}>
//           {/* Service Header */}
//           <div style={{ marginBottom: "25px" }}>
//             <div style={{
//               display: "inline-block",
//               padding: "6px 14px",
//               background: "rgba(255,0,255,0.2)",
//               color: "#ff00ff",
//               fontWeight: "700",
//               fontSize: "12px",
//               borderRadius: "999px",
//               marginBottom: "12px",
//               letterSpacing: "0.5px",
//             }}>
//               {selectedService.tag || selectedService.label || "Service"}
//             </div>
            
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <h3 style={{ 
//                 margin: "0 0 12px",
//                 fontSize: "22px",
//                 fontWeight: "700",
//                 color: "#fff",
//               }}>
//                 {selectedService.title || selectedService.name}
//               </h3>
//               <div style={{ 
//                 color: "#c4b5fd",
//                 fontSize: "14px",
//                 fontWeight: "600",
//                 padding: "6px 14px",
//                 background: "rgba(255, 255, 255, 0.07)",
//                 borderRadius: "12px",
//                 border: "1px solid rgba(255, 255, 255, 0.1)",
//               }}>
//                 Step {step} of 3
//               </div>
//             </div>
//           </div>

//           {/* Progress Bar */}
//           <div style={{ marginBottom: "30px" }}>
//             <div style={{
//               height: "8px",
//               background: "rgba(255, 255, 255, 0.08)",
//               borderRadius: "4px",
//               overflow: "hidden",
//             }}>
//               <div 
//                 style={{
//                   width: `${Math.max(0, Math.min(100, progressWidth))}%`,
//                   height: "100%",
//                   background: "linear-gradient(90deg, #ff00ff, #7b2cbf, #ff00ff)",
//                   borderRadius: "4px",
//                   transition: "width 0.4s ease",
//                 }}
//               />
//             </div>
//           </div>

//           {/* STEP 1 - Personal Details */}
//           {step === 1 && (
//             <form onSubmit={handleFormSubmit} style={{ marginTop: "20px" }}>
//               <div style={{ 
//                 display: "grid", 
//                 gridTemplateColumns: "1fr 1fr", 
//                 gap: "20px",
//                 marginBottom: "20px",
//               }}>
//                 <div>
//                   <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
//                     Full Name *
//                   </label>
//                   <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Your full name"
//                     required
//                     style={{
//                       width: "100%",
//                       padding: "14px 16px",
//                       background: "rgba(255, 255, 255, 0.05)",
//                       border: "1px solid rgba(255, 255, 255, 0.12)",
//                       borderRadius: "12px",
//                       color: "#fff",
//                       fontSize: "15px",
//                     }}
//                   />
//                 </div>

//                 <div>
//                   <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
//                     Email *
//                   </label>
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="you@email.com"
//                     required
//                     style={{
//                       width: "100%",
//                       padding: "14px 16px",
//                       background: "rgba(255, 255, 255, 0.05)",
//                       border: "1px solid rgba(255, 255, 255, 0.12)",
//                       borderRadius: "12px",
//                       color: "#fff",
//                       fontSize: "15px",
//                     }}
//                   />
//                 </div>

//                 <div>
//                   <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
//                     Date of Birth *
//                   </label>
//                   <input
//                     type="date"
//                     value={dob}
//                     onChange={(e) => setDob(e.target.value)}
//                     required
//                     style={{
//                       width: "100%",
//                       padding: "14px 16px",
//                       background: "rgba(255, 255, 255, 0.05)",
//                       border: "1px solid rgba(255, 255, 255, 0.12)",
//                       borderRadius: "12px",
//                       color: "#fff",
//                       fontSize: "15px",
//                     }}
//                   />
//                 </div>

//                 {/* Phone Number Field */}
//                 <div>
//                   <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     placeholder="+91 98765 43210"
//                     style={{
//                       width: "100%",
//                       padding: "14px 16px",
//                       background: "rgba(255, 255, 255, 0.05)",
//                       border: "1px solid rgba(255, 255, 255, 0.12)",
//                       borderRadius: "12px",
//                       color: "#fff",
//                       fontSize: "15px",
//                     }}
//                   />
//                 </div>
//               </div>

//               {/* Question for Yes/No Service */}
//               {selectedService.key === "yesNo" && (
//                 <div style={{ marginBottom: "20px" }}>
//                   <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
//                     Your Question *
//                   </label>
//                   <input
//                     type="text"
//                     value={question}
//                     onChange={(e) => setQuestion(e.target.value)}
//                     placeholder="What would you like to know?"
//                     required
//                     style={{
//                       width: "100%",
//                       padding: "14px 16px",
//                       background: "rgba(255, 255, 255, 0.05)",
//                       border: "1px solid rgba(255, 255, 255, 0.12)",
//                       borderRadius: "12px",
//                       color: "#fff",
//                       fontSize: "15px",
//                     }}
//                   />
//                 </div>
//               )}

//               {/* Photo Upload */}
//               <div style={{ marginBottom: "20px" }}>
//                 <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
//                   Upload Photo (Optional)
//                 </label>
//                 <div style={{
//                   border: "2px dashed rgba(255, 0, 255, 0.25)",
//                   borderRadius: "12px",
//                   padding: "20px",
//                   textAlign: "center",
//                   cursor: "pointer",
//                   background: "rgba(255, 255, 255, 0.03)",
//                   position: "relative",
//                 }}>
//                   <input 
//                     type="file" 
//                     accept="image/*" 
//                     onChange={(e) => setPhotoFile(e.target.files[0])} 
//                     style={{
//                       position: "absolute",
//                       width: "100%",
//                       height: "100%",
//                       top: 0,
//                       left: 0,
//                       opacity: 0,
//                       cursor: "pointer",
//                     }}
//                   />
//                   <div style={{ color: "#c4b5fd", fontSize: "14px" }}>
//                     {photoFile ? (
//                       <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
//                         <div style={{ color: "#4ade80" }}>✓</div>
//                         <span>{photoFile.name}</span>
//                       </div>
//                     ) : (
//                       "Click to upload or drag & drop photo"
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Additional Details */}
//               <div style={{ marginBottom: "25px" }}>
//                 <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
//                   Additional Details
//                 </label>
//                 <textarea
//                   value={details}
//                   onChange={(e) => setDetails(e.target.value)}
//                   rows={3}
//                   style={{
//                     width: "100%",
//                     padding: "14px 16px",
//                     background: "rgba(255, 255, 255, 0.05)",
//                     border: "1px solid rgba(255, 255, 255, 0.12)",
//                     borderRadius: "12px",
//                     color: "#fff",
//                     fontSize: "15px",
//                     resize: "vertical",
//                   }}
//                   placeholder="Anything else we should know..."
//                 />
//               </div>

//               {/* Form Actions */}
//               <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
//                 <button
//                   type="submit"
//                   style={{
//                     padding: "15px 24px",
//                     background: "linear-gradient(135deg,#ff00ff,#7b2cbf)",
//                     color: "#fff",
//                     borderRadius: "12px",
//                     border: "none",
//                     cursor: "pointer",
//                     fontWeight: "600",
//                     fontSize: "15px",
//                     flex: 1,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: "8px",
//                   }}
//                 >
//                   Continue to Payment <ArrowRight size={18} />
//                 </button>

//                 <button
//                   type="button"
//                   onClick={resetAll}
//                   style={{
//                     padding: "15px 24px",
//                     background: "rgba(255,255,255,0.06)",
//                     color: "#fff",
//                     borderRadius: "12px",
//                     border: "1px solid rgba(255,255,255,0.12)",
//                     cursor: "pointer",
//                     fontWeight: "600",
//                     fontSize: "15px",
//                     flex: 1,
//                   }}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           )}

//           {/* STEP 2 - Payment Summary */}
//           {step === 2 && (
//             <div>
//               <div style={{ 
//                 background: "rgba(255,255,255,0.04)", 
//                 borderRadius: "16px", 
//                 padding: "25px", 
//                 marginBottom: "25px",
//                 border: "1px solid rgba(255,255,255,0.08)"
//               }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
//                   <div style={{ color: "#c4b5fd", fontSize: "14px" }}>Service</div>
//                   <div style={{ fontWeight: "600", color: "#fff", fontSize: "16px" }}>{selectedService.title}</div>
//                 </div>

//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
//                   <div style={{ color: "#c4b5fd", fontSize: "14px" }}>Name</div>
//                   <div style={{ color: "#fff", fontSize: "15px" }}>{name}</div>
//                 </div>

//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
//                   <div style={{ color: "#c4b5fd", fontSize: "14px" }}>Email</div>
//                   <div style={{ color: "#fff", fontSize: "15px" }}>{email}</div>
//                 </div>

//                 <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
//                   <div style={{ color: "#c4b5fd", fontSize: "14px" }}>Delivery Time</div>
//                   <div style={{ color: "#4ade80", fontSize: "15px", fontWeight: "600" }}>24-48 Hours</div>
//                 </div>

//                 <div style={{ 
//                   display: "flex", 
//                   justifyContent: "space-between", 
//                   alignItems: "center", 
//                   marginTop: "20px",
//                   paddingTop: "20px",
//                   borderTop: "1px solid rgba(255,255,255,0.08)"
//                 }}>
//                   <div style={{ color: "#c4b5fd", fontSize: "16px", fontWeight: "600" }}>Total Amount</div>
//                   <div style={{
//                     fontSize: "28px",
//                     fontWeight: "800",
//                     color: "#ff00ff",
//                   }}>
//                     ₹{selectedService.price ?? selectedService.amount ?? "—"}
//                   </div>
//                 </div>
//               </div>

//               {/* Security Badge */}
//               <div style={{ marginBottom: "25px" }}>
//                 <div style={{
//                   padding: "12px 16px",
//                   background: "rgba(255, 255, 255, 0.04)",
//                   borderRadius: "10px",
//                   color: "#c4b5fd",
//                   textAlign: "center",
//                   border: "1px solid rgba(255, 255, 255, 0.08)",
//                   fontSize: "13px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: "8px",
//                 }}>
//                   <span>🔒</span>
//                   <span>Secure Payment • Razorpay Encrypted</span>
//                 </div>
//               </div>

//               {/* Payment Actions */}
//               <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
//                 <button
//                   onClick={handlePayment}
//                   disabled={processing}
//                   style={{
//                     padding: "16px 24px",
//                     background: "linear-gradient(135deg,#ff00ff,#7b2cbf)",
//                     color: "#fff",
//                     borderRadius: "12px",
//                     border: "none",
//                     cursor: processing ? "not-allowed" : "pointer",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     gap: "10px",
//                     fontWeight: "600",
//                     fontSize: "15px",
//                     flex: 1,
//                     whiteSpace: "nowrap",
//                     minWidth: "220px",
//                     opacity: processing ? 0.7 : 1,
//                   }}
//                 >
//                   {processing ? (
//                     <>
//                       <Loader2 size={18} className="spin" /> Processing Payment...
//                     </>
//                   ) : (
//                     <>
//                       <Zap size={18} /> Pay Securely Now
//                     </>
//                   )}
//                 </button>

//                 <button
//                   onClick={() => setStep(1)}
//                   style={{
//                     padding: "16px 24px",
//                     background: "rgba(255,255,255,0.06)",
//                     color: "#fff",
//                     borderRadius: "12px",
//                     border: "1px solid rgba(255,255,255,0.12)",
//                     cursor: "pointer",
//                     fontWeight: "600",
//                     fontSize: "15px",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   ← Edit Details
//                 </button>
//               </div>

//               {/* What You'll Receive */}
//               <div style={{ 
//                 marginTop: "30px",
//                 background: "rgba(123, 44, 191, 0.1)",
//                 borderRadius: "12px",
//                 padding: "20px",
//                 border: "1px solid rgba(123, 44, 191, 0.2)",
//               }}>
//                 <h4 style={{ color: "#fff", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
//                   📦 What You'll Receive:
//                 </h4>
//                 <ul style={{ 
//                   color: "#c4b5fd", 
//                   paddingLeft: "20px", 
//                   margin: 0,
//                   fontSize: "14px",
//                   lineHeight: "1.8",
//                 }}>
//                   <li>Detailed energy frequency analysis</li>
//                   <li>Personalized recommendations</li>
//                   <li>Downloadable PDF report</li>
//                   <li>Email delivery within 48 hours</li>
//                 </ul>
//               </div>
//             </div>
//           )}

//           {/* STEP 3 - Success */}
//           {step === 3 && (
//             <div style={{ textAlign: "center", padding: "20px 0" }}>
//               <div
//                 style={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   width: "90px",
//                   height: "90px",
//                   background: "radial-gradient(circle at center, rgba(74, 222, 128, 0.15), transparent 70%)",
//                   borderRadius: "50%",
//                   marginBottom: "25px",
//                 }}
//               >
//                 <CheckCircle size={48} color="#4ade80" />
//               </div>
              
//               <h3 style={{ 
//                 marginTop: "0", 
//                 marginBottom: "15px",
//                 fontSize: "26px",
//                 fontWeight: "700",
//                 color: "#4ade80",
//               }}>
//                 Payment Successful!
//               </h3>
              
//               <p style={{ 
//                 color: "#c4b5fd", 
//                 fontSize: "15px",
//                 lineHeight: "1.6",
//                 margin: "0 auto 25px",
//                 maxWidth: "600px",
//               }}>
//                 {confirmationMsg || `✨ Thank you ${name}! Payment successful. We'll email the reading to ${email} within 24-48 hours.`}
//               </p>

//               {pdfReady && (
//                 <div
//                   style={{
//                     display: "inline-flex",
//                     alignItems: "center",
//                     gap: "10px",
//                     marginTop: "8px",
//                     padding: "12px 20px",
//                     borderRadius: "10px",
//                     background: "rgba(74,222,128,0.1)",
//                     border: "1px solid rgba(74,222,128,0.25)",
//                     color: "#4ade80",
//                     fontWeight: 600,
//                     marginBottom: "25px",
//                     fontSize: "14px",
//                   }}
//                 >
//                   <FileText size={18} /> Your PDF report is ready
//                 </div>
//               )}

//               {/* Next Steps */}
//               <div style={{ 
//                 background: "rgba(255, 255, 255, 0.03)",
//                 borderRadius: "12px",
//                 padding: "20px",
//                 marginTop: "24px",
//                 textAlign: "left",
//               }}>
//                 <h4 style={{ color: "#fff", marginBottom: "12px" }}>
//                   📋 What happens next:
//                 </h4>
//                 <ol style={{ 
//                   color: "#c4b5fd", 
//                   paddingLeft: "20px", 
//                   margin: 0,
//                   fontSize: "14px",
//                   lineHeight: "1.8",
//                 }}>
//                   <li>Our energy specialists will analyze your frequency</li>
//                   <li>You'll receive a confirmation email within minutes</li>
//                   <li>The full reading will be delivered to your inbox</li>
//                   <li>Check your spam folder if you don't see it</li>
//                 </ol>
//               </div>

//               <div style={{ display: "flex", gap: "15px", justifyContent: "center", marginTop: "30px" }}>
//                 <button
//                   onClick={resetAll}
//                   style={{
//                     padding: "14px 24px",
//                     background: "rgba(255,255,255,0.06)",
//                     color: "#fff",
//                     borderRadius: "12px",
//                     border: "1px solid rgba(255,255,255,0.12)",
//                     cursor: "pointer",
//                     fontWeight: "600",
//                     fontSize: "15px",
//                   }}
//                 >
//                   Book Another Reading
//                 </button>
                
//                 <button
//                   onClick={() => window.location.href = '/'}
//                   style={{
//                     padding: "14px 24px",
//                     background: "rgba(255,255,255,0.03)",
//                     color: "#c4b5fd",
//                     borderRadius: "12px",
//                     border: "2px solid #7b2cbf",
//                     cursor: "pointer",
//                     fontWeight: "600",
//                     fontSize: "15px",
//                   }}
//                 >
//                   Back to Home
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   )}
// </div>
//       </main>

//       {/* INLINE STYLES */}
//       <style jsx>{`
//         .cosmic-form-container {
//           max-width: 1000px;
//           margin: 0 auto;
//           background: linear-gradient(135deg, rgba(20, 0, 30, 0.95), rgba(40, 0, 60, 0.9));
//           backdrop-filter: blur(20px);
//           border-radius: 24px;
//           padding: 40px;
//           position: relative;
//           overflow: hidden;
//           border: 1px solid rgba(255, 0, 255, 0.2);
//           box-shadow: 0 20px 60px rgba(123, 44, 191, 0.3),
//                       inset 0 1px 0 rgba(255, 255, 255, 0.1);
//         }

//         .cosmic-form-container::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: radial-gradient(circle at 30% 30%, rgba(255, 0, 255, 0.1), transparent 70%);
//           z-index: 0;
//         }

//         .form-header {
//           margin-bottom: 24px;
//           position: relative;
//           z-index: 1;
//         }

//         .service-tag {
//           display: inline-block;
//           padding: 6px 16px;
//           background: linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2));
//           color: #ffffffff;
//           font-weight: 700;
//           font-size: 12px;
//           letter-spacing: 1px;
//           border-radius: 20px;
//           margin-bottom: 12px;
//           text-transform: uppercase;
//         }

//         .form-title-section {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .form-main-title {
//           margin: 0;
//           font-size: 28px;
//           font-weight: 700;
//           background: linear-gradient(135deg, #ff00ff, #00ffff);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .step-indicator {
//           color: #c4b5fd;
//           font-size: 14px;
//           font-weight: 600;
//           padding: 6px 16px;
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 20px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .progress-container {
//           margin-bottom: 40px;
//           position: relative;
//           z-index: 1;
//         }

//         .progress-bar {
//           height: 8px;
//           background: rgba(255, 255, 255, 0.06);
//           border-radius: 4px;
//           overflow: hidden;
//           position: relative;
//         }

//         .progress-fill {
//           height: 100%;
//           background: linear-gradient(90deg, #ff00ff, #7b2cbf, #00ffff);
//           border-radius: 4px;
//           transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
//           position: relative;
//           overflow: hidden;
//         }

//         .progress-fill::after {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
//           animation: shimmer 2s infinite;
//         }

//         @keyframes shimmer {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }

//         /* Form Styles */
//         .booking-form {
//           position: relative;
//           z-index: 1;
//         }

//         .form-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 24px;
//           margin-bottom: 24px;
//         }

//         .form-group {
//           position: relative;
//         }

//         .form-label {
//           display: block;
//           margin-bottom: 10px;
//           color: #e2e8f0;
//           font-weight: 600;
//           font-size: 14px;
//           letter-spacing: 0.5px;
//         }

//         .required {
//           color: #ff6b6b;
//           margin-right: 4px;
//         }

//         .form-input, .form-textarea {
//           width: 100%;
//           padding: 16px;
//           background: rgba(255, 255, 255, 0.03);
//           border: 2px solid rgba(255, 255, 255, 0.1);
//           border-radius: 12px;
//           color: #fff;
//           font-size: 15px;
//           transition: all 0.3s ease;
//           font-family: inherit;
//         }

//         .form-input:focus, .form-textarea:focus {
//           outline: none;
//           border-color: #ff00ff;
//           box-shadow: 0 0 0 3px rgba(255, 0, 255, 0.2);
//           background: rgba(255, 255, 255, 0.05);
//         }

//         .form-input::placeholder {
//           color: rgba(255, 255, 255, 0.4);
//         }

//         .form-textarea {
//           resize: vertical;
//           min-height: 120px;
//         }

//         /* File Upload */
//         .file-upload-area {
//           border: 2px dashed rgba(255, 0, 255, 0.3);
//           border-radius: 12px;
//           padding: 24px;
//           text-align: center;
//           transition: all 0.3s ease;
//           cursor: pointer;
//           position: relative;
//           overflow: hidden;
//         }

//         .file-upload-area:hover {
//           border-color: #ff00ff;
//           background: rgba(255, 0, 255, 0.03);
//         }

//         .file-upload-input {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           top: 0;
//           left: 0;
//           opacity: 0;
//           cursor: pointer;
//         }

//         .upload-content {
//           color: #c4b5fd;
//         }

//         .upload-icon {
//           font-size: 48px;
//           margin-bottom: 12px;
//           opacity: 0.7;
//         }

//         .upload-note {
//           font-size: 12px;
//           color: #a78bfa;
//           margin-top: 8px;
//         }

//         .file-preview {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 12px;
//           background: rgba(74, 222, 128, 0.1);
//           border-radius: 8px;
//           animation: slideUp 0.3s ease;
//         }

//         .file-preview svg {
//           color: #4ade80;
//         }

//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         /* Buttons */
//         .form-actions {
//           display: flex;
//           gap: 16px;
//           margin-top: 30px;
//           flex-wrap: wrap;
//         }

//         .primary-btn, .secondary-btn, .payment-btn, .edit-btn {
//           padding: 16px 32px;
//           border-radius: 12px;
//           font-weight: 600;
//           font-size: 16px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           flex: 1;
//           min-width: 200px;
//           position: relative;
//           overflow: hidden;
//         }

//         .primary-btn {
//           background: linear-gradient(135deg, #ff00ff, #7b2cbf);
//           color: white;
//           border: none;
//         }

//         .primary-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 10px 30px rgba(255, 0, 255, 0.4);
//         }

//         .secondary-btn {
//           background: rgba(255, 255, 255, 0.05);
//           color: white;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .secondary-btn:hover {
//           background: rgba(255, 255, 255, 0.1);
//           border-color: rgba(255, 255, 255, 0.3);
//           transform: translateY(-1px);
//         }

//         /* Payment Step */
//         .payment-step {
//           position: relative;
//           z-index: 1;
//         }

//         .order-summary {
//           background: rgba(255, 255, 255, 0.03);
//           border-radius: 16px;
//           padding: 30px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           margin-bottom: 30px;
//         }

//         .summary-title {
//           color: #fff;
//           margin-bottom: 20px;
//           font-size: 20px;
//         }

//         .summary-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 12px 0;
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//         }

//         .summary-row:last-child {
//           border-bottom: none;
//         }

//         .summary-label {
//           color: #c4b5fd;
//           font-size: 14px;
//         }

//         .summary-value {
//           color: #fff;
//           font-weight: 600;
//         }

//         .delivery-time {
//           color: #4ade80 !important;
//         }

//         .summary-divider {
//           height: 2px;
//           background: rgba(255, 255, 255, 0.1);
//           margin: 20px 0;
//         }

//         .total-amount {
//           font-size: 32px;
//           font-weight: 800;
//           background: linear-gradient(135deg, #ff00ff, #00ffff);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         /* Security Badge */
//         .security-badge {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           padding: 16px;
//           background: rgba(255, 255, 255, 0.03);
//           border-radius: 12px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           margin-bottom: 24px;
//         }

//         .lock-icon {
//           font-size: 24px;
//         }

//         .security-title {
//           color: #fff;
//           font-weight: 600;
//           font-size: 14px;
//         }

//         .security-subtitle {
//           color: #c4b5fd;
//           font-size: 12px;
//         }

//         /* Payment Button */
//         .payment-btn {
//           background: linear-gradient(135deg, #ff00ff, #00ffff);
//           color: white;
//           border: none;
//         }

//         .payment-btn:hover:not(:disabled) {
//           transform: translateY(-2px);
//           box-shadow: 0 10px 30px rgba(0, 255, 255, 0.4);
//         }

//         .payment-btn:disabled {
//           opacity: 0.6;
//           cursor: not-allowed;
//         }

//         .edit-btn {
//           background: rgba(255, 255, 255, 0.05);
//           color: white;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }

//         .edit-btn:hover {
//           background: rgba(255, 255, 255, 0.1);
//           border-color: rgba(255, 255, 255, 0.3);
//         }

//         .payment-actions {
//           display: flex;
//           gap: 16px;
//           margin-bottom: 24px;
//           flex-wrap: wrap;
//         }

//         /* Benefits Box */
//         .benefits-box {
//           background: rgba(123, 44, 191, 0.1);
//           border-radius: 12px;
//           padding: 20px;
//           border: 1px solid rgba(123, 44, 191, 0.3);
//         }

//         .benefits-box h4 {
//           color: #fff;
//           margin-bottom: 12px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .benefits-box ul {
//           color: #c4b5fd;
//           padding-left: 20px;
//           margin: 0;
//           font-size: 14px;
//           line-height: 1.8;
//         }

//         .benefits-box li {
//           margin-bottom: 6px;
//         }

//         /* Success Step */
//         .success-step {
//           text-align: center;
//           padding: 20px 0;
//           position: relative;
//           z-index: 1;
//         }

//         .success-icon {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           width: 120px;
//           height: 120px;
//           background: radial-gradient(circle at center, rgba(74, 222, 128, 0.2), transparent 70%);
//           border-radius: 50%;
//           margin-bottom: 24px;
//           position: relative;
//         }

//         .success-pulse {
//           position: absolute;
//           width: 140%;
//           height: 140%;
//           background: radial-gradient(circle at center, rgba(74, 222, 128, 0.1), transparent 70%);
//           border-radius: 50%;
//           animation: pulse 2s infinite;
//         }

//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.5; transform: scale(1.05); }
//         }

//         .success-title {
//           font-size: 32px;
//           font-weight: 700;
//           background: linear-gradient(135deg, #4ade80, #22d3ee);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           margin-bottom: 16px;
//         }

//         .success-message {
//           color: #c4b5fd;
//           font-size: 16px;
//           line-height: 1.6;
//           max-width: 600px;
//           margin: 0 auto 30px;
//         }

//         .pdf-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           padding: 12px 24px;
//           background: linear-gradient(135deg, rgba(74, 222, 128, 0.1), rgba(34, 211, 238, 0.1));
//           border: 1px solid rgba(74, 222, 128, 0.3);
//           border-radius: 12px;
//           color: #4ade80;
//           font-weight: 600;
//           margin-bottom: 30px;
//           animation: bounceIn 0.5s ease;
//         }

//         @keyframes bounceIn {
//           0% { opacity: 0; transform: scale(0.3); }
//           50% { opacity: 1; transform: scale(1.05); }
//           70% { transform: scale(0.9); }
//           100% { transform: scale(1); }
//         }

//         .next-steps {
//           background: rgba(255, 255, 255, 0.03);
//           border-radius: 12px;
//           padding: 20px;
//           margin-top: 24px;
//           text-align: left;
//         }

//         .next-steps h4 {
//           color: #fff;
//           margin-bottom: 12px;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .next-steps ol {
//           color: #c4b5fd;
//           padding-left: 20px;
//           margin: 0;
//           font-size: 14px;
//           line-height: 1.8;
//         }

//         .next-steps li {
//           margin-bottom: 8px;
//         }

//         .success-actions {
//           display: flex;
//           gap: 16px;
//           justify-content: center;
//           margin-top: 30px;
//           flex-wrap: wrap;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .cosmic-form-container {
//             padding: 24px;
//             margin: 0 16px;
//           }
          
//           .form-grid {
//             grid-template-columns: 1fr;
//             gap: 20px;
//           }
          
//           .form-title-section {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 12px;
//           }
          
//           .form-main-title {
//             font-size: 24px;
//           }
          
//           .primary-btn,
//           .secondary-btn,
//           .payment-btn,
//           .edit-btn {
//             min-width: 100%;
//             width: 100%;
//           }
          
//           .payment-actions,
//           .form-actions,
//           .success-actions {
//             flex-direction: column;
//           }
          
//           .total-amount {
//             font-size: 24px;
//           }
//         }

//         .spin { animation: spin 1s linear infinite; }
//         @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg);} }

//         @media (max-width: 1024px) {
//           .hero-container { grid-template-columns: 1fr; gap: 20px; padding: 2rem 1rem; }
//         }
//       `}</style>
//     </div>
//   );
// }






















































































import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../styles/Energy.css";
import Sidebar from "../../components/Sidebar";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Loader2,
  Zap,
  FileText,
} from "lucide-react";

const SERVICES_API = "https://astrobackend-5sr6.onrender.com/api/energy-services";
const BOOKING_API = "https://astrobackend-5sr6.onrender.com/api/bookings";
const PAYMENTS_API = "https://astrobackend-5sr6.onrender.com/api/payments";

export default function Energy() {
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

  // Ref for booking form
  const bookingFormRef = useRef(null);

  // Get user from localStorage (same as Vastu)
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
  }, []);

  const fetchServices = async () => {
    try {
      setLoadingServices(true);
      const res = await axios.get(`${SERVICES_API}/all`);
      if (Array.isArray(res.data?.services)) {
        setServices(res.data.services);
      } else if (Array.isArray(res.data)) {
        setServices(res.data);
      }
    } catch (err) {
      console.log("Service fetch error:", err);
    } finally {
      setLoadingServices(false);
    }
  };

  // FETCH FAQs
  useEffect(() => {
    axios
      .get("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Energy")
      .then((res) => {
        const activeFaqs = res.data.faqs.filter(
          (f) => f.status === "active"
        );
        setFaqs(activeFaqs);
      })
      .catch((err) => {
        console.error("Energy FAQ fetch error:", err);
      });
  }, []);

  // SELECT SERVICE - FIXED SCROLLING
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

  // FORM SUBMIT - REMOVED window.scrollTo
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !dob) {
      alert("Please fill required fields");
      return;
    }

    setStep(2);
    // Removed window.scrollTo to prevent jumping to top
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

  // RAZORPAY PAYMENT HANDLER (FROM VASTU)
  const handlePayment = async () => {
    if (!selectedService) {
      alert("Please select a service first!");
      return;
    }

    if (!window.Razorpay) {
      alert("Payment system loading... Try again.");
      return;
    }

    try {
      setProcessing(true);

      const amount = selectedService.price || selectedService.amount || 499;

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
                `Thank you ${name}! Payment successful. We'll email the reading to ${email} within 24-48 hours.`
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

  // Render stars for background
  const renderStars = (count = 36) =>
    Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="vc-star"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${1 + Math.random() * 2}px`,
          height: `${1 + Math.random() * 2}px`,
        }}
      />
    ));

  return (
    <div className="energy-page cosmic-bg" style={{ minHeight: "100vh", position: "relative", color: "#fff" }}>
      
      {/* GLOBAL SIDEBAR */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* COSMIC BG */}
      <div className="vc-cosmic-stars" />
      <div className="vc-stars-container">
        {renderStars(36)}
      </div>

      <div className="vc-floating-orbs">
        <div className="vc-orb vc-orb-1" />
        <div className="vc-orb vc-orb-2" />
        <div className="vc-orb vc-orb-3" />
      </div>

      {/* MAIN CONTENT */}
      <main style={{ marginLeft: !isMobile && sidebarOpen ? 300 : 0, transition: "margin-left .3s" }}>
        
        {/* HERO SECTION */}
        <section className="hero-section" style={{ padding: "5rem 2rem 2rem" }}>
          <div
            className="hero-container"
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 24,
              alignItems: "center",
            }}
          >
            <div>
              <h1 style={{ fontSize: "2.6rem", margin: "0 0 12px", lineHeight: 1.05 }}>
                ENERGY
              </h1>
              <p style={{ color: "#c4b5fd", marginBottom: 18 }}>
               LIVE THE ENERGY. COMMAND THE FREQUENCY. ALL MATTER IS ENERGY, EVERYTHING ELSE FOLLOWS.
              </p>
              <h1 style={{ fontSize: "2.6rem", margin: "0 0 12px", lineHeight: 1.05 }}>
                WHAT IS ENERGY
              </h1>
              <p style={{ color: "#c4b5fd", marginBottom: 18 }}>
               You don't attract what you want, you attract what you resonate with. Shift your frequency, and your entire reality rearranges itself to match you. Outer responds to the Inner. It is the only way to truly realize the gifts in your chart.
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  borderRadius: 16,
                  padding: 20,
                  background: "linear-gradient(180deg, rgba(123,44,191,0.06), rgba(255,0,255,0.03))",
                  display: "inline-block",
                }}
              >
                <img
                  src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
                  alt="logo"
                  style={{ width: 260, maxWidth: "100%", borderRadius: 12 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* HOW ENERGY WORKS SECTION */}
     <section className="how-energy-section" style={{ padding: "4rem 2rem" }}>
  <div style={{ maxWidth: 1200, margin: "0 auto" }}>
    <motion.div
      style={{ textAlign: "center", marginBottom: 40 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <span style={{
        display: "inline-block",
        padding: "8px 20px",
        borderRadius: 999,
        background: "rgba(255, 255, 255, 0.1)",
        color: "#ffb7ff",
        fontWeight: 700,
        marginBottom: 16,
        fontSize: 14,
      }}>
        ENERGY SCIENCE
      </span>
      <h2 style={{ 
        fontSize: "2.5rem", 
        margin: "0 0 16px",
        color: "#fff",
      }}>
        HOW ENERGY WORKS
      </h2>
      <p style={{ color: "#c4b5fd", fontSize: "18px" }}>
        Understanding resonance, frequency, and alignment.
      </p>
    </motion.div>

    <motion.div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "20px",
        padding: "40px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        color: "#c4b5fd",
        lineHeight: "1.8",
        fontSize: "16px",
        textAlign: "left"
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <p style={{ marginBottom: "20px" }}>
        All of us operate like a vibrational field, constantly broadcasting a
        frequency measured in Hertz. Emotions, thoughts, memories, traumas,
        beliefs, and even intentions carry distinct energetic signatures.
      </p>

      <p style={{ marginBottom: "20px" }}>
        Low-frequency states such as <strong>shame (20–30 Hz)</strong>,{" "}
        <strong>guilt (30 Hz)</strong>, <strong>fear (100–150 Hz)</strong>,{" "}
        <strong>grief (50–60 Hz)</strong>,{" "}
        <strong>depression (40–60 Hz)</strong>,{" "}
        <strong>confusion (100 Hz)</strong>, and{" "}
        <strong>anxiety (100–300 Hz)</strong> create contraction — heaviness,
        stagnation, and repeated negative outcomes.
      </p>

      <p style={{ marginBottom: "20px" }}>
        High-frequency states like <strong>courage (200–250 Hz)</strong>,{" "}
        <strong>acceptance (350–400 Hz)</strong>,{" "}
        <strong>love (500–540 Hz)</strong>, <strong>joy (540–600 Hz)</strong>,{" "}
        <strong>peace (600–700 Hz)</strong>,{" "}
        <strong>intuition (700–800 Hz)</strong>, and{" "}
        <strong>expanded consciousness (700–1000+ Hz)</strong> create expansion —
        health, peace, synchronicity, and effortless manifestation.
      </p>

      <p style={{ marginBottom: "20px" }}>
        Resonance means whatever frequency you emit attracts experiences
        vibrating at the same level. Fear attracts more fear; abundance attracts
        opportunity, momentum, and growth.
      </p>

      <p style={{ marginBottom: "20px" }}>
        Alignment is not motivation — it is truth. When emotional, mental,
        physical, and energetic frequencies synchronize toward one intention,
        creation happens. The law of attraction is resonance in motion.
      </p>

      <p style={{ marginBottom: "20px" }}>
        Astrology reveals your blueprint, but it cannot always detect learned
        beliefs, childhood wounds, generational trauma, or emotional imprints
        stored in the body as <strong>energy leaks</strong>.
      </p>

      <p style={{ marginBottom: "0" }}>
        Energy reading senses the frequency you are emitting <strong>today</strong>.
        When you understand your frequency, you understand why your life moves
        the way it does — and how to shift it into alignment.
      </p>
    </motion.div>
  </div>
</section>

        {/* SERVICES SECTION */}
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
                  <article key={s._id || s.key} className="service-card" style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "16px",
                    padding: "24px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "transform 0.3s ease",
                    cursor: "pointer",
                  }}
                  onClick={() => selectService(s)}>
                    <div>
                      <div
                        style={{
                          display: "inline-block",
                          padding: "4px 12px",
                          borderRadius: 999,
                          background: "rgba(255,0,255,0.15)",
                          color: "#ff00ff",
                          fontWeight: 700,
                          fontSize: 12,
                          marginBottom: 12,
                        }}
                      >
                        {s.tag || s.label || "Energy"}
                      </div>

                      <h3 style={{ margin: "0 0 12px", fontSize: "20px", color: "#fff" }}>
                        {s.title || s.name}
                      </h3>
                      <p style={{ color: "#c4b5fd", marginBottom: 20, fontSize: "14px" }}>
                        {s.short || s.description}
                      </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px" }}>
                      <div className="service-price" style={{
                        fontSize: "24px",
                        fontWeight: "800",
                        color: "#ff00ff",
                      }}>
                        ₹{s.price ?? s.amount ?? "—"}
                      </div>

                      <button className="book-btn" onClick={(e) => {
                        e.stopPropagation();
                        selectService(s);
                      }} style={{
                        padding: "10px 20px",
                        background: "linear-gradient(135deg,#ff00ff,#7b2cbf)",
                        color: "#fff",
                        borderRadius: "10px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: "600",
                        fontSize: "14px",
                      }}>
                        BOOK NOW
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* FAQs SECTION */}
        {faqs.length > 0 && (
          <section className="home-section faq-section" style={{ padding: "4rem 2rem" }}>
            <h2 style={{ textAlign: "center", marginBottom: 30, fontSize: "2.5rem" }}>FAQs</h2>

            <div className="faq-container" style={{ maxWidth: 1200, margin: "0 auto" }}>
              {faqs.map((faq, i) => (
                <div className="faq-item" key={faq._id} style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "12px",
                  marginBottom: "12px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}>
                  <div
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      padding: "20px",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h4 style={{ margin: 0, color: "#fff", fontSize: "16px" }}>{faq.question}</h4>
                    <span style={{ color: "#ff00ff", fontSize: "20px", fontWeight: "bold" }}>
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </div>

                  {openFaq === i && (
                    <div className="faq-answer" style={{
                      padding: "0 20px 20px 20px",
                      color: "#c4b5fd",
                      lineHeight: "1.6",
                    }}>
                      <p style={{ margin: 0 }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* BOOKING FORM SECTION */}
        <div ref={bookingFormRef}>
          {step > 0 && selectedService && (
            <section className="form-section" style={{ padding: "2rem" }}>
              <div style={{
                maxWidth: 1600,
                margin: "0 auto",
                background: "rgba(255, 255, 255, 0.08)", // WHITE TRANSPARENT BACKGROUND
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
                      background: "rgba(255,0,255,0.15)",
                      color: "#ff00ff",
                      fontWeight: "700",
                      fontSize: "12px",
                      borderRadius: "999px",
                      marginBottom: "12px",
                    }}>
                      {selectedService.tag || selectedService.label || "Service"}
                    </div>
                    
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h3 style={{ 
                        margin: "0 0 12px",
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#fff",
                      }}>
                        {selectedService.title || selectedService.name}
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

                      {/* Question for Yes/No Service */}
                      {selectedService.key === "yesNo" && (
                        <div style={{ marginBottom: "20px" }}>
                          <label style={{ display: "block", marginBottom: "8px", color: "#e2e8f0", fontWeight: "600", fontSize: "14px" }}>
                            Your Question *
                          </label>
                          <input
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="What would you like to know?"
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
                      )}

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
                          Continue to Payment <ArrowRight size={18} />
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
                            fontSize: "28px",
                            fontWeight: "800",
                            color: "#ff00ff",
                          }}>
                            ₹{selectedService.price ?? selectedService.amount ?? "—"}
                          </div>
                        </div>
                      </div>

                      {/* Security Badge */}
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

                      {/* Payment Actions */}
                      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                        <button
                          onClick={handlePayment}
                          disabled={processing}
                          style={{
                            padding: "16px 24px",
                            background: "linear-gradient(135deg,#ff00ff,#7b2cbf)",
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
                              <Loader2 size={18} className="spin" /> Processing Payment...
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
                        Payment Successful!
                      </h3>
                      
                      <p style={{ 
                        color: "#c4b5fd", 
                        fontSize: "15px",
                        lineHeight: "1.6",
                        margin: "0 auto 25px",
                        maxWidth: "600px",
                      }}>
                        {confirmationMsg || `Thank you ${name}! Payment successful. We'll email the reading to ${email} within 24-48 hours.`}
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
                          Book Another Reading
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* INLINE STYLES */}
      <style>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg);} }

        @media (max-width: 1024px) {
          .hero-container { grid-template-columns: 1fr; gap: 20px; padding: 2rem 1rem; }
          .services-grid { grid-template-columns: 1fr; }
        }
        
        @media (max-width: 768px) {
          .hero-section h1 { font-size: 2rem; }
          .energy-works-section h2 { font-size: 2rem; }
          .form-section > div { padding: 24px; margin: 0 16px; }
          .form-section form > div { grid-template-columns: 1fr; }
          .form-section .flex { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}