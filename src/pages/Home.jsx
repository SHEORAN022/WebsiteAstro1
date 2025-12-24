// import React, { useState, useRef } from "react";
// import "../styles/Home.css";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const sliderRef = useRef(null);

//   // const navLinks = [
//   //   { name: "Home", link: "#home", icon: "🏠" },
//   //   { name: "About Us", link: "#about-us", icon: "✨" },
//   //   { name: "Energy", link: "/energy", icon: "⚡" },
//   //   { name: "Movement", link: "/movement", icon: "🌊" },
//   //   { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
//   //   { name: "Manifestation", link: "/manifestation", icon: "💫" },
//   //   { name: "Material", link: "/material", icon: "💎" },
//   //   { name: "Blogs", link: "/blogs", icon: "📝" },
//   //   { name: "Careers", link: "#careers", icon: "💼" },
//   //   { name: "Contact", link: "/contact", icon: "📧" },
//   //   { name: "Login / Signup", link: "/auth", icon: "🔐" },
//   // ];

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about-us" },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/Astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Careers", link: "/careers" },
//     { name: "Contact", link: "/contact" },
//     { name: "Login / Signup", link: "/auth" },
//   ];
//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint and uncover what the stars have planned for you.",
//       gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Transform your home into a source of harmony and positive energy.",
//       gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover your strengths, destiny, and lucky numbers through numerology.",
//       gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and unlock the hidden messages of your energy field.",
//       gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Get intuitive insights and guidance for love, career, and personal growth.",
//       gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn your dreams into reality by aligning mindset, intention, and energy.",
//       gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
//     },
//   ];

//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="star"
//         style={{
//           position: "absolute",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 2}px`,
//           height: `${1 + Math.random() * 2}px`,
//           background: "white",
//           borderRadius: "50%",
//           animation: `twinkle ${2 + Math.random() * 3}s infinite`,
//         }}
//       ></div>
//     ));

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* Sidebar */}
//       <div
//         className={`sidebar ${sidebarOpen ? "open" : ""}`}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.5s ease-in-out",
//           zIndex: 1000,
//           padding: "30px 20px",
//         }}
//       >
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
//             }}
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
//           ✨ AstroConnect
//         </h2>
//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "14px 0" }}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   color: "#ccc",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   textDecoration: "none",
//                   fontSize: "1rem",
//                   fontWeight: 500,
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Hamburger */}
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
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* Main Content */}
//       <div
//         className={`home-wrapper ${sidebarOpen ? "shifted" : ""}`}
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
//         {/* Hero Section */}
//         <section className="hero" id="home">
//           <div className="stars-container">{renderStars(50)}</div>
//           <div className="hero-overlay">
//             <h1>Your Destiny Is Written In The Stars ✨</h1>
//             <p>Explore the mysteries of life through astrology, tarot, and energy.</p>
//             <a href="/book" className="hero-btn">
//               Book Your Reading
//             </a>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="home-section services">
//           <h2>Our Core Services</h2>
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>
//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a key={idx} href={service.link} className="modern-service-card">
//                 <div className="card-icon-wrapper" style={{ background: service.gradient }}></div>
//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>
//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* About Section */}
//         <section id="about-us" className="home-section about-us">
//           <div className="about-bg-glow"></div>
//           <div className="about-inner">
//             <div className="about-left">
//               <img
//                 src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
//                 alt="AstroConnect Logo"
//                 className="about-logo"
//               />
//             </div>
//             <div className="about-right">
//               <h2>
//                 About <span>AstroConnect</span>
//               </h2>
//               <p>
//                 At <span className="highlight">AstroConnect</span>, we combine the timeless wisdom of astrology,
//                 numerology, vastu, and tarot to guide you toward <b>balance, awareness, and transformation.</b>
//               </p>
//               <p>
//                 Our mission is to help you realign your <span className="highlight">energy</span> with the universe's
//                 flow, unlocking clarity, success, and inner harmony through personalized cosmic insights.
//               </p>
//               <a href="#about-us" className="about-btn">
//                 Discover More →
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* Careers Section */}
//         <section id="careers" className="home-section careers">
//           <div className="careers-content">
//             <h2>Join Our Cosmic Team ✨</h2>
//             <p>
//               Become a part of <span className="highlight">AstroConnect</span> — where we decode the stars, align energies,
//               and help people find balance in love, career, and destiny.
//             </p>
//             <div className="career-roles">
//               <div className="career-card">
//                 {/* <h3>🔮 Astrologer</h3> */}
//                 <h3> Astrologer</h3>
//                 <p>Guide people through their life's blueprint using planetary wisdom.</p>
//               </div>
//               <div className="career-card">
//                 {/* <h3>🃏 Tarot Reader</h3> */}
//                  <h3> Tarot Reader</h3>
//                 <p>Offer intuitive readings to uncover truth and direction.</p>
//               </div>
//               <div className="career-card">
//                 {/* <h3>📚 Research Intern</h3> */}
//                 <h3> Research Intern</h3>
//                 <p>Explore Vedic texts, numerology, and spiritual energy systems.</p>
//               </div>
//             </div>
//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../styles/Home.css";

// const API_BASE = process.env.REACT_APP_API_URL || "https://astrobackend-5sr6.onrender.com/api";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const sliderRef = useRef(null);
//   const [aboutData, setAboutData] = useState({
//     title: "About Us",
//     content: "",
//     image: "",
//   });

