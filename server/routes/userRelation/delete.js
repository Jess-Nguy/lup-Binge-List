const userrelations = require("../../query/userrelations");
const express = require("express");
const router = express.Router();

router.delete("/", async (req, res) => {
  try {
    console.log("DELETE AT ", req.query.id);
    const response = await userrelations.delete(req.query.id);
    res.json(response);
  } catch (error) {
    console.log("Delete user relation ", req.query.id, ". \n", error);
  }
});

module.exports = router;
