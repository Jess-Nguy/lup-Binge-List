const comments = require("../../query/comments");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("POST ", req.body);
    const response = await comments.insert(req.body);
    res.json(response);
  } catch (error) {
    console.log("POST comments ", req.body, ". \n", error);
  }
});

module.exports = router;
