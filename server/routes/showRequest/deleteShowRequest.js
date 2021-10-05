const requestShows = require("../../query/requestshow");
const express = require("express");
const router = express.Router();

router.delete("/", async (req, res) => {
  try {
    const body = req.body;
    const response = await requestShows.delete(body.id);
    res.json(response);
  } catch (error) {
    console.log("DELETE Show request by ", body.id, " : ", error);
  }
});

module.exports = router;
