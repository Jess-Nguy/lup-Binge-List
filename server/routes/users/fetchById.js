// For Friends. Not in use yet.
const express = require("express");
const router = express.Router();
const user = require("../../query/user");

router.get("/", async (req, res) => {
  try {
    const body = req.body;
    const response = await user.fetchById(body.id);
    res.json(response);
  } catch (error) {
    console.log("GET user by id: ", error);
  }
});
