import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/UserCallScheduling.css";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:7000/api/consultations";

export default function UserCallScheduling() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    astrologerName: "",
    type: "Video",
    scheduledAt: "",
    notes: "",
  });

  const loadCalls = async () => {
    const res = await axios.get(`${API}/user/${user.email}`);
    setCalls(res.data.consultations || []);
  };

  useEffect(() => {
    if (user?.email) loadCalls();
  }, []);

  const scheduleCall = async () => {
    if (!form.astrologerName || !form.scheduledAt) {
      alert("Astrologer & Date required");
      return;
    }

    try {
      setLoading(true);

      await axios.post(API, {
        clientName: user.name || user.email,
        clientEmail: user.email,
        astrologerName: form.astrologerName,
        type: form.type,
        scheduledAt: new Date(form.scheduledAt).toISOString(),
        notes: form.notes,
      });

      alert("✅ Call scheduled successfully");

      setForm({
        astrologerName: "",
        type: "Video",
        scheduledAt: "",
        notes: "",
      });

      loadCalls();
    } catch (err) {
      alert(err.response?.data?.error || "❌ Failed to schedule call");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <p>Please login</p>;

  return (
    <div className="user-call-bg">
      <button className="back-btn" onClick={() => navigate(-1)}>
        Back
      </button>

      <div className="user-call-container">
        <h2> Call Scheduling</h2>

        <div className="call-form">
          <input
            placeholder="Astrologer Name"
            value={form.astrologerName}
            onChange={(e) =>
              setForm({ ...form, astrologerName: e.target.value })
            }
          />

          <select
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value })}
          >
            <option value="Chat">Chat</option>
            <option value="Audio">Audio</option>
            <option value="Video">Video</option>
          </select>

          <input
            type="datetime-local"
            value={form.scheduledAt}
            onChange={(e) =>
              setForm({ ...form, scheduledAt: e.target.value })
            }
          />

          <textarea
            placeholder="Notes (optional)"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          />

          <button onClick={scheduleCall} disabled={loading}>
            {loading ? "Scheduling..." : "Schedule Call"}
          </button>
        </div>

        {calls.map((c) => (
          <div key={c._id} className="call-card">
            <h3>{c.astrologerName}</h3>
            <p>{new Date(c.scheduledAt).toLocaleString()}</p>

            {c.meetingLink && (
              <a
                href={c.meetingLink}
                target="_blank"
                rel="noreferrer"
                className="join-btn"
              >
                🎥 Join Google Meet
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
