// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import BlogCard from "../components/cards/BlogCard";
// import "../styles/blog.css";

// const blogs = [
//   {
//     id: 1,
//     title: "5 Ways to Manifest Your Dreams",
//     description:
//       "Learn practical manifestation techniques including journaling, vision boards, and affirmations.",
//     image:
//       "https://res.cloudinary.com/doerrm32l/image/upload/v1761983765/blog1_osvorg.png",
//     date: "Oct 20, 2025",
//     author: "Rinku Sheoran",
//   },
//   {
//     id: 2,
//     title: "Vastu Tips for Your Home",
//     description:
//       "Optimize your living space for peace, prosperity, and harmony with these simple Vastu tips.",
//     image:
//       "https://res.cloudinary.com/doerrm32l/image/upload/v1761977367/Vastu_mwnk7g.png",
//     date: "Sep 15, 2025",
//     author: "Rinku Sheoran",
//   },
//   {
//     id: 3,
//     title: "Boost Your Wealth with Energy Alignment",
//     description:
//       "Discover how aligning your energy and mindset can enhance financial growth and opportunities.",
//     image:
//       "https://res.cloudinary.com/doerrm32l/image/upload/v1761981861/gallery2_gcrait.jpg",
//     date: "Aug 10, 2025",
//     author: "Rinku Sheoran",
//   },
// ];

// const navLinks = [
//   { name: "Home", link: "/", icon: "🏠" },
//   { name: "About Us", link: "/about-us", icon: "✨" },
//   { name: "Energy", link: "/energy", icon: "⚡" },
//   { name: "Movement", link: "/movement", icon: "🌊" },
//   { name: "Space Vastu", link: "/space-vastu", icon: "🏛️" },
//   { name: "Manifestation", link: "/manifestation", icon: "💫" },
//   { name: "Material", link: "/material", icon: "💎" },
//   { name: "Blogs", link: "/blogs", icon: "📝" },
//   { name: "Careers", link: "/careers", icon: "💼" },
//   { name: "Contact", link: "/contact", icon: "📧" },
//   { name: "Login / Signup", link: "/auth", icon: "🔐" },
// ];

// const Blog = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const starfield = document.getElementById("starfield");
//     if (starfield && starfield.childElementCount === 0) {
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

//   const handleReadMore = (blog) => navigate(`/blog/${blog.id}`, { state: { blog } });

//   return (
//     <div
//       className="blog-page cosmic-bg"
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* ✨ Starfield Background */}
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
//           background: "linear-gradient(180deg, rgba(20,0,40,0.95), rgba(5,0,20,0.9))",
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
//             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1) rotate(90deg)")}
//             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
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
//                 onMouseEnter={(e) => {
//                   e.target.style.color = "#fff";
//                   e.target.style.background = "rgba(255,255,255,0.1)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.color = "#ccc";
//                   e.target.style.background = "transparent";
//                 }}
//               >
//                 <span style={{ fontSize: "1.4rem" }}>{item.icon}</span>
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

//       {/* 🌌 Main Blog Content */}
//       <div
//         className="blog-content"
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.6s ease",
//         }}
//       >
//         <h2
//           className="blog-page-title"
//           style={{
//             textAlign: "center",
//             margin: "40px 0 20px",
//             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             fontSize: "2rem",
//             fontWeight: "bold",
//           }}
//         >
//           Our Blogs
//         </h2>

//         <div className="blog-grid">
//           {blogs.map((blog) => (
//             <BlogCard
//               key={blog.id}
//               {...blog}
//               ctaText="Read More"
//               onClick={() => handleReadMore(blog)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import BlogCard from "../components/cards/BlogCard";
// import "../styles/blog.css";

// const blogs = [
//   {
//     id: 1,
//     title: "5 Ways to Manifest Your Dreams",
//     description:
//       "Learn practical manifestation techniques including journaling, vision boards, and affirmations.",
//     image:
//       "https://res.cloudinary.com/doerrm32l/image/upload/v1761983765/blog1_osvorg.png",
//     date: "Oct 20, 2025",
//     author: "Rinku Sheoran",
//   },
//   {
//     id: 2,
//     title: "Vastu Tips for Your Home",
//     description:
//       "Optimize your living space for peace, prosperity, and harmony with these simple Vastu tips.",
//     image:
//       "https://res.cloudinary.com/doerrm32l/image/upload/v1761977367/Vastu_mwnk7g.png",
//     date: "Sep 15, 2025",
//     author: "Rinku Sheoran",
//   },
//   {
//     id: 3,
//     title: "Boost Your Wealth with Energy Alignment",
//     description:
//       "Discover how aligning your energy and mindset can enhance financial growth and opportunities.",
//     image:
//       "https://res.cloudinary.com/doerrm32l/image/upload/v1761981861/gallery2_gcrait.jpg",
//     date: "Aug 10, 2025",
//     author: "Rinku Sheoran",
//   },
// ];

// const navLinks = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about-us" },
//   { name: "Energy", link: "/energy" },
//    { name: "Astrology", link: "/Astrology" },
//  { name: "Vastu", link: "/vastu" },
//   { name: "Manifestation", link: "/manifestation" },
//   { name: "Material", link: "/material" },
//   { name: "Blogs", link: "/blogs" },
//   { name: "Careers", link: "/careers" },
//   { name: "Contact", link: "/contact" },
//   { name: "Login / Signup", link: "/auth" },
// ];

// const Blog = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   useEffect(() => {
//     const starfield = document.getElementById("starfield");
//     if (starfield && starfield.childElementCount === 0) {
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

//   const handleReadMore = (blog) =>
//     navigate(`/blog/${blog.id}`, { state: { blog } });

