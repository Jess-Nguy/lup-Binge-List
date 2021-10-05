const requestShows = require("../../query/requestshow");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    console.log("BODY: ", body);
    const response = await requestShows.insert(body);
    res.json(response);
  } catch (error) {
    console.log("POST Show request: ", error);
  }
});

module.exports = router;