//   // 🌐 Fetch About Us content from backend
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/about`);
//         if (res.data) setAboutData(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching About data:", err.message);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about-us" },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/Astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Careers", link: "/careers" },
//     { name: "Contact", link: "/contact" },
//     { name: "Login / Signup", link: "/auth" },
//   ];

//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint and uncover what the stars have planned for you.",
//       gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Transform your home into a source of harmony and positive energy.",
//       gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover your strengths, destiny, and lucky numbers through numerology.",
//       gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and unlock the hidden messages of your energy field.",
//       gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Get intuitive insights and guidance for love, career, and personal growth.",
//       gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn your dreams into reality by aligning mindset, intention, and energy.",
//       gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
//     },
//   ];

//   // 🌌 About Us Image Handler
//   const aboutImage =
//     aboutData.image && aboutData.image.startsWith("/uploads")
//       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
//       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="star"
//         style={{
//           position: "absolute",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 2}px`,
//           height: `${1 + Math.random() * 2}px`,
//           background: "white",
//           borderRadius: "50%",
//           animation: `twinkle ${2 + Math.random() * 3}s infinite`,
//         }}
//       ></div>
//     ));

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* Sidebar */}
//       <div
//         className={`sidebar ${sidebarOpen ? "open" : ""}`}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.5s ease-in-out",
//           zIndex: 1000,
//           padding: "30px 20px",
//         }}
//       >
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
//             }}
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
//           ✨ AstroConnect
//         </h2>
//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "14px 0" }}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   color: "#ccc",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   textDecoration: "none",
//                   fontSize: "1rem",
//                   fontWeight: 500,
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Hamburger */}
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
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* Main Content */}
//       <div
//         className={`home-wrapper ${sidebarOpen ? "shifted" : ""}`}
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
//         {/* Hero Section */}
//         <section className="hero" id="home">
//           <div className="stars-container">{renderStars(50)}</div>
//           <div className="hero-overlay">
//             <h1>Your Destiny Is Written In The Stars ✨</h1>
//             <p>Explore the mysteries of life through astrology, tarot, and energy.</p>
//             <a href="/book" className="hero-btn">
//               Book Your Reading
//             </a>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="home-section services">
//           <h2>Our Core Services</h2>
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>
//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a key={idx} href={service.link} className="modern-service-card">
//                 <div className="card-icon-wrapper" style={{ background: service.gradient }}></div>
//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>
//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* 🔮 About Section (Dynamic from API) */}
//         <section id="about-us" className="home-section about-us">
//           <div className="about-bg-glow"></div>
//           <div className="about-inner">
//             <div className="about-left">
//               <img
//                 src={aboutImage}
//                 alt="AstroConnect"
//                 className="about-logo"
//               />
//             </div>
//             <div className="about-right">
//               <h2>
//                 {aboutData.title || "About"} <span>AstroConnect</span>
//               </h2>
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     aboutData.content ||
//                     "At AstroConnect, we combine astrology, vastu, and energy sciences to bring harmony and insight.",
//                 }}
//               ></p>
//               <a href="/about-us" className="about-btn">
//                 Discover More →
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* Careers Section */}
//         <section id="careers" className="home-section careers">
//           <div className="careers-content">
//             <h2>Join Our Cosmic Team ✨</h2>
//             <p>
//               Become a part of <span className="highlight">AstroConnect</span> — where we decode the stars, align energies,
//               and help people find balance in love, career, and destiny.
//             </p>
//             <div className="career-roles">
//               <div className="career-card">
//                 <h3>Astrologer</h3>
//                 <p>Guide people through their life's blueprint using planetary wisdom.</p>
//               </div>
//               <div className="career-card">
//                 <h3>Tarot Reader</h3>
//                 <p>Offer intuitive readings to uncover truth and direction.</p>
//               </div>
//               <div className="career-card">
//                 <h3>Research Intern</h3>
//                 <p>Explore Vedic texts, numerology, and spiritual energy systems.</p>
//               </div>
//             </div>
//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../styles/Home.css";

// const API_BASE = process.env.REACT_APP_API_URL || "https://astrobackend-5sr6.onrender.com/api";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [aboutData, setAboutData] = useState({
//     title: "About Us",
//     content: "",
//     image: "",
//   });
//   const [careers, setCareers] = useState([]); // ✅ Careers data
//   const sliderRef = useRef(null);

//   // 🌐 Fetch About Us
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/about`);
//         if (res.data) setAboutData(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching About data:", err.message);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   // 🌐 Fetch Careers Data
//   useEffect(() => {
//     const fetchCareers = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/careers`);
//         console.log("💼 Careers API:", res.data); // ✅ Debug log
//         setCareers(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching Careers:", err.message);
//       }
//     };
//     fetchCareers();
//   }, []);

//   const navLinks = [
//     { name: "Home", link: "/" },
//     { name: "About Us", link: "/about-us" },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/Astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Careers", link: "/careers" },
//     { name: "Contact", link: "/contact" },
//     { name: "Your Account", link: "/auth" },
//   ];

//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint and uncover what the stars have planned for you.",
//       gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Transform your home into a source of harmony and positive energy.",
//       gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover your strengths, destiny, and lucky numbers through numerology.",
//       gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and unlock the hidden messages of your energy field.",
//       gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Get intuitive insights and guidance for love, career, and personal growth.",
//       gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn your dreams into reality by aligning mindset, intention, and energy.",
//       gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
//     },
//   ];

//   // 🌌 About Us Image
//   const aboutImage =
//     aboutData.image && aboutData.image.startsWith("/uploads")
//       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
//       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="star"
//         style={{
//           position: "absolute",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 2}px`,
//           height: `${1 + Math.random() * 2}px`,
//           background: "white",
//           borderRadius: "50%",
//           animation: `twinkle ${2 + Math.random() * 3}s infinite`,
//         }}
//       ></div>
//     ));

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* Sidebar */}
//       <div
//         className={`sidebar ${sidebarOpen ? "open" : ""}`}
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.5s ease-in-out",
//           zIndex: 1000,
//           padding: "30px 20px",
//         }}
//       >
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
//             }}
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
//           ✨ AstroConnect
//         </h2>
//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "14px 0" }}>
//               <a
//                 href={item.link}
//                 onClick={() => setSidebarOpen(false)}
//                 style={{
//                   color: "#ccc",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   textDecoration: "none",
//                   fontSize: "1rem",
//                   fontWeight: 500,
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Hamburger */}
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
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* Main Content */}
//       <div
//         className={`home-wrapper ${sidebarOpen ? "shifted" : ""}`}
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
//         {/* Hero Section */}
//         <section className="hero" id="home">
//           <div className="stars-container">{renderStars(50)}</div>
//           <div className="hero-overlay">
//             <h1>Your Destiny Is Written In The Stars ✨</h1>
//             <p>Explore the mysteries of life through astrology, tarot, and energy.</p>
//             <a href="/book" className="hero-btn">
//               Book Your Reading
//             </a>
//           </div>
//         </section>

//         {/* Services Section */}
//         <section id="services" className="home-section services">
//           <h2>Languages</h2>
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>
//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a key={idx} href={service.link} className="modern-service-card">
//                 <div className="card-icon-wrapper" style={{ background: service.gradient }}></div>
//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>
//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* 🔮 About Section */}
//         <section id="about-us" className="home-section about-us">
//           <div className="about-bg-glow"></div>
//           <div className="about-inner">
//             <div className="about-left">
//               <img src={aboutImage} alt="AstroConnect" className="about-logo" />
//             </div>
//             <div className="about-right">
//               <h2>
//                 {aboutData.title || "About"} <span>AstroConnect</span>
//               </h2>
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     aboutData.content ||
//                     "At AstroConnect, we combine astrology, vastu, and energy sciences to bring harmony and insight.",
//                 }}
//               ></p>
//               <a href="/about-us" className="about-btn">
//                 Discover More →
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* 💼 Careers Section (Dynamic from API) */}
//         <section id="careers" className="home-section careers">
//           <div className="careers-content">
//             <h2>Join Our Cosmic Team ✨</h2>
//             <p>
//               Become a part of <span className="highlight">AstroConnect</span> — where we decode the stars,
//               align energies, and help people find balance in love, career, and destiny.
//             </p>

