
// // // import React, { useEffect, useState } from "react";
// // // import "../../styles/MyWallet.css";
// // // import { PaymentAPI } from "../../api/apiService";

// // // export default function MyWallet() {
// // //   const [user, setUser] = useState(null);
// // //   const [wallet, setWallet] = useState(null);
// // //   const [amount, setAmount] = useState("");

// // //   // 👉 Load logged-in user
// // //   useEffect(() => {
// // //     const u = JSON.parse(localStorage.getItem("user"));
// // //     if (u) setUser(u);
// // //   }, []);

// // //   // 👉 Load wallet after user loads
// // //   useEffect(() => {
// // //     if (user) loadWallet();
// // //   }, [user]);

// // //   // ------------------------------
// // //   // 🔹 Load Wallet API
// // //   // ------------------------------
// // //   const loadWallet = async () => {
// // //     try {
// // //       const res = await fetch(
// // //         `${process.env.REACT_APP_API_URL}/wallet/${user._id}`
// // //       );
// // //       const data = await res.json();

// // //       if (data.success) {
// // //         setWallet(data.wallet);
// // //       }
// // //     } catch (err) {
// // //       console.log("Wallet load error:", err);
// // //     }
// // //   };

// // //   // ------------------------------
// // //   // 🔹 Razorpay Add Money
// // //   // ------------------------------
// // //   const addMoney = async () => {
// // //     if (!amount || amount <= 0) {
// // //       alert("Enter valid amount");
// // //       return;
// // //     }

// // //     try {
// // //       // 1️⃣ CREATE ORDER
// // //       const response = await PaymentAPI.createOrder({
// // //         amount: Number(amount),
// // //         userId: user._id,
// // //       });

// // //       if (!response?.success) {
// // //         alert("Order creation failed!");
// // //         return;
// // //       }

// // //       // 2️⃣ RAZORPAY CHECKOUT
// // //       const rzp = new window.Razorpay({
// // //         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
// // //         amount: response.order.amount,
// // //         currency: response.order.currency,
// // //         name: "Astro App Wallet",
// // //         description: "Add Money to Wallet",
// // //         order_id: response.order.id,

// // //         handler: async (res) => {
// // //           const verifyRes = await PaymentAPI.verifyPayment({
// // //             ...res,
// // //             amount,
// // //             userId: user._id,
// // //           });

// // //           if (verifyRes.success) {
// // //             alert("Money Added Successfully!");
// // //             setAmount("");
// // //             loadWallet();
// // //           } else {
// // //             alert("Payment verification failed");
// // //           }
// // //         },

// // //         prefill: {
// // //           name: user.name,
// // //           email: user.email,
// // //         },

// // //         theme: { color: "#f4b400" },
// // //       });

// // //       rzp.on("payment.failed", (err) => {
// // //         console.log("Payment failed:", err);
// // //         alert("Payment failed! Try again.");
// // //       });

// // //       rzp.open();
// // //     } catch (err) {
// // //       console.log("Payment Error:", err);
// // //       alert("Payment failed!");
// // //     }
// // //   };

// // //   // ------------------------------
// // //   // UI Section
// // //   // ------------------------------

// // //   if (!user) return <h2>Please Login First</h2>;
// // //   if (!wallet) return <h2>Loading Wallet...</h2>;

// // //   return (
// // //     <div className="wallet-wrapper">
// // //       <h1>My Wallet</h1>

// // //       {/* BALANCE CARD */}
// // //       <div className="wallet-balance-card">
// // //         <h2>Available Balance</h2>
// // //         <div className="balance-amount">₹{wallet.balance}</div>

// // //         {/* ADD MONEY */}
// // //         <div className="add-money-box">
// // //           <input
// // //             type="number"
// // //             placeholder="Enter Amount"
// // //             value={amount}
// // //             onChange={(e) => setAmount(e.target.value)}
// // //           />
// // //           <button onClick={addMoney}>Add Money</button>
// // //         </div>
// // //       </div>

// // //       {/* TRANSACTIONS */}
// // //       <div className="wallet-transactions-card">
// // //         <h2>Transaction History</h2>

