// // import React, { useEffect, useState } from "react";
// // import "../../styles/Kundli.css";
// // import { KundliAPI } from "../../api/apiService";

// // const MyKundli = () => {
// //   const [kundli, setKundli] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [generating, setGenerating] = useState(false);
// //   const [editMode, setEditMode] = useState(false);

// //   const [form, setForm] = useState({
// //     fullName: "",
// //     dob: "",
// //     timeOfBirth: "",
// //     birthPlace: "",
// //   });

// //   // ======================
// //   // LOAD SAVED KUNDLI
// //   // ======================
// //   const loadKundli = async () => {
// //     try {
// //       const res = await KundliAPI.getAll();
// //       if (res && res.length > 0) {
// //         setKundli(res[0]);
// //       }
// //     } catch {
// //       console.log("Error loading kundli");
// //     }
// //     setLoading(false);
// //   };

// //   useEffect(() => {
// //     loadKundli();
// //   }, []);

// //   // ======================
// //   // GENERATE KUNDLI
// //   // ======================
// //   const generateKundli = async () => {
// //     if (!form.fullName || !form.dob || !form.timeOfBirth || !form.birthPlace) {
// //       alert("Fill all fields");
// //       return;
// //     }

// //     setGenerating(true);

// //     try {
// //       const payload = {
// //         name: form.fullName,
// //         dateOfBirth: form.dob,
// //         timeOfBirth: form.timeOfBirth,
// //         placeOfBirth: form.birthPlace,
// //       };

// //       await KundliAPI.calculate(payload); // auto saves
// //       await loadKundli();
// //       alert("Kundli Generated!");
// //     } catch {
// //       alert("Failed to generate kundli");
// //     }

// //     setGenerating(false);
// //   };

// //   // ======================
// //   // UPDATE BIRTH DETAILS + REGENERATE KUNDLI
// //   // ======================
// //   const updateBirthDetails = async () => {
// //     try {
// //       // 1) NEW PAYLOAD
// //       const payload = {
// //         name: form.fullName,
// //         dateOfBirth: form.dob,
// //         timeOfBirth: form.timeOfBirth,
// //         placeOfBirth: form.birthPlace,
// //       };

// //       // 2) UPDATE BIRTH DETAILS (DB)
// //       await KundliAPI.update(kundli._id, payload);

// //       // 3) RE-CALCULATE NEW KUNDLI (Auto saves)
// //       await KundliAPI.calculate(payload);

// //       // 4) LOAD FRESH KUNDLI
// //       await loadKundli();

// //       alert("Birth details updated & Kundli regenerated!");

// //       setEditMode(false);
// //     } catch (err) {
// //       console.log(err);
// //       alert("Failed to update Kundli");
// //     }
// //   };

// //   if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

// //   return (
// //     <div className="mp-wrapper">

// //       <div className="mp-header">
// //         <h1>My Kundli</h1>
// //         <p>Generate & view your complete birth chart</p>
// //       </div>

// //       {/* GENERATE FORM */}
// //       {!kundli && (
// //         <div className="mp-card" style={{ maxWidth: "600px", margin: "0 auto" }}>
// //           <h2>Generate Kundli</h2>

// //           <div className="edit-grid">
// //             <label>Full Name</label>
// //             <input
// //               value={form.fullName}
// //               onChange={(e) => setForm({ ...form, fullName: e.target.value })}
// //             />

// //             <label>Date of Birth</label>
// //             <input
// //               type="date"
// //               value={form.dob}
// //               onChange={(e) => setForm({ ...form, dob: e.target.value })}
// //             />

// //             <label>Time of Birth</label>
// //             <input
// //               type="time"
// //               value={form.timeOfBirth}
// //               onChange={(e) => setForm({ ...form, timeOfBirth: e.target.value })}
// //             />

// //             <label>Birth Place</label>
// //             <input
// //               value={form.birthPlace}
// //               onChange={(e) => setForm({ ...form, birthPlace: e.target.value })}
// //             />
// //           </div>

// //           <button className="mp-btn" onClick={generateKundli} disabled={generating}>
// //             {generating ? "Generating..." : "Generate Kundli"}
// //           </button>
// //         </div>
// //       )}

// //       {/* SHOW KUNDLI DETAILS */}
// //       {kundli && (
// //         <div className="mp-container">

