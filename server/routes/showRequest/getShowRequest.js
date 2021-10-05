const requestShows = require("../../query/requestshow");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await requestShows.fetchUnprocessed();
    res.json(response);
  } catch (error) {
    console.log("GET unprocessed Show request: ", error);
  }
});

module.exports = router;
