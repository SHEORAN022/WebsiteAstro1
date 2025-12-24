// // import React, { useState, useEffect } from "react";
// // import "../../styles/Material.css";
// // import Sidebar from "../../components/Sidebar";

// // const services = [
// //   {
// //     label: "INDIVIDUAL WEALTH PROGRAMME",
// //     description:
// //       "Identify inborn wealth signatures, reprogram wealth beliefs, optimize behavior, environment, and energy, karmic clearing, ongoing optimization.",
// //     // deliverable: "Paid PDF",
// //   },
// //   {
// //     label: "BUSINESS CONSULTING",
// //     description:
// //       "Tailored business strategy call with chart-based insights, decode blocks, pricing, branding, investor compatibility, execution plan.",
// //     // deliverable: "Consultation + PDF",
// //   },
// //   {
// //     label: "ABUNDANCE PROGRAMME",
// //     description:
// //       "Specific plans based on chart to maximize wealth. Guidance on finances, investments, and wealth creation strategies.",
// //     // deliverable: "Paid PDF",
// //   },
// // ];

// // const Material = () => {
// //   const [faqs, setFaqs] = useState([]);
// // const [openFaq, setOpenFaq] = useState(null);

// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [step, setStep] = useState(1);
// //   const [selectedService, setSelectedService] = useState(null);
// //   const [clientLogos, setClientLogos] = useState([]);

// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     dob: "",
// //     tob: "",
// //     pob: "",
// //     occupation: "",
// //     keyConcerns: "",
// //   });

// //   /* FETCH CLIENTS */
// //   useEffect(() => {
// //     fetch("https://astrobackend-5sr6.onrender.com/api/our-clients")
// //       .then((res) => res.json())
// //       .then((data) => {
// //         if (data?.clients) setClientLogos(data.clients);
// //       })
// //       .catch(() => {});

// //        fetch("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Materials")
// //     .then((res) => res.json())
// //     .then((data) => {
// //       if (Array.isArray(data?.faqs)) {
// //         const activeFaqs = data.faqs.filter(f => f.status === "active");
// //         setFaqs(activeFaqs);
// //       }
// //     })
// //     .catch(() => {});
// //   }, []);

// //   /* AUTO-SCROLL ON STEP CHANGE */
// //   useEffect(() => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   }, [step]);

// //   /* ⭐ ADD STARFIELD LIKE ABOUT US PAGE */
// //   useEffect(() => {
// //     const starfield = document.getElementById("material-starfield");
// //     if (starfield && !starfield.hasChildNodes()) {
// //       for (let i = 0; i < 150; i++) {
// //         const star = document.createElement("div");
// //         star.className = "star";
// //         star.style.top = `${Math.random() * 100}%`;
// //         star.style.left = `${Math.random() * 100}%`;

// //         const size = Math.random() * 2 + 1;
// //         star.style.width = `${size}px`;
// //         star.style.height = `${size}px`;

// //         star.style.animationDuration = `${Math.random() * 3 + 2}s`;
// //         star.style.animationDelay = `${Math.random() * 2}s`;

// //         starfield.appendChild(star);
// //       }
// //     }
// //   }, []);

// //   const handleChange = (e) =>
// //     setFormData({ ...formData, [e.target.name]: e.target.value });

// //   const handleServiceSelect = (service) => {
// //     setSelectedService(service);
// //     setStep(2);
// //   };

// //   return (
// //    <div className="material-page">
// //   <div className="material-bg">


// //       {/* ⭐ STARFIELD BACKGROUND */}
// //       <div id="material-starfield" className="starfield"></div>

// //       {/* 🌌 FLOATING ORBS */}
// //       <div className="floating-orbs">
// //         <div className="orb orb-1"></div>
// //         <div className="orb orb-2"></div>
// //         <div className="orb orb-3"></div>
// //       </div>

// //       {/* HAMBURGER BUTTON */}
// //       {!sidebarOpen && (
// //         <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
// //           ☰
// //         </button>
// //       )}

// //       {/* SIDEBAR */}
// //       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

// //       {/* DARK OVERLAY */}
// //       {sidebarOpen && (
// //         <div className="sidebar-overlay visible" onClick={() => setSidebarOpen(false)} />
// //       )}

// //       {/* MAIN CONTENT */}
// //       <div className="material-content">

// //         {/* <section className="hero-section">
// //           <h1>Material: Wealth Architecture Programme</h1>
// //         </section> */}
// //         {/* HERO SECTION */}
// // <section className="material-hero">
// //   <div className="hero-inner">

// //     {/* LEFT IMAGE */}
// //     <div className="hero-image">
// //       <img
// //         src="https://i.etsystatic.com/50315636/r/il/4448f3/6099304610/il_1080xN.6099304610_8ps8.jpg"
// //         alt="Material Astrology"
// //       />
// //     </div>

// //     {/* RIGHT CONTENT */}
// //     <div className="hero-text">
// //       <h1>MATERIAL</h1>
// //       <p>
// //         Material is the architecture of wealth creation through energy, intention, environment, and aligned action. It is where your inner frequency meets real world strategy. Wealth is not an accident. It is a vibration you cultivate, a system you build, and a reality you consciously hold. In this space, we bring together Astrology, Energy Reading, Vastu, Numerology, Wealth Psychology, and complete calibration to help you create a life that feels abundant, secure, and expansive.
// //       </p>
// //     </div>

// //   </div>
// // </section>

// // {/* ================= SECTION 2 : HOW IT WORKS ================= */}
// // <section className="how-it-works">
// //   <div className="how-inner">
// //     <h2>HOW IT WORKS</h2>

// //     <p>
// //       Your material reality is a reflection of your energetic capacity.
// //       To build wealth, you first strengthen the inner field. Then you align
// //       your environment, your timing, your mindset, and your strategic decisions.
// //     </p>

// //     <p>
// //       We begin by assessing your wealth frequency through your chart,
// //       your Vastu blueprint, your money patterns, and your energetic field.
// //     </p>

// //     <p>
// //       From there, we design a pathway that includes wealth rituals,
// //       vastu corrections, energetic upgrades, manifestation alignment,
// //       and practical financial strategy.
// //     </p>

// //     <p>
// //       The result is wealth architecture that is energetically strong,
// //       astrologically aligned, and materially actionable.
// //     </p>

// //     <p className="highlight-text">
// //       We help you make better decisions. We help you find out the RoI of
// //       those decisions. We take part in your entrepreneurial journey with
// //       you to help you achieve abundance.
// //     </p>
// //   </div>
// // </section>

// // {/* ================= SECTION 3 : REQUEST A TAILORED PROPOSAL ================= */}
// // <section className="tailored-proposal">
// //   <div className="proposal-inner">
// //     <h2>REQUEST A TAILORED PROPOSAL</h2>

// //     <p>
// //       Every individual carries a unique wealth signature. It is the coded
// //       blueprint that shapes how abundance enters your life, how you earn,
// //       which opportunities open for you, and what material potential you
// //       are capable of realising.
// //     </p>

// //     <p>
// //       This signature is influenced by the industries aligned with your temperament,
// //       the nature of trade that resonates with your psychology, your energetic
// //       and Vastu design, your karmic pathways, your leadership imprint,
// //       and the unseen support systems that strengthen or weaken your material world.
// //     </p>

// //     <p>
// //       Share your details and our team will create a personalized proposal
// //       outlining how we can elevate your business or personal wealth journey.
// //       You will receive a clear, structured plan from scratch to execution.
// //     </p>

// //     <p>
// //       The process is completely personalized based on your chart, numbers,
// //       environment, and energetic imprint to identify your earning style,
// //       opportunities, risks, leadership pattern, and material potential.
// //     </p>

// //     <p>
// //       We detect misaligned zones, weak planetary periods, energy drains,
// //       numerical conflicts, subconscious blocks, and structural imbalances.
// //       After careful curation and discussions, you receive a 30, 90,
// //       and 180-day action map for sustained growth.
// //     </p>

