const releationShows = require("../../query/relationshow");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    console.log("BODY: ", body);
    const response = await releationShows.insert(body);
    res.json(response);
  } catch (error) {
    console.log("POST Show relation: ", error);
  }
});

module.exports = router;