//             <div className="career-roles">
//               {careers.length > 0 ? (
//                 careers.slice(0, 3).map((career) => (
//                   <div key={career._id} className="career-card">
//                     {career.image && (
//                       <img
//                         src={`https://astrobackend-5sr6.onrender.com${career.image}`}
//                         alt={career.title}
//                         className="career-img"
//                       />
//                     )}
//                     <h3>{career.title}</h3>
//                     <p>{career.description}</p>
//                     <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
//                       Status: {career.status || "Open"}
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No open positions available right now.</p>
//               )}
//             </div>

//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import "../styles/Home.css";

// const API_BASE = process.env.REACT_APP_API_URL || "https://astrobackend-5sr6.onrender.com/api";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [aboutData, setAboutData] = useState({
//     title: "About Us",
//     content: "",
//     image: "",
//   });

//   const [careers, setCareers] = useState([]);

//   /* -------------------- Fetch About -------------------- */
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/about`);
//         if (res.data) setAboutData(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching About:", err.message);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   /* -------------------- Fetch Careers -------------------- */
//   useEffect(() => {
//     const fetchCareers = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/careers`);
//         setCareers(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching careers:", err.message);
//       }
//     };
//     fetchCareers();
//   }, []);

// const navLinks = [
//   {
//     name: "Home",
//     link: "/",
//     dropdown: [
//       { name: "About Us", link: "/about-us" },
//       { name: "Careers", link: "/careers" }
//     ]
//   },

//   { name: "Energy", link: "/energy" },
//   { name: "Astrology", link: "/astrology" },
//   { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Your Account", link: "/auth" }
// ];


//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint and uncover what the stars have planned for you.",
//       gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Transform your home into a source of harmony and positive energy.",
//       gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover your strengths, destiny, and lucky numbers through numerology.",
//       gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and unlock the hidden messages of your energy field.",
//       gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Get intuitive insights and guidance for love, career, and personal growth.",
//       gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn your dreams into reality by aligning mindset, intention, and energy.",
//       gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
//     },
//   ];

//   const aboutImage =
//     aboutData.image && aboutData.image.startsWith("/uploads")
//       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
//       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="star"
//         style={{
//           position: "absolute",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 2}px`,
//           height: `${1 + Math.random() * 2}px`,
//           background: "white",
//           borderRadius: "50%",
//           animation: `twinkle ${2 + Math.random() * 3}s infinite`,
//         }}
//       ></div>
//     ));

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* ---------------- Overlay (Close Sidebar) ---------------- */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0,0,0,0.0)",
//             zIndex: 900,
//           }}
//         ></div>
//       )}

//       {/* ---------------- Sidebar ---------------- */}
//       <div
//         className={`sidebar ${sidebarOpen ? "open" : ""}`}
//         onClick={() => setSidebarOpen(false)} // 👉 Sidebar par click → close
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.5s ease-in-out",
//           zIndex: 1000,
//           padding: "30px 20px",
//         }}
//       >
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
//           ✨ AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ margin: "14px 0" }}>
//               <a
//                 href={item.link}
//                 style={{
//                   color: "#ccc",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "10px",
//                   padding: "12px 18px",
//                   borderRadius: "10px",
//                   textDecoration: "none",
//                   fontSize: "1rem",
//                   fontWeight: 500,
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 {item.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* ---------------- Hamburger ---------------- */}
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
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* ---------------- Main Content ---------------- */}
//       <div
//         className={`home-wrapper ${sidebarOpen ? "shifted" : ""}`}
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
//         {/* ---------------- Hero ---------------- */}
//         <section className="hero" id="home">
//           <div className="stars-container">{renderStars(50)}</div>
//           <div className="hero-overlay">
//             <h1>Your Destiny Is Written In The Stars ✨</h1>
//             <p>Explore the mysteries of life through astrology, tarot, and energy.</p>
//             <a href="/book" className="hero-btn">
//               Book Your Reading
//             </a>
//           </div>
//         </section>

//         {/* ---------------- Services ---------------- */}
//         <section id="services" className="home-section services">
//           <h2>Languages</h2>
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>

//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a key={idx} href={service.link} className="modern-service-card">
//                 <div
//                   className="card-icon-wrapper"
//                   style={{ background: service.gradient }}
//                 ></div>
//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>
//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* ---------------- About ---------------- */}
//         <section id="about-us" className="home-section about-us">
//           <div className="about-bg-glow"></div>
//           <div className="about-inner">
//             <div className="about-left">
//               <img src={aboutImage} alt="AstroConnect" className="about-logo" />
//             </div>

//             <div className="about-right">
//               <h2>
//                 {aboutData.title || "About"} <span>AstroConnect</span>
//               </h2>

//               <p
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     aboutData.content ||
//                     "At AstroConnect, we combine astrology, vastu, and energy sciences to bring harmony and insight.",
//                 }}
//               ></p>

//               <a href="/about-us" className="about-btn">
//                 Discover More →
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* ---------------- Careers ---------------- */}
//         <section id="careers" className="home-section careers">
//           <div className="careers-content">
//             <h2>Join Our Cosmic Team ✨</h2>
//             <p>
//               Become a part of <span className="highlight">AstroConnect</span> —
//               where we decode the stars, align energies, and help people find balance
//               in love, career, and destiny.
//             </p>

//             <div className="career-roles">
//               {careers.length > 0 ? (
//                 careers.slice(0, 3).map((career) => (
//                   <div key={career._id} className="career-card">
//                     {career.image && (
//                       <img
//                         src={`https://astrobackend-5sr6.onrender.com${career.image}`}
//                         alt={career.title}
//                         className="career-img"
//                       />
//                     )}
//                     <h3>{career.title}</h3>
//                     <p>{career.description}</p>
//                     <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
//                       Status: {career.status || "Open"}
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No open positions available right now.</p>
//               )}
//             </div>

//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/Home.css";

// const API_BASE =
//   process.env.REACT_APP_API_URL || "https://astrobackend-5sr6.onrender.com/api";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [aboutData, setAboutData] = useState({
//     title: "About Us",
//     content: "",
//     image: "",
//   });

//   const [careers, setCareers] = useState([]);

//   /* ---------------- Fetch About ---------------- */
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/about`);
//         if (res.data) setAboutData(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching About:", err.message);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   /* ---------------- Fetch Careers ---------------- */
//   useEffect(() => {
//     const fetchCareers = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/careers`);
//         setCareers(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching careers:", err.message);
//       }
//     };
//     fetchCareers();
//   }, []);

//   /* ---------------- Navbar Links ---------------- */
//   const navLinks = [
//     {
//       name: "Home",
//       link: "/",
//       dropdown: [
//         { name: "About Us", link: "/about-us" },
//         { name: "Careers", link: "/careers" },
//       ],
//     },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     { name: "Your Account", link: "/auth" },
//   ];

//   /* ---------------- Hero Stars ---------------- */
//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="star"
//         style={{
//           position: "absolute",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 2}px`,
//           height: `${1 + Math.random() * 2}px`,
//           background: "white",
//           borderRadius: "50%",
//           animation: `twinkle ${2 + Math.random() * 3}s infinite`,
//         }}
//       ></div>
//     ));

