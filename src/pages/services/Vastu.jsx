// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import "../../styles/Vastu.css";
// import VastuHeroImage from "../../assets/Vastu Architecture_Final.png";

// // ⭐ NEW — Sidebar import here
// import Sidebar from "../../components/Sidebar";

// const API_URL = "https://astrobackend-5sr6.onrender.com/api/payments";

// const services = [
//   {
//     id: "residential",
//     label: "RESIDENTAL E-VASTU",
//     description:
//       "Comprehensive Vastu evaluation for flats, villas, independent houses, builder floors, or farmhouses.",
//     benefits: [
//       "Enhanced peace & harmony",
//       "Improved family relationships",
//       "Better health & prosperity",
//     ],
//     amount: 500,
//     popular: true,
//   },
//   {
//     id: "commercial",
//     label: "COMMERICAL E-VASTU",
//     description: "Boost success and productivity in your business workspace.",
//     benefits: [
//       "Increased revenue",
//       "Better client attraction",
//       "Improved team harmony",
//     ],
//     amount: 1000,
//     popular: false,
//   },
//   {
//     id: "industrial",
//     label: "Industrial E-Vastu",
//     description:
//       "Specialized guidance for manufacturing units, IT parks, and industrial plants.",
//     benefits: [
//       "Optimized workflow",
//       "Better machinery placement",
//       "Enhanced productivity",
//     ],
//     amount: 2000,
//     popular: false,
//   },
//   {
//     id: "b2b",
//     label: "B2B SOLUTIONS",
//     description:
//       "Custom Vastu consultancy for corporates, showrooms, hotels, restaurants, and more.",
//     benefits: [
//       "Tailored solutions",
//       "Industry-specific guidance",
//       "Comprehensive analysis",
//     ],
//     amount: 5000,
//     popular: false,
//   },
// ];

// const b2bSubcategories = [
//   { name: "Real Estate & Construction" },
//   { name: "Corporate Offices & Startups" },
//   { name: "Retail Chains & Showrooms" },
//   { name: "Hotels & Hospitality" },
//   { name: "Warehouses & Logistics" },
//   { name: "Creative Studios" },
//   { name: "Banks & Financial" },
//   { name: "Restaurants & QSR" },
//   { name: "Automobile Industry" },
//   { name: "Fashion & Beauty" },
// ];

// const deliveryModes = [
//   { value: "PDF Report", desc: "Detailed PDF analysis" },
//   { value: "Call Discussion", desc: "30-min consultation call" },
//   { value: "Video Consultation", desc: "60-min video session" },
//   { value: "On-Site Visit", desc: "In-person consultation (Extra charges)" },
// ];

// const Vastu = () => {
//   const [faqs, setFaqs] = useState([]);
// const [openFaq, setOpenFaq] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
  

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     propertyStage: "",
//     issue: "",
//     deliveryMode: "",
//   });

//   // ✅ userId: login se lo, warna test user (admin jaisa)
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const userId = storedUser?._id || "672af93b9cf24a87a0c5f8de";

//   useEffect(() => {
//     if (!window.Razorpay) {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);
//   useEffect(() => {
//   axios
//     .get("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Vastu")
//     .then((res) => {
//       if (res.data?.faqs) {
//         const activeFaqs = res.data.faqs.filter(
//           (faq) => faq.status === "active"
//         );
//         setFaqs(activeFaqs);
//       }
//     })
//     .catch((err) => {
//       console.error("Vastu FAQ error:", err);
//     });
// }, []);


//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleServiceSelect = (service) => {
//     if (!service) return;
//     if (service.id === "b2b") {
//       setSelectedService(service);
//       setStep("b2b");
//     } else {
//       setSelectedService(service);
//       setStep(2);
//     }
//     if (isMobile) setSidebarOpen(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//   };

//   const validateForm = () => {
//     const req = ["fullName", "email", "phone", "address", "propertyStage", "deliveryMode"];
//     return req.every((k) => formData[k]?.trim() !== "");
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       alert("");
//       return;
//     }
//     setStep(3);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handlePayment = async () => {
//   if (!selectedService) return alert("Please select a service first!");

//   if (!window.Razorpay) {
//     alert("Payment system loading... Try again.");
//     return;
//   }

//   try {
//     setLoading(true);

//     const orderRes = await axios.post(
//       "https://astrobackend-5sr6.onrender.com/api/payments/create-order",
//       {
//         amount: selectedService.amount,
//         userId: userId,
//       }
//     );

//     if (!orderRes.data.success) {
//       alert("Order creation failed.");
//       setLoading(false);
//       return;
//     }

//     const order = orderRes.data.order;

//     const options = {
//       key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: "INR",
//       name: "THE FIFTH CUSP",
//       description: selectedService.label,
//       order_id: order.id,

//       handler: async function (response) {
//         try {
//           const verifyRes = await axios.post(
//             "https://astrobackend-5sr6.onrender.com/api/payments/verify",
//             {
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_signature: response.razorpay_signature,
//               userId,
//               amount: selectedService.amount,
//             }
//           );

//           if (verifyRes.data.success) {
//             setStep(4);
//           } else {
//             alert("Payment verification failed.");
//           }
//         } catch (error) {
//           console.log("VERIFY ERROR:", error);
//           alert("Verification request failed.");
//         }
//       },

//       prefill: {
//         name: formData.fullName,
//         email: formData.email,
//         contact: formData.phone,
//       },

//       theme: {
//         color: "#7b2cbf",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();

//     setLoading(false);
//   } catch (err) {
//     console.log("ORDER ERROR:", err);
//     alert("Payment could not be processed.");
//     setLoading(false);
//   }
// };


