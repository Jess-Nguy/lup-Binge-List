const show = require("../../query/shows");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    console.log("BODY: ", body);
    const response = await show.insert(body);
    res.json(response);
  } catch (error) {
    console.log("POST Show: ", error);
  }
});

module.exports = router;
