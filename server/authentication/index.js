const passport = require("passport");
const express = require("express");
require("../passport/google");

const { create } = require("./utils");

const router = express.Router();

router.get("/isAdmin", async (req, res) => {
  if (req.user) {
    if (req.user.role_id === 1) {
      return res.json({
        isAdmin: true,
      });
    } else {
      return res.json({
        isAdmin: false,
      });
    }
  }
  res.json({ isAdmin: false });
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", async (err, user) => {
    if (err) {
      console.log("AUTH CALLBACK - ", err);
      return next(err);
    }
    try {
      const token = await create(user);
      res.redirect(`${process.env.CLIENT_REDIRECT}${token}`);
    } catch (error) {
      res.redirect(`${process.env.CLIENT_ERROR_REDIRECT}${error.message}`);
    }
  })(req, res, next);
});

module.exports = router;
