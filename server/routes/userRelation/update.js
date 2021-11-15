const userrelations = require("../../query/userrelations");
const express = require("express");
const router = express.Router();

router.put("/", async (req, res) => {
  try {
    console.log("PUT ", req.body);
    const response = await userrelations.update(req.body.idUserRelations);
    res.json(response);
  } catch (error) {
    console.log("PUT friend request accept ", req.body, ". \n", error);
  }
});

module.exports = router;
