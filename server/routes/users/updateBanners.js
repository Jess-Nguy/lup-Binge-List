const express = require("express");
const router = express.Router();
const user = require("../../query/users");

router.put("/", async (req, res) => {
  try {
    const response = await user.updateBanners(req.body);
    res.json(response);
  } catch (error) {
    console.log("UPDATE banners: ", error);
  }
});

module.exports = router;
