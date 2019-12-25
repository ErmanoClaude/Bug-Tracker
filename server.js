// server.js
import "babel-polyfill";
import express from "express";
import bodyParser from "body-parser";
import React from "react";
import mongoose from "mongoose";
import passport from "passport";
import cookieSession from "cookie-session";
import renderer from "./src/helpers/renderer.js";
import facebookAuth from "./auth/facebook.js";
import googleAuth from "./auth/google.js";
import User from "./src/client/models/user.js";

const app = express();
const Context = {};
export default Context;

//Body Parser for posting data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Setting life span of cookie to day
app.use(
  cookieSession({
    //max Age is one day
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);

//Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
  User.findById(id).then(user => {
    cb(null, user);
  });
});

//Anyone can access this file
app.use(express.static("build/public"));

//Connect to Mongodb mlab database
mongoose
  .connect(
    process.env.DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
      console.log("success we are connected to a database");
    }
  )
  .catch(error => {
    console.log(error);
  });
//Google Authentication
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/");
  }
);

//Facebook Authentication
app.get("/auth/facebook", passport.authenticate("facebook"));
app.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook"),
  (req, res) => {
    res.redirect("/");
  }
);
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

app.get("*", (req, res) => {
  const Context = {
    user: req.user
  };
  res.send(renderer(req, Context));
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
