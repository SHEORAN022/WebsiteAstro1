
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "../../styles/MyProfile.css";

// // const MyProfile = () => {
// //   const [image, setImage] = useState(null);
// //   const [user, setUser] = useState(null);
// //   const [editMode, setEditMode] = useState(false);
// //   const [form, setForm] = useState({});

// //   // ================================
// //   // LOAD LOGGED-IN USER
// //   // ================================
// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         if (!token) return;

// //         const res = await axios.get(
// //           "https://astrobackend-5sr6.onrender.com/api/userweb/auth/me",
// //           { headers: { Authorization: `Bearer ${token}` } }
// //         );

// //         if (res.data.success) {
// //           const u = res.data.user;

// //           // ⭐ FIX ID MISMATCH (id → _id)
// //           u._id = u._id || u.id;

// //           setUser(u);
// //         }
// //       } catch (error) {
// //         console.log("User fetch error:", error);
// //       }
// //     };

// //     fetchUser();
// //   }, []);

// //   // ================================
// //   // IMAGE UPLOAD PREVIEW
// //   // ================================
// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) setImage(URL.createObjectURL(file));
// //   };

// //   // ================================
// //   // UPDATE PROFILE
// //   // ================================
// //   const updateProfile = async () => {
// //     try {
// //       const token = localStorage.getItem("token");

// //       const res = await axios.put(
// //         `https://astrobackend-5sr6.onrender.com/api/userweb/profile/${user._id}`,
// //         form,
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );

// //       if (res.data.success) {
// //         alert("Profile Updated Successfully!");
// //         setUser(res.data.data); // Update UI
// //         setEditMode(false);
// //       }
// //     } catch (err) {
// //       console.log("Update error:", err);
// //       alert("Update failed");
// //     }
// //   };

// //   if (!user)
// //     return (
// //       <h2 style={{ textAlign: "center", marginTop: "50px" }}>
// //         Loading Profile...
// //       </h2>
// //     );

// //   return (
// //     <div className="mp-wrapper">
// //       {/* HEADER */}
// //       <div className="mp-header">
// //         <h1>My Profile</h1>
// //         <p>Manage your personal details</p>
// //       </div>

// //       {/* MAIN CONTENT */}
// //       <div className="mp-container">

// //         {/* LEFT: PROFILE CARD */}
// //         <div className="mp-card profile-card">

// //           {/* PROFILE IMAGE */}
// //           <div className="profile-img-box">
// //             <img
// //               src={
// //                 image ||
// //                 user?.profileImage ||
// //                 "https://cdn-icons-png.flaticon.com/512/149/149071.png"
// //               }
// //               alt="Profile"
// //               className="profile-avatar"
// //             />

// //             <label className="upload-btn">
// //               Change Photo
// //               <input type="file" accept="image/*" onChange={handleImageUpload} />
// //             </label>
// //           </div>

// //           {/* BASIC DETAILS */}
// //           <h2 className="mp-name">{user?.name || "No Name Added"}</h2>
// //           <p className="mp-email">{user?.email}</p>

// //           <div className="mp-info-list">
// //             <p><strong>Phone:</strong> {user?.phone || "Not Added"}</p>
// //             <p><strong>Gender:</strong> {user?.gender || "Not Added"}</p>
// //             <p><strong>Date of Birth:</strong> {user?.dob || "Not Added"}</p>
// //             <p><strong>Location:</strong> {user?.location || "Not Added"}</p>
// //           </div>

// //           <button
// //             className="mp-btn full"
// //             onClick={() => {
// //               setForm(user); 
// //               setEditMode(true);
// //             }}
// //           >
// //             Edit Profile
// //           </button>
// //         </div>
// //       </div>

// //       {/* EDIT PROFILE FORM */}
// //       {editMode && (
// //         <div className="mp-card" style={{ marginTop: "20px" }}>
// //           <h2>Edit Profile</h2>

// //           <div className="edit-grid">
// //             <label>Name</label>
// //             <input
// //               value={form.name || ""}
// //               onChange={(e) => setForm({ ...form, name: e.target.value })}
// //             />