//   /* ---------------- About Image ---------------- */
//   const aboutImage =
//     aboutData.image && aboutData.image.startsWith("/uploads")
//       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
//       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

//   /* ---------------- Services ---------------- */
//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint with planetary wisdom.",
//       gradient: "linear-gradient(135deg, #667eea, #764ba2)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Bring balance and flow into your surroundings.",
//       gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover destiny numbers & personality insights.",
//       gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and emotional energy.",
//       gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Guidance for love, career, and personal life.",
//       gradient: "linear-gradient(135deg, #fa709a, #fee140)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn desire into reality through aligned energy.",
//       gradient: "linear-gradient(135deg, #30cfd0, #330867)",
//     },
//   ];

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033, #0d001a)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* -------------- Overlay to close sidebar -------------- */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "transparent",
//             zIndex: 900,
//           }}
//         ></div>
//       )}

//       {/* -------------- SIDEBAR -------------- */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.45s ease",
//           zIndex: 1000,
//           padding: "30px 18px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(to right, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "30px",
//           }}
//         >
//           ✨ AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ marginBottom: "12px" }}>
//               <a
//                 href={item.link}
//                 style={{
//                   display: "block",
//                   padding: "12px 16px",
//                   borderRadius: "10px",
//                   color: "#ccc",
//                   textDecoration: "none",
//                 }}
//               >
//                 {item.name}
//               </a>

//               {/* Dropdown */}
//               {item.dropdown && (
//                 <ul style={{ listStyle: "none", paddingLeft: "20px", marginTop: "5px" }}>
//                   {item.dropdown.map((sub, sidx) => (
//                     <li key={sidx} style={{ marginBottom: "8px" }}>
//                       <a
//                         href={sub.link}
//                         style={{
//                           display: "block",
//                           padding: "8px 12px",
//                           borderRadius: "8px",
//                           color: "#aaa",
//                           fontSize: "0.9rem",
//                           textDecoration: "none",
//                         }}
//                       >
//                         {sub.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* -------------- HAMBURGER BUTTON -------------- */}
//       {!sidebarOpen && (
//         <button
//           onClick={() => setSidebarOpen(true)}
//           style={{
//             position: "fixed",
//             top: "20px",
//             left: "20px",
//             width: "55px",
//             height: "55px",
//             borderRadius: "50%",
//             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//             border: "none",
//             fontSize: "26px",
//             color: "#fff",
//             cursor: "pointer",
//             boxShadow: "0 0 20px rgba(255, 0, 255, 0.4)",
//             zIndex: 1200,
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* -------------- MAIN WRAPPER -------------- */}
//       <div
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
//         {/* HERO */}
//         <section className="hero">
//           <div className="stars-container">{renderStars(50)}</div>

//           <div className="hero-overlay">
//             <h1>Your Destiny Is Written In The Stars ✨</h1>
//             <p>Explore the mysteries of life through astrology, tarot & energy.</p>
//             <a href="/book" className="hero-btn">
//               Book Your Reading
//             </a>
//           </div>
//         </section>

//         {/* SERVICES */}
//         <section className="home-section services">
//           <h2>Languages</h2>
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>

//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a href={service.link} key={idx} className="modern-service-card">
//                 <div
//                   className="card-icon-wrapper"
//                   style={{ background: service.gradient }}
//                 ></div>

//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>

//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section className="home-section about-us">
//           <div className="about-inner">
//             <div className="about-left">
//               <img src={aboutImage} alt="AstroConnect" className="about-logo" />
//             </div>

//             <div className="about-right">
//               <h2>
//                 {aboutData.title} <span>AstroConnect</span>
//               </h2>

//               <p
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     aboutData.content ||
//                     "At AstroConnect, we bring cosmic clarity to your life.",
//                 }}
//               ></p>

//               <a href="/about-us" className="about-btn">
//                 Discover More →
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* CAREERS */}
//         <section className="home-section careers">
//           <div className="careers-content">
//             <h2>Join Our Cosmic Team ✨</h2>
//             <p>
//               Become a part of <span className="highlight">AstroConnect</span> — where
//               astrology meets intuition.
//             </p>

//             <div className="career-roles">
//               {careers.length > 0 ? (
//                 careers.slice(0, 3).map((career) => (
//                   <div key={career._id} className="career-card">
//                     {career.image && (
//                       <img
//                         src={`https://astrobackend-5sr6.onrender.com${career.image}`}
//                         alt={career.title}
//                         className="career-img"
//                       />
//                     )}

//                     <h3>{career.title}</h3>
//                     <p>{career.description}</p>

//                     <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
//                       Status: {career.status}
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No open positions available.</p>
//               )}
//             </div>

//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/Home.css";

// const API_BASE =
//   process.env.REACT_APP_API_URL || "https://astrobackend-5sr6.onrender.com/api";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null); 
//   const [isLoggedIn, setIsLoggedIn] = useState(false); 

//   const [aboutData, setAboutData] = useState({
//     title: "About Us",
//     content: "",
//     image: "",
//   });

//   const [careers, setCareers] = useState([]);

//   /* ---------------- Check Login ---------------- */
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   /* ---------------- Logout ---------------- */
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     window.location.href = "/auth";
//   };

//   /* ---------------- Fetch About ---------------- */
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/about`);
//         if (res.data) setAboutData(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching About:", err.message);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   /* ---------------- Fetch Careers ---------------- */
//   useEffect(() => {
//     const fetchCareers = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/careers`);
//         setCareers(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching careers:", err.message);
//       }
//     };
//     fetchCareers();
//   }, []);

//   /* ---------------- Navbar Links ---------------- */
//   const navLinks = [
//     {
//       name: "Home",
//       link: "/",
//       dropdown: [
//         { name: "About Us", link: "/about-us" },
//         { name: "Careers", link: "/careers" },
//       ],
//     },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },

//     // ⭐ Login / Logout Logic
//     isLoggedIn
//       ? { name: "Logout", action: handleLogout }
//       : { name: "Your Account", link: "/auth" },
//   ];

//   /* ---------------- Hero Stars ---------------- */
//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="star"
//         style={{
//           position: "absolute",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 2}px`,
//           height: `${1 + Math.random() * 2}px`,
//           background: "white",
//           borderRadius: "50%",
//           animation: `twinkle ${2 + Math.random() * 3}s infinite`,
//         }}
//       ></div>
//     ));

//   /* ---------------- About Image ---------------- */
//   const aboutImage =
//     aboutData.image && aboutData.image.startsWith("/uploads")
//       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
//       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

