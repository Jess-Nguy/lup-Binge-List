const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const users = require("../query/users");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToke, profile, cb) => {
      const registerRole = "User";
      const email = profile.emails[0].value;
      console.log(email);
      let user = await users.findByEmail(email);
      console.log(profile);
      const googleUser = {
        username: profile.displayName,
        email: email,
        google_id: profile.id,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        profile_image: profile.photos[0].value,
        role: registerRole,
      };
      console.log("GOOGLE USER: ", googleUser);

      if (user.rowCount !== 0) {
        //update the user
        // googleUser.role = user.role;
        console.log("UPDATE USER HERE.... ", user);
        user = await users.update(user.id, googleUser);
      } else {
        user = await users.insert(googleUser);
      }
      return cb(new Error("Working on it..."));
    }
  )
);
