const bingeList = require("../../query/userBingeShow");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("query: ", req.query);
    const response = await bingeList.getListByUserFilter(req.query);
    res.json(response);
  } catch (error) {
    console.log("GET bingeList by user filter: ", error);
  }
});

module.exports = router;
