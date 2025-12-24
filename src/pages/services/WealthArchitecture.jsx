// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import "../../styles/WealthArchitecture.css";
// import Sidebar from "../../components/Sidebar";

// const services = [
//   {
//     label: "INDIVIDUAL WEALTH PROGRAMME",
//     description:
//     "A personalised wealth blueprint which takes into account everything which governs your money energy.",
//   amount: 5000,
// },
//   {
//     label: "BUSINESS CONSULTING",
//     description:
//       "A strategic and energetic optimisation programme for founders and businesses.",
//        amount: 10000,
//     },
//   {
//     label: "ABUNDANCE PROGRAMME",
//     description:
//       "A transformational inner work programme that rewires your wealth frequency.",
//        amount: 8000,
//     },
// ];

// const WealthArchitecture = () => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
// const userId = storedUser?._id || "672af93b9cf24a87a0c5f8de";

//     const API_URL = "https://astrobackend-5sr6.onrender.com/api/payments";
// const [loading, setLoading] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);

//   const [clients, setClients] = useState([]);
//   const [faqs, setFaqs] = useState([]);
//   const [openFaq, setOpenFaq] = useState(null);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     keyConcerns: "",
//   });

//   /* ================= FETCH BACKEND ================= */
//   useEffect(() => {
//     fetch("https://astrobackend-5sr6.onrender.com/api/our-clients")
//       .then((r) => r.json())
//       .then((d) => d?.clients && setClients(d.clients));

//     fetch(
//       "https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Materials"
//     )
//       .then((r) => r.json())
//       .then((d) => {
//         if (Array.isArray(d?.faqs)) {
//           setFaqs(d.faqs.filter((f) => f.status === "active"));
//         }
//       });
//   }, []);

//   useEffect(() => {
//   if (!window.Razorpay) {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }
// }, []);


//   /* ================= STARFIELD ================= */
//   useEffect(() => {
//     const starfield = document.getElementById("wealth-starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 120; i++) {
//         const s = document.createElement("div");
//         s.className = "star";
//         s.style.top = `${Math.random() * 100}%`;
//         s.style.left = `${Math.random() * 100}%`;
//         starfield.appendChild(s);
//       }
//     }
//   }, []);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setStep(2);
//     setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
//   };
//   const handlePayment = async () => {
//   if (!selectedService) return alert("Please select a service");
//   if (loading) return;

//   try {
//     setLoading(true);

//     const orderRes = await axios.post(
//       `${API_URL}/create-order`,
//       {
//         amount: selectedService.amount * 100, // paise
//         userId,
//       }
//     );

//     if (!orderRes.data.success) {
//       alert("Order creation failed");
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
//         const verifyRes = await axios.post(
//           `${API_URL}/verify`,
//           {
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_signature: response.razorpay_signature,
//             userId,
//             amount: order.amount,
//           }
//         );

//         if (verifyRes.data.success) {
//           setStep(4);
//         } else {
//           alert("Payment verification failed");
//         }
//       },

//       prefill: {
//         name: formData.fullName,
//       },

//       theme: {
//         color: "#a100ff",
//       },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();

//     setLoading(false);
//   } catch (err) {
//     console.error("Payment error:", err);
//     alert("Payment failed");
//     setLoading(false);
//   }
// };


