const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const users = require("../query/users");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, cb) => {
      const registerRole = "User";
      const email = profile.emails[0].value;
      let user = await users.findByEmail(email);
      const googleUser = {
        username: profile.displayName,
        email: email,
        google_id: profile.id,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        profile_image: profile.photos[0].value,
        role: registerRole,
      };

      if (user.rowCount > 0) {
        // Use changed user name for db update
        if (user.rows[0].username !== googleUser.username) {
          googleUser.username = user.rows[0].username;
        }
        user = await users.update(user.id, googleUser);
      } else {
        user = await users.insert(googleUser);
      }
      return cb(null, user.rows[0]);
    }
  )
);
