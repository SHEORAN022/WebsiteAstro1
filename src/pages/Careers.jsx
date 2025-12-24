// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/Careers.css";

// const careersData = [
//   { title: "Astrologer", desc: "Create astrology content & horoscopes." },
//   { title: "Tarot Reader", desc: "Design engaging tarot readings." },
//   { title: "Occult Researcher", desc: "Develop mystical content." },
//   { title: "Social Media Intern", desc: "Manage social media channels." },
//   { title: "Admin Intern", desc: "Assist in operations & content." },
// ];

// const navLinks = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Energy", link: "/energy" },
//    { name: "Astrology", link: "/Astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "/careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// const Careers = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const starfield = document.getElementById("starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 120; i++) {
//         const star = document.createElement("div");
//         star.className = "star";
//         star.style.top = `${Math.random() * 100}%`;
//         star.style.left = `${Math.random() * 100}%`;
//         star.style.width = `${Math.random() * 2 + 1}px`;
//         star.style.height = star.style.width;
//         star.style.animationDuration = `${Math.random() * 3 + 2}s`;
//         starfield.appendChild(star);
//       }
//     }
//   }, []);

//   const handleCardClick = () => navigate("/contact");

//   return (
//     <div
//       className="careers-page cosmic-bg"
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* 🌌 Starfield */}
//       <div id="starfield" className="starfield"></div>

//       {/* 🧭 Sidebar */}
//       <div
//         className={`sidebar ${sidebarOpen ? "open" : ""}`}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background:
//             "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.5s ease-in-out",
//           zIndex: 1000,
//           padding: "30px 20px",
//         }}
//       >
//         {/* ✕ Close Button */}
//         {sidebarOpen && (
//           <button
//             onClick={() => setSidebarOpen(false)}
//             style={{
//               position: "absolute",
//               top: "18px",
//               right: "18px",
//               background: "linear-gradient(135deg, #ff00ff, #8a2be2)",
//               border: "none",
//               color: "#fff",
//               fontSize: "20px",
//               width: "40px",
//               height: "40px",
//               borderRadius: "50%",
//               cursor: "pointer",
//               boxShadow: "0 0 15px rgba(255, 0, 255, 0.4)",
//               transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.transform = "scale(1.1) rotate(90deg)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
//             }
//           >
//             ✕
//           </button>
//         )}

//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "35px",
//           }}
//         >
//           AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "14px 0" }}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   color: "#ccc",
//                   display: "block",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   textDecoration: "none",
//                   fontSize: "1rem",
//                   fontWeight: 500,
//                   transition: "all 0.3s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.color = "#fff";
//                   e.target.style.background = "rgba(255,255,255,0.1)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.color = "#ccc";
//                   e.target.style.background = "transparent";
//                 }}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* ☰ Hamburger */}
//       {!sidebarOpen && (
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
//             cursor: "pointer",
//             zIndex: 1100,
//             boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
//             transition: "all 0.3s ease-in-out",
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* 💼 Main Careers Content */}
//       <div
//         className="careers-container"
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.6s ease",
//         }}
//       >
//        <section className="careers-hero">
//   <div className="hero-overlay">
//     <h1>Join Our Team ✨</h1>
//     <p>
//       Explore opportunities in Astrology, Tarot, Energy Healing, and
//       Mystical Research.
//     </p>
//   </div>
// </section>

//         {/* Careers Section */}
//         <section className="careers-content">
//           <h2>Available Positions</h2>
//           <p>
//             We are looking for passionate Astrologers, Tarot Readers, and Interns
//             for content creation, social media, and administration.
//           </p>

//           <div className="careers-list">
//             {careersData.map((career, idx) => (
//               <div
//                 key={idx}
//                 className="career-card"
//                 onClick={handleCardClick}
//                 style={{
//                   background: "rgba(255,255,255,0.1)",
//                   borderRadius: "14px",
//                   padding: "1.5rem",
//                   margin: "1rem",
//                   cursor: "pointer",
//                   transition: "all 0.3s ease",
//                   backdropFilter: "blur(8px)",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "scale(1.05)";
//                   e.currentTarget.style.boxShadow =
//                     "0 0 20px rgba(255,0,255,0.3)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "scale(1)";
//                   e.currentTarget.style.boxShadow = "none";
//                 }}
//               >
//                 <h3>{career.title}</h3>
//                 <p>{career.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Careers;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/Careers.css";

// const API_BASE = "https://astrobackend-5sr6.onrender.com/api/careers";

