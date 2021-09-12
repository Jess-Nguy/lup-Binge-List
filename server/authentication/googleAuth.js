var GoogleStrategy = require("passport-google-oauth20").Straegy;
// const user = require('.');
const cId = require("../config/googleData").clientId;
const secret = require("../config/googleData").clientSecret;

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientId: cId,
        clientSecret: secret,
        callbackURL: "http://localhost:5000/google/callback",
      },
      (accessToken, refreshToke, profile, done) => {
        console.log(profile.emails[0].value);

        // find if a user exist or not with SQL call
        // if user exist. update data
        // else. create new user
      }
    )
  );
};