//   return (
//     <div className={`wealth-page ${sidebarOpen ? "sidebar-open" : ""}`}>
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {!sidebarOpen && (
//         <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
//           ☰
//         </button>
//       )}

//       {sidebarOpen && (
//         <div
//           className="sidebar-overlay visible"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div id="wealth-starfield" className="starfield"></div>

//       <div className="wealth-content">
//         {/* HERO */}
//         <section className="wealth-hero">
//         <div className="hero-inner">

//     {/* LEFT IMAGE */}
//     <div className="hero-image">
//       <img
//         src="https://i.etsystatic.com/50315636/r/il/4448f3/6099304610/il_1080xN.6099304610_8ps8.jpg"
//         alt="Material Astrology"
//       />
//     </div>

//     {/* RIGHT CONTENT */}
//     <div className="hero-text">
//       <h1>MATERIAL</h1>
//       <p>
//         Material is the architecture of wealth creation through energy, intention, environment, and aligned action. It is where your inner frequency meets real world strategy. Wealth is not an accident. It is a vibration you cultivate, a system you build, and a reality you consciously hold. In this space, we bring together Astrology, Energy Reading, Vastu, Numerology, Wealth Psychology, and complete calibration to help you create a life that feels abundant, secure, and expansive.
//       </p>
//     </div>

//   </div>
//         </section>

//         <section className="how-it-works">
//   <div className="how-inner">
//     <h2>HOW IT WORKS</h2>

//     <p>
//       Your material reality is a reflection of your energetic capacity.
//       To build wealth, you first strengthen the inner field. Then you align
//       your environment, your timing, your mindset, and your strategic decisions.
//     </p>

//     <p>
//       We begin by assessing your wealth frequency through your chart,
//       your Vastu blueprint, your money patterns, and your energetic field.
//     </p>

//     <p>
//       From there, we design a pathway that includes wealth rituals,
//       vastu corrections, energetic upgrades, manifestation alignment,
//       and practical financial strategy.
//     </p>

//     <p>
//       The result is wealth architecture that is energetically strong,
//       astrologically aligned, and materially actionable.
//     </p>

//     <p className="highlight-text">
//       We help you make better decisions. We help you find out the RoI of
//       those decisions. We take part in your entrepreneurial journey with
//       you to help you achieve abundance.
//     </p>
//   </div>
// </section>
// <section className="tailored-proposal">
//   <div className="proposal-inner">
//     <h2>REQUEST A TAILORED PROPOSAL</h2>

//     <p>
//       Every individual carries a unique wealth signature. It is the coded
//       blueprint that shapes how abundance enters your life, how you earn,
//       which opportunities open for you, and what material potential you
//       are capable of realising.
//     </p>

//     <p>
//       This signature is influenced by the industries aligned with your temperament,
//       the nature of trade that resonates with your psychology, your energetic
//       and Vastu design, your karmic pathways, your leadership imprint,
//       and the unseen support systems that strengthen or weaken your material world.
//     </p>

//     <p>
//       Share your details and our team will create a personalized proposal
//       outlining how we can elevate your business or personal wealth journey.
//       You will receive a clear, structured plan from scratch to execution.
//     </p>

//     <p>
//       The process is completely personalized based on your chart, numbers,
//       environment, and energetic imprint to identify your earning style,
//       opportunities, risks, leadership pattern, and material potential.
//     </p>

//     <p>
//       We detect misaligned zones, weak planetary periods, energy drains,
//       numerical conflicts, subconscious blocks, and structural imbalances.
//       After careful curation and discussions, you receive a 30, 90,
//       and 180-day action map for sustained growth.
//     </p>

//     <h3>WHO THIS IS FOR</h3>

//     <ul className="who-list">
//       <li>Individuals earning well but feeling stuck at a plateau.</li>
//       <li>Professionals seeking clarity on the right industry or role.</li>
//       <li>Entrepreneurs wanting alignment of energy, space, and timing.</li>
//       <li>Creators, freelancers, and consultants seeking consistency.</li>
//       <li>Business owners facing stagnation or unexplained setbacks.</li>
//       <li>People with strong ideas but no clear execution pathway.</li>
//       <li>Individuals feeling blocked despite discipline and effort.</li>
//       <li>Anyone wanting wealth aligned with their cosmic design.</li>
//     </ul>

//     <p className="final-highlight">
//       This is not for quick fixes or generic advice. This is for those
//       who want a precision-engineered wealth plan aligned across chart,
//       space, numbers, mind, and energy.
//     </p>

//     {/* <button className="cta-btn proposal-btn">
//       Request Your Personalized Proposal
//     </button> */}
//   </div>
// </section>

//         {/* STEP 1 : SERVICES */}
//         {step === 1 && (
//           <section className="services-section">
//             <h2>SERVICES</h2>
//             <div className="services-grid">
//               {services.map((s, i) => (
//                 <div key={i} className="service-card">
//                   <h3>{s.label}</h3>
//                   <p>{s.description}</p>
//                   <button onClick={() => handleServiceSelect(s)}>
//                     BOOK NOW
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* STEP 2 : FORM */}
//        {/* STEP 2 : FORM */}
// {step === 2 && selectedService && (
//   <section className="wealth-form-wrapper">
    
//     {/* FORM TITLE */}
//     <h2 className="wealth-form-title">
//       {selectedService.label}
//     </h2>

//     {/* FORM CARD */}
//     <div className="wealth-form-card">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           setStep(3);
//         }}
//       >
//         <input
//           name="fullName"
//           placeholder="Full Name"
//           required
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="dob"
//           required
//           onChange={handleChange}
//         />

//         <input
//           name="tob"
//           placeholder="Time of Birth"
//           onChange={handleChange}
//         />

//         <input
//           name="pob"
//           placeholder="Place of Birth"
//           onChange={handleChange}
//         />

//         <input
//           name="occupation"
//           placeholder="Occupation"
//           onChange={handleChange}
//         />

//         <textarea
//           name="keyConcerns"
//           placeholder="Key Concerns"
//           onChange={handleChange}
//         />

//         <button type="submit">PROCEED</button>
//       </form>
//     </div>
//   </section>
// )}


//     {step === 3 && selectedService && (
//   <section className="confirmation-section">
//     <h2>Confirm & Pay</h2>

//     <div className="payment-summary">
//       <p><strong>Service:</strong> {selectedService.label}</p>
//       <p><strong>Name:</strong> {formData.fullName}</p>
//       <p><strong>Total Amount:</strong> ₹{selectedService.amount}</p>
//     </div>

//     <button disabled={loading} onClick={handlePayment}>
//       {loading ? "Processing..." : "Pay Securely Now"}
//     </button>

//     <button className="back-btn" onClick={() => setStep(2)}>
//       ← Edit Details
//     </button>
//   </section>
// )}


//         {/* STEP 4 : DONE */}
//       {step === 4 && (
//   <section className="confirmation-section">
//     <h2>Payment Successful 🎉</h2>

//     <p>
//       Thank you <strong>{formData.fullName}</strong> for enrolling in
//       <strong> {selectedService.label}</strong>.
//     </p>

//     <button
//       onClick={() => {
//         setStep(1);
//         setSelectedService(null);
//       }}
//     >
//       Back to Services
//     </button>
//   </section>
// )}

//         {/* CLIENTS */}
//         <section className="clients-section">
//           <h2>OUR CLIENTS</h2>
//           <div className="clients-marquee">
//             <div className="marquee-track">
//               {clients.map((c) => (
//                 <img key={c._id} src={c.image} alt={c.name} />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         {faqs.length > 0 && (
//           <section className="faq-section">
//             <h2>FAQs</h2>
//             {faqs.map((f, i) => (
//               <div
//                 key={f._id}
//                 className="faq-item"
//                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
//               >
//                 <h4>{f.question}</h4>
//                 {openFaq === i && <p>{f.answer}</p>}
//               </div>
//             ))}
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WealthArchitecture;





// import axios from "axios";
// import React, { useState, useEffect, useRef } from "react"; // Added useRef
// import "../../styles/WealthArchitecture.css";
// import Sidebar from "../../components/Sidebar";

// const services = [
//   {
//     label: "INDIVIDUAL WEALTH PROGRAMME",
//     description:
//       "A personalised wealth blueprint which takes into account everything which governs your money energy.",
//     amount: 5000,
//   },
//   {
//     label: "BUSINESS CONSULTING",
//     description:
//       "A strategic and energetic optimisation programme for founders and businesses.",
//     amount: 10000,
//   },
//   {
//     label: "ABUNDANCE PROGRAMME",
//     description:
//       "A transformational inner work programme that rewires your wealth frequency.",
//     amount: 8000,
//   },
// ];

// const WealthArchitecture = () => {
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const userId = storedUser?._id || "672af93b9cf24a87a0c5f8de";

//   const API_URL = "https://astrobackend-5sr6.onrender.com/api/payments";
//   const [loading, setLoading] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);

//   const [clients, setClients] = useState([]);
//   const [faqs, setFaqs] = useState([]);
//   const [openFaq, setOpenFaq] = useState(null);

//   // Add ref for scrolling to form
//   const formSectionRef = useRef(null);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     keyConcerns: "",
//   });

//   /* ================= FETCH BACKEND ================= */
//   useEffect(() => {
//     fetch("https://astrobackend-5sr6.onrender.com/api/our-clients")
//       .then((r) => r.json())
//       .then((d) => d?.clients && setClients(d.clients));

//     fetch("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Materials")
//       .then((r) => r.json())
//       .then((d) => {
//         if (Array.isArray(d?.faqs)) {
//           setFaqs(d.faqs.filter((f) => f.status === "active"));
//         }
//       });
//   }, []);

//   useEffect(() => {
//     if (!window.Razorpay) {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   /* ================= STARFIELD ================= */
//   useEffect(() => {
//     const starfield = document.getElementById("wealth-starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 120; i++) {
//         const s = document.createElement("div");
//         s.className = "star";
//         s.style.top = `${Math.random() * 100}%`;
//         s.style.left = `${Math.random() * 100}%`;
//         starfield.appendChild(s);
//       }
//     }
//   }, []);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setStep(2);
    
//     // Scroll to form section instead of top
//     setTimeout(() => {
//       if (formSectionRef.current) {
//         formSectionRef.current.scrollIntoView({ 
//           behavior: 'smooth', 
//           block: 'start' 
//         });
//       }
//     }, 100);
//   };

//   const handlePayment = async () => {
//     if (!selectedService) return alert("Please select a service");
//     if (loading) return;

//     try {
//       setLoading(true);

//       const orderRes = await axios.post(`${API_URL}/create-order`, {
//         amount: selectedService.amount * 100, // paise
//         userId,
//       });

//       if (!orderRes.data.success) {
//         alert("Order creation failed");
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
//           const verifyRes = await axios.post(`${API_URL}/verify`, {
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_signature: response.razorpay_signature,
//             userId,
//             amount: order.amount,
//           });

//           if (verifyRes.data.success) {
//             setStep(4);
//           } else {
//             alert("Payment verification failed");
//           }
//         },

//         prefill: {
//           name: formData.fullName,
//         },

//         theme: {
//           color: "#a100ff",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//       setLoading(false);
//     } catch (err) {
//       console.error("Payment error:", err);
//       alert("Payment failed");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={`wealth-page ${sidebarOpen ? "sidebar-open" : ""}`}>
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {!sidebarOpen && (
//         <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
//           ☰
//         </button>
//       )}

//       {sidebarOpen && (
//         <div
//           className="sidebar-overlay visible"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div id="wealth-starfield" className="starfield"></div>

//       <div className="wealth-content">
//         {/* HERO */}
//         <section className="wealth-hero">
//           <div className="hero-inner">
//             {/* LEFT IMAGE */}
//             <div className="hero-image">
//               <img
//                 src="https://i.etsystatic.com/50315636/r/il/4448f3/6099304610/il_1080xN.6099304610_8ps8.jpg"
//                 alt="Material Astrology"
//               />
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="hero-text">
//               <h1>MATERIAL</h1>
//               <p>
//                 Material is the architecture of wealth creation through energy,
//                 intention, environment, and aligned action. It is where your
//                 inner frequency meets real world strategy. Wealth is not an
//                 accident. It is a vibration you cultivate, a system you build,
//                 and a reality you consciously hold. In this space, we bring
//                 together Astrology, Energy Reading, Vastu, Numerology, Wealth
//                 Psychology, and complete calibration to help you create a life
//                 that feels abundant, secure, and expansive.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="how-it-works">
//           <div className="how-inner">
//             <h2>HOW IT WORKS</h2>

//             <p>
//               Your material reality is a reflection of your energetic capacity.
//               To build wealth, you first strengthen the inner field. Then you
//               align your environment, your timing, your mindset, and your
//               strategic decisions.
//             </p>

//             <p>
//               We begin by assessing your wealth frequency through your chart,
//               your Vastu blueprint, your money patterns, and your energetic
//               field.
//             </p>

//             <p>
//               From there, we design a pathway that includes wealth rituals,
//               vastu corrections, energetic upgrades, manifestation alignment,
//               and practical financial strategy.
//             </p>

//             <p>
//               The result is wealth architecture that is energetically strong,
//               astrologically aligned, and materially actionable.
//             </p>

//             <p className="highlight-text">
//               We help you make better decisions. We help you find out the RoI of
//               those decisions. We take part in your entrepreneurial journey with
//               you to help you achieve abundance.
//             </p>
//           </div>
//         </section>
//         <section className="tailored-proposal">
//           <div className="proposal-inner">
//             <h2>REQUEST A TAILORED PROPOSAL</h2>

//             <p>
//               Every individual carries a unique wealth signature. It is the
//               coded blueprint that shapes how abundance enters your life, how
//               you earn, which opportunities open for you, and what material
//               potential you are capable of realising.
//             </p>

//             <p>
//               This signature is influenced by the industries aligned with your
//               temperament, the nature of trade that resonates with your
//               psychology, your energetic and Vastu design, your karmic pathways,
//               your leadership imprint, and the unseen support systems that
//               strengthen or weaken your material world.
//             </p>

//             <p>
//               Share your details and our team will create a personalized
//               proposal outlining how we can elevate your business or personal
//               wealth journey. You will receive a clear, structured plan from
//               scratch to execution.
//             </p>

//             <p>
//               The process is completely personalized based on your chart,
//               numbers, environment, and energetic imprint to identify your
//               earning style, opportunities, risks, leadership pattern, and
//               material potential.
//             </p>

//             <p>
//               We detect misaligned zones, weak planetary periods, energy drains,
//               numerical conflicts, subconscious blocks, and structural
//               imbalances. After careful curation and discussions, you receive a
//               30, 90, and 180-day action map for sustained growth.
//             </p>

//             <h3>WHO THIS IS FOR</h3>

//             <ul className="who-list">
//               <li>Individuals earning well but feeling stuck at a plateau.</li>
//               <li>
//                 Professionals seeking clarity on the right industry or role.
//               </li>
//               <li>
//                 Entrepreneurs wanting alignment of energy, space, and timing.
//               </li>
//               <li>
//                 Creators, freelancers, and consultants seeking consistency.
//               </li>
//               <li>
//                 Business owners facing stagnation or unexplained setbacks.
//               </li>
//               <li>People with strong ideas but no clear execution pathway.</li>
//               <li>Individuals feeling blocked despite discipline and effort.</li>
//               <li>Anyone wanting wealth aligned with their cosmic design.</li>
//             </ul>

//             <p className="final-highlight">
//               This is not for quick fixes or generic advice. This is for those
//               who want a precision-engineered wealth plan aligned across chart,
//               space, numbers, mind, and energy.
//             </p>
//           </div>
//         </section>

//         {/* STEP 1 : SERVICES */}
//         {step === 1 && (
//           <section className="services-section">
//             <h2>SERVICES</h2>
//             <div className="services-grid">
//               {services.map((s, i) => (
//                 <div key={i} className="service-card">
//                   <h3>{s.label}</h3>
//                   <p>{s.description}</p>
//                   <button onClick={() => handleServiceSelect(s)}>
//                     BOOK NOW
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* STEP 2 : FORM with ref */}
//         {step === 2 && selectedService && (
//           <section className="wealth-form-wrapper" ref={formSectionRef}>
//             {/* FORM TITLE */}
//             <h2 className="wealth-form-title">{selectedService.label}</h2>

//             {/* FORM CARD */}
//             <div className="wealth-form-card">
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   setStep(3);
//                 }}
//               >
//                 <input
//                   name="fullName"
//                   placeholder="Full Name"
//                   required
//                   onChange={handleChange}
//                 />

//                 <input
//                   type="date"
//                   name="dob"
//                   required
//                   onChange={handleChange}
//                 />

//                 <input
//                   name="tob"
//                   placeholder="Time of Birth"
//                   onChange={handleChange}
//                 />

//                 <input
//                   name="pob"
//                   placeholder="Place of Birth"
//                   onChange={handleChange}
//                 />

//                 <input
//                   name="occupation"
//                   placeholder="Occupation"
//                   onChange={handleChange}
//                 />

//                 <textarea
//                   name="keyConcerns"
//                   placeholder="Key Concerns"
//                   onChange={handleChange}
//                 />

//                 <div className="form-buttons p-4">
//                   <button 
//                     type="button" 
//                     className="back-btn"
//                     onClick={() => setStep(1)}
//                   >
//                     ← Back to Services
//                   </button>
                  
//                   <button type="submit">PROCEED</button>
//                 </div>
//               </form>
//             </div>
//           </section>
//         )}

//         {step === 3 && selectedService && (
//           <section className="confirmation-section">
//             <h2>Confirm & Pay</h2>

//             <div className="payment-summary">
//               <p>
//                 <strong>Service:</strong> {selectedService.label}
//               </p>
//               <p>
//                 <strong>Name:</strong> {formData.fullName}
//               </p>
//               <p>
//                 <strong>Total Amount:</strong> ₹{selectedService.amount}
//               </p>
//             </div>

//             <button disabled={loading} onClick={handlePayment}>
//               {loading ? "Processing..." : "Pay Securely Now"}
//             </button>

//             <button className="back-btn" onClick={() => setStep(2)}>
//               ← Edit Details
//             </button>
//           </section>
//         )}

//         {/* STEP 4 : DONE */}
//         {step === 4 && (
//           <section className="confirmation-section">
//             <h2>Payment Successful 🎉</h2>

//             <p>
//               Thank you <strong>{formData.fullName}</strong> for enrolling in
//               <strong> {selectedService.label}</strong>.
//             </p>

//             <button
//               onClick={() => {
//                 setStep(1);
//                 setSelectedService(null);
//               }}
//             >
//               Back to Services
//             </button>
//           </section>
//         )}

//         {/* CLIENTS */}
//         <section className="clients-section">
//           <h2>OUR CLIENTS</h2>
//           <div className="clients-marquee">
//             <div className="marquee-track">
//               {clients.map((c) => (
//                 <img key={c._id} src={c.image} alt={c.name} />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         {faqs.length > 0 && (
//           <section className="faq-section">
//             <h2>FAQs</h2>
//             {faqs.map((f, i) => (
//               <div
//                 key={f._id}
//                 className="faq-item"
//                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
//               >
//                 <h4>{f.question}</h4>
//                 {openFaq === i && <p>{f.answer}</p>}
//               </div>
//             ))}
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WealthArchitecture;



// import axios from "axios";
// import React, { useState, useEffect, useRef } from "react";
// import "../../styles/WealthArchitecture.css";
// import Sidebar from "../../components/Sidebar";

// const services = [
//   {
//     label: "INDIVIDUAL WEALTH PROGRAMME",
//     description:
//       "A personalised wealth blueprint which takes into account everything which governs your money energy.",
//     amount: 300,
//   },
//   {
//     label: "BUSINESS CONSULTING",
//     description:
//       "A strategic and energetic optimisation programme for founders and businesses.",
//     amount: 1000,
//   },
//   {
//     label: "ABUNDANCE PROGRAMME",
//     description:
//       "A transformational inner work programme that rewires your wealth frequency.",
//     amount: 1200,
//   },
// ];

// const WealthArchitecture = () => {
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const userId = storedUser?._id || "672af93b9cf24a87a0c5f8de";

//   const API_URL = "https://astrobackend-5sr6.onrender.com/api/payments";
//   const [loading, setLoading] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);

//   const [clients, setClients] = useState([]);
//   const [faqs, setFaqs] = useState([]);
//   const [openFaq, setOpenFaq] = useState(null);

//   // Add ref for scrolling to form
//   const formSectionRef = useRef(null);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     keyConcerns: "",
//   });

//   /* ================= FETCH BACKEND ================= */
//   useEffect(() => {
//     fetch("https://astrobackend-5sr6.onrender.com/api/our-clients")
//       .then((r) => r.json())
//       .then((d) => d?.clients && setClients(d.clients));

//     fetch("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Materials")
//       .then((r) => r.json())
//       .then((d) => {
//         if (Array.isArray(d?.faqs)) {
//           setFaqs(d.faqs.filter((f) => f.status === "active"));
//         }
//       });
//   }, []);

//   useEffect(() => {
//     if (!window.Razorpay) {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   /* ================= STARFIELD ================= */
//   useEffect(() => {
//     const starfield = document.getElementById("wealth-starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 120; i++) {
//         const s = document.createElement("div");
//         s.className = "star";
//         s.style.top = `${Math.random() * 100}%`;
//         s.style.left = `${Math.random() * 100}%`;
//         starfield.appendChild(s);
//       }
//     }
//   }, []);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setStep(2);
    
//     // Scroll to form section instead of top
//     setTimeout(() => {
//       if (formSectionRef.current) {
//         formSectionRef.current.scrollIntoView({ 
//           behavior: 'smooth', 
//           block: 'start' 
//         });
//       }
//     }, 100);
//   };

//   const handlePayment = async () => {
//     if (!selectedService) return alert("Please select a service");
//     if (loading) return;

//     try {
//       setLoading(true);

//       const orderRes = await axios.post(`${API_URL}/create-order`, {
//         amount: selectedService.amount * 100, // paise
//         userId,
//       });

//       if (!orderRes.data.success) {
//         alert("Order creation failed");
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
//           const verifyRes = await axios.post(`${API_URL}/verify`, {
//             razorpay_payment_id: response.razorpay_payment_id,
//             razorpay_order_id: response.razorpay_order_id,
//             razorpay_signature: response.razorpay_signature,
//             userId,
//             amount: order.amount,
//           });

//           if (verifyRes.data.success) {
//             setStep(4);
//           } else {
//             alert("Payment verification failed");
//           }
//         },

//         prefill: {
//           name: formData.fullName,
//         },

//         theme: {
//           color: "#a100ff",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//       setLoading(false);
//     } catch (err) {
//       console.error("Payment error:", err);
//       alert("Payment failed");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={`wealth-page ${sidebarOpen ? "sidebar-open" : ""}`}>
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {!sidebarOpen && (
//         <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
//           ☰
//         </button>
//       )}

//       {sidebarOpen && (
//         <div
//           className="sidebar-overlay visible"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div id="wealth-starfield" className="starfield"></div>

//       <div className="wealth-content">
//         {/* HERO */}
//         <section className="wealth-hero">
//           <div className="hero-inner">
//             {/* LEFT IMAGE */}
//             <div className="hero-image">
//               <img
//                 src="https://i.etsystatic.com/50315636/r/il/4448f3/6099304610/il_1080xN.6099304610_8ps8.jpg"
//                 alt="Material Astrology"
//               />
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="hero-text">
//               <h1>MATERIAL</h1>
//               <p>
//                 Material is the architecture of wealth creation through energy,
//                 intention, environment, and aligned action. It is where your
//                 inner frequency meets real world strategy. Wealth is not an
//                 accident. It is a vibration you cultivate, a system you build,
//                 and a reality you consciously hold. In this space, we bring
//                 together Astrology, Energy Reading, Vastu, Numerology, Wealth
//                 Psychology, and complete calibration to help you create a life
//                 that feels abundant, secure, and expansive.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="how-it-works">
//           <div className="how-inner">
//             <h2>HOW IT WORKS</h2>

//             <p>
//               Your material reality is a reflection of your energetic capacity.
//               To build wealth, you first strengthen the inner field. Then you
//               align your environment, your timing, your mindset, and your
//               strategic decisions.
//             </p>

//             <p>
//               We begin by assessing your wealth frequency through your chart,
//               your Vastu blueprint, your money patterns, and your energetic
//               field.
//             </p>

//             <p>
//               From there, we design a pathway that includes wealth rituals,
//               vastu corrections, energetic upgrades, manifestation alignment,
//               and practical financial strategy.
//             </p>

//             <p>
//               The result is wealth architecture that is energetically strong,
//               astrologically aligned, and materially actionable.
//             </p>

//             <p className="highlight-text">
//               We help you make better decisions. We help you find out the RoI of
//               those decisions. We take part in your entrepreneurial journey with
//               you to help you achieve abundance.
//             </p>
//           </div>
//         </section>
//         <section className="tailored-proposal">
//           <div className="proposal-inner">
//             <h2>REQUEST A TAILORED PROPOSAL</h2>

//             <p>
//               Every individual carries a unique wealth signature. It is the
//               coded blueprint that shapes how abundance enters your life, how
//               you earn, which opportunities open for you, and what material
//               potential you are capable of realising.
//             </p>

//             <p>
//               This signature is influenced by the industries aligned with your
//               temperament, the nature of trade that resonates with your
//               psychology, your energetic and Vastu design, your karmic pathways,
//               your leadership imprint, and the unseen support systems that
//               strengthen or weaken your material world.
//             </p>

//             <p>
//               Share your details and our team will create a personalized
//               proposal outlining how we can elevate your business or personal
//               wealth journey. You will receive a clear, structured plan from
//               scratch to execution.
//             </p>

//             <p>
//               The process is completely personalized based on your chart,
//               numbers, environment, and energetic imprint to identify your
//               earning style, opportunities, risks, leadership pattern, and
//               material potential.
//             </p>

//             <p>
//               We detect misaligned zones, weak planetary periods, energy drains,
//               numerical conflicts, subconscious blocks, and structural
//               imbalances. After careful curation and discussions, you receive a
//               30, 90, and 180-day action map for sustained growth.
//             </p>

//             <h3>WHO THIS IS FOR</h3>

//             <ul className="who-list">
//               <li>Individuals earning well but feeling stuck at a plateau.</li>
//               <li>
//                 Professionals seeking clarity on the right industry or role.
//               </li>
//               <li>
//                 Entrepreneurs wanting alignment of energy, space, and timing.
//               </li>
//               <li>
//                 Creators, freelancers, and consultants seeking consistency.
//               </li>
//               <li>
//                 Business owners facing stagnation or unexplained setbacks.
//               </li>
//               <li>People with strong ideas but no clear execution pathway.</li>
//               <li>Individuals feeling blocked despite discipline and effort.</li>
//               <li>Anyone wanting wealth aligned with their cosmic design.</li>
//             </ul>

//             <p className="final-highlight">
//               This is not for quick fixes or generic advice. This is for those
//               who want a precision-engineered wealth plan aligned across chart,
//               space, numbers, mind, and energy.
//             </p>
//           </div>
//         </section>

//         {/* STEP 1 : SERVICES */}
//         {step === 1 && (
//           <section className="services-section">
//             <h2>SERVICES</h2>
//             <div className="services-grid">
//               {services.map((s, i) => (
//                 <div key={i} className="service-card">
//                   <h3>{s.label}</h3>
//                   <p>{s.description}</p>
//                   <button onClick={() => handleServiceSelect(s)}>
//                     BOOK NOW
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* STEP 2 : FORM with ref */}
//         {step === 2 && selectedService && (
//           <section className="wealth-form-wrapper" ref={formSectionRef}>
//             {/* FORM TITLE */}
//             <h2 className="wealth-form-title">{selectedService.label}</h2>

//             {/* FORM CARD */}
//             <div className="wealth-form-card">
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   setStep(3);
//                 }}
//               >
//                 <input
//                   name="fullName"
//                   placeholder="Full Name"
//                   required
//                   onChange={handleChange}
//                   value={formData.fullName}
//                 />

//                 <input
//                   type="date"
//                   name="dob"
//                   required
//                   onChange={handleChange}
//                   value={formData.dob}
//                 />

//                 <input
//                   name="tob"
//                   placeholder="Time of Birth"
//                   onChange={handleChange}
//                   value={formData.tob}
//                 />

//                 <input
//                   name="pob"
//                   placeholder="Place of Birth"
//                   onChange={handleChange}
//                   value={formData.pob}
//                 />

//                 <input
//                   name="occupation"
//                   placeholder="Occupation"
//                   onChange={handleChange}
//                   value={formData.occupation}
//                 />

//                 <textarea
//                   name="keyConcerns"
//                   placeholder="Key Concerns"
//                   onChange={handleChange}
//                   value={formData.keyConcerns}
//                   rows="4"
//                 />

//                 <div className="form-actions" style={{
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   marginTop: '30px',
//                   paddingTop: '20px',
//                   borderTop: '1px solid rgba(255, 255, 255, 0.1)'
//                 }}>
//                   <button 
//                     type="button" 
//                     className="back-to-services-btn"
//                     onClick={() => setStep(1)}
//                     style={{
//                       padding: '12px 24px',
//                       background: 'rgba(255, 255, 255, 0.1)',
//                       color: '#fff',
//                       border: '1px solid rgba(255, 255, 255, 0.2)',
//                       borderRadius: '8px',
//                       cursor: 'pointer',
//                       fontSize: '14px',
//                       fontWeight: '500',
//                       transition: 'all 0.3s ease'
//                     }}
//                   >
//                     ← Back to Services
//                   </button>
                  
//                   <button 
//                     type="submit"
//                     style={{
//                       padding: '12px 30px',
//                       background: 'linear-gradient(135deg, #a100ff, #7b2cbf)',
//                       color: '#fff',
//                       border: 'none',
//                       borderRadius: '8px',
//                       cursor: 'pointer',
//                       fontSize: '16px',
//                       fontWeight: '600',
//                       transition: 'all 0.3s ease'
//                     }}
//                   >
//                     PROCEED TO PAYMENT
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </section>
//         )}

//         {step === 3 && selectedService && (
//           <section className="confirmation-section">
//             <h2>Confirm & Pay</h2>

//             <div className="payment-summary">
//               <p>
//                 <strong>Service:</strong> {selectedService.label}
//               </p>
//               <p>
//                 <strong>Name:</strong> {formData.fullName}
//               </p>
//               <p>
//                 <strong>Total Amount:</strong> ₹{selectedService.amount}
//               </p>
//             </div>

//             <button disabled={loading} onClick={handlePayment}>
//               {loading ? "Processing..." : "Pay Securely Now"}
//             </button>

//             <button className="back-btn" onClick={() => setStep(2)}>
//               ← Edit Details
//             </button>
//           </section>
//         )}

//         {/* STEP 4 : DONE */}
//         {step === 4 && (
//           <section className="confirmation-section">
//             <h2>Payment Successful </h2>

//             <p>
//               Thank you <strong>{formData.fullName}</strong> for enrolling in
//               <strong> {selectedService.label}</strong>.
//             </p>

//             <button
//               onClick={() => {
//                 setStep(1);
//                 setSelectedService(null);
//               }}
//             >
//               Back to Services
//             </button>
//           </section>
//         )}

//         {/* CLIENTS */}
//         <section className="clients-section">
//           <h2>OUR CLIENTS</h2>
//           <div className="clients-marquee">
//             <div className="marquee-track">
//               {clients.map((c) => (
//                 <img key={c._id} src={c.image} alt={c.name} />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         {faqs.length > 0 && (
//           <section className="faq-section">
//             <h2>FAQs</h2>
//             {faqs.map((f, i) => (
//               <div
//                 key={f._id}
//                 className="faq-item"
//                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
//               >
//                 <h4>{f.question}</h4>
//                 {openFaq === i && <p>{f.answer}</p>}
//               </div>
//             ))}
//           </section>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WealthArchitecture;




















































// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../../styles/WealthArchitecture.css";
// import Sidebar from "../../components/Sidebar";
// import { motion } from "framer-motion";
// import { ArrowRight, CheckCircle, Loader2, Zap, FileText } from "lucide-react";

// const services = [
//   {
//     label: "INDIVIDUAL WEALTH PROGRAMME",
//     description:
//       "A personalised wealth blueprint which takes into account everything which governs your money energy.",
//     amount: 300,
//   },
//   {
//     label: "BUSINESS CONSULTING",
//     description:
//       "A strategic and energetic optimisation programme for founders and businesses.",
//     amount: 1000,
//   },
//   {
//     label: "ABUNDANCE PROGRAMME",
//     description:
//       "A transformational inner work programme that rewires your wealth frequency.",
//     amount: 1200,
//   },
// ];

// const WealthArchitecture = () => {
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const userId = storedUser?._id || "672af93b9cf24a87a0c5f8de";

//   const API_URL = "https://astrobackend-5sr6.onrender.com/api/payments";
//   const [loading, setLoading] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const [confirmationMsg, setConfirmationMsg] = useState("");
//   const [pdfReady, setPdfReady] = useState(false);

//   const [clients, setClients] = useState([]);
//   const [faqs, setFaqs] = useState([]);
//   const [openFaq, setOpenFaq] = useState(null);

//   // Add ref for scrolling to form
//   const formSectionRef = useRef(null);
//   const bookingFormRef = useRef(null);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     keyConcerns: "",
//     email: "",
//     phone: "",
//   });

//   /* ================= FETCH BACKEND ================= */
//   useEffect(() => {
//     fetch("https://astrobackend-5sr6.onrender.com/api/our-clients")
//       .then((r) => r.json())
//       .then((d) => d?.clients && setClients(d.clients));

//     fetch("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Materials")
//       .then((r) => r.json())
//       .then((d) => {
//         if (Array.isArray(d?.faqs)) {
//           setFaqs(d.faqs.filter((f) => f.status === "active"));
//         }
//       });
//   }, []);

//   useEffect(() => {
//     if (!window.Razorpay) {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   // RESPONSIVE
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   /* ================= STARFIELD ================= */
//   useEffect(() => {
//     const starfield = document.getElementById("wealth-starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 120; i++) {
//         const s = document.createElement("div");
//         s.className = "star";
//         s.style.top = `${Math.random() * 100}%`;
//         s.style.left = `${Math.random() * 100}%`;
//         starfield.appendChild(s);
//       }
//     }
//   }, []);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setStep(2);
    
//     // Scroll to form section
//     setTimeout(() => {
//       if (formSectionRef.current) {
//         formSectionRef.current.scrollIntoView({ 
//           behavior: 'smooth', 
//           block: 'start' 
//         });
//       }
//     }, 100);
//   };

//   // FORM SUBMIT
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.fullName || !formData.dob) {
//       alert("Please fill required fields");
//       return;
//     }
//     setStep(3);
//   };

//   // RAZORPAY PAYMENT HANDLER (FROM ENERGY PAGE)
//   const handlePayment = async () => {
//     if (!selectedService) {
//       alert("Please select a service first!");
//       return;
//     }

//     if (!window.Razorpay) {
//       alert("Payment system loading... Try again.");
//       return;
//     }

//     try {
//       setProcessing(true);

//       const amount = selectedService.amount || 300;

//       const orderRes = await axios.post(
//         "https://astrobackend-5sr6.onrender.com/api/payments/create-order",
//         {
//           amount: amount * 100, // Convert to paise
//           userId: userId,
//         }
//       );

//       if (!orderRes.data.success) {
//         alert("Order creation failed.");
//         setProcessing(false);
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
//                 amount: amount * 100,
//               }
//             );

//             if (verifyRes.data.success) {
//               setConfirmationMsg(
//                 `Thank you ${formData.fullName}! Payment successful. We'll contact you shortly for your ${selectedService.label}.`
//               );
//               setPdfReady(!!verifyRes.data.pdfUrl);
//               setStep(4);
//             } else {
//               alert("Payment verification failed.");
//             }
//           } catch (error) {
//             console.log("VERIFY ERROR:", error);
//             alert("Verification request failed.");
//           } finally {
//             setProcessing(false);
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

//       setProcessing(false);
//     } catch (err) {
//       console.log("ORDER ERROR:", err);
//       alert("Payment could not be processed.");
//       setProcessing(false);
//     }
//   };

//   // RESET
//   const resetAll = () => {
//     setStep(1);
//     setSelectedService(null);
//     setFormData({
//       fullName: "",
//       dob: "",
//       tob: "",
//       pob: "",
//       occupation: "",
//       keyConcerns: "",
//       email: "",
//       phone: "",
//     });
//     setConfirmationMsg("");
//     setPdfReady(false);
//   };

//   const progressWidth = step === 2 ? 33 : step === 3 ? 66 : step === 4 ? 100 : 0;

//   return (
//     <div className={`wealth-page ${sidebarOpen ? "sidebar-open" : ""}`}>
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {!sidebarOpen && (
//         <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
//           ☰
//         </button>
//       )}

//       {sidebarOpen && (
//         <div
//           className="sidebar-overlay visible"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div id="wealth-starfield" className="starfield"></div>

//       <div className="wealth-content">
//         {/* HERO */}
//         <section className="wealth-hero">
//           <div className="hero-inner">
//             {/* LEFT IMAGE */}
//             <div className="hero-image">
//               <img
//                 src="https://i.etsystatic.com/50315636/r/il/4448f3/6099304610/il_1080xN.6099304610_8ps8.jpg"
//                 alt="Material Astrology"
//               />
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="hero-text">
//               <h1>MATERIAL</h1>
//               <p>
//                 Material is the architecture of wealth creation through energy,
//                 intention, environment, and aligned action. It is where your
//                 inner frequency meets real world strategy. Wealth is not an
//                 accident. It is a vibration you cultivate, a system you build,
//                 and a reality you consciously hold. In this space, we bring
//                 together Astrology, Energy Reading, Vastu, Numerology, Wealth
//                 Psychology, and complete calibration to help you create a life
//                 that feels abundant, secure, and expansive.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="how-it-works">
//           <div className="how-inner">
//             <h2>HOW IT WORKS</h2>

//             <p>
//               Your material reality is a reflection of your energetic capacity.
//               To build wealth, you first strengthen the inner field. Then you
//               align your environment, your timing, your mindset, and your
//               strategic decisions.
//             </p>

//             <p>
//               We begin by assessing your wealth frequency through your chart,
//               your Vastu blueprint, your money patterns, and your energetic
//               field.
//             </p>

//             <p>
//               From there, we design a pathway that includes wealth rituals,
//               vastu corrections, energetic upgrades, manifestation alignment,
//               and practical financial strategy.
//             </p>

//             <p>
//               The result is wealth architecture that is energetically strong,
//               astrologically aligned, and materially actionable.
//             </p>

//             <p className="highlight-text">
//               We help you make better decisions. We help you find out the RoI of
//               those decisions. We take part in your entrepreneurial journey with
//               you to help you achieve abundance.
//             </p>
//           </div>
//         </section>
        
//         <section className="tailored-proposal">
//           <div className="proposal-inner">
//             <h2>REQUEST A TAILORED PROPOSAL</h2>

//             <p>
//               Every individual carries a unique wealth signature. It is the
//               coded blueprint that shapes how abundance enters your life, how
//               you earn, which opportunities open for you, and what material
//               potential you are capable of realising.
//             </p>

//             <p>
//               This signature is influenced by the industries aligned with your
//               temperament, the nature of trade that resonates with your
//               psychology, your energetic and Vastu design, your karmic pathways,
//               your leadership imprint, and the unseen support systems that
//               strengthen or weaken your material world.
//             </p>

//             <p>
//               Share your details and our team will create a personalized
//               proposal outlining how we can elevate your business or personal
//               wealth journey. You will receive a clear, structured plan from
//               scratch to execution.
//             </p>

//             <p>
//               The process is completely personalized based on your chart,
//               numbers, environment, and energetic imprint to identify your
//               earning style, opportunities, risks, leadership pattern, and
//               material potential.
//             </p>

//             <p>
//               We detect misaligned zones, weak planetary periods, energy drains,
//               numerical conflicts, subconscious blocks, and structural
//               imbalances. After careful curation and discussions, you receive a
//               30, 90, and 180-day action map for sustained growth.
//             </p>

//             <h3>WHO THIS IS FOR</h3>

//             <ul className="who-list">
//               <li>Individuals earning well but feeling stuck at a plateau.</li>
//               <li>
//                 Professionals seeking clarity on the right industry or role.
//               </li>
//               <li>
//                 Entrepreneurs wanting alignment of energy, space, and timing.
//               </li>
//               <li>
//                 Creators, freelancers, and consultants seeking consistency.
//               </li>
//               <li>
//                 Business owners facing stagnation or unexplained setbacks.
//               </li>
//               <li>People with strong ideas but no clear execution pathway.</li>
//               <li>Individuals feeling blocked despite discipline and effort.</li>
//               <li>Anyone wanting wealth aligned with their cosmic design.</li>
//             </ul>

//             <p className="final-highlight">
//               This is not for quick fixes or generic advice. This is for those
//               who want a precision-engineered wealth plan aligned across chart,
//               space, numbers, mind, and energy.
//             </p>
//           </div>
//         </section>

//         {/* STEP 1 : SERVICES */}
//         {step === 1 && (
//           <section className="services-section">
//             <h2>SERVICES</h2>
//             <p className="services-subtitle">Choose the programme that resonates with you</p>
//             <div className="services-grid">
//               {services.map((s, i) => (
//                 <div key={i} className="service-card">
//                   <div className="service-header">
//                     <h3>{s.label}</h3>
//                     <div className="service-price">₹{s.amount}</div>
//                   </div>
//                   <p>{s.description}</p>
//                   <button onClick={() => handleServiceSelect(s)}>
//                     BOOK NOW
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* FORM & PAYMENT SECTION */}
//         <div ref={formSectionRef}>
//           {(step === 2 || step === 3 || step === 4) && selectedService && (
//             <section className="wealth-form-wrapper" ref={bookingFormRef}>
//               <div className="wealth-form-container">
//                 <div className="form-header">
//                   <div style={{
//                     display: "inline-block",
//                     padding: "6px 14px",
//                     background: "rgba(161, 0, 255, 0.15)",
//                     color: "#a100ff",
//                     fontWeight: "700",
//                     fontSize: "12px",
//                     borderRadius: "999px",
//                     marginBottom: "12px",
//                   }}>
//                     {selectedService.label}
//                   </div>
                  
//                   <div className="form-title-section">
//                     <h2 className="wealth-form-title">{selectedService.label}</h2>
//                     <div className="step-indicator">
//                       Step {step === 2 ? 1 : step === 3 ? 2 : 3} of 3
//                     </div>
//                   </div>
//                 </div>

//                 {/* Progress Bar */}
//                 <div className="progress-container">
//                   <div className="progress-bar">
//                     <div 
//                       className="progress-fill"
//                       style={{ width: `${progressWidth}%` }}
//                     />
//                   </div>
//                 </div>

//                 {/* STEP 2 : FORM */}
//                 {step === 2 && (
//                   <div className="wealth-form-card">
//                     <form onSubmit={handleFormSubmit}>
//                       <div className="form-grid">
//                         <div className="form-group">
//                           <label>Full Name *</label>
//                           <input
//                             name="fullName"
//                             placeholder="Your full name"
//                             required
//                             onChange={handleChange}
//                             value={formData.fullName}
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label>Email *</label>
//                           <input
//                             type="email"
//                             name="email"
//                             placeholder="you@email.com"
//                             required
//                             onChange={handleChange}
//                             value={formData.email}
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label>Date of Birth *</label>
//                           <input
//                             type="date"
//                             name="dob"
//                             required
//                             onChange={handleChange}
//                             value={formData.dob}
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label>Phone Number</label>
//                           <input
//                             name="phone"
//                             placeholder="+91 98765 43210"
//                             onChange={handleChange}
//                             value={formData.phone}
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label>Time of Birth</label>
//                           <input
//                             name="tob"
//                             placeholder="HH:MM (24-hour format)"
//                             onChange={handleChange}
//                             value={formData.tob}
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label>Place of Birth</label>
//                           <input
//                             name="pob"
//                             placeholder="City, State, Country"
//                             onChange={handleChange}
//                             value={formData.pob}
//                           />
//                         </div>
//                       </div>

//                       <div className="form-group">
//                         <label>Occupation</label>
//                         <input
//                           name="occupation"
//                           placeholder="Your current occupation/profession"
//                           onChange={handleChange}
//                           value={formData.occupation}
//                         />
//                       </div>

//                       <div className="form-group">
//                         <label>Key Concerns & Expectations</label>
//                         <textarea
//                           name="keyConcerns"
//                           placeholder="Tell us about your specific concerns, goals, and what you hope to achieve..."
//                           onChange={handleChange}
//                           value={formData.keyConcerns}
//                           rows="4"
//                         />
//                       </div>

//                       <div className="form-actions">
//                         <button 
//                           type="button" 
//                           className="back-to-services-btn"
//                           onClick={() => setStep(1)}
//                         >
//                           ← Back to Services
//                         </button>
                        
//                         <button type="submit" className="proceed-btn">
//                           Continue to Payment <ArrowRight size={18} />
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 )}

//                 {/* STEP 3 : PAYMENT CONFIRMATION */}
//                 {step === 3 && (
//                   <div className="payment-confirmation">
//                     <div className="payment-summary-card">
//                       <h3>Confirm & Pay</h3>
                      
//                       <div className="summary-details">
//                         <div className="summary-row">
//                           <span className="summary-label">Service:</span>
//                           <span className="summary-value">{selectedService.label}</span>
//                         </div>
//                         <div className="summary-row">
//                           <span className="summary-label">Name:</span>
//                           <span className="summary-value">{formData.fullName}</span>
//                         </div>
//                         <div className="summary-row">
//                           <span className="summary-label">Email:</span>
//                           <span className="summary-value">{formData.email}</span>
//                         </div>
//                         <div className="summary-row">
//                           <span className="summary-label">Delivery Time:</span>
//                           <span className="summary-value highlight">24-48 Hours</span>
//                         </div>
                        
//                         <div className="summary-divider" />
                        
//                         <div className="summary-row total-row">
//                           <span className="summary-label">Total Amount:</span>
//                           <span className="total-amount">₹{selectedService.amount}</span>
//                         </div>
//                       </div>

//                       {/* Security Badge */}
//                       <div className="security-badge">
//                         Secure Payment • Razorpay Encrypted
//                       </div>

//                       {/* Payment Actions */}
//                       <div className="payment-actions">
//                         <button
//                           onClick={handlePayment}
//                           disabled={processing}
//                           className="pay-button"
//                         >
//                           {processing ? (
//                             <>
//                               <Loader2 size={18} className="spin" /> Processing Payment...
//                             </>
//                           ) : (
//                             <>
//                               <Zap size={18} /> Pay Securely Now
//                             </>
//                           )}
//                         </button>

//                         <button
//                           onClick={() => setStep(2)}
//                           className="edit-details-btn"
//                         >
//                           ← Edit Details
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* STEP 4 : PAYMENT SUCCESS */}
//                 {step === 4 && (
//                   <div className="payment-success">
//                     <div className="success-icon">
//                       <CheckCircle size={48} color="#4ade80" />
//                     </div>
                    
//                     <h3>Payment Successful</h3>
                    
//                     <p className="success-message">
//                       {confirmationMsg || `Thank you ${formData.fullName}! Payment successful. We'll contact you shortly for your ${selectedService.label}.`}
//                     </p>

//                     {pdfReady && (
//                       <div className="pdf-ready-badge">
//                         <FileText size={18} /> Your PDF report is ready
//                       </div>
//                     )}

//                     <div className="success-actions">
//                       <button
//                         onClick={resetAll}
//                         className="back-to-services-btn"
//                       >
//                         Back to Services
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </section>
//           )}
//         </div>

//         {/* CLIENTS */}
//         <section className="clients-section">
//           <h2>OUR CLIENTS</h2>
//           <div className="clients-marquee">
//             <div className="marquee-track">
//               {clients.map((c) => (
//                 <img key={c._id} src={c.image} alt={c.name} />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         {faqs.length > 0 && (
//           <section className="faq-section">
//             <h2>FAQs</h2>
//             {faqs.map((f, i) => (
//               <div
//                 key={f._id}
//                 className="faq-item"
//                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
//               >
//                 <h4>{f.question}</h4>
//                 {openFaq === i && <p>{f.answer}</p>}
//               </div>
//             ))}
//           </section>
//         )}
//       </div>

//       {/* INLINE STYLES */}
//       <style>{`
//         .spin { animation: spin 1s linear infinite; }
//         @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg);} }
        
//         .wealth-form-container {
//           max-width: 1600px;
//           margin: 0 auto;
//           background: rgba(255, 255, 255, 0.08);
//           backdrop-filter: blur(15px);
//           -webkit-backdrop-filter: blur(15px);
//           border-radius: 20px;
//           padding: 35px;
//           border: 1px solid rgba(255, 255, 255, 0.15);
//           box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
//           position: relative;
//           overflow: hidden;
//         }
        
//         .wealth-form-container::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05), transparent 50%);
//           pointer-events: none;
//           z-index: 0;
//         }
        
//         .form-header {
//           position: relative;
//           z-index: 1;
//           margin-bottom: 25px;
//         }
        
//         .form-title-section {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }
        
//         .wealth-form-title {
//           margin: 0 0 12px;
//           font-size: 22px;
//           font-weight: 700;
//           color: #fff;
//         }
        
//         .step-indicator {
//           color: #c4b5fd;
//           font-size: 14px;
//           font-weight: 600;
//           padding: 6px 14px;
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 12px;
//         }
        
//         .progress-container {
//           margin-bottom: 30px;
//           position: relative;
//           z-index: 1;
//         }
        
//         .progress-bar {
//           height: 8px;
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 4px;
//           overflow: hidden;
//         }
        
//         .progress-fill {
//           height: 100%;
//           background: linear-gradient(90deg, #a100ff, #7b2cbf);
//           border-radius: 4px;
//           transition: width 0.4s ease;
//         }
        
//         .wealth-form-card {
//           position: relative;
//           z-index: 1;
//         }
        
//         .form-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//           margin-bottom: 20px;
//         }
        
//         .form-group {
//           margin-bottom: 20px;
//         }
        
//         .form-group label {
//           display: block;
//           margin-bottom: 8px;
//           color: #e2e8f0;
//           font-weight: 600;
//           font-size: 14px;
//         }
        
//         .form-group input,
//         .form-group textarea {
//           width: 100%;
//           padding: 14px 16px;
//           background: rgba(255, 255, 255, 0.07);
//           border: 1px solid rgba(255, 255, 255, 0.15);
//           border-radius: 12px;
//           color: #fff;
//           font-size: 15px;
//           transition: all 0.3s ease;
//         }
        
//         .form-group input:focus,
//         .form-group textarea:focus {
//           outline: none;
//           border-color: #a100ff;
//           box-shadow: 0 0 0 3px rgba(161, 0, 255, 0.1);
//         }
        
//         .form-actions {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-top: 30px;
//           padding-top: 20px;
//           border-top: 1px solid rgba(255, 255, 255, 0.1);
//         }
        
//         .back-to-services-btn {
//           padding: 12px 24px;
//           background: rgba(255, 255, 255, 0.1);
//           color: #fff;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           border-radius: 8px;
//           cursor: pointer;
//           font-size: 14px;
//           font-weight: 500;
//           transition: all 0.3s ease;
//         }
        
//         .back-to-services-btn:hover {
//           background: rgba(255, 255, 255, 0.15);
//           transform: translateY(-1px);
//         }
        
//         .proceed-btn {
//           padding: 12px 30px;
//           background: linear-gradient(135deg, #a100ff, #7b2cbf);
//           color: #fff;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           font-size: 16px;
//           font-weight: 600;
//           transition: all 0.3s ease;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }
        
//         .proceed-btn:hover {
//           transform: translateY(-1px);
//           box-shadow: 0 5px 15px rgba(161, 0, 255, 0.3);
//         }
        
//         .payment-confirmation {
//           position: relative;
//           z-index: 1;
//         }
        
//         .payment-summary-card {
//           background: rgba(255, 255, 255, 0.06);
//           border-radius: 16px;
//           padding: 25px;
//           margin-bottom: 25px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }
        
//         .payment-summary-card h3 {
//           margin: 0 0 20px;
//           color: #fff;
//           font-size: 20px;
//         }
        
//         .summary-details {
//           margin-bottom: 20px;
//         }
        
//         .summary-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 12px;
//         }
        
//         .summary-label {
//           color: #c4b5fd;
//           font-size: 14px;
//         }
        
//         .summary-value {
//           color: #fff;
//           font-size: 15px;
//         }
        
//         .summary-value.highlight {
//           color: #4ade80;
//           font-weight: 600;
//         }
        
//         .summary-divider {
//           height: 1px;
//           background: rgba(255, 255, 255, 0.1);
//           margin: 20px 0;
//         }
        
//         .total-row {
//           margin-top: 20px;
//         }
        
//         .total-amount {
//           font-size: 28px;
//           font-weight: 800;
//           color: #a100ff;
//         }
        
//         .security-badge {
//           padding: 12px 16px;
//           background: rgba(255, 255, 255, 0.06);
//           border-radius: 10px;
//           color: #c4b5fd;
//           text-align: center;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           font-size: 13px;
//           margin-bottom: 25px;
//         }
        
//         .payment-actions {
//           display: flex;
//           gap: 15px;
//           align-items: center;
//         }
        
//         .pay-button {
//           padding: 16px 24px;
//           background: linear-gradient(135deg, #a100ff, #7b2cbf);
//           color: #fff;
//           border-radius: 12px;
//           border: none;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           font-weight: 600;
//           font-size: 15px;
//           flex: 1;
//           min-width: 220px;
//           transition: all 0.3s ease;
//         }
        
//         .pay-button:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//         }
        
//         .pay-button:hover:not(:disabled) {
//           transform: translateY(-2px);
//           box-shadow: 0 5px 20px rgba(161, 0, 255, 0.3);
//         }
        
//         .edit-details-btn {
//           padding: 16px 24px;
//           background: rgba(255, 255, 255, 0.1);
//           color: #fff;
//           border-radius: 12px;
//           border: 1px solid rgba(255, 255, 255, 0.15);
//           cursor: pointer;
//           font-weight: 600;
//           font-size: 15px;
//           transition: all 0.3s ease;
//         }
        
//         .edit-details-btn:hover {
//           background: rgba(255, 255, 255, 0.15);
//         }
        
//         .payment-success {
//           text-align: center;
//           padding: 20px 0;
//           position: relative;
//           z-index: 1;
//         }
        
//         .success-icon {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           width: 90px;
//           height: 90px;
//           background: radial-gradient(circle at center, rgba(74, 222, 128, 0.15), transparent 70%);
//           border-radius: 50%;
//           margin-bottom: 25px;
//         }
        
//         .payment-success h3 {
//           margin: 0 0 15px;
//           font-size: 26px;
//           font-weight: 700;
//           color: #4ade80;
//         }
        
//         .success-message {
//           color: #c4b5fd;
//           font-size: 15px;
//           line-height: 1.6;
//           margin: 0 auto 25px;
//           max-width: 600px;
//         }
        
//         .pdf-ready-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           margin-top: 8px;
//           padding: 12px 20px;
//           border-radius: 10px;
//           background: rgba(74, 222, 128, 0.1);
//           border: 1px solid rgba(74, 222, 128, 0.25);
//           color: #4ade80;
//           font-weight: 600;
//           margin-bottom: 25px;
//           font-size: 14px;
//         }
        
//         .success-actions {
//           display: flex;
//           gap: 15px;
//           justify-content: center;
//           margin-top: 30px;
//         }
        
//         .service-header {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           margin-bottom: 15px;
//         }
        
//         .service-price {
//           font-size: 24px;
//           font-weight: 800;
//           color: #a100ff;
//           background: rgba(161, 0, 255, 0.1);
//           padding: 4px 12px;
//           border-radius: 8px;
//         }
        
//         .services-subtitle {
//           color: #c4b5fd;
//           text-align: center;
//           margin-bottom: 30px;
//           font-size: 16px;
//         }
        
//         @media (max-width: 768px) {
//           .form-grid {
//             grid-template-columns: 1fr;
//           }
          
//           .form-actions {
//             flex-direction: column;
//             gap: 15px;
//           }
          
//           .back-to-services-btn,
//           .proceed-btn {
//             width: 100%;
//             justify-content: center;
//           }
          
//           .payment-actions {
//             flex-direction: column;
//           }
          
//           .pay-button,
//           .edit-details-btn {
//             width: 100%;
//           }
          
//           .wealth-form-container {
//             padding: 24px;
//             margin: 0 16px;
//           }
          
//           .service-header {
//             flex-direction: column;
//             gap: 10px;
//           }
          
//           .service-price {
//             align-self: flex-start;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WealthArchitecture;























// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../../styles/WealthArchitecture.css";
// import Sidebar from "../../components/Sidebar";
// import { motion } from "framer-motion";
// import { ArrowRight, CheckCircle, Loader2, Zap, FileText } from "lucide-react";

// const services = [
//   {
//     label: "INDIVIDUAL WEALTH PROGRAMME",
//     description:
//       "A personalised wealth blueprint which takes into account everything which governs your money energy.",
//     amount: 300,
//   },
//   {
//     label: "BUSINESS CONSULTING",
//     description:
//       "A strategic and energetic optimisation programme for founders and businesses.",
//     amount: 1000,
//   },
//   {
//     label: "ABUNDANCE PROGRAMME",
//     description:
//       "A transformational inner work programme that rewires your wealth frequency.",
//     amount: 1200,
//   },
// ];

// const WealthArchitecture = () => {
//   const storedUser = JSON.parse(localStorage.getItem("user"));
//   const userId = storedUser?._id || "672af93b9cf24a87a0c5f8de";

//   const API_URL = "https://astrobackend-5sr6.onrender.com/api/payments";
//   const [loading, setLoading] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const [step, setStep] = useState(1);
//   const [selectedService, setSelectedService] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const [confirmationMsg, setConfirmationMsg] = useState("");
//   const [pdfReady, setPdfReady] = useState(false);

//   const [clients, setClients] = useState([]);
//   const [faqs, setFaqs] = useState([]);
//   const [openFaq, setOpenFaq] = useState(null);

//   // Add ref for scrolling to form
//   const formSectionRef = useRef(null);
//   const bookingFormRef = useRef(null);

//   const [formData, setFormData] = useState({
//     fullName: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     occupation: "",
//     keyConcerns: "",
//     email: "",
//     phone: "",
//   });

//   /* ================= FETCH BACKEND ================= */
//   useEffect(() => {
//     fetch("https://astrobackend-5sr6.onrender.com/api/our-clients")
//       .then((r) => r.json())
//       .then((d) => d?.clients && setClients(d.clients));

//     fetch("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Materials")
//       .then((r) => r.json())
//       .then((d) => {
//         if (Array.isArray(d?.faqs)) {
//           setFaqs(d.faqs.filter((f) => f.status === "active"));
//         }
//       });
//   }, []);

//   useEffect(() => {
//     if (!window.Razorpay) {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";
//       script.async = true;
//       document.body.appendChild(script);
//     }
//   }, []);

//   // RESPONSIVE
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   /* ================= STARFIELD ================= */
//   useEffect(() => {
//     const starfield = document.getElementById("wealth-starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 120; i++) {
//         const s = document.createElement("div");
//         s.className = "star";
//         s.style.top = `${Math.random() * 100}%`;
//         s.style.left = `${Math.random() * 100}%`;
//         starfield.appendChild(s);
//       }
//     }
//   }, []);

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     setStep(2);
    
//     // Scroll to form section
//     setTimeout(() => {
//       if (formSectionRef.current) {
//         formSectionRef.current.scrollIntoView({ 
//           behavior: 'smooth', 
//           block: 'start' 
//         });
//       }
//     }, 100);
//   };

//   // FORM SUBMIT
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.fullName || !formData.dob || !formData.email) {
//       alert("Please fill required fields (Name, Email, Date of Birth)");
//       return;
//     }
//     setStep(3);
//   };

//   // RAZORPAY PAYMENT HANDLER (FROM ENERGY PAGE)
//   const handlePayment = async () => {
//     if (!selectedService) {
//       alert("Please select a service first!");
//       return;
//     }

//     if (!window.Razorpay) {
//       alert("Payment system loading... Try again.");
//       return;
//     }

//     try {
//       setProcessing(true);

//       const amount = selectedService.amount || 300;
//       const amountInPaise = amount * 1; // Convert rupees to paise

//       const orderRes = await axios.post(
//         "https://astrobackend-5sr6.onrender.com/api/payments/create-order",
//         {
//           amount: amountInPaise,
//           userId: userId,
//         }
//       );

//       if (!orderRes.data.success) {
//         alert("Order creation failed.");
//         setProcessing(false);
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
//                 amount: amountInPaise,
//               }
//             );

//             if (verifyRes.data.success) {
//               setConfirmationMsg(
//                 `Thank you ${formData.fullName}! Payment successful. We'll contact you shortly for your ${selectedService.label}.`
//               );
//               setPdfReady(!!verifyRes.data.pdfUrl);
//               setStep(4);
//             } else {
//               alert("Payment verification failed.");
//             }
//           } catch (error) {
//             console.log("VERIFY ERROR:", error);
//             alert("Verification request failed.");
//           } finally {
//             setProcessing(false);
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

//       setProcessing(false);
//     } catch (err) {
//       console.log("ORDER ERROR:", err);
//       alert("Payment could not be processed.");
//       setProcessing(false);
//     }
//   };

//   // RESET
//   const resetAll = () => {
//     setStep(1);
//     setSelectedService(null);
//     setFormData({
//       fullName: "",
//       dob: "",
//       tob: "",
//       pob: "",
//       occupation: "",
//       keyConcerns: "",
//       email: "",
//       phone: "",
//     });
//     setConfirmationMsg("");
//     setPdfReady(false);
//   };

//   const progressWidth = step === 2 ? 33 : step === 3 ? 66 : step === 4 ? 100 : 0;

//   return (
//     <div className={`wealth-page ${sidebarOpen ? "sidebar-open" : ""}`}>
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {!sidebarOpen && (
//         <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
//           ☰
//         </button>
//       )}

//       {sidebarOpen && (
//         <div
//           className="sidebar-overlay visible"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div id="wealth-starfield" className="starfield"></div>

//       <div className="wealth-content">
//         {/* HERO */}
//         <section className="wealth-hero">
//           <div className="hero-inner">
//             {/* LEFT IMAGE */}
//             <div className="hero-image">
//               <img
//                 src="https://i.etsystatic.com/50315636/r/il/4448f3/6099304610/il_1080xN.6099304610_8ps8.jpg"
//                 alt="Material Astrology"
//               />
//             </div>

//             {/* RIGHT CONTENT */}
//             <div className="hero-text">
//               <h1>MATERIAL</h1>
//               <p>
//                 Material is the architecture of wealth creation through energy,
//                 intention, environment, and aligned action. It is where your
//                 inner frequency meets real world strategy. Wealth is not an
//                 accident. It is a vibration you cultivate, a system you build,
//                 and a reality you consciously hold. In this space, we bring
//                 together Astrology, Energy Reading, Vastu, Numerology, Wealth
//                 Psychology, and complete calibration to help you create a life
//                 that feels abundant, secure, and expansive.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section className="how-it-works">
//           <div className="how-inner">
//             <h2>HOW IT WORKS</h2>

//             <p>
//               Your material reality is a reflection of your energetic capacity.
//               To build wealth, you first strengthen the inner field. Then you
//               align your environment, your timing, your mindset, and your
//               strategic decisions.
//             </p>

//             <p>
//               We begin by assessing your wealth frequency through your chart,
//               your Vastu blueprint, your money patterns, and your energetic
//               field.
//             </p>

//             <p>
//               From there, we design a pathway that includes wealth rituals,
//               vastu corrections, energetic upgrades, manifestation alignment,
//               and practical financial strategy.
//             </p>

//             <p>
//               The result is wealth architecture that is energetically strong,
//               astrologically aligned, and materially actionable.
//             </p>

//             <p className="highlight-text">
//               We help you make better decisions. We help you find out the RoI of
//               those decisions. We take part in your entrepreneurial journey with
//               you to help you achieve abundance.
//             </p>
//           </div>
//         </section>
        
//         <section className="tailored-proposal">
//           <div className="proposal-inner">
//             <h2>REQUEST A TAILORED PROPOSAL</h2>

//             <p>
//               Every individual carries a unique wealth signature. It is the
//               coded blueprint that shapes how abundance enters your life, how
//               you earn, which opportunities open for you, and what material
//               potential you are capable of realising.
//             </p>

//             <p>
//               This signature is influenced by the industries aligned with your
//               temperament, the nature of trade that resonates with your
//               psychology, your energetic and Vastu design, your karmic pathways,
//               your leadership imprint, and the unseen support systems that
//               strengthen or weaken your material world.
//             </p>

//             <p>
//               Share your details and our team will create a personalized
//               proposal outlining how we can elevate your business or personal
//               wealth journey. You will receive a clear, structured plan from
//               scratch to execution.
//             </p>

//             <p>
//               The process is completely personalized based on your chart,
//               numbers, environment, and energetic imprint to identify your
//               earning style, opportunities, risks, leadership pattern, and
//               material potential.
//             </p>

//             <p>
//               We detect misaligned zones, weak planetary periods, energy drains,
//               numerical conflicts, subconscious blocks, and structural
//               imbalances. After careful curation and discussions, you receive a
//               30, 90, and 180-day action map for sustained growth.
//             </p>

//             <h3>WHO THIS IS FOR</h3>

//             <ul className="who-list">
//               <li>Individuals earning well but feeling stuck at a plateau.</li>
//               <li>
//                 Professionals seeking clarity on the right industry or role.
//               </li>
//               <li>
//                 Entrepreneurs wanting alignment of energy, space, and timing.
//               </li>
//               <li>
//                 Creators, freelancers, and consultants seeking consistency.
//               </li>
//               <li>
//                 Business owners facing stagnation or unexplained setbacks.
//               </li>
//               <li>People with strong ideas but no clear execution pathway.</li>
//               <li>Individuals feeling blocked despite discipline and effort.</li>
//               <li>Anyone wanting wealth aligned with their cosmic design.</li>
//             </ul>

//             <p className="final-highlight">
//               This is not for quick fixes or generic advice. This is for those
//               who want a precision-engineered wealth plan aligned across chart,
//               space, numbers, mind, and energy.
//             </p>
//           </div>
//         </section>

//         {/* STEP 1 : SERVICES */}
//         {step === 1 && (
//           <section className="services-section">
//             <h2>SERVICES</h2>
//             <p className="services-subtitle">Choose the programme that resonates with you</p>
//             <div className="services-grid">
//               {services.map((s, i) => (
//                 <div key={i} className="service-card">
//                   <div className="service-header">
//                     <h3>{s.label}</h3>
//                   </div>
//                   <p>{s.description}</p>
                  
//                   {/* Amount above the BOOK NOW button */}
//                   <div className="service-price-section">
//                     <div className="service-price">₹{s.amount}</div>
//                     <button className="mb-" onClick={() => handleServiceSelect(s)}>
//                       BOOK NOW
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {/* FORM & PAYMENT SECTION */}
//         <div ref={formSectionRef}>
//           {(step === 2 || step === 3 || step === 4) && selectedService && (
//             <section className="wealth-form-wrapper" ref={bookingFormRef}>
//               <div className="wealth-form-container">
//                 <div className="form-header">
//                   <div style={{
//                     display: "inline-block",
//                     padding: "6px 14px",
//                     background: "rgba(161, 0, 255, 0.15)",
//                     color: "#a100ff",
//                     fontWeight: "700",
//                     fontSize: "12px",
//                     borderRadius: "999px",
//                     marginBottom: "12px",
//                   }}>
//                     {selectedService.label}
//                   </div>
                  
//                   <div className="form-title-section">
//                     <h2 className="wealth-form-title">{selectedService.label}</h2>
//                     <div className="step-indicator">
//                       Step {step === 2 ? 1 : step === 3 ? 2 : 3} of 3
//                     </div>
//                   </div>
//                 </div>

//                 {/* Progress Bar */}
//                 <div className="progress-container">
//                   <div className="progress-bar">
//                     <div 
//                       className="progress-fill"
//                       style={{ width: `${progressWidth}%` }}
//                     />
//                   </div>
//                 </div>

//                 {/* STEP 2 : FORM */}
//                 {step === 2 && (
//                   <div className="wealth-form-card">
//                     <form onSubmit={handleFormSubmit}>
//                       <div className="form-grid">
//                         <div className="form-group">
//                           <label>Full Name *</label>
//                           <input
//                             name="fullName"
//                             placeholder="Your full name"
//                             required
//                             onChange={handleChange}
//                             value={formData.fullName}
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label>Email *</label>
//                           <input
//                             type="email"
//                             name="email"
//                             placeholder="you@email.com"
//                             required
//                             onChange={handleChange}
//                             value={formData.email}
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label>Date of Birth *</label>
//                           <input
//                             type="date"
//                             name="dob"
//                             required
//                             onChange={handleChange}
//                             value={formData.dob}
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label>Phone Number</label>
//                           <input
//                             name="phone"
//                             placeholder="+91 98765 43210"
//                             onChange={handleChange}
//                             value={formData.phone}
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label>Time of Birth</label>
//                           <input
//                             name="tob"
//                             placeholder="HH:MM (24-hour format)"
//                             onChange={handleChange}
//                             value={formData.tob}
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label>Place of Birth</label>
//                           <input
//                             name="pob"
//                             placeholder="City, State, Country"
//                             onChange={handleChange}
//                             value={formData.pob}
//                           />
//                         </div>
//                       </div>

//                       <div className="form-group">
//                         <label>Occupation</label>
//                         <input
//                           name="occupation"
//                           placeholder="Your current occupation/profession"
//                           onChange={handleChange}
//                           value={formData.occupation}
//                         />
//                       </div>

//                       <div className="form-group">
//                         <label>Key Concerns & Expectations</label>
//                         <textarea
//                           name="keyConcerns"
//                           placeholder="Tell us about your specific concerns, goals, and what you hope to achieve..."
//                           onChange={handleChange}
//                           value={formData.keyConcerns}
//                           rows="4"
//                         />
//                       </div>

//                       <div className="form-actions">
//                         <button 
//                           type="button" 
//                           className="back-to-services-btn"
//                           onClick={() => setStep(1)}
//                         >
//                           ← Back to Services
//                         </button>
                        
//                         <button type="submit" className="proceed-btn">
//                           Continue to Payment <ArrowRight size={18} />
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 )}

//                 {/* STEP 3 : PAYMENT CONFIRMATION */}
//                 {step === 3 && (
//                   <div className="payment-confirmation">
//                     <div className="payment-summary-card">
//                       <h3>Confirm & Pay</h3>
                      
//                       <div className="summary-details">
//                         <div className="summary-row">
//                           <span className="summary-label">Service:</span>
//                           <span className="summary-value">{selectedService.label}</span>
//                         </div>
//                         <div className="summary-row">
//                           <span className="summary-label">Name:</span>
//                           <span className="summary-value">{formData.fullName}</span>
//                         </div>
//                         <div className="summary-row">
//                           <span className="summary-label">Email:</span>
//                           <span className="summary-value">{formData.email}</span>
//                         </div>
//                         <div className="summary-row">
//                           <span className="summary-label">Delivery Time:</span>
//                           <span className="summary-value highlight">24-48 Hours</span>
//                         </div>
                        
//                         <div className="summary-divider" />
                        
//                         <div className="summary-row total-row">
//                           <span className="summary-label">Total Amount:</span>
//                           <span className="total-amount">₹{selectedService.amount}</span>
//                         </div>
//                       </div>

//                       {/* Security Badge */}
//                       <div className="security-badge">
//                         Secure Payment • Razorpay Encrypted
//                       </div>

//                       {/* Payment Actions */}
//                       <div className="payment-actions">
//                         <button
//                           onClick={handlePayment}
//                           disabled={processing}
//                           className="pay-button"
//                         >
//                           {processing ? (
//                             <>
//                               <Loader2 size={18} className="spin" /> Processing Payment...
//                             </>
//                           ) : (
//                             <>
//                               <Zap size={18} /> Pay Securely Now
//                             </>
//                           )}
//                         </button>

//                         <button
//                           onClick={() => setStep(2)}
//                           className="edit-details-btn"
//                         >
//                           ← Edit Details
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* STEP 4 : PAYMENT SUCCESS */}
//                 {step === 4 && (
//                   <div className="payment-success">
//                     <div className="success-icon">
//                       <CheckCircle size={48} color="#4ade80" />
//                     </div>
                    