//   /* ---------------- Services ---------------- */
//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint with planetary wisdom.",
//       gradient: "linear-gradient(135deg, #667eea, #764ba2)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Bring balance and flow into your surroundings.",
//       gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover destiny numbers & personality insights.",
//       gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and emotional energy.",
//       gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Guidance for love, career, and personal life.",
//       gradient: "linear-gradient(135deg, #fa709a, #fee140)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn desire into reality through aligned energy.",
//       gradient: "linear-gradient(135deg, #30cfd0, #330867)",
//     },
//   ];

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033, #0d001a)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* -------------- Overlay to close sidebar -------------- */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "transparent",
//             zIndex: 900,
//           }}
//         ></div>
//       )}

//       {/* -------------- SIDEBAR -------------- */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.45s ease",
//           zIndex: 1000,
//           padding: "30px 18px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(to right, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "30px",
//           }}
//         >
//           ✨ AstroConnect
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ marginBottom: "12px" }}>
//               <div
//                 onClick={() =>
//                   item.dropdown
//                     ? setOpenDropdown(openDropdown === idx ? null : idx)
//                     : item.action
//                     ? item.action()
//                     : (window.location.href = item.link)
//                 }
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "12px 16px",
//                   borderRadius: "10px",
//                   color: "#ccc",
//                   cursor: "pointer",
//                 }}
//               >
//                 <span>{item.name}</span>

//                 {/* ⭐ Arrow Icon for Dropdown */}
//                 {item.dropdown && (
//                   <span
//                     style={{
//                       transition: "0.3s",
//                       transform:
//                         openDropdown === idx ? "rotate(90deg)" : "rotate(0deg)",
//                     }}
//                   >
//                     ▶
//                   </span>
//                 )}
//               </div>

//               {/* Dropdown Menu */}
//               {item.dropdown && openDropdown === idx && (
//                 <ul style={{ listStyle: "none", paddingLeft: "20px", marginTop: "5px" }}>
//                   {item.dropdown.map((sub, sidx) => (
//                     <li key={sidx} style={{ marginBottom: "8px" }}>
//                       <a
//                         href={sub.link}
//                         style={{
//                           display: "block",
//                           padding: "8px 12px",
//                           borderRadius: "8px",
//                           color: "#aaa",
//                           fontSize: "0.9rem",
//                           textDecoration: "none",
//                         }}
//                       >
//                         {sub.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* -------------- HAMBURGER BUTTON -------------- */}
//       {!sidebarOpen && (
//         <button
//           onClick={() => setSidebarOpen(true)}
//           style={{
//             position: "fixed",
//             top: "20px",
//             left: "20px",
//             width: "55px",
//             height: "55px",
//             borderRadius: "50%",
//             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//             border: "none",
//             fontSize: "26px",
//             color: "#fff",
//             cursor: "pointer",
//             boxShadow: "0 0 20px rgba(255, 0, 255, 0.4)",
//             zIndex: 1200,
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* -------------- MAIN WRAPPER -------------- */}
//       <div
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
//         {/* HERO */}
//         <section className="hero">
//           <div className="stars-container">{renderStars(50)}</div>

//           <div className="hero-overlay">
//             <h1>Your Destiny Is Written In The Stars ✨</h1>
//             <p>Explore the mysteries of life through astrology, tarot & energy.</p>
//             <a href="/book" className="hero-btn">
//               Book Your Reading
//             </a>
//           </div>
//         </section>

//         {/* SERVICES */}
//         <section className="home-section services">
//           <h2>Languages</h2>
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>

//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a href={service.link} key={idx} className="modern-service-card">
//                 <div
//                   className="card-icon-wrapper"
//                   style={{ background: service.gradient }}
//                 ></div>

//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>

//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section className="home-section about-us">
//           <div className="about-inner">
//             <div className="about-left">
//               <img src={aboutImage} alt="AstroConnect" className="about-logo" />
//             </div>

//             <div className="about-right">
//               <h2>
//                 {aboutData.title} <span>AstroConnect</span>
//               </h2>

//               <p
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     aboutData.content ||
//                     "At AstroConnect, we bring cosmic clarity to your life.",
//                 }}
//               ></p>

//               <a href="/about-us" className="about-btn">
//                 Discover More →
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* CAREERS */}
//         <section className="home-section careers">
//           <div className="careers-content">
//             <h2>Join Our Cosmic Team ✨</h2>
//             <p>
//               Become a part of <span className="highlight">AstroConnect</span> — where
//               astrology meets intuition.
//             </p>

//             <div className="career-roles">
//               {careers.length > 0 ? (
//                 careers.slice(0, 3).map((career) => (
//                   <div key={career._id} className="career-card">
//                     {career.image && (
//                       <img
//                         src={`https://astrobackend-5sr6.onrender.com${career.image}`}
//                         alt={career.title}
//                         className="career-img"
//                       />
//                     )}

//                     <h3>{career.title}</h3>
//                     <p>{career.description}</p>

//                     <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
//                       Status: {career.status}
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No open positions available.</p>
//               )}
//             </div>

//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../styles/Home.css";

// import Navbar from "../components/layout/Navbar";  // ✅ Navbar added here

// const API_BASE =
//   process.env.REACT_APP_API_URL || "https://astrobackend-5sr6.onrender.com/api";

// const Home = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const [aboutData, setAboutData] = useState({
//     title: "About Us",
//     content: "",
//     image: "",
//   });

//   const [careers, setCareers] = useState([]);

//   /* ---------------- Check Login ---------------- */
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   /* ---------------- Logout ---------------- */
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     window.location.href = "/auth";
//   };

//   /* ---------------- Fetch About ---------------- */
//   useEffect(() => {
//     const fetchAboutData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/about`);
//         if (res.data) setAboutData(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching About:", err.message);
//       }
//     };
//     fetchAboutData();
//   }, []);

//   /* ---------------- Fetch Careers ---------------- */
//   useEffect(() => {
//     const fetchCareers = async () => {
//       try {
//         const res = await axios.get(`${API_BASE}/careers`);
//         setCareers(res.data || []);
//       } catch (err) {
//         console.error("❌ Error fetching careers:", err.message);
//       }
//     };
//     fetchCareers();
//   }, []);

//   /* ---------------- Navbar Links ---------------- */
//   const navLinks = [
//     {
//       name: "Home",
//       link: "/",
//       dropdown: [
//         { name: "About Us", link: "/about-us" },
//         { name: "Careers", link: "/careers" },
//       ],
//     },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     isLoggedIn
//       ? { name: "Logout", action: handleLogout }
//       : { name: "Your Account", link: "/auth" },
//   ];

//   /* ---------------- Hero Stars ---------------- */
//   const renderStars = (count) =>
//     Array.from({ length: count }).map((_, i) => (
//       <div
//         key={i}
//         className="star"
//         style={{
//           position: "absolute",
//           top: `${Math.random() * 100}%`,
//           left: `${Math.random() * 100}%`,
//           width: `${1 + Math.random() * 2}px`,
//           height: `${1 + Math.random() * 2}px`,
//           background: "white",
//           borderRadius: "50%",
//           animation: `twinkle ${2 + Math.random() * 3}s infinite`,
//         }}
//       ></div>
//     ));

