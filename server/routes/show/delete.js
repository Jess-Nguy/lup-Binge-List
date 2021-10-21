const shows = require("../../query/shows");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("DELETE AT ", req.query.id);
    const response = await shows.delete(req.query.id);
    res.json(response);
  } catch (error) {
    console.log("Delete show ", req.query.id, ". \n", error);
  }
});

module.exports = router;
