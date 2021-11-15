const userrelations = require("../../query/userrelations");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("GET ", req.query);
    const response = await userrelations.fetchRelationsByUserId(req.query);
    res.json(response);
  } catch (error) {
    console.log("GET user relations by user id", req.query, ". \n", error);
  }
});

module.exports = router;