//                     <h3>Payment Successful</h3>
                    
//                     <p className="success-message">
//                       {confirmationMsg || `Thank you ${formData.fullName}! Payment successful. We'll contact you shortly for your ${selectedService.label}.`}
//                     </p>

//                     {pdfReady && (
//                       <div className="pdf-ready-badge">
//                         <FileText size={18} /> Your PDF report is ready
//                       </div>
//                     )}

//                     <div className="success-actions">
//                       <button
//                         onClick={resetAll}
//                         className="back-to-services-btn"
//                       >
//                         Back to Services
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </section>
//           )}
//         </div>

//         {/* CLIENTS */}
//         <section className="clients-section">
//           <h2>OUR CLIENTS</h2>
//           <div className="clients-marquee">
//             <div className="marquee-track">
//               {clients.map((c) => (
//                 <img key={c._id} src={c.image} alt={c.name} />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         {faqs.length > 0 && (
//           <section className="faq-section">
//             <h2>FAQs</h2>
//             {faqs.map((f, i) => (
//               <div
//                 key={f._id}
//                 className="faq-item"
//                 onClick={() => setOpenFaq(openFaq === i ? null : i)}
//               >
//                 <h4>{f.question}</h4>
//                 {openFaq === i && <p>{f.answer}</p>}
//               </div>
//             ))}
//           </section>
//         )}
//       </div>