// //           {/* Birth Details */}
// //           <div className="mp-card profile-card">
// //             <h2>Birth Details</h2>

// //             <p><strong>Name:</strong> {kundli.name}</p>
// //             <p><strong>Date:</strong> {kundli.dateOfBirth}</p>
// //             <p><strong>Time:</strong> {kundli.timeOfBirth}</p>
// //             <p><strong>Place:</strong> {kundli.placeOfBirth}</p>

// //             <button
// //               className="mp-btn full"
// //               onClick={() => {
// //                 setForm({
// //                   fullName: kundli.name,
// //                   dob: kundli.dateOfBirth,
// //                   timeOfBirth: kundli.timeOfBirth,
// //                   birthPlace: kundli.placeOfBirth,
// //                 });
// //                 setEditMode(true);
// //               }}
// //             >
// //               ✏️ Edit Birth Details
// //             </button>
// //           </div>

// //           {/* Zodiac */}
// //           <div className="mp-card astro-card">
// //             <h2>🌞 Zodiac Details</h2>

// //             <p><strong>Sun Sign:</strong> {kundli.kundliData?.sunSign}</p>
// //             <p><strong>Moon Sign:</strong> {kundli.kundliData?.moonSign}</p>
// //             <p><strong>Zodiac Sign:</strong> {kundli.kundliData?.zodiac || "-"}</p>
// //           </div>

// //           {/* Nakshatra */}
// //           <div className="mp-card astro-card">
// //             <h2>✨ Nakshatra Details</h2>

// //             <p><strong>Nakshatra:</strong> {kundli.kundliData?.nakshatra}</p>
// //             <p><strong>Nakshatra Lord:</strong> {kundli.kundliData?.nakshatraLord}</p>
// //           </div>

// //           {/* Mangal Dosha */}
// //           <div className="mp-card astro-card">
// //             <h2>🔥 Mangal Dosha</h2>

// //             <p><strong>Status:</strong> {kundli.kundliData?.mangalDosha?.hasDosha ? "Present" : "Not Present"}</p>
// //             <p><strong>Description:</strong> {kundli.kundliData?.mangalDosha?.description}</p>
// //           </div>

// //           {/* Yogas */}
// //           <div className="mp-card astro-card">
// //             <h2>🔯 Yogas in Kundli</h2>

// //             <p><strong>Major Yogas:</strong> {kundli.kundliData?.yogas?.major}</p>
// //             <p><strong>Chandra Yogas:</strong> {kundli.kundliData?.yogas?.chandra}</p>
// //             <p><strong>Soorya Yogas:</strong> {kundli.kundliData?.yogas?.soorya}</p>
// //             <p><strong>Inauspicious Yogas:</strong> {kundli.kundliData?.yogas?.inauspicious}</p>
// //           </div>

// //         </div>
// //       )}

// //       {/* EDIT FORM */}
// //       {editMode && (
// //         <div className="mp-card" style={{ marginTop: "20px" }}>
// //           <h2>Edit Birth Details</h2>

// //           <div className="edit-grid">
// //             <label>Full Name</label>
// //             <input
// //               value={form.fullName}
// //               onChange={(e) => setForm({ ...form, fullName: e.target.value })}
// //             />

// //             <label>Date of Birth</label>
// //             <input
// //               type="date"
// //               value={form.dob}
// //               onChange={(e) => setForm({ ...form, dob: e.target.value })}
// //             />

// //             <label>Time of Birth</label>
// //             <input
// //               type="time"
// //               value={form.timeOfBirth}
// //               onChange={(e) => setForm({ ...form, timeOfBirth: e.target.value })}
// //             />

// //             <label>Birth Place</label>
// //             <input
// //               value={form.birthPlace}
// //               onChange={(e) => setForm({ ...form, birthPlace: e.target.value })}
// //             />
// //           </div>

// //           <button className="mp-btn" onClick={updateBirthDetails}>
// //             Save Changes
// //           </button>

// //           <button
// //             className="mp-btn ghost"
// //             style={{ marginLeft: "10px" }}
// //             onClick={() => setEditMode(false)}
// //           >
// //             Cancel
// //           </button>
// //         </div>
// //       )}

// //     </div>
// //   );
// // };

// // export default MyKundli;

// import React, { useEffect, useState } from "react";
// import "../../styles/Kundli.css";
// import { KundliAPI } from "../../api/apiService";
// import { useNavigate } from "react-router-dom";

