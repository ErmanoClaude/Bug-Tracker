const passport = require("passport");
const FacebookStrategy = require("passport-facebook");
const User = require("../src/client/models/user.js");

passport.use(
  new FacebookStrategy(
    {
      //Options for facebook strategy
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "https://bug-tracker.glitch.me/auth/facebook/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
      const picture = `https://graph.facebook.com/${profile.id}/picture?width=200&height=200&access_token=${accessToken}`;
      //check if a user already exist
      User.findOne({ "facebook.id": profile.id }).then(currentUser => {
        if (currentUser) {
          //if user already exist call cb
          cb(null, currentUser);
        } else {
          //if we can't find user make new user
          new User({
            provider: profile.provider,
            facebook: {
              id: profile.id,
              displayName: profile.displayName
            }
          })
            .save()
            .then(newUser => {
              console.log("this is the user we made broslap");
              cb(null, newUser);
            });
        }
      });
    }
  )
);