//   const resetForm = () => {
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       address: "",
//       propertyStage: "",
//       issue: "",
//       deliveryMode: "",
//     });
//     setSelectedService(null);
//     setStep(1);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const renderStars = (count = 40) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="vc-star"
//         style={{
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 2}px`,
//           height: `${1 + Math.random() * 2}px`,
//         }}
//       />
//     ));

//   return (
//     <div className="vastu-page vastu-cosmic-bg">
//       {/* ⭐ NEW GLOBAL SIDEBAR */}
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       <div className="vc-cosmic-stars" />
//       <div className="vc-stars-container">{renderStars(40)}</div>
//       <div className="vc-floating-orbs">
//         <div className="vc-orb vc-orb-1" />
//         <div className="vc-orb vc-orb-2" />
//         <div className="vc-orb vc-orb-3" />
//       </div>

//       <main className={`main-content`}>
//         {/* -------------------- STEP 1 -------------------- */}
//         {step === 1 && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//             <section className="hero-section">
//               <div className="hero-container">
//                 <div className="hero-content">
//                   {/* <div className="hero-badge">AUTHENTIC VASTU CONSULTANCY</div> */}
//                   <h1 className="hero-title">VASTU</h1>
//                 <p className="hero-description">
//   Your space is not just a physical structure — it is a living frequency field.
//   Every placement activates a specific zone, and each zone governs a distinct area
//   of your life. From finances and health to relationships and mental clarity,
//   space silently shapes outcomes.
//   <br /><br />
//   Vastu is sacred architecture aligned with cosmic geometry, working to redirect
//   divine energies in your favour. Sixteen zones. Infinite possibilities. When
//   aligned, your space becomes a channel for stability, growth, and blessings.
// </p>


//                   <button
//                     className="hero-cta"
//                     onClick={() =>
//                       document
//                         .querySelector(".services-section")
//                         .scrollIntoView({ behavior: "smooth" })
//                     }
//                   >
//                     EXPLORE SERVICES 
//                   </button>
//                 </div>

//                 <motion.div
//                   className="hero-image"
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                 >
//                  <img
//   src={VastuHeroImage}
//   alt="Vastu Architecture"
//   className="vastu-hero-img"
// />
//                 </motion.div>
//               </div>
//             </section>
                
// <section className="how-vastu-section">
//   <div className="container">
//     <motion.div
//       className="how-vastu-header"
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       viewport={{ once: true }}
//     >
//       {/* <span className="how-vastu-badge">SACRED SPATIAL SCIENCE</span> */}
//       <h2>HOW VASTU WORKS</h2>
//       <p>
//         Vastu Shastra is where cosmic intelligence meets architectural space.
//       </p>
//     </motion.div>

//     <motion.div
//       className="how-vastu-content"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ delay: 0.2, duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <p>
//         <strong>Vastu Shastra is a 3D science</strong> where the cosmos interacts
//         with our spatial layout. It studies placements, elements, numbers,
//         colours, shapes, heights, weights and symbolisms — and how their energetic
//         imprint interacts with Earth’s forces such as ultraviolet & infrared
//         radiation, geopathic energy, Hartmann & Curry grid lines, Ley lines,
//         fault lines, water vein radiation, electromagnetic anomalies and
//         telluric currents.
//       </p>

//       <p>
//         Your space is meant to be your <strong>fortress</strong> — an inner
//         sanctum that shields you from external energies that do not serve your
//         purpose and empowers clarity, strategy, growth and control over life.
//       </p>

//       <p>
//         The centre of your space is called the <strong>Brahmasthaan</strong>.
//         There are <strong>16 Vastu zones</strong> — 4 cardinal directions, 4
//         corners and 8 sub-cardinal zones. Each zone carries a unique energetic
//         role governing everything from daily cash flow and mental clarity to
//         marriage, childbirth, profits and long-term success.
//       </p>

//       <p>
//         When these zones are aligned with correct layouts, placements and
//         elements, every zone starts working <strong>in your favour</strong>.
//         Every zone has a gift — harmony allows you to receive it.
//       </p>

//       <p>
//         A Vastu-compliant space feels different. The mind feels lighter, energy
//         stabilises, relationships smoothen, finances feel supported and
//         intentions manifest faster. This alignment brings clarity, peace,
//         emotional stability and effortless momentum.
//       </p>

//       <p>
//         In today’s world, achieving <strong>100% organic Vastu</strong> is almost
//         impossible due to structural limitations, EMF stress, geopathic lines,
//         regulations and lifestyle realities. This is where
//         <strong> Vastu remedies</strong> become essential.
//       </p>

//       <p>
//         Our remedies include energy rectification, zone balancing, colour and
//         elemental correction, EMF neutralisation, geopathic stress correction,
//         pyramid Vastu, space cleansing, axis redirection and energetic
//         protection. These solutions are
//         <strong> 100% demolition-free</strong> and can be installed in
//         <strong> under 10 minutes</strong>.
//       </p>
//     </motion.div>
//   </div>
// </section> 
            






//             <section className="services-section">
//               <div className="container">
//                 <div className="section-header">
//                   <h2 className="section-title">SERVICES</h2>
//                 </div>

//                 <div className="services-grid">
//                   {services.map((service, i) => (
//                     <motion.div
//                       key={service.id}
//                       className={`service-card ${service.popular ? "popular" : ""}`}
//                       onClick={() => handleServiceSelect(service)}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.08 }}
//                     >
//                       {/* {service.popular && <div className="popular-badge">Most Popular</div>} */}

//                       <h3 className="service-title">{service.label}</h3>
//                       <p className="service-desc">{service.description}</p>

//                       <div className="service-footer">
//                         <div className="service-price">₹{service.amount}</div>
//                         <button
//                           className="service-button"
//                           onClick={() => handleServiceSelect(service)}
//                         >
//                           SELECT 
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
              
//             </section>
//           </motion.div>
//         )}
        
   


//         {/* -------------------- STEP B2B -------------------- */}
//         {step === "b2b" && (
//           <motion.section
//             className="form-section"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="form-container">
//               <button className="back-button" onClick={() => setStep(1)}>
//                 ← Back
//               </button>
//               <h2 className="form-title">B2B Solutions</h2>

//               <div className="b2b-grid">
//                 {b2bSubcategories.map((cat, index) => (
//                   <motion.div
//                     key={index}
//                     className="b2b-card"
//                     onClick={() => {
//                       setSelectedService({
//                         ...selectedService,
//                         label: `B2B – ${cat.name}`,
//                         description: cat.name,
//                       });
//                       setStep(2);
//                     }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                   >
//                     <h3>{cat.name}</h3>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.section>
//         )}
//         {/* ================= VASTU FAQs SECTION ================= */}
// {faqs.length > 0 && (
//   <section className="vastu-faq-section">
//     <div className="container">
//       <h2 className="section-title">FAQ</h2>

//       <div className="vastu-faq-list">
//         {faqs.map((faq, index) => (
//           <div
//             key={faq._id}
//             className={`vastu-faq-item ${openFaq === index ? "open" : ""}`}
//             onClick={() =>
//               setOpenFaq(openFaq === index ? null : index)
//             }
//           >
//             <div className="vastu-faq-question">
//               <h4>{faq.question}</h4>
//               <span>{openFaq === index ? "−" : "+"}</span>
//             </div>

//             {openFaq === index && (
//               <div className="vastu-faq-answer">
//                 <p>{faq.answer}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// )}


//         {/* -------------------- STEP 2 FORM -------------------- */}
//         {step === 2 && (
//           <motion.section
//             className="form-section"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="form-container">
//               <button
//                 className="back-button"
//                 onClick={() => setStep(selectedService.id === "b2b" ? "b2b" : 1)}
//               >
//                 ← Back
//               </button>

//               <h2 className="form-title">{selectedService.label}</h2>

//               <form className="consultation-form" onSubmit={handleFormSubmit}>
//                 <div className="form-row">
//                   <div className="form-group">
//                     <label>Full Name *</label>
//                     <input name="fullName" value={formData.fullName} onChange={handleChange} />
//                   </div>
//                   <div className="form-group">
//                     <label>Email *</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label>Phone *</label>
//                     <input name="phone" value={formData.phone} onChange={handleChange} />
//                   </div>
//                   <div className="form-group">
//                     <label>Property Stage *</label>
//                     <select
//                       name="propertyStage"
//                       value={formData.propertyStage}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select</option>
//                       <option>Pre-Demolition</option>
//                       <option>Layout Finalization</option>
//                       <option>Under Construction</option>
//                       <option>Constructed</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label>Address *</label>
//                   <input name="address" value={formData.address} onChange={handleChange} />
//                 </div>

//                 <div className="form-group">
//                   <label>Description (optional)</label>
//                   <textarea
//                     name="issue"
//                     value={formData.issue}
//                     onChange={handleChange}
//                     rows="4"
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>Preferred Delivery Mode *</label>
//                   <select
//                     name="deliveryMode"
//                     value={formData.deliveryMode}
//                     onChange={handleChange}
//                   >
//                     <option value="">Select Mode</option>
//                     {deliveryModes.map((mode) => (
//                       <option key={mode.value} value={mode.value}>
//                         {mode.value} — {mode.desc}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <button type="submit" className="submit-button">
//                   Proceed to Payment →
//                 </button>
//               </form>
//             </div>
//           </motion.section>
//         )}

//         {/* -------------------- STEP 3 PAYMENT -------------------- */}
//         {step === 3 && (
//           <motion.section
//             className="form-section"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="form-container payment-container">
//               <h2 className="form-title">Confirm & Pay</h2>

//               <div className="payment-summary">
//                 <div className="summary-row">
//                   <span>Service</span>
//                   <strong>{selectedService.label}</strong>
//                 </div>
//                 <div className="summary-row">
//                   <span>Name</span>
//                   <strong>{formData.fullName}</strong>
//                 </div>
//                 <div className="summary-row">
//                   <span>Email</span>
//                   <strong>{formData.email}</strong>
//                 </div>
//                 <div className="summary-row">
//                   <span>Delivery</span>
//                   <strong>{formData.deliveryMode}</strong>
//                 </div>

//                 <div className="summary-row total">
//                   <span>Total Amount</span>
//                   <strong className="total-amount">₹{selectedService.amount}</strong>
//                 </div>
//               </div>

//               <button className="pay-button" disabled={loading} onClick={handlePayment}>
//                 {loading ? "Processing..." : "Pay Securely Now →"}
//               </button>

//               <button className="back-button" onClick={() => setStep(2)}>
//                 ← Edit Details
//               </button>
//             </div>
//           </motion.section>
//         )}

//         {/* -------------------- STEP 4 SUCCESS -------------------- */}
//         {step === 4 && (
//           <motion.section
//             className="form-section"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="form-container success-container">
//               <h2 className="success-title">Payment Successful! 🎉</h2>

//               <p className="success-message">
//                 Thank you for choosing our Vastu consultation service.
//               </p>

//               <div className="success-details">
//                 <div className="detail-item">
//                   <span>Name:</span> <strong>{formData.fullName}</strong>
//                 </div>
//                 <div className="detail-item">
//                   <span>Email:</span> <strong>{formData.email}</strong>
//                 </div>
//                 <div className="detail-item">
//                   <span>Phone:</span> <strong>{formData.phone}</strong>
//                 </div>
//                 <div className="detail-item">
//                   <span>Delivery Mode:</span> <strong>{formData.deliveryMode}</strong>
//                 </div>
//               </div>

//               <button onClick={resetForm} className="submit-button">
//                 Book Another Consultation →
//               </button>
//             </div>
//           </motion.section>
//         )}
//       </main>
//     </div>
//   );
// };


// export default Vastu;


































// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import axios from "axios";
// import "../../styles/Vastu.css";
// import VastuHeroImage from "../../assets/Vastu Architecture_Final.png";
// import Sidebar from "../../components/Sidebar";

// const API_URL = "https://astrobackend-5sr6.onrender.com/api/payments";

// const services = [
//   {
//     id: "residential",
//     label: "RESIDENTAL E-VASTU",
//     description:
//       "Comprehensive Vastu evaluation for flats, villas, independent houses, builder floors, or farmhouses.",
//     benefits: [
//       "Enhanced peace & harmony",
//       "Improved family relationships",
//       "Better health & prosperity",
//     ],
//     amount: 500,
//     popular: true,
//     icon: "🏠"
//   },
//   {
//     id: "commercial",
//     label: "COMMERICAL E-VASTU",
//     description: "Boost success and productivity in your business workspace.",
//     benefits: [
//       "Increased revenue",
//       "Better client attraction",
//       "Improved team harmony",
//     ],
//     amount: 1000,
//     popular: false,
//     icon: "💼"
//   },
//   {
//     id: "industrial",
//     label: "Industrial E-Vastu",
//     description:
//       "Specialized guidance for manufacturing units, IT parks, and industrial plants.",
//     benefits: [
//       "Optimized workflow",
//       "Better machinery placement",
//       "Enhanced productivity",
//     ],
//     amount: 2000,
//     popular: false,
//     icon: "🏭"
//   },
//   {
//     id: "b2b",
//     label: "B2B SOLUTIONS",
//     description:
//       "Custom Vastu consultancy for corporates, showrooms, hotels, restaurants, and more.",
//     benefits: [
//       "Tailored solutions",
//       "Industry-specific guidance",
//       "Comprehensive analysis",
//     ],
//     amount: 5000,
//     popular: false,
//     icon: "🤝"
//   },
// ];

// const b2bSubcategories = [
//   { name: "Real Estate & Construction", icon: "🏗️" },
//   { name: "Corporate Offices & Startups", icon: "💻" },
//   { name: "Retail Chains & Showrooms", icon: "🛍️" },
//   { name: "Hotels & Hospitality", icon: "🏨" },
//   { name: "Warehouses & Logistics", icon: "🚚" },
//   { name: "Creative Studios", icon: "🎨" },
//   { name: "Banks & Financial", icon: "🏦" },
//   { name: "Restaurants & QSR", icon: "🍽️" },
//   { name: "Automobile Industry", icon: "🚗" },
//   { name: "Fashion & Beauty", icon: "👗" },
// ];

// const deliveryModes = [
//   { value: "PDF Report", desc: "Detailed PDF analysis", icon: "📄" },
//   { value: "Call Discussion", desc: "30-min consultation call", icon: "📞" },
//   { value: "Video Consultation", desc: "60-min video session", icon: "🎥" },
//   { value: "On-Site Visit", desc: "In-person consultation (Extra charges)", icon: "📍" },
// ];

// const Vastu = () => {
//   const [faqs, setFaqs] = useState([]);
//   const [openFaq, setOpenFaq] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     propertyStage: "",
//     issue: "",
//     deliveryMode: "",
//   });

//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const userId = storedUser?._id || "672af93b9cf24a87a0c5f8de";

//   useEffect(() => {
//     if (!window.Razorpay) {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   useEffect(() => {
//     axios
//       .get("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Vastu")
//       .then((res) => {
//         if (res.data?.faqs) {
//           const activeFaqs = res.data.faqs.filter(
//             (faq) => faq.status === "active"
//           );
//           setFaqs(activeFaqs);
//         }
//       })
//       .catch((err) => {
//         console.error("Vastu FAQ error:", err);
//       });
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleServiceSelect = (service) => {
//     if (!service) return;
//     if (service.id === "b2b") {
//       setSelectedService(service);
//       setStep("b2b");
//     } else {
//       setSelectedService(service);
//       setStep(2);
//     }
//     if (isMobile) setSidebarOpen(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((p) => ({ ...p, [name]: value }));
//   };

//   const validateForm = () => {
//     const req = ["fullName", "email", "phone", "address", "propertyStage", "deliveryMode"];
//     return req.every((k) => formData[k]?.trim() !== "");
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) {
//       alert("Please fill all required fields!");
//       return;
//     }
//     setStep(3);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handlePayment = async () => {
//     if (!selectedService) return alert("Please select a service first!");
//     if (!window.Razorpay) {
//       alert("Payment system loading... Try again.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const orderRes = await axios.post(
//         "https://astrobackend-5sr6.onrender.com/api/payments/create-order",
//         {
//           amount: selectedService.amount,
//           userId: userId,
//         }
//       );

//       if (!orderRes.data.success) {
//         alert("Order creation failed.");
//         setLoading(false);
//         return;
//       }

//       const order = orderRes.data.order;
//       const options = {
//         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//         amount: order.amount,
//         currency: "INR",
//         name: "THE FIFTH CUSP",
//         description: selectedService.label,
//         order_id: order.id,
//         handler: async function (response) {
//           try {
//             const verifyRes = await axios.post(
//               "https://astrobackend-5sr6.onrender.com/api/payments/verify",
//               {
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_signature: response.razorpay_signature,
//                 userId,
//                 amount: selectedService.amount,
//               }
//             );

//             if (verifyRes.data.success) {
//               setStep(4);
//             } else {
//               alert("Payment verification failed.");
//             }
//           } catch (error) {
//             console.log("VERIFY ERROR:", error);
//             alert("Verification request failed.");
//           }
//         },
//         prefill: {
//           name: formData.fullName,
//           email: formData.email,
//           contact: formData.phone,
//         },
//         theme: {
//           color: "#7b2cbf",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//       setLoading(false);
//     } catch (err) {
//       console.log("ORDER ERROR:", err);
//       alert("Payment could not be processed.");
//       setLoading(false);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       address: "",
//       propertyStage: "",
//       issue: "",
//       deliveryMode: "",
//     });
//     setSelectedService(null);
//     setStep(1);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const renderStars = (count = 40) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="vc-star"
//         style={{
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 2}px`,
//           height: `${1 + Math.random() * 2}px`,
//         }}
//       />
//     ));

