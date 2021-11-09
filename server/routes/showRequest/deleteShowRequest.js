const requestShows = require("../../query/requestshow");
const express = require("express");
const router = express.Router();

router.delete("/", async (req, res) => {
  try {
    const id = req.query.id;
    const response = await requestShows.delete(id);
    res.json(response);
  } catch (error) {
    console.log("DELETE Show request by ", id, " : ", error);
  }
});

module.exports = router;
