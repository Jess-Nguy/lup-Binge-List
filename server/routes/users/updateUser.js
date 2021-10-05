// NOT IN USE
const express = require("express");
const router = express.Router();
const user = require("../../query/user");

router.put("/", async (req, res) => {
  try {
    // const id = req.body.id;
    const { google_id, username, profile_image } = req.body;
    const response = await user.update(google_id);
    res.json(response);
  } catch (error) {
    console.log("UPDATE user: ", error);
  }
});

module.exports = router;