// //     <h3>WHO THIS IS FOR</h3>

// //     <ul className="who-list">
// //       <li>Individuals earning well but feeling stuck at a plateau.</li>
// //       <li>Professionals seeking clarity on the right industry or role.</li>
// //       <li>Entrepreneurs wanting alignment of energy, space, and timing.</li>
// //       <li>Creators, freelancers, and consultants seeking consistency.</li>
// //       <li>Business owners facing stagnation or unexplained setbacks.</li>
// //       <li>People with strong ideas but no clear execution pathway.</li>
// //       <li>Individuals feeling blocked despite discipline and effort.</li>
// //       <li>Anyone wanting wealth aligned with their cosmic design.</li>
// //     </ul>

// //     <p className="final-highlight">
// //       This is not for quick fixes or generic advice. This is for those
// //       who want a precision-engineered wealth plan aligned across chart,
// //       space, numbers, mind, and energy.
// //     </p>

// //     {/* <button className="cta-btn proposal-btn">
// //       Request Your Personalized Proposal
// //     </button> */}
// //   </div>
// // </section>



// //         {step === 1 && (
// //           <section className="offerings-section">
// //             <h2>SERVICES</h2>
// //             <div className="offerings-grid">
// //               {services.map((s, i) => (
// //                 <div key={i} className="service-card">
// //                   <h3>{s.label}</h3>
// //                   <p>{s.description}</p>
// //                   <span>{s.deliverable}</span>

// //                   <button className="cta-btn" onClick={() => handleServiceSelect(s)}>
// //                     BOOK NOW
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //           </section>
          
// //         )}

// //         {step === 2 && selectedService && (
// //           <section className="form-section">
// //             <div className="form-center-wrapper">
// //               <h2> {selectedService.label}</h2>

// //               <form
// //                 className="material-form"
// //                 onSubmit={(e) => {
// //                   e.preventDefault();
// //                   setStep(3);
// //                 }}
// //               >
// //                 <input name="fullName" placeholder="Full Name" required value={formData.fullName} onChange={handleChange} />
// //                 <input type="date" name="dob" required value={formData.dob} onChange={handleChange} />
// //                 <input name="tob" placeholder="Time of Birth" value={formData.tob} onChange={handleChange} />
// //                 <input name="pob" placeholder="Place of Birth" value={formData.pob} onChange={handleChange} />
// //                 <input name="occupation" placeholder="Occupation" value={formData.occupation} onChange={handleChange} />
// //                 <textarea name="keyConcerns" placeholder="Key Concerns" value={formData.keyConcerns} onChange={handleChange} />

// //                 <button className="glow-btn" type="submit">Proceed to Payment</button>
// //               </form>
// //             </div>
// //           </section>
// //         )}

// //         {step === 3 && (
// //           <section className="payment-section">
// //             <h2>Payment</h2>
// //             <button className="pay-btn" onClick={() => setStep(4)}>
// //               Pay Now
// //             </button>
// //           </section>
// //         )}

// //         {step === 4 && (
// //           <section className="confirmation-section">
// //             <h2>Payment Successful!</h2>
// //             <button className="cta-btn" onClick={() => setStep(1)}>
// //               Back to Services
// //             </button>
// //           </section>
// //         )}

// //         <section className="clients-section">
// //           <h2>OUR CLIENTS</h2>
// //           <div className="clients-logos">
// //             {clientLogos.map((c) => (
// //               <div className="client-card" key={c._id}>
// //                 <img src={c.image} className="client-img" alt={c.name} />
// //                 <h4>{c.name}</h4>
// //                 <p>{c.description}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </section>
// //         {/* ================= FAQs SECTION ================= */}
// // {faqs.length > 0 && (
// //   <section className="material-faq-section">
// //     <div className="faq-inner">
// //       <h2>FAQ</h2>
// //       {/* <p className="faq-sub">
// //         Common questions about the Material Wealth Architecture Programme
// //       </p> */}

// //       <div className="faq-list">
// //         {faqs.map((faq, index) => (
// //           <div
// //             key={faq._id}
// //             className={`faq-item ${openFaq === index ? "open" : ""}`}
// //             onClick={() =>
// //               setOpenFaq(openFaq === index ? null : index)
// //             }
// //           >
// //             <div className="faq-question">
// //               <h4>{faq.question}</h4>
// //               <span>{openFaq === index ? "−" : "+"}</span>
// //             </div>

// //             {openFaq === index && (
// //               <div className="faq-answer">
// //                 <p>{faq.answer}</p>
// //               </div>
// //             )}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   </section>
// // )}

// //  </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Material;




























// import React, { useState, useEffect, useRef } from "react";
// import "../../styles/Material.css";
// import Sidebar from "../../components/Sidebar";

// const services = [
//   {
//     label: "INDIVIDUAL WEALTH PROGRAMME",
//     description:
//       "Identify inborn wealth signatures, reprogram wealth beliefs, optimize behavior, environment, and energy, karmic clearing, ongoing optimization.",
//     // deliverable: "Paid PDF",
//   },
//   {
//     label: "BUSINESS CONSULTING",
//     description:
//       "Tailored business strategy call with chart-based insights, decode blocks, pricing, branding, investor compatibility, execution plan.",
//     // deliverable: "Consultation + PDF",
//   },
//   {
//     label: "ABUNDANCE PROGRAMME",
//     description:
//       "Specific plans based on chart to maximize wealth. Guidance on finances, investments, and wealth creation strategies.",
//     // deliverable: "Paid PDF",
//   },
// ];

// const Material = () => {
//   const [faqs, setFaqs] = useState([]);
//   const [openFaq, setOpenFaq] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [clientLogos, setClientLogos] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState("");

//   // Create a ref for the form
//   const formRef = useRef(null);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     keyConcerns: "",
//     service: "",
//   });

//   /* FETCH CLIENTS */
//   useEffect(() => {
//     fetch("https://astrobackend-5sr6.onrender.com/api/our-clients")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.clients) setClientLogos(data.clients);
//       })
//       .catch(() => {});

//     fetch("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Materials")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data?.faqs)) {
//           const activeFaqs = data.faqs.filter(f => f.status === "active");
//           setFaqs(activeFaqs);
//         }
//       })
//       .catch(() => {});
//   }, []);

//   /* AUTO-SCROLL ON STEP CHANGE */
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [step]);

//   /* ⭐ ADD STARFIELD LIKE ABOUT US PAGE */
//   useEffect(() => {
//     const starfield = document.getElementById("material-starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 150; i++) {
//         const star = document.createElement("div");
//         star.className = "star";
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

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setFormData(prev => ({ ...prev, service: service.label }));
//     setStep(2);
//   };

//   // Function to handle form submission
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitMessage("");

//     try {
//       // Prepare the data to send
//       const submissionData = {
//         ...formData,
//         submittedAt: new Date().toISOString(),
//         page: "Material",
//       };

//       // Send data to backend API
//       const response = await fetch("https://astrobackend-5sr6.onrender.com/api/material-submissions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(submissionData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setSubmitMessage("Form submitted successfully! Redirecting to payment...");
        
//         // Clear form data
//         setFormData({
//           fullName: "",
//           dob: "",
//           tob: "",
//           pob: "",
//           occupation: "",
//           keyConcerns: "",
//           service: "",
//         });

//         // Reset form using ref
//         if (formRef.current) {
//           formRef.current.reset();
//         }

//         // Delay before moving to payment step
//         setTimeout(() => {
//           setStep(3);
//           setIsSubmitting(false);
//         }, 1500);
//       } else {
//         throw new Error(result.message || "Failed to submit form");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       setSubmitMessage("Failed to submit form. Please try again.");
//       setIsSubmitting(false);
//     }
//   };

//   // Function to manually trigger form submission (can be called from elsewhere)
//   const submitForm = () => {
//     if (formRef.current) {
//       // You can also validate before submitting
//       const form = formRef.current;
//       if (form.checkValidity()) {
//         form.requestSubmit();
//       } else {
//         form.reportValidity();
//       }
//     }
//   };

