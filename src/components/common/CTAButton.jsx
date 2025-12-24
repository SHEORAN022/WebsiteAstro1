import React from "react";
import { Link } from "react-router-dom";

const CTAButton = ({ label, link }) => (
  <Link
    to={link}
    className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-all"
  >
    {label}
  </Link>
);

export default CTAButton;
