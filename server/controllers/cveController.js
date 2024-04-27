const CVE = require("../models/CVE");

exports.getTotalRecords = async (req, res) => {
  try {
    const count = await CVE.countDocuments();
    res.json({ total: count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCVEs = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const cves = await CVE.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    res.json(cves);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCVEById = async (req, res) => {
  try {
    const cve = await CVE.findById(req.params.id);
    if (!cve) res.status(404).json({ message: "CVE not found" });
    res.json(cve);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