// //             <label>Phone</label>
// //             <input
// //               value={form.phone || ""}
// //               onChange={(e) => setForm({ ...form, phone: e.target.value })}
// //             />

// //             <label>Gender</label>
// //             <select
// //               value={form.gender || ""}
// //               onChange={(e) => setForm({ ...form, gender: e.target.value })}
// //             >
// //               <option value="">Select</option>
// //               <option>Male</option>
// //               <option>Female</option>
// //               <option>Other</option>
// //             </select>

// //             <label>Date of Birth</label>
// //             <input
// //               type="date"
// //               value={form.dob || ""}
// //               onChange={(e) => setForm({ ...form, dob: e.target.value })}
// //             />

// //             <label>Location</label>
// //             <input
// //               value={form.location || ""}
// //               onChange={(e) => setForm({ ...form, location: e.target.value })}
// //             />
// //           </div>

// //           <button className="mp-btn" onClick={updateProfile}>
// //             Save Changes
// //           </button>

// //           <button
// //             className="mp-btn ghost"
// //             onClick={() => setEditMode(false)}
// //             style={{ marginLeft: "10px" }}
// //           >
// //             Cancel
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MyProfile;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../styles/MyProfile.css";
// import { useNavigate } from "react-router-dom";

// const MyProfile = () => {
//   const [image, setImage] = useState(null);
//   const [user, setUser] = useState(null);
//   const [editMode, setEditMode] = useState(false);
//   const [form, setForm] = useState({});

//   const navigate = useNavigate(); // ✅ BACK BUTTON NAVIGATION

//   // ================================
//   // LOAD LOGGED-IN USER
//   // ================================
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

//           // ⭐ FIX ID MISMATCH (id → _id)
//           u._id = u._id || u.id;

//           setUser(u);
//         }
//       } catch (error) {
//         console.log("User fetch error:", error);
//       }
//     };

//     fetchUser();
//   }, []);

//   // ================================
//   // IMAGE UPLOAD PREVIEW
//   // ================================
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) setImage(URL.createObjectURL(file));
//   };

//   // ================================
//   // UPDATE PROFILE
//   // ================================
//   const updateProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await axios.put(
//         `https://astrobackend-5sr6.onrender.com/api/userweb/profile/${user._id}`,
//         form,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (res.data.success) {
//         alert("Profile Updated Successfully!");
//         setUser(res.data.data); // Update UI
//         setEditMode(false);
//       }
//     } catch (err) {
//       console.log("Update error:", err);
//       alert("Update failed");
//     }
//   };

//   if (!user)
//     return (
//       <h2 style={{ textAlign: "center", marginTop: "50px" }}>
//         Loading Profile...
//       </h2>
//     );

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

//       {/* HEADER */}
//       <div className="mp-header">
//         <h1>My Profile</h1>
//         <p>Manage your personal details</p>
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="mp-container">

//         {/* LEFT: PROFILE CARD */}
//         <div className="mp-card profile-card">

//           {/* PROFILE IMAGE */}
//           <div className="profile-img-box">
//             <img
//               src={
//                 image ||
//                 user?.profileImage ||
//                 "https://cdn-icons-png.flaticon.com/512/149/149071.png"
//               }
//               alt="Profile"
//               className="profile-avatar"
//             />

//             <label className="upload-btn">
//               Change Photo
//               <input type="file" accept="image/*" onChange={handleImageUpload} />
//             </label>
//           </div>

//           {/* BASIC DETAILS */}
//           <h2 className="mp-name">{user?.name || "No Name Added"}</h2>
//           <p className="mp-email">{user?.email}</p>

//           <div className="mp-info-list">
//             <p><strong>Phone:</strong> {user?.phone || "Not Added"}</p>
//             <p><strong>Gender:</strong> {user?.gender || "Not Added"}</p>
//             <p><strong>Date of Birth:</strong> {user?.dob || "Not Added"}</p>
//             <p><strong>Location:</strong> {user?.location || "Not Added"}</p>
//           </div>

//           <button
//             className="mp-btn full"
//             onClick={() => {
//               setForm(user);
//               setEditMode(true);
//             }}
//           >
//             Edit Profile
//           </button>
//         </div>
//       </div>

