import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API =
  process.env.REACT_APP_API_URL ||
  "http://localhost:7000/api/content";

export default function UserLearningGrowth() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  /* ================= LOAD CONTENT ================= */
  const loadContent = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API);

      const now = new Date();

      const visible = (res.data.data || []).filter((c) => {
        if (!c.scheduledDate) return true;
        return new Date(c.scheduledDate) <= now;
      });

      setItems(visible);
    } catch (err) {
      console.error("Failed to load content", err);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContent();
  }, []);

  if (!user) return <p>Please login</p>;

  /* ================= VIEWER ================= */
  const renderViewer = () => {
    if (!selected) return null;

    const renderFile = () => {
      switch (selected.type) {
        case "pdf":
          return (
            <iframe
              src={selected.fileUrl}
              width="100%"
              height="450"
              title="PDF"
            />
          );

        case "audio":
          return <audio controls src={selected.fileUrl} style={{ width: "100%" }} />;

        case "video":
          return (
            <video
              src={selected.fileUrl}
              controls
              style={{ width: "100%", borderRadius: 10 }}
            />
          );

        case "blog":
        case "prompt":
          return (
            <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
              {selected.content || "No text"}
            </div>
          );

        default:
          return <p>Unsupported</p>;
      }
    };

    return (
      <div className="ulg-viewer-bg">
        <div className="ulg-viewer">
          <div className="ulg-viewer-header">
            <h3>{selected.title}</h3>
            <button onClick={() => setSelected(null)}>✖</button>
          </div>
          {renderFile()}
        </div>
      </div>
    );
  };

  /* ================= UI ================= */
  return (
    <div className="ulg-bg">
      <button className="ulg-back" onClick={() => navigate(-1)}>
         Back
      </button>

      <h2> My Learning & Growth</h2>
      <p className="ulg-sub">
        Free PDFs • Meditations • Growth Tools • Inner Healing
      </p>

      {loading ? (
        <p>Loading...</p>
      ) : items.length === 0 ? (
        <p>No content available</p>
      ) : (
        <div className="ulg-grid">
          {items.map((item) => {
            const locked = item.access !== "free";

            return (
              <div
                key={item._id}
                className={`ulg-card ${locked ? "locked" : ""}`}
                onClick={() => !locked && setSelected(item)}
              >
                <h3>{item.title}</h3>

                <span className={`badge ${item.access}`}>
                  {item.access.toUpperCase()}
                </span>

                <p>{item.type.toUpperCase()}</p>

                <button disabled={locked}>
                  {locked ? "🔒 Locked" : "Open"}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {renderViewer()}
    </div>
  );
}
