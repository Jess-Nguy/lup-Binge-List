const bingeList = require("../../query/userBingeShow");
const express = require("express");
const router = express.Router();

router.delete("/", async (req, res) => {
  try {
    console.log("DELETE AT ", req.query.id);
    const response = await bingeList.delete(req.query.id);
    res.json(response);
  } catch (error) {
    console.log("Delete bingeList ", req.query.id, ". \n", error);
  }
});

module.exports = router;
