const express = require("express");
const router = express.Router();
const {
  getTotalRecords,
  getCVEs,
  getCVEById,
} = require("../controllers/cveController");

router.get("/total", getTotalRecords);
router.get("/", getCVEs);
router.get("/:id", getCVEById);

module.exports = router;