// const navLinks = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Energy", link: "/energy" },
//   { name: "Astrology", link: "/Astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "/careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// const Careers = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [careers, setCareers] = useState([]);

//   // 🌌 Fetch Careers from API
//   const fetchCareers = async () => {
//     try {
//       const res = await axios.get(API_BASE);
//       setCareers(res.data || []);
//     } catch (err) {
//       console.error("❌ Error fetching careers:", err.message);
//     }
//   };

//   useEffect(() => {
//     fetchCareers();
//   }, []);

//   // ✨ Starfield Effect
//   useEffect(() => {
//     const starfield = document.getElementById("starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 120; i++) {
//         const star = document.createElement("div");
//         star.className = "star";
//         star.style.top = `${Math.random() * 100}%`;
//         star.style.left = `${Math.random() * 100}%`;
//         star.style.width = `${Math.random() * 2 + 1}px`;
//         star.style.height = star.style.width;
//         star.style.animationDuration = `${Math.random() * 3 + 2}s`;
//         starfield.appendChild(star);
//       }
//     }
//   }, []);

//   const handleCardClick = () => navigate("/contact");

//   return (
//     <div
//       className="careers-page cosmic-bg"
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* 🌌 Starfield */}
//       <div id="starfield" className="starfield"></div>
// {/* 🧭 Sidebar */}
// <div
//   className={`sidebar ${sidebarOpen ? "open" : ""}`}
//   onClick={() => setSidebarOpen(false)}  // ⭐ inside click → close
//   style={{
//     position: "fixed",
//     top: 0,
//     left: sidebarOpen ? 0 : "-270px",
//     width: "270px",
//     height: "100vh",
//     background:
//       "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//     backdropFilter: "blur(14px)",
//     boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//     transition: "left 0.5s ease-in-out",
//     zIndex: 1000,
//     padding: "30px 20px",
//     cursor: "pointer",
//   }}
// >

//   <h2
//     style={{
//       fontSize: "28px",
//       fontWeight: 700,
//       textAlign: "center",
//       background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//       marginBottom: "35px",
//     }}
//   >
//     AstroConnect
//   </h2>

//   <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//     {navLinks.map((item, idx) => (
//       <li key={idx} style={{ margin: "14px 0" }}>
//         <a
//           href={item.link}
//           onClick={() => setSidebarOpen(false)}  // ⭐ link click → close
//           style={{
//             color: "#ccc",
//             display: "block",
//             padding: "12px 18px",
//             borderRadius: "10px",
//             textDecoration: "none",
//             fontSize: "1rem",
//             fontWeight: 500,
//             transition: "all 0.3s ease",
//           }}
//         >
//           {item.name}
//         </a>
//       </li>
//     ))}
//   </ul>
// </div>

// {/* ⭐ Overlay (outside click → close) */}
// {sidebarOpen && (
//   <div
//     onClick={() => setSidebarOpen(false)}
//     style={{
//       position: "fixed",
//       inset: 0,
//       background: "rgba(0,0,0,0.5)",
//       zIndex: 900,
//       backdropFilter: "blur(2px)",
//     }}
//   ></div>
// )}

// {/* ☰ Hamburger */}
// {!sidebarOpen && (
//   <button
//     onClick={() => setSidebarOpen(true)}
//     style={{
//       position: "fixed",
//       top: "22px",
//       left: "25px",
//       background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//       color: "#fff",
//       border: "none",
//       fontSize: "26px",
//       borderRadius: "50%",
//       width: "55px",
//       height: "55px",
//       cursor: "pointer",
//       zIndex: 1100,
//       boxShadow: "0 0 25px rgba(255, 0, 255, 0.4)",
//       transition: "all 0.3s ease-in-out",
//     }}
//   >
//     ☰
//   </button>
// )}


//       {/* 💼 Main Careers Content */}
//       <div
//         className="careers-container"
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.6s ease",
//         }}
//       >
//         <section className="careers-hero">
//           <div className="hero-overlay">
//             <h1>Join Our Team ✨</h1>
//             <p>
//               Explore opportunities in Astrology, Tarot, Energy Healing, and
//               Mystical Research.
//             </p>
//           </div>
//         </section>

//         {/* Careers Section */}
//         <section className="careers-content">
//           <h2>Available Positions</h2>
//           <p>
//             We’re looking for passionate individuals to join our growing team at
//             <span className="highlight"> AstroConnect</span>.
//           </p>

