// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
// // import "../../styles/Footer.css";

// // const Footer = () => {
// //   return (
// //     <footer className="footer">
// //       <div className="footer-container">
// //         {/* About */}
// //         <div className="footer-section">
// //           <h2 className="footer-title">AstroConnect</h2>
// //           <p className="footer-text">
// //             Guiding you through the cosmic pathways of Energy, Movement, Space, and Manifestation.
// //           </p>
// //         </div>

// //         {/* Quick Links */}
// //         <div className="footer-section">
// //           <h3 className="footer-subtitle">Quick Links</h3>
// //           <ul className="footer-links">
// //             <li><Link to="/" className="footer-link">Home</Link></li>
// //             <li><Link to="/blogs" className="footer-link">Blogs</Link></li>
// //             <li><Link to="/contact" className="footer-link">Contact</Link></li>
// //             <li><Link to="/book" className="footer-link">Book Reading</Link></li>
// //           </ul>
// //         </div>

// //         {/* Social & Contact */}
// //         <div className="footer-section">
// //           <h3 className="footer-subtitle">Connect</h3>
// //           <p className="footer-text">Email: support@astroconnect.com</p>
// //           <p className="footer-text">Phone: +91 98765 43210</p>
// //           <div className="footer-social">
// //             <a href="https://instagram.com/astroconnect" target="_blank" rel="noreferrer"><FaInstagram /></a>
// //             <a href="https://facebook.com/astroconnect" target="_blank" rel="noreferrer"><FaFacebookF /></a>
// //             <a href="https://youtube.com/astroconnect" target="_blank" rel="noreferrer"><FaYoutube /></a>
// //             <a href="https://twitter.com/astroconnect" target="_blank" rel="noreferrer"><FaTwitter /></a>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="footer-bottom">
// //         © {new Date().getFullYear()} AstroConnect. All rights reserved.
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;


// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   FaInstagram,
//   FaFacebookF,
//   FaYoutube,
//   FaTwitter,
//   FaWhatsapp,
//    FaLinkedinIn,
// } from "react-icons/fa";
// import "../../styles/Footer.css";

// const Footer = () => {
//   return (
//     <footer className="astro-footer">
//       <div className="footer-container">
//         {/* 🌙 Brand Section */}
//         <div className="footer-section about">
//           <h2 className="footer-logo">THE FIFTH CUSP</h2>
//           <p className="footer-desc">
//             Guiding you through the cosmic pathways of{" "}
//             <span>Astrology</span>, <span>Numerology</span>,{" "}
//             <span>Vastu</span>, <span>Tarot</span>, and{" "}
//             <span>Manifestation</span> — helping you align with your higher self.
//           </p>
//         </div>

//         {/* 🔗 Quick Links */}
//         <div className="footer-section links">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about-us">Language</Link></li>
//             <li><Link to="/blogs">Well Being</Link></li>
//             <li><Link to="/contact">Manifestion Calender</Link></li>
//             <li><Link to="/careers">Blogs</Link></li>
//           </ul>
//         </div>

//         {/* 📞 Contact Info */}
//         <div className="footer-section contact">
         
//           <p>Email: <a href="mailto:support@astroconnect.com">enquiry@thefifthcusp.com</a></p>
//           <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
//           <div className="social-icons">
//             {/* <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
//             <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
//             <a href="https://youtube.com/" target="_blank" rel="noreferrer"><FaYoutube /></a>
//             <a href="https://twitter.com/" target="_blank" rel="noreferrer"><FaTwitter /></a> */}
//             <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
//             <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            
//           </div>
//         </div>
//       </div>

//       {/* 🪐 Bottom */}
//       <div className="footer-bottom">
//         © {new Date().getFullYear()} <span>THE FIFTH CUSP</span>. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="astro-footer">
      <div className="footer-container">

        {/* 🌙 Brand Section */}
        <div className="footer-section about">
          <div className="footer-brand">
            <img
              src="https://res.cloudinary.com/doerrm32l/image/upload/v1761893673/astrologo_fjndbn.png"
              alt="The Fifth Cusp Logo"
              className="footer-logo-img"
            />
            <h2 className="footer-logo">THE FIFTH CUSP</h2>
          </div>

          <p className="footer-desc">
            Guiding you through the cosmic pathways of{" "}
            <span>Astrology</span>, <span>Numerology</span>,{" "}
            <span>Vastu</span>, <span>Tarot</span>, and{" "}
            <span>Manifestation</span> — helping you align with your higher self.
          </p>
        </div>

        {/* 🔗 Quick Links */}
        <div className="footer-section links">
          
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">Language</Link></li>
            <li><Link to="/manifestation">Well Being</Link></li>
            <li><Link to="/manifestation">Manifestation Calendar</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>

        {/* 📞 Contact */}
        <div className="footer-section contact">
          

          <p>
            Email:{" "}
            <a href="mailto:enquiry@thefifthcusp.com">
              enquiry@thefifthcusp.com
            </a>
          </p>

          <p>
            Phone:{" "}
            <a href="tel:+919876543210">
              +91 98765 43210
            </a>
          </p>

          <div className="social-icons">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* 🪐 Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()}{" "}
        <span>THE FIFTH CUSP</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;