// // //         {wallet.transactions.length === 0 && (
// // //           <p className="no-transactions">No transactions yet.</p>
// // //         )}

// // //         {wallet.transactions.map((tx) => (
// // //           <div className="transaction-item" key={tx._id}>
// // //             <div>
// // //               <h4>{tx.type === "credit" ? "Money Added" : "Money Used"}</h4>
// // //               <span>{new Date(tx.date).toLocaleString()}</span>
// // //             </div>

// // //             <div className={`tx-amount ${tx.type}`}>
// // //               {tx.type === "credit" ? "+" : "-"} ₹{tx.amount}
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import React, { useEffect, useState } from "react";
// // import "../../styles/MyWallet.css";
// // import { PaymentAPI } from "../../api/apiService";

// // export default function MyWallet() {
// //   const [user, setUser] = useState(null);
// //   const [wallet, setWallet] = useState(null);
// //   const [amount, setAmount] = useState("");
// //   const [loading, setLoading] = useState(true);

// //   // 👉 Load logged-in user
// //   useEffect(() => {
// //     const u = JSON.parse(localStorage.getItem("user"));
// //     if (u) setUser(u);
// //   }, []);

// //   // 👉 Load wallet after user loads
// //   useEffect(() => {
// //     if (user) loadWallet();
// //   }, [user]);

// //   // ------------------------------
// //   // 🔹 Load Wallet API
// //   // ------------------------------
// //   const loadWallet = async () => {
// //     try {
// //       setLoading(true);

// //       const res = await fetch(
// //         `${process.env.REACT_APP_API_URL}/wallet/${user._id}`
// //       );
// //       const data = await res.json();

// //       console.log("Wallet API Response:", data);

// //       if (data.success) {
// //         // ALWAYS set safe values
// //         setWallet({
// //           balance: data.wallet?.balance || 0,
// //           transactions: data.wallet?.transactions || [],
// //         });
// //       } else {
// //         setWallet({ balance: 0, transactions: [] });
// //       }
// //     } catch (err) {
// //       console.log("Wallet load error:", err);
// //       setWallet({ balance: 0, transactions: [] });
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ------------------------------
// //   // 🔹 Razorpay Add Money
// //   // ------------------------------
// //   const addMoney = async () => {
// //     if (!amount || amount <= 0) {
// //       alert("Enter valid amount");
// //       return;
// //     }

// //     try {
// //       const response = await PaymentAPI.createOrder({
// //         amount: Number(amount),
// //         userId: user._id,
// //       });

// //       if (!response?.success) {
// //         alert("Order creation failed!");
// //         return;
// //       }

// //       const rzp = new window.Razorpay({
// //         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
// //         amount: response.order.amount,
// //         currency: response.order.currency,
// //         name: "Astro App Wallet",
// //         description: "Add Money to Wallet",
// //         order_id: response.order.id,

// //         handler: async (res) => {
// //           const verifyRes = await PaymentAPI.verifyPayment({
// //             ...res,
// //             amount,
// //             userId: user._id,
// //           });

// //           if (verifyRes.success) {
// //             alert("Money Added Successfully!");
// //             setAmount("");
// //             loadWallet(); // reload wallet
// //           } else {
// //             alert("Payment verification failed");
// //           }
// //         },

// //         prefill: {
// //           name: user.name,
// //           email: user.email,
// //         },

// //         theme: { color: "#f4b400" },
// //       });

// //       rzp.on("payment.failed", (err) => {
// //         console.log("Payment failed:", err);
// //         alert("Payment failed! Try again.");
// //       });

// //       rzp.open();
// //     } catch (err) {
// //       console.log("Payment Error:", err);
// //       alert("Payment failed!");
// //     }
// //   };

// //   // ------------------------------
// //   // UI Section
// //   // ------------------------------

// //   if (!user) return <h2>Please Login First</h2>;
// //   if (loading) return <h2>Loading Wallet...</h2>;

// //   return (
// //     <div className="wallet-wrapper">
// //       <h1>My Wallet</h1>