//           <div className="careers-list">
//             {careers.length > 0 ? (
//               careers.map((career, idx) => (
//                 <div
//                   key={idx}
//                   className="career-card"
//                   onClick={handleCardClick}
//                   style={{
//                     background: "rgba(255,255,255,0.1)",
//                     borderRadius: "14px",
//                     padding: "1.5rem",
//                     margin: "1rem",
//                     cursor: "pointer",
//                     transition: "all 0.3s ease",
//                     backdropFilter: "blur(8px)",
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = "scale(1.05)";
//                     e.currentTarget.style.boxShadow =
//                       "0 0 20px rgba(255,0,255,0.3)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = "scale(1)";
//                     e.currentTarget.style.boxShadow = "none";
//                   }}
//                 >
//                   <h3>{career.title}</h3>
//                   <p>{career.description}</p>
//                 </div>
//               ))
//             ) : (
//               <p>✨ No open positions currently. Check back soon!</p>
//             )}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Careers;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/Careers.css";

// const API_BASE = "https://astrobackend-5sr6.onrender.com/api/careers";

// const navLinks = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Energy", link: "/energy" },
//   { name: "Astrology", link: "/Astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "/careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// const Careers = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [careers, setCareers] = useState([]);

//   // 🌌 Fetch Careers from API
//   const fetchCareers = async () => {
//     try {
//       const res = await axios.get(API_BASE);
//       setCareers(res.data || []);
//     } catch (err) {
//       console.error("❌ Error fetching careers:", err.message);
//     }
//   };

//   useEffect(() => {
//     fetchCareers();
//   }, []);

//   // ✨ Starfield Effect
//   useEffect(() => {
//     const starfield = document.getElementById("starfield");
//     if (starfield && !starfield.hasChildNodes()) {
//       for (let i = 0; i < 120; i++) {
//         const star = document.createElement("div");
//         star.className = "star";
//         star.style.top = `${Math.random() * 100}%`;
//         star.style.left = `${Math.random() * 100}%`;
//         star.style.width = `${Math.random() * 2 + 1}px`;
//         star.style.height = star.style.width;
//         star.style.animationDuration = `${Math.random() * 3 + 2}s`;
//         starfield.appendChild(star);
//       }
//     }
//   }, []);

//   const handleCardClick = () => navigate("/contact");

//   return (
//     <div className="careers-page cosmic-bg">
//       {/* 🌌 Starfield */}
//       <div id="starfield" className="starfield"></div>

//     {/* 🧭 Sidebar */}
// <div
//   className={`sidebar ${sidebarOpen ? "open" : ""}`}
//   onClick={() => setSidebarOpen(false)}   // ⭐ sidebar ke andar click → close
// >
//   <h2 className="sidebar-logo">THE FIFTH CUSP</h2>

//   <ul onClick={(e) => e.stopPropagation()} > 
//     {/* ⭐ STOP bubbling: links par click par close hogaa, 
//         lekin poori UL par click karne se close nahi hoga */}
//     {navLinks.map((item, idx) => (
//       <li key={idx}>
//         <a
//           href={item.link}
//           onClick={() => setSidebarOpen(false)}
//         >
//           {item.name}
//         </a>
//       </li>
//     ))}
//   </ul>
// </div>

// {/* ⭐ Overlay (outside click → close) */}
// {sidebarOpen && (
//   <div
//     className="sidebar-overlay"
//     onClick={() => setSidebarOpen(false)}
//   ></div>
// )}

// {/* ☰ Hamburger */}
// {!sidebarOpen && (
//   <button
//     className="sidebar-toggle"
//     onClick={() => setSidebarOpen(true)}
//   >
//     ☰
//   </button>
// )}


//       {/* 💼 Main Careers Content */}
//       <div className={`careers-container ${sidebarOpen ? "sidebar-open" : ""}`}>
//         <section className="careers-hero">
//           <div className="hero-overlay">
//             <h1>Join Our Team ✨</h1>
//             <p>
//               Explore opportunities in Astrology, Tarot, Energy Healing, and
//               Mystical Research.
//             </p>
//           </div>
//         </section>

//         {/* Careers Section */}
//         <section className="careers-content">
//           <h2>Available Positions</h2>
//           <p>
//             We're looking for passionate individuals to join our growing team at
//             <span className="highlight"> THE FIFTH CUSP</span>.
//           </p>

