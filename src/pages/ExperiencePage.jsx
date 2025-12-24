import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ExperienceSection.css";

const API = "http://localhost:7000/api/experience";

export default function ExperiencePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) {
    return (
      <div className="experience-wrapper">
        <p className="loading-text">Loading experiences...</p>
      </div>
    );
  }

  return (
    <div className="experience-wrapper">
      <h2 className="experience-title">Our Experiences</h2>

      {data.length === 0 ? (
        <p className="empty-text">No experiences available.</p>
      ) : (
        <div className="experience-grid">
          {data.map((item) => (
            <div key={item._id} className="experience-card">
              {/* IMAGE / PDF PREVIEW */}
              <div className="experience-media">
                {item.fileType === "image" ? (
                  <img
                    src={item.fileUrl}
                    alt={item.title}
                    className="experience-image"
                  />
                ) : (
                  <div className="pdf-box">
                    <span className="pdf-icon">📄</span>
                    <a
                      href={item.fileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="pdf-link"
                    >
                      View PDF
                    </a>
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="experience-content">
                <h3 className="experience-card-title">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="experience-desc">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