// //       {/* BALANCE CARD */}
// //       <div className="wallet-balance-card">
// //         <h2>Available Balance</h2>
// //         <div className="balance-amount">₹{wallet.balance}</div>

// //         {/* ADD MONEY */}
// //         <div className="add-money-box">
// //           <input
// //             type="number"
// //             placeholder="Enter Amount"
// //             value={amount}
// //             onChange={(e) => setAmount(e.target.value)}
// //           />
// //           <button onClick={addMoney}>Add Money</button>
// //         </div>
// //       </div>

// //       {/* TRANSACTIONS */}
// //       <div className="wallet-transactions-card">
// //         <h2>Transaction History</h2>

// //         {wallet.transactions.length === 0 ? (
// //           <p className="no-transactions">No transactions yet.</p>
// //         ) : (
// //           wallet.transactions.map((tx, i) => (
// //             <div className="transaction-item" key={i}>
// //               <div>
// //                 <h4>{tx.type === "credit" ? "Money Added" : "Money Used"}</h4>
// //                 <span>{new Date(tx.date).toLocaleString()}</span>
// //               </div>

// //               <div className={`tx-amount ${tx.type}`}>
// //                 {tx.type === "credit" ? "+" : "-"} ₹{tx.amount}
// //               </div>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import "../../styles/MyWallet.css";
// import { PaymentAPI } from "../../api/apiService";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function MyWallet() {
//   const [user, setUser] = useState(null);
//   const [wallet, setWallet] = useState({ balance: 0, transactions: [] });
//   const [amount, setAmount] = useState("");
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
//           loadWallet(u._id);
//         }
//       } catch (err) {
//         console.log("User fetch error:", err);
//       }
//     };

//     fetchUser();
//   }, []);

//   // ------------------------------
//   // 🔹 Load Wallet API
//   // ------------------------------
//   const loadWallet = async (userId) => {
//     try {
//       setLoading(true);

//       const res = await fetch(
//         `${process.env.REACT_APP_API_URL}/wallet/${userId}`
//       );
//       const data = await res.json();

//       console.log("Wallet API Response:", data);

//       if (data.success) {
//         setWallet({
//           balance: data.wallet?.balance || 0,
//           transactions: data.wallet?.transactions || [],
//         });
//       } else {
//         setWallet({ balance: 0, transactions: [] });
//       }
//     } catch (err) {
//       console.log("Wallet load error:", err);
//       setWallet({ balance: 0, transactions: [] });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ------------------------------
//   // 🔹 Razorpay Add Money
//   // ------------------------------
//   const addMoney = async () => {
//     if (!amount || amount <= 0) {
//       alert("Enter valid amount");
//       return;
//     }

//     try {
//       const response = await PaymentAPI.createOrder({
//         amount: Number(amount),
//         userId: user._id,
//       });

//       if (!response?.success) {
//         alert("Order creation failed!");
//         return;
//       }

//       const rzp = new window.Razorpay({
//         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//         amount: response.order.amount,
//         currency: response.order.currency,
//         name: "Astro App Wallet",
//         description: "Add Money to Wallet",
//         order_id: response.order.id,

//         handler: async (res) => {
//           const verifyRes = await PaymentAPI.verifyPayment({
//             ...res,
//             amount,
//             userId: user._id,
//           });

//           if (verifyRes.success) {
//             alert("Money Added Successfully!");
//             setAmount("");
//             loadWallet(user._id);
//           } else {
//             alert("Payment verification failed");
//           }
//         },

//         prefill: {
//           name: user.name,
//           email: user.email,
//         },

//         theme: { color: "#f4b400" },
//       });

//       rzp.on("payment.failed", (err) => {
//         console.log("Payment failed:", err);
//         alert("Payment failed! Try again.");
//       });

//       rzp.open();
//     } catch (err) {
//       console.log("Payment Error:", err);
//       alert("Payment failed!");
//     }
//   };

//   // ------------------------------
//   // UI Section
//   // ------------------------------

//   if (!user) return <h2>Please Login First</h2>;
//   if (loading) return <h2>Loading Wallet...</h2>;

//   return (
//     <div className="wallet-wrapper">

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

//       <h1>My Wallet</h1>