//           <div className="careers-list">
//             {careers.length > 0 ? (
//               careers.map((career, idx) => (
//                 <div
//                   key={idx}
//                   className="career-card"
//                   onClick={handleCardClick}
//                 >
//                   <h3>{career.title}</h3>
//                   <p>{career.description}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="no-positions">✨ No open positions currently. Check back soon!</p>
//             )}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Careers;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Careers.css";

// ⭐ IMPORT SIDEBAR
import Sidebar from "../components/Sidebar";

const API_BASE = "https://astrobackend-5sr6.onrender.com/api/careers";

const Careers = () => {
  const [faqs, setFaqs] = useState([]);
const [openFaq, setOpenFaq] = useState(null);

  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [careers, setCareers] = useState([]);

  // 🌌 Fetch Careers
  const fetchCareers = async () => {
    try {
      const res = await axios.get(API_BASE);
      setCareers(res.data || []);
    } catch (err) {
      console.error("❌ Error fetching careers:", err.message);
    }
  };

  useEffect(() => {
    fetchCareers();
  }, []);
  useEffect(() => {
  const fetchFaqs = async () => {
    try {
      const res = await axios.get(
        "https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Careers"
      );
      setFaqs(res.data?.faqs || []);
    } catch (err) {
      console.error("❌ FAQ fetch error:", err.message);
    }
  };

  fetchFaqs();
}, []);


  // ✨ Starfield
  useEffect(() => {
    const starfield = document.getElementById("starfield");
    if (starfield && !starfield.hasChildNodes()) {
      for (let i = 0; i < 120; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        starfield.appendChild(star);
      }
    }
  }, []);

  const handleCardClick = () => navigate("/contact");

  return (
    <div className="careers-page cosmic-bg">
      
      {/* 🌌 Starfield */}
      <div id="starfield" className="starfield"></div>

      {/* ⭐ GLOBAL SIDEBAR */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* ⭐ MAIN CONTENT (DO NOT SHIFT ON MOBILE OR DESKTOP) */}
      {/* <div className="careers-container"> */}
       <div className="careers-container">

    {/* 🌙 INSIDE THE CUSP – TOP SECTION */}
    <section className="inside-cusp-section">
      <h2>INSIDE THE CUSP</h2>
      <h3>Your Calling Deserves a Bigger Stage</h3>

      <p className="inside-cusp-text">
        We’re building a new kind of spiritual-tech ecosystem; one that blends
        ancient wisdom with modern intelligence. If you’re someone who thinks
        boldly, learns fast, and wants to create work that genuinely transforms
        lives — and helps people pay their karmic debt — you’ll feel at home here.
      </p>

      <p className="inside-cusp-text">
        We’re looking for people who question the obvious, work with intention,
        and bring a sense of purpose to everything they do. If you’re ready to
        grow, innovate, and leave a real imprint on the future of Astrology,
        Vastu, Energy, Manifestation, Tarot, and Well-being — we’d love to have
        you inside the cusp.
      </p>

      {/* <p className="inside-cusp-highlight">
        ✨ The ones with <span>Ketu in the 10th</span> — you’re already in.
        You just don’t know it yet.
      </p> */}
    </section>
        

        {/* HERO SECTION */}
        <section className="careers-hero">
          <div className="hero-overlay">
            {/* <h1>Join Our Team ✨</h1> */}
            <p>
              Explore opportunities in Astrology, Tarot, Energy Healing,
              and Mystical Research.
            </p>
          </div>
        </section>

        {/* CAREERS LIST SECTION */}
        <section className="careers-content">
          <h2>AVAILABLE POSITIONS</h2>
          <p>
            We're looking for passionate individuals to join our growing team at
            <span className="highlight"> THE FIFTH CUSP</span>.
          </p>

          <div className="careers-list">
            {careers.length > 0 ? (
              careers.map((career, idx) => (
                <div
                  key={idx}
                  className="career-card"
                  onClick={handleCardClick}
                >
                  <h3>{career.title}</h3>
                  <p>{career.description}</p>
                </div>
              ))
            ) : (
              <p className="no-positions">
                ✨ No open positions currently. Check back soon!
              </p>
            )}
          </div>
        </section>
        {/* ================= CAREERS FAQ SECTION ================= */}
{faqs.length > 0 && (
  <section className="careers-faq-section" style={{ maxWidth: 1200, margin: "0 auto" }}>
    <h2 className="faq-title">FAQ</h2>
    <p className="faq-subtitle">
      Everything you need to know before joining <span>THE FIFTH CUSP</span>
    </p>

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
  </section>
)}


      </div>
    </div>
  );
};

export default Careers;
