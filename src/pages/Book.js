// // import React, { useState } from "react";
// // import "../styles/Book.css";

// // const Book = () => {
// //   const [formData, setFormData] = useState({ name:"", email:"", phone:"", service:"", date:"", time:"",place: ""  });

// //   const handleChange = (e) => {
// //     setFormData({...formData, [e.target.name]: e.target.value});
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert(`Thank you, ${formData.name}! Your ${formData.service} is booked for ${formData.date} at ${formData.time}.`);
// //   };

// //   return (
// //     <div className="book-container">
// //       <h1>Book Your Reading</h1>
// //       <form onSubmit={handleSubmit}>
// //         <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
// //         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
// //         <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
// //         <input type="text" name="place" placeholder="Your City / Place" value={formData.place} onChange={handleChange} required />
// //         <select name="service" value={formData.service} onChange={handleChange} required>
// //           <option value="">Select Service</option>
// //           <option value="Astrology">Astrology</option>
// //           <option value="Tarot Reading">Tarot Reading</option>
// //           <option value="Energy Reading">Energy Reading</option>
// //           <option value="Manifestation">Manifestation</option>
// //         </select>
// //         <input type="date" name="date" value={formData.date} onChange={handleChange} required />
// //         <input type="time" name="time" value={formData.time} onChange={handleChange} required />
// //         <button type="submit">Book Now</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Book;

// // import React, { useState } from "react";
// // import "../styles/Book.css";

// // const Book = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     date: "",
// //     time: "",
// //     place: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     alert(
// //       `Thank you, ${formData.name}! Your ${formData.service} reading is booked for ${formData.date} at ${formData.time}.`
// //     );
// //   };

// //   return (
// //     <>
// //       {/* BACKGROUND LAYERS */}
// //       <div className="stars-bg"></div>
// //       <div className="orb orb1"></div>
// //       <div className="orb orb2"></div>
// //       <div className="orb orb3"></div>

// //       <div className="book-container">
// //         <h1>Book Your Reading</h1>

// //         <form onSubmit={handleSubmit}>
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Your Name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //           />

// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email Address"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //           />

// //           <input
// //             type="tel"
// //             name="phone"
// //             placeholder="Phone Number"
// //             value={formData.phone}
// //             onChange={handleChange}
// //           />

// //           <input
// //             type="text"
// //             name="place"
// //             placeholder="Your City / Place"
// //             value={formData.place}
// //             onChange={handleChange}
// //             required
// //           />

// //           <select
// //             name="service"
// //             value={formData.service}
// //             onChange={handleChange}
// //             required
// //           >
// //             <option value="">Select Service</option>
// //             <option value="Astrology">Astrology</option>
// //             <option value="Tarot Reading">Tarot Reading</option>
// //             <option value="Energy Reading">Energy Reading</option>
// //             <option value="Manifestation">Manifestation</option>
// //           </select>

// //           <input
// //             type="date"
// //             name="date"
// //             value={formData.date}
// //             onChange={handleChange}
// //             required
// //           />

// //           <input
// //             type="time"
// //             name="time"
// //             value={formData.time}
// //             onChange={handleChange}
// //             required
// //           />

// //           <button type="submit">Book Now</button>
// //         </form>
// //       </div>
// //     </>
// //   );
// // };

// // export default Book;

// import React, { useEffect, useState } from "react";
// import "../styles/Book.css";

// const Book = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     date: "",
//     time: "",
//     place: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(
//       `Thank you, ${formData.name}! Your ${formData.service} reading is booked for ${formData.date} at ${formData.time}.`
//     );
//   };

//   /* ⭐ AUTO-GENERATE STARS (same as home page) */
//   useEffect(() => {
//     let container = document.querySelector(".book-stars");

//     if (container && container.childElementCount === 0) {
//       for (let i = 0; i < 120; i++) {
//         let star = document.createElement("div");
//         star.className = "star";

//         star.style.top = Math.random() * 100 + "%";
//         star.style.left = Math.random() * 100 + "%";
//         star.style.animationDuration = 2 + Math.random() * 3 + "s";

//         container.appendChild(star);
//       }
//     }
//   }, []);

//   return (
//     <div className="book-page">

//       {/* ⭐ STARS LIKE HOME PAGE */}
//       <div className="book-stars"></div>

//       {/* ⭐ BOOK FORM */}
//       <div className="book-container">
//         <h1>Book Your Reading</h1>

//         <form onSubmit={handleSubmit}>
//           <input name="name" placeholder="Your Name" required onChange={handleChange} />
//           <input name="email" placeholder="Email Address" required onChange={handleChange} />
//           <input name="phone" placeholder="Phone Number" onChange={handleChange} />
//           <input name="place" placeholder="Your City / Place" required onChange={handleChange} />

//           <select name="service" required onChange={handleChange}>
//             <option value="">Select Service</option>
//             <option>Astrology</option>
//             <option>Tarot Reading</option>
//             <option>Energy Reading</option>
//             <option>Manifestation</option>
//           </select>

//           <input type="date" name="date" required onChange={handleChange} />
//           <input type="time" name="time" required onChange={handleChange} />

//           <button type="submit">Book Now</button>
//         </form>
//       </div>

//     </div>
//   );
// };

// export default Book;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";   // ⭐ Added for Back Button
import "../styles/Book.css";

const Book = () => {
  const navigate = useNavigate(); // ⭐ Back Navigation

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    place: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your ${formData.service} reading is booked for ${formData.date} at ${formData.time}.`
    );
  };

  /* ⭐ AUTO-GENERATE STARS */
  useEffect(() => {
    let container = document.querySelector(".book-stars");

    if (container && container.childElementCount === 0) {
      for (let i = 0; i < 120; i++) {
        let star = document.createElement("div");
        star.className = "star";

        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        star.style.animationDuration = 2 + Math.random() * 3 + "s";

        container.appendChild(star);
      }
    }
  }, []);

  return (
    <div className="book-page">

      {/* ⭐ BACK BUTTON */}
      <button 
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      {/* ⭐ STARS BACKGROUND */}
      <div className="book-stars"></div>

      {/* ⭐ BOOK FORM */}
      <div className="book-container">
        <h1>Book Your Reading</h1>

        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" required onChange={handleChange} />
          <input name="email" placeholder="Email Address" required onChange={handleChange} />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <input name="place" placeholder="Your City / Place" required onChange={handleChange} />

          <select name="service" required onChange={handleChange}>
            <option value="">Select Service</option>
            <option>Astrology</option>
            <option>Tarot Reading</option>
            <option>Energy Reading</option>
            <option>Manifestation</option>
          </select>

          <input type="date" name="date" required onChange={handleChange} />
          <input type="time" name="time" required onChange={handleChange} />

          <button type="submit">Book Now</button>
        </form>
      </div>

    </div>
  );
};

export default Book;