//   const aboutImage =
//     aboutData.image && aboutData.image.startsWith("/uploads")
//       ? `${API_BASE.replace("/api", "")}${aboutData.image}`
//       : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

//   /* ---------------- Services ---------------- */
//   const services = [
//     {
//       name: "Astrology",
//       link: "/astrology",
//       desc: "Decode your life's blueprint with planetary wisdom.",
//       gradient: "linear-gradient(135deg, #667eea, #764ba2)",
//     },
//     {
//       name: "Vastu Shastra",
//       link: "/vastu",
//       desc: "Bring balance and flow into your surroundings.",
//       gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
//     },
//     {
//       name: "Numerology",
//       link: "/astrology?type=numerology",
//       desc: "Discover destiny numbers & personality insights.",
//       gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
//     },
//     {
//       name: "Energy Reading",
//       link: "/energy",
//       desc: "Understand your aura and emotional energy.",
//       gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
//     },
//     {
//       name: "Tarot Reading",
//       link: "/tarotreading",
//       desc: "Guidance for love, career, and personal life.",
//       gradient: "linear-gradient(135deg, #fa709a, #fee140)",
//     },
//     {
//       name: "Manifestation",
//       link: "/manifestation",
//       desc: "Turn desire into reality through aligned energy.",
//       gradient: "linear-gradient(135deg, #30cfd0, #330867)",
//     },
//   ];

//   return (
//     <div
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033, #0d001a)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* ==================== NAVBAR ==================== */}
//       <Navbar />

//       {/* ============ Sidebar Overlay ============ */}
//       {sidebarOpen && (
//         <div
//           onClick={() => setSidebarOpen(false)}
//           style={{
//             position: "fixed",
//             inset: 0,
//             background: "transparent",
//             zIndex: 900,
//           }}
//         ></div>
//       )}

//       {/* ============ SIDEBAR ============ */}
//       <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: sidebarOpen ? 0 : "-270px",
//           width: "270px",
//           height: "100vh",
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
//           backdropFilter: "blur(14px)",
//           boxShadow: "6px 0 25px rgba(255, 0, 255, 0.25)",
//           transition: "left 0.45s ease",
//           zIndex: 1000,
//           padding: "30px 18px",
//         }}
//       >
//         <h2
//           style={{
//             fontSize: "28px",
//             fontWeight: 700,
//             textAlign: "center",
//             background: "linear-gradient(to right, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             marginBottom: "30px",
//           }}
//         >
//           THE FIFTH CUSP
//         </h2>

//         <ul style={{ listStyle: "none", padding: 0 }}>
//           {navLinks.map((item, idx) => (
//             <li key={idx} style={{ marginBottom: "12px" }}>
//               <div
//                 onClick={() =>
//                   item.dropdown
//                     ? setOpenDropdown(openDropdown === idx ? null : idx)
//                     : item.action
//                     ? item.action()
//                     : (window.location.href = item.link)
//                 }
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "12px 16px",
//                   borderRadius: "10px",
//                   color: "#ccc",
//                   cursor: "pointer",
//                 }}
//               >
//                 <span>{item.name}</span>

//                 {item.dropdown && (
//                   <span
//                     style={{
//                       transition: "0.3s",
//                       transform:
//                         openDropdown === idx ? "rotate(90deg)" : "rotate(0deg)",
//                     }}
//                   >
//                     ▶
//                   </span>
//                 )}
//               </div>

//               {item.dropdown && openDropdown === idx && (
//                 <ul style={{ listStyle: "none", paddingLeft: "20px", marginTop: "5px" }}>
//                   {item.dropdown.map((sub, sidx) => (
//                     <li key={sidx} style={{ marginBottom: "8px" }}>
//                       <a
//                         href={sub.link}
//                         style={{
//                           display: "block",
//                           padding: "8px 12px",
//                           borderRadius: "8px",
//                           color: "#aaa",
//                           fontSize: "0.9rem",
//                           textDecoration: "none",
//                         }}
//                       >
//                         {sub.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* HAMBURGER */}
//       {!sidebarOpen && (
//         <button
//           onClick={() => setSidebarOpen(true)}
//           style={{
//             position: "fixed",
//             top: "20px",
//             left: "20px",
//             width: "55px",
//             height: "55px",
//             borderRadius: "50%",
//             background: "linear-gradient(135deg, #ff00ff, #7b2cbf)",
//             border: "none",
//             fontSize: "26px",
//             color: "#fff",
//             cursor: "pointer",
//             boxShadow: "0 0 20px rgba(255, 0, 255, 0.4)",
//             zIndex: 1200,
//           }}
//         >
//           ☰
//         </button>
//       )}

//       {/* MAIN CONTENT WITH SLIDE EFFECT */}
//       <div
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.5s ease",
//         }}
//       >
//         {/* HERO */}
//         {/* <section className="hero">
//           <div className="stars-container">{renderStars(50)}</div>

//           <div className="hero-overlay">
//             <h1>Your Destiny Is Written In The Stars ✨</h1>
//             <p>Explore the mysteries of life through astrology, tarot & energy.</p>
//             <a href="/book" className="hero-btn">
//               Book Your Reading
//             </a>
//           </div>
//         </section> */}

//         <section className="hero">
//   <div className="stars-container">{renderStars(50)}</div>

//   <div className="hero-glow">
//     <div className="hero-overlay">
//       <h1>Your Destiny Is Written In The Stars ✨</h1>
//       <p>Explore the mysteries of life through astrology, tarot & energy.</p>
//       <a href="/book" className="hero-btn">Book Your Reading</a>
//     </div>
//   </div>
// </section>


//         {/* SERVICES */}
//         <section className="home-section services">
//           <h2>Languages</h2>
//           <p className="services-subtitle">
//             Explore cosmic wisdom through our transformative offerings
//           </p>

//           <div className="modern-services-grid">
//             {services.map((service, idx) => (
//               <a href={service.link} key={idx} className="modern-service-card">
//                 <div
//                   className="card-icon-wrapper"
//                   style={{ background: service.gradient }}
//                 ></div>

//                 <h3>{service.name}</h3>
//                 <p>{service.desc}</p>

//                 <div className="card-arrow">→</div>
//               </a>
//             ))}
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section className="home-section about-us">
//           <div className="about-inner">
//             <div className="about-left">
//               <img src={aboutImage} alt="THE FIFTH CUSP" className="about-logo" />
//             </div>

//             <div className="about-right">
//               <h2>
//                 {aboutData.title} <span>THE FIFTH CUSP</span>
//               </h2>

//               <p
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     aboutData.content ||
//                     "At AstroConnect, we bring cosmic clarity to your life.",
//                 }}
//               ></p>

