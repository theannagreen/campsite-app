const express = require('express');
const router = express.Router();
const passport = require('passport');

// Get home route
router.get('/', function(req, res, next) {
  if (req.user) {
    res.render('index', { title: 'Home', user: req.user });
  } else {
    res.render('index', { title: 'Home' });
  }
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

// Google OAuth callback route
router.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/', // redirect to hompage upon authenticating
  failureRedirect: '/login' // redirect to login on authentication failure 
}));

// Google OAuth Logout route
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
