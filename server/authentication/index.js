const express = require("express");
const passport = require("passport");
require("../passport/google");

const router = express.Router();

console.log("passport: ", passport);
// console.log("passportLocal: ", passportLocal);
// console.log("passportlocal: ", passportlocal);
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
  res.redirect("/home");
});

// router.get('/google/callback', (req, res, next) => {
//   passport.authenticate('google', async (err, user) => {
//     if (err) { return next(err); }
//     try {
//       console.log('creating token with', user);

//       const token = await create(user);
//       res.redirect(`${process.env.CLIENT_REDIRECT}${token}`);
//     } catch (error) {
//       res.redirect(`${process.env.CLIENT_ERROR_REDIRECT}${error.message}`);
//     }
//   })(req, res, next);
// });

module.exports = router;