//   return (
//     <div className="vastu-page vastu-cosmic-bg">
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
//       <div className="vc-cosmic-stars" />
//       <div className="vc-stars-container">{renderStars(40)}</div>
//       <div className="vc-floating-orbs">
//         <div className="vc-orb vc-orb-1" />
//         <div className="vc-orb vc-orb-2" />
//         <div className="vc-orb vc-orb-3" />
//       </div>

//       <main className={`main-content`}>
//         {/* -------------------- STEP 1 -------------------- */}
//         {step === 1 && (
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//             {/* HERO SECTION */}
//             <section className="hero-section">
//               <div className="hero-container">
//                 <div className="hero-content">
//                   <motion.div 
//                     className="hero-badge"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                   >
//                     SACRED SPATIAL ARCHITECTURE
//                   </motion.div>
//                   <h1 className="hero-title">
//                     <motion.span
//                       initial={{ opacity: 0, y: 30 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.3 }}
//                     >
//                       VASTU
//                     </motion.span>
//                   </h1>
//                   <motion.p 
//                     className="hero-description"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.5 }}
//                   >
//                     Your space is not just a physical structure — it is a living frequency field.
//                     Every placement activates a specific zone, and each zone governs a distinct area
//                     of your life. From finances and health to relationships and mental clarity,
//                     space silently shapes outcomes.
//                     <br /><br />
//                     <span className="highlight-text">
//                       Vastu is sacred architecture aligned with cosmic geometry, working to redirect
//                       divine energies in your favour.
//                     </span>
//                   </motion.p>

