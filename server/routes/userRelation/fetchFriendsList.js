const userrelations = require("../../query/userrelations");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("GET ", req.query.id);
    const response = await userrelations.fetchFriendsList(req.query.id);
    res.json(response);
  } catch (error) {
    console.log("GET friends list ", req.query, ". \n", error);
  }
});

module.exports = router;
