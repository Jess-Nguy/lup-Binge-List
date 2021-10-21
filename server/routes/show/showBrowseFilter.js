const shows = require("../../query/shows");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("QUERY: ", req.query);
    const response = await shows.showBrowseFilter(req.query);
    res.json(response);
  } catch (error) {
    console.log("GET shows: ", error);
  }
});

module.exports = router;
