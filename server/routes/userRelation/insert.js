const userrelations = require("../../query/userrelations");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("POST ", req.body);
    const response = await userrelations.insert(req.body);
    res.json(response);
  } catch (error) {
    console.log("POST user relations ", req.body, ". \n", error);
  }
});

module.exports = router;
