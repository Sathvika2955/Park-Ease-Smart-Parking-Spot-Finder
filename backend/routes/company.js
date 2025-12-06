const express = require("express");
const router = express.Router();
const Company = require("../models/company");
const authenticate = require("../middleware/authMiddleware");

// CREATE COMPANY
router.post("/create", authenticate, async (req, res) => {
  try {
    // debug: print headers and body so we can see what arrived
    console.log(">>> HEADERS:", req.headers);
    console.log(">>> BODY:", req.body);

    // defensive: avoid destructure crash when body is undefined
    const body = req.body || {};
    const { name, address, website } = body;

    if (!name) {
      return res.status(400).json({ success: false, error: "name is required in request body" });
    }

    const company = new Company({
      name,
      address,
      website,
    });

    await company.save();

    return res.json({
      success: true,
      message: "Company created successfully",
      data: company,
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});
// GET ALL COMPANIES
router.get("/all", authenticate, async (req, res) => {
  try {
    const companies = await Company.find();
    return res.json({
      success: true,
      data: companies,
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;