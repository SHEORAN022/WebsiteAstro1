// import React, { useState } from "react";
// const NumerologyReport = ({ report }) => {
//   const [showDesc, setShowDesc] = useState(true);

//   if (!report) return <p>No data available</p>;

//   // Helper function to handle multiple possible backend keys
//   const getValue = (obj, ...keys) => {
//     for (let key of keys) {
//       if (obj[key] !== undefined && obj[key] !== null) return obj[key];
//     }
//     return "-";
//   };

//   const name = getValue(report, "name", "fullName");
//   const dob = getValue(report, "dob", "dateOfBirth");
//   const lifePathNumber = getValue(report, "lifePathNumber", "life_path", "life_path_number");
//   const expressionNumber = getValue(report, "expressionNumber", "expression", "destinyNumber");
//   const soulUrgeNumber = getValue(report, "soulUrgeNumber", "soul_urge", "heart_desire");
//   const personalityNumber = getValue(report, "personalityNumber", "personality");
//   const description = getValue(report, "description", "details");

//   const fields = [
//     { label: "Name", value: name },
//     { label: "Date of Birth", value: dob },
//     { label: "Life Path Number", value: lifePathNumber },
//     { label: "Expression Number", value: expressionNumber },
//     { label: "Soul Urge Number", value: soulUrgeNumber },
//     { label: "Personality Number", value: personalityNumber },
//   ];

//   return (
//     <div className="report-container numerology-report">
//       <h2 className="report-title">🔢 Numerology Report</h2>

//       <div className="report-grid">
//         {fields.map((field, idx) => (
//           <div
//             key={idx}
//             className={`report-card report-card-${idx}`}
//             title={field.value === "-" ? "Data missing" : ""}
//           >
//             <span className="report-label">{field.label}</span>
//             <span className={`report-value ${field.value === "-" ? "missing" : ""}`}>
//               {field.value}
//             </span>
//           </div>
//         ))}
//       </div>

//       {description && (
//         <div className="report-description">
//           <h3
//             className="description-title"
//             onClick={() => setShowDesc((prev) => !prev)}
//             style={{ cursor: "pointer" }}
//           >
//             Details {showDesc ? "▲" : "▼"}
//           </h3>
//           {showDesc && <p className="description-text">{description}</p>}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NumerologyReport;
import React, { useState } from "react";

const NumerologyReport = ({ report }) => {
  const [showDesc, setShowDesc] = useState(true);

  if (!report) return <p>No data available</p>;

  // Helper: returns the first non-null/undefined value from a list of possible keys
  const getValue = (obj, ...keys) => {
    for (let key of keys) {
      if (obj[key] !== undefined && obj[key] !== null && obj[key] !== "") return obj[key];
    }
    return "-";
  };

  // Map backend keys correctly
  const name = getValue(report, "name");
  const dob = getValue(report, "dob");
  const lifePathNumber = getValue(report, "lifePath");
  const expressionNumber = getValue(report, "destiny");
  const soulUrgeNumber = getValue(report, "soulUrge");
  const personalityNumber = getValue(report, "personality");
  const description = getValue(report, "description");

  const fields = [
    { label: "Name", value: name },
    { label: "Date of Birth", value: dob },
    { label: "Life Path Number", value: lifePathNumber },
    { label: "Expression/Destiny Number", value: expressionNumber },
    { label: "Soul Urge Number", value: soulUrgeNumber },
    { label: "Personality Number", value: personalityNumber },
  ];

  return (
    <div className="report-container numerology-report">
      <h2 className="report-title">🔢 Numerology Report</h2>

      <div className="report-grid">
        {fields.map((field, idx) => (
          <div
            key={idx}
            className={`report-card report-card-${idx}`}
            title={field.value === "-" ? "Data missing" : ""}
          >
            <span className="report-label">{field.label}</span>
            <span className={`report-value ${field.value === "-" ? "missing" : ""}`}>
              {field.value}
            </span>
          </div>
        ))}
      </div>

      {description && description !== "-" && (
        <div className="report-description">
          <h3
            className="description-title"
            onClick={() => setShowDesc((prev) => !prev)}
            style={{ cursor: "pointer" }}
          >
            Details {showDesc ? "▲" : "▼"}
          </h3>
          {showDesc && <p className="description-text">{description}</p>}
        </div>
      )}
    </div>
  );
};

export default NumerologyReport;
