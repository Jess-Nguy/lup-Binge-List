const express = require("express");
const router = express.Router();
const stats = require("../../query/stats");

router.get("/", async (req, res) => {
  try {
    const response = await stats.fetchStatusCounts(req.query.id);
    res.json(response.rows[0]);
  } catch (error) {
    console.log("GET status counts: ", error);
  }
});

module.exports = router;