//       {/* BALANCE CARD */}
//       <div className="wallet-balance-card">
//         <h2>Available Balance</h2>
//         <div className="balance-amount">₹{wallet.balance}</div>

//         {/* ADD MONEY */}
//         <div className="add-money-box">
//           <input
//             type="number"
//             placeholder="Enter Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//           <button onClick={addMoney}>Add Money</button>
//         </div>
//       </div>

//       {/* TRANSACTIONS */}
//       <div className="wallet-transactions-card">
//         <h2>Transaction History</h2>

//         {wallet.transactions.length === 0 ? (
//           <p className="no-transactions">No transactions yet.</p>
//         ) : (
//           wallet.transactions.map((tx, i) => (
//             <div className="transaction-item" key={i}>
//               <div>
//                 <h4>{tx.type === "credit" ? "Money Added" : "Money Used"}</h4>
//                 <span>{new Date(tx.date).toLocaleString()}</span>
//               </div>

//               <div className={`tx-amount ${tx.type}`}>
//                 {tx.type === "credit" ? "+" : "-"} ₹{tx.amount}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "../../styles/MyWallet.css";
import { PaymentAPI } from "../../api/apiService";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MyWallet() {
  const [user, setUser] = useState(null);
  const [wallet, setWallet] = useState({ balance: 0, transactions: [] });
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  /* ⭐ STARFIELD EFFECT */
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

  /* FETCH USER */
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
          loadWallet(u._id);
        }
      } catch (err) {
        console.log("User fetch error:", err);
      }
    };

    fetchUser();
  }, []);

  /* LOAD WALLET */
  const loadWallet = async (userId) => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/wallet/${userId}`
      );
      const data = await res.json();

      if (data.success) {
        setWallet({
          balance: data.wallet?.balance || 0,
          transactions: data.wallet?.transactions || [],
        });
      }
    } catch (err) {
      console.log("Wallet load error:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ADD MONEY */
  const addMoney = async () => {
    if (!amount || amount <= 0) return alert("Enter valid amount");

    try {
      const response = await PaymentAPI.createOrder({
        amount: Number(amount),
        userId: user._id,
      });

      if (!response?.success) {
        alert("Order creation failed!");
        return;
      }

      const rzp = new window.Razorpay({
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: response.order.amount,
        currency: response.order.currency,
        name: "Astro App Wallet",
        description: "Add Money",
        order_id: response.order.id,

        handler: async (res) => {
          const verifyRes = await PaymentAPI.verifyPayment({
            ...res,
            amount,
            userId: user._id,
          });

          if (verifyRes.success) {
            alert("Money Added Successfully!");
            setAmount("");
            loadWallet(user._id);
          }
        },
      });

      rzp.open();
    } catch (err) {
      alert("Payment failed!");
    }
  };

  if (!user) return <h2 style={{ color: "#fff" }}>Please Login First</h2>;
  if (loading) return <h2 style={{ color: "#fff" }}>Loading Wallet...</h2>;

  return (
    <>
      <div className="mp-stars"></div>

      <div className="wallet-cosmic">

        {/* 3D BACK BUTTON */}
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

        <h1 className="wallet-title">My Wallet</h1>

        {/* BALANCE CARD */}
        <div className="wallet-card glass-card">
          <h2>Available Balance</h2>
          <div className="wallet-amount">₹{wallet.balance}</div>

          <div className="wallet-add-box">
            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={addMoney}>Add Money</button>
          </div>
        </div>

        {/* TRANSACTIONS */}
        <div className="wallet-card glass-card">
          <h2>Transaction History</h2>

          {wallet.transactions.length === 0 ? (
            <p className="no-tx">No transactions yet.</p>
          ) : (
            wallet.transactions.map((tx, i) => (
              <div className="wallet-tx-item" key={i}>
                <div>
                  <h4>{tx.type === "credit" ? "Money Added" : "Money Used"}</h4>
                  <span>{new Date(tx.date).toLocaleString()}</span>
                </div>

                <div className={`wallet-tx-amount ${tx.type}`}>
                  {tx.type === "credit" ? "+" : "-"} ₹{tx.amount}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
