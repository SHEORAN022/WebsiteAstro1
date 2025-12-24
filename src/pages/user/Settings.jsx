// // // // import React, { useEffect, useState } from "react";
// // // // import "../../styles/Settings.css";

// // // // export default function Settings() {
// // // //   const [user, setUser] = useState(null);

// // // //   useEffect(() => {
// // // //     const u = JSON.parse(localStorage.getItem("user"));
// // // //     if (u) setUser(u);
// // // //   }, []);

// // // //   if (!user)
// // // //     return <h2 className="please-login">Please Login First</h2>;

// // // //   return (
// // // //     <div className="settings-wrapper">

// // // //       <div className="settings-header">
// // // //         <h1>⚙️ Settings</h1>
// // // //         <p>Manage your account, privacy & app preferences</p>
// // // //       </div>

// // // //       <div className="settings-section">
// // // //         <h2>👤 Account</h2>

// // // //         <div className="settings-item">
// // // //           <span>Name</span>
// // // //           <strong>{user.fullName || "Not Set"}</strong>
// // // //         </div>

// // // //         <div className="settings-item">
// // // //           <span>Email</span>
// // // //           <strong>{user.email || "Not Set"}</strong>
// // // //         </div>

// // // //         <div className="settings-item">
// // // //           <span>Phone</span>
// // // //           <strong>{user.phone || "Not Set"}</strong>
// // // //         </div>

// // // //       </div>

// // // //       <div className="settings-section">
// // // //         <h2>🔐 Security</h2>

// // // //         <button className="settings-btn">Change Password</button>
// // // //         <button className="settings-btn">Two-Factor Authentication</button>
// // // //       </div>

// // // //       <div className="settings-section">
// // // //         <h2>🎨 App Preferences</h2>

// // // //         <div className="toggle-item">
// // // //           <span>Dark Mode</span>
// // // //           <label className="switch">
// // // //             <input type="checkbox" />
// // // //             <span className="slider"></span>
// // // //           </label>
// // // //         </div>

// // // //         <div className="toggle-item">
// // // //           <span>Notifications</span>
// // // //           <label className="switch">
// // // //             <input type="checkbox" defaultChecked />
// // // //             <span className="slider"></span>
// // // //           </label>
// // // //         </div>
// // // //       </div>

// // // //       <div className="settings-section danger-zone">
// // // //         <h2>⚠️ Danger Zone</h2>
// // // //         <button className="delete-btn">Delete Account</button>
// // // //         <button
// // // //           className="logout-btn"
// // // //           onClick={() => {
// // // //             localStorage.clear();
// // // //             window.location.href = "/auth";
// // // //           }}
// // // //         >
// // // //           Logout
// // // //         </button>
// // // //       </div>

// // // //     </div>
// // // //   );
// // // // }

// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import "../../styles/Settings.css";

// // // // export default function Settings() {
// // // //   const [user, setUser] = useState(null);
// // // //   const [password, setPassword] = useState({ old: "", new: "" });
// // // //   const [notif, setNotif] = useState(true);

// // // //   // ============================
// // // //   // FETCH USER DETAILS
// // // //   // ============================
// // // //   useEffect(() => {
// // // //     const fetchUser = async () => {
// // // //       try {
// // // //         const token = localStorage.getItem("token");
// // // //         if (!token) return;

// // // //         const res = await axios.get(
// // // //           "https://astrobackend-5sr6.onrender.com/api/userweb/auth/me",
// // // //           { headers: { Authorization: `Bearer ${token}` } }
// // // //         );

// // // //         if (res.data.success) {
// // // //           const u = res.data.user;
// // // //           u._id = u._id || u.id;
// // // //           setUser(u);
// // // //         }
// // // //       } catch (err) {
// // // //         console.log("User fetch error:", err);
// // // //       }
// // // //     };

// // // //     fetchUser();
// // // //   }, []);

// // // //   // ============================
// // // //   // CHANGE PASSWORD
// // // //   // ============================
// // // //   const changePassword = async () => {
// // // //     try {
// // // //       const token = localStorage.getItem("token");
// // // //       const res = await axios.put(
// // // //         `https://astrobackend-5sr6.onrender.com/api/userweb/change-password/${user._id}`,
// // // //         password,
// // // //         { headers: { Authorization: `Bearer ${token}` } }
// // // //       );

