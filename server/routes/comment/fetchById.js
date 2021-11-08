const comments = require("../../query/comments");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("GET ", req.query.showId);
    const response = await comments.fetchByShow(req.query.showId);
    res.json(response);
  } catch (error) {
    console.log("GET comments ", req.query.showId, ". \n", error);
  }
});

module.exports = router;
