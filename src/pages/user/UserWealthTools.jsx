import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:7000/api/wealth";

export default function UserWealthTools({ user }) {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ===== ACCESS CHECK ===== */
  const hasAccess =
    user?.hasMaterialProgram === true ||
    user?.programs?.includes("material");

  /* ===== LOAD DATA (GET ONLY) ===== */
  useEffect(() => {
    if (!hasAccess) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(API);
        setList(res.data?.data || []);
      } catch (err) {
        console.error("Wealth tools load failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [hasAccess]);

  /* ===== NO ACCESS ===== */
  if (!hasAccess) {
    return (
      <div style={styles.page}>
        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          ⬅ Back
        </button>

        <div style={styles.lockBox}>
          <h2>🔒 My Wealth Tools</h2>
          <p>This section is available only for</p>
          <strong>Material Program Members</strong>
        </div>
      </div>
    );
  }

  /* ===== LOADING ===== */
  if (loading) {
    return (
      <div style={styles.page}>
        <button style={styles.backBtn} onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <p style={{ color: "#fff" }}>Loading wealth tools...</p>
      </div>
    );
  }

  /* ===== UI ===== */
  return (
    <div style={styles.page}>
      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div style={styles.container}>
        <h2 style={styles.heading}>💰 My Wealth Tools</h2>
        <p style={styles.sub}>
          Premium PDFs for Material Program Members
        </p>

        {list.length === 0 ? (
          <p>No PDFs available</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>#</th>
                <th style={styles.th}>Title</th>
                <th style={styles.th}>View</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={item._id}>
                  <td style={styles.td}>{index + 1}</td>
                  <td style={styles.td}>{item.title}</td>
                  <td style={styles.td}>
                    <a
                      href={item.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.link}
                    >
                      Open PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

/* ===== STYLES ===== */
const styles = {
  page: {
    minHeight: "100vh",
    padding: "30px 20px",
    background:
      "radial-gradient(circle at top, #1e1b4b 0%, #000 60%)",
  },

  backBtn: {
    background: "transparent",
    border: "none",
    color: "#a78bfa",
    fontSize: 16,
    cursor: "pointer",
    marginBottom: 20,
    fontWeight: 600,
  },

  container: {
    maxWidth: 1100,
    margin: "0 auto",
    color: "#fff",
  },

  heading: {
    fontSize: 28,
    fontWeight: 700,
  },

  sub: {
    opacity: 0.7,
    marginBottom: 25,
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "rgba(255,255,255,0.06)",
    borderRadius: 14,
    overflow: "hidden",
  },

  th: {
    padding: 14,
    background: "rgba(255,255,255,0.08)",
    textAlign: "left",
    fontSize: 14,
  },

  td: {
    padding: 14,
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    fontSize: 14,
  },

  link: {
    color: "#00eaff",
    fontWeight: 600,
    textDecoration: "none",
  },

  lockBox: {
    maxWidth: 520,
    margin: "100px auto",
    padding: 40,
    textAlign: "center",
    background: "rgba(255,255,255,0.06)",
    borderRadius: 18,
    color: "#fff",
    boxShadow: "0 0 40px rgba(138,43,226,0.25)",
  },
};