// const MyKundli = () => {
//   const [kundli, setKundli] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [generating, setGenerating] = useState(false);
//   const [editMode, setEditMode] = useState(false);

//   const navigate = useNavigate(); // ✅ BACK BUTTON

//   const [form, setForm] = useState({
//     fullName: "",
//     dob: "",
//     timeOfBirth: "",
//     birthPlace: "",
//   });

//   // ======================
//   // LOAD SAVED KUNDLI
//   // ======================
//   const loadKundli = async () => {
//     try {
//       const res = await KundliAPI.getAll();
//       if (res && res.length > 0) {
//         setKundli(res[0]);
//       }
//     } catch {
//       console.log("Error loading kundli");
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     loadKundli();
//   }, []);

//   // ======================
//   // GENERATE KUNDLI
//   // ======================
//   const generateKundli = async () => {
//     if (!form.fullName || !form.dob || !form.timeOfBirth || !form.birthPlace) {
//       alert("Fill all fields");
//       return;
//     }

//     setGenerating(true);

//     try {
//       const payload = {
//         name: form.fullName,
//         dateOfBirth: form.dob,
//         timeOfBirth: form.timeOfBirth,
//         placeOfBirth: form.birthPlace,
//       };

//       await KundliAPI.calculate(payload); // auto saves
//       await loadKundli();
//       alert("Kundli Generated!");
//     } catch {
//       alert("Failed to generate kundli");
//     }

//     setGenerating(false);
//   };

//   // ======================
//   // UPDATE BIRTH DETAILS + REGENERATE KUNDLI
//   // ======================
//   const updateBirthDetails = async () => {
//     try {
//       const payload = {
//         name: form.fullName,
//         dateOfBirth: form.dob,
//         timeOfBirth: form.timeOfBirth,
//         placeOfBirth: form.birthPlace,
//       };

//       await KundliAPI.update(kundli._id, payload);
//       await KundliAPI.calculate(payload);
//       await loadKundli();

//       alert("Birth details updated & Kundli regenerated!");
//       setEditMode(false);
//     } catch (err) {
//       console.log(err);
//       alert("Failed to update Kundli");
//     }
//   };

//   if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

//   return (
//     <div className="mp-wrapper">

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

//       <div className="mp-header">
//         <h1>My Kundli</h1>
//         <p>Generate & view your complete birth chart</p>
//       </div>

//       {/* GENERATE FORM */}
//       {!kundli && (
//         <div className="mp-card" style={{ maxWidth: "600px", margin: "0 auto" }}>
//           <h2>Generate Kundli</h2>

//           <div className="edit-grid">
//             <label>Full Name</label>
//             <input
//               value={form.fullName}
//               onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//             />

//             <label>Date of Birth</label>
//             <input
//               type="date"
//               value={form.dob}
//               onChange={(e) => setForm({ ...form, dob: e.target.value })}
//             />

//             <label>Time of Birth</label>
//             <input
//               type="time"
//               value={form.timeOfBirth}
//               onChange={(e) =>
//                 setForm({ ...form, timeOfBirth: e.target.value })
//               }
//             />

//             <label>Birth Place</label>
//             <input
//               value={form.birthPlace}
//               onChange={(e) =>
//                 setForm({ ...form, birthPlace: e.target.value })
//               }
//             />
//           </div>

//           <button
//             className="mp-btn"
//             onClick={generateKundli}
//             disabled={generating}
//           >
//             {generating ? "Generating..." : "Generate Kundli"}
//           </button>
//         </div>
//       )}

//       {/* SHOW KUNDLI DETAILS */}
//       {kundli && (
//         <div className="mp-container">

//           <div className="mp-card profile-card">
//             <h2>Birth Details</h2>

//             <p><strong>Name:</strong> {kundli.name}</p>
//             <p><strong>Date:</strong> {kundli.dateOfBirth}</p>
//             <p><strong>Time:</strong> {kundli.timeOfBirth}</p>
//             <p><strong>Place:</strong> {kundli.placeOfBirth}</p>

//             <button
//               className="mp-btn full"
//               onClick={() => {
//                 setForm({
//                   fullName: kundli.name,
//                   dob: kundli.dateOfBirth,
//                   timeOfBirth: kundli.timeOfBirth,
//                   birthPlace: kundli.placeOfBirth,
//                 });
//                 setEditMode(true);
//               }}
//             >
//               ✏️ Edit Birth Details
//             </button>
//           </div>