//       {/* INLINE STYLES */}
//       <style>{`
//         .spin { animation: spin 1s linear infinite; }
//         @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg);} }
        
//         .wealth-form-container {
//           max-width: 1600px;
//           margin: 0 auto;
//           background: rgba(255, 255, 255, 0.08);
//           backdrop-filter: blur(15px);
//           -webkit-backdrop-filter: blur(15px);
//           border-radius: 20px;
//           padding: 35px;
//           border: 1px solid rgba(255, 255, 255, 0.15);
//           box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
//           position: relative;
//           overflow: hidden;
//         }
        
//         .wealth-form-container::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05), transparent 50%);
//           pointer-events: none;
//           z-index: 0;
//         }
        
//         .form-header {
//           position: relative;
//           z-index: 1;
//           margin-bottom: 25px;
//         }
        
//         .form-title-section {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }
        
//         .wealth-form-title {
//           margin: 0 0 12px;
//           font-size: 22px;
//           font-weight: 700;
//           color: #fff;
//         }
        
//         .step-indicator {
//           color: #c4b5fd;
//           font-size: 14px;
//           font-weight: 600;
//           padding: 6px 14px;
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 12px;
//         }
        
//         .progress-container {
//           margin-bottom: 30px;
//           position: relative;
//           z-index: 1;
//         }
        
