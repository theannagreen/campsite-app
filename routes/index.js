const express = require('express');
const router = express.Router();
const passport = require('passport');
const Campsite = require('../models/campsite');

// Get home route
router.get('/', async function(req, res, next) {
  if (req.user) {
    const campsites = await Campsite.find();
    res.render('campsites/index', { title: 'All Campsites', campsites, user: req.user }); return
  } else {
    res.render('index', { title: 'Home', user: req.user });
  }
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate('google', {
  successRedirect: '/campsites', // redirect to campsite upon authenticating
  failureRedirect: '/login' // redirect to login on authentication failure 
}));

// Google OAuth Logout route
router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
});


module.exports = router;