//           <div className="mp-card astro-card">
//             <h2>🌞 Zodiac Details</h2>
//             <p><strong>Sun Sign:</strong> {kundli.kundliData?.sunSign}</p>
//             <p><strong>Moon Sign:</strong> {kundli.kundliData?.moonSign}</p>
//             <p><strong>Zodiac Sign:</strong> {kundli.kundliData?.zodiac || "-"}</p>
//           </div>

//           <div className="mp-card astro-card">
//             <h2>✨ Nakshatra Details</h2>
//             <p><strong>Nakshatra:</strong> {kundli.kundliData?.nakshatra}</p>
//             <p><strong>Nakshatra Lord:</strong> {kundli.kundliData?.nakshatraLord}</p>
//           </div>

//           <div className="mp-card astro-card">
//             <h2>🔥 Mangal Dosha</h2>
//             <p>
//               <strong>Status:</strong>{" "}
//               {kundli.kundliData?.mangalDosha?.hasDosha ? "Present" : "Not Present"}
//             </p>
//             <p>
//               <strong>Description:</strong>{" "}
//               {kundli.kundliData?.mangalDosha?.description}
//             </p>
//           </div>

//           <div className="mp-card astro-card">
//             <h2>🔯 Yogas in Kundli</h2>
//             <p><strong>Major Yogas:</strong> {kundli.kundliData?.yogas?.major}</p>
//             <p><strong>Chandra Yogas:</strong> {kundli.kundliData?.yogas?.chandra}</p>
//             <p><strong>Soorya Yogas:</strong> {kundli.kundliData?.yogas?.soorya}</p>
//             <p>
//               <strong>Inauspicious Yogas:</strong>{" "}
//               {kundli.kundliData?.yogas?.inauspicious}
//             </p>
//           </div>
//         </div>
//       )}

//       {/* EDIT FORM */}
//       {editMode && (
//         <div className="mp-card" style={{ marginTop: "20px" }}>
//           <h2>Edit Birth Details</h2>

//           <div className="edit-grid">
//             <label>Full Name</label>
//             <input
//               value={form.fullName}
//               onChange={(e) => setForm({ ...form, fullName: e.target.value })}
//             />

//             <label>Date of Birth</label>
//             <input
//               type="date"
//               value={form.dob}
//               onChange={(e) => setForm({ ...form, dob: e.target.value })}
//             />

//             <label>Time of Birth</label>
//             <input
//               type="time"
//               value={form.timeOfBirth}
//               onChange={(e) =>
//                 setForm({ ...form, timeOfBirth: e.target.value })
//               }
//             />

//             <label>Birth Place</label>
//             <input
//               value={form.birthPlace}
//               onChange={(e) =>
//                 setForm({ ...form, birthPlace: e.target.value })
//               }
//             />
//           </div>

//           <button className="mp-btn" onClick={updateBirthDetails}>
//             Save Changes
//           </button>

//           <button
//             className="mp-btn ghost"
//             style={{ marginLeft: "10px" }}
//             onClick={() => setEditMode(false)}
//           >
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyKundli;


import React, { useEffect, useState } from "react";
import "../../styles/Kundli.css";
import { KundliAPI } from "../../api/apiService";
import { useNavigate } from "react-router-dom";

