const express = require("express");
const router = express.Router();
const client = require("../../../connection/pg");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { username, email, timezone } = req.body;
    const password = bcrypt.hashSync(req.body.password, 10);
    const newUser = await client.query(
      `INSERT INTO users (user_name,user_password,email,timezone) VALUES ('${username}','${password}','${email}', '${timezone}') RETURNING *`
    );
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
