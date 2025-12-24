
// // import React, { useEffect, useState } from "react";
// // import "../../styles/SavedReports.css";
// // import { UserReportAPI } from "../../api/apiService";

// // export default function SavedReports() {
// //   const [user, setUser] = useState(null);
// //   const [reports, setReports] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const u = JSON.parse(localStorage.getItem("user"));
// //     if (u) {
// //       setUser(u);
// //       loadReports(u._id);
// //     }
// //   }, []);

// //   const loadReports = async (userId) => {
// //     try {
// //       setLoading(true);
// //       const data = await UserReportAPI.getUserReports(userId);

// //       if (data.success) setReports(data.reports || []);
// //     } catch (err) {
// //       console.log("Report Load Error:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   if (!user) return <h2 className="please-login">Please Login First</h2>;

// //   return (
// //     <div className="saved-reports-wrapper">

// //       {/* HEADER SECTION */}
// //       <div className="page-header fade-in">
// //         <h1>📁 Saved Reports</h1>
// //         <p>Your downloaded & saved astrology reports appear here.</p>
// //       </div>

// //       {/* LOADING */}
// //       {loading ? (
// //         <div className="loader-container fade-in">
// //           <div className="spinner"></div>
// //           <p>Fetching your reports...</p>
// //         </div>
// //       ) : reports.length === 0 ? (

// //         /* EMPTY STATE */
// //         <div className="empty-box fade-in">
// //           <img
// //             src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
// //             alt="empty"
// //             className="empty-img"
// //           />
// //           <h3>No Reports Found</h3>
// //           <p>You haven't saved any reports yet.</p>
// //         </div>

// //       ) : (

// //         /* REPORT GRID LIST */
// //         <div className="report-grid fade-in">
// //           {reports.map((r) => (
// //             <div className="report-card slide-up" key={r._id}>
              
// //               <div className="report-header">
// //                 <h3>{r.title}</h3>
// //                 <span className="status-tag">
// //                   {r.type || "general"}
// //                 </span>
// //               </div>

// //               <p className="report-type">
// //                 <strong>Type:</strong> {r.type || "Not defined"}
// //               </p>

// //               <p className="report-date">
// //                 <strong>Saved On:</strong> {new Date(r.createdAt).toLocaleDateString()}
// //               </p>

// //               {/* ACTIONS */}
// //               <div className="report-actions">
// //                 <button className="view-btn">View</button>
// //                 <button className="download-btn">Download</button>
// //               </div>

// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import "../../styles/SavedReports.css";
// import { UserReportAPI } from "../../api/apiService";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function SavedReports() {
//   const [user, setUser] = useState(null);
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate(); // ✅ BACK BUTTON NAVIGATION

//   // ✅ TOKEN SE USER FETCH
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return;

