// routes/project.js
const express = require("express");
const router = express.Router();

/**
 * GET /api/project/description
 * Returns a short description of the project.
 */
router.get("/description", (req, res) => {
  return res.json({
    success: true,
    data: {
      name: "Smart Parking Management System",
      short: "A full-stack system for managing parking slots, users and admin controls.",
      features: [
        "User registration & login (JWT auth)",
        "Role-based access (user / admin)",
        "Company & Slot management",
        "APIs for creating & listing data"
      ],
      techStack: ["Node.js", "Express", "MongoDB Atlas", "Mongoose", "JWT"]
    }
  });
});

/**
 * GET /api/project/status
 * Returns the written/completion status of the project.
 */
router.get("/status", (req, res) => {
  return res.json({
    success: true,
    data: {
      writtenStatus: "In progress",
      percentComplete: 65,               // example numeric progress
      nextTasks: [
        "Seed parking slots and test slot APIs",
        "Connect frontend login & admin pages",
        "Add slot booking endpoints",
        "Add deployment scripts"
      ],
      lastUpdated: "2025-12-10"          // update as appropriate
    }
  });
});

module.exports = router;
