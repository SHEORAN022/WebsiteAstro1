import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "../../styles/ManifestationCalendar.css"; // Custom styles

export default function ManifestationCalendar() {
  const [value, setValue] = useState(new Date());

  // Example: highlight important manifestation dates
  const importantDates = [
    new Date(2025, 11, 20),
    new Date(2025, 11, 25),
    new Date(2026, 0, 5),
  ];

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (importantDates.find(d => d.toDateString() === date.toDateString())) {
        return 'important-date';
      }
    }
  };

  return (
    <div className="manifestation-calendar-section">
      <h2>Manifestation Calendar</h2>
      <p>Use this calendar to track and plan your manifestation milestones.</p>
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={tileClassName}
      />
    </div>
  );
}
