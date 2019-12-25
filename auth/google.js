const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../src/client/models/user.js");

passport.use(
  new GoogleStrategy(
    {
      //Options for google strat
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://bug-tracker.glitch.me/auth/google/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
      //Check if a user already exist
      User.findOne({ "google.id": profile.id }).then(currentUser => {
        if (currentUser) {
          //Already have the user
          console.log("Ladies and gentlemen we got em" + currentUser);
          cb(null, currentUser);
        } else {
          //If not create new user
          new User({
            provider: profile.provider,
            google: {
              id: profile.id,
              displayName: profile.displayName,
              email: profile.emails[0].value
            }
          })
            .save()
            .then(newUser => {
              console.log("new User created");
              cb(null, newUser);
            });
        }
      });
    }
  )
);
