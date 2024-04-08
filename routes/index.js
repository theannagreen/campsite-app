var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.user) {
  res.render('index', { title: 'Home', user: req.user });
  } else {
  res.render('index', { title: 'Home' });
  }
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
  ));
  // Google OAuth callback route
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/campsites',
      failureRedirect: '/campsites'
    }
    ));
    // OAuth logout route
    router.get('/logout', function (req, res) {
      req.logout();
        res.redirect('/campsites');
      });

    module.exports = router;