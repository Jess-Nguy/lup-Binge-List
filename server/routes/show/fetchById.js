const shows = require("../../query/shows");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await shows.fetchById(req.query.id);
    res.json(response);
  } catch (error) {
    console.log("GET shows: ", error);
  }
});

module.exports = router;