//   return (
//     <div className="material-page">
//       <div className="material-bg">
//         {/* ⭐ STARFIELD BACKGROUND */}
//         <div id="material-starfield" className="starfield"></div>

//         {/* 🌌 FLOATING ORBS */}
//         <div className="floating-orbs">
//           <div className="orb orb-1"></div>
//           <div className="orb orb-2"></div>
//           <div className="orb orb-3"></div>
//         </div>

//         {/* HAMBURGER BUTTON */}
//         {!sidebarOpen && (
//           <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
//             ☰
//           </button>
//         )}

//         {/* SIDEBAR */}
//         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//         {/* DARK OVERLAY */}
//         {sidebarOpen && (
//           <div className="sidebar-overlay visible" onClick={() => setSidebarOpen(false)} />
//         )}

//         {/* MAIN CONTENT */}
//         <div className="material-content">
//           {/* HERO SECTION */}
//           <section className="material-hero">
//             <div className="hero-inner">
//               {/* LEFT IMAGE */}
//               <div className="hero-image">
//                 <img
//                   src="https://i.etsystatic.com/50315636/r/il/4448f3/6099304610/il_1080xN.6099304610_8ps8.jpg"
//                   alt="Material Astrology"
//                 />
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="hero-text">
//                 <h1>MATERIAL</h1>
//                 <p>
//                   Material is the architecture of wealth creation through energy, intention, environment, and aligned action. It is where your inner frequency meets real world strategy. Wealth is not an accident. It is a vibration you cultivate, a system you build, and a reality you consciously hold. In this space, we bring together Astrology, Energy Reading, Vastu, Numerology, Wealth Psychology, and complete calibration to help you create a life that feels abundant, secure, and expansive.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* ================= SECTION 2 : HOW IT WORKS ================= */}
//           <section className="how-it-works">
//             <div className="how-inner">
//               <h2>HOW IT WORKS</h2>
//               <p>
//                 Your material reality is a reflection of your energetic capacity.
//                 To build wealth, you first strengthen the inner field. Then you align
//                 your environment, your timing, your mindset, and your strategic decisions.
//               </p>
//               <p>
//                 We begin by assessing your wealth frequency through your chart,
//                 your Vastu blueprint, your money patterns, and your energetic field.
//               </p>
//               <p>
//                 From there, we design a pathway that includes wealth rituals,
//                 vastu corrections, energetic upgrades, manifestation alignment,
//                 and practical financial strategy.
//               </p>
//               <p>
//                 The result is wealth architecture that is energetically strong,
//                 astrologically aligned, and materially actionable.
//               </p>
//               <p className="highlight-text">
//                 We help you make better decisions. We help you find out the RoI of
//                 those decisions. We take part in your entrepreneurial journey with
//                 you to help you achieve abundance.
//               </p>
//             </div>
//           </section>

//           {/* ================= SECTION 3 : REQUEST A TAILORED PROPOSAL ================= */}
//           <section className="tailored-proposal">
//             <div className="proposal-inner">
//               <h2>REQUEST A TAILORED PROPOSAL</h2>
//               <p>
//                 Every individual carries a unique wealth signature. It is the coded
//                 blueprint that shapes how abundance enters your life, how you earn,
//                 which opportunities open for you, and what material potential you
//                 are capable of realising.
//               </p>
//               <p>
//                 This signature is influenced by the industries aligned with your temperament,
//                 the nature of trade that resonates with your psychology, your energetic
//                 and Vastu design, your karmic pathways, your leadership imprint,
//                 and the unseen support systems that strengthen or weaken your material world.
//               </p>
//               <p>
//                 Share your details and our team will create a personalized proposal
//                 outlining how we can elevate your business or personal wealth journey.
//                 You will receive a clear, structured plan from scratch to execution.
//               </p>
//               <p>
//                 The process is completely personalized based on your chart, numbers,
//                 environment, and energetic imprint to identify your earning style,
//                 opportunities, risks, leadership pattern, and material potential.
//               </p>
//               <p>
//                 We detect misaligned zones, weak planetary periods, energy drains,
//                 numerical conflicts, subconscious blocks, and structural imbalances.
//                 After careful curation and discussions, you receive a 30, 90,
//                 and 180-day action map for sustained growth.
//               </p>

//               <h3>WHO THIS IS FOR</h3>
//               <ul className="who-list">
//                 <li>Individuals earning well but feeling stuck at a plateau.</li>
//                 <li>Professionals seeking clarity on the right industry or role.</li>
//                 <li>Entrepreneurs wanting alignment of energy, space, and timing.</li>
//                 <li>Creators, freelancers, and consultants seeking consistency.</li>
//                 <li>Business owners facing stagnation or unexplained setbacks.</li>
//                 <li>People with strong ideas but no clear execution pathway.</li>
//                 <li>Individuals feeling blocked despite discipline and effort.</li>
//                 <li>Anyone wanting wealth aligned with their cosmic design.</li>
//               </ul>

//               <p className="final-highlight">
//                 This is not for quick fixes or generic advice. This is for those
//                 who want a precision-engineered wealth plan aligned across chart,
//                 space, numbers, mind, and energy.
//               </p>
//             </div>
//           </section>

//           {step === 1 && (
//             <section className="offerings-section">
//               <h2>SERVICES</h2>
//               <div className="offerings-grid">
//                 {services.map((s, i) => (
//                   <div key={i} className="service-card">
//                     <h3>{s.label}</h3>
//                     <p>{s.description}</p>
//                     <span>{s.deliverable}</span>