//         const res = await axios.get(
//           "https://astrobackend-5sr6.onrender.com/api/userweb/auth/me",
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         if (res.data.success) {
//           const u = res.data.user;
//           u._id = u._id || u.id;
//           setUser(u);
//           loadReports(u._id);
//         }
//       } catch (err) {
//         console.log("User fetch error:", err);
//       }
//     };

//     fetchUser();
//   }, []);

//   const loadReports = async (userId) => {
//     try {
//       setLoading(true);
//       const data = await UserReportAPI.getUserReports(userId);

//       if (data?.success) setReports(data.reports || []);
//     } catch (err) {
//       console.log("Report Load Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!user) return <h2 className="please-login">Please Login First</h2>;

//   return (
//     <div className="saved-reports-wrapper">

//       {/* 🔥 3D BACK BUTTON */}
//       <button
//         onClick={() => navigate("/")}
//         style={{
//           background: "linear-gradient(145deg, #ffcc33, #e6b800)",
//           border: "none",
//           borderRadius: "10px",
//           padding: "10px 18px",
//           marginBottom: "18px",
//           fontWeight: "600",
//           fontSize: "14px",
//           cursor: "pointer",
//           color: "#000",
//           boxShadow: "5px 5px 12px #bfa100, -5px -5px 12px #fff3b0",
//           transition: "0.2s",
//         }}
//         onMouseDown={(e) =>
//           (e.currentTarget.style.boxShadow =
//             "inset 4px 4px 8px #bfa100, inset -4px -4px 8px #fff3b0")
//         }
//         onMouseUp={(e) =>
//           (e.currentTarget.style.boxShadow =
//             "5px 5px 12px #bfa100, -5px -5px 12px #fff3b0")
//         }
//       >
//         ⬅ Back to Home
//       </button>

//       {/* HEADER SECTION */}
//       <div className="page-header fade-in">
//         <h1>📁 Saved Reports</h1>
//         <p>Your downloaded & saved astrology reports appear here.</p>
//       </div>

//       {/* LOADING */}
//       {loading ? (
//         <div className="loader-container fade-in">
//           <div className="spinner"></div>
//           <p>Fetching your reports...</p>
//         </div>
//       ) : reports.length === 0 ? (

//         /* EMPTY STATE */
//         <div className="empty-box fade-in">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
//             alt="empty"
//             className="empty-img"
//           />
//           <h3>No Reports Found</h3>
//           <p>You haven't saved any reports yet.</p>
//         </div>

//       ) : (

//         /* REPORT GRID LIST */
//         <div className="report-grid fade-in">
//           {reports.map((r) => (
//             <div className="report-card slide-up" key={r._id}>
              
//               <div className="report-header">
//                 <h3>{r.title}</h3>
//                 <span className="status-tag">
//                   {r.type || "general"}
//                 </span>
//               </div>

//               <p className="report-type">
//                 <strong>Type:</strong> {r.type || "Not defined"}
//               </p>

//               <p className="report-date">
//                 <strong>Saved On:</strong>{" "}
//                 {new Date(r.createdAt).toLocaleDateString()}
//               </p>

//               {/* ACTIONS */}
//               <div className="report-actions">
//                 <button className="view-btn">View</button>
//                 <button className="download-btn">Download</button>
//               </div>

//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "../../styles/SavedReports.css";
import { UserReportAPI } from "../../api/apiService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SavedReports() {
  const [user, setUser] = useState(null);
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  /* ⭐ STARFIELD */
  useEffect(() => {
    const container = document.querySelector(".mp-stars");
    if (container && container.childElementCount === 0) {
      for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.className = "mp-star";
        star.style.width = star.style.height = Math.random() * 3 + "px";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDuration = 2 + Math.random() * 3 + "s";
        container.appendChild(star);
      }
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.get(
          "https://astrobackend-5sr6.onrender.com/api/userweb/auth/me",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res.data.success) {
          const u = res.data.user;
          u._id = u._id || u.id;
          setUser(u);
          loadReports(u._id);
        }
      } catch (err) {
        console.log("User fetch error:", err);
      }
    };

    fetchUser();
  }, []);

  const loadReports = async (userId) => {
    try {
      setLoading(true);
      const data = await UserReportAPI.getUserReports(userId);
      if (data?.success) setReports(data.reports || []);
    } catch (err) {
      console.log("Report Load Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!user)
    return <h2 style={{ color: "#fff", textAlign: "center" }}>Please Login First</h2>;

  return (
    <>
      {/* ⭐ Stars Background */}
      <div className="mp-stars"></div>

      <div className="saved-cosmic-wrapper">

        {/* 🔥 New Premium Cosmic Back Button */}
        <button
        onClick={() => navigate(-1)}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 10,
          padding: "10px 18px",
          borderRadius: 30,
          border: "1px solid rgba(255,255,255,0.25)",
          background: "rgba(255,255,255,0.12)",
          backdropFilter: "blur(14px)",
          color: "#fff",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          boxShadow: "0 0 25px rgba(147,51,234,0.35)",
        }}
      >
         Back
      </button>

        {/* HEADER */}
        <div className="page-header cosmic-header">
          <h1>📁 Saved Reports</h1>
          <p>Your saved astrology reports appear here.</p>
        </div>

        {loading ? (
          <div className="loader-container fade-in">
            <div className="spinner"></div>
            <p>Fetching your reports...</p>
          </div>
        ) : reports.length === 0 ? (
          <div className="empty-box cosmic-glass fade-in">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
              alt="empty"
              className="empty-img"
            />
            <h3>No Reports Found</h3>
            <p>You haven't saved any reports yet.</p>
          </div>
        ) : (
          <div className="report-grid fade-in">
            {reports.map((r) => (
              <div className="report-card cosmic-glass slide-up" key={r._id}>
                
                <div className="report-header">
                  <h3>{r.title}</h3>
                  <span className="status-tag">{r.type || "general"}</span>
                </div>

                <p className="report-type">
                  <strong>Type:</strong> {r.type || "Not defined"}
                </p>

                <p className="report-date">
                  <strong>Saved On:</strong>{" "}
                  {new Date(r.createdAt).toLocaleDateString()}
                </p>

                <div className="report-actions">
                  <button className="view-btn">View</button>
                  <button className="download-btn">Download</button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
