
// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "../styles/Sidebar.css";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Hamburger for Mobile */}
//       <div className="hamburger" onClick={toggleSidebar}>
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>

//       {/* SIDEBAR */}
//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <h2 className="sidebar-logo">AstroConnect</h2>

//         <nav className="sidebar-nav">

//           {/* HOME MENU GROUP */}
//           <div className="sidebar-group">
//             <p className="sidebar-group-title">Home</p>

//             <NavLink 
//               to="/" 
//               className={({ isActive }) => (isActive ? "active" : "")} 
//               onClick={toggleSidebar}
//             >
//               Home
//             </NavLink>

//             <NavLink 
//               to="/about-us" 
//               className={({ isActive }) => (isActive ? "active" : "")} 
//               onClick={toggleSidebar}
//             >
//               About Us
//             </NavLink>

//             <NavLink 
//               to="/services" 
//               className={({ isActive }) => (isActive ? "active" : "")} 
//               onClick={toggleSidebar}
//             >
//               Our Services
//             </NavLink>

//             <NavLink 
//               to="/careers" 
//               className={({ isActive }) => (isActive ? "active" : "")} 
//               onClick={toggleSidebar}
//             >
//               Careers
//             </NavLink>

//             <NavLink 
//               to="/faqs" 
//               className={({ isActive }) => (isActive ? "active" : "")} 
//               onClick={toggleSidebar}
//             >
//               FAQs
//             </NavLink>
//           </div>

//           {/* OTHER MAIN MENU ITEMS */}
//           <NavLink 
//             to="/energy" 
//             className={({ isActive }) => (isActive ? "active" : "")}
//             onClick={toggleSidebar}
//           >
//             Energy
//           </NavLink>

//           <NavLink 
//             to="/astrology" 
//             className={({ isActive }) => (isActive ? "active" : "")}
//             onClick={toggleSidebar}
//           >
//             Astrology
//           </NavLink>

//           <NavLink 
//             to="/vastu" 
//             className={({ isActive }) => (isActive ? "active" : "")}
//             onClick={toggleSidebar}
//           >
//             Vastu
//           </NavLink>

//           <NavLink 
//             to="/manifestation" 
//             className={({ isActive }) => (isActive ? "active" : "")}
//             onClick={toggleSidebar}
//           >
//             Manifestation
//           </NavLink>

//           <NavLink 
//             to="/material" 
//             className={({ isActive }) => (isActive ? "active" : "")}
//             onClick={toggleSidebar}
//           >
//             Material
//           </NavLink>

//           <NavLink 
//             to="/blogs" 
//             className={({ isActive }) => (isActive ? "active" : "")}
//             onClick={toggleSidebar}
//           >
//             Blogs
//           </NavLink>

//           <NavLink 
//             to="/account" 
//             className={({ isActive }) => (isActive ? "active" : "")}
//             onClick={toggleSidebar}
//           >
//             Your Account
//           </NavLink>

//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import "../styles/Sidebar.css";

// const Sidebar = ({ sidebarOpen, setSidebarOpen, isLoggedIn, handleLogout }) => {
//   const sidebarRef = useRef(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
//   const [openDropdown, setOpenDropdown] = useState(null);

//   /* NAV-LINKS EXACT SAME AS HOME.JSX */
//   const navLinks = [
//     {
//       name: "Home",
//       link: "/",
//       dropdown: [
//         { name: "About Us", link: "/about-us" },
//         { name: "Careers", link: "/careers" },
//       ],
//     },
//     { name: "Energy", link: "/energy" },
//     { name: "Astrology", link: "/astrology" },
//     { name: "Vastu", link: "/vastu" },
//     { name: "Manifestation", link: "/manifestation" },
//     { name: "Material", link: "/material" },
//     { name: "Blogs", link: "/blogs" },
//     isLoggedIn
//       ? { name: "Logout", action: handleLogout }
//       : { name: "Your Account", link: "/auth" },
//   ];

//   /* RESPONSIVE CHECK */
//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 1024;
//       setIsMobile(mobile);

//       if (mobile) setSidebarOpen(false);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   /* OUTSIDE CLICK + ESC CLOSE */
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
//         setSidebarOpen(false);
//       }
//     };

//     const handleEsc = (e) => {
//       if (e.key === "Escape") setSidebarOpen(false);
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener("keydown", handleEsc);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener("keydown", handleEsc);
//     };
//   }, [sidebarOpen]);

//   return (
//     <>
//       {/* HAMBURGER */}
//      {!sidebarOpen && (
//   <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
//     ☰
//   </button>
// )}


//       {/* MOBILE OVERLAY */}
//       {sidebarOpen && isMobile && (
//         <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
//       )}

//       {/* SIDEBAR */}
//       <div
//         ref={sidebarRef}
//         className={`sidebar ${sidebarOpen ? "open" : ""}`}
//       >
        
//         {/* Close button for Mobile */}
//         {isMobile && (
//           <button className="close-sidebar-btn" onClick={() => setSidebarOpen(false)}>
            
//           </button>
//         )}

//         <h2 className="sidebar-logo">THE FIFTH CUSP</h2>

//         <nav className="sidebar-nav">
//           {navLinks.map((item, idx) => (
//             <div key={idx} className="sidebar-item">

//               {/* MAIN ITEM */}
//               <div
//                 className="sidebar-main-link"
//                 onClick={() => {
//                   if (item.dropdown) {
//                     setOpenDropdown(openDropdown === idx ? null : idx);
//                   } else if (item.action) {
//                     item.action(); // logout
//                     setSidebarOpen(false);
//                   } else {
//                     window.location.href = item.link;
//                     setSidebarOpen(false);
//                   }
//                 }}
//               >
//                 <span>{item.name}</span>

//                 {/* Dropdown Arrow */}
//                 {item.dropdown && (
//                   <span className={`dropdown-arrow ${openDropdown === idx ? "open" : ""}`}>
//                     ▶
//                   </span>
//                 )}
//               </div>

//               {/* DROPDOWN LINKS */}
//               {item.dropdown && openDropdown === idx && (
//                 <div className="dropdown-menu">
//                   {item.dropdown.map((sub, sIdx) => (
//                     <NavLink
//                       key={sIdx}
//                       to={sub.link}
//                       onClick={() => setSidebarOpen(false)}
//                       className="dropdown-link"
//                     >
//                       {sub.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               )}

//             </div>
//           ))}
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";
import logo from "../assets/logo.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen, isLoggedIn, handleLogout }) => {
  const sidebarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [openDropdown, setOpenDropdown] = useState(null);

  /* NAV-LINKS EXACT SAME AS HOME.JSX */
  const navLinks = [
    // {
    //   name: "Home",
    //   link: "/",
    //   dropdown: [
    //     { name: "About Us", link: "/about-us" },
    //     { name: "Careers", link: "/careers" },
    //   ],
    // },
    { name: "ABOUT US", link: "/about-us" },
    { name: "ENERGY", link: "/energy" },
    { name: "ASTROLOGY", link: "/astrology" },
    { name: "VASTU", link: "/vastu" },
    { name: "MANIFESTATION", link: "/manifestation" },
    { name: "FREE CALCULATORS", link: "/free-calculator" },
    { name: "MATERIAL", link: "/wealth-architecture" },
    // { name: "Tarot Reading", link: "/TaroatReading" },
    { name: "TAROT READING", link: "/tarot-reading" },

    { name: "CAREERS", link: "/careers" },
    { name: "BLOGS", link: "/blogs" },
    isLoggedIn
      ? { name: "LOGOUT", action: handleLogout }
      : { name: "YOUR ACCOUNT", link: "/auth" },
  ];

  /* RESPONSIVE CHECK */
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      if (mobile) setSidebarOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* OUTSIDE CLICK + ESC CLOSE */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [sidebarOpen]);

  return (
    <>
      {/* HAMBURGER BUTTON */}
      {!sidebarOpen && (
        <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
          ☰
        </button>
      )}

      {/* MOBILE OVERLAY */}
      {sidebarOpen && isMobile && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* SIDEBAR */}
      <div
        ref={sidebarRef}
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
      >
        {/* Close button for Mobile */}
        {isMobile && (
          <button className="close-sidebar-btn" onClick={() => setSidebarOpen(false)}>
          </button>
        )}

        {/* <h2 className="sidebar-logo">THE FIFTH CUSP</h2> */}
        <div
  className="sidebar-logo-wrapper"
  onClick={() => {
    window.location.href = "/";
    setSidebarOpen(false);
  }}
>
  <img
  src={logo}
    // src="../assets/logo.png"
    alt="The Fifth Cusp Logo"
    className="sidebar-logo-img"
  />
</div>


        <nav className="sidebar-nav">
          {navLinks.map((item, idx) => (
            <div key={idx} className="sidebar-item">

              {/* MAIN ITEM CLICK */}
              <div
                className="sidebar-main-link"
                onClick={(e) => {

                  /* 🎯 SPECIAL CASE → HOME text = direct navigation */
                  if (item.name === "Home") {
                    window.location.href = "/";
                    setSidebarOpen(false);
                    return;
                  }

                  /* 🎯 IF has dropdown → open/close */
                  if (item.dropdown) {
                    setOpenDropdown(openDropdown === idx ? null : idx);
                    return;
                  }

                  /* 🎯 LOGOUT */
                  if (item.action) {
                    item.action();
                    setSidebarOpen(false);
                    return;
                  }

                  /* 🎯 NORMAL NAVIGATION */
                  window.location.href = item.link;
                  setSidebarOpen(false);
                }}
              >
                <span>{item.name}</span>

                {/* DROPDOWN ARROW */}
                {item.dropdown && (
                  <span
                    className={`dropdown-arrow ${openDropdown === idx ? "open" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent navigating home
                      setOpenDropdown(openDropdown === idx ? null : idx);
                    }}
                  >
                    ▶
                  </span>
                )}
              </div>

              {/* DROPDOWN MENU */}
              {item.dropdown && openDropdown === idx && (
                <div className="dropdown-menu">
                  {item.dropdown.map((sub, sIdx) => (
                    <NavLink
                      key={sIdx}
                      to={sub.link}
                      onClick={() => setSidebarOpen(false)}
                      className="dropdown-link"
                    >
                      {sub.name}
                    </NavLink>
                  ))}
                </div>
              )}

            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