//         .progress-bar {
//           height: 8px;
//           background: rgba(255, 255, 255, 0.1);
//           border-radius: 4px;
//           overflow: hidden;
//         }
        
//         .progress-fill {
//           height: 100%;
//           background: linear-gradient(90deg, #a100ff, #7b2cbf);
//           border-radius: 4px;
//           transition: width 0.4s ease;
//         }
        
//         .wealth-form-card {
//           position: relative;
//           z-index: 1;
//         }
        
//         .form-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 20px;
//           margin-bottom: 20px;
//         }
        
//         .form-group {
//           margin-bottom: 20px;
//         }
        
//         .form-group label {
//           display: block;
//           margin-bottom: 8px;
//           color: #e2e8f0;
//           font-weight: 600;
//           font-size: 14px;
//         }
        
//         .form-group input,
//         .form-group textarea {
//           width: 100%;
//           padding: 14px 16px;
//           background: rgba(255, 255, 255, 0.07);
//           border: 1px solid rgba(255, 255, 255, 0.15);
//           border-radius: 12px;
//           color: #fff;
//           font-size: 15px;
//           transition: all 0.3s ease;
//         }
        
//         .form-group input:focus,
//         .form-group textarea:focus {
//           outline: none;
//           border-color: #a100ff;
//           box-shadow: 0 0 0 3px rgba(161, 0, 255, 0.1);
//         }
        