// // // //       if (res.data.success) {
// // // //         alert("Password Updated Successfully!");
// // // //         setPassword({ old: "", new: "" });
// // // //       }
// // // //     } catch (err) {
// // // //       alert("Wrong Old Password or Error!");
// // // //     }
// // // //   };

// // // //   // ============================
// // // //   // DELETE ACCOUNT
// // // //   // ============================
// // // //   const deleteAccount = async () => {
// // // //     if (!window.confirm("Are you sure? This action cannot be undone.")) return;

// // // //     try {
// // // //       const token = localStorage.getItem("token");

// // // //       await axios.delete(
// // // //         `https://astrobackend-5sr6.onrender.com/api/userweb/delete/${user._id}`,
// // // //         { headers: { Authorization: `Bearer ${token}` } }
// // // //       );

// // // //       alert("Account deleted successfully!");
// // // //       localStorage.clear();
// // // //       window.location.href = "/auth";
// // // //     } catch (err) {
// // // //       alert("Failed to delete account!");
// // // //     }
// // // //   };

// // // //   // ============================
// // // //   // LOGOUT
// // // //   // ============================
// // // //   const logout = () => {
// // // //     localStorage.clear();
// // // //     window.location.href = "/auth";
// // // //   };

// // // //   if (!user)
// // // //     return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;

// // // //   return (
// // // //     <div className="settings-wrapper">

// // // //       {/* HEADER */}
// // // //       <div className="settings-header">
// // // //         <h1>⚙️ Settings</h1>
// // // //         <p>Manage your account preferences</p>
// // // //       </div>

// // // //       {/* MAIN GRID */}
// // // //       <div className="settings-grid">

// // // //         {/* Account Section */}
// // // //         <div className="settings-card">
// // // //           <h2>👤 Account</h2>

// // // //           <div className="setting-row">
// // // //             <span>Name</span>
// // // //             <strong>{user.name}</strong>
// // // //           </div>

// // // //           <div className="setting-row">
// // // //             <span>Email</span>
// // // //             <strong>{user.email}</strong>
// // // //           </div>

// // // //           <div className="setting-row">
// // // //             <span>Phone</span>
// // // //             <strong>{user.phone || "Not added"}</strong>
// // // //           </div>

// // // //         </div>

// // // //         {/* Password Section */}
// // // //         <div className="settings-card">
// // // //           <h2>🔑 Change Password</h2>

// // // //           <input
// // // //             type="password"
// // // //             placeholder="Old Password"
// // // //             value={password.old}
// // // //             onChange={(e) =>
// // // //               setPassword({ ...password, old: e.target.value })
// // // //             }
// // // //           />

// // // //           <input
// // // //             type="password"
// // // //             placeholder="New Password"
// // // //             value={password.new}
// // // //             onChange={(e) =>
// // // //               setPassword({ ...password, new: e.target.value })
// // // //             }
// // // //           />

// // // //           <button className="save-btn" onClick={changePassword}>
// // // //             Update Password
// // // //           </button>
// // // //         </div>

// // // //         {/* Notifications */}
// // // //         <div className="settings-card">
// // // //           <h2>🔔 Notifications</h2>

// // // //           <div className="toggle-row">
// // // //             <span>Receive Notifications</span>
// // // //             <label className="switch">
// // // //               <input
// // // //                 type="checkbox"
// // // //                 checked={notif}
// // // //                 onChange={() => setNotif(!notif)}
// // // //               />
// // // //               <span className="slider"></span>
// // // //             </label>
// // // //           </div>
// // // //         </div>

// // // //         {/* Danger Zone */}
// // // //         <div className="settings-card danger-zone">
// // // //           <h2>⚠️ Danger Zone</h2>

// // // //           <button className="delete-btn" onClick={deleteAccount}>
// // // //             Delete My Account
// // // //           </button>

// // // //           <button className="logout-btn" onClick={logout}>
// // // //             Logout
// // // //           </button>
// // // //         </div>

// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import "../../styles/Settings.css";
// // // import { User, Lock, Bell, Trash2, LogOut } from "lucide-react";

// // // export default function Settings() {
// // //   const [user, setUser] = useState(null);
// // //   const [password, setPassword] = useState({ old: "", new: "" });
// // //   const [notif, setNotif] = useState(true);

// // //   // ============================
// // //   // FETCH USER DETAILS
// // //   // ============================
// // //   useEffect(() => {
// // //     const fetchUser = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         if (!token) return;

