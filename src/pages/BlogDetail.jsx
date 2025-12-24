
// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../styles/blog.css"; // Uses your modern blog CSS

// const BlogDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { blog } = location.state || {};

//   if (!blog) {
//     return (
//       <div className="blog-detail">
//         <h2>Blog Not Found</h2>
//         <button className="blog-back-btn" onClick={() => navigate("/blogs")}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="blog-detail">
//       <button className="blog-back-btn" onClick={() => navigate("/blogs")}>
//         ← Back to Blogs
//       </button>

//       <h1>{blog.title}</h1>
//       <p className="blog-author">{blog.author} | {blog.date}</p>
      
//       <div className="blog-detail-image-container">
//         <img src={blog.image} alt={blog.title} className="blog-detail-image" />
//       </div>

//       <p className="blog-detail-content">{blog.content}</p>
//     </div>
//   );
// };

// export default BlogDetail;

// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../styles/blog.css";

// const BlogDetail = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { blog } = location.state || {};

//   if (!blog) {
//     return (
//       <div className="blog-detail">
//         <h2>Blog Not Found</h2>
//         <button className="blog-back-btn" onClick={() => navigate("/blogs")}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="blog-detail">
//       <button className="blog-back-btn" onClick={() => navigate("/blogs")}>
//         ← Back to Blogs
//       </button>

//       {/* Frosted Glass Container */}
//       <div className="blog-detail-content">
//         <h1>{blog.title}</h1>
//         <p className="blog-author">{blog.author} | {blog.date}</p>
//         <img src={blog.image} alt={blog.title} className="blog-detail-image" />
//         <p>{blog.content}</p>
//       </div>
//     </div>
//   );
// };

// export default BlogDetail;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/blog.css";

const BlogDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { blog } = location.state || {};

  if (!blog) {
    return (
      <div className="blog-detail">
        <h2>Blog Not Found</h2>
        <button className="blog-back-btn" onClick={() => navigate("/blogs")}>
          ← Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className="blog-detail cosmic-bg">
      {/* 🔙 Back Button */}
      <button className="blog-back-btn" onClick={() => navigate("/blogs")}>
        ← Back to Blogs
      </button>

      {/* 🌌 Main Blog Detail Container */}
      <div className="blog-detail-content glass-card">
        <h1>{blog.title}</h1>
        <p className="blog-author">
          ✍️ {blog.author} • {blog.date}
        </p>

        {/* 🖼️ Featured Image */}
        <div className="blog-image-wrapper">
          <img
            src={blog.image}
            alt={blog.title}
            className="blog-detail-image"
          />
        </div>

        {/* 💫 Blog Text */}
        <div className="blog-detail-text">
          <p>
            {blog.content ||
              "Welcome to the cosmic journey of abundance and self-discovery. In this article, we explore how astrology, numerology, and energy work can help manifest your highest potential and wealth consciousness."}
          </p>

          <p>
            🌙 <strong>1. Align Your Intentions:</strong> Focus your thoughts
            and visualize your goals. The energy you emit is the energy you
            attract.
          </p>

          <p>
            🔮 <strong>2. Cleanse Your Energy Field:</strong> Declutter your
            aura with meditation, salt baths, and breathing rituals to raise
            vibrations.
          </p>

          <p>
            💫 <strong>3. Cosmic Synchronization:</strong> Plan major life
            events with planetary movements and cosmic energies in mind.
          </p>

          <p>
            🌠 <strong>4. Take Inspired Action:</strong> The Universe rewards
            aligned effort. Walk with purpose, not pressure.
          </p>

          <p>
            ⚡ <strong>Final Note:</strong> Remember, manifestation is not just
            about attracting—it’s about aligning. When you radiate gratitude and
            confidence, the cosmos conspires in your favor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