//               <a href="/about-us" className="about-btn">
//                 Discover More →
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* CAREERS */}
//         <section className="home-section careers">
//           <div className="careers-content">
//             <h2>Join Our Cosmic Team ✨</h2>
//             <p>
//               Become a part of <span className="highlight">THE FIFTH CUSP</span> — where astrology meets intuition.
//             </p>

//             <div className="career-roles">
//               {careers.length > 0 ? (
//                 careers.slice(0, 3).map((career) => (
//                   <div key={career._id} className="career-card">
//                     {career.image && (
//                       <img
//                         src={`https://astrobackend-5sr6.onrender.com${career.image}`}
//                         alt={career.title}
//                         className="career-img"
//                       />
//                     )}

//                     <h3>{career.title}</h3>
//                     <p>{career.description}</p>

//                     <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
//                       Status: {career.status}
//                     </p>
//                   </div>
//                 ))
//               ) : (
//                 <p>No open positions available.</p>
//               )}
//             </div>

//             <a href="/careers" className="career-btn">
//               Explore Opportunities →
//             </a>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import AboutYou from "../assets/About You_Final.png";
import FifthCuspLogo from "../assets/The Fifth Cusp_Logo.png";
import Ikigai_Final from "../assets/Ikigai_Final.png";





import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/Sidebar";

const API_BASE =
  process.env.REACT_APP_API_URL || "https://astrobackend-5sr6.onrender.com/api";

