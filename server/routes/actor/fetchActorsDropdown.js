const actors = require("../../query/actors");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await actors.fetchAllDropdown();
    res.json(response);
  } catch (error) {
    console.log("GET actors: ", error);
  }
});

module.exports = router;