const MyKundli = () => {
  const [kundli, setKundli] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    dob: "",
    timeOfBirth: "",
    birthPlace: "",
  });

  /* ⭐ Create Starfield */
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

  // LOAD SAVED KUNDLI
  const loadKundli = async () => {
    try {
      const res = await KundliAPI.getAll();
      if (res && res.length > 0) setKundli(res[0]);
    } catch {
      console.log("Error loading kundli");
    }
    setLoading(false);
  };

  useEffect(() => {
    loadKundli();
  }, []);

  const generateKundli = async () => {
    if (!form.fullName || !form.dob || !form.timeOfBirth || !form.birthPlace) {
      alert("Fill all fields");
      return;
    }

    setGenerating(true);

    try {
      const payload = {
        name: form.fullName,
        dateOfBirth: form.dob,
        timeOfBirth: form.timeOfBirth,
        placeOfBirth: form.birthPlace,
      };

      await KundliAPI.calculate(payload);
      await loadKundli();
      alert("Kundli Generated!");
    } catch {
      alert("Failed to generate kundli");
    }

    setGenerating(false);
  };

  const updateBirthDetails = async () => {
    try {
      const payload = {
        name: form.fullName,
        dateOfBirth: form.dob,
        timeOfBirth: form.timeOfBirth,
        placeOfBirth: form.birthPlace,
      };

      await KundliAPI.update(kundli._id, payload);
      await KundliAPI.calculate(payload);
      await loadKundli();

      alert("Birth details updated & Kundli regenerated!");
      setEditMode(false);
    } catch {
      alert("Failed to update");
    }
  };

  if (loading) return <h2 className="loading-text">Loading...</h2>;

  return (
    <>
      <div className="mp-stars"></div>

      <div className="mp-kundli-page">
        {/* BACK BUTTON */}
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


        <div className="mp-header">
          <h1>My Kundli</h1>
          <p>Generate & view your complete birth chart</p>
        </div>

        {/* GENERATE SECTION */}
        {!kundli && (
          <div className="mp-card glass-card">
            <h2>Generate Kundli</h2>

            <div className="edit-grid">
              <label>Full Name</label>
              <input
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              />

              <label>Date of Birth</label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) => setForm({ ...form, dob: e.target.value })}
              />

              <label>Time of Birth</label>
              <input
                type="time"
                value={form.timeOfBirth}
                onChange={(e) =>
                  setForm({ ...form, timeOfBirth: e.target.value })
                }
              />

              <label>Birth Place</label>
              <input
                value={form.birthPlace}
                onChange={(e) =>
                  setForm({ ...form, birthPlace: e.target.value })
                }
              />
            </div>

            <button className="mp-btn" onClick={generateKundli}>
              {generating ? "Generating..." : "Generate Kundli"}
            </button>
          </div>
        )}

        {/* SHOW DATA */}
        {kundli && (
          <div className="mp-grid">
            <div className="mp-card glass-card">
              <h2>Birth Details</h2>
              <p><strong>Name:</strong> {kundli.name}</p>
              <p><strong>Date:</strong> {kundli.dateOfBirth}</p>
              <p><strong>Time:</strong> {kundli.timeOfBirth}</p>
              <p><strong>Place:</strong> {kundli.placeOfBirth}</p>

              <button
                className="mp-btn full"
                onClick={() => {
                  setForm({
                    fullName: kundli.name,
                    dob: kundli.dateOfBirth,
                    timeOfBirth: kundli.timeOfBirth,
                    birthPlace: kundli.placeOfBirth,
                  });
                  setEditMode(true);
                }}
              >
                Edit
              </button>
            </div>

            <div className="mp-card glass-card">
              <h2> Zodiac Details</h2>
              <p>Sun Sign: {kundli.kundliData?.sunSign}</p>
              <p>Moon Sign: {kundli.kundliData?.moonSign}</p>
              <p>Zodiac: {kundli.kundliData?.zodiac}</p>
            </div>

            <div className="mp-card glass-card">
              <h2> Nakshatra</h2>
              <p>Nakshatra: {kundli.kundliData?.nakshatra}</p>
              <p>Lord: {kundli.kundliData?.nakshatraLord}</p>
            </div>

            <div className="mp-card glass-card">
              <h2> Mangal Dosha</h2>
              <p>
                Status:{" "}
                {kundli.kundliData?.mangalDosha?.hasDosha
                  ? "Present"
                  : "Not Present"}
              </p>
              <p>Description: {kundli.kundliData?.mangalDosha?.description}</p>
            </div>
          </div>
        )}

        {editMode && (
          <div className="mp-card glass-card">
            <h2>Edit Birth Details</h2>

            <div className="edit-grid">
              <label>Full Name</label>
              <input
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              />

              <label>Date of Birth</label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) => setForm({ ...form, dob: e.target.value })}
              />

              <label>Time of Birth</label>
              <input
                type="time"
                value={form.timeOfBirth}
                onChange={(e) =>
                  setForm({ ...form, timeOfBirth: e.target.value })
                }
              />

              <label>Birth Place</label>
              <input
                value={form.birthPlace}
                onChange={(e) =>
                  setForm({ ...form, birthPlace: e.target.value })
                }
              />
            </div>

            <button className="mp-btn" onClick={updateBirthDetails}>
              Save Changes
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MyKundli;
