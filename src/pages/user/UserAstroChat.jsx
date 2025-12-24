// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API = "http://localhost:7000/api/chat";

// export default function UserAstroChat() {
//   const [chat, setChat] = useState(null);
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     gender: "",
//     dob: "",
//     tob: "",
//     pob: "",
//     intent: "",
//     problemType: ""
//   });

//   const chatId = localStorage.getItem("chatId");

//   /* ================= START CHAT ================= */
//   const startChat = async () => {
//     if (!form.name || !form.intent) {
//       alert("Name & intent required");
//       return;
//     }

//     setLoading(true);
//     const res = await axios.post(`${API}/start`, form);
//     localStorage.setItem("chatId", res.data._id);
//     setChat(res.data);
//     setLoading(false);
//   };

//   /* ================= LOAD CHAT ================= */
//   const loadChat = async () => {
//     if (!chatId) return;
//     const res = await axios.get(`${API}/${chatId}`);
//     setChat(res.data);
//   };

//   /* ================= SEND MESSAGE ================= */
//   const sendMessage = async () => {
//     if (!message || !chatId) return;

//     await axios.post(`${API}/send/${chatId}`, {
//       sender: "user",
//       text: message
//     });

//     setMessage("");
//     loadChat();
//   };

//   /* ================= POLLING ================= */
//   useEffect(() => {
//     if (chatId) {
//       loadChat();
//       const interval = setInterval(loadChat, 4000);
//       return () => clearInterval(interval);
//     }
//   }, []);

//   /* ================= UI ================= */

//   // 1️⃣ CHAT FORM
//   if (!chatId && !chat) {
//     return (
//       <div style={{ maxWidth: 420, margin: "auto", padding: 20 }}>
//         <h2>🪐 Start Astrology Chat</h2>

//         {Object.keys(form).map((key) => (
//           <input
//             key={key}
//             placeholder={key.toUpperCase()}
//             value={form[key]}
//             onChange={(e) =>
//               setForm({ ...form, [key]: e.target.value })
//             }
//             style={{
//               width: "100%",
//               padding: 8,
//               marginBottom: 8
//             }}
//           />
//         ))}

//         <button onClick={startChat} disabled={loading}>
//           {loading ? "Starting..." : "Start Chat"}
//         </button>
//       </div>
//     );
//   }

//   // 2️⃣ CHAT WINDOW
//   if (!chat) return <p>Loading chat...</p>;

//   return (
//     <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
//       <h3>💬 Astrology Chat</h3>

//       <div
//         style={{
//           border: "1px solid #ccc",
//           padding: 10,
//           height: 320,
//           overflowY: "auto",
//           marginBottom: 10
//         }}
//       >
//         {chat.messages.map((m, i) => (
//           <div
//             key={i}
//             style={{
//               textAlign: m.sender === "user" ? "right" : "left",
//               marginBottom: 6
//             }}
//           >
//             <b>{m.sender}:</b> {m.text}
//           </div>
//         ))}
//       </div>

//       <div>
//         <input
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type your message..."
//           style={{ width: "80%", padding: 8 }}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/UserAstroChat.css";

const API = "http://localhost:7000/api/chat";

export default function UserAstroChat() {
  const navigate = useNavigate();

  const [chat, setChat] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    gender: "",
    dob: "",
    tob: "",
    pob: "",
    intent: "",
    problemType: "",
  });

  const chatId = localStorage.getItem("chatId");

  /* ================= START CHAT ================= */
  const startChat = async () => {
    if (!form.name || !form.intent) {
      alert("Name & intent required");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(`${API}/start`, form);
      localStorage.setItem("chatId", res.data._id);
      setChat(res.data);
    } finally {
      setLoading(false);
    }
  };

  /* ================= LOAD CHAT ================= */
  const loadChat = async () => {
    if (!chatId) return;
    const res = await axios.get(`${API}/${chatId}`);
    setChat(res.data);
  };

  /* ================= SEND MESSAGE ================= */
  const sendMessage = async () => {
    if (!message || !chatId) return;

    await axios.post(`${API}/send/${chatId}`, {
      sender: "user",
      text: message,
    });

    setMessage("");
    loadChat();
  };

  /* ================= POLLING ================= */
  useEffect(() => {
    if (chatId) {
      loadChat();
      const interval = setInterval(loadChat, 4000);
      return () => clearInterval(interval);
    }
  }, []);

  /* ================= STAR GENERATION ================= */
  useEffect(() => {
    const starfield = document.getElementById("astro-starfield");
    if (starfield && !starfield.hasChildNodes()) {
      for (let i = 0; i < 160; i++) {
        const star = document.createElement("div");
        star.className = "astro-star";
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        starfield.appendChild(star);
      }
    }
  }, []);

  /* ================= START FORM ================= */
  if (!chatId && !chat) {
    return (
      <div className="astro-bg">
        <div id="astro-starfield" className="astro-starfield"></div>

        <div className="astro-orbs">
          <div className="astro-orb orb-1"></div>
          <div className="astro-orb orb-2"></div>
          <div className="astro-orb orb-3"></div>
        </div>

        <button className="astro-back-btn" onClick={() => navigate(-1)}>
           Back
        </button>

        <div className="astro-container">
          <div className="astro-card">
            <h2> Start Astrology Chat</h2>

            {Object.keys(form).map((key) => (
              <input
                key={key}
                placeholder={key.toUpperCase()}
                value={form[key]}
                onChange={(e) =>
                  setForm({ ...form, [key]: e.target.value })
                }
              />
            ))}

            <button onClick={startChat} disabled={loading}>
              {loading ? "Starting..." : "Start Chat"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ================= CHAT WINDOW ================= */
  if (!chat) return null;

  return (
    <div className="astro-bg">
      <div id="astro-starfield" className="astro-starfield"></div>

      <div className="astro-orbs">
        <div className="astro-orb orb-1"></div>
        <div className="astro-orb orb-2"></div>
        <div className="astro-orb orb-3"></div>
      </div>

      <button className="astro-back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="astro-container">
        <h2>💬 Astrology Chat</h2>

        <div className="astro-chat-box">
          {chat.messages.map((m, i) => (
            <div
              key={i}
              className={`astro-msg ${
                m.sender === "user" ? "user" : "admin"
              }`}
            >
              <b>{m.sender}:</b> {m.text}
            </div>
          ))}
        </div>

        <div className="astro-input-row">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}
