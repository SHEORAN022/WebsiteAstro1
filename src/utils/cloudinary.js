// src/utils/cloudinary.js
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.REACT_APP_CLOUDINARY_API_KEY,
  api_secret: process.env.REACT_APP_CLOUDINARY_API_SECRET,
  secure: true,
});

// Helper function to generate Cloudinary URLs with options
export const getCloudinaryImage = (publicId, options = {}) => {
  return cloudinary.url(publicId, options);
};

// =======================
// Predefined project images
// =======================

export const Images = {
  // HOME / MAIN LANDING
  home: {
    aboutUs: getCloudinaryImage("about-astro_yybljn", { width: 800, crop: "fill" }),
    languages: {
      astrology: getCloudinaryImage("astrology_cq4x9v", { width: 400, crop: "fill" }),
      vastu: getCloudinaryImage("vastu-space_abc123", { width: 400, crop: "fill" }),
      numerology: getCloudinaryImage("numerology_xyz456", { width: 400, crop: "fill" }),
      energy: getCloudinaryImage("energy-reading_lmn789", { width: 400, crop: "fill" }),
      tarot: getCloudinaryImage("tarot-questions_pqr234", { width: 400, crop: "fill" }),
      manifestation: getCloudinaryImage("manifestation_align_def567", { width: 400, crop: "fill" }),
    },
    aboutYou: {
      laganCalculator: getCloudinaryImage("lagan-calculator_aaa111", { width: 400, crop: "fill" }),
      numerologyCalculator: getCloudinaryImage("numerology-calculator_bbb222", { width: 400, crop: "fill" }),
      loshuGrid: getCloudinaryImage("loshu-grid_ccc333", { width: 400, crop: "fill" }),
      personalityAssessment: getCloudinaryImage("personality-assessment_ddd444", { width: 400, crop: "fill" }),
      ikigai: getCloudinaryImage("ikigai_eee555", { width: 400, crop: "fill" }),
    },
    careers: getCloudinaryImage("careers_fgh666", { width: 800, crop: "fill" }),
    faqs: getCloudinaryImage("faqs_ijk777", { width: 800, crop: "fill" }),
    contact: getCloudinaryImage("contact_us_lmn888", { width: 800, crop: "fill" }),
  },

  // SERVICES / OTHER PAGES
  services: {
    energy: getCloudinaryImage("energy-service_001", { width: 800, crop: "fill" }),
    movement: getCloudinaryImage("movement-service_002", { width: 800, crop: "fill" }),
    spaceVastu: getCloudinaryImage("space-vastu-service_003", { width: 800, crop: "fill" }),
    manifestation: getCloudinaryImage("manifestation-service_004", { width: 800, crop: "fill" }),
    material: getCloudinaryImage("material-service_005", { width: 800, crop: "fill" }),
  },

  // BLOGS
  blogs: {
    blog1: getCloudinaryImage("blog1_001", { width: 600, crop: "fill" }),
    blog2: getCloudinaryImage("blog2_002", { width: 600, crop: "fill" }),
    blog3: getCloudinaryImage("blog3_003", { width: 600, crop: "fill" }),
  },
};

export default cloudinary;