//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.7 }}
//                   >
//                     <button
//                       className="hero-cta"
//                       onClick={() =>
//                         document
//                           .querySelector(".services-section")
//                           .scrollIntoView({ behavior: "smooth" })
//                       }
//                     >
//                       <span className="cta-text">EXPLORE SERVICES</span>
//                       <span className="cta-arrow">→</span>
//                     </button>
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   className="hero-image"
//                   initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
//                   animate={{ opacity: 1, scale: 1, rotate: 0 }}
//                   transition={{ delay: 0.4, type: "spring" }}
//                 >
//                   <img
//                     src={VastuHeroImage}
//                     alt="Vastu Architecture"
//                     className="vastu-hero-img"
//                   />
//                   <div className="hero-image-glow" />
//                 </motion.div>
//               </div>
//             </section>

//             {/* HOW VASTU WORKS SECTION */}
//             <section className="how-vastu-section">
//               <div className="container">
//                 <motion.div
//                   className="how-vastu-header"
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.7 }}
//                   viewport={{ once: true }}
//                 >
//                   <h2>HOW VASTU WORKS</h2>
//                   <div className="section-subtitle">
//                     Where Cosmic Intelligence Meets Architectural Space
//                   </div>
//                 </motion.div>

//                 <div className="how-vastu-grid">
//                   <motion.div 
//                     className="vastu-point-card"
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.1 }}
//                     viewport={{ once: true }}
//                   >
//                     <div className="point-icon"></div>
//                     <h3>Cosmic Interaction</h3>
//                     <p>Vastu Shastra studies how cosmic energies interact with spatial layouts, placements, elements, and architectural forms.</p>
//                   </motion.div>

//                   <motion.div 
//                     className="vastu-point-card"
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.2 }}
//                     viewport={{ once: true }}
//                   >
//                     <div className="point-icon"></div>
//                     <h3>Energetic Fortress</h3>
//                     <p>Your space becomes a protective fortress that shields from external energies while empowering clarity and growth.</p>
//                   </motion.div>

