const characters = require("../../query/characters");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await characters.fetchAllDropdown();
    res.json(response);
  } catch (error) {
    console.log("GET characters: ", error);
  }
});

module.exports = router;