//       {/* EDIT PROFILE FORM */}
//       {editMode && (
//         <div className="mp-card" style={{ marginTop: "20px" }}>
//           <h2>Edit Profile</h2>

//           <div className="edit-grid">
//             <label>Name</label>
//             <input
//               value={form.name || ""}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//             />

//             <label>Phone</label>
//             <input
//               value={form.phone || ""}
//               onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             />

//             <label>Gender</label>
//             <select
//               value={form.gender || ""}
//               onChange={(e) => setForm({ ...form, gender: e.target.value })}
//             >
//               <option value="">Select</option>
//               <option>Male</option>
//               <option>Female</option>
//               <option>Other</option>
//             </select>

//             <label>Date of Birth</label>
//             <input
//               type="date"
//               value={form.dob || ""}
//               onChange={(e) => setForm({ ...form, dob: e.target.value })}
//             />

//             <label>Location</label>
//             <input
//               value={form.location || ""}
//               onChange={(e) => setForm({ ...form, location: e.target.value })}
//             />
//           </div>

//           <button className="mp-btn" onClick={updateProfile}>
//             Save Changes
//           </button>

//           <button
//             className="mp-btn ghost"
//             onClick={() => setEditMode(false)}
//             style={{ marginLeft: "10px" }}
//           >
//             Cancel
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyProfile;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/MyProfile.css";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {

  /* ⭐ CREATE STARFIELD */
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

  const [image, setImage] = useState(null);
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({});

  const navigate = useNavigate();

  /* LOAD USER */
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
        }
      } catch (err) {
        console.log("User fetch error:", err);
      }
    };

    fetchUser();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const updateProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.put(
        `https://astrobackend-5sr6.onrender.com/api/userweb/profile/${user._id}`,
        form,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        alert("Profile Updated Successfully!");
        setUser(res.data.data);
        setEditMode(false);
      }
    } catch (err) {
      alert("Update failed");
    }
  };

  if (!user)
    return <h2 style={{ color: "#fff", textAlign: "center" }}>Loading...</h2>;

  return (
    <>
      {/* ⭐ STARS BACKGROUND */}
      <div className="mp-stars"></div>

      <div className="mp-page">

        {/* ✅ WALLET STYLE — FULLY WORKING BACK BUTTON */}
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
        <div className="mp-header">
          <h1>My Profile</h1>
          <p>Manage your personal information</p>
        </div>

        <div className="mp-grid">

          {/* LEFT CARD */}
          <div className="mp-card">
            <div className="profile-img-box">
              <img
                src={
                  image ||
                  user?.profileImage ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Profile"
                className="profile-avatar"
              />

              <label className="upload-btn">
                Change Photo
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </label>
            </div>

            <h2 className="mp-name">{user?.name}</h2>
            <p className="mp-email">{user?.email}</p>

            <div className="mp-info-list">
              <p><strong>Phone:</strong> {user?.phone || "Not Added"}</p>
              <p><strong>Gender:</strong> {user?.gender || "Not Added"}</p>
              <p><strong>Date of Birth:</strong> {user?.dob || "Not Added"}</p>
              <p><strong>Location:</strong> {user?.location || "Not Added"}</p>
            </div>

            <button
              className="mp-btn"
              onClick={() => {
                setForm(user);
                setEditMode(true);
              }}
            >
              Edit Profile
            </button>
          </div>

          {/* RIGHT EDIT FORM */}
          {editMode && (
            <div className="mp-card edit-card">
              <h2>Edit Profile</h2>

              <div className="edit-grid">

                <label>Name</label>
                <input
                  value={form.name || ""}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />

                <label>Phone</label>
                <input
                  value={form.phone || ""}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />

                <label>Gender</label>
                <select
                  value={form.gender || ""}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <label>Date of Birth</label>
                <input
                  type="date"
                  value={form.dob || ""}
                  onChange={(e) => setForm({ ...form, dob: e.target.value })}
                />

                <label>Location</label>
                <input
                  value={form.location || ""}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
              </div>

              <button className="mp-btn" onClick={updateProfile}>
                Save Changes
              </button>

              <button
                className="mp-btn ghost"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default MyProfile;