//   return (
//     <div
//       className="blog-page cosmic-bg"
//       style={{
//         fontFamily: "Poppins, sans-serif",
//         color: "#fff",
//         background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
//         minHeight: "100vh",
//         overflowX: "hidden",
//       }}
//     >
//       {/* ✨ Starfield Background */}
//       <div id="starfield" className="starfield"></div>

//      {/* 🧭 Sidebar */}
// <div
//   className={`sidebar ${sidebarOpen ? "open" : ""}`}
//   onClick={() => setSidebarOpen(false)}   // ⭐ inside click → close
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
//   }}
// >

//   <h2
//     style={{
//       fontSize: "28px",
//       fontWeight: 700,
//       textAlign: "center",
//       background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "white",
//       marginBottom: "35px",
//     }}
//   >
//    THE FIFTH CUSP
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
//           onMouseEnter={(e) => {
//             e.target.style.color = "#fff";
//             e.target.style.background = "rgba(255,255,255,0.1)";
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.color = "#ccc";
//             e.target.style.background = "transparent";
//           }}
//         >
//           {item.name}
//         </a>
//       </li>
//     ))}
//   </ul>
// </div>

// {/* ⭐ Outside Click Overlay */}
// {sidebarOpen && (
//   <div
//     onClick={() => setSidebarOpen(false)}   // ⭐ outside click → close
//     style={{
//       position: "fixed",
//       inset: 0,
//       background: "rgba(0,0,0,0.4)",
//       zIndex: 900,
//     }}
//   ></div>
// )}

// {/* ☰ Hamburger */}
// {!sidebarOpen && (
//   <button
//     onClick={() => setSidebarOpen(true)}   // ⭐ only open
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


//       {/* 🌌 Main Blog Content */}
//       <div
//         className="blog-content"
//         style={{
//           marginLeft: sidebarOpen ? "270px" : "0",
//           transition: "margin-left 0.6s ease",
//         }}
//       >
//         <h2
//           className="blog-page-title"
//           style={{
//             textAlign: "center",
//             margin: "40px 0 20px",
//             background: "linear-gradient(90deg, #ff00ff, #00ffff)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "white",
//             fontSize: "2rem",
//             fontWeight: "bold",
//           }}
//         >
//           Our Blogs
//         </h2>

//         <div className="blog-grid">
//           {blogs.map((blog) => (
//             <BlogCard
//               key={blog.id}
//               {...blog}
//               ctaText="Read More"
//               onClick={() => handleReadMore(blog)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/cards/BlogCard";
import "../styles/blog.css";

// ⭐ IMPORT GLOBAL SIDEBAR
import Sidebar from "../components/Sidebar";

const blogs = [
  {
    id: 1,
    title: "5 Ways to Manifest Your Dreams",
    description:
      "Learn practical manifestation techniques including journaling, vision boards, and affirmations.",
    image:
      "https://res.cloudinary.com/doerrm32l/image/upload/v1761983765/blog1_osvorg.png",
    date: "Oct 20, 2025",
    author: "Rinku Sheoran",
  },
  {
    id: 2,
    title: "Vastu Tips for Your Home",
    description:
      "Optimize your living space for peace, prosperity, and harmony with these simple Vastu tips.",
    image:
      "https://res.cloudinary.com/doerrm32l/image/upload/v1761977367/Vastu_mwnk7g.png",
    date: "Sep 15, 2025",
    author: "Rinku Sheoran",
  },
  {
    id: 3,
    title: "Boost Your Wealth with Energy Alignment",
    description:
      "Discover how aligning your energy and mindset can enhance financial growth and opportunities.",
    image:
      "https://res.cloudinary.com/doerrm32l/image/upload/v1761981861/gallery2_gcrait.jpg",
    date: "Aug 10, 2025",
    author: "Rinku Sheoran",
  },
];

const Blog = () => {
  const [faqs, setFaqs] = useState([]);
const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ⭐ Starfield Effect
  useEffect(() => {
    const starfield = document.getElementById("starfield");
    if (starfield && starfield.childElementCount === 0) {
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
   useEffect(() => {
  const fetchFaqs = async () => {
    try {
      const res = await fetch(
        "https://astrobackend-5sr6.onrender.com/api/faqs/list?page=Blogs"
      );
      const data = await res.json();
      setFaqs(data?.faqs || []);
    } catch (err) {
      console.error("❌ Blog FAQ fetch error:", err);
    }
  };

  fetchFaqs();
}, []);

  const handleReadMore = (blog) =>
    navigate(`/blog/${blog.id}`, { state: { blog } });

  return (
    <div
      className="blog-page cosmic-bg"
      style={{
        fontFamily: "Poppins, sans-serif",
        color: "#fff",
        background: "linear-gradient(180deg, #1a0033 0%, #0d001a 100%)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ⭐ STARFIELD */}
      <div id="starfield" className="starfield"></div>

      {/* ⭐ GLOBAL SIDEBAR */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* ⭐ MAIN CONTENT (NO SHIFTING) */}
      <div className="blog-content" style={{ paddingTop: "40px" }}>
        <h2
          className="blog-page-title"
          style={{
            textAlign: "center",
            margin: "40px 0 20px",
            background: "linear-gradient(90deg, #ff00ff, #00ffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "white",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          OUR BLOGS
        </h2>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              {...blog}
              ctaText="Read More"
              onClick={() => handleReadMore(blog)}
            />
          ))}
        </div>
        {/* ================= BLOG FAQ SECTION ================= */}
{faqs.length > 0 && (
  <section className="blog-faq-section">
    <h2 className="faq-title">FAQ</h2>
    <p className="faq-subtitle">
      Common questions related to our blogs & insights
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

export default Blog;
