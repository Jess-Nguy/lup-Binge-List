const comments = require("../../query/comments");
const express = require("express");
const router = express.Router();

router.delete("/", async (req, res) => {
  try {
    console.log("DELETE AT ", req.query.idComment);
    const response = await comments.delete(req.query.idComment);
    res.json(response);
  } catch (error) {
    console.log("Delete comments ", req.query.id, ". \n", error);
  }
});

module.exports = router;
