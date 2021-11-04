const express = require("express");
const router = express.Router();
const user = require("../../query/users");

router.put("/", async (req, res) => {
  try {
    const response = await user.updateByUserId(req.body);
    res.json(response);
  } catch (error) {
    console.log("UPDATE user: ", error);
  }
});

module.exports = router;
