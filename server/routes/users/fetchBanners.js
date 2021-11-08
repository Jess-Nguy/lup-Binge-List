const express = require("express");
const router = express.Router();
const user = require("../../query/users");

router.get("/", async (req, res) => {
  try {
    const response = await user.fetchBanners();
    console.log("RESPONSE BANNER: ", response);
    res.json(response);
  } catch (error) {
    console.log("GET banners: ", error);
  }
});

module.exports = router;
