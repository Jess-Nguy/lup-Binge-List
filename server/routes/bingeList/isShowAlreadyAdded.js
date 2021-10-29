const bingeList = require("../../query/userBingeShow");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("query: ", req.query);
    const response = await bingeList.isShowAlreadyAdded(req.query);
    res.json(response);
  } catch (error) {
    console.log("GET bingeList: ", error);
  }
});

module.exports = router;
