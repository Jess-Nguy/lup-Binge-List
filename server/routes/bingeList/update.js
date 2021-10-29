const bingeList = require("../../query/userBingeShow");
const express = require("express");
const router = express.Router();

router.put("/", async (req, res) => {
  try {
    const body = req.body;
    console.log("BODY: ", body);
    const response = await bingeList.update(body);
    res.json(response);
  } catch (error) {
    console.log("PUT bingeList: ", error);
  }
});

module.exports = router;
