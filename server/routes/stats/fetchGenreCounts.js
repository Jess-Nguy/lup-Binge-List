const express = require("express");
const router = express.Router();
const stats = require("../../query/stats");

router.get("/", async (req, res) => {
  try {
    const response = await stats.fetchGenreCounts(req.query.id);
    res.json(response.rows[0]);
  } catch (error) {
    console.log("GET genre counts: ", error);
  }
});

module.exports = router;