//         .form-actions {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-top: 30px;
//           padding-top: 20px;
//           border-top: 1px solid rgba(255, 255, 255, 0.1);
//         }
        
//         .back-to-services-btn {
//           padding: 12px 24px;
//           background: rgba(255, 255, 255, 0.1);
//           color: #fff;
//           border: 1px solid rgba(255, 255, 255, 0.2);
//           border-radius: 8px;
//           cursor: pointer;
//           font-size: 14px;
//           font-weight: 500;
//           transition: all 0.3s ease;
//         }
        
//         .back-to-services-btn:hover {
//           background: rgba(255, 255, 255, 0.15);
//           transform: translateY(-1px);
//         }
        
//         .proceed-btn {
//           padding: 12px 30px;
//           background: linear-gradient(135deg, #a100ff, #7b2cbf);
//           color: #fff;
//           border: none;
//           border-radius: 8px;
//           cursor: pointer;
//           font-size: 16px;
//           font-weight: 600;
//           transition: all 0.3s ease;
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }
        
//         .proceed-btn:hover {
//           transform: translateY(-1px);
//           box-shadow: 0 5px 15px rgba(161, 0, 255, 0.3);
//         }
        
//         .payment-confirmation {
//           position: relative;
//           z-index: 1;
//         }
        
//         .payment-summary-card {
//           background: rgba(255, 255, 255, 0.06);
//           border-radius: 16px;
//           padding: 25px;
//           margin-bottom: 25px;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }
        
