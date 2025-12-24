
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API = "http://localhost:7000/api/remedy-journey";

// export default function UserRemedyJourney() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   const [remedies, setRemedies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const loadMyRemedies = async () => {
//     try {
//       setLoading(true);

//       const res = await axios.get(
//         `${API}/user-by-email/${user.email}`
//       );

//       setRemedies(res.data || []);
//     } catch (err) {
//       console.error("Load user remedies error", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user?.email) loadMyRemedies();
//   }, []);

//   const statusColor = {
//     ASSIGNED: "#9e9e9e",
//     IN_PROGRESS: "#ff9800",
//     COMPLETED: "#4caf50",
//     DROPPED: "#f44336",
//   };

//   if (!user) return <p>Please login</p>;

//   return (
//     <div style={{ padding: 20, maxWidth: 900, margin: "auto" }}>
//       <h2>🌿 My Remedy Journey</h2>
//       <p style={{ color: "#666" }}>
//         Remedies assigned by astrologer
//       </p>

//       {loading ? (
//         <p>Loading remedies...</p>
//       ) : remedies.length === 0 ? (
//         <p>No remedies assigned yet</p>
//       ) : (
//         remedies.map((r) => (
//           <div
//             key={r._id}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: 10,
//               padding: 16,
//               marginBottom: 12,
//               background: "#fafafa",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//               }}
//             >
//               <h3>{r.remedyName}</h3>

//               <span
//                 style={{
//                   background: statusColor[r.status],
//                   color: "#fff",
//                   padding: "4px 10px",
//                   borderRadius: 20,
//                   fontSize: 12,
//                 }}
//               >
//                 {r.status}
//               </span>
//             </div>

//             <p>
//               Remedy Type: <b>{r.remedyType}</b>
//             </p>

//             {r.status === "IN_PROGRESS" && (
//               <p style={{ color: "#ff9800" }}>
//                 ⏳ Remedy in progress
//               </p>
//             )}

//             {r.status === "COMPLETED" && (
//               <p style={{ color: "#4caf50" }}>
//                 ✅ Remedy completed
//               </p>
//             )}

//             {r.status === "DROPPED" && (
//               <p style={{ color: "#f44336" }}>
//                 ❌ Remedy dropped
//               </p>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/UserRemedyJourney.css";

const API = "http://localhost:7000/api/remedy-journey";

export default function UserRemedyJourney() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [remedies, setRemedies] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= LOAD USER REMEDIES ================= */
  const loadMyRemedies = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${API}/user-by-email/${user.email}`
      );
      setRemedies(res.data || []);
    } catch (err) {
      console.error("Load user remedies error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) loadMyRemedies();
  }, []);

  /* ================= STAR GENERATION ================= */
  useEffect(() => {
    const starfield = document.getElementById("starfield");
    if (starfield && !starfield.hasChildNodes()) {
      for (let i = 0; i < 140; i++) {
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

  const statusColor = {
    ASSIGNED: "#9e9e9e",
    IN_PROGRESS: "#ff9800",
    COMPLETED: "#4caf50",
    DROPPED: "#f44336",
  };

  if (!user) return <p>Please login</p>;

  return (
    <div className="remedy-bg">
      {/* ⭐ STARFIELD */}
      <div id="starfield" className="starfield"></div>

      {/* ⭐ FLOATING ORBS */}
      <div className="floating-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* ⬅ BACK BUTTON */}
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

      {/* ⭐ MAIN CONTENT */}
      <div
        style={{
          padding: "4rem 1.5rem",
          maxWidth: 900,
          margin: "auto",
          position: "relative",
          zIndex: 5,
        }}
      >
        <h2 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: 800 }}>
          🌿 My Remedy Journey
        </h2>

        <p style={{ color: "#ddd", marginBottom: "2rem" }}>
          Remedies assigned by astrologer
        </p>

        {loading ? (
          <p style={{ color: "#fff" }}>Loading remedies...</p>
        ) : remedies.length === 0 ? (
          <p style={{ color: "#fff" }}>No remedies assigned yet</p>
        ) : (
          remedies.map((r) => (
            <div
              key={r._id}
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 16,
                padding: 20,
                marginBottom: 18,
                boxShadow: "0 0 30px rgba(147,51,234,0.25)",
                color: "#fff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3 style={{ margin: 0 }}>{r.remedyName}</h3>

                <span
                  style={{
                    background: statusColor[r.status],
                    padding: "5px 14px",
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                >
                  {r.status}
                </span>
              </div>

              <p style={{ marginTop: 10 }}>
                Remedy Type: <b>{r.remedyType}</b>
              </p>

              {r.status === "IN_PROGRESS" && (
                <p style={{ color: "#ffb703" }}>
                  ⏳ Remedy is currently in progress
                </p>
              )}

              {r.status === "COMPLETED" && (
                <p style={{ color: "#4ade80" }}>
                  ✅ Remedy completed successfully
                </p>
              )}

              {r.status === "DROPPED" && (
                <p style={{ color: "#f87171" }}>
                  ❌ Remedy was discontinued
                </p>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
