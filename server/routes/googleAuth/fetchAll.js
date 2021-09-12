const express = require("express");
const router = express.Router();
const client = require("../../connection/pg");
const bcrypt = require("bcrypt");
const passport = require("passport");

console.log("passport: ", passport);
// console.log("passportLocal: ", passportLocal);
// console.log("passportlocal: ", passportlocal);
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/home");
  }
);

module.exports = router;