//                   <motion.div 
//                     className="vastu-point-card"
//                     initial={{ opacity: 0, x: 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 }}
//                     viewport={{ once: true }}
//                   >
//                     <div className="point-icon"></div>
//                     <h3>16 Vastu Zones</h3>
//                     <p>Each of the 16 zones governs specific life aspects—from finances and health to relationships and success.</p>
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   className="how-vastu-content"
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.4, duration: 0.8 }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="highlight-box">
//                     <p>
//                       <strong>Modern Vastu Solutions:</strong> Our 100% demolition-free remedies include energy rectification, zone balancing, EMF neutralization, and space cleansing—all installable in under 10 minutes.
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>
//             </section>

//             {/* SERVICES SECTION */}
//             <section className="services-section">
//               <div className="container">
//                 <div className="section-header">
//                   <h2 className="section-title">OUR SERVICES</h2>
//                   <p className="section-subtitle">Choose Your Path to Harmonious Living</p>
//                 </div>

//                 <div className="services-grid">
//                   {services.map((service, i) => (
//                     <motion.div
//                       key={service.id}
//                       className={`service-card ${service.popular ? "popular" : ""}`}
//                       onClick={() => handleServiceSelect(service)}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: i * 0.08 }}
//                       whileHover={{ y: -8, scale: 1.02 }}
//                     >
//                       {service.popular && (
//                         <div className="popular-badge">
//                           <span>🌟 Most Popular</span>
//                         </div>
//                       )}

//                       <div className="service-icon">{service.icon}</div>
//                       <h3 className="service-title">{service.label}</h3>
//                       <p className="service-desc">{service.description}</p>

//                       <div className="service-benefits">
//                         {service.benefits.map((benefit, idx) => (
//                           <div key={idx} className="benefit-item">
//                             <span className="benefit-check">✓</span>
//                             <span>{benefit}</span>
//                           </div>
//                         ))}
//                       </div>

//                       <div className="service-footer">
//                         <div className="service-price">
//                           <span className="price-currency">₹</span>
//                           <span className="price-amount">{service.amount}</span>
//                           <span className="price-note">/consultation</span>
//                         </div>
//                         <button
//                           className="service-button"
//                           onClick={() => handleServiceSelect(service)}
//                         >
//                           <span>SELECT PLAN</span>
//                           <span className="button-arrow">→</span>
//                         </button>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           </motion.div>
//         )}

//         {/* -------------------- STEP B2B -------------------- */}
//         {step === "b2b" && (
//           <motion.section
//             className="form-section"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="form-container b2b-container">
//               <button className="back-button" onClick={() => setStep(1)}>
//                 ← Back to Services
//               </button>
//               <h2 className="form-title">
//                 <span className="title-icon">🤝</span>
//                 B2B Enterprise Solutions
//               </h2>
//               <p className="form-subtitle">Industry-Specific Vastu Consultancy</p>

//               <div className="b2b-grid">
//                 {b2bSubcategories.map((cat, index) => (
//                   <motion.div
//                     key={index}
//                     className="b2b-card"
//                     onClick={() => {
//                       setSelectedService({
//                         ...selectedService,
//                         label: `B2B – ${cat.name}`,
//                         description: cat.name,
//                       });
//                       setStep(2);
//                     }}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     whileHover={{ y: -5 }}
//                   >
//                     <div className="b2b-icon">{cat.icon}</div>
//                     <h3>{cat.name}</h3>
//                     <div className="b2b-select-indicator">Select →</div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.section>
//         )}

//         {/* -------------------- FAQ SECTION -------------------- */}
//         {faqs.length > 0 && step === 1 && (
//           <section className="vastu-faq-section">
//             <div className="container">
//               <h2 className="section-title">Frequently Asked Questions</h2>
//               <p className="section-subtitle">Everything you need to know about Vastu consultations</p>

//               <div className="vastu-faq-list">
//                 {faqs.map((faq, index) => (
//                   <motion.div
//                     key={faq._id}
//                     className={`vastu-faq-item ${openFaq === index ? "open" : ""}`}
//                     onClick={() => setOpenFaq(openFaq === index ? null : index)}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <div className="vastu-faq-question">
//                       <div className="faq-number">0{index + 1}</div>
//                       <h4>{faq.question}</h4>
//                       <span className="faq-toggle">{openFaq === index ? "−" : "+"}</span>
//                     </div>

//                     {openFaq === index && (
//                       <motion.div
//                         className="vastu-faq-answer"
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                       >
//                         <p>{faq.answer}</p>
//                       </motion.div>
//                     )}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}

//         {/* -------------------- STEP 2 FORM -------------------- */}
//         {step === 2 && (
//           <motion.section
//             className="form-section"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="form-container">
//               <div className="form-header">
//                 <button
//                   className="back-button"
//                   onClick={() => setStep(selectedService.id === "b2b" ? "b2b" : 1)}
//                 >
//                   ← Back
//                 </button>
//                 <div className="selected-service-header">
//                   <div className="service-icon-large">{selectedService.icon}</div>
//                   <div>
//                     <h2 className="form-title">{selectedService.label}</h2>
//                     <p className="service-amount-display">₹{selectedService.amount}</p>
//                   </div>
//                 </div>
//               </div>

//               <form className="consultation-form" onSubmit={handleFormSubmit}>
//                 <div className="form-row">
//                   <div className="form-group">
//                     <label>
//                       <span className="label-icon">👤</span>
//                       Full Name *
//                     </label>
//                     <input 
//                       name="fullName" 
//                       value={formData.fullName} 
//                       onChange={handleChange}
//                       placeholder="Enter your full name"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>
//                       <span className="label-icon">📧</span>
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="form-row">
//                   <div className="form-group">
//                     <label>
//                       <span className="label-icon">📱</span>
//                       Phone *
//                     </label>
//                     <input 
//                       name="phone" 
//                       value={formData.phone} 
//                       onChange={handleChange}
//                       placeholder="+91 98765 43210"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>
//                       <span className="label-icon">🏗️</span>
//                       Property Stage *
//                     </label>
//                     <select
//                       name="propertyStage"
//                       value={formData.propertyStage}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select Stage</option>
//                       <option>Pre-Demolition</option>
//                       <option>Layout Finalization</option>
//                       <option>Under Construction</option>
//                       <option>Constructed</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label>
//                     <span className="label-icon">📍</span>
//                     Property Address *
//                   </label>
//                   <input 
//                     name="address" 
//                     value={formData.address} 
//                     onChange={handleChange}
//                     placeholder="Full address with city and PIN code"
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>
//                     <span className="label-icon">📝</span>
//                     Specific Concerns (Optional)
//                   </label>
//                   <textarea
//                     name="issue"
//                     value={formData.issue}
//                     onChange={handleChange}
//                     rows="4"
//                     placeholder="Describe any specific Vastu concerns or questions..."
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label>
//                     <span className="label-icon">🚚</span>
//                     Preferred Delivery Mode *
//                   </label>
//                   <div className="delivery-options">
//                     {deliveryModes.map((mode) => (
//                       <div 
//                         key={mode.value}
//                         className={`delivery-option ${formData.deliveryMode === mode.value ? 'selected' : ''}`}
//                         onClick={() => setFormData({...formData, deliveryMode: mode.value})}
//                       >
//                         <div className="delivery-icon">{mode.icon}</div>
//                         <div>
//                           <div className="delivery-title">{mode.value}</div>
//                           <div className="delivery-desc">{mode.desc}</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <button type="submit" className="submit-button">
//                   <span>Proceed to Payment</span>
//                   <span className="button-arrow">→</span>
//                 </button>
//               </form>
//             </div>
//           </motion.section>
//         )}

