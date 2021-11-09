// For Friends and getting timezone
const express = require("express");
const router = express.Router();
const user = require("../../query/users");

router.get("/", async (req, res) => {
  try {
    console.log("QUERY: ", req.query);
    const response = await user.fetchUserByFilter(req.query);
    res.json(response);
  } catch (error) {
    console.log("GET user by filter: ", error);
  }
});

module.exports = router;