// // //         const res = await axios.get(
// // //           "https://astrobackend-5sr6.onrender.com/api/userweb/auth/me",
// // //           { headers: { Authorization: `Bearer ${token}` } }
// // //         );

// // //         if (res.data.success) {
// // //           const u = res.data.user;
// // //           u._id = u._id || u.id;
// // //           setUser(u);
// // //         }
// // //       } catch (err) {
// // //         console.log("User fetch error:", err);
// // //       }
// // //     };

// // //     fetchUser();
// // //   }, []);

// // //   // ============================
// // //   // CHANGE PASSWORD
// // //   // ============================
// // //   const changePassword = async () => {
// // //     try {
// // //       const token = localStorage.getItem("token");

// // //       const res = await axios.put(
// // //         `https://astrobackend-5sr6.onrender.com/api/userweb/change-password/${user._id}`,
// // //         password,
// // //         { headers: { Authorization: `Bearer ${token}` } }
// // //       );

// // //       if (res.data.success) {
// // //         alert("Password Updated Successfully!");
// // //         setPassword({ old: "", new: "" });
// // //       }
// // //     } catch (err) {
// // //       alert("Wrong Old Password or Error!");
// // //     }
// // //   };

// // //   // ============================
// // //   // DELETE ACCOUNT
// // //   // ============================
// // //   const deleteAccount = async () => {
// // //     if (!window.confirm("⚠️ Are you absolutely sure? This cannot be undone.")) return;

// // //     try {
// // //       const token = localStorage.getItem("token");

// // //       await axios.delete(
// // //         `https://astrobackend-5sr6.onrender.com/api/userweb/delete/${user._id}`,
// // //         { headers: { Authorization: `Bearer ${token}` } }
// // //       );

// // //       alert("Account deleted successfully!");
// // //       localStorage.clear();
// // //       window.location.href = "/auth";
// // //     } catch (err) {
// // //       alert("Failed to delete account!");
// // //     }
// // //   };

// // //   // ============================
// // //   // LOGOUT
// // //   // ============================
// // //   const logout = () => {
// // //     localStorage.clear();
// // //     window.location.href = "/auth";
// // //   };

// // //   if (!user)
// // //     return <h2 className="loading-text">Loading...</h2>;

// // //   return (
// // //     <div className="settings-wrapper">

// // //       {/* HEADER */}
// // //       <div className="settings-header">
// // //         <h1>⚙️ Account Settings</h1>
// // //         <p>Manage your profile, password & privacy</p>
// // //       </div>

// // //       {/* MAIN GRID */}
// // //       <div className="settings-grid">

// // //         {/* Account Section */}
// // //         <div className="settings-card">
// // //           <div className="card-title">
// // //             <User size={18} />
// // //             <h2>Account Information</h2>
// // //           </div>

// // //           <div className="setting-row">
// // //             <span>Name</span>
// // //             <strong>{user.name}</strong>
// // //           </div>

// // //           <div className="setting-row">
// // //             <span>Email</span>
// // //             <strong>{user.email}</strong>
// // //           </div>

// // //           <div className="setting-row">
// // //             <span>Phone</span>
// // //             <strong>{user.phone || "Not added"}</strong>
// // //           </div>
// // //         </div>

// // //         {/* Password Section */}
// // //         <div className="settings-card">
// // //           <div className="card-title">
// // //             <Lock size={18} />
// // //             <h2>Change Password</h2>
// // //           </div>

// // //           <input
// // //             type="password"
// // //             placeholder="Old Password"
// // //             value={password.old}
// // //             onChange={(e) =>
// // //               setPassword({ ...password, old: e.target.value })
// // //             }
// // //           />

// // //           <input
// // //             type="password"
// // //             placeholder="New Password"
// // //             value={password.new}
// // //             onChange={(e) =>
// // //               setPassword({ ...password, new: e.target.value })
// // //             }
// // //           />

// // //           <button className="save-btn" onClick={changePassword}>
// // //             Update Password
// // //           </button>
// // //         </div>

// // //         {/* Notifications */}
// // //         <div className="settings-card">
// // //           <div className="card-title">
// // //             <Bell size={18} />
// // //             <h2>Notifications</h2>
// // //           </div>

// // //           <div className="toggle-row">
// // //             <span>Receive Notifications</span>
// // //             <label className="switch">
// // //               <input
// // //                 type="checkbox"
// // //                 checked={notif}
// // //                 onChange={() => setNotif(!notif)}
// // //               />
// // //               <span className="slider"></span>
// // //             </label>
// // //           </div>
// // //         </div>

// // //         {/* Danger Zone */}
// // //         <div className="settings-card danger-zone">
// // //           <div className="card-title">
// // //             <Trash2 size={18} color="red" />
// // //             <h2>Danger Zone</h2>
// // //           </div>

// // //           <button className="delete-btn" onClick={deleteAccount}>
// // //             <Trash2 size={16} /> Delete My Account
// // //           </button>

// // //           <button className="logout-btn" onClick={logout}>
// // //             <LogOut size={16} /> Logout
// // //           </button>
// // //         </div>

// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React, { useEffect, useState } from "react";
// // import "../../styles/Settings.css";
// // import axios from "axios";
// // import { motion } from "framer-motion";
// // import { Sun, Moon, Smartphone, ShieldCheck, Activity } from "lucide-react";

// // export default function Settings() {
// //   const [user, setUser] = useState(null);
// //   const [dark, setDark] = useState(false);
// //   const [password, setPassword] = useState({ old: "", new: "" });
// //   const [notif, setNotif] = useState(true);
// //   const [deviceLogs, setDeviceLogs] = useState([]);
// //   const [activityLogs, setActivityLogs] = useState([]);
// //   const [twoStepEnabled, setTwoStepEnabled] = useState(false);

// //   // ==========================
// //   // FETCH USER DATA
// //   // ==========================
// //   useEffect(() => {
// //     fetchUser();
// //     fetchDeviceLogs();
// //     fetchActivityLogs();
// //   }, []);

// //   const fetchUser = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await axios.get(
// //         "https://astrobackend-5sr6.onrender.com/api/userweb/auth/me",
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );

// //       if (res.data.success) {
// //         const u = res.data.user;
// //         setUser(u);
// //       }
// //     } catch (err) {}
// //   };

// //   // ==========================
// //   // DEVICE LOGIN HISTORY
// //   // ==========================
// //   const fetchDeviceLogs = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await axios.get(
// //         "https://astrobackend-5sr6.onrender.com/api/userweb/devices",
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );

// //       setDeviceLogs(res.data.logs || []);
// //     } catch (e) {}
// //   };

// //   // ==========================
// //   // ACCOUNT ACTIVITY LOGS
// //   // ==========================
// //   const fetchActivityLogs = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       const res = await axios.get(
// //         "https://astrobackend-5sr6.onrender.com/api/userweb/activity",
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );

// //       setActivityLogs(res.data.logs || []);
// //     } catch (e) {}
// //   };

// //   // ==========================
// //   // CHANGE PASSWORD
// //   // ==========================
// //   const changePassword = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       await axios.put(
// //         `https://astrobackend-5sr6.onrender.com/api/userweb/change-password/${user._id}`,
// //         password,
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       alert("Password Updated Successfully!");
// //       setPassword({ old: "", new: "" });
// //     } catch (err) {
// //       alert("Error updating password!");
// //     }
// //   };

// //   // ==========================
// //   // TWO STEP VERIFICATION
// //   // ==========================
// //   const toggleTwoStep = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       await axios.put(
// //         `https://astrobackend-5sr6.onrender.com/api/userweb/two-step/${user._id}`,
// //         { enabled: !twoStepEnabled },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       setTwoStepEnabled(!twoStepEnabled);
// //     } catch (e) {}
// //   };

// //   // ==========================
// //   // LOGOUT & DELETE ACCOUNT
// //   // ==========================
// //   const logout = () => {
// //     localStorage.clear();
// //     window.location.href = "/auth";
// //   };

// //   const deleteAccount = async () => {
// //     if (!window.confirm("Are you sure? This action is permanent!")) return;

// //     try {
// //       const token = localStorage.getItem("token");
// //       await axios.delete(
// //         `https://astrobackend-5sr6.onrender.com/api/userweb/delete/${user._id}`,
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       alert("Account Deleted");
// //       logout();
// //     } catch (e) {}
// //   };

// //   if (!user)
// //     return <h2 className="loading">Loading Settings...</h2>;

// //   return (
// //     <motion.div
// //       className={`settings-wrapper ${dark ? "dark-mode" : ""}`}
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //     >
// //       {/* HEADER */}
// //       <div className="settings-header">
// //         <h1>⚙️ Settings</h1>
// //         <p>Manage account preferences & security</p>

// //         <button className="theme-btn" onClick={() => setDark(!dark)}>
// //           {dark ? <Sun size={20} /> : <Moon size={20} />}
// //         </button>
// //       </div>

// //       <div className="settings-grid">
// //         {/* ACCOUNT CARD */}
// //         <motion.div className="settings-card" whileHover={{ scale: 1.02 }}>
// //           <h2>👤 Account Information</h2>
// //           <p><strong>Name:</strong> {user.name}</p>
// //           <p><strong>Email:</strong> {user.email}</p>
// //           <p><strong>Phone:</strong> {user.phone || "Not added"}</p>
// //         </motion.div>

// //         {/* PASSWORD CARD */}
// //         <motion.div className="settings-card" whileHover={{ scale: 1.02 }}>
// //           <h2>🔑 Change Password</h2>
// //           <input
// //             type="password"
// //             placeholder="Old Password"
// //             value={password.old}
// //             onChange={(e) => setPassword({ ...password, old: e.target.value })}
// //           />
// //           <input
// //             type="password"
// //             placeholder="New Password"
// //             value={password.new}
// //             onChange={(e) => setPassword({ ...password, new: e.target.value })}
// //           />
// //           <button className="save-btn" onClick={changePassword}>
// //             Update Password
// //           </button>
// //         </motion.div>

// //         {/* TWO STEP VERIFICATION */}
// //         {/* <motion.div className="settings-card" whileHover={{ scale: 1.02 }}>
// //           <h2>🔐 Two-Step Verification</h2>

// //           <div className="toggle-row">
// //             <span>Enable 2-Step Login</span>
// //             <label className="switch">
// //               <input type="checkbox" checked={twoStepEnabled} onChange={toggleTwoStep} />
// //               <span className="slider"></span>
// //             </label>
// //           </div>
// //         </motion.div> */}

// //         {/* DEVICE HISTORY */}
// //         <motion.div className="settings-card" whileHover={{ scale: 1.02 }}>
// //           <h2>📱 Login Devices</h2>
// //           {deviceLogs.length === 0 ? <p>No devices found.</p> : null}

// //           {deviceLogs.map((d, i) => (
// //             <div className="log-row" key={i}>
// //               <Smartphone size={18} />
// //               <span>{d.device}</span>
// //               <small>{new Date(d.time).toLocaleString()}</small>
// //             </div>
// //           ))}
// //         </motion.div>

// //         {/* ACTIVITY LOGS */}
// //         <motion.div className="settings-card" whileHover={{ scale: 1.02 }}>
// //           <h2>📊 Account Activity</h2>

// //           {activityLogs.length === 0 ? <p>No activity found.</p> : null}

// //           {activityLogs.map((log, i) => (
// //             <div className="log-row" key={i}>
// //               <Activity size={18} />
// //               <span>{log.action}</span>
// //               <small>{new Date(log.time).toLocaleString()}</small>
// //             </div>
// //           ))}
// //         </motion.div>

// //         {/* DANGER ZONE */}
// //         <motion.div className="settings-card danger" whileHover={{ scale: 1.02 }}>
// //           <h2>⚠️ Danger Zone</h2>
// //           <button className="delete-btn" onClick={deleteAccount}>
// //             Delete Account
// //           </button>
// //           <button className="logout-btn" onClick={logout}>
// //             Logout
// //           </button>
// //         </motion.div>
// //       </div>
// //     </motion.div>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import "../../styles/Settings.css";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Sun, Moon, Smartphone, ShieldCheck, Activity } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function Settings() {
//   const [user, setUser] = useState(null);
//   const [dark, setDark] = useState(false);
//   const [password, setPassword] = useState({ old: "", new: "" });
//   const [notif, setNotif] = useState(true);
//   const [deviceLogs, setDeviceLogs] = useState([]);
//   const [activityLogs, setActivityLogs] = useState([]);
//   const [twoStepEnabled, setTwoStepEnabled] = useState(false);

//   const navigate = useNavigate(); // ✅ BACK BUTTON

//   // ==========================
//   // FETCH USER DATA
//   // ==========================
//   useEffect(() => {
//     fetchUser();
//     fetchDeviceLogs();
//     fetchActivityLogs();
//   }, []);

//   const fetchUser = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get(
//         "https://astrobackend-5sr6.onrender.com/api/userweb/auth/me",
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (res.data.success) {
//         const u = res.data.user;
//         setUser(u);
//       }
//     } catch (err) {}
//   };

//   // ==========================
//   // DEVICE LOGIN HISTORY
//   // ==========================
//   const fetchDeviceLogs = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get(
//         "https://astrobackend-5sr6.onrender.com/api/userweb/devices",
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setDeviceLogs(res.data.logs || []);
//     } catch (e) {}
//   };

//   // ==========================
//   // ACCOUNT ACTIVITY LOGS
//   // ==========================
//   const fetchActivityLogs = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get(
//         "https://astrobackend-5sr6.onrender.com/api/userweb/activity",
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setActivityLogs(res.data.logs || []);
//     } catch (e) {}
//   };

//   // ==========================
//   // CHANGE PASSWORD
//   // ==========================
//   const changePassword = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(
//         `https://astrobackend-5sr6.onrender.com/api/userweb/change-password/${user._id}`,
//         password,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert("Password Updated Successfully!");
//       setPassword({ old: "", new: "" });
//     } catch (err) {
//       alert("Error updating password!");
//     }
//   };

//   // ==========================
//   // TWO STEP VERIFICATION
//   // ==========================
//   const toggleTwoStep = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.put(
//         `https://astrobackend-5sr6.onrender.com/api/userweb/two-step/${user._id}`,
//         { enabled: !twoStepEnabled },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setTwoStepEnabled(!twoStepEnabled);
//     } catch (e) {}
//   };

//   // ==========================
//   // LOGOUT & DELETE ACCOUNT
//   // ==========================
//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/auth";
//   };

//   const deleteAccount = async () => {
//     if (!window.confirm("Are you sure? This action is permanent!")) return;

//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete(
//         `https://astrobackend-5sr6.onrender.com/api/userweb/delete/${user._id}`,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       alert("Account Deleted");
//       logout();
//     } catch (e) {}
//   };

//   if (!user)
//     return <h2 className="loading">Loading Settings...</h2>;

//   return (
//     <motion.div
//       className={`settings-wrapper ${dark ? "dark-mode" : ""}`}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//     >
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
//       <div className="settings-header">
//         <h1>⚙️ Settings</h1>
//         <p>Manage account preferences & security</p>

//         <button className="theme-btn" onClick={() => setDark(!dark)}>
//           {dark ? <Sun size={20} /> : <Moon size={20} />}
//         </button>
//       </div>

//       <div className="settings-grid">
//         {/* ACCOUNT CARD */}
//         <motion.div className="settings-card" whileHover={{ scale: 1.02 }}>
//           <h2>👤 Account Information</h2>
//           <p><strong>Name:</strong> {user.name}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Phone:</strong> {user.phone || "Not added"}</p>
//         </motion.div>

//         {/* PASSWORD CARD */}
//         <motion.div className="settings-card" whileHover={{ scale: 1.02 }}>
//           <h2>🔑 Change Password</h2>
//           <input
//             type="password"
//             placeholder="Old Password"
//             value={password.old}
//             onChange={(e) => setPassword({ ...password, old: e.target.value })}
//           />
//           <input
//             type="password"
//             placeholder="New Password"
//             value={password.new}
//             onChange={(e) => setPassword({ ...password, new: e.target.value })}
//           />
//           <button className="save-btn" onClick={changePassword}>
//             Update Password
//           </button>
//         </motion.div>

//         {/* DEVICE HISTORY */}
//         <motion.div className="settings-card" whileHover={{ scale: 1.02 }}>
//           <h2>📱 Login Devices</h2>
//           {deviceLogs.length === 0 ? <p>No devices found.</p> : null}

//           {deviceLogs.map((d, i) => (
//             <div className="log-row" key={i}>
//               <Smartphone size={18} />
//               <span>{d.device}</span>
//               <small>{new Date(d.time).toLocaleString()}</small>
//             </div>
//           ))}
//         </motion.div>

//         {/* ACTIVITY LOGS */}
//         <motion.div className="settings-card" whileHover={{ scale: 1.02 }}>
//           <h2>📊 Account Activity</h2>

//           {activityLogs.length === 0 ? <p>No activity found.</p> : null}

//           {activityLogs.map((log, i) => (
//             <div className="log-row" key={i}>
//               <Activity size={18} />
//               <span>{log.action}</span>
//               <small>{new Date(log.time).toLocaleString()}</small>
//             </div>
//           ))}
//         </motion.div>

//         {/* DANGER ZONE */}
//         <motion.div className="settings-card danger" whileHover={{ scale: 1.02 }}>
//           <h2>⚠️ Danger Zone</h2>
//           <button className="delete-btn" onClick={deleteAccount}>
//             Delete Account
//           </button>
//           <button className="logout-btn" onClick={logout}>
//             Logout
//           </button>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// }


import React, { useEffect, useState } from "react";
import "../../styles/Settings.css";
import axios from "axios";
import { motion } from "framer-motion";
import { Sun, Moon, Smartphone, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const [user, setUser] = useState(null);
  const [dark, setDark] = useState(false);
  const [password, setPassword] = useState({ old: "", new: "" });
  const [notif, setNotif] = useState(true);
  const [deviceLogs, setDeviceLogs] = useState([]);
  const [activityLogs, setActivityLogs] = useState([]);

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
    fetchUser();
    fetchDeviceLogs();
    fetchActivityLogs();
  }, []);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://astrobackend-5sr6.onrender.com/api/userweb/auth/me",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        setUser(res.data.user);
      }
    } catch {}
  };

  const fetchDeviceLogs = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://astrobackend-5sr6.onrender.com/api/userweb/devices",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setDeviceLogs(res.data.logs || []);
    } catch {}
  };

  const fetchActivityLogs = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://astrobackend-5sr6.onrender.com/api/userweb/activity",
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setActivityLogs(res.data.logs || []);
    } catch {}
  };

  const changePassword = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `https://astrobackend-5sr6.onrender.com/api/userweb/change-password/${user._id}`,
        password,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Password Updated!");
      setPassword({ old: "", new: "" });
    } catch {
      alert("Password update failed!");
    }
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/auth";
  };

  const deleteAccount = async () => {
    if (!window.confirm("Are you sure? This cannot be undone!")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://astrobackend-5sr6.onrender.com/api/userweb/delete/${user._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Account Deleted");
      logout();
    } catch {}
  };

  if (!user) return <h2 className="loading">Loading...</h2>;

  return (
    <>
      <div className="mp-stars"></div>

      <motion.div
        className={`settings-cosmic ${dark ? "dark" : ""}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* 🔥 Back Button */}
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

        <div className="settings-header cosmic-title">
          <h1>⚙️ Settings</h1>
          <p>Manage your account, security & preferences</p>

          <button className="theme-btn" onClick={() => setDark(!dark)}>
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="settings-grid">
          {/* Account Information */}
          <motion.div className="settings-card glass-card" whileHover={{ scale: 1.02 }}>
            <h2>👤 Account Information</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone || "Not added"}</p>
          </motion.div>

          {/* Password */}
          <motion.div className="settings-card glass-card" whileHover={{ scale: 1.02 }}>
            <h2>🔑 Change Password</h2>
            <input
              type="password"
              placeholder="Old Password"
              value={password.old}
              onChange={(e) => setPassword({ ...password, old: e.target.value })}
            />
            <input
              type="password"
              placeholder="New Password"
              value={password.new}
              onChange={(e) => setPassword({ ...password, new: e.target.value })}
            />
            <button className="save-btn" onClick={changePassword}>
              Update Password
            </button>
          </motion.div>

          {/* Devices */}
          <motion.div className="settings-card glass-card" whileHover={{ scale: 1.02 }}>
            <h2>📱 Login Devices</h2>
            {deviceLogs.length === 0 ? <p>No devices found.</p> : null}

            {deviceLogs.map((d, i) => (
              <div className="log-row" key={i}>
                <Smartphone size={18} />
                <span>{d.device}</span>
                <small>{new Date(d.time).toLocaleString()}</small>
              </div>
            ))}
          </motion.div>

          {/* Activity Logs */}
          <motion.div className="settings-card glass-card" whileHover={{ scale: 1.02 }}>
            <h2>📊 Account Activity</h2>

            {activityLogs.length === 0 ? <p>No activity found.</p> : null}

            {activityLogs.map((log, i) => (
              <div className="log-row" key={i}>
                <Activity size={18} />
                <span>{log.action}</span>
                <small>{new Date(log.time).toLocaleString()}</small>
              </div>
            ))}
          </motion.div>

          {/* Danger Zone */}
          <motion.div className="settings-card glass-card danger" whileHover={{ scale: 1.03 }}>
            <h2>⚠️ Danger Zone</h2>
            <button className="delete-btn" onClick={deleteAccount}>Delete Account</button>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
