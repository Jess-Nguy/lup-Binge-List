const bingeList = require("../../query/userBingeShow");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const body = req.body;
    console.log("BODY: ", body);
    const response = await bingeList.insert(body);
    res.json(response);
  } catch (error) {
    console.log("POST bingeList: ", error);
  }
});

module.exports = router;
