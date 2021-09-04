const express = require("express");
const router = express.Router();
const client = require("../../connection/pg");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const { user_name, email, timezone, user_role } = req.body;
    const user_password = bcrypt.hashSync(req.body.user_password, 10);
    const newUser = await client.query(
      `INSERT INTO users (user_name, user_password, email, timezone, user_role) VALUES('${user_name}','${user_password}','${email}', '${timezone}', '${user_role}') RETURNING *`
    );
    res.json(newUser);
  } catch (error) {
    console.log("Register: ", error);
  }
});

module.exports = router;
