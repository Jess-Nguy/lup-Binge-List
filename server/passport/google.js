const passport = require("passport");

var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToke, profile, cb) => {
      // console.log(profile.emails[0].value);
      console.log(profile);
      return cb(new Error("Working on it..."));
      // find if a user exist or not with SQL call
      // if user exist. update data
      // else. create new user
    }
  )
);