//         .payment-summary-card h3 {
//           margin: 0 0 20px;
//           color: #fff;
//           font-size: 20px;
//         }
        
//         .summary-details {
//           margin-bottom: 20px;
//         }
        
//         .summary-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 12px;
//         }
        
//         .summary-label {
//           color: #c4b5fd;
//           font-size: 14px;
//         }
        
//         .summary-value {
//           color: #fff;
//           font-size: 15px;
//         }
        
//         .summary-value.highlight {
//           color: #4ade80;
//           font-weight: 600;
//         }
        
//         .summary-divider {
//           height: 1px;
//           background: rgba(255, 255, 255, 0.1);
//           margin: 20px 0;
//         }
        
//         .total-row {
//           margin-top: 20px;
//         }
        
//         .total-amount {
//           font-size: 28px;
//           font-weight: 800;
//           color: #a100ff;
//         }
        
//         .security-badge {
//           padding: 12px 16px;
//           background: rgba(255, 255, 255, 0.06);
//           border-radius: 10px;
//           color: #c4b5fd;
//           text-align: center;
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           font-size: 13px;
//           margin-bottom: 25px;
//         }
        
//         .payment-actions {
//           display: flex;
//           gap: 15px;
//           align-items: center;
//         }
        
//         .pay-button {
//           padding: 16px 24px;
//           background: linear-gradient(135deg, #a100ff, #7b2cbf);
//           color: #fff;
//           border-radius: 12px;
//           border: none;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           font-weight: 600;
//           font-size: 15px;
//           flex: 1;
//           min-width: 220px;
//           transition: all 0.3s ease;
//         }
        
//         .pay-button:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//         }
        
//         .pay-button:hover:not(:disabled) {
//           transform: translateY(-2px);
//           box-shadow: 0 5px 20px rgba(161, 0, 255, 0.3);
//         }
        
//         .edit-details-btn {
//           padding: 16px 24px;
//           background: rgba(255, 255, 255, 0.1);
//           color: #fff;
//           border-radius: 12px;
//           border: 1px solid rgba(255, 255, 255, 0.15);
//           cursor: pointer;
//           font-weight: 600;
//           font-size: 15px;
//           transition: all 0.3s ease;
//         }
        
//         .edit-details-btn:hover {
//           background: rgba(255, 255, 255, 0.15);
//         }
        
//         .payment-success {
//           text-align: center;
//           padding: 20px 0;
//           position: relative;
//           z-index: 1;
//         }
        
//         .success-icon {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           width: 90px;
//           height: 90px;
//           background: radial-gradient(circle at center, rgba(74, 222, 128, 0.15), transparent 70%);
//           border-radius: 50%;
//           margin-bottom: 25px;
//         }
        
//         .payment-success h3 {
//           margin: 0 0 15px;
//           font-size: 26px;
//           font-weight: 700;
//           color: #4ade80;
//         }
        
//         .success-message {
//           color: #c4b5fd;
//           font-size: 15px;
//           line-height: 1.6;
//           margin: 0 auto 25px;
//           max-width: 600px;
//         }
        
//         .pdf-ready-badge {
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           margin-top: 8px;
//           padding: 12px 20px;
//           border-radius: 10px;
//           background: rgba(74, 222, 128, 0.1);
//           border: 1px solid rgba(74, 222, 128, 0.25);
//           color: #4ade80;
//           font-weight: 600;
//           margin-bottom: 25px;
//           font-size: 14px;
//         }
        
//         .success-actions {
//           display: flex;
//           gap: 15px;
//           justify-content: center;
//           margin-top: 30px;
//         }
        
//         /* Service Card Styles - Price above button */
//         .service-price-section {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 15px;
//           margin-top: 20px;
//         }
        
//         .service-price {
//           font-size: 28px;
//           font-weight: 800;
//           color: #a100ff;
//           background: rgba(161, 0, 255, 0.1);
//           padding: 8px 20px;
//           border-radius: 10px;
//           text-align: center;
//           width: fit-content;
//           margin: 0 auto;
//         }
        
//         .service-card button {
//           margin-top: 0;
//           width: 100%;
//           padding: 14px;
//           background: linear-gradient(135deg, #a100ff, #7b2cbf);
//           color: #fff;
//           border: none;
//           border-radius: 10px;
//           cursor: pointer;
//           font-weight: 600;
//           font-size: 16px;
//           transition: all 0.3s ease;
//         }
        
//         .service-card button:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(161, 0, 255, 0.3);
//         }
        
//         .services-subtitle {
//           color: #c4b5fd;
//           text-align: center;
//           margin-bottom: 30px;
//           font-size: 16px;
//         }
        
//         @media (max-width: 768px) {
//           .form-grid {
//             grid-template-columns: 1fr;
//           }
          
//           .form-actions {
//             flex-direction: column;
//             gap: 15px;
//           }
          
//           .back-to-services-btn,
//           .proceed-btn {
//             width: 100%;
//             justify-content: center;
//           }
          
//           .payment-actions {
//             flex-direction: column;
//           }
          
//           .pay-button,
//           .edit-details-btn {
//             width: 100%;
//           }
          
//           .wealth-form-container {
//             padding: 24px;
//             margin: 0 16px;
//           }
          
//           .service-price-section {
//             gap: 10px;
//           }
          
//           .service-price {
//             font-size: 24px;
//             padding: 6px 16px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default WealthArchitecture;






































































import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../../styles/WealthArchitecture.css";
import Sidebar from "../../components/Sidebar";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2, Zap, FileText } from "lucide-react";

const services = [
  {
    label: "INDIVIDUAL WEALTH PROGRAMME",
    description:
      "A personalised wealth blueprint which takes into account everything which governs your money energy.",
    amount: 300,
  },
  {
    label: "BUSINESS CONSULTING",
    description:
      "A strategic and energetic optimisation programme for founders and businesses.",
    amount: 1000,
  },
  {
    label: "ABUNDANCE PROGRAMME",
    description:
      "A transformational inner work programme that rewires your wealth frequency.",
    amount: 1200,
  },
];