const Home = () => {
  const navigate = useNavigate();


  /* ---------------- SIDEBAR STATE (IMPORTANT) ---------------- */
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [aboutData, setAboutData] = useState({
    title: "About Us",
    content: "",
    image: "",
  });
  const [careers, setCareers] = useState([]);

  const [faqs, setFaqs] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  /* ---------------- LOGIN CHECK ---------------- */
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/auth";
  };

  /* ---------------- NAV LINKS ---------------- */
  const navLinks = [
    {
      name: "Home",
      link: "/",
      dropdown: [
        { name: "About Us", link: "/about-us" },
        { name: "Careers", link: "/careers" },
      ],
    },
    { name: "Energy", link: "/energy" },
    { name: "Astrology", link: "/astrology" },
    { name: "Vastu", link: "/vastu" },
    { name: "Manifestation", link: "/manifestation" },
    { name: "Material", link: "/material" },
    { name: "Blogs", link: "/blogs" },
    isLoggedIn
      ? { name: "Logout", action: handleLogout }
      : { name: "Your Account", link: "/auth" },
  ];

  /* ---------------- FETCH API ---------------- */
  // useEffect(() => {
  //   axios.get(`${API_BASE}/about`).then((res) => setAboutData(res.data));
  //   axios.get(`${API_BASE}/careers`).then((res) => setCareers(res.data));
  // }, []);

    useEffect(() => {
    axios.get(`${API_BASE}/about`).then((res) => setAboutData(res.data));
    axios.get(`${API_BASE}/careers`).then((res) => setCareers(res.data));

    // ✅ FETCH ACTIVE FAQs
      axios
        .get("https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Home")
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

  

  /* ---------------- RENDER STARS ---------------- */
  const renderStars = (count) =>
    Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="star"
        style={{
          position: "absolute",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${1 + Math.random() * 2}px`,
          height: `${1 + Math.random() * 2}px`,
          background: "white",
          borderRadius: "50%",
          animation: `twinkle ${2 + Math.random() * 3}s infinite`,
        }}
      ></div>
    ));

  const aboutImage =
    aboutData.image?.startsWith("/uploads")
      ? `${API_BASE.replace("/api", "")}${aboutData.image}`
      : "https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png";

  /* ---------------- SERVICES ---------------- */
  const services = [
    {
      name: "ASTROLOGY",
      link: "/astrology",
     desc: `A story that brought you into being—the cosmic map of who you are, where you’re headed, and why your life unfolds the way it does.

It is your blueprint.

Your chart reveals the truth of your strengths, weaknesses, desires, relationships, karmic lessons, yogas, doshas, and the precise timings of rise, pause, and transformation.

When you understand it, everything falls into place.

In the end, it has always been about direction and timing.`,

      gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    },
    {
      name: "VASTU SHASTRA",
      link: "/vastu",
     desc: `Your space is not accidental, it is an energetic map interacting with your mind, body, and fate every single day.

Vastu reveals what your space is doing to you—where it nurtures you, where it weakens you, and where it blocks your progress.

When the space is corrected, life finally begins to move the way it was meant to.

It opens the pathways of abundance to you.`,

      gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    },
    {
      name: "NUMEROLOGY",
      link: "/free-calculator",
     desc: `A vibrational science based on the energetic patterns of numbers—derived from their ruling planets and their direct influence on personality, destiny, and decision-making.

Numerology reveals the hidden codes shaping your life path, your purpose, and everything that unfolds within it.`,

      gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    },
    {
      name: "ENERGY READING",
      link: "/energy",
      desc: `The language you turn to when no logical path or factual answer exists. 
Whether it’s a simple yes/no or a deeply specific question, it reads the frequency behind the situation and reveals exactly what you need to know—even when there is no data, no clarity, and no visible direction.`,

      gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    },
    {
      name: "TAROT READING",
      link: "/tarotreading",
      desc: `A symbolic, interpretative, and intuitive science that uses archetypes 
to access the subconscious layers of your mind. Tarot reveals truths, choices, 
and the internal narratives guiding your decisions. It offers clarity with 
specificity that feels almost magical.`,

      gradient: "linear-gradient(135deg, #fa709a, #fee140)",
    },
    {
      name: "MANIFESTATION",
      link: "/manifestation",
      desc: `A transformative science of aligning thought, emotion, and energy 
to influence physical outcomes. It explains how frequency, intention, belief, 
and resonance shape the reality you experience — turning desire into material form.`,

      gradient: "linear-gradient(135deg, #30cfd0, #330867)",
    },
  ];

  return (
    <div className="home-root">

      {/* ---------------- SIDEBAR WITH PROPS ---------------- */}
      <Sidebar
        navLinks={navLinks}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* ---------------- HAMBURGER BUTTON ---------------- */}
      {!sidebarOpen && (
        <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
          ☰
        </button>
      )}

      {/* ---------------- NAVBAR ---------------- */}
      <Navbar />

      {/* ---------------- MAIN CONTENT ---------------- */}
      <main className={`home-main ${sidebarOpen ? "shifted" : ""}`}>

        {/* HERO */}
        <section className="hero">
          <div className="stars-container">{renderStars(50)}</div>
          <div className="hero-glow">
            <div className="hero-overlay">
              <h1>Your Destiny Is Written In The Stars </h1>
              <p>Explore the mysteries of life through astrology, tarot & energy.</p>
              <a href="/book" className="hero-btn">
                BOOK YOUR READING
              </a>
            </div>
          </div>
        </section>

        {/* ================= FIFTH CUSP INTRO SECTION ================= */}
<section className="home-section fifth-cusp-intro">
  <div className="fifth-cusp-inner">

    {/* LEFT IMAGE */}
    <div className="fifth-cusp-image">
      <img src={FifthCuspLogo} alt="The Fifth Cusp Logo" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="fifth-cusp-content">
      <h2>
        THE FIFTH CUSP
      </h2>

      <p>
        You’re standing inside a new kind of spiritual ecosystem, one built to
        decode who you are, align where you’re going, and transform how you live.
      </p>

      <p>
        Our collective brings together Astrology, Vastu, Energy Reading,
        Manifestation, Tarot, and Wealth Architecture (Material) into one
        integrated space.
      </p>

      <p>
        Every tool, report, assessment, and consultation is designed to reveal
        your inner blueprint and translate it into real-world action.
      </p>

      <p>
        Whether you want clarity, healing, direction, or growth, the system
        guides you through your inherent nature, emotional patterns,
        environment, and the opportunities written into your chart.
      </p>

      <p className="fifth-cusp-highlight">
        This isn’t a website — it’s a personal operating system for alignment,
        abundance, and self-mastery.
        <br />
        <strong>It is a portal to higher frequencies. It is the Cusp.</strong>
      </p>
    </div>

  </div>
</section>


        {/* SERVICES */}
        <section className="home-section services">
          <h2>LANGUAGES</h2>
          <p className="services-subtitle">
            Explore cosmic wisdom through our transformative offerings
          </p>

          <div className="modern-services-grid">
            {services.map((service, idx) => (
              <a href={service.link} key={idx} className="modern-service-card">
                <div className="card-icon-wrapper" style={{ background: service.gradient }}></div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
                {/* <div className="card-arrow">→</div> */}
              </a>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="home-section about-us">
          <div className="about-inner">
            <div className="about-left">
              <img src={aboutImage} alt="THE FIFTH CUSP" className="about-logo" />
            </div>

            <div className="about-right">
              <h2>{aboutData.title} <span>THE FIFTH CUSP</span></h2>
              <p dangerouslySetInnerHTML={{ __html: aboutData.content }}></p>
              <a href="/about-us" className="about-btn">DISCOVER MORE </a>
            </div>
          </div>
        </section>
     {/* SECTION 4 — ABOUT YOU */}
<section className="home-section about-you">
  <div className="about-inner">

    {/* LEFT IMAGE */}
    <div className="about-left">
    <img
  src={AboutYou}
  alt="About You"
  className="about-image"
/>

    </div>

    {/* RIGHT CONTENT */}
    <div className="about-right">
      <h2 className="about-title">
        ABOUT YOU
      </h2>

      <p>
        <strong>About You</strong> is where you finally understand why you feel the way you do.
        It reveals your true nature, your wounds, your karmic stories, and the blocks that
        silently steal your peace.
      </p>

      <p>
        When you learn all that you can be at your elevated levels of frequency
        (what you’re actually meant to be), that’s when you’re ready to realign
        and propel yourself into the best version of yourself.
      </p>

      <p>
        The change truly begins at home — within.
        This section explains everything, and suddenly, everything begins to make sense.
      </p>

      <p>
        This is the first real step toward manifestation, inner peace,
        and becoming who you were always meant to be.
      </p>

      <p className="highlight-line">
        Your higher self already exists within you — all you need is to resonate.
        To let go of the anchors is to finally jump.
      </p>
    </div>

  </div>
</section>



{/* SECTION 5 — FIND YOUR IKIGAI */}
<section className="home-section ikigai-section">
  <div className="ikigai-inner">

    {/* LEFT — IMAGE */}
    <div className="ikigai-image">
      <img src={Ikigai_Final} alt="Find Your Ikigai" />
    </div>

    {/* RIGHT — CONTENT */}
    <div className="ikigai-content">
      <h2>
        FIND YOUR <span>IKIGAI</span>
      </h2>

      <p className="ikigai-desc">
        Ikigai is the meeting point of your purpose, passion, contribution,
        and livelihood. It is the place where mastery becomes effortless,
        and life becomes meaningful.
      </p>

      <div className="ikigai-grid">
        <div className="ikigai-box">
          <h4>What You Love</h4>
          <p>Things that inspire your soul, excite you, and bring natural joy.</p>
        </div>

        <div className="ikigai-box">
          <h4>What You're Good At</h4>
          <p>Inner skills, natural talents & strengths that come effortlessly.</p>
        </div>

        <div className="ikigai-box">
          <h4>What You Can Be Paid For</h4>
          <p>Skills that can become value, service, contribution, or profession.</p>
        </div>

        <div className="ikigai-box">
          <h4>What The World Needs</h4>
          <p>Where your gifts align with collective needs and purpose.</p>
        </div>
      </div>

      <div className="ikigai-actions">
        <button className="ikigai-btn" onClick={() => navigate("/know-more")}>
          KNOW MORE
        </button>

        <button className="ikigai-btn secondary">
        {/* <button className="ikigai-btn" onClick={() => navigate("/experiences")}></button> */}
          EXPERIENCE
        </button>

        <button
          className="ikigai-btn outline"
          onClick={() => navigate("/Contact")}
        >
          AFFIRM
        </button>
      </div>
    </div>

  </div>
</section>




        {/* CAREERS */}
        <section className="home-section careers">
          <div className="careers-content">
            <h2>CAREERS </h2>
            <p>Become a part of <span className="highlight">THE FIFTH CUSP</span> — where astrology meets intuition.</p>

            <div className="career-roles">
              {careers.length > 0 ? (
                careers.slice(0, 3).map((career) => (
                  <div key={career._id} className="career-card">
                    {career.image && (
                      <img
                        src={`https://astrobackend-5sr6.onrender.com${career.image}`}
                        alt={career.title}
                        className="career-img"
                      />
                    )}
                    <h3>{career.title}</h3>
                    <p>{career.description}</p>
                    <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                      Status: {career.status}
                    </p>
                  </div>
                ))
              ) : (
                <p>No open positions available.</p>
              )}
            </div>

            <a href="/careers" className="career-btn">
              EXPLORE OPPORTUNITIES 
            </a>
          </div>
        </section>
        {/* FAQs */}
        <section className="home-section faq-section">
          <h2>FAQ </h2>

          <div className="faq-container">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={faq._id}>
                <div
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <h4>{faq.question}</h4>
                  <span>{openFaq === i ? "−" : "+"}</span>
                </div>

                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        
        {/* ================= CONTACT TEASER SECTION ================= */}
<section className="home-section contact-teaser">
  <div className="contact-teaser-inner">

    <h2>
      READY TO CONNECT
    </h2>

    <p>
      If you’re seeking clarity, alignment, healing, or guidance —
      this is where the conversation begins.
    </p>

    <button
      className="contact-teaser-btn"
      onClick={() => navigate("/contact")}
    >
      GO TO CONTACT PAGE 
    </button>

  </div>
</section>

      </main>
    </div>
  );
};

export default Home;
