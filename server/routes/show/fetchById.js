const shows = require("../../query/shows");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const body = req.body;
    console.log("ID SHOW BODY: ", body);
    const response = await shows.fetchById(body.id);
    res.json(response);
  } catch (error) {
    console.log("GET shows: ", error);
  }
});

module.exports = router;
