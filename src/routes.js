import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Energy from "./pages/services/Energy";
import Astrology from "./pages/services/Astrology";
import Vastu from "./pages/services/Vastu";
import Manifestation from "./pages/services/Manifestation";
import Material from "./pages/services/Material";
import ServiceDetails from "./pages/services/ServiceDetails";
import Blogs from "./pages/Blogs";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/energy" element={<Energy />} />
      <Route path="/Astrology" element={<Astrology />} />
      <Route path="/space-vastu" element={<SpaceVastu />} />
      <Route path="/manifestation" element={<Manifestation />} />
      <Route path="/material" element={<Material />} />
      <Route path="/service/:id" element={<ServiceDetails />} />
      <Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}
