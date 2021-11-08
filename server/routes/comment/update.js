const comments = require("../../query/comments");
const express = require("express");
const router = express.Router();

router.put("/", async (req, res) => {
  try {
    console.log("PUT ", req.body);
    const response = await comments.update(req.body);
    res.json(response);
  } catch (error) {
    console.log("PUT comments ", req.body, ". \n", error);
  }
});

module.exports = router;
