// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./KnowMore.css"; 

// const API = "https://astrobackend-5sr6.onrender.com/api/know-more";

// const KnowMore = () => {
//   const [pdfs, setPdfs] = useState([]);

//   useEffect(() => {
//     const fetchPDFs = async () => {
//       try {
//         const res = await axios.get(API);
//         setPdfs(res.data.data || []);
//       } catch (error) {
//         console.log("Fetch Error:", error);
//       }
//     };
//     fetchPDFs();
//   }, []);

//   return (
//     <div style={{ padding: "3rem", color: "#fff", textAlign: "center" }}>
//       <h1 style={{
//         fontSize: "2.5rem",
//         background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//         WebkitBackgroundClip: "text",
//         WebkitTextFillColor: "transparent",
//         marginBottom: "2rem"
//       }}>
//         Know More – PDF Library
//       </h1>

//       {pdfs.length === 0 ? (
//         <p>No PDFs available.</p>
//       ) : (
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
//           gap: "1.5rem",
//         }}>
//           {pdfs.map((item) => (
//             <div key={item._id}
//               style={{
//                 background: "rgba(255,255,255,0.08)",
//                 padding: "1.5rem",
//                 borderRadius: "18px",
//                 backdropFilter: "blur(14px)"
//               }}>
//               <h3 style={{ marginBottom: "0.5rem" }}>{item.title}</h3>
//               <a
//                 href={item.pdfUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   padding: "0.8rem 1.2rem",
//                   background: "linear-gradient(90deg,#ff00ff,#00ffff)",
//                   borderRadius: "12px",
//                   display: "inline-block",
//                   marginTop: "0.8rem",
//                   color: "#fff",
//                   textDecoration: "none"
//                 }}
//               >
//                 View PDF
//               </a>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default KnowMore;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./KnowMore.css";

const API = "https://astrobackend-5sr6.onrender.com/api/know-more";

const KnowMore = () => {
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const res = await axios.get(API);
        setPdfs(res.data.data || []);
      } catch (error) {
        console.log("Fetch Error:", error);
      }
    };
    fetchPDFs();
  }, []);

  // ⭐ STARFIELD GENERATOR
  useEffect(() => {
    const container = document.querySelector(".km-stars");

    if (container && container.childElementCount === 0) {
      for (let i = 0; i < 120; i++) {
        const star = document.createElement("div");
        star.className = "km-star";
        star.style.width = star.style.height = Math.random() * 3 + "px";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDuration = 2 + Math.random() * 3 + "s";
        container.appendChild(star);
      }
    }
  }, []);

  return (
    <div className="knowmore-page">

      {/* ⭐ Stars */}
      <div className="km-stars"></div>

      {/* 🌈 Glow Orbs */}
      <div className="km-orb km-orb-1"></div>
      <div className="km-orb km-orb-2"></div>
      <div className="km-orb km-orb-3"></div>

      {/* Title */}
      <h1 className="km-title">Step into the Cusp – PDF Library</h1>

      {/* Content */}
      {pdfs.length === 0 ? (
        <p className="km-empty">No PDFs available.</p>
      ) : (
        <div className="km-grid">
          {pdfs.map((item) => (
            <div key={item._id} className="km-card">
              <h3>{item.title}</h3>

              <a
                className="km-btn"
                href={
                  item.pdfUrl.startsWith("http")
                    ? item.pdfUrl
                    : `https://astrobackend-5sr6.onrender.com${item.pdfUrl}`
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default KnowMore;