const WealthArchitecture = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser?._id || "672af93b9cf24a87a0c5f8de";

  const API_URL = "https://astrobackend-5sr6.onrender.com/api/payments";
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [confirmationMsg, setConfirmationMsg] = useState("");
  const [pdfReady, setPdfReady] = useState(false);

  const [clients, setClients] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  // Add ref for scrolling to form
  const formSectionRef = useRef(null);
  const bookingFormRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    tob: "",
    pob: "",
    occupation: "",
    keyConcerns: "",
    email: "",
    phone: "",
  });

  /* ================= FETCH BACKEND ================= */
  useEffect(() => {
    fetch("https://astrobackend-5sr6.onrender.com/api/our-clients")
      .then((r) => r.json())
      .then((d) => d?.clients && setClients(d.clients));

    fetch("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Materials")
      .then((r) => r.json())
      .then((d) => {
        if (Array.isArray(d?.faqs)) {
          setFaqs(d.faqs.filter((f) => f.status === "active"));
        }
      });
  }, []);

  useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // RESPONSIVE
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= STARFIELD ================= */
  useEffect(() => {
    const starfield = document.getElementById("wealth-starfield");
    if (starfield && !starfield.hasChildNodes()) {
      for (let i = 0; i < 120; i++) {
        const s = document.createElement("div");
        s.className = "star";
        s.style.top = `${Math.random() * 100}%`;
        s.style.left = `${Math.random() * 100}%`;
        starfield.appendChild(s);
      }
    }
  }, []);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setStep(2);
    
    // Scroll to form section
    setTimeout(() => {
      if (formSectionRef.current) {
        formSectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  // FORM SUBMIT
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.dob || !formData.email) {
      alert("Please fill required fields (Name, Email, Date of Birth)");
      return;
    }
    setStep(3);
  };

  // RAZORPAY PAYMENT HANDLER (FROM ENERGY PAGE)
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

      const amount = selectedService.amount || 300;
      const amountInPaise = amount * 1; // Convert rupees to paise

      const orderRes = await axios.post(
        "https://astrobackend-5sr6.onrender.com/api/payments/create-order",
        {
          amount: amountInPaise,
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
                amount: amountInPaise,
              }
            );

            if (verifyRes.data.success) {
              setConfirmationMsg(
                `Thank you ${formData.fullName}! Payment successful. We'll contact you shortly for your ${selectedService.label}.`
              );
              setPdfReady(!!verifyRes.data.pdfUrl);
              setStep(4);
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.log("VERIFY ERROR:", error);
            alert("Verification request failed.");
          } finally {
            setProcessing(false);
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

      setProcessing(false);
    } catch (err) {
      console.log("ORDER ERROR:", err);
      alert("Payment could not be processed.");
      setProcessing(false);
    }
  };

  // RESET
  const resetAll = () => {
    setStep(1);
    setSelectedService(null);
    setFormData({
      fullName: "",
      dob: "",
      tob: "",
      pob: "",
      occupation: "",
      keyConcerns: "",
      email: "",
      phone: "",
    });
    setConfirmationMsg("");
    setPdfReady(false);
  };

  const progressWidth = step === 2 ? 33 : step === 3 ? 66 : step === 4 ? 100 : 0;

  return (
    <div className={`wealth-page ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {!sidebarOpen && (
        <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
          ☰
        </button>
      )}

      {sidebarOpen && (
        <div
          className="sidebar-overlay visible"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div id="wealth-starfield" className="starfield"></div>

      <div className="wealth-content">
        {/* HERO */}
        <section className="wealth-hero">
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
                Material is the architecture of wealth creation through energy,
                intention, environment, and aligned action. It is where your
                inner frequency meets real world strategy. Wealth is not an
                accident. It is a vibration you cultivate, a system you build,
                and a reality you consciously hold. In this space, we bring
                together Astrology, Energy Reading, Vastu, Numerology, Wealth
                Psychology, and complete calibration to help you create a life
                that feels abundant, secure, and expansive.
              </p>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="how-inner">
            <h2>HOW IT WORKS</h2>

            <p>
              Your material reality is a reflection of your energetic capacity.
              To build wealth, you first strengthen the inner field. Then you
              align your environment, your timing, your mindset, and your
              strategic decisions.
            </p>

            <p>
              We begin by assessing your wealth frequency through your chart,
              your Vastu blueprint, your money patterns, and your energetic
              field.
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
        
        <section className="tailored-proposal">
          <div className="proposal-inner">
            <h2>REQUEST A TAILORED PROPOSAL</h2>

            <p>
              Every individual carries a unique wealth signature. It is the
              coded blueprint that shapes how abundance enters your life, how
              you earn, which opportunities open for you, and what material
              potential you are capable of realising.
            </p>

            <p>
              This signature is influenced by the industries aligned with your
              temperament, the nature of trade that resonates with your
              psychology, your energetic and Vastu design, your karmic pathways,
              your leadership imprint, and the unseen support systems that
              strengthen or weaken your material world.
            </p>

            <p>
              Share your details and our team will create a personalized
              proposal outlining how we can elevate your business or personal
              wealth journey. You will receive a clear, structured plan from
              scratch to execution.
            </p>

            <p>
              The process is completely personalized based on your chart,
              numbers, environment, and energetic imprint to identify your
              earning style, opportunities, risks, leadership pattern, and
              material potential.
            </p>

            <p>
              We detect misaligned zones, weak planetary periods, energy drains,
              numerical conflicts, subconscious blocks, and structural
              imbalances. After careful curation and discussions, you receive a
              30, 90, and 180-day action map for sustained growth.
            </p>

            <h3>WHO THIS IS FOR</h3>

            <ul className="who-list">
              <li>Individuals earning well but feeling stuck at a plateau.</li>
              <li>
                Professionals seeking clarity on the right industry or role.
              </li>
              <li>
                Entrepreneurs wanting alignment of energy, space, and timing.
              </li>
              <li>
                Creators, freelancers, and consultants seeking consistency.
              </li>
              <li>
                Business owners facing stagnation or unexplained setbacks.
              </li>
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

        {/* STEP 1 : SERVICES */}
        {step === 1 && (
          <section className="services-section">
            <h2>SERVICES</h2>
            <p className="services-subtitle">Choose the programme that resonates with you</p>
            <div className="services-grid">
              {services.map((s, i) => (
                <div key={i} className="service-card">
                  <div className="service-header">
                    <h3>{s.label}</h3>
                  </div>
                  
                  {/* Fixed height description container */}
                  <div className="service-description-container">
                    <p>{s.description}</p>
                  </div>
                  
                  {/* Amount and Button section */}
                  <div className="service-price-section">
                    <div className="service-price">₹{s.amount}</div>
                    <button onClick={() => handleServiceSelect(s)}>
                      BOOK NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* FORM & PAYMENT SECTION */}
        <div ref={formSectionRef}>
          {(step === 2 || step === 3 || step === 4) && selectedService && (
            <section className="wealth-form-wrapper" ref={bookingFormRef}>
              <div className="wealth-form-container">
                <div className="form-header">
                  <div style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    background: "rgba(161, 0, 255, 0.15)",
                    color: "#a100ff",
                    fontWeight: "700",
                    fontSize: "12px",
                    borderRadius: "999px",
                    marginBottom: "12px",
                  }}>
                    {selectedService.label}
                  </div>
                  
                  <div className="form-title-section">
                    <h2 className="wealth-form-title">{selectedService.label}</h2>
                    <div className="step-indicator">
                      Step {step === 2 ? 1 : step === 3 ? 2 : 3} of 3
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="progress-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${progressWidth}%` }}
                    />
                  </div>
                </div>

                {/* STEP 2 : FORM */}
                {step === 2 && (
                  <div className="wealth-form-card">
                    <form onSubmit={handleFormSubmit}>
                      <div className="form-grid">
                        <div className="form-group">
                          <label>Full Name *</label>
                          <input
                            name="fullName"
                            placeholder="Your full name"
                            required
                            onChange={handleChange}
                            value={formData.fullName}
                          />
                        </div>

                        <div className="form-group">
                          <label>Email *</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="you@email.com"
                            required
                            onChange={handleChange}
                            value={formData.email}
                          />
                        </div>

                        <div className="form-group">
                          <label>Date of Birth *</label>
                          <input
                            type="date"
                            name="dob"
                            required
                            onChange={handleChange}
                            value={formData.dob}
                          />
                        </div>

                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            name="phone"
                            placeholder="+91 98765 43210"
                            onChange={handleChange}
                            value={formData.phone}
                          />
                        </div>

                        <div className="form-group">
                          <label>Time of Birth</label>
                          <input
                            name="tob"
                            placeholder="HH:MM (24-hour format)"
                            onChange={handleChange}
                            value={formData.tob}
                          />
                        </div>

                        <div className="form-group">
                          <label>Place of Birth</label>
                          <input
                            name="pob"
                            placeholder="City, State, Country"
                            onChange={handleChange}
                            value={formData.pob}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Occupation</label>
                        <input
                          name="occupation"
                          placeholder="Your current occupation/profession"
                          onChange={handleChange}
                          value={formData.occupation}
                        />
                      </div>

                      <div className="form-group">
                        <label>Key Concerns & Expectations</label>
                        <textarea
                          name="keyConcerns"
                          placeholder="Tell us about your specific concerns, goals, and what you hope to achieve..."
                          onChange={handleChange}
                          value={formData.keyConcerns}
                          rows="4"
                        />
                      </div>

                      <div className="form-actions">
                        <button 
                          type="button" 
                          className="back-to-services-btn"
                          onClick={() => setStep(1)}
                        >
                          ← Back to Services
                        </button>
                        
                        <button type="submit" className="proceed-btn">
                          Continue to Payment <ArrowRight size={18} />
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* STEP 3 : PAYMENT CONFIRMATION */}
                {step === 3 && (
                  <div className="payment-confirmation">
                    <div className="payment-summary-card">
                      <h3>Confirm & Pay</h3>
                      
                      <div className="summary-details">
                        <div className="summary-row">
                          <span className="summary-label">Service:</span>
                          <span className="summary-value">{selectedService.label}</span>
                        </div>
                        <div className="summary-row">
                          <span className="summary-label">Name:</span>
                          <span className="summary-value">{formData.fullName}</span>
                        </div>
                        <div className="summary-row">
                          <span className="summary-label">Email:</span>
                          <span className="summary-value">{formData.email}</span>
                        </div>
                        <div className="summary-row">
                          <span className="summary-label">Delivery Time:</span>
                          <span className="summary-value highlight">24-48 Hours</span>
                        </div>
                        
                        <div className="summary-divider" />
                        
                        <div className="summary-row total-row">
                          <span className="summary-label">Total Amount:</span>
                          <span className="total-amount">₹{selectedService.amount}</span>
                        </div>
                      </div>

                      {/* Security Badge */}
                      <div className="security-badge">
                        Secure Payment • Razorpay Encrypted
                      </div>

                      {/* Payment Actions */}
                      <div className="payment-actions">
                        <button
                          onClick={handlePayment}
                          disabled={processing}
                          className="pay-button"
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
                          onClick={() => setStep(2)}
                          className="edit-details-btn"
                        >
                          ← Edit Details
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4 : PAYMENT SUCCESS */}
                {step === 4 && (
                  <div className="payment-success">
                    <div className="success-icon">
                      <CheckCircle size={48} color="#4ade80" />
                    </div>
                    
                    <h3>Payment Successful</h3>
                    
                    <p className="success-message">
                      {confirmationMsg || `Thank you ${formData.fullName}! Payment successful. We'll contact you shortly for your ${selectedService.label}.`}
                    </p>

                    {pdfReady && (
                      <div className="pdf-ready-badge">
                        <FileText size={18} /> Your PDF report is ready
                      </div>
                    )}

                    <div className="success-actions">
                      <button
                        onClick={resetAll}
                        className="back-to-services-btn"
                      >
                        Back to Services
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>

        {/* CLIENTS */}
        <section className="clients-section">
          <h2>OUR CLIENTS</h2>
          <div className="clients-marquee">
            <div className="marquee-track">
              {clients.map((c) => (
                <img key={c._id} src={c.image} alt={c.name} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        {faqs.length > 0 && (
          <section className="faq-section" style={{ maxWidth: 1400, margin: "0 auto" }}>
            <h2>FAQs</h2>
            {faqs.map((f, i) => (
              <div
                key={f._id}
                className="faq-item"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <h4>{f.question}</h4>
                {openFaq === i && <p>{f.answer}</p>}
              </div>
            ))}
          </section>
        )}
      </div>

      {/* INLINE STYLES */}
      <style>{`
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0); } to { transform: rotate(360deg);} }
        
        /* ========== SERVICE CARD STYLES ========== */
        .service-card {
          display: flex;
          flex-direction: column;
          height: 420px;
          min-height: 420px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .service-header h3 {
          margin: 0 0 15px;
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          line-height: 1.4;
          min-height: 50px;
        }
        
        .service-description-container {
          flex: 1;
          min-height: 120px;
          margin-bottom: 20px;
          overflow: hidden;
        }
        
        .service-description-container p {
          color: #c4b5fd;
          font-size: 14px;
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .service-price-section {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        
        .service-price {
          font-size: 32px;
          font-weight: 800;
          color: #a100ff;
          background: rgba(161, 0, 255, 0.15);
          padding: 10px 24px;
          border-radius: 12px;
          text-align: center;
          width: fit-content;
          margin: 0 auto;
          letter-spacing: 1px;
        }
        
        .service-price-section button {
          width: 100%;
          padding: 16px;
          background: linear-gradient(135deg, #a100ff, #7b2cbf);
          color: #fff;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 700;
          font-size: 16px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .service-price-section button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(161, 0, 255, 0.4);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .services-subtitle {
          color: #c4b5fd;
          text-align: center;
          margin-bottom: 30px;
          font-size: 16px;
        }
        
        /* ========== FORM & PAYMENT STYLES ========== */
        .wealth-form-container {
          max-width: 1600px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border-radius: 20px;
          padding: 35px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        .wealth-form-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05), transparent 50%);
          pointer-events: none;
          z-index: 0;
        }
        
        .form-header {
          position: relative;
          z-index: 1;
          margin-bottom: 25px;
        }
        
        .form-title-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .wealth-form-title {
          margin: 0 0 12px;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
        }
        
        .step-indicator {
          color: #c4b5fd;
          font-size: 14px;
          font-weight: 600;
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }
        
        .progress-container {
          margin-bottom: 30px;
          position: relative;
          z-index: 1;
        }
        
        .progress-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #a100ff, #7b2cbf);
          border-radius: 4px;
          transition: width 0.4s ease;
        }
        
        .wealth-form-card {
          position: relative;
          z-index: 1;
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #e2e8f0;
          font-weight: 600;
          font-size: 14px;
        }
        
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: #fff;
          font-size: 15px;
          transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #a100ff;
          box-shadow: 0 0 0 3px rgba(161, 0, 255, 0.1);
        }
        
        .form-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .back-to-services-btn {
          padding: 12px 24px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .back-to-services-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateY(-1px);
        }
        
        .proceed-btn {
          padding: 12px 30px;
          background: linear-gradient(135deg, #a100ff, #7b2cbf);
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .proceed-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 5px 15px rgba(161, 0, 255, 0.3);
        }
        
        .payment-confirmation {
          position: relative;
          z-index: 1;
        }
        
        .payment-summary-card {
          background: rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 25px;
          margin-bottom: 25px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .payment-summary-card h3 {
          margin: 0 0 20px;
          color: #fff;
          font-size: 20px;
        }
        
        .summary-details {
          margin-bottom: 20px;
        }
        
        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        .summary-label {
          color: #c4b5fd;
          font-size: 14px;
        }
        
        .summary-value {
          color: #fff;
          font-size: 15px;
        }
        
        .summary-value.highlight {
          color: #4ade80;
          font-weight: 600;
        }
        
        .summary-divider {
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
          margin: 20px 0;
        }
        
        .total-row {
          margin-top: 20px;
        }
        
        .total-amount {
          font-size: 28px;
          font-weight: 800;
          color: #a100ff;
        }
        
        .security-badge {
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          color: #c4b5fd;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 13px;
          margin-bottom: 25px;
        }
        
        .payment-actions {
          display: flex;
          gap: 15px;
          align-items: center;
        }
        
        .pay-button {
          padding: 16px 24px;
          background: linear-gradient(135deg, #a100ff, #7b2cbf);
          color: #fff;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 600;
          font-size: 15px;
          flex: 1;
          min-width: 220px;
          transition: all 0.3s ease;
        }
        
        .pay-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .pay-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(161, 0, 255, 0.3);
        }
        
        .edit-details-btn {
          padding: 16px 24px;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          cursor: pointer;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
        }
        
        .edit-details-btn:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        
        .payment-success {
          text-align: center;
          padding: 20px 0;
          position: relative;
          z-index: 1;
        }
        
        .success-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 90px;
          background: radial-gradient(circle at center, rgba(74, 222, 128, 0.15), transparent 70%);
          border-radius: 50%;
          margin-bottom: 25px;
        }
        
        .payment-success h3 {
          margin: 0 0 15px;
          font-size: 26px;
          font-weight: 700;
          color: #4ade80;
        }
        
        .success-message {
          color: #c4b5fd;
          font-size: 15px;
          line-height: 1.6;
          margin: 0 auto 25px;
          max-width: 600px;
        }
        
        .pdf-ready-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
          padding: 12px 20px;
          border-radius: 10px;
          background: rgba(74, 222, 128, 0.1);
          border: 1px solid rgba(74, 222, 128, 0.25);
          color: #4ade80;
          font-weight: 600;
          margin-bottom: 25px;
          font-size: 14px;
        }
        
        .success-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 30px;
        }
        
        /* ========== RESPONSIVE STYLES ========== */
        @media (max-width: 768px) {
          /* Service Card Mobile */
          .service-card {
            height: 400px;
            min-height: 400px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .service-header h3 {
            font-size: 16px;
            min-height: 45px;
          }
          
          .service-price {
            font-size: 28px;
            padding: 8px 20px;
          }
          
          .service-price-section button {
            padding: 14px;
            font-size: 15px;
          }
          
          /* Form Mobile */
          .form-grid {
            grid-template-columns: 1fr;
          }
          
          .form-actions {
            flex-direction: column;
            gap: 15px;
          }
          
          .back-to-services-btn,
          .proceed-btn {
            width: 100%;
            justify-content: center;
          }
          
          .payment-actions {
            flex-direction: column;
          }
          
          .pay-button,
          .edit-details-btn {
            width: 100%;
          }
          
          .wealth-form-container {
            padding: 24px;
            margin: 0 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default WealthArchitecture;