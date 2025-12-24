// // // import React, { useState } from "react";
// // // import axios from "axios";
// // // import { useNavigate } from "react-router-dom";

// // // // API base url
// // // const api = axios.create({ baseURL: "https://astrobackend-5sr6.onrender.com/api" });

// // // export default function Auth() {
// // //   const navigate = useNavigate();

// // //   const [mode, setMode] = useState("login");  // login | signup
// // //   const [step, setStep] = useState("email");  // email | otp
// // //   const [email, setEmail] = useState("");
// // //   const [otp, setOtp] = useState("");
// // //   const [message, setMessage] = useState("");
// // //   const [loading, setLoading] = useState(false);

// // //   // ================== SEND OTP ==================
// // //   const sendOtp = async () => {
// // //     if (!email) return setMessage("Please enter your email");

// // //     try {
// // //       setLoading(true);
// // //       setMessage("");

// // //       // Check user exists
// // //       const userCheck = await api.post("/userweb/auth/check-user", { email });

// // //       if (mode === "signup" && userCheck.data.exists) {
// // //         return setMessage("Account already exists! Please login.");
// // //       }

// // //       if (mode === "login" && !userCheck.data.exists) {
// // //         return setMessage("Account does not exist! Please signup first.");
// // //       }

// // //       // Send OTP
// // //       const res = await api.post("/userweb/auth/send-otp", { email });

// // //       if (res.data.success) {
// // //         setMessage("OTP sent successfully!");
// // //         setStep("otp");
// // //       } else {
// // //         setMessage(res.data.message || "Failed to send OTP");
// // //       }
// // //     } catch (err) {
// // //       setMessage(err?.response?.data?.message || "Server error sending OTP");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // ================== VERIFY OTP ==================
// // //   const verifyOtp = async () => {
// // //     if (!otp) return setMessage("Enter OTP");

// // //     try {
// // //       setLoading(true);
// // //       setMessage("");

// // //       const res = await api.post("/userweb/auth/verify-otp", { email, otp });

// // //       if (res.data.success) {
// // //         // Save token
// // //         localStorage.setItem("token", res.data.token);

// // //         // ⭐ IMPORTANT — Navbar reads this
// // //         localStorage.setItem("login", "true");

// // //         // Redirect to Home
// // //         navigate("/");
// // //       } else {
// // //         setMessage(res.data.message || "Invalid OTP");
// // //       }
// // //     } catch (err) {
// // //       setMessage(err?.response?.data?.message || "Invalid OTP");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // ================== UI ==================
// // //   return (
// // //     <div
// // //       style={{
// // //         maxWidth: 420,
// // //         margin: "40px auto",
// // //         padding: 20,
// // //         background: "#fff",
// // //         borderRadius: 10,
// // //         boxShadow: "0 0 10px #ddd",
// // //       }}
// // //     >
// // //       <h2 style={{ textAlign: "center", fontWeight: 700, marginBottom: 15 }}>
// // //         {mode === "signup" ? "Create Account" : "Login"}
// // //       </h2>

// // //       {message && <p style={{ color: "red", textAlign: "center" }}>{message}</p>}

// // //       {/* EMAIL STEP */}
// // //       {step === "email" && (
// // //         <>
// // //           <input
// // //             placeholder="Enter Email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             style={{
// // //               width: "100%",
// // //               padding: 12,
// // //               marginBottom: 10,
// // //               borderRadius: 6,
// // //               border: "1px solid #ccc",
// // //             }}
// // //           />

// // //           <button
// // //             onClick={sendOtp}
// // //             disabled={loading}
// // //             style={{
// // //               width: "100%",
// // //               padding: 12,
// // //               background: "blue",
// // //               color: "#fff",
// // //               borderRadius: 6,
// // //             }}
// // //           >
// // //             {loading
// // //               ? "Sending..."
// // //               : mode === "signup"
// // //               ? "Send OTP for Signup"
// // //               : "Send OTP for Login"}
// // //           </button>

// // //           <p
// // //             style={{
// // //               marginTop: 12,
// // //               textAlign: "center",
// // //               cursor: "pointer",
// // //               color: "blue",
// // //             }}
// // //             onClick={() => {
// // //               setMode(mode === "signup" ? "login" : "signup");
// // //               setMessage("");
// // //             }}
// // //           >
// // //             {mode === "signup"
// // //               ? "Already have an account? Login"
// // //               : "Don't have an account? Signup"}
// // //           </p>
// // //         </>
// // //       )}

// // //       {/* OTP STEP */}
// // //       {step === "otp" && (
// // //         <>
// // //           <input
// // //             placeholder="Enter OTP"
// // //             value={otp}
// // //             onChange={(e) => setOtp(e.target.value)}
// // //             style={{
// // //               width: "100%",
// // //               padding: 12,
// // //               marginBottom: 10,
// // //               borderRadius: 6,
// // //               border: "1px solid #ccc",
// // //             }}
// // //           />

// // //           <button
// // //             onClick={verifyOtp}
// // //             disabled={loading}
// // //             style={{
// // //               width: "100%",
// // //               padding: 12,
// // //               background: "green",
// // //               color: "#fff",
// // //               borderRadius: 6,
// // //             }}
// // //           >
// // //             {loading ? "Verifying..." : "Verify OTP"}
// // //           </button>

// // //           <p
// // //             style={{
// // //               marginTop: 12,
// // //               textAlign: "center",
// // //               color: "blue",
// // //               cursor: "pointer",
// // //             }}
// // //             onClick={sendOtp}
// // //           >
// // //             Resend OTP
// // //           </p>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import "./Auth.css"; // import css

// // // API base url
// // const api = axios.create({ baseURL: "https://astrobackend-5sr6.onrender.com/api" });

// // export default function Auth() {
// //   const navigate = useNavigate();

// //   const [mode, setMode] = useState("login");  
// //   const [step, setStep] = useState("email");  
// //   const [email, setEmail] = useState("");
// //   const [otp, setOtp] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   // SEND OTP
// //   const sendOtp = async () => {
// //     if (!email) return setMessage("Please enter your email");

// //     try {
// //       setLoading(true);
// //       setMessage("");

// //       const userCheck = await api.post("/userweb/auth/check-user", { email });

// //       if (mode === "signup" && userCheck.data.exists)
// //         return setMessage("Account already exists! Please login.");

// //       if (mode === "login" && !userCheck.data.exists)
// //         return setMessage("Account does not exist! Please signup first.");

// //       const res = await api.post("/userweb/auth/send-otp", { email });

// //       if (res.data.success) {
// //         setMessage("OTP sent successfully!");
// //         setStep("otp");
// //       } else {
// //         setMessage(res.data.message || "Failed to send OTP");
// //       }
// //     } catch (err) {
// //       setMessage(err?.response?.data?.message || "Server error sending OTP");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // VERIFY OTP
// //   const verifyOtp = async () => {
// //     if (!otp) return setMessage("Enter OTP");

// //     try {
// //       setLoading(true);
// //       setMessage("");

// //       const res = await api.post("/userweb/auth/verify-otp", { email, otp });

// //       if (res.data.success) {
// //         localStorage.setItem("token", res.data.token);
// //         localStorage.setItem("login", "true");
// //         navigate("/");
// //       } else {
// //         setMessage(res.data.message || "Invalid OTP");
// //       }
// //     } catch (err) {
// //       setMessage(err?.response?.data?.message || "Invalid OTP");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="auth-wrapper">
// //       <div className="auth-box">

// //         <h2 className="auth-title">
// //           {mode === "signup" ? "Create Account" : "Login"}
// //         </h2>

// //         {message && <p className="auth-message">{message}</p>}

// //         {/* EMAIL STEP */}
// //         {step === "email" && (
// //           <>
// //             <input
// //               className="auth-input"
// //               placeholder="Enter Email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //             />

// //             <button className="auth-btn" onClick={sendOtp} disabled={loading}>
// //               {loading
// //                 ? "Sending..."
// //                 : mode === "signup"
// //                 ? "Send OTP for Signup"
// //                 : "Send OTP for Login"}
// //             </button>

// //             <p
// //               className="auth-switch"
// //               onClick={() => {
// //                 setMode(mode === "signup" ? "login" : "signup");
// //                 setMessage("");
// //               }}
// //             >
// //               {mode === "signup"
// //                 ? "Already have an account? Login"
// //                 : "Don't have an account? Signup"}
// //             </p>
// //           </>
// //         )}

// //         {/* OTP STEP */}
// //         {step === "otp" && (
// //           <>
// //             <input
// //               className="auth-input"
// //               placeholder="Enter OTP"
// //               value={otp}
// //               onChange={(e) => setOtp(e.target.value)}
// //             />

// //             <button
// //               className="auth-btn auth-btn-green"
// //               onClick={verifyOtp}
// //               disabled={loading}
// //             >
// //               {loading ? "Verifying..." : "Verify OTP"}
// //             </button>

// //             <p className="auth-resend" onClick={sendOtp}>
// //               Resend OTP
// //             </p>
// //           </>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import "./Auth.css"; 

// // const api = axios.create({ baseURL: "https://astrobackend-5sr6.onrender.com/api" });

// // export default function Auth() {
// //   const navigate = useNavigate();

// //   const [mode, setMode] = useState("login");
// //   const [step, setStep] = useState("email");
// //   const [email, setEmail] = useState("");
// //   const [otp, setOtp] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   // ⭐ Create Stars like Home Page
// //   useEffect(() => {
// //     let container = document.querySelector(".auth-stars");

// //     if (container && container.childElementCount === 0) {
// //       for (let i = 0; i < 120; i++) {
// //         let star = document.createElement("div");
// //         star.className = "star";

// //         star.style.top = Math.random() * 100 + "%";
// //         star.style.left = Math.random() * 100 + "%";
// //         star.style.animationDuration = 2 + Math.random() * 3 + "s";

// //         container.appendChild(star);
// //       }
// //     }
// //   }, []);

// //   const sendOtp = async () => {
// //     if (!email) return setMessage("Please enter your email");

// //     try {
// //       setLoading(true);
// //       setMessage("");

// //       const userCheck = await api.post("/userweb/auth/check-user", { email });

// //       if (mode === "signup" && userCheck.data.exists)
// //         return setMessage("Account already exists! Please login.");

// //       if (mode === "login" && !userCheck.data.exists)
// //         return setMessage("Account does not exist! Please signup.");

// //       const res = await api.post("/userweb/auth/send-otp", { email });

// //       if (res.data.success) {
// //         setMessage("OTP sent successfully!");
// //         setStep("otp");
// //       } else {
// //         setMessage(res.data.message || "Failed to send OTP");
// //       }
// //     } catch (err) {
// //       setMessage(err?.response?.data?.message || "Server error");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const verifyOtp = async () => {
// //     if (!otp) return setMessage("Enter OTP");

// //     try {
// //       setLoading(true);
// //       setMessage("");

// //       const res = await api.post("/userweb/auth/verify-otp", { email, otp });

// //       if (res.data.success) {
// //         localStorage.setItem("token", res.data.token);
// //         localStorage.setItem("login", "true");
// //         navigate("/");
// //       } else {
// //         setMessage(res.data.message || "Invalid OTP");
// //       }
// //     } catch (err) {
// //       setMessage(err?.response?.data?.message || "Invalid OTP");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="auth-page">

// //       {/* ⭐ BACKGROUND STARS */}
// //       <div className="auth-stars"></div>

// //       {/* MAIN BOX */}
// //       <div className="auth-wrapper">
// //         <div className="auth-box">

// //           <h2 className="auth-title">
// //             {mode === "signup" ? "Create Account" : "Login"}
// //           </h2>

// //           {message && <p className="auth-message">{message}</p>}

// //           {step === "email" && (
// //             <>
// //               <input className="auth-input" placeholder="Enter Email"
// //                 value={email} onChange={(e) => setEmail(e.target.value)} />

// //               <button className="auth-btn" onClick={sendOtp} disabled={loading}>
// //                 {loading ? "Sending..." : mode === "signup" ? "Send OTP for Signup" : "Send OTP for Login"}
// //               </button>

// //               <p className="auth-switch"
// //                 onClick={() => { setMode(mode === "signup" ? "login" : "signup"); setMessage(""); }}>
// //                 {mode === "signup" ? "Already have an account? Login" : "Don't have an account? Signup"}
// //               </p>
// //             </>
// //           )}

// //           {step === "otp" && (
// //             <>
// //               <input className="auth-input" placeholder="Enter OTP"
// //                 value={otp} onChange={(e) => setOtp(e.target.value)} />

// //               <button className="auth-btn auth-btn-green"
// //                 onClick={verifyOtp} disabled={loading}>
// //                 {loading ? "Verifying..." : "Verify OTP"}
// //               </button>

// //               <p className="auth-resend" onClick={sendOtp}>Resend OTP</p>
// //             </>
// //           )}

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css";

// const api = axios.create({ baseURL: "https://astrobackend-5sr6.onrender.com/api" });

// export default function Auth() {
//   const navigate = useNavigate();

//   const [mode, setMode] = useState("login"); // login | signup
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ⭐ Home page stars effect
//   useEffect(() => {
//     let container = document.querySelector(".auth-stars");
//     if (container && container.childElementCount === 0) {
//       for (let i = 0; i < 120; i++) {
//         let star = document.createElement("div");
//         star.className = "star";
//         star.style.top = Math.random() * 100 + "%";
//         star.style.left = Math.random() * 100 + "%";
//         star.style.animationDuration = 2 + Math.random() * 3 + "s";
//         container.appendChild(star);
//       }
//     }
//   }, []);

//   // =========================================
//   // ⭐ SIGNUP using Email + Password
//   // =========================================
//   const handleSignup = async () => {
//     if (!name || !email || !password)
//       return setMessage("All fields are required!");

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await api.post("/userweb/auth/register", {
//         name,
//         email,
//         password,
//       });

//       if (res.data.success) {
//         setMessage("Signup successful! Please login.");
//         setMode("login");
//       }
//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================
//   // ⭐ LOGIN using Email + Password
//   // =========================================
//   const handleLogin = async () => {
//     if (!email || !password)
//       return setMessage("Email & Password required!");

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await api.post("/userweb/auth/login", {
//         email,
//         password,
//       });

//       if (res.data.success) {
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("login", "true");
//         navigate("/");
//       }
//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       {/* ⭐ BACKGROUND STARS */}
//       <div className="auth-stars"></div>

//       <div className="auth-wrapper">
//         <div className="auth-box">

//           <h2 className="auth-title">
//             {mode === "signup" ? "Create Account" : "Login"}
//           </h2>

//           {message && <p className="auth-message">{message}</p>}

//           {/* SIGNUP MODE */}
//           {mode === "signup" && (
//             <>
//               <input
//                 className="auth-input"
//                 placeholder="Enter Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 type="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button className="auth-btn" onClick={handleSignup} disabled={loading}>
//                 {loading ? "Creating..." : "Signup"}
//               </button>

//               <p
//                 className="auth-switch"
//                 onClick={() => {
//                   setMode("login");
//                   setMessage("");
//                 }}
//               >
//                 Already have an account? Login
//               </p>
//             </>
//           )}

//           {/* LOGIN MODE */}
//           {mode === "login" && (
//             <>
//               <input
//                 className="auth-input"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 type="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button className="auth-btn" onClick={handleLogin} disabled={loading}>
//                 {loading ? "Logging in..." : "Login"}
//               </button>

//               <p
//                 className="auth-switch"
//                 onClick={() => {
//                   setMode("signup");
//                   setMessage("");
//                 }}
//               >
//                 Don't have an account? Signup
//               </p>
//             </>
//           )}

//         </div>
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css";

// const api = axios.create({
//   baseURL: "https://astrobackend-5sr6.onrender.com/api"
// });

// export default function Auth() {
//   const navigate = useNavigate();

//   const [mode, setMode] = useState("login"); // login | signup
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🌟 Background Star Effect
//   useEffect(() => {
//     const container = document.querySelector(".auth-stars");
//     if (container && container.childElementCount === 0) {
//       for (let i = 0; i < 120; i++) {
//         const star = document.createElement("div");
//         star.className = "star";
//         star.style.top = Math.random() * 100 + "%";
//         star.style.left = Math.random() * 100 + "%";
//         star.style.animationDuration = 2 + Math.random() * 3 + "s";
//         container.appendChild(star);
//       }
//     }
//   }, []);

//   // =========================================
//   // ⭐ SIGNUP
//   // =========================================
//   const handleSignup = async () => {
//     if (!name || !email || !password)
//       return setMessage("All fields are required!");

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await api.post("/userweb/auth/register", {
//         name,
//         email,
//         password,
//       });

//       if (res.data.success) {
//         setMessage("Signup successful! Please login.");
//         setMode("login");
//       }
//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================
//   // ⭐ LOGIN (FIXED)
//   // =========================================
//   const handleLogin = async () => {
//     if (!email || !password)
//       return setMessage("Email & Password required!");

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await api.post("/userweb/auth/login", {
//         email,
//         password,
//       });

//       if (res.data.success) {
//         // SAVE TOKEN
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("login", "true");

//         // ⭐ VERY IMPORTANT — SAVE USER
//         localStorage.setItem("user", JSON.stringify(res.data.user));

//         navigate("/");
//       }
//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // return (
// //     <div className="auth-page">
// //       {/* 🌟 BACKGROUND STARS */}
// //       <div className="auth-stars"></div>

// //       {/* <div className="auth-wrapper"> */}
      
// //         <div className="auth-box">
          
// //           <h2 className="auth-title">
// //             {mode === "signup" ? "Create Account" : "The Fifth Cusp"}
// //           </h2>

// //           {message && <p className="auth-message">{message}</p>}

// //           {/* SIGNUP MODE */}
// //           {mode === "signup" && (
// //             <>
// //               <input
// //                 className="auth-input"
// //                 placeholder="Enter Name"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //               />

// //               <input
// //                 className="auth-input"
// //                 placeholder="Enter Email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />

// //               <input
// //                 className="auth-input"
// //                 type="password"
// //                 placeholder="Enter Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />

// //               <button className="auth-btn" onClick={handleSignup} disabled={loading}>
// //                 {loading ? "Creating..." : "Signup"}
// //               </button>

// //               <p
// //                 className="auth-switch"
// //                 onClick={() => {
// //                   setMode("login");
// //                   setMessage("");
// //                 }}
// //               >
// //                 Already have an account? Login
// //               </p>
// //             </>
// //           )}

// //           {/* LOGIN MODE */}
// //           {mode === "login" && (
// //             <>
// //               <input
// //                 className="auth-input"
// //                 placeholder="Enter Email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //               />

// //               <input
// //                 className="auth-input"
// //                 type="password"
// //                 placeholder="Enter Password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //               />

// //               <button className="auth-btn" onClick={handleLogin} disabled={loading}>
// //                 {loading ? "Logging in..." : "Login"}
// //               </button>

// //               <p
// //                 className="auth-switch"
// //                 onClick={() => {
// //                   setMode("signup");
// //                   setMessage("");
// //                 }}
// //               >
// //                  Signup
// //               </p>
// //             </>
// //           )}

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// return (
//   <div className="auth-page">
//     {/* 🌟 BACKGROUND STARS */}
//     <div className="auth-stars"></div>
//       {/* TOP LEFT BACK BUTTON */}
// <div 
//   style={{
//     position: "absolute",
//     top: "20px",
//     left: "20px",  
//     zIndex: 20,
//   }}
// >
//   <button
//     onClick={() => window.history.back()}
//     style={{
//       padding: "10px 20px",
//       background: "rgba(255,255,255,0.1)",
//       borderRadius: "30px",
//       border: "1px solid rgba(255,255,255,0.3)",
//       color: "#fff",
//       fontWeight: 500,
//       cursor: "pointer",
//       backdropFilter: "blur(4px)",
//       transition: "0.3s",
//     }}
//     onMouseEnter={(e) => {
//       e.target.style.background = "rgba(255,255,255,0.25)";
//     }}
//     onMouseLeave={(e) => {
//       e.target.style.background = "rgba(255,255,255,0.1)";
//     }}
//   >
//     Back
//   </button>
//      </div>
//     <div className="auth-layout">
      
      
//       <div className="auth-left">
      
//         <img
//           src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
//           alt="The Fifth Cusp"
//           className="auth-logo"
//         />
        
//       </div>

//       <div className="auth-right">
//         <div className="auth-box">
//           <h2 className="auth-title">
//             {mode === "signup" ? "Create Account" : "THE FIFTH CUSP"}
//           </h2>

//           {message && <p className="auth-message">{message}</p>}

         
//           {mode === "signup" && (
//             <>
//               <input
//                 className="auth-input"
//                 placeholder="Enter Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 type="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button className="auth-btn" onClick={handleSignup} disabled={loading}>
//                 {loading ? "Creating..." : "Signup"}
//               </button>

//               <p className="auth-switch" onClick={() => setMode("login")}>
//                 Already have an account? LOGIN
//               </p>
//             </>
//           )}

         
//           {mode === "login" && (
//             <>
//               <input
//                 className="auth-input"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 type="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button className="auth-btn" onClick={handleLogin} disabled={loading}>
//                 {loading ? "Logging in..." : "LOGIN"}
//               </button>

//               <p className="auth-switch" onClick={() => setMode("signup")}>
//                 SIGNUP
//               </p>
//             </>
//           )}
//         </div>
//       </div>

//     </div>
//   </div>
// );
// }













// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css";

// const api = axios.create({
//   baseURL: "https://astrobackend-5sr6.onrender.com/api"
// });

// export default function Auth() {
//   const navigate = useNavigate();

//   const [mode, setMode] = useState("login"); // login | signup
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🌟 Background Star Effect
//   useEffect(() => {
//     const container = document.querySelector(".auth-stars");
//     if (container && container.childElementCount === 0) {
//       for (let i = 0; i < 120; i++) {
//         const star = document.createElement("div");
//         star.className = "star";
//         star.style.top = Math.random() * 100 + "%";
//         star.style.left = Math.random() * 100 + "%";
//         star.style.animationDuration = 2 + Math.random() * 3 + "s";
//         container.appendChild(star);
//       }
//     }
//   }, []);

//   // =========================================
//   // ⭐ SIGNUP
//   // =========================================
//   const handleSignup = async () => {
//     if (!name || !email || !password)
//       return setMessage("All fields are required!");

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await api.post("/userweb/auth/register", {
//         name,
//         email,
//         password,
//       });

//       if (res.data.success) {
//         setMessage("Signup successful! Please login.");
//         setMode("login");
//       }
//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================
//   // ⭐ LOGIN
//   // =========================================
//   const handleLogin = async () => {
//     if (!email || !password)
//       return setMessage("Email & Password required!");

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await api.post("/userweb/auth/login", {
//         email,
//         password,
//       });

//       if (res.data.success) {
//         // SAVE TOKEN
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("login", "true");

//         // ⭐ VERY IMPORTANT — SAVE USER
//         localStorage.setItem("user", JSON.stringify(res.data.user));

//         navigate("/");
//       }
//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       {/* 🌟 BACKGROUND STARS */}
//       <div className="auth-stars"></div>

//       {/* TOP LEFT BACK BUTTON */}
//       <div className="auth-back-btn-container">
//         <button
//           className="auth-back-btn"
//           onClick={() => window.history.back()}
//         >
//           Back
//         </button>
//       </div>

//       <div className="auth-center">
//         <div className="auth-box">
//           <h2 className="auth-title">
//             {mode === "signup" ? "INSIDE THE CUSP" : "INSIDE THE CUSP"}
//           </h2>

//           {message && <p className="auth-message">{message}</p>}

//           {/* SIGNUP MODE */}
//           {mode === "signup" && (
//             <>
//               <input
//                 className="auth-input"
//                 placeholder="Enter Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 type="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button className="auth-btn" onClick={handleSignup} disabled={loading}>
//                 {loading ? "Creating..." : "SIGNUP"}
//               </button>

//               <p className="auth-switch" onClick={() => setMode("login")}>
//                 Already have an account? <span>LOGIN</span>
//               </p>
//             </>
//           )}

//           {/* LOGIN MODE */}
//           {mode === "login" && (
//             <>
//               <input
//                 className="auth-input"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 type="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button className="auth-btn" onClick={handleLogin} disabled={loading}>
//                 {loading ? "Logging in..." : "LOGIN"}
//               </button>

//               <p className="auth-switch" onClick={() => setMode("signup")}>
//                <span>SIGNUP</span><span>Forgot Password?</span>
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css";

// const api = axios.create({
//   baseURL: "https://astrobackend-5sr6.onrender.com/api"
// });

// export default function Auth() {
//   const navigate = useNavigate();

//   const [mode, setMode] = useState("login"); // login | signup | forgot
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [oldPassword, setOldPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [userId, setUserId] = useState("");

//   // 🌟 Background Star Effect
//   useEffect(() => {
//     const container = document.querySelector(".auth-stars");
//     if (container && container.childElementCount === 0) {
//       for (let i = 0; i < 120; i++) {
//         const star = document.createElement("div");
//         star.className = "star";
//         star.style.top = Math.random() * 100 + "%";
//         star.style.left = Math.random() * 100 + "%";
//         star.style.animationDuration = 2 + Math.random() * 3 + "s";
//         container.appendChild(star);
//       }
//     }
//   }, []);

//   // =========================================
//   // ⭐ SIGNUP
//   // =========================================
//   const handleSignup = async () => {
//     if (!name || !email || !password)
//       return setMessage("All fields are required!");

//     if (password !== confirmPassword)
//       return setMessage("Passwords do not match!");

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await api.post("/userweb/auth/register", {
//         name,
//         email,
//         password,
//       });

//       if (res.data.success) {
//         setMessage("Signup successful! Please login.");
//         setMode("login");
//         setName("");
//         setEmail("");
//         setPassword("");
//         setConfirmPassword("");
//       }
//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================
//   // ⭐ LOGIN
//   // =========================================
//   const handleLogin = async () => {
//     if (!email || !password)
//       return setMessage("Email & Password required!");

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await api.post("/userweb/auth/login", {
//         email,
//         password,
//       });

//       if (res.data.success) {
//         // SAVE TOKEN
//         localStorage.setItem("token", res.data.token);
//         localStorage.setItem("login", "true");

//         // ⭐ VERY IMPORTANT — SAVE USER
//         localStorage.setItem("user", JSON.stringify(res.data.user));
//         setUserId(res.data.user._id);

//         navigate("/");
//       }
//     } catch (err) {
//       setMessage(err?.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================
//   // ⭐ FORGOT PASSWORD - REQUEST
//   // =========================================
//   const handleForgotPassword = async () => {
//     if (!email) return setMessage("Please enter your email address");

//     try {
//       setLoading(true);
//       setMessage("");

//       // This endpoint needs to be created in your backend
//       // For now, we'll simulate finding the user by email
//       const res = await api.post("/userweb/auth/forgot-password", {
//         email,
//       });

//       if (res.data.success) {
//         setMessage("Password reset instructions sent to your email!");
//         setMode("change");
//         // Store user ID for password change
//         setUserId(res.data.userId || "");
//       }
//     } catch (err) {
//       // If no forgot-password endpoint exists, show manual instructions
//       if (err.response?.status === 404) {
//         setMessage("Please contact support or use the change password option below");
//         setMode("change");
//       } else {
//         setMessage(err?.response?.data?.message || "Failed to process request");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =========================================
//   // ⭐ CHANGE PASSWORD
//   // =========================================
//   const handleChangePassword = async () => {
//     if (!oldPassword || !newPassword || !confirmPassword)
//       return setMessage("All password fields are required!");

//     if (newPassword !== confirmPassword)
//       return setMessage("New passwords do not match!");

//     if (newPassword.length < 6)
//       return setMessage("Password must be at least 6 characters long!");

//     try {
//       setLoading(true);
//       setMessage("");

//       // First try to get user ID from email if not already set
//       if (!userId) {
//         const userRes = await api.get(`/userweb/user/email/${email}`);
//         if (userRes.data.success) {
//           setUserId(userRes.data.user._id);
//         } else {
//           return setMessage("User not found. Please login first.");
//         }
//       }

//       const token = localStorage.getItem("token");
      
//       const res = await api.put(
//         `/userweb/change-password/${userId}`,
//         {
//           oldPassword,
//           newPassword
//         },
//         { 
//           headers: { 
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json"
//           } 
//         }
//       );

//       if (res.data.success) {
//         setMessage("Password changed successfully! Please login with your new password.");
//         setMode("login");
//         setOldPassword("");
//         setNewPassword("");
//         setConfirmPassword("");
//       }
//     } catch (err) {
//       if (err.response?.status === 401) {
//         setMessage("Invalid old password. Please try again.");
//       } else if (err.response?.status === 404) {
//         setMessage("User not found. Please sign up first.");
//       } else {
//         setMessage(err?.response?.data?.message || "Password change failed!");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       {/* 🌟 BACKGROUND STARS */}
//       <div className="auth-stars"></div>

//       {/* TOP LEFT BACK BUTTON */}
//       <div className="auth-back-btn-container">
//         <button
//           className="auth-back-btn"
//           onClick={() => {
//             if (mode === "forgot" || mode === "change") {
//               setMode("login");
//               setMessage("");
//             } else {
//               window.history.back();
//             }
//           }}
//         >
//           {mode === "forgot" || mode === "change" ? "Back to Login" : "Back"}
//         </button>
//       </div>

//       <div className="auth-center">
//         <div className="auth-box">
//           <h2 className="auth-title">
//             {mode === "signup" ? "INSIDE THE CUSP" : 
//              mode === "forgot" ? "RESET PASSWORD" : 
//              mode === "change" ? "CHANGE PASSWORD" : 
//              "INSIDE THE CUSP"}
//           </h2>

//           {message && <p className="auth-message">{message}</p>}

//           {/* SIGNUP MODE */}
//           {mode === "signup" && (
//             <>
//               <input
//                 className="auth-input"
//                 placeholder="Enter Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 type="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />

//               <button className="auth-btn" onClick={handleSignup} disabled={loading}>
//                 {loading ? "Creating..." : "SIGNUP"}
//               </button>

//               <p className="auth-switch" onClick={() => {
//                 setMode("login");
//                 setMessage("");
//               }}>
//                 Already have an account? <span>LOGIN</span>
//               </p>
//             </>
//           )}

//           {/* LOGIN MODE */}
//           {mode === "login" && (
//             <>
//               <input
//                 className="auth-input"
//                 placeholder="Enter Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 type="password"
//                 placeholder="Enter Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />

//               <button className="auth-btn" onClick={handleLogin} disabled={loading}>
//                 {loading ? "Logging in..." : "LOGIN"}
//               </button>

//               <div className="auth-links">
//                 <p className="auth-switch" onClick={() => {
//                   setMode("signup");
//                   setMessage("");
//                 }}>
//                   <span>SIGNUP</span>
//                 </p>
                
//                 <p className="auth-forgot" onClick={() => {
//                   setMode("forgot");
//                   setMessage("");
//                 }}>
//                   <span>Forgot Password?</span>
//                 </p>
//               </div>
//             </>
//           )}

//           {/* FORGOT PASSWORD MODE */}
//           {mode === "forgot" && (
//             <>
//               <input
//                 className="auth-input"
//                 placeholder="Enter Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <button className="auth-btn" onClick={handleForgotPassword} disabled={loading}>
//                 {loading ? "Sending..." : "SEND RESET LINK"}
//               </button>

//               <div className="auth-links">
//                 <p className="auth-switch" onClick={() => {
//                   setMode("change");
//                   setMessage("");
//                 }}>
//                   <span>Change Password Directly</span>
//                 </p>
                
//                 <p className="auth-switch" onClick={() => {
//                   setMode("login");
//                   setMessage("");
//                 }}>
//                   Back to <span>LOGIN</span>
//                 </p>
//               </div>
//             </>
//           )}

//           {/* CHANGE PASSWORD MODE */}
//           {mode === "change" && (
//             <>
//               <input
//                 className="auth-input"
//                 placeholder="Enter Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 type="password"
//                 placeholder="Old Password"
//                 value={oldPassword}
//                 onChange={(e) => setOldPassword(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 type="password"
//                 placeholder="New Password"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//               />

//               <input
//                 className="auth-input"
//                 type="password"
//                 placeholder="Confirm New Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />

//               <button className="auth-btn" onClick={handleChangePassword} disabled={loading}>
//                 {loading ? "Updating..." : "CHANGE PASSWORD"}
//               </button>

//               <p className="auth-switch" onClick={() => {
//                 setMode("login");
//                 setMessage("");
//                 setOldPassword("");
//                 setNewPassword("");
//                 setConfirmPassword("");
//               }}>
//                 Back to <span>LOGIN</span>
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const api = axios.create({
  baseURL: "https://astrobackend-5sr6.onrender.com/api"
});

export default function Auth() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("login"); // login | signup | forgot
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

  // 🌟 Background Star Effect
  useEffect(() => {
    const container = document.querySelector(".auth-stars");
    if (container && container.childElementCount === 0) {
      for (let i = 0; i < 120; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDuration = 2 + Math.random() * 3 + "s";
        container.appendChild(star);
      }
    }
  }, []);

  // =========================================
  // ⭐ SIGNUP
  // =========================================
  const handleSignup = async () => {
    if (!name || !email || !password)
      return setMessage("All fields are required!");

    if (password !== confirmPassword)
      return setMessage("Passwords do not match!");

    try {
      setLoading(true);
      setMessage("");

      const res = await api.post("/userweb/auth/register", {
        name,
        email,
        password,
      });

      if (res.data.success) {
        setMessage("Signup successful! Please login.");
        setMode("login");
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      setMessage(err?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // ⭐ LOGIN
  // =========================================
  const handleLogin = async () => {
    if (!email || !password)
      return setMessage("Email & Password required!");

    try {
      setLoading(true);
      setMessage("");

      const res = await api.post("/userweb/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        // SAVE TOKEN
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("login", "true");

        // ⭐ VERY IMPORTANT — SAVE USER
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setUserId(res.data.user._id);

        navigate("/");
      }
    } catch (err) {
      setMessage(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // ⭐ FORGOT PASSWORD - REQUEST
  // =========================================
  const handleForgotPassword = async () => {
    if (!email) return setMessage("Please enter your email address");

    try {
      setLoading(true);
      setMessage("");

      // This endpoint needs to be created in your backend
      const res = await api.post("/userweb/auth/forgot-password", {
        email,
      });

      if (res.data.success) {
        setMessage("Password reset instructions sent to your email!");
        setMode("change");
        setUserId(res.data.userId || "");
      }
    } catch (err) {
      // If no forgot-password endpoint exists
      if (err.response?.status === 404) {
        setMessage("Please use the change password option below");
        setMode("change");
      } else {
        setMessage(err?.response?.data?.message || "Failed to process request");
      }
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // ⭐ CHANGE PASSWORD
  // =========================================
  const handleChangePassword = async () => {
    if (!oldPassword || !newPassword || !confirmPassword)
      return setMessage("All password fields are required!");

    if (newPassword !== confirmPassword)
      return setMessage("New passwords do not match!");

    if (newPassword.length < 6)
      return setMessage("Password must be at least 6 characters long!");

    try {
      setLoading(true);
      setMessage("");

      // First try to get user ID from email if not already set
      if (!userId) {
        const userRes = await api.get(`/userweb/user/email/${email}`);
        if (userRes.data.success) {
          setUserId(userRes.data.user._id);
        } else {
          return setMessage("User not found. Please login first.");
        }
      }

      const token = localStorage.getItem("token");
      
      const res = await api.put(
        `/userweb/change-password/${userId}`,
        {
          oldPassword,
          newPassword
        },
        { 
          headers: { 
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          } 
        }
      );

      if (res.data.success) {
        setMessage("Password changed successfully! Please login with your new password.");
        setMode("login");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }
    } catch (err) {
      if (err.response?.status === 401) {
        setMessage("Invalid old password. Please try again.");
      } else if (err.response?.status === 404) {
        setMessage("User not found. Please sign up first.");
      } else {
        setMessage(err?.response?.data?.message || "Password change failed!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      {/* 🌟 BACKGROUND STARS */}
      <div className="auth-stars"></div>

      {/* TOP LEFT BACK BUTTON */}
      <div className="auth-back-btn-container">
        <button
          className="auth-back-btn"
          onClick={() => {
            if (mode === "forgot" || mode === "change") {
              setMode("login");
              setMessage("");
            } else {
              window.history.back();
            }
          }}
        >
          {mode === "forgot" || mode === "change" ? "Back to Login" : "Back"}
        </button>
      </div>

      <div className="auth-center">
        <div className="auth-box">
          <h2 className="auth-title">
            {mode === "signup" ? "INSIDE THE CUSP" : 
             mode === "forgot" ? "RESET PASSWORD" : 
             mode === "change" ? "CHANGE PASSWORD" : 
             "INSIDE THE CUSP"}
          </h2>

          {message && <p className="auth-message">{message}</p>}

          {/* SIGNUP MODE */}
          {mode === "signup" && (
            <>
              <input
                className="auth-input"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                className="auth-input"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="auth-input"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                className="auth-input"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button className="auth-btn" onClick={handleSignup} disabled={loading}>
                {loading ? "Creating..." : "SIGNUP"}
              </button>

              <p className="auth-switch" onClick={() => {
                setMode("login");
                setMessage("");
              }}>
                Already have an account? <span>LOGIN</span>
              </p>
            </>
          )}

          {/* LOGIN MODE */}
          {mode === "login" && (
            <>
              <input
                className="auth-input"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="auth-input"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="auth-btn" onClick={handleLogin} disabled={loading}>
                {loading ? "Logging in..." : "LOGIN"}
              </button>

              <div className="auth-links">
                <p className="auth-switch" onClick={() => {
                  setMode("signup");
                  setMessage("");
                }}>
                  <span>SIGNUP</span>
                </p>
                
                <p className="auth-forgot" onClick={() => {
                  setMode("forgot");
                  setMessage("");
                }}>
                  <span>Forgot Password?</span>
                </p>
              </div>
            </>
          )}

          {/* FORGOT PASSWORD MODE */}
          {mode === "forgot" && (
            <>
              <input
                className="auth-input"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button className="auth-btn" onClick={handleForgotPassword} disabled={loading}>
                {loading ? "Sending..." : "SEND RESET LINK"}
              </button>

              <div className="auth-links">
                <p className="auth-switch" onClick={() => {
                  setMode("change");
                  setMessage("");
                }}>
                  <span>Change Password Directly</span>
                </p>
                
                <p className="auth-switch" onClick={() => {
                  setMode("login");
                  setMessage("");
                }}>
                  Back to <span>LOGIN</span>
                </p>
              </div>
            </>
          )}

          {/* CHANGE PASSWORD MODE */}
          {mode === "change" && (
            <>
              <input
                className="auth-input"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className="auth-input"
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />

              <input
                className="auth-input"
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <input
                className="auth-input"
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button className="auth-btn" onClick={handleChangePassword} disabled={loading}>
                {loading ? "Updating..." : "CHANGE PASSWORD"}
              </button>

              <p className="auth-switch" onClick={() => {
                setMode("login");
                setMessage("");
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
              }}>
                Back to <span>LOGIN</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}