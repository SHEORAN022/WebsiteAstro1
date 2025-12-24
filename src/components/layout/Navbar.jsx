
// // import React, { useState, useRef, useEffect } from "react";
// // import "../../styles/Navbar.css";
// // import { Bell, User } from "lucide-react";

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const menuRef = useRef(null);

// //   // Close menu when clicked outside
// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (menuRef.current && !menuRef.current.contains(e.target)) {
// //         setMenuOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-right">

// //         {/* Notification */}
// //         {/* <div className="notif-box">
// //           <Bell className="notif-icon" />
// //           <span className="notif-dot"></span>
// //         </div> */}

// //         {/* Profile Icon */}
// //         <div
// //           className="profile-box"
// //           onClick={() => setMenuOpen(!menuOpen)}
// //           ref={menuRef}
// //         >
// //           <User className="profile-icon" />

// //           {/* Dropdown Menu */}
// //           {menuOpen && (
// //             <div className="profile-menu">
// //               <a href="user/profile">My Profile</a>
// //               <a href="user/kundli">My Kundli</a>
// //               {/* <a href="/orders">My Orders</a> */}
// //               <a href="user/bookings">My Bookings</a>
// //               <a href="/saved-reports">Saved Reports</a>

// //               {/* <a href="/matchmaking">Matchmaking</a> */}
// //             <a href="/user/wallet">My Wallet</a>
// //               <a href="/user/settings">Settings</a>

// //               <a href="/auth">Login / Logout</a>
// //             </div>
// //           )}
// //         </div>

// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useState, useRef, useEffect } from "react";
// import "../../styles/Navbar.css";
// import { Bell, User } from "lucide-react";
// import { useNavigate } from "react-router-dom";  // <-- IMPORTANT

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const menuRef = useRef(null);

//   const navigate = useNavigate(); // <-- IMPORTANT

//   // Close menu when clicked outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuRef.current && !menuRef.current.contains(e.target)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Redirect to Login Page
//   const handleLogin = () => {
//     navigate("/auth"); // <-- redirect works here
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-right">

//         {isLoggedIn && (
//           <div className="notif-box">
//             <Bell className="notif-icon" />
//             <span className="notif-dot"></span>
//           </div>
//         )}

//         {!isLoggedIn && (
//           <button className="login-btn" onClick={handleLogin}>
//             Login
//           </button>
//         )}

//         {isLoggedIn && (
//           <div
//             className="profile-box"
//             onClick={() => setMenuOpen(!menuOpen)}
//             ref={menuRef}
//           >
//             <User className="profile-icon" />

//             {menuOpen && (
//               <div className="profile-menu">
//                 <a href="/user/profile">My Profile</a>
//                 <a href="/user/kundli">My Kundli</a>
//                 <a href="/user/bookings">My Bookings</a>
//                 <a href="/saved-reports">Saved Reports</a>
//                 <a href="/user/wallet">My Wallet</a>
//                 <a href="/user/settings">Settings</a>

//                 <button onClick={handleLogout} className="logout-btn">
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         )}

//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// // import React, { useState, useRef, useEffect } from "react";
// // import "../../styles/Navbar.css";
// // import { Bell, User } from "lucide-react";
// // import { useNavigate } from "react-router-dom";

// // const Navbar = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const menuRef = useRef(null);
// //   const navigate = useNavigate();

// //   // Check login from localStorage
// //   useEffect(() => {
// //     const logged = localStorage.getItem("login");
// //     if (logged === "true") {
// //       setIsLoggedIn(true);
// //     }
// //   }, []);

// //   // Close menu when clicked outside
// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (menuRef.current && !menuRef.current.contains(e.target)) {
// //         setMenuOpen(false);
// //       }
// //     };
// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, []);

// //   // Login → Redirect + Save status
// //   // const handleLogin = () => {
// //   //   localStorage.setItem("login", "true"); // SAVE LOGIN
// //   //   navigate("/auth");
// //   // };
// //   const handleLogin = () => {
// //   navigate("/auth");   
// // };


// //   // Logout → Clear login
// //   const handleLogout = () => {
// //     localStorage.removeItem("login"); // REMOVE LOGIN
// //     setIsLoggedIn(false);
// //     setMenuOpen(false);
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-right">

// //         {/* {isLoggedIn && (
// //           <div className="notif-box">
// //             <Bell className="notif-icon" />
// //             <span className="notif-dot"></span>
// //           </div>
// //         )} */}

// //         {!isLoggedIn && (
// //           <button className="login-btn" onClick={handleLogin}>
// //             Login
// //           </button>
// //         )}

// //         {isLoggedIn && (
// //           <div
// //             className="profile-box"
// //             onClick={() => setMenuOpen(!menuOpen)}
// //             ref={menuRef}
// //           >
// //             <User className="profile-icon" />

// //             {menuOpen && (
// //               <div className="profile-menu">
// //                 <a href="/user/profile">My Profile</a>
// //                 <a href="/user/kundli">My Kundli</a>
// //                 <a href="/user/bookings">My Bookings</a>
// //                 <a href="/saved-reports">Saved Reports</a>
// //                 <a href="/user/wallet">My Wallet</a>
// //                 <a href="/user/settings">Settings</a>

// //                 <button onClick={handleLogout} className="logout-btn">
// //                   Logout
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         )}

// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;


import React, { useState, useRef, useEffect } from "react";
import "../../styles/Navbar.css";
import { Bell, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuRef = useRef(null);
  const navigate = useNavigate();

  // CHECK LOGIN STATUS FROM LOCAL STORAGE
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Redirect to login page
  const handleLogin = () => {
    navigate("/auth");
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("login");

    setIsLoggedIn(false);
    setMenuOpen(false);
    navigate("/auth");
  };

  return (
    <nav className="navbar">
      <div className="navbar-right">

        {/* NOTIFICATION ICON WHEN LOGGED IN */}
        {/* {isLoggedIn && (
          <div className="notif-box">
            <Bell className="notif-icon" />
            <span className="notif-dot"></span>
          </div>
        )} */}

        {/* LOGIN BUTTON */}
        {!isLoggedIn && (
          <button className="login-btn" onClick={handleLogin}>
            LOGIN
          </button>
        )}

        {/* PROFILE DROPDOWN */}
        {isLoggedIn && (
          <div
            className="profile-box"
            onClick={() => setMenuOpen(!menuOpen)}
            ref={menuRef}
          >
            <User className="profile-icon" />

            {menuOpen && (
            <div className="profile-menu">
              <div className="profile-menu-heading">
      INSIDE THE CUSP
    </div>
    <a href="/user/profile">My Profile</a>
    <a href="/user/kundli">My Kundli</a>
    <a href="/user/bookings">My Bookings</a>
    <a href="/saved-reports">Saved Reports</a>
    <a href="/user/wallet">My Wallet</a>

    <div className="menu-divider"></div>

    <a href="/user/remedy-journey">
      Remedies &amp; Alignment Tracker
    </a>

    <a href="/user/astro-chat">
      Ask a Follow-up Query (Chat / Written)
    </a>

    <a href="/user/learning-growth">
      My Learning &amp; Growth
    </a>
    <a href="/user/call-scheduling">
     Call Scheduling
    </a>

    <a href="/user/wealth-tools">
      My Wealth Tools
    </a>

    <div className="menu-divider"></div>

    <a href="/user/settings">Settings</a>

    <button onClick={handleLogout} className="logout-btn">
      Logout
    </button>
              </div>
            )}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
