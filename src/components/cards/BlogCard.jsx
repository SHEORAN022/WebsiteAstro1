// import React from "react";

// const BlogCard = ({ title, description, image, date, author, ctaText, onClick }) => {
//   return (
//     <div
//       onClick={onClick}
//       style={{
//         cursor: "pointer",
//         borderRadius: "10px",
//         overflow: "hidden",
//         boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//         transition: "transform 0.3s, box-shadow 0.3s",
//       }}
//       className="blog-card"
//     >
//       <div style={{ overflow: "hidden" }}>
//         <img
//           src={image}
//           alt={title}
//           style={{
//             width: "100%",
//             height: "200px",
//             objectFit: "cover",
//             transition: "transform 0.3s",
//           }}
//           className="blog-image"
//         />
//       </div>
//       <div style={{ padding: "15px", background: "#fff" }}>
//         <h3 style={{ margin: "0 0 10px", fontSize: "1.2rem", fontWeight: "600" }}>
//           {title}
//         </h3>
//         <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "15px" }}>
//           {description}
//         </p>
//         <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#888" }}>
//           <span>{author}</span>
//           <span>{date}</span>
//         </div>
//         <button
//           style={{
//             marginTop: "15px",
//             padding: "8px 12px",
//             border: "none",
//             borderRadius: "5px",
//             backgroundColor: "#222",
//             color: "#fff",
//             cursor: "pointer",
//             transition: "background 0.3s",
//           }}
//           onClick={(e) => { e.stopPropagation(); onClick(); }}
//         >
//           {ctaText}
//         </button>
//       </div>
//       <style>
//         {`
//           .blog-card:hover {
//             transform: translateY(-8px);
//             box-shadow: 0 8px 20px rgba(0,0,0,0.2);
//           }
//           .blog-card:hover .blog-image {
//             transform: scale(1.05);
//           }
//           @media (max-width: 600px) {
//             .blog-card {
//               margin: 0 auto;
//             }
//             .blog-image {
//               height: 180px;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default BlogCard;

// import React from "react";

// const BlogCard = ({ title, description, image, date, author, ctaText, onClick }) => (
//   <div className="blog-card" onClick={onClick}>
//     <img src={image} alt={title} className="blog-card-image" />
//     <div className="blog-card-content">
//       <h3>{title}</h3>
//       <p>{description}</p>
//       <div className="blog-card-footer">
//         <span>{author}</span>
//         <span>{date}</span>
//         <button onClick={(e) => { e.stopPropagation(); onClick(); }}>{ctaText}</button>
//       </div>
//     </div>
//   </div>
// );

// export default BlogCard;

import React from "react";
import "../../styles/blogCard.css";

const BlogCard = ({ title, description, image, date, author, ctaText, onClick }) => {
  return (
    <div className="blog-card" onClick={onClick}>
      <div className="blog-card-image-container">
        <img src={image} alt={title} className="blog-card-image" />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-description">{description}</p>
        <p className="blog-card-meta">
          <span>{author}</span> | <span>{date}</span>
        </p>
        <button className="blog-card-cta">{ctaText}</button>
      </div>
    </div>
  );
};

export default BlogCard;