//                     <button className="cta-btn" onClick={() => handleServiceSelect(s)}>
//                       BOOK NOW
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {step === 2 && selectedService && (
//             <section className="form-section">
//               <div className="form-center-wrapper">
//                 <h2>{selectedService.label}</h2>
                
//                 {submitMessage && (
//                   <div className={`submit-message ${submitMessage.includes("successfully") ? "success" : "error"}`}>
//                     {submitMessage}
//                   </div>
//                 )}

//                 {/* Add ref to the form */}
//                 <form
//                   ref={formRef}
//                   className="material-form"
//                   onSubmit={handleFormSubmit}
//                 >
//                   <input 
//                     name="fullName" 
//                     placeholder="Full Name" 
//                     required 
//                     value={formData.fullName} 
//                     onChange={handleChange}
//                   />
//                   <input 
//                     type="date" 
//                     name="dob" 
//                     required 
//                     value={formData.dob} 
//                     onChange={handleChange}
//                   />
//                   <input 
//                     name="tob" 
//                     placeholder="Time of Birth" 
//                     value={formData.tob} 
//                     onChange={handleChange}
//                   />
//                   <input 
//                     name="pob" 
//                     placeholder="Place of Birth" 
//                     value={formData.pob} 
//                     onChange={handleChange}
//                   />
//                   <input 
//                     name="occupation" 
//                     placeholder="Occupation" 
//                     value={formData.occupation} 
//                     onChange={handleChange}
//                   />
//                   <textarea 
//                     name="keyConcerns" 
//                     placeholder="Key Concerns" 
//                     value={formData.keyConcerns} 
//                     onChange={handleChange}
//                   />
                  
//                   {/* Hidden input for service */}
//                   <input 
//                     type="hidden" 
//                     name="service" 
//                     value={formData.service}
//                   />

//                   <div className="form-buttons">
//                     <button 
//                       type="button" 
//                       className="back-btn" 
//                       onClick={() => setStep(1)}
//                       disabled={isSubmitting}
//                     >
//                       Back to Services
//                     </button>
                    
//                     <button 
//                       className="glow-btn" 
//                       type="submit"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Submitting..." : "Proceed to Payment"}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </section>
//           )}

//           {step === 3 && (
//             <section className="payment-section">
//               <h2>Payment</h2>
//               <button className="pay-btn" onClick={() => setStep(4)}>
//                 Pay Now
//               </button>
//             </section>
//           )}

//           {step === 4 && (
//             <section className="confirmation-section">
//               <h2>Payment Successful!</h2>
//               <button className="cta-btn" onClick={() => setStep(1)}>
//                 Back to Services
//               </button>
//             </section>
//           )}

//           <section className="clients-section">
//             <h2>OUR CLIENTS</h2>
//             <div className="clients-logos">
//               {clientLogos.map((c) => (
//                 <div className="client-card" key={c._id}>
//                   <img src={c.image} className="client-img" alt={c.name} />
//                   <h4>{c.name}</h4>
//                   <p>{c.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* ================= FAQs SECTION ================= */}
//           {faqs.length > 0 && (
//             <section className="material-faq-section">
//               <div className="faq-inner">
//                 <h2>FAQ</h2>
//                 <div className="faq-list">
//                   {faqs.map((faq, index) => (
//                     <div
//                       key={faq._id}
//                       className={`faq-item ${openFaq === index ? "open" : ""}`}
//                       onClick={() =>
//                         setOpenFaq(openFaq === index ? null : index)
//                       }
//                     >
//                       <div className="faq-question">
//                         <h4>{faq.question}</h4>
//                         <span>{openFaq === index ? "−" : "+"}</span>
//                       </div>

//                       {openFaq === index && (
//                         <div className="faq-answer">
//                           <p>{faq.answer}</p>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Material;


















// import React, { useState, useEffect, useRef } from "react";
// import "../../styles/Material.css";
// import Sidebar from "../../components/Sidebar";

// const services = [
//   {
//     label: "INDIVIDUAL WEALTH PROGRAMME",
//     description:
//       "Identify inborn wealth signatures, reprogram wealth beliefs, optimize behavior, environment, and energy, karmic clearing, ongoing optimization.",
//     // deliverable: "Paid PDF",
//   },
//   {
//     label: "BUSINESS CONSULTING",
//     description:
//       "Tailored business strategy call with chart-based insights, decode blocks, pricing, branding, investor compatibility, execution plan.",
//     // deliverable: "Consultation + PDF",
//   },
//   {
//     label: "ABUNDANCE PROGRAMME",
//     description:
//       "Specific plans based on chart to maximize wealth. Guidance on finances, investments, and wealth creation strategies.",
//     // deliverable: "Paid PDF",
//   },
// ];

// const Material = () => {
//   const [faqs, setFaqs] = useState([]);
//   const [openFaq, setOpenFaq] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [clientLogos, setClientLogos] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState("");

//   // Create refs
//   const formSectionRef = useRef(null); // Ref for the form section
//   const formRef = useRef(null); // Ref for the form element

//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     keyConcerns: "",
//     service: "",
//   });

//   /* FETCH CLIENTS */
//   useEffect(() => {
//     fetch("https://astrobackend-5sr6.onrender.com/api/our-clients")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.clients) setClientLogos(data.clients);
//       })
//       .catch(() => {});

//     fetch("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Materials")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data?.faqs)) {
//           const activeFaqs = data.faqs.filter(f => f.status === "active");
//           setFaqs(activeFaqs);
//         }
//       })
//       .catch(() => {});
//   }, []);

//   /* AUTO-SCROLL ON STEP CHANGE - Modified to not scroll when going to step 2 */
//   useEffect(() => {
//     // Only scroll to top when changing to step 1, 3, or 4
//     if (step !== 2) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [step]);

//   /* ⭐ ADD STARFIELD LIKE ABOUT US PAGE */
//   useEffect(() => {
//     const starfield = document.getElementById("material-starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 150; i++) {
//         const star = document.createElement("div");
//         star.className = "star";
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

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setFormData(prev => ({ ...prev, service: service.label }));
//     setStep(2);
    
//     // Scroll to form section instead of top
//     setTimeout(() => {
//       if (formSectionRef.current) {
//         formSectionRef.current.scrollIntoView({ 
//           behavior: 'smooth',
//           block: 'start'
//         });
//       }
//     }, 100); // Small delay to ensure DOM is updated
//   };

//   // Function to handle form submission
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitMessage("");

//     try {
//       // Prepare the data to send
//       const submissionData = {
//         ...formData,
//         submittedAt: new Date().toISOString(),
//         page: "Material",
//       };

//       // Send data to backend API
//       const response = await fetch("https://astrobackend-5sr6.onrender.com/api/material-submissions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(submissionData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setSubmitMessage("Form submitted successfully! Redirecting to payment...");
        
//         // Clear form data
//         setFormData({
//           fullName: "",
//           dob: "",
//           tob: "",
//           pob: "",
//           occupation: "",
//           keyConcerns: "",
//           service: "",
//         });

//         // Reset form using ref
//         if (formRef.current) {
//           formRef.current.reset();
//         }

//         // Delay before moving to payment step
//         setTimeout(() => {
//           setStep(3);
//           setIsSubmitting(false);
//           // Scroll to top when going to payment
//           window.scrollTo({ top: 0, behavior: "smooth" });
//         }, 1500);
//       } else {
//         throw new Error(result.message || "Failed to submit form");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       setSubmitMessage("Failed to submit form. Please try again.");
//       setIsSubmitting(false);
//     }
//   };

//   // Function to scroll back to form when there's an error
//   const scrollToForm = () => {
//     if (formSectionRef.current) {
//       formSectionRef.current.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   };

//   return (
//     <div className="material-page">
//       <div className="material-bg">
//         {/* ⭐ STARFIELD BACKGROUND */}
//         <div id="material-starfield" className="starfield"></div>

//         {/* 🌌 FLOATING ORBS */}
//         <div className="floating-orbs">
//           <div className="orb orb-1"></div>
//           <div className="orb orb-2"></div>
//           <div className="orb orb-3"></div>
//         </div>

//         {/* HAMBURGER BUTTON */}
//         {!sidebarOpen && (
//           <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
//             ☰
//           </button>
//         )}

//         {/* SIDEBAR */}
//         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//         {/* DARK OVERLAY */}
//         {sidebarOpen && (
//           <div className="sidebar-overlay visible" onClick={() => setSidebarOpen(false)} />
//         )}

//         {/* MAIN CONTENT */}
//         <div className="material-content">
//           {/* HERO SECTION */}
//           <section className="material-hero">
//             <div className="hero-inner">
//               {/* LEFT IMAGE */}
//               <div className="hero-image">
//                 <img
//                   src="https://i.etsystatic.com/50315636/r/il/4448f3/6099304610/il_1080xN.6099304610_8ps8.jpg"
//                   alt="Material Astrology"
//                 />
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="hero-text">
//                 <h1>MATERIAL</h1>
//                 <p>
//                   Material is the architecture of wealth creation through energy, intention, environment, and aligned action. It is where your inner frequency meets real world strategy. Wealth is not an accident. It is a vibration you cultivate, a system you build, and a reality you consciously hold. In this space, we bring together Astrology, Energy Reading, Vastu, Numerology, Wealth Psychology, and complete calibration to help you create a life that feels abundant, secure, and expansive.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* ================= SECTION 2 : HOW IT WORKS ================= */}
//           <section className="how-it-works">
//             <div className="how-inner">
//               <h2>HOW IT WORKS</h2>
//               <p>
//                 Your material reality is a reflection of your energetic capacity.
//                 To build wealth, you first strengthen the inner field. Then you align
//                 your environment, your timing, your mindset, and your strategic decisions.
//               </p>
//               <p>
//                 We begin by assessing your wealth frequency through your chart,
//                 your Vastu blueprint, your money patterns, and your energetic field.
//               </p>
//               <p>
//                 From there, we design a pathway that includes wealth rituals,
//                 vastu corrections, energetic upgrades, manifestation alignment,
//                 and practical financial strategy.
//               </p>
//               <p>
//                 The result is wealth architecture that is energetically strong,
//                 astrologically aligned, and materially actionable.
//               </p>
//               <p className="highlight-text">
//                 We help you make better decisions. We help you find out the RoI of
//                 those decisions. We take part in your entrepreneurial journey with
//                 you to help you achieve abundance.
//               </p>
//             </div>
//           </section>

//           {/* ================= SECTION 3 : REQUEST A TAILORED PROPOSAL ================= */}
//           <section className="tailored-proposal">
//             <div className="proposal-inner">
//               <h2>REQUEST A TAILORED PROPOSAL</h2>
//               <p>
//                 Every individual carries a unique wealth signature. It is the coded
//                 blueprint that shapes how abundance enters your life, how you earn,
//                 which opportunities open for you, and what material potential you
//                 are capable of realising.
//               </p>
//               <p>
//                 This signature is influenced by the industries aligned with your temperament,
//                 the nature of trade that resonates with your psychology, your energetic
//                 and Vastu design, your karmic pathways, your leadership imprint,
//                 and the unseen support systems that strengthen or weaken your material world.
//               </p>
//               <p>
//                 Share your details and our team will create a personalized proposal
//                 outlining how we can elevate your business or personal wealth journey.
//                 You will receive a clear, structured plan from scratch to execution.
//               </p>
//               <p>
//                 The process is completely personalized based on your chart, numbers,
//                 environment, and energetic imprint to identify your earning style,
//                 opportunities, risks, leadership pattern, and material potential.
//               </p>
//               <p>
//                 We detect misaligned zones, weak planetary periods, energy drains,
//                 numerical conflicts, subconscious blocks, and structural imbalances.
//                 After careful curation and discussions, you receive a 30, 90,
//                 and 180-day action map for sustained growth.
//               </p>

//               <h3>WHO THIS IS FOR</h3>
//               <ul className="who-list">
//                 <li>Individuals earning well but feeling stuck at a plateau.</li>
//                 <li>Professionals seeking clarity on the right industry or role.</li>
//                 <li>Entrepreneurs wanting alignment of energy, space, and timing.</li>
//                 <li>Creators, freelancers, and consultants seeking consistency.</li>
//                 <li>Business owners facing stagnation or unexplained setbacks.</li>
//                 <li>People with strong ideas but no clear execution pathway.</li>
//                 <li>Individuals feeling blocked despite discipline and effort.</li>
//                 <li>Anyone wanting wealth aligned with their cosmic design.</li>
//               </ul>

//               <p className="final-highlight">
//                 This is not for quick fixes or generic advice. This is for those
//                 who want a precision-engineered wealth plan aligned across chart,
//                 space, numbers, mind, and energy.
//               </p>
//             </div>
//           </section>

//           {step === 1 && (
//             <section className="offerings-section">
//               <h2>SERVICES</h2>
//               <div className="offerings-grid">
//                 {services.map((s, i) => (
//                   <div key={i} className="service-card">
//                     <h3>{s.label}</h3>
//                     <p>{s.description}</p>
//                     <span>{s.deliverable}</span>

//                     <button className="cta-btn" onClick={() => handleServiceSelect(s)}>
//                       BOOK NOW
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </section>
//           )}

//           {/* Form Section with ref */}
//           {step === 2 && selectedService && (
//             <section className="form-section" ref={formSectionRef}>
//               <div className="form-center-wrapper">
//                 <h2>{selectedService.label}</h2>
                
//                 {submitMessage && (
//                   <div 
//                     className={`submit-message ${submitMessage.includes("successfully") ? "success" : "error"}`}
//                     onClick={submitMessage.includes("Failed") ? scrollToForm : undefined}
//                     style={{ cursor: submitMessage.includes("Failed") ? "pointer" : "default" }}
//                   >
//                     {submitMessage}
//                     {submitMessage.includes("Failed") && " Click to try again."}
//                   </div>
//                 )}

//                 {/* Add ref to the form */}
//                 <form
//                   ref={formRef}
//                   className="material-form"
//                   onSubmit={handleFormSubmit}
//                 >
//                   <input 
//                     name="fullName" 
//                     placeholder="Full Name" 
//                     required 
//                     value={formData.fullName} 
//                     onChange={handleChange}
//                   />
//                   <input 
//                     type="date" 
//                     name="dob" 
//                     required 
//                     value={formData.dob} 
//                     onChange={handleChange}
//                   />
//                   <input 
//                     name="tob" 
//                     placeholder="Time of Birth (e.g., 14:30)" 
//                     value={formData.tob} 
//                     onChange={handleChange}
//                   />
//                   <input 
//                     name="pob" 
//                     placeholder="Place of Birth (City, Country)" 
//                     value={formData.pob} 
//                     onChange={handleChange}
//                   />
//                   <input 
//                     name="occupation" 
//                     placeholder="Occupation / Profession" 
//                     value={formData.occupation} 
//                     onChange={handleChange}
//                   />
//                   <textarea 
//                     name="keyConcerns" 
//                     placeholder="Key Concerns or Specific Goals" 
//                     rows="4"
//                     value={formData.keyConcerns} 
//                     onChange={handleChange}
//                   />
                  
//                   {/* Hidden input for service */}
//                   <input 
//                     type="hidden" 
//                     name="service" 
//                     value={formData.service}
//                   />

//                   <div className="form-buttons">
//                     <button 
//                       type="button" 
//                       className="back-btn" 
//                       onClick={() => {
//                         setStep(1);
//                         window.scrollTo({ top: 0, behavior: "smooth" });
//                       }}
//                       disabled={isSubmitting}
//                     >
//                       Back to Services
//                     </button>
                    
//                     <button 
//                       className="glow-btn" 
//                       type="submit"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Submitting..." : "Proceed to Payment"}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </section>
//           )}

//           {step === 3 && (
//             <section className="payment-section">
//               <h2>Payment</h2>
//               <button className="pay-btn" onClick={() => setStep(4)}>
//                 Pay Now
//               </button>
//             </section>
//           )}

//           {step === 4 && (
//             <section className="confirmation-section">
//               <h2>Payment Successful!</h2>
//               <button className="cta-btn" onClick={() => setStep(1)}>
//                 Back to Services
//               </button>
//             </section>
//           )}

//           <section className="clients-section">
//             <h2>OUR CLIENTS</h2>
//             <div className="clients-logos">
//               {clientLogos.map((c) => (
//                 <div className="client-card" key={c._id}>
//                   <img src={c.image} className="client-img" alt={c.name} />
//                   <h4>{c.name}</h4>
//                   <p>{c.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* ================= FAQs SECTION ================= */}
//           {faqs.length > 0 && (
//             <section className="material-faq-section">
//               <div className="faq-inner">
//                 <h2>FAQ</h2>
//                 <div className="faq-list">
//                   {faqs.map((faq, index) => (
//                     <div
//                       key={faq._id}
//                       className={`faq-item ${openFaq === index ? "open" : ""}`}
//                       onClick={() =>
//                         setOpenFaq(openFaq === index ? null : index)
//                       }
//                     >
//                       <div className="faq-question">
//                         <h4>{faq.question}</h4>
//                         <span>{openFaq === index ? "−" : "+"}</span>
//                       </div>

//                       {openFaq === index && (
//                         <div className="faq-answer">
//                           <p>{faq.answer}</p>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Material;




















// import React, { useState, useEffect, useRef } from "react";
// import "../../styles/Material.css";
// import Sidebar from "../../components/Sidebar";

// const services = [
//   {
//     label: "INDIVIDUAL WEALTH PROGRAMME",
//     description:
//       "Identify inborn wealth signatures, reprogram wealth beliefs, optimize behavior, environment, and energy, karmic clearing, ongoing optimization.",
//     // deliverable: "Paid PDF",
//   },
//   {
//     label: "BUSINESS CONSULTING",
//     description:
//       "Tailored business strategy call with chart-based insights, decode blocks, pricing, branding, investor compatibility, execution plan.",
//     // deliverable: "Consultation + PDF",
//   },
//   {
//     label: "ABUNDANCE PROGRAMME",
//     description:
//       "Specific plans based on chart to maximize wealth. Guidance on finances, investments, and wealth creation strategies.",
//     // deliverable: "Paid PDF",
//   },
// ];

// const Material = () => {
//   const [faqs, setFaqs] = useState([]);
//   const [openFaq, setOpenFaq] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [clientLogos, setClientLogos] = useState([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState("");

//   // Create refs
//   const formRef = useRef(null); // Ref for form element

//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     keyConcerns: "",
//     service: "",
//   });

//   /* FETCH CLIENTS */
//   useEffect(() => {
//     fetch("https://astrobackend-5sr6.onrender.com/api/our-clients")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data?.clients) setClientLogos(data.clients);
//       })
//       .catch(() => {});

//     fetch("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Materials")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data?.faqs)) {
//           const activeFaqs = data.faqs.filter(f => f.status === "active");
//           setFaqs(activeFaqs);
//         }
//       })
//       .catch(() => {});
//   }, []);

//   /* ⭐ ADD STARFIELD LIKE ABOUT US PAGE */
//   useEffect(() => {
//     const starfield = document.getElementById("material-starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 150; i++) {
//         const star = document.createElement("div");
//         star.className = "star";
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

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setFormData(prev => ({ ...prev, service: service.label }));
//     setStep(2);
    
//     // No scrolling needed - form is already in the DOM and will be shown
//   };

//   // Function to handle form submission
//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitMessage("");

//     try {
//       // Prepare the data to send
//       const submissionData = {
//         ...formData,
//         submittedAt: new Date().toISOString(),
//         page: "Material",
//       };

//       // Send data to backend API
//       const response = await fetch("https://astrobackend-5sr6.onrender.com/api/material-submissions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(submissionData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         setSubmitMessage("Form submitted successfully! Redirecting to payment...");
        
//         // Clear form data
//         setFormData({
//           fullName: "",
//           dob: "",
//           tob: "",
//           pob: "",
//           occupation: "",
//           keyConcerns: "",
//           service: "",
//         });

//         // Reset form using ref
//         if (formRef.current) {
//           formRef.current.reset();
//         }

//         // Delay before moving to payment step
//         setTimeout(() => {
//           setStep(3);
//           setIsSubmitting(false);
//         }, 1500);
//       } else {
//         throw new Error(result.message || "Failed to submit form");
//       }
//     } catch (error) {
//       console.error("Submission error:", error);
//       setSubmitMessage("Failed to submit form. Please try again.");
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="material-page">
//       <div className="material-bg">
//         {/* ⭐ STARFIELD BACKGROUND */}
//         <div id="material-starfield" className="starfield"></div>

//         {/* 🌌 FLOATING ORBS */}
//         <div className="floating-orbs">
//           <div className="orb orb-1"></div>
//           <div className="orb orb-2"></div>
//           <div className="orb orb-3"></div>
//         </div>

//         {/* HAMBURGER BUTTON */}
//         {!sidebarOpen && (
//           <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
//             ☰
//           </button>
//         )}

//         {/* SIDEBAR */}
//         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//         {/* DARK OVERLAY */}
//         {sidebarOpen && (
//           <div className="sidebar-overlay visible" onClick={() => setSidebarOpen(false)} />
//         )}

//         {/* MAIN CONTENT */}
//         <div className="material-content">
//           {/* HERO SECTION */}
//           <section className="material-hero">
//             <div className="hero-inner">
//               {/* LEFT IMAGE */}
//               <div className="hero-image">
//                 <img
//                   src="https://i.etsystatic.com/50315636/r/il/4448f3/6099304610/il_1080xN.6099304610_8ps8.jpg"
//                   alt="Material Astrology"
//                 />
//               </div>

//               {/* RIGHT CONTENT */}
//               <div className="hero-text">
//                 <h1>MATERIAL</h1>
//                 <p>
//                   Material is the architecture of wealth creation through energy, intention, environment, and aligned action. It is where your inner frequency meets real world strategy. Wealth is not an accident. It is a vibration you cultivate, a system you build, and a reality you consciously hold. In this space, we bring together Astrology, Energy Reading, Vastu, Numerology, Wealth Psychology, and complete calibration to help you create a life that feels abundant, secure, and expansive.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* ================= SECTION 2 : HOW IT WORKS ================= */}
//           <section className="how-it-works">
//             <div className="how-inner">
//               <h2>HOW IT WORKS</h2>
//               <p>
//                 Your material reality is a reflection of your energetic capacity.
//                 To build wealth, you first strengthen the inner field. Then you align
//                 your environment, your timing, your mindset, and your strategic decisions.
//               </p>
//               <p>
//                 We begin by assessing your wealth frequency through your chart,
//                 your Vastu blueprint, your money patterns, and your energetic field.
//               </p>
//               <p>
//                 From there, we design a pathway that includes wealth rituals,
//                 vastu corrections, energetic upgrades, manifestation alignment,
//                 and practical financial strategy.
//               </p>
//               <p>
//                 The result is wealth architecture that is energetically strong,
//                 astrologically aligned, and materially actionable.
//               </p>
//               <p className="highlight-text">
//                 We help you make better decisions. We help you find out the RoI of
//                 those decisions. We take part in your entrepreneurial journey with
//                 you to help you achieve abundance.
//               </p>
//             </div>
//           </section>

//           {/* ================= SECTION 3 : REQUEST A TAILORED PROPOSAL ================= */}
//           <section className="tailored-proposal">
//             <div className="proposal-inner">
//               <h2>REQUEST A TAILORED PROPOSAL</h2>
//               <p>
//                 Every individual carries a unique wealth signature. It is the coded
//                 blueprint that shapes how abundance enters your life, how you earn,
//                 which opportunities open for you, and what material potential you
//                 are capable of realising.
//               </p>
//               <p>
//                 This signature is influenced by the industries aligned with your temperament,
//                 the nature of trade that resonates with your psychology, your energetic
//                 and Vastu design, your karmic pathways, your leadership imprint,
//                 and the unseen support systems that strengthen or weaken your material world.
//               </p>
//               <p>
//                 Share your details and our team will create a personalized proposal
//                 outlining how we can elevate your business or personal wealth journey.
//                 You will receive a clear, structured plan from scratch to execution.
//               </p>
//               <p>
//                 The process is completely personalized based on your chart, numbers,
//                 environment, and energetic imprint to identify your earning style,
//                 opportunities, risks, leadership pattern, and material potential.
//               </p>
//               <p>
//                 We detect misaligned zones, weak planetary periods, energy drains,
//                 numerical conflicts, subconscious blocks, and structural imbalances.
//                 After careful curation and discussions, you receive a 30, 90,
//                 and 180-day action map for sustained growth.
//               </p>

//               <h3>WHO THIS IS FOR</h3>
//               <ul className="who-list">
//                 <li>Individuals earning well but feeling stuck at a plateau.</li>
//                 <li>Professionals seeking clarity on the right industry or role.</li>
//                 <li>Entrepreneurs wanting alignment of energy, space, and timing.</li>
//                 <li>Creators, freelancers, and consultants seeking consistency.</li>
//                 <li>Business owners facing stagnation or unexplained setbacks.</li>
//                 <li>People with strong ideas but no clear execution pathway.</li>
//                 <li>Individuals feeling blocked despite discipline and effort.</li>
//                 <li>Anyone wanting wealth aligned with their cosmic design.</li>
//               </ul>

//               <p className="final-highlight">
//                 This is not for quick fixes or generic advice. This is for those
//                 who want a precision-engineered wealth plan aligned across chart,
//                 space, numbers, mind, and energy.
//               </p>
//             </div>
//           </section>

//           {/* SERVICES SECTION - Always visible */}
//           <section className="offerings-section" style={{ display: step === 1 ? 'block' : 'none' }}>
//             <h2>SERVICES</h2>
//             <div className="offerings-grid">
//               {services.map((s, i) => (
//                 <div key={i} className="service-card">
//                   <h3>{s.label}</h3>
//                   <p>{s.description}</p>
//                   <span>{s.deliverable}</span>

//                   <button className="cta-btn" onClick={() => handleServiceSelect(s)}>
//                     BOOK NOW
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* FORM SECTION - Always in DOM, visibility controlled by CSS/display */}
//           <section className="form-section" style={{ display: step === 2 ? 'block' : 'none' }}>
//             <div className="form-center-wrapper">
//               {selectedService && <h2>{selectedService.label}</h2>}
              
//               {submitMessage && (
//                 <div className={`submit-message ${submitMessage.includes("successfully") ? "success" : "error"}`}>
//                   {submitMessage}
//                 </div>
//               )}

//               {/* Add ref to the form */}
//               <form
//                 ref={formRef}
//                 className="material-form"
//                 onSubmit={handleFormSubmit}
//               >
//                 <input 
//                   name="fullName" 
//                   placeholder="Full Name" 
//                   required 
//                   value={formData.fullName} 
//                   onChange={handleChange}
//                 />
//                 <input 
//                   type="date" 
//                   name="dob" 
//                   required 
//                   value={formData.dob} 
//                   onChange={handleChange}
//                 />
//                 <input 
//                   name="tob" 
//                   placeholder="Time of Birth" 
//                   value={formData.tob} 
//                   onChange={handleChange}
//                 />
//                 <input 
//                   name="pob" 
//                   placeholder="Place of Birth" 
//                   value={formData.pob} 
//                   onChange={handleChange}
//                 />
//                 <input 
//                   name="occupation" 
//                   placeholder="Occupation" 
//                   value={formData.occupation} 
//                   onChange={handleChange}
//                 />
//                 <textarea 
//                   name="keyConcerns" 
//                   placeholder="Key Concerns" 
//                   value={formData.keyConcerns} 
//                   onChange={handleChange}
//                 />
                
//                 {/* Hidden input for service */}
//                 <input 
//                   type="hidden" 
//                   name="service" 
//                   value={formData.service}
//                 />

//                 <div className="form-buttons">
//                   <button 
//                     type="button" 
//                     className="back-btn" 
//                     onClick={() => {
//                       setStep(1);
//                     }}
//                     disabled={isSubmitting}
//                   >
//                     Back to Services
//                   </button>
                  
//                   <button 
//                     className="glow-btn" 
//                     type="submit"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? "Submitting..." : "Proceed to Payment"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </section>

//           {/* PAYMENT SECTION */}
//           {step === 3 && (
//             <section className="payment-section">
//               <h2>Payment</h2>
//               <button className="pay-btn" onClick={() => setStep(4)}>
//                 Pay Now
//               </button>
//             </section>
//           )}

//           {/* CONFIRMATION SECTION */}
//           {step === 4 && (
//             <section className="confirmation-section">
//               <h2>Payment Successful!</h2>
//               <button className="cta-btn" onClick={() => setStep(1)}>
//                 Back to Services
//               </button>
//             </section>
//           )}

//           {/* CLIENTS SECTION */}
//           <section className="clients-section">
//             <h2>OUR CLIENTS</h2>
//             <div className="clients-logos">
//               {clientLogos.map((c) => (
//                 <div className="client-card" key={c._id}>
//                   <img src={c.image} className="client-img" alt={c.name} />
//                   <h4>{c.name}</h4>
//                   <p>{c.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* ================= FAQs SECTION ================= */}
//           {faqs.length > 0 && (
//             <section className="material-faq-section">
//               <div className="faq-inner">
//                 <h2>FAQ</h2>
//                 <div className="faq-list">
//                   {faqs.map((faq, index) => (
//                     <div
//                       key={faq._id}
//                       className={`faq-item ${openFaq === index ? "open" : ""}`}
//                       onClick={() =>
//                         setOpenFaq(openFaq === index ? null : index)
//                       }
//                     >
//                       <div className="faq-question">
//                         <h4>{faq.question}</h4>
//                         <span>{openFaq === index ? "−" : "+"}</span>
//                       </div>

//                       {openFaq === index && (
//                         <div className="faq-answer">
//                           <p>{faq.answer}</p>
//                         </div>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Material;




















import React, { useState, useEffect, useRef } from "react";
import "../../styles/Material.css";
import Sidebar from "../../components/Sidebar";

const services = [
  {
    label: "INDIVIDUAL WEALTH PROGRAMME",
    description:
      "Identify inborn wealth signatures, reprogram wealth beliefs, optimize behavior, environment, and energy, karmic clearing, ongoing optimization.",
    // deliverable: "Paid PDF",
  },
  {
    label: "BUSINESS CONSULTING",
    description:
      "Tailored business strategy call with chart-based insights, decode blocks, pricing, branding, investor compatibility, execution plan.",
    // deliverable: "Consultation + PDF",
  },
  {
    label: "ABUNDANCE PROGRAMME",
    description:
      "Specific plans based on chart to maximize wealth. Guidance on finances, investments, and wealth creation strategies.",
    // deliverable: "Paid PDF",
  },
];

const Material = () => {
  const [faqs, setFaqs] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [clientLogos, setClientLogos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Create refs
  const bookingFormRef = useRef(null); // Ref to scroll to form section
  const formRef = useRef(null); // Ref for form element

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    tob: "",
    pob: "",
    occupation: "",
    keyConcerns: "",
    service: "",
  });

  /* FETCH CLIENTS */
  useEffect(() => {
    fetch("https://astrobackend-5sr6.onrender.com/api/our-clients")
      .then((res) => res.json())
      .then((data) => {
        if (data?.clients) setClientLogos(data.clients);
      })
      .catch(() => {});

    fetch("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Materials")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data?.faqs)) {
          const activeFaqs = data.faqs.filter(f => f.status === "active");
          setFaqs(activeFaqs);
        }
      })
      .catch(() => {});
  }, []);

  // REMOVE all auto-scroll effects
  useEffect(() => {
    // No auto-scrolling - let the button click handle scrolling
  }, [step]);

  /* ⭐ ADD STARFIELD LIKE ABOUT US PAGE */
  useEffect(() => {
    const starfield = document.getElementById("material-starfield");
    if (starfield && !starfield.hasChildNodes()) {
      for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.className = "star";
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

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setFormData(prev => ({ ...prev, service: service.label }));
    setStep(2);
    
    // Scroll to booking form - FIXED VERSION
    setTimeout(() => {
      if (bookingFormRef.current) {
        // First ensure the form section is visible
        const formSection = bookingFormRef.current;
        formSection.style.display = 'block';
        
        // Then scroll to it
        formSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }
    }, 150); // Increased timeout to ensure DOM is ready
  };

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Prepare the data to send
      const submissionData = {
        ...formData,
        submittedAt: new Date().toISOString(),
        page: "Material",
      };

      // Send data to backend API
      const response = await fetch("https://astrobackend-5sr6.onrender.com/api/material-submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage("Form submitted successfully! Redirecting to payment...");
        
        // Clear form data
        setFormData({
          fullName: "",
          dob: "",
          tob: "",
          pob: "",
          occupation: "",
          keyConcerns: "",
          service: "",
        });

        // Reset form using ref
        if (formRef.current) {
          formRef.current.reset();
        }

        // Delay before moving to payment step
        setTimeout(() => {
          setStep(3);
          setIsSubmitting(false);
        }, 1500);
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitMessage("Failed to submit form. Please try again.");
      setIsSubmitting(false);
    }
  };

  // Function to go back to services
  const goBackToServices = () => {
    setStep(1);
    // Hide the form section
    if (bookingFormRef.current) {
      bookingFormRef.current.style.display = 'none';
    }
  };

  return (
    <div className="material-page">
      <div className="material-bg">
        {/* ⭐ STARFIELD BACKGROUND */}
        <div id="material-starfield" className="starfield"></div>

        {/* 🌌 FLOATING ORBS */}
        <div className="floating-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        {/* HAMBURGER BUTTON */}
        {!sidebarOpen && (
          <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
        )}

        {/* SIDEBAR */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* DARK OVERLAY */}
        {sidebarOpen && (
          <div className="sidebar-overlay visible" onClick={() => setSidebarOpen(false)} />
        )}

        {/* MAIN CONTENT */}
        <div className="material-content">
          {/* HERO SECTION */}
          <section className="material-hero">
            <div className="hero-inner">
              {/* LEFT IMAGE */}
              <div className="hero-image">
                <img
                  src="https://i.etsystatic.com/50315636/r/il/4448f3/6099304610/il_1080xN.6099304610_8ps8.jpg"
                  alt="Material Astrology"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="hero-text">
                <h1>MATERIAL</h1>
                <p>
                  Material is the architecture of wealth creation through energy, intention, environment, and aligned action. It is where your inner frequency meets real world strategy. Wealth is not an accident. It is a vibration you cultivate, a system you build, and a reality you consciously hold. In this space, we bring together Astrology, Energy Reading, Vastu, Numerology, Wealth Psychology, and complete calibration to help you create a life that feels abundant, secure, and expansive.
                </p>
              </div>
            </div>
          </section>

          {/* ================= SECTION 2 : HOW IT WORKS ================= */}
          <section className="how-it-works">
            <div className="how-inner">
              <h2>HOW IT WORKS</h2>
              <p>
                Your material reality is a reflection of your energetic capacity.
                To build wealth, you first strengthen the inner field. Then you align
                your environment, your timing, your mindset, and your strategic decisions.
              </p>
              <p>
                We begin by assessing your wealth frequency through your chart,
                your Vastu blueprint, your money patterns, and your energetic field.
              </p>
              <p>
                From there, we design a pathway that includes wealth rituals,
                vastu corrections, energetic upgrades, manifestation alignment,
                and practical financial strategy.
              </p>
              <p>
                The result is wealth architecture that is energetically strong,
                astrologically aligned, and materially actionable.
              </p>
              <p className="highlight-text">
                We help you make better decisions. We help you find out the RoI of
                those decisions. We take part in your entrepreneurial journey with
                you to help you achieve abundance.
              </p>
            </div>
          </section>

          {/* ================= SECTION 3 : REQUEST A TAILORED PROPOSAL ================= */}
          <section className="tailored-proposal">
            <div className="proposal-inner">
              <h2>REQUEST A TAILORED PROPOSAL</h2>
              <p>
                Every individual carries a unique wealth signature. It is the coded
                blueprint that shapes how abundance enters your life, how you earn,
                which opportunities open for you, and what material potential you
                are capable of realising.
              </p>
              <p>
                This signature is influenced by the industries aligned with your temperament,
                the nature of trade that resonates with your psychology, your energetic
                and Vastu design, your karmic pathways, your leadership imprint,
                and the unseen support systems that strengthen or weaken your material world.
              </p>
              <p>
                Share your details and our team will create a personalized proposal
                outlining how we can elevate your business or personal wealth journey.
                You will receive a clear, structured plan from scratch to execution.
              </p>
              <p>
                The process is completely personalized based on your chart, numbers,
                environment, and energetic imprint to identify your earning style,
                opportunities, risks, leadership pattern, and material potential.
              </p>
              <p>
                We detect misaligned zones, weak planetary periods, energy drains,
                numerical conflicts, subconscious blocks, and structural imbalances.
                After careful curation and discussions, you receive a 30, 90,
                and 180-day action map for sustained growth.
              </p>

              <h3>WHO THIS IS FOR</h3>
              <ul className="who-list">
                <li>Individuals earning well but feeling stuck at a plateau.</li>
                <li>Professionals seeking clarity on the right industry or role.</li>
                <li>Entrepreneurs wanting alignment of energy, space, and timing.</li>
                <li>Creators, freelancers, and consultants seeking consistency.</li>
                <li>Business owners facing stagnation or unexplained setbacks.</li>
                <li>People with strong ideas but no clear execution pathway.</li>
                <li>Individuals feeling blocked despite discipline and effort.</li>
                <li>Anyone wanting wealth aligned with their cosmic design.</li>
              </ul>

              <p className="final-highlight">
                This is not for quick fixes or generic advice. This is for those
                who want a precision-engineered wealth plan aligned across chart,
                space, numbers, mind, and energy.
              </p>
            </div>
          </section>

          {step === 1 && (
            <section className="offerings-section">
              <h2>SERVICES</h2>
              <div className="offerings-grid">
                {services.map((s, i) => (
                  <div key={i} className="service-card">
                    <h3>{s.label}</h3>
                    <p>{s.description}</p>
                    <span>{s.deliverable}</span>

                    <button className="cta-btn" onClick={() => handleServiceSelect(s)}>
                      BOOK NOW
                    </button>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* BOOKING FORM SECTION - Always in DOM but controlled by display style */}
          <section 
            ref={bookingFormRef} 
            className="form-section" 
            style={{ display: step === 2 ? 'block' : 'none' }}
          >
            <div className="form-center-wrapper">
              <h2>{selectedService?.label}</h2>
              
              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes("successfully") ? "success" : "error"}`}>
                  {submitMessage}
                </div>
              )}

              {/* Add ref to the form */}
              <form
                ref={formRef}
                className="material-form"
                onSubmit={handleFormSubmit}
              >
                <input 
                  name="fullName" 
                  placeholder="Full Name" 
                  required 
                  value={formData.fullName} 
                  onChange={handleChange}
                />
                <input 
                  type="date" 
                  name="dob" 
                  required 
                  value={formData.dob} 
                  onChange={handleChange}
                />
                <input 
                  name="tob" 
                  placeholder="Time of Birth" 
                  value={formData.tob} 
                  onChange={handleChange}
                />
                <input 
                  name="pob" 
                  placeholder="Place of Birth" 
                  value={formData.pob} 
                  onChange={handleChange}
                />
                <input 
                  name="occupation" 
                  placeholder="Occupation" 
                  value={formData.occupation} 
                  onChange={handleChange}
                />
                <textarea 
                  name="keyConcerns" 
                  placeholder="Key Concerns" 
                  value={formData.keyConcerns} 
                  onChange={handleChange}
                />
                
                {/* Hidden input for service */}
                <input 
                  type="hidden" 
                  name="service" 
                  value={formData.service}
                />

                <div className="form-buttons">
                  <button 
                    type="button" 
                    className="back-btn" 
                    onClick={goBackToServices}
                    disabled={isSubmitting}
                  >
                    Back to Services
                  </button>
                  
                  <button 
                    className="glow-btn" 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Proceed to Payment"}
                  </button>
                </div>
              </form>
            </div>
          </section>

          {step === 3 && (
            <section className="payment-section">
              <h2>Payment</h2>
              <button className="pay-btn" onClick={() => setStep(4)}>
                Pay Now
              </button>
            </section>
          )}

          {step === 4 && (
            <section className="confirmation-section">
              <h2>Payment Successful!</h2>
              <button className="cta-btn" onClick={() => setStep(1)}>
                Back to Services
              </button>
            </section>
          )}

          <section className="clients-section">
            <h2>OUR CLIENTS</h2>
            <div className="clients-logos">
              {clientLogos.map((c) => (
                <div className="client-card" key={c._id}>
                  <img src={c.image} className="client-img" alt={c.name} />
                  <h4>{c.name}</h4>
                  <p>{c.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ================= FAQs SECTION ================= */}
          {faqs.length > 0 && (
            <section className="material-faq-section">
              <div className="faq-inner">
                <h2>FAQ</h2>
                <div className="faq-list">
                  {faqs.map((faq, index) => (
                    <div
                      key={faq._id}
                      className={`faq-item ${openFaq === index ? "open" : ""}`}
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      <div className="faq-question">
                        <h4>{faq.question}</h4>
                        <span>{openFaq === index ? "−" : "+"}</span>
                      </div>

                      {openFaq === index && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Material;