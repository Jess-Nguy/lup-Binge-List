// For Friends and getting timezone
const express = require("express");
const router = express.Router();
const user = require("../../query/users");

router.get("/", async (req, res) => {
  try {
    const id = req.query.id;
    const response = await user.fetchById(id);
    res.json(response);
  } catch (error) {
    console.log("GET user by id_user: ", error);
  }
});

module.exports = router;