//         {/* -------------------- STEP 3 PAYMENT -------------------- */}
//         {step === 3 && (
//           <motion.section
//             className="form-section"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="form-container payment-container">
//               <div className="payment-header">
//                 <h2 className="form-title">
//                   <span className="title-icon">💰</span>
//                   Confirm & Pay
//                 </h2>
//                 <p className="payment-subtitle">Secure payment powered by Razorpay</p>
//               </div>

//               <div className="payment-summary">
//                 <div className="summary-header">
//                   <h3>Order Summary</h3>
//                   <div className="razorpay-logo">🔒 Razorpay Secure</div>
//                 </div>
                
//                 <div className="summary-content">
//                   <div className="summary-row">
//                     <span>Service</span>
//                     <strong>{selectedService.label}</strong>
//                   </div>
//                   <div className="summary-row">
//                     <span>Name</span>
//                     <strong>{formData.fullName}</strong>
//                   </div>
//                   <div className="summary-row">
//                     <span>Email</span>
//                     <strong>{formData.email}</strong>
//                   </div>
//                   <div className="summary-row">
//                     <span>Delivery Mode</span>
//                     <strong>{formData.deliveryMode}</strong>
//                   </div>
                  
//                   <div className="summary-divider" />
                  
//                   <div className="summary-row total">
//                     <span>Total Amount</span>
//                     <strong className="total-amount">
//                       ₹{selectedService.amount.toLocaleString()}
//                     </strong>
//                   </div>
//                 </div>

//                 <div className="payment-features">
//                   <div className="feature">
//                     <span className="feature-icon">🔒</span>
//                     <span>256-bit SSL Encryption</span>
//                   </div>
//                   <div className="feature">
//                     <span className="feature-icon">💳</span>
//                     <span>All Cards & UPI Accepted</span>
//                   </div>
//                   <div className="feature">
//                     <span className="feature-icon">🔄</span>
//                     <span>Instant Confirmation</span>
//                   </div>
//                 </div>
//               </div>

//               <button 
//                 className={`pay-button ${loading ? 'loading' : ''}`} 
//                 disabled={loading} 
//                 onClick={handlePayment}
//               >
//                 {loading ? (
//                   <>
//                     <span className="spinner"></span>
//                     Processing...
//                   </>
//                 ) : (
//                   <>
//                     <span>Pay Securely Now</span>
//                     <span className="razorpay-icon">→</span>
//                   </>
//                 )}
//               </button>

//               <button className="back-button" onClick={() => setStep(2)}>
//                 ← Edit Details
//               </button>
//             </div>
//           </motion.section>
//         )}

//         {/* -------------------- STEP 4 SUCCESS -------------------- */}
//         {step === 4 && (
//           <motion.section
//             className="form-section"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <div className="form-container success-container">
//               <motion.div 
//                 className="success-icon"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ type: "spring" }}
//               >
//                 ✅
//               </motion.div>
              
//               <h2 className="success-title">Payment Successful! 🎉</h2>
              
//               <p className="success-message">
//                 Thank you for choosing our Vastu consultation service. 
//                 Our team will contact you within 24 hours.
//               </p>

//               <div className="success-details-card">
//                 <h3>Booking Details</h3>
//                 <div className="success-details">
//                   <div className="detail-item">
//                     <span>Reference ID:</span> 
//                     <strong>VST-{Date.now().toString().slice(-8)}</strong>
//                   </div>
//                   <div className="detail-item">
//                     <span>Name:</span> 
//                     <strong>{formData.fullName}</strong>
//                   </div>
//                   <div className="detail-item">
//                     <span>Email:</span> 
//                     <strong>{formData.email}</strong>
//                   </div>
//                   <div className="detail-item">
//                     <span>Service:</span> 
//                     <strong>{selectedService.label}</strong>
//                   </div>
//                   <div className="detail-item">
//                     <span>Amount Paid:</span> 
//                     <strong className="success-amount">₹{selectedService.amount}</strong>
//                   </div>
//                 </div>
//               </div>

//               <div className="success-actions">
//                 <button onClick={resetForm} className="submit-button">
//                   Book Another Consultation →
//                 </button>
//                 <button className="download-button">
//                   Download Receipt
//                 </button>
//               </div>
//             </div>
//           </motion.section>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Vastu;



























import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "../../styles/Vastu.css";
import VastuHeroImage from "../../assets/Vastu Architecture_Final.png";
import Sidebar from "../../components/Sidebar";

const API_URL = "https://astrobackend-5sr6.onrender.com/api/payments";

const services = [
  {
    id: "residential",
    label: "RESIDENTIAL E-VASTU",
    description:
      "Comprehensive Vastu evaluation for flats, villas, independent houses, builder floors, or farmhouses.",
    benefits: [
      "Enhanced peace & harmony",
      "Improved family relationships",
      "Better health & prosperity",
    ],
    amount: 500,
    popular: true,
  },
  {
    id: "commercial",
    label: "COMMERCIAL E-VASTU",
    description: "Boost success and productivity in your business workspace.",
    benefits: [
      "Increased revenue",
      "Better client attraction",
      "Improved team harmony",
    ],
    amount: 1000,
    popular: false,
  },
  {
    id: "industrial",
    label: "INDUSTRIAL E-VASTU",
    description:
      "Specialized guidance for manufacturing units, IT parks, and industrial plants.",
    benefits: [
      "Optimized workflow",
      "Better machinery placement",
      "Enhanced productivity",
    ],
    amount: 2000,
    popular: false,
  },
  {
    id: "b2b",
    label: "B2B SOLUTIONS",
    description:
      "Custom Vastu consultancy for corporates, showrooms, hotels, restaurants, and more.",
    benefits: [
      "Tailored solutions",
      "Industry-specific guidance",
      "Comprehensive analysis",
    ],
    amount: 5000,
    popular: false,
  },
];

const b2bSubcategories = [
  { name: "Real Estate & Construction" },
  { name: "Corporate Offices & Startups" },
  { name: "Retail Chains & Showrooms" },
  { name: "Hotels & Hospitality" },
  { name: "Warehouses & Logistics" },
  { name: "Creative Studios" },
  { name: "Banks & Financial" },
  { name: "Restaurants & QSR" },
  { name: "Automobile Industry" },
  { name: "Fashion & Beauty" },
];

const deliveryModes = [
  { value: "PDF Report", desc: "Detailed PDF analysis" },
  { value: "Call Discussion", desc: "30-min consultation call" },
  { value: "Video Consultation", desc: "60-min video session" },
  { value: "On-Site Visit", desc: "In-person consultation (Extra charges)" },
];

const Vastu = () => {
  const [faqs, setFaqs] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    propertyStage: "",
    issue: "",
    deliveryMode: "",
  });

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?._id || "672af93b9cf24a87a0c5f8de";

  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Vastu")
      .then((res) => {
        if (res.data?.faqs) {
          const activeFaqs = res.data.faqs.filter(
            (faq) => faq.status === "active"
          );
          setFaqs(activeFaqs);
        }
      })
      .catch((err) => {
        console.error("Vastu FAQ error:", err);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleServiceSelect = (service) => {
    if (!service) return;
    if (service.id === "b2b") {
      setSelectedService(service);
      setStep("b2b");
    } else {
      setSelectedService(service);
      setStep(2);
    }
    if (isMobile) setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const validateForm = () => {
    const req = ["fullName", "email", "phone", "address", "propertyStage", "deliveryMode"];
    return req.every((k) => formData[k]?.trim() !== "");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fill all required fields!");
      return;
    }
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePayment = async () => {
    if (!selectedService) return alert("Please select a service first!");
    if (!window.Razorpay) {
      alert("Payment system loading... Try again.");
      return;
    }

    try {
      setLoading(true);
      const orderRes = await axios.post(
        "https://astrobackend-5sr6.onrender.com/api/payments/create-order",
        {
          amount: selectedService.amount,
          userId: userId,
        }
      );

      if (!orderRes.data.success) {
        alert("Order creation failed.");
        setLoading(false);
        return;
      }

      const order = orderRes.data.order;
      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "THE FIFTH CUSP",
        description: selectedService.label,
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
                amount: selectedService.amount,
              }
            );

            if (verifyRes.data.success) {
              setStep(4);
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.log("VERIFY ERROR:", error);
            alert("Verification request failed.");
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#7b2cbf",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      setLoading(false);
    } catch (err) {
      console.log("ORDER ERROR:", err);
      alert("Payment could not be processed.");
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      propertyStage: "",
      issue: "",
      deliveryMode: "",
    });
    setSelectedService(null);
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderStars = (count = 40) =>
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
    <div className="vastu-page vastu-cosmic-bg">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="vc-cosmic-stars" />
      <div className="vc-stars-container">{renderStars(40)}</div>
      <div className="vc-floating-orbs">
        <div className="vc-orb vc-orb-1" />
        <div className="vc-orb vc-orb-2" />
        <div className="vc-orb vc-orb-3" />
      </div>

      <main className={`main-content`}>
        {/* -------------------- STEP 1 -------------------- */}
        {step === 1 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* HERO SECTION */}
            <section className="hero-section">
              <div className="hero-container">
                <div className="hero-content">
                  <motion.div 
                    className="hero-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    SACRED SPATIAL ARCHITECTURE
                  </motion.div>
                  <h1 className="hero-title">
                    <motion.span
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      VASTU
                    </motion.span>
                  </h1>
                  <motion.p 
                    className="hero-description"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Your space is not just a physical structure — it is a living frequency field.
                    Every placement activates a specific zone, and each zone governs a distinct area
                    of your life. From finances and health to relationships and mental clarity,
                    space silently shapes outcomes.
                    <br /><br />
                    <span className="highlight-text">
                      Vastu is sacred architecture aligned with cosmic geometry, working to redirect
                      divine energies in your favour.
                    </span>
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <button
                      className="hero-cta"
                      onClick={() =>
                        document
                          .querySelector(".services-section")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      <span className="cta-text">EXPLORE SERVICES</span>
                      <span className="cta-arrow">→</span>
                    </button>
                  </motion.div>
                </div>

                <motion.div
                  className="hero-image"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <img
                    src={VastuHeroImage}
                    alt="Vastu Architecture"
                    className="vastu-hero-img"
                  />
                  <div className="hero-image-glow" />
                </motion.div>
              </div>
            </section>

            {/* HOW VASTU WORKS SECTION */}
            <section className="how-vastu-section">
              <div className="container">
                <motion.div
                  className="how-vastu-header"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h2>HOW VASTU WORKS</h2>
                  <div className="section-subtitle">
                    Where Cosmic Intelligence Meets Architectural Space
                  </div>
                </motion.div>

                <div className="how-vastu-grid">
                  <motion.div 
                    className="vastu-point-card"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="point-icon cosmic-icon">🌌</div>
                    <h3>COSMIC INTERACTION</h3>
                    <p>Vastu Shastra studies how cosmic energies interact with spatial layouts, placements, elements, and architectural forms.</p>
                  </motion.div>

                  <motion.div 
                    className="vastu-point-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="point-icon shield-icon">🛡</div>
                    <h3>ENERGETIC FORTRESS</h3>
                    <p>Your space becomes a protective fortress that shields from external energies while empowering clarity and growth.</p>
                  </motion.div>

                  <motion.div 
                    className="vastu-point-card"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="point-icon zone-icon">🎯</div>
                    <h3>16 VASTU ZONES</h3>
                    <p>Each of the 16 zones governs specific life aspects—from finances and health to relationships and success.</p>
                  </motion.div>
                </div>

                <motion.div
                  className="how-vastu-content"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="highlight-box">
                    <p>
                      <strong>Modern Vastu Solutions:</strong> Our 100% demolition-free remedies include energy rectification, zone balancing, EMF neutralization, and space cleansing—all installable in under 10 minutes.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="services-section">
              <div className="container">
                <div className="section-header">
                  <h2 className="section-title">OUR SERVICES</h2>
                  <p className="section-subtitle">Choose Your Path to Harmonious Living</p>
                </div>

                <div className="services-grid">
                  {services.map((service, i) => (
                    <motion.div
                      key={service.id}
                      className={`service-card ${service.popular ? "popular" : ""}`}
                      onClick={() => handleServiceSelect(service)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      {service.popular && (
                        <div className="popular-badge">
                          <span>MOST POPULAR</span>
                        </div>
                      )}

                      <div className="service-icon">
                        <div className={`service-icon-symbol ${service.id}`}></div>
                      </div>
                      <h3 className="service-title">{service.label}</h3>
                      <p className="service-desc">{service.description}</p>

                      <div className="service-benefits">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="benefit-item">
                            <span className="benefit-check">✓</span>
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="service-footer">
                        <div className="service-price">
                          <span className="price-currency">₹</span>
                          <span className="price-amount">{service.amount}</span>
                          <span className="price-note">/consultation</span>
                        </div>
                        <button
                          className="service-button"
                          onClick={() => handleServiceSelect(service)}
                        >
                          <span>SELECT PLAN</span>
                          <span className="button-arrow">→</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* -------------------- STEP B2B -------------------- */}
        {step === "b2b" && (
          <motion.section
            className="form-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="form-container b2b-container">
              <button className="back-button" onClick={() => setStep(1)}>
                ← Back to Services
              </button>
              <h2 className="form-title">B2B Enterprise Solutions</h2>
              <p className="form-subtitle">Industry-Specific Vastu Consultancy</p>

              <div className="b2b-grid">
                {b2bSubcategories.map((cat, index) => (
                  <motion.div
                    key={index}
                    className="b2b-card"
                    onClick={() => {
                      setSelectedService({
                        ...selectedService,
                        label: `B2B – ${cat.name}`,
                        description: cat.name,
                      });
                      setStep(2);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="b2b-icon">
                      <div className="b2b-icon-placeholder"></div>
                    </div>
                    <h3>{cat.name}</h3>
                    <div className="b2b-select-indicator">Select →</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* -------------------- FAQ SECTION -------------------- */}
        {faqs.length > 0 && step === 1 && (
          <section className="vastu-faq-section">
            <div className="container">
              <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
              <p className="section-subtitle">Everything you need to know about Vastu consultations</p>

              <div className="vastu-faq-list">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq._id}
                    className={`vastu-faq-item ${openFaq === index ? "open" : ""}`}
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="vastu-faq-question">
                      <div className="faq-number">0{index + 1}</div>
                      <h4>{faq.question}</h4>
                      <span className="faq-toggle">{openFaq === index ? "−" : "+"}</span>
                    </div>

                    {openFaq === index && (
                      <motion.div
                        className="vastu-faq-answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* -------------------- STEP 2 FORM -------------------- */}
        {step === 2 && (
          <motion.section
            className="form-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="form-container">
              <div className="form-header">
                <button
                  className="back-button"
                  onClick={() => setStep(selectedService.id === "b2b" ? "b2b" : 1)}
                >
                  ← Back
                </button>
                <div className="selected-service-header">
                  <div className="service-icon-large">
                    <div className={`service-icon-symbol-large ${selectedService?.id}`}></div>
                  </div>
                  <div>
                    <h2 className="form-title">{selectedService?.label}</h2>
                    <p className="service-amount-display">₹{selectedService?.amount}</p>
                  </div>
                </div>
              </div>

              <form className="consultation-form" onSubmit={handleFormSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone *</label>
                    <input 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="form-group">
                    <label>Property Stage *</label>
                    <select
                      name="propertyStage"
                      value={formData.propertyStage}
                      onChange={handleChange}
                    >
                      <option value="">Select Stage</option>
                      <option>Pre-Demolition</option>
                      <option>Layout Finalization</option>
                      <option>Under Construction</option>
                      <option>Constructed</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Property Address *</label>
                  <input 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange}
                    placeholder="Full address with city and PIN code"
                  />
                </div>

                <div className="form-group">
                  <label>Specific Concerns (Optional)</label>
                  <textarea
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe any specific Vastu concerns or questions..."
                  />
                </div>

                <div className="form-group">
                  <label>Preferred Delivery Mode *</label>
                  <div className="delivery-options">
                    {deliveryModes.map((mode) => (
                      <div 
                        key={mode.value}
                        className={`delivery-option ${formData.deliveryMode === mode.value ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, deliveryMode: mode.value})}
                      >
                        <div className="delivery-icon">
                          <div className={`delivery-icon-symbol ${mode.value.replace(/\s+/g, '-').toLowerCase()}`}></div>
                        </div>
                        <div>
                          <div className="delivery-title">{mode.value}</div>
                          <div className="delivery-desc">{mode.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button type="submit" className="submit-button">
                  <span>Proceed to Payment</span>
                  <span className="button-arrow">→</span>
                </button>
              </form>
            </div>
          </motion.section>
        )}

        {/* -------------------- STEP 3 PAYMENT -------------------- */}
        {step === 3 && (
          <motion.section
            className="form-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="form-container payment-container">
              <div className="payment-header">
                <h2 className="form-title">Confirm & Pay</h2>
                <p className="payment-subtitle">Secure payment powered by Razorpay</p>
              </div>

              <div className="payment-summary">
                <div className="summary-header">
                  <h3>Order Summary</h3>
                  <div className="razorpay-logo">
                    <span className="secure-icon">🔒</span>
                    Razorpay Secure
                  </div>
                </div>
                
                <div className="summary-content">
                  <div className="summary-row">
                    <span>Service</span>
                    <strong>{selectedService?.label}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Name</span>
                    <strong>{formData.fullName}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Email</span>
                    <strong>{formData.email}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Delivery Mode</span>
                    <strong>{formData.deliveryMode}</strong>
                  </div>
                  
                  <div className="summary-divider" />
                  
                  <div className="summary-row total">
                    <span>Total Amount</span>
                    <strong className="total-amount">
                      ₹{selectedService?.amount.toLocaleString()}
                    </strong>
                  </div>
                </div>

                <div className="payment-features">
                  <div className="feature">
                    <span className="feature-icon lock-icon"></span>
                    <span>256-bit SSL Encryption</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon card-icon"></span>
                    <span>All Cards & UPI Accepted</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon instant-icon"></span>
                    <span>Instant Confirmation</span>
                  </div>
                </div>
              </div>

              <button 
                className={`pay-button ${loading ? 'loading' : ''}`} 
                disabled={loading} 
                onClick={handlePayment}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <span>Pay Securely Now</span>
                    <span className="razorpay-icon">→</span>
                  </>
                )}
              </button>

              <button className="back-button" onClick={() => setStep(2)}>
                ← Edit Details
              </button>
            </div>
          </motion.section>
        )}

        {/* -------------------- STEP 4 SUCCESS -------------------- */}
        {step === 4 && (
          <motion.section
            className="form-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="form-container success-container">
              <motion.div 
                className="success-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                <div className="success-check"></div>
              </motion.div>
              
              <h2 className="success-title">Payment Successful</h2>
              
              <p className="success-message">
                Thank you for choosing our Vastu consultation service. 
                Our team will contact you within 24 hours.
              </p>

              <div className="success-details-card">
                <h3>Booking Details</h3>
                <div className="success-details">
                  <div className="detail-item">
                    <span>Reference ID:</span> 
                    <strong>VST-{Date.now().toString().slice(-8)}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Name:</span> 
                    <strong>{formData.fullName}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Email:</span> 
                    <strong>{formData.email}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Service:</span> 
                    <strong>{selectedService?.label}</strong>
                  </div>
                  <div className="detail-item">
                    <span>Amount Paid:</span> 
                    <strong className="success-amount">₹{selectedService?.amount}</strong>
                  </div>
                </div>
              </div>

              <div className="success-actions">
                <button onClick={resetForm} className="submit-button">
                  Book Another Consultation →
                </button>
                <button className="download-button">
                  Download Receipt
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
};

export default Vastu;